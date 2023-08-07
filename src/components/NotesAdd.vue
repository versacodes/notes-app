<script setup>
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"
import { useNotesStore } from "../store/notesStore.js"
import { ref, onMounted } from 'vue'

const props = defineProps({
    noteTitle: String, // passed as v-model - v-model:noteTitle
    noteContent: String, // passed as v-model
})

defineEmits(['addNoteEvent', 'update:noteTitle', 'update:noteContent'])


</script>

<template>
  <h1 class="text-4xl mb-5 font-bold">Add Todo</h1>
  <div class="w-full">
    <BaseInput
        type="text"
        placeholder="Enter title"
        class="py-2 px-3"
        :value="noteTitle"
        @input="$emit('update:noteTitle', $event.target.value)"
        :is-focused="true"
    />
    <!-- multiple v-model in component -->
    <textarea
        class="py-2 px-3 mt-2 h-[12rem] resize-none"
        placeholder="Enter note's content"
        :value="noteContent"
        @input="$emit('update:noteContent', $event.target.value)"
    ></textarea>
    <BaseButton
        class="px-4 py-2 bg-[#649] text-white text-lg mx-auto mt-3 font-semibold w-full"
        @click="$emit('addNoteEvent')"
    >Add Note
    </BaseButton>
  </div>
</template>

<style scoped>

</style>
