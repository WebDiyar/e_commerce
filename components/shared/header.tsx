import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";

interface Props {
    className?: string;
}

export const Header: FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex flex-col md:flex-row items-center justify-between py-4 md:py-8 gap-4">

                {/* Left section */}
                <Link href={"/"}>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Image src="/logo.png" alt="Logo" width={35} height={35} />
                        <div>
                            <h1 className="text-xl md:text-2xl uppercase font-black">Dodo Pizza</h1>
                            <p className="text-xs md:text-sm text-gray-400 leading-3">Вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                {/* Center search input */}
                <div className="flex-1 w-full md:w-auto mx-0 md:mx-10">
                    <SearchInput />
                </div>

                {/* Right section */}
                <div className="flex items-center gap-2 md:gap-3">
                    <Button variant={"outline"} className="flex items-center gap-1 text-xs md:text-sm">
                        <User size={16} />
                        Войти
                    </Button>

                    <Button className="group relative text-xs md:text-sm">
                        <b>520 $</b>
                        <span className="h-full w-[1px] bg-white/30 mx-2 md:mx-3"></span>
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                            <ShoppingCart size={16} className="relative" strokeWidth={2} />
                            <b>3</b>
                        </div>
                        <ArrowRight size={20} className="absolute right-2 md:right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Button>
                </div>

            </Container>
        </header>
    );
};
