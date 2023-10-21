<template>
  <button @click="showAlert">Hello world</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>