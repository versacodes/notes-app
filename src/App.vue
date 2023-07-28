<script setup>
import NotesListSection from "./components/NotesListSection.vue"
import BaseButton from "./components/BaseButton.vue"
import { useNotesStore } from "./store/notesStore.js"
import { ref } from 'vue'
import NotesAdd from "./components/NotesAdd.vue"

const store = useNotesStore()

// to render add note page and hide notes list
const is_adding_note = ref(false)
function setAddingNote() {
  is_adding_note.value = !is_adding_note.value
}

const title = ref("") // note title
const content = ref("") // note content

</script>

<template>
  <!-- wrapper class for center aligned -->
  <main class="flex flex-col justify-center items-center w-[75%] md:w-[60%]">
    <template v-if="!is_adding_note">
      <h1 class="text-zinc-900 font-bold text-4xl mb-5">notes</h1>
      <NotesListSection />
      <BaseButton
        name_btn="New Note"
        class="px-4 py-2 bg-[#649] text-white text-lg mt-3 font-semibold"
        @click="setAddingNote"
      />
    </template>
    <NotesAdd
      v-else
      v-model:note_title="title"
      v-model:note_content="content"
      @add-note-event="store.addNotes(title, content); setAddingNote();"
    />
  </main>
</template>

<style scoped>

</style>
