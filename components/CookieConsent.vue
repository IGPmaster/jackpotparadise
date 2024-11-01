<template>
    <div v-if="!accepted">
        <div class="cookie-consent">
            <p class="py-10 text-black">{{ msgTranslate.cookieConsent }}</p>
            <button class="bg-login-gradient text-black py-1.5 shadow-lg tracking-wider px-6 font-semibold uppercase rounded" @click="acceptCookies">{{ msgTranslate.accept }}</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { msgTranslate } from '~/composables/globalData';

const accepted = ref(false);

const acceptCookies = () => {
    accepted.value = true;
    localStorage.setItem('cookiesAccepted', 'true');
};

onMounted(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
        accepted.value = true;
    }
});
</script>

<style scoped>
.cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: #f8f8f8;
    border-top: 1px solid #eaeaea;
    text-align: center;
    z-index: 100;
}
</style>
