import React from 'react'
import Writing from '../components/Writing';


function Writings({ writings }) {

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <div className="mt-8 mx-auto p-6 max-w-2xl overflow-x-hidden">
    <section className="text-left mb-12">
      <p className="text-2xl font-semibold text-gray-600">Writing</p>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">My corner of the internet</h1>
      <p className="mt-6 text-gray-700 leading-relaxed">
        Welcome to the journal of me. I write about my journey through programming, tech, psychology, business, religion & other random stuff.
      </p>
      <p className='text-gray-400'>{getDate()}  • {writings.length} writings</p>
      <div className='mt-12'>
      {writings.map(writing => (
          <Writing
            key={writing.id}
            id={writing.id}
            topic={writing.topic}
            title={writing.title}
            paragraph={writing.paragraph}
            createdDate={writing.createdDate}
            readingTime={writing.readingTime}
          />
        ))}
      </div>
    </section>
  </div>
  )
}

export default Writings