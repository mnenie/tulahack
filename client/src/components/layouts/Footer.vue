<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="container">
      <div class="footer_items">
        <div class="logo">
          <h1 class="size_3">L<span>i</span>veEvents</h1>
          <p class="size_7">© 2023 “LiveEvents” Все права защищены.</p>
        </div>
        <div class="icons">
          <div class="icons_item">
            <span class="size_7">Tg 1: </span>
            <img src="/icons/tg.svg" alt="">
          </div>
          <div class="icons_item">
            <span class="size_7">Tg 2: </span>
            <img src="/icons/tg.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: var(--main-color);

  .footer_items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    .logo {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 20px;
      &_item{
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }
  }
}</style>