<script setup>
defineProps({
  note_title: String,
  note_content: String,
})
</script>

<template>
  <div class="py-6 px-6 bg-white card">
    <h2 class="font-bold text-2xl mb-2 text-stone-800">{{note_title}}</h2>
    <p class="text-stone-700 text-md">{{note_content}}</p>
  </div>
</template>

<style scoped>
.card ~ .card {
  border-top: 2px solid #444;
}
</style>
