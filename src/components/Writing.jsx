import React from 'react';
import { Link } from 'react-router-dom';

// Function to strip HTML tags from a string
const stripHtmlTags = (text) => {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.textContent || div.innerText || '';
};

// Function to truncate text to a specified number of lines
const truncateText = (text, maxLines = 2) => {
  const lineHeight = 24; // Adjust this value to match your font's line height
  const maxCharsPerLine = 50; // Adjust this value based on the average characters per line
  const maxLength = maxLines * maxCharsPerLine;
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

// Function to format date without time
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

function Writing({ id, topic, title, paragraph, createdDate, readingTime }) {
  const plainTextParagraph = stripHtmlTags(paragraph);
  const truncatedParagraph = truncateText(plainTextParagraph);
  const formattedDate = formatDate(createdDate);

  return (
    <Link to={`/writings/${id}`}>
      <div className='mt-8 transform transition duration-500 hover:scale-105'>
        <p className='text-sm text-gray-400'>{topic}</p>
        <h3 className='text-xl font-bold text-gray-700'>{title}</h3>
        <p className='text-gray-800 mt-1 mb-3'>{truncatedParagraph}</p>
        <p className='text-gray-400'>{formattedDate} • {readingTime}</p>
      </div>
    </Link>
  );
}

export default Writing;
