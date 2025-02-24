import { ref, onMounted, watch } from 'vue';
import { PP_LOBBY_LINK, getCookie, setCookie } from './globalData';

// Create global reactive state
const globalShowBanner = ref(false);
const globalPreferences = ref({
  necessary: true,
  analytics: true,
  affiliate: true
});
const globalIsPreferencesOpen = ref(false);
const hasUserMadeChoice = ref(false);

export function useCookieConsent() {
  const showBanner = globalShowBanner;
  const isPreferencesOpen = globalIsPreferencesOpen;
  const pendingTracker = ref(null);
  
  const regLink = ref('');
  const loginLink = ref('');
  const playLink = ref('');
  
  const preferences = globalPreferences;

  const cookieCategories = [
    {
      id: 'necessary',
      label: 'Necessary Cookies',
      description: 'Essential for website functionality. These cookies are required and cannot be disabled.',
      required: true
    },
    {
      id: 'analytics',
      label: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website. These cookies collect anonymous information.',
      required: false
    },
    {
      id: 'affiliate',
      label: 'Affiliate Tracking',
      description: 'Essential for our business operations. We use a unique identifier stored for 30 days to credit our partners when you visit gaming sites. No personal data is collected.',
      required: true
    }
  ];

  const getTrackerFromURL = () => {
    if (typeof window === 'undefined') return null;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('tracker');
  };

  const updateLobbyLinks = (tracker) => {
    const urlParams = new URLSearchParams(window.location.search);
    const btag = urlParams.get('btag');
    const affid = urlParams.get('affid');
    
    // Always check URL for tracker first
    let finalTracker = urlParams.get('tracker');
    
    // If no URL tracker, use passed tracker or cookie tracker (always, since it's necessary)
    if (!finalTracker) {
        finalTracker = tracker || getCookie('affiliateTracker');
    }
    
    // Build query string with all available parameters
    let queryParams = [];
    if (finalTracker) queryParams.push(`tracker=${finalTracker}`);
    if (btag) queryParams.push(`btag=${btag}`);
    if (affid) queryParams.push(`affid=${affid}`);
    
    const queryString = queryParams.join('&');
    const queryStringWithQuestionMark = queryString ? `?${queryString}` : '';
    
    regLink.value = `${PP_LOBBY_LINK}${queryStringWithQuestionMark}#registration`;
    loginLink.value = `${PP_LOBBY_LINK}${queryStringWithQuestionMark}#login`;
    playLink.value = `${PP_LOBBY_LINK}${queryStringWithQuestionMark}#play/`;
  };

  const setAffiliateTracking = (tracker) => {
    // Since affiliate tracking is now necessary, we don't check for consent
    if (!tracker) {
        updateLobbyLinks(null);
        return;
    }
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    document.cookie = `affiliateTracker=${tracker}; max-age=${30*24*60*60}; path=/; SameSite=Strict; Secure`;
    updateLobbyLinks(tracker);
  };

  const clearAnalyticsCookies = () => {
    if (typeof document === 'undefined') return;
    
    // List of Google Analytics cookies to remove
    const gaCookies = ['_ga', '_gid', '_gat', '_ga_', 'AMP_TOKEN', '_gac_'];
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      // Check if cookie starts with any of the GA prefixes
      if (gaCookies.some(prefix => name.startsWith(prefix))) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      }
    });

    // Clear GA items from localStorage
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('_ga') || key.startsWith('ga:')) {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.warn('Failed to clear GA localStorage items:', e);
    }
  };

  const handleAnalytics = (enabled) => {
    if (typeof window === 'undefined') return;
    
    // Check Do Not Track setting
    const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    if (dnt === "1" || dnt === "yes") {
      enabled = false;
    }

    // If analytics is disabled, clear all analytics-related storage
    if (!enabled) {
      // Clear analytics cookies
      const cookies = document.cookie.split(';')
        .map(cookie => cookie.split('=')[0].trim())
        .filter(name => name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat') || name.startsWith('_dc_gtm'));

      cookies.forEach(name => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      });

      // Clear analytics localStorage items
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('_ga') || key.startsWith('ga:')) {
          localStorage.removeItem(key);
        }
      });

      // Remove GTM/GA objects
      delete window.ga;
      delete window.google_tag_manager;
      delete window.google_tag_data;
      delete window._gaq;
      delete window.gaData;
      delete window.gaGlobal;

      // Reset dataLayer to initial state
      if (window.dataLayer) {
        const initialConfig = window.dataLayer[0];
        window.dataLayer = [initialConfig];
      }
    } else {
      // Analytics is enabled, initialize GTM and GA
      if (window.dataLayer) {
        // First update consent state
        window.dataLayer.push({
          'event': 'consent_update',
          'analytics_storage': 'granted',
          'ad_storage': 'granted',
          'functionality_storage': 'granted',
          'personalization_storage': 'granted',
          'security_storage': 'granted'
        });

        // Then initialize GTM if user has made a choice
        if (hasUserMadeChoice.value && window.initializeGTM) {
          window.initializeGTM();
        }

        // Push page view event after initialization
        window.dataLayer.push({
          'event': 'pageview',
          'page_path': window.location.pathname,
          'page_title': document.title
        });
      }
    }
  };

  const clearNonEssentialCookies = () => {
    if (typeof document === 'undefined') return;
    
    // Only keep PHPSESSID and affiliateTracker (now a necessary cookie)
    const cookiesToKeep = ['PHPSESSID', 'affiliateTracker'];
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!cookiesToKeep.includes(name)) {
        // Remove cookie from all possible domains and paths
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      }
    });

    // Also clear any Google Analytics or GTM cookies
    const gaAndGtmCookies = document.cookie.split(';')
      .map(cookie => cookie.split('=')[0].trim())
      .filter(name => name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat') || name.startsWith('_dc_gtm'));

    gaAndGtmCookies.forEach(name => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
    });
  };

  const saveToLocalStorage = (prefs) => {
    if (!hasUserMadeChoice.value) return;
    
    // Only clear cookies if user has explicitly declined analytics
    if (!prefs.analytics) {
      clearNonEssentialCookies();
    }

    localStorage.setItem('cookieConsent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }));

    // Always handle affiliate tracking since it's necessary
    const urlTracker = getTrackerFromURL();
    const trackerToUse = urlTracker || pendingTracker.value;
    if (trackerToUse) {
      setAffiliateTracking(trackerToUse);
    } else {
      const existingTracker = getCookie('affiliateTracker');
      updateLobbyLinks(existingTracker);
    }

    handleAnalytics(prefs.analytics);
  };

  const handleAcceptAll = () => {
    hasUserMadeChoice.value = true;
    const allAccepted = {
      necessary: true,
      analytics: true,
      affiliate: true
    };
    preferences.value = allAccepted;
    
    // First save preferences to localStorage
    saveToLocalStorage(allAccepted);
    
    // Then explicitly handle analytics initialization
    handleAnalytics(true);
    
    showBanner.value = false;
  };

  const clearAllStorage = () => {
    if (typeof window === 'undefined') return;
    
    // Clear cookies
    const cookiesToKeep = ['PHPSESSID', 'affiliateTracker'];
    const cookies = document.cookie.split(';');

    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!cookiesToKeep.includes(name)) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      }
    });

    // Clear localStorage except for essential items
    const localStorageKeep = ['cookieConsent'];
    Object.keys(localStorage).forEach(key => {
      if (!localStorageKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });

    // Clear sessionStorage completely
    sessionStorage.clear();

    // Clear any Google Analytics or GTM data
    if (window.dataLayer) {
      // Keep only the initial dataLayer configuration
      const initialConfig = window.dataLayer[0];
      window.dataLayer = [initialConfig];
    }

    // Remove any Google Analytics objects
    delete window.ga;
    delete window.google_tag_manager;
    delete window.google_tag_data;
    delete window._gaq;
    delete window.gaData;
    delete window.gaGlobal;
  };

  const handleDeclineAll = () => {
    hasUserMadeChoice.value = true;
    const allDeclined = {
      necessary: true,
      analytics: false,
      affiliate: true
    };
    preferences.value = allDeclined;
    clearAllStorage();
    saveToLocalStorage(allDeclined);
    showBanner.value = false;
  };

  const savePreferences = () => {
    hasUserMadeChoice.value = true;
    const finalPreferences = {
      ...preferences.value,
      necessary: true,
      affiliate: true  // Always keep affiliate tracking enabled
    };
    preferences.value = finalPreferences;
    saveToLocalStorage(finalPreferences);
    showBanner.value = false;
    isPreferencesOpen.value = false;
  };

  const handleOpenPreferences = () => {
    isPreferencesOpen.value = true;
    if (!localStorage.getItem('cookieConsent')) {
      preferences.value = {
        necessary: true,
        analytics: true,
        affiliate: true
      };
    } else {
      try {
        const { preferences: savedPreferences } = JSON.parse(localStorage.getItem('cookieConsent'));
        preferences.value = {
          ...savedPreferences,
          necessary: true,
          affiliate: true  // Always keep affiliate tracking enabled
        };
      } catch (e) {
        preferences.value = {
          necessary: true,
          analytics: true,
          affiliate: true
        };
      }
    }
  };

  const getConsentStatus = () => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) return null;
    
    try {
      return JSON.parse(savedConsent);
    } catch (e) {
      return null;
    }
  };

  const withdrawConsent = () => {
    clearAllStorage();
    localStorage.removeItem('cookieConsent');
    preferences.value = {
      necessary: true,
      analytics: false,
      affiliate: true
    };
    updateLobbyLinks(null);
    showBanner.value = true;
  };

  onMounted(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    
    if (savedConsent) {
      try {
        const { preferences: savedPreferences } = JSON.parse(savedConsent);
        hasUserMadeChoice.value = true;
        preferences.value = {
          ...savedPreferences,
          necessary: true,
          affiliate: true
        };
        
        // Only handle affiliate tracking if consent exists and user has made a choice
        if (savedPreferences.affiliate && hasUserMadeChoice.value) {
          const urlTracker = getTrackerFromURL();
          if (urlTracker) {
            setAffiliateTracking(urlTracker);
          } else {
            const existingTracker = getCookie('affiliateTracker');
            updateLobbyLinks(existingTracker);
          }
        } else {
          updateLobbyLinks(null);
        }

        handleAnalytics(savedPreferences.analytics);
        
        showBanner.value = false;
      } catch (e) {
        console.error('Error parsing saved consent:', e);
        hasUserMadeChoice.value = false;
        preferences.value = {
          necessary: true,
          analytics: true,
          affiliate: true
        };
        showBanner.value = true;
        updateLobbyLinks(null);
      }
    } else {
      // First visit - set default preferences to all enabled but don't apply them yet
      hasUserMadeChoice.value = false;
      preferences.value = {
        necessary: true,
        analytics: true,
        affiliate: true
      };
      updateLobbyLinks(null);
      showBanner.value = true;
    }
  });

  // Add watch effect for preferences changes
  watch(preferences, (newPrefs) => {
    if (typeof window === 'undefined') return;
    
    // Update all necessary state when preferences change
    saveToLocalStorage(newPrefs);
    handleAnalytics(newPrefs.analytics);
    
    if (newPrefs.affiliate) {
      const urlTracker = getTrackerFromURL();
      const trackerToUse = urlTracker || pendingTracker.value;
      if (trackerToUse) {
        setAffiliateTracking(trackerToUse);
      } else {
        const existingTracker = getCookie('affiliateTracker');
        updateLobbyLinks(existingTracker);
      }
    } else {
      updateLobbyLinks(null);
    }
  }, { deep: true });

  return {
    showBanner,
    isPreferencesOpen,
    preferences,
    cookieCategories,
    handleAcceptAll,
    handleDeclineAll,
    savePreferences,
    handleOpenPreferences,
    withdrawConsent,
    getConsentStatus,
    regLink,
    loginLink,
    playLink
  };
} 