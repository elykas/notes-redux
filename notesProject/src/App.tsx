import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotesList from './pages/NotesList'
import Login from './pages/Login'
import ProtectedRoute from './auth/PrivateRoute'
import NoteCreate from './pages/NoteCreate'
import NotesEdit from './pages/NotesEdit'
import NavBar from './components/NoteForm/NavBar'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
      <Route path="/login" element={<Login />} />
                <Route path="/notes" element={<ProtectedRoute><NotesList /></ProtectedRoute>} />
                <Route path="/notes/new" element={<ProtectedRoute><NoteCreate /></ProtectedRoute>} />
                <Route path="/notes/:id" element={<ProtectedRoute><NotesEdit /></ProtectedRoute>} />
      </Routes >
        
    </>
  )
}

export default App
