<script setup>
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"
import { useNotesStore } from "../store/notesStore.js"
import { ref } from 'vue'

const props = defineProps({
    note_title: String, // passed as v-model
    note_content: String, // passed as v-model
})

defineEmits(['addNoteEvent', 'update:note_title', 'update:note_content'])


</script>

<template>
  <h1 class="text-4xl mb-5 font-bold">Add Todo</h1>
  <div class="w-full">
    <BaseInput
        type="text"
        placeholder="Enter title"
        class="py-2 px-3"
        :value="note_title"
        @input="$emit('update:note_title', $event.target.value)"
    />
    <!-- multiple v-model in component -->
    <textarea
        class="py-2 px-3 mt-2 h-[12rem] resize-none"
        placeholder="Enter notes' content"
        :value="note_content"
        @input="$emit('update:note_content', $event.target.value)"
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
