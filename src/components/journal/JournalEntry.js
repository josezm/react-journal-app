import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({title, body, date, id, url}) => {
  
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = ()=>{
    dispatch(activeNote(id, { date,title,body,url}));
  }

  return (
    <div className = 'journal__entry pointer' onClick= {handleEntryClick}>
      
      {
      url &&
      (<div 
        className = 'journal__entry-picture'
        style= {{
          backgroundSize: 'cover',
          backgroundImage : `url(${url})`,
        }}
      >

      </div>)
      }

      <div className = 'journal__entry-body'>
        <p className = 'journal__entry-title'>
          {title}
        </p>
        <p className = 'journal__entry-content'>
          {body}
        </p> 
      </div>
      <div className = 'journal__entry-date-box'>
        {noteDate.format('dddd')}
        <h4>
          {noteDate.format('Do')}
        </h4>
      </div>
    </div>
  )
}
