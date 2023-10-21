<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'btn-event'
})
</script>

<template>
  <button class="btn size_7">
    <slot></slot>
  </button>
</template>


<style lang="scss" scoped>
.btn {
  padding: 15px 30px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--main-color);
  color: var(--black-color);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>