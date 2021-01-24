import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {

   const dispatch = useDispatch();

   const {active:note} = useSelector(state => state.notes)

   const [formValues, handleInputChange, reset] = useForm(note);
   const {body,title} = formValues;

   const activeId = useRef(note.id);

   useEffect(() => {
      if(note.id !== activeId.current){
         reset(note);
         activeId.current = note.id
      }
   }, [note, reset])

   useEffect(() => {
      dispatch(activeNote(formValues.id, {...formValues}));
   }, [formValues, dispatch])

   return (
      <div className = 'notes__main-content animate__animated animate__fadeIn animate__faster'>
         <NoteAppBar />
         <div className = 'notes__content'>
            <input 
               type = 'text'
               placeholder = 'Awesome title'
               className = "notes__title-input"
               value = {title}
               onChange = {handleInputChange}
               name = 'title'
            />
            <textarea
               placeholder = 'What happened today?'
               className = 'notes__textarea'
               value = {body}
               onChange = {handleInputChange}
               name = 'body'
            >
            </textarea>

            {
               (note.url) &&
               <div className = 'notes__image animate__animated animate__bounceInUp animate_faster' >
               <img
                  src = {`${note.url}`}
                  alt = 'Descriptive journal'
               />
            </div>
            }

         </div>
      </div>
   )
}
