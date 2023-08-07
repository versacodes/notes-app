<script setup>
import { ref, onMounted, computed } from 'vue'

defineProps({
  isFocused: Boolean
})
const focus_input = ref(null)

onMounted(() => {
  focus_input.value && focus_input.value.focus()
})


</script>

<template>
  <input :ref="(el) => { isFocused ? focus_input = el : null }" />
</template>

<style scoped>

</style>
