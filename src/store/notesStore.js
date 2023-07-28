import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notes_array: [], // array of objects
    }
  },
  // actions
  actions: {
    addNotes(title, content) {
      this.notes_array.push(
        {
          id: this.notesLength,
          title: title,
          content: content,
        }
      );
    },
  },
  getters: {
    notesLength: (state) => {
      return state.notes_array.length
    },
  }
})
