/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React, { FC } from 'react';
import { Title } from './title';
import { Plus } from 'lucide-react';
import { Button } from '../ui';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={className}>
        <Link href={`/product/${id}`}>
            <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                <img className = "w-[215px] h-[215px]" src = {imageUrl} alt = {name} />
            </div>


            <Title text = {name} size = "sm" className='mb-1 mt-3 font-bold'/>

            <p className='text-sm text-gray-400'>
                Kurczak, mozerella, ser czedar i parmezan, sos serowy, pomidor, sos alfredo, czosnek
            </p>

            <div className='flex justify-between items-center mt-4'>
                <span className='text-[20px]'>
                    od <b>{price} zł</b>
                </span>

                <Button variant="secondary" className = "text-base font-bold">
                    <Plus className = "w-5 h-5 mr-1" />
                    Dodaj do koszyka
                </Button>
            </div>

        </Link>
    </div>
  );
};

export default ProductCard;