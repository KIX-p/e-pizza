import React, { FC } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import ProductCard from './ProductCard';

interface ProductsGroupListProps {
  title: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({ 
    title, 
    items, 
    listClassName, 
    categoryId, 
    className
 }) => {
  return (
    <div className={className}>
        <Title text = {title} size = "lg" className="font-extrabold mb-5"/>

        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {
                items.map((product, i) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))
            }
        </div>
    </div>
  );
};

export default ProductsGroupList;