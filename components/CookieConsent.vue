<template>
  <!-- Cookie Banner -->
  <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 bg-white p-4 border-t z-50">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="space-y-2">
          <p class="text-xs text-gray-600 max-w-3xl">
            We use cookies to ensure our partners are properly credited when you visit gaming sites. This is essential for our service operation and partner payments. We also use analytics cookies to improve our service.
          </p>
          <p class="text-xs text-gray-500">
            Read our 
            <NuxtLink to="/compliance/cookies" class="underline hover:text-gray-700">Cookie Policy</NuxtLink>
            and
            <NuxtLink to="/compliance/privacy" class="underline hover:text-gray-700">Privacy Policy</NuxtLink>
            for more information.
          </p>
        </div>
        <div class="flex gap-2">
          <button 
            class="bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded text-xs"
            @click="handleAcceptAll"
          >
            Accept All
          </button>
          <button 
            class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-xs"
            @click="handleDeclineAll"
          >
            Decline Optional Cookies
          </button>
          <button 
            class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-xs"
            @click="handleOpenPreferences"
          >
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Cookie Preferences Modal - Always mounted, shown based on isPreferencesOpen -->
  <Teleport to="body">
    <div v-if="isPreferencesOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div class="bg-white rounded-lg p-6 max-w-xl w-full mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-sm font-normal text-gray-900">
            Cookie Preferences
          </h2>
          <button @click="isPreferencesOpen = false" class="text-gray-400 hover:text-gray-600 text-sm">
            ✕
          </button>
        </div>
        
        <div class="space-y-6">
          <div v-for="category in cookieCategories" :key="category.id" class="space-y-1">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-medium text-gray-900">{{ category.label }}</h4>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="preferences[category.id]"
                  :disabled="category.required"
                  class="sr-only peer"
                >
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer 
                           peer-checked:after:translate-x-full peer-checked:after:border-white 
                           after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                           after:bg-white after:border-gray-300 after:border after:rounded-full 
                           after:h-4 after:w-4 after:transition-all peer-checked:bg-black">
                </div>
              </label>
            </div>
            <p class="text-xs text-gray-500">{{ category.description }}</p>
          </div>

          <div class="text-xs text-gray-500 mb-4">
            For more information about how we use cookies, please read our 
            <NuxtLink to="/compliance/cookies" class="underline hover:text-gray-700">Cookie Policy</NuxtLink>
            and
            <NuxtLink to="/compliance/privacy" class="underline hover:text-gray-700">Privacy Policy</NuxtLink>.
          </div>

          <button 
            class="w-full bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded text-xs"
            @click="savePreferences"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useCookieConsent } from '~/composables/useCookieConsent';

const {
  showBanner,
  isPreferencesOpen,
  preferences,
  cookieCategories,
  handleAcceptAll,
  handleDeclineAll,
  savePreferences,
  handleOpenPreferences
} = useCookieConsent();
</script>
