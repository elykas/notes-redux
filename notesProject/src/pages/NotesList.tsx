import React from 'react';
import { setCategory } from '../features/notes/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';

const NotesList: React.FC = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notes.notes);

    const activeCategory = useSelector((state: RootState) => state.notes.activeCategory);

    const filteredNotes = activeCategory === 'all'
        ? notes
        : notes.filter(note => note.category === activeCategory);

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => dispatch(setCategory('all'))}>All ({notes.length})</button>
                <button onClick={() => dispatch(setCategory('work'))}>Work</button>
                <button onClick={() => dispatch(setCategory('personal'))}>Personal</button>
                <button onClick={() => dispatch(setCategory('shopping'))}>Shopping</button>
            </div>
            <div>
                {filteredNotes.map(note => (
                    <div key={note.id}>{note.title}</div>
                ))}
            </div>
        </div>
    );
};

export default NotesList;
