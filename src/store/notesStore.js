import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notes_array: [], // array of objects
      open_note_index: null,
      is_opened: false,
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
    // setting notes_array to a new filtered value instead of mutating
    // setting and mutating are two different things - setting a value is preferable
    //note_index is index from the v-for loop of NotesCard
    setNotesToFiltered(note_index) {
      this.notes_array = this.notes_array.slice(0, note_index).concat(this.notes_array.slice(note_index+1, this.notesLength))
    },
    // sets the open_note_index based on given argument and set is_opened to the opposite boolean value
    setOpenNoteIndex(note_index) {
      this.open_note_index = note_index
      this.setIsOpened()
    },
    // set is_opened to the opposite boolean value
    setIsOpened() {
      this.is_opened = !this.is_opened
    }
  },
  getters: {
    notesLength: (state) => {
      return state.notes_array.length
    },
    openedNoteTitle: (state) => {
      if(state.open_note_index === null) {
        return
      }
      return state.notes_array[state.open_note_index].title
    },
    openedNoteContent: (state) => {
      if(state.open_note_index === null) {
        return
      }
      return state.notes_array[state.open_note_index].content
    },
  }
})
