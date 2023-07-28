<script setup>
import NotesCard from "./NotesCard.vue"
import { useNotesStore } from "../store/notesStore.js"
import { ref } from 'vue'

const store = useNotesStore()

</script>

<template>
  <template v-if="store.notes_array.length != 0">
    <section
      class="md:max-w-[36rem] max-w-[20rem] bg-neutral-50 mx-auto h-[20rem] overflow-y-scroll" 
      v-for="note in store.notes_array"
    >
      <NotesCard />
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
