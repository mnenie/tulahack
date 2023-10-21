<script setup lang="ts">
import { ref } from 'vue';

const selectedDate = ref([
  new Date(),
  new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)])

</script>

<template>
  <Datepicker range v-model="selectedDate" :lang="encodeURI" />
</template>

<style scoped></style>