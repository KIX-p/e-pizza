'use client';

import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { useCategoryStore } from '../../../store/category';

interface categoriesProps {
  className?: string;
}

const cats = [
  {name: 'Pizza', id: 1}, 
  {name: 'Combo', id: 2}, 
  {name: 'Przystawki', id: 3}, 
  {name: 'Koktajle', id: 4}, 
  {name: 'Kawa', id: 5}, 
  {name: 'Napoje', id: 6}, 
  {name: 'Desery', id: 7}, 
  {name: 'Promocje', id: 8}];

const activeIndex = 0;

export const categories: FC<categoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
        {
            cats.map(({name, id}, index) => (
                <a key={index} className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
                )} href={`/#${name}`}>
                    <button>
                        {name}
                    </button>
                </a>
            ))
        }
    </div>
  );
};

export default categories;