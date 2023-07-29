<script setup>
import { useNotesStore } from '../store/notesStore.js'

const store = useNotesStore()
</script>

<template>
<h1>Note</h1>
<h2>{{ store.notes_array[store.open_note_index].title }}</h2>
<p>{{ store.notes_array[store.open_note_index].content }}</p>
</template>

<style scoped>

</style>
