import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {

  state: () => {
    return {
      notes_array: JSON.parse(localStorage.getItem('notes', JSON.stringify([]))) || [], // array of objects
      open_note_index: null,
      is_opened: false,
      is_editing: false,
      br: '<br>'
    }
  },
  // actions
  actions: {
    // pushing an object in notes_array
    addNotes(title, content) {
      this.notes_array.push(
        {
          id: this.notesLength,
          title: title,
          content: content,
        }
      );
    },
    editNotes(edited_title, edited_content) {
      this.notes_array[this.open_note_index].title = edited_title
      this.notes_array[this.open_note_index].content = edited_content
    },
    // setting notes_array to a new filtered value instead of mutating
    // setting and mutating are two different things - setting a value is preferable
    // note_index is index from the v-for loop of NotesCard
    // note_index is the index of note that we want to remove/delete
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
    },
    setIsEditing() {
      // set is_opened to false if editing; vice versa
      this.is_editing = !this.is_editing
      // console.log(this.is_opened)
      console.log(this.is_editing)
    }
  },
  getters: {
    notesLength: (state) => {
      return state.notes_array.length
    },
    // for showing notes title in NotesOpen
    openedNoteTitle: (state) => {
      if(state.open_note_index === null) {
        return
      }
      return state.notes_array[state.open_note_index].title
    },
    // for showing notes content in NotesOpen
    openedNoteContent: (state) => {
      if(state.open_note_index === null) {
        return
      }
      return state.notes_array[state.open_note_index].content
    },
  }
})
