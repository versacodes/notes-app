<script setup>
import BaseButton from "./BaseButton.vue"

defineProps({
  note_title: String,
  note_content: String,
})
</script>

<template>
  <div class="py-6 px-6 bg-white card relative">
    <BaseButton
      name_btn="DEL"
      class="bg-red-500 text-white flex justify-center items-center font-bold text-[0.6rem] absolute w-[2rem] h-[2rem] right-8 rounded-[50%] top-[35%] py-4"
    />
    <h2 class="font-bold text-2xl mb-2 text-stone-800">{{note_title}}</h2>
    <p class="text-stone-700 text-md">{{note_content}}</p>
  </div>
</template>

<style scoped>
.card ~ .card {
  border-top: 2px solid #444;
}
</style>
