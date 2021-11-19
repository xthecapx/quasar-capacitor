<template>
  <q-page class="row items-center justify-evenly">
    <TransactionList />
  </q-page>
</template>

<script lang="ts">
import TransactionList from 'components/TransactionList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { TransactionList },
});
</script>
