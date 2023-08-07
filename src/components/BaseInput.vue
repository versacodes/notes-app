<script setup>
import { ref, onMounted, computed } from 'vue'

defineProps({
  isFocused: Boolean // used as trigger for accessing template ref
})
const focus_input = ref(null)

onMounted(() => {
  // if null then skip, if true then focus input
  focus_input.value && focus_input.value.focus()
})


</script>

<template>
  <!-- if isFocused = true then set ref=focus_input else null(no template ref access) -->
  <input :ref="(el) => { isFocused ? focus_input = el : null }" />
</template>

<style scoped>

</style>
