<template>
  <div class="">
    <nav class="top-menu bg-primary_bg fixed z-10 py-4 shadow-lg items-center w-full">
      <div class="w-full md:px-0">
        <div class="container md:mx-auto grid grid-cols-3 items-center">
          <div class="left">
            <div class="menu-btn items-center" id="menu-btn">
              <img src="../assets/burger.svg" alt="Mobile Menu Button" class="w-12 h-12 pl-4 items-center">
              <div
                class="menu bg-gray-700 text-white rounded text-left w-36 drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)] transition duration-300 ease-in-out transform scale-0 origin-top"
                id="menu">
                <NuxtLink to="/" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.home }}</NuxtLink>
                <NuxtLink to="/promotions" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.promotions }}
                </NuxtLink>
                <NuxtLink to="/compliance" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.legal }}</NuxtLink>
                <NuxtLink to="/all-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.all_games }}
                </NuxtLink>
                <NuxtLink to="/popular-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.popular_games }}
                </NuxtLink>
                <NuxtLink to="/slot-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.slot_games }}
                </NuxtLink>
                <NuxtLink to="/casino-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.casino_games }}
                </NuxtLink>
                <NuxtLink to="/jackpot-games" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.jackpot_games }}
                </NuxtLink>
                <NuxtLink to="/compliance/contact" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.contact }}
                </NuxtLink>
                <a :href="regLink" class="menu-item hover:bg-slate-800 px-5">{{ msgTranslate.login }}</a>
              </div>
            </div>
          </div>
          <div class="">
            <NuxtLink class="flex justify-center" to="/">
              <img src="../static/betdukes.webp" alt="Hippozino Casino header Logo" class="" width="200" height="">
            </NuxtLink>
          </div>

          <div class="right">
            <ul class=" grid-cols-2 gap-6 hidden lg:flex justify-end">
              <li class="items-center">
                <a :href="loginLink"
                  class="text-primary border border-secondary_bg py-1.5 shadow-lg tracking-wider px-6 font-semibold uppercase rounded">{{
                  msgTranslate.login }}</a>
              </li>
              <li class="items-center">
                <a :href="regLink"
                  class="text-secondary bg-secondary_bg py-1.5 shadow-lg tracking-wider px-6 font-semibold rounded hover:text-primary hover:bg-tertiary_dark transition ease-in-out duration-400 hover:scale-110 uppercase cursor-pointer ">{{
                  msgTranslate.sign_up }}</a>
              </li>
            </ul>
            <div class="flex lg:hidden right items-center pr-4 justify-end">
              <a :href="loginLink" class="cas-btn px-4">Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot />
    <Footer />
    <CookieConsent />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { msgTranslate, regLink, loginLink } from '~/composables/globalData';


const menuIsOpen = ref(false);

onMounted(() => {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const outsideClickListener = (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menuIsOpen.value = false;
      updateMenu();
    }
  };

  menuBtn.addEventListener('click', () => {
    menuIsOpen.value = !menuIsOpen.value;
    updateMenu();
  });

  document.addEventListener('click', outsideClickListener);

  onUnmounted(() => {
    document.removeEventListener('click', outsideClickListener);
  });
});

function updateMenu() {
  const menu = document.getElementById('menu');
  if (menuIsOpen.value) {
    menu.style.transform = 'scale(1)';
  } else {
    menu.style.transform = 'scale(0)';
  }
}
</script>

<style>
.menu-btn {
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.menu {
  display: block;
  position: absolute;
  min-width: 250px;
}

.menu-item {
  display: block;
  line-height: 55px;
  font-size: 18px;
  font-weight: 100;
}

.router-link-active {
  background: none;
}</style>