<template>
  <q-list>
    <q-item v-for="transaction in transactions" :key="transaction.id">
      <q-item-section>
        <q-item-label>{{ transaction.description }}</q-item-label>
        <q-item-label caption lines="2">
          {{ `${transaction.direction}: ${transaction.amount}` }}
        </q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{ transaction.posted }}</q-item-label>
        <q-icon
          :name="transaction.status === 'Posted' ? 'done_all' : 'pending'"
          :color="transaction.status === 'Posted' ? 'green' : 'orange'"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { useStore } from '../store';
import { defineComponent, computed, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'TransactionList',
  setup() {
    const store = useStore();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    onBeforeMount(() => {
      void store.dispatch('bankModule/fetchTransactions');
    });

    const transactions = computed(() => {
      // eslint-disable-next-line
      return store.getters['bankModule/getTransactions'];
    });

    return { transactions };
  },
});
</script>
