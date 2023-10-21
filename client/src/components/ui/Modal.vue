<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-body {
  padding: 30px;
}

.modal-content {
  border-radius: 24px;
  border: 1px solid var(--main-color);
  background: var(--white-color);
  box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
}
</style>