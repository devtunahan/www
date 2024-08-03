import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify for HTML sanitization
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function WritingDetail({ writings }) {
  const { id } = useParams();
  const [writing, setWriting] = useState(null);

  useEffect(() => {
    const selectedWriting = writings.find((w) => w.id === id);
    setWriting(selectedWriting);
  }, [id, writings]);

  if (!writing) return <p>Loading...</p>;

  // Create sharing URLs
  const pageUrl = encodeURIComponent(window.location.href);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${encodeURIComponent(writing.title)}&summary=${encodeURIComponent(writing.content.slice(0, 150))}&source=${pageUrl}`;

  // Create mailto link for email sharing
  const subject = encodeURIComponent(`Check out this blog post: ${writing.title}`);
  const body = encodeURIComponent(`Hi,\n\nI found this interesting blog post and thought you might enjoy it:\n\n${writing.title}\n\n${pageUrl}\n\nBest,\n[Your Name]`);
  const emailUrl = `mailto:?subject=${subject}&body=${body}`;

  return (
    <div className="container mx-auto p-4 max-w-2xl mt-14">
      <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{writing.topic}</span>
      <h1 className="text-3xl font-bold mt-2">{writing.title}</h1>
      <div className="flex items-center gap-2 text-gray-600">
        <p className='flex-grow'>{writing.author} • {writing.createdDate}</p>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href={emailUrl} className="text-black hover:text-gray-700">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="mt-20 mb-8" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(writing.content) }} />
    </div>
  );
}

export default WritingDetail;
