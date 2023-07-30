<script setup>
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import { useNotesStore } from "../store/notesStore.js"
import { ref } from 'vue'

const store = useNotesStore()

// use these two values to store the values of inputs and send it as a argument for store.editNotes
const edit_title = ref("")
const edit_content = ref("")


</script>

<template>
  <h1>Edit Note</h1>
  <!-- use store.openedNoteTitle and store.openedNoteContent computed to set as default value to show to users that they are editing the note they want to edit --> 
  <BaseInput
    placeholder="Edit Title"
    type="text"
    class="py-2 px-3"
    :value="store.openedNoteTitle"
    @input="edit_title = $event.target.value"
  />
  <textarea
    placeholder="Edit note content"
    class="py-2 px-3 mt-2 h-[12rem] resize-none"
    :value="store.openedNoteContent"
    @input="edit_content = $event.target.value"
  >
  </textarea>
  <!-- save updated values to correct note in notes_array then set is_editing to false -->
  <BaseButton
    class="px-4 py-2 bg-[#649] text-white text-lg mx-auto mt-3 font-semibold w-full"
    @click="store.editNotes(edit_title, edit_content); store.setIsEditing();"
  >
  Edit Note
  </BaseButton>
</template>

<style scoped>

</style>
