<template>
  <div class="container mx-auto px-4 py-8 bg-primary_bg text-primary pt-24">
    <h1 class="text-3xl font-bold mb-6">Cookie Policy</h1>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">What Are Cookies?</h2>
      <p class="mb-4">
        Cookies are small text files that are stored on your device when you visit our website.
        They help make your browsing experience better and provide us with insights to improve our service.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
      
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Necessary Cookies</h3>
        <p class="mb-2">These cookies are essential for the website to function properly.</p>
        <ul class="list-disc ml-6 mb-4">
          <li>
            <strong>PHPSESSID:</strong> Session cookie for basic website functionality
            <br>
            <span class="text-primary/70">Duration: Session</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Affiliate Tracking Cookies</h3>
        <p class="mb-2">Used to credit our partners when you visit gaming sites.</p>
        <ul class="list-disc ml-6 mb-4">
          <li>
            <strong>affiliateTracker:</strong> Stores a unique identifier for affiliate tracking
            <br>
            <span class="text-primary/70">Duration: 30 days</span>
            <br>
            <span class="text-primary/70">Purpose: Business operations and partner payments</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Analytics Cookies (Optional)</h3>
        <p class="mb-2">Help us understand how visitors use our website.</p>
        <ul class="list-disc ml-6 mb-4">
          <li>
            <strong>Analytics cookies:</strong> Anonymous usage statistics
            <br>
            <span class="text-primary/70">Duration: Varies</span>
            <br>
            <span class="text-primary/70">Purpose: Website improvement and user experience optimization</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
      <p class="mb-4">You can manage your cookie preferences in several ways:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Using our cookie consent banner when you first visit the site</li>
        <li>Clicking the "Manage Cookies" button below to update your preferences</li>
        <li>Through your browser settings (note: this might affect website functionality)</li>
      </ul>
      
      <button 
        @click="handleOpenPreferences"
        class="bg-secondary hover:bg-secondary/90 text-primary px-6 py-2 rounded text-sm transition-colors"
      >
        Manage Cookies
      </button>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Do Not Track</h2>
      <p class="mb-4">
        We respect the "Do Not Track" browser setting. If enabled, we will not set any analytics
        cookies, even if you've previously consented to them.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Updates to This Policy</h2>
      <p class="mb-4">
        We may update this cookie policy as we add or remove features from our website.
        Any changes will be reflected on this page.
      </p>
      <p class="text-sm text-primary/70">Last updated: {{ new Date().toLocaleDateString() }}</p>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { useCookieConsent } from '~/composables/useCookieConsent'

const { isPreferencesOpen, handleOpenPreferences } = useCookieConsent()

useHead({
  title: 'Cookie Policy - Dukes Casino',
  meta: [
    {
      name: 'description',
      content: 'Learn about how we use cookies and manage your preferences.'
    }
  ]
})
</script> 