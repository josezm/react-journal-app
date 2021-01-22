import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
   return (
      <div className = 'notes__main-content'>
         <NoteAppBar />
         <div className = 'notes__content'>
            <input 
               type = 'text'
               placeholder = 'Awesome title'
               className = "notes__title-input"
            />
            <textarea
               placeholder = 'What happened today?'
               className = 'notes__textarea'
            >
            </textarea>
            <div className = 'notes__image'>
               <img
                  src = 'https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg'
                  alt = 'Note image'
               />

            </div>

         </div>
      </div>
   )
}
