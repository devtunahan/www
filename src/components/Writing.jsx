import React from 'react'
import { Link } from 'react-router-dom';


function Writing({id,topic, title, paragraph, createdDate, readingTime}) {
  return (
    <Link to={`/writings/${id}`}>
      <div className='mt-8 transform transition duration-500 hover:scale-105'>
        <p className='text-sm text-gray-400'>{topic}</p>
        <h3 className='text-xl font-bold text-gray-700'>{title}</h3>
        <p className='text-gray-800 mt-1 mb-3'>{paragraph}</p>
        <p className='text-gray-400'>{createdDate} • {readingTime}</p>
      </div>
    </Link>
  )
}

export default Writing