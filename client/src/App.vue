<script lang="ts" setup>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <div class="page-container">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>