<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="card"
      flat
      bordered
      v-for="account in accounts"
      :key="account"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar size="48px" icon="payment" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ `${account.type} Account` }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section>
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>
                <strong>Account number: </strong>
              </q-item-label>
              <q-item-label caption>
                {{ account.account_number }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>
                <strong>Routing number: </strong>
              </q-item-label>
              <q-item-label caption>
                {{ account.routing_number }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>
                <strong>Balance: </strong>
              </q-item-label>
              <q-item-label caption>
                {{ account.balance }}
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
import { useStore } from '../store';
import { defineComponent, computed, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'Accounts',
  setup() {
    const store = useStore();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    onBeforeMount(() => {
      void store.dispatch('bankModule/fetchAccounts');
    });

    const accounts = computed(() => {
      // eslint-disable-next-line
      return store.getters['bankModule/getAccounts'];
    });

    return { accounts };
  },
});
</script>
