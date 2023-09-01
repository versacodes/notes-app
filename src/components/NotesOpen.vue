<script setup>
import { useNotesStore } from '../store/notesStore.js'
import BaseButton from './BaseButton.vue'
import { computed } from 'vue'

const store = useNotesStore()

</script>

<template>
  <h1 class="text-5xl text-stone-800 font-bold mb-4">Note</h1>
  <div class="w-full bg-white mx-auto h-[20rem] overflow-y-scroll break-words p-10">
    <h2 class="font-bold text-3xl mb-8 text-stone-700">{{ store.openedNoteTitle }}</h2>
    <p class="text-stone-700 text-xl newline">{{ store.openedNoteContent }}</p>
  </div>
  <div class="flex justify-between w-full">
    <BaseButton
      class="px-4 py-2 bg-[#649] text-white text-lg mt-2 font-semibold"
      @click="store.setIsOpened"
    >
    Back to Notes
    </BaseButton>
    <!-- set is_opened to false then set is_editing to true to show NotesEdit -->
    <BaseButton
      class="px-4 py-2 bg-[#649] text-white text-lg mt-2 font-semibold"
      @click="store.setIsOpened(); store.setIsEditing();"
    >
    Edit Note
    </BaseButton>
  </div>
</template>

<style scoped>
.newline {
  /* NOTE: pre-line or pre-wrap not sure the difference but will research */
  /* accepts \n as whitespace */
  white-space: pre-line;
}
</style>
