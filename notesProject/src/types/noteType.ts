export interface Note{
    id:number,
    title:string
    content:string,
    category:'work'|'personal'|'shopping';
    createdAt:string

}

export interface NotesState{
    notes:Note[];
    activeCategory: 'all' | 'work' | 'personal' | 'shopping';
}