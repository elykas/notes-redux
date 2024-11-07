import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../features/store"  // Update this path based on your folder structure
import { addNote } from '../features/notes/notesSlice'; // Assuming addNote action is defined in notesSlice
import { Note } from '../types/noteType'; // Assuming Note type is defined

const NoteCreate: React.FC = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notes.notes);

    // Local state for form inputs
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState<'work' | 'personal' | 'shopping'>('work');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newNote: Note = {
            id: Date.now(), 
            title,
            content,
            category,
            createdAt: new Date().toISOString(),
        };

        dispatch(addNote(newNote));

        // Clear form fields after submission
        setTitle('');
        setContent('');
        setCategory('work');
    };

    return (
        <div>
            <h2>Create a New Note</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as 'work' | 'personal' | 'shopping')}
                    >
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                    </select>
                </div>
                <button type="submit">Add Note</button>
            </form>

            <h3>Existing Notes</h3>
            <div>
                {notes.map(note => (
                    <div key={note.id}>
                        <h4>{note.title}</h4>
                        <p>{note.content}</p>
                        <p>Category: {note.category}</p>
                        <p>Created at: {note.createdAt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoteCreate;
