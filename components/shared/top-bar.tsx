'use client'
import { useState } from 'react';
import { Dialog, DialogTitle } from '@headlessui/react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Category } from '@prisma/client';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
    categories: Category[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between flex-wrap lg:flex-nowrap">
                <Categories items={categories} className="hidden lg:flex" />
                <SortPopup className="hidden lg:flex" />

                {/* Мобильная версия */}
                <button
                    className="lg:hidden flex items-center gap-2 text-primary font-semibold"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={24} />
                    <span>Навигация</span>
                </button>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 lg:hidden">
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
                            <div className="flex justify-between items-center mb-4">
                                <DialogTitle className="text-lg font-bold">Навигация</DialogTitle>
                                <button onClick={() => setIsOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <Categories
                                items={categories}
                                className="flex flex-col gap-4"
                                onCategoryClick={() => setIsOpen(false)}
                            />
                            <SortPopup className="mt-4" />
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Container>
        </div>
    );
};
