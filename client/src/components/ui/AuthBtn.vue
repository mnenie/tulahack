<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'btn-auth'
})
</script>

<template>
  <button class="btn size_7">
    <slot></slot>
  </button>
</template>


<style lang="scss" scoped>
.btn {
  padding: 12px 19px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--main-color);
  color: var(--black-color);
  border-radius: 10px;
  border: none;
  height: 46px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>