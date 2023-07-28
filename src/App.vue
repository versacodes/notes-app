<script setup>
import NotesListSection from "./components/NotesListSection.vue"
import BaseButton from "./components/BaseButton.vue"
import { useNotesStore } from "./store/notesStore.js"
import { ref } from 'vue'
import NotesAdd from "./components/NotesAdd.vue"

const store = useNotesStore()

const is_adding_todo = ref(false)
function setAddingTodo() {
  is_adding_todo.value = !is_adding_todo.value
}

const title = ref("") // note title
const content = ref("") // note content

</script>

<template>
  <template v-if="!is_adding_todo">
    <h1 class="text-zinc-900 font-bold text-4xl mb-5">notes</h1>
    <NotesListSection />
    <BaseButton
      name_btn="New Note"
      class="px-4 py-2 bg-[#649] text-white text-lg mt-3 font-semibold"
      @click="setAddingTodo"
    />
  </template>
  <NotesAdd
    v-else
    v-model:note_title="title"
    v-model:note_content="content"
    @add-note-event="store.addNotes(title, content); setAddingTodo();"
  />
</template>

<style scoped>

</style>
