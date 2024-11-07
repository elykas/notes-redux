import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NotesState } from "../../types/noteType";

const initialState:NotesState = {
    notes:[],
    activeCategory:'all'
}


const notesSlice = createSlice({
    initialState,
    name:"notes",
    reducers:{
        addNote:(state,action:PayloadAction<Note>)=>{
            state.notes.push(action.payload)
        },
        editNote:(state,action:PayloadAction<Note>)=>{
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if(index !== -1) state.notes[index] = action.payload;
        },
        deleteNote:(state,action:PayloadAction<Note>)=>{
            state.notes = state.notes.filter(note => note.id !== action.payload.id)
        },
        setCategory:(state,action:PayloadAction<NotesState['activeCategory']>)=>{
            state.activeCategory = action.payload;
        }
    }
})

export const {addNote,editNote,deleteNote,setCategory} = notesSlice.actions;
export default notesSlice.reducer;