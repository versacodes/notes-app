import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notes_array: [], // array of objects
      new_note_title: "",
      new_note_content: "", 
    }
  },
  // actions
  actions: {
    addNotes() {
      this.notes_array.push(
        {
          id: 0,
          title: "Note Title",
          content: "Falfkw falfwkaowfalcjaknmher obre wogjbv woegw wejf", 
        }
      );
      
    },
  },
  // getters
})
