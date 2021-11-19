<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="card" flat bordered v-for="user in users" :key="user">
      <q-item>
        <q-item-section avatar>
          <q-avatar size="48px" icon="portrait" color="lightgrey" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{
            `${user.name_first} ${user.name_last}`
          }}</q-item-label>
          <q-item-label caption>{{
            `${user.address_street}, ${user.address_city}, ${user.address_state}`
          }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section>
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>
                <strong>Phone: </strong>
              </q-item-label>
              <q-item-label caption>
                {{ user.phone }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>
                <strong>Email: </strong>
              </q-item-label>
              <q-item-label caption>
                {{ user.email }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>
                <strong>Since: </strong>
              </q-item-label>
              <q-item-label caption>
                {{ user.created }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, computed, onBeforeMount } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'Profile',
  setup() {
    const store = useStore();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    onBeforeMount(() => {
      void store.dispatch('userModule/fetchUsers');
    });

    const users = computed(() => {
      // eslint-disable-next-line
      return store.getters['userModule/getUsers'];
    });

    return {
      users,
      showDefaultPhoto: () => true,
      showBackgroundPhoto: () => true,
    };
  },
});
</script>
