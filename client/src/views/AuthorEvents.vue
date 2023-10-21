<script setup lang="ts">
import EventBlocks from '@/components/EventBlocks.vue';
</script>

<template>
  <div class="author">
    <div class="container">
      <div class="elems">
        <div class="avatar">
          <img src="/img/registration.png" alt="">
          <span class="size_6">Alex</span>
          <span class="size_6">test@gmail.com</span>
        </div>
        <div class="events">
          <h2 class="size_3">Мероприятия от Alex</h2>
          <EventBlocks />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.author {
  margin: 50px 0;
  .elems {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .avatar {
      display: flex;
      flex-direction: column;
      gap: 20px;
      & img{
        width: 150px;
        height: 150px;
      }
    }
    .events {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>