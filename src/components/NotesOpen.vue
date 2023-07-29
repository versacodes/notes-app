<script setup>
import { useNotesStore } from '../store/notesStore.js'
import BaseButton from './BaseButton.vue'

const store = useNotesStore()

</script>

<template>
  <h1 class="text-4xl font-bold mb-4">Note</h1>
  <div class="w-full bg-white mx-auto h-[20rem] overflow-y-scroll break-words p-6">
    <h2 class="font-bold text-3xl mb-6 text-stone-800">{{ store.notes_array[store.open_note_index].title }}</h2>
    <p class="text-stone-700 text-md">{{ store.notes_array[store.open_note_index].content }}</p>
  </div>
  <BaseButton
    class="px-4 py-2 bg-[#649] text-white text-lg mx-auto mt-3 font-semibold w-full"
    @click="store.setIsOpened"
  >
  Back to Notes
  </BaseButton>
</template>

<style scoped>

</style>
