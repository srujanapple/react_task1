import React, { useState } from 'react';

const WordCounter = () => {
  const [paragraph, setParagraph] = useState('');

  const updateWordCount = () => {
    const words = paragraph.match(/\b\w+\b/g) || [];
    return words.length;
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setParagraph(inputText);
  };

  const wordCount = updateWordCount();

  return (
    <div>
      <textarea
        placeholder="Enter your paragraph here"
        value={paragraph}
        onChange={handleInputChange}
        style={{ width: '390px', height:'100px' }}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;