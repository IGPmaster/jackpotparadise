<template>
  <button 
    @click="handleOpenPreferences"
    :class="[
      buttonStyle === 'text' 
        ? 'border-gray-200 cursor-pointer uppercase border px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-50' 
        : 'bg-secondary hover:bg-secondary/90 text-primary px-4 py-1.5 rounded text-sm',
      'transition-colors'
    ]"
  >
    {{ buttonText || 'Cookie Settings' }}
  </button>
</template>

<script setup>
import { useCookieConsent } from '~/composables/useCookieConsent'

const props = defineProps({
  buttonText: {
    type: String,
    default: ''
  },
  buttonStyle: {
    type: String,
    default: 'button', // 'button' or 'text'
    validator: (value) => ['button', 'text'].includes(value)
  }
})

const { handleOpenPreferences } = useCookieConsent()
</script> 