<script setup>
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"
</script>

<template>
  <h1 class="text-4xl mb-5 font-bold">Add Todo</h1>
  <div class="md:max-w-[36rem] max-w-[20rem] w-full">
    <BaseInput
        type="text"
        placeholder="Enter title"
        class="py-2 px-3"
    />
    <textarea
        class="py-2 px-3 mt-2 h-[12rem] resize-none"
        placeholder="Enter notes' content"
    ></textarea>
    <BaseButton
        name_btn="Add Note"
        class="px-4 py-2 bg-[#649] text-white text-lg mx-auto mt-3 font-semibold w-full"
    />
  </div>
</template>

<style scoped>

</style>
