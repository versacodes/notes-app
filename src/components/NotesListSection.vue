<script setup>
import NotesCard from "./NotesCard.vue"
import { useNotesStore } from "../store/notesStore.js"
import { ref } from 'vue'

const store = useNotesStore()

</script>

<template>
  <template v-if="store.notes_array.length != 0">
    <section
      class=" md:w-[30rem] sm:w-[25rem] bg-neutral-50 mx-auto h-[20rem] overflow-y-scroll break-words"
    >
      <NotesCard
        v-for="(note, index) in store.notes_array"
        :note-title="note.title"
        :note-content="note.content"
        :note-index="index"
        :key="note.id"
        @click="store.setOpenNoteIndex(index)"
      />
    </section>
  </template>
  <p
    v-else
    class="text-sm text-zinc-600 mb-6"
  >
    You currently have no notes.
  </p>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #999;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #649;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
