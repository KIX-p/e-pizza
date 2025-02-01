import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface categoriesProps {
  className?: string;
}

const cats = ['Pizzy', "Kombo", "Przekąski", "Koktajle", "Kawa", "Napoje", "Desery", "Promocje"];
const activeIndex = 0;

export const categories: FC<categoriesProps> = ({ className }) => {
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
        {
            cats.map((cat, index) => (
                <a key={index} className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
                )}>
                    <button>
                        {cat}
                    </button>
                </a>
            ))
        }
    </div>
  );
};

export default categories;