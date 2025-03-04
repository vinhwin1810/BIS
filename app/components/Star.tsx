'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

export default function StarButton() {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <button
      className="ml-3 bg-[#58E2D3] rounded-full shadow-md p-3"
      onClick={handleClick}
    >
      <Star className="h-5 w-5" fill={isFilled ? "black" : "none"} />
    </button>
  );
}
