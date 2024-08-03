import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify for HTML sanitization


function WritingDetail({writings}) {
const { id } = useParams();
const [writing, setWriting] = useState(null);

  useEffect(() => {
    const selectedWriting = writings.find((w) => w.id === id);
    setWriting(selectedWriting);
  }, [id]);

  if (!writing) return <p>Loading...</p>;


  return (
    <div className="container mx-auto p-4 max-w-2xl">
    <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{writing.topic}</span>
    <h1 className="text-3xl font-bold">{writing.title}</h1>
    <div className="mt-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(writing.content) }}/>
  </div>
  )
}

export default WritingDetail