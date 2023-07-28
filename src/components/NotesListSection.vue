<script setup>
import NotesCard from "./NotesCard.vue"
</script>

<template>
  <section class="md:max-w-[36rem] max-w-[20rem] bg-neutral-50 mx-auto h-[20rem] overflow-y-scroll">
    <NotesCard />
    <NotesCard />
    <NotesCard />
  </section>
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
