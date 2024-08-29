import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({
    id,
    name,
    price,
    imageUrl,
    className,
}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-5 bg-secondary rounded-lg h-[260px] sm:border-yellow-500">
                    <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

                <p className="text-sm text-gray-400">
                    aaaaaaaaaaaaaaaaaaa
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="sm:text-[15px] lg:text-[20px]">
                        от <b>{price} ₽</b>
                    </span>

                    <Button variant="secondary" className="text-base font-bold ">
                        <Plus size={20} className="mr-5" />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};
