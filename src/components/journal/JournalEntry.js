import React from 'react'

export const JournalEntry = () => {
  return (
    <div className = 'journal__entry pointer'>
      <div 
        className = 'journal__entry-picture'
        style= {{
          backgroundSize: 'cover',
          backgroundImage : 'url(https://www.uu.se/digitalAssets/805/c_805644-l_1-k_image.jpg)',
        }}
      ></div>
      <div className = 'journal__entry-body'>
        <p className = 'journal__entry-title'>
          New day
        </p>
        <p className = 'journal__entry-content'>
          Lorem ipsum dolor sit amet deserunt veniam fugiat.
        </p> 
      </div>
      <div className = 'journal__entry-date-box'>
        Monday
        <span>
          15
        </span>
      </div>
    </div>
  )
}
