<script setup>
import BaseButton from './BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/20/solid'
import { useNotesStore } from '../store/notesStore.js'
import { computed } from 'vue'

const store = useNotesStore()

const props = defineProps({
  note_title: String,
  note_content: String,
  note_index: Number,
})

// computed for limiting the characters displayed in NotesCard
const previewNoteTitle = computed(() => {
    return props.note_title.slice(0, 35)
})

const previewNoteContent = computed(() => {
    return props.note_content.slice(0, 100)
})

// computed for v-if to show "..." symbol if title or content is long
const isTitleLong = computed(() => {
  return props.note_title.length > 35 ? true : false
})

const isContentLong = computed(() => {
  return props.note_content.length > 100 ? true : false
})

</script>

<template>
  <div class="py-6 px-6 bg-white card relative">
    <!-- delete note button -->
    <!-- see setNotesToFiltered action in notesStore  -->
    <BaseButton
      class="bg-red-500 text-white flex justify-center items-center font-bold  absolute w-[1.6rem] h-[1.6rem] right-8 rounded-[50%] top-[40%]"
      @click.stop="store.setNotesToFiltered(note_index)"
    >
      <!-- replaces slot content in BaseButton -->
      <TrashIcon class="w-[0.8rem] h-[0.8rem]" />
    </BaseButton>
    <h2 class="font-bold text-2xl pr-20 mb-2 text-stone-800">{{previewNoteTitle}}<span class="text-zinc-500 text-sm" v-if="isTitleLong">...</span></h2>
    <p class="text-stone-700 text-md pr-20">{{previewNoteContent}}<span class="text-zinc-500 text-sm" v-if="isContentLong">...</span></p>
  </div>
</template>

<style scoped>
.card ~ .card {
  border-top: 2px solid #444;
}
</style>
