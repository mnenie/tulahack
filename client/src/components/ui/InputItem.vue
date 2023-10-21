<script setup lang="ts">
import type { IInput } from '@/types/input.interface';
defineProps<{
  inputEl: IInput[]
}>()
</script>

<template>
  <div v-for="input in inputEl" :key="input.id" class="input_el_full">
    <p class="subheading">{{ input.name }}</p>
    <input class="input_el" :placeholder="input.place">
    <div class="error_message">
    </div>
  </div>  
</template>
<style lang="scss" scoped>
  .input_el_full{
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
  .input_el{
    border-radius: 12px;
    border: 1px solid var(--main-color);
    background: var(--white-color);
    padding: 15px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--black-color);
    outline: none;
    transition: 0.15s ease-in;
  }
  .input_el::placeholder{
    color: var(--black-color);
    transition: 0.15s ease-in;
  }
  .input_el:hover::placeholder{
    color: var(--black-color);
  }
  .input_el:focus{
    color: var(--black-color);
    border: 1px solid var(--main-color);
  }
  .input_el:focus::placeholder{
    color: var(--black-color);
  }
  .subheading{
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--black-color);
  }
  // .invalid:focus, .invalid {
  //   border: 1px solid var(--accent-color-ff-704-d);
  //   color: var(--accent-color-ff-704-d);
  // }
  .error_message{
    margin-top: 2px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: red;
  }
</style>