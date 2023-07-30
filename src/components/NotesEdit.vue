<script setup>
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import { useNotesStore } from "../store/notesStore.js"
import { ref } from 'vue'

const store = useNotesStore()

// use these two values to store the values of inputs and send it as a argument for store.editNotes
// default values should be the current note title and content
const edit_title = ref(store.openedNoteTitle)
const edit_content = ref(store.openedNoteContent)

// update if edit title and content not empty then set values to event.target.value else defaults to event.target.value 
function updateEditTitle() {
  return edit_title.value ? edit_title.value = event.target.value : event.target.value
}

function updateEditContent() {
  return edit_content.value ? edit_content.value = event.target.value : event.target.value
}


</script>

<template>
  <h1>Edit Note</h1>
  <!-- use store.openedNoteTitle and store.openedNoteContent computed to set as default value to show to users that they are editing the note they want to edit --> 
  <BaseInput
    placeholder="Edit Title"
    type="text"
    class="py-2 px-3"
    :value="store.openedNoteTitle"
    @input="updateEditTitle(event)"
  />
  <textarea
    placeholder="Edit note content"
    class="py-2 px-3 mt-2 h-[12rem] resize-none"
    :value="store.openedNoteContent"
    @input="updateEditContent(event)"
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
