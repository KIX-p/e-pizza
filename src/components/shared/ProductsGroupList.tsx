"use client";

import React, { FC, useRef } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import ProductCard from './ProductCard';
import { useCategoryStore } from '../../../store/category';

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
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);
    
    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

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