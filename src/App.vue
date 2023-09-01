<script setup>
import NotesListSection from "./components/NotesListSection.vue"
import BaseButton from "./components/BaseButton.vue"
import NotesOpen from "./components/NotesOpen.vue"
import NotesEdit from "./components/NotesEdit.vue"
import { useNotesStore } from "./store/notesStore.js"
import { ref } from 'vue'
import NotesAdd from "./components/NotesAdd.vue"

const store = useNotesStore()

// to render add note page and hide notes list
const is_adding_note = ref(false)
function setAddingNote() {
  is_adding_note.value = !is_adding_note.value
}

// resets the inputs in NotesAdd
function resetAddNoteInputs() {
  title.value = ""
  content.value = ""
}

const title = ref("") // note title
const content = ref("") // note content

function saveNote() {
  localStorage.setItem('notes', JSON.stringify(store.notes_array))
  store.notes_array.value = JSON.parse(localStorage.getItem('notes'))
}
</script>

<template>
  <!-- wrapper class for center aligned -->
  <main class="flex flex-col justify-center items-center w-[75%] md:w-[60%]">
    <template v-if="!is_adding_note && !store.is_opened && !store.is_editing">
      <h1 class="text-zinc-900 font-bold text-4xl mb-5">notes</h1>
      <NotesListSection />
      
      <BaseButton
        class="px-4 py-2 bg-[#649] text-white text-lg mt-3 font-semibold"
        @click="setAddingNote"
      >
        <!-- for slot content -->
        New Note
      </BaseButton>
    </template>

    <NotesOpen v-else-if="store.is_opened && !is_adding_note && !store.is_editing" />

    <NotesEdit v-else-if="store.is_editing && !store.is_opened && !is_adding_note" />
    
    <NotesAdd
      v-else
      v-model:note-title="title"
      v-model:note-content="content"
      @add-note-event="store.addNotes(title, content); setAddingNote(); resetAddNoteInputs(); saveNote()"
    />
  </main>
</template>

<style scoped>

</style>
