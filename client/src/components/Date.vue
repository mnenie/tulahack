<script setup lang="ts">
import { ref } from 'vue';
import { useEvents } from '../stores/events';

const {selectedDate} = useEvents()
</script>

<template>
  <Datepicker range v-model="selectedDate" :lang="encodeURI" />
</template>

<style scoped></style>