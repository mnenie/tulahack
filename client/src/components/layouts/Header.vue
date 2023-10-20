<script setup lang="ts">

</script>

<template>
  <header>
    <div class="container">
      <div class="header_content">
        <div class="logo">
          <img src="/icons/1.png" alt="">
          <h1 class="size_1">L<span>i</span>veEvents</h1>
        </div>
        <div class="btns">
          <btn-auth>
            Зарегистрироваться
          </btn-auth>
          <btn-auth>
            Вход
            <img src="/icons/Login.svg" alt="">
          </btn-auth>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid var(--bg-color);

  .header_content {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 12px;
      & span{
        color: var(--main-color);
      }
    }
    .btns {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }
}
</style>