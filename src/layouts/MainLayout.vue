<template>
  <q-layout view="lhh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Ellis app </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above behavior="mobile">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item-label header> My bank </q-item-label>
          <Navigation v-for="link in links" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar rounded size="56px" class="q-mb-sm" color="primary">
            {{ users[0]?.initials }}
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Navigation from 'components/Navigation.vue';

const links = [
  {
    title: 'Transactions',
    caption: 'transaction list',
    icon: 'view_list',
    link: '/',
  },
  {
    title: 'Account Info',
    caption: 'Account information',
    icon: 'account_balance_wallet',
    link: 'accounts',
  },
  {
    title: 'Profile',
    caption: 'User information',
    icon: 'manage_accounts',
    link: 'profile',
  },
];

import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Navigation,
  },

  setup() {
    const store = useStore();
    const leftDrawerOpen = ref(false);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    onBeforeMount(() => {
      void store.dispatch('userModule/fetchUsers');
    });

    const users = computed(() => {
      // eslint-disable-next-line
      return store.getters['userModule/getUsers'];
    });

    return {
      links,
      // eslint-disable-next-line
      users,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
