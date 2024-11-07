import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../features/store';
import { editNote } from '../features/notes/notesSlice';
import { Note } from '../types/noteType';

const NotesEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const note = useSelector((state: RootState) =>
        state.notes.notes.find((note) => note.id === Number(id))
    );

    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');
    const [category, setCategory] = useState(note?.category || 'work');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
            setCategory(note.category);
        }
    }, [note]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        if (!note) return;

        const updatedNote: Note = {
            ...note,
            title,
            content,
            category,
        };

        dispatch(editNote(updatedNote));

        navigate('/notes');
    };

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div>
            <h2>Edit Note</h2>
            <form onSubmit={handleUpdate}>
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
                <button type="submit">Update Note</button>
            </form>
        </div>
    );
};

export default NotesEdit;
