<script setup>
import NotesListSection from "./components/NotesListSection.vue"
import BaseButton from "./components/BaseButton.vue"
import { useNotesStore } from "./store/notesStore.js"

const store = useNotesStore()

</script>

<template>
  <h1 class="text-zinc-900 font-bold text-4xl mb-5">notes</h1>
  <NotesListSection />
  <BaseButton
    name_btn="New Note"
    class="px-4 py-2 bg-[#649] text-white text-lg mt-3 font-semibold"
    @click="store.addNotes"
  />
</template>

<style scoped>

</style>
