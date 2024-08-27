import { useEffect, useRef } from 'react';
import qs from 'qs';
import { useRouter } from 'next/navigation';

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

export interface Filters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
}

export const useQueryFilters = (filters: Filters) => {
    const isMounted = useRef<boolean>(false);
    // const router = useRouter();

    useEffect(() => {
        if (isMounted.current) {
            const params = {
                ...filters.prices,
                pizzaTypes: Array.from(filters.pizzaTypes),
                sizes: Array.from(filters.sizes),
                ingredients: Array.from(filters.selectedIngredients),
            };

            const query = qs.stringify(params, {
                arrayFormat: 'comma',
            });

            // router.push(`?${query}`, {
            //     scroll: false,
            // });
        }

        isMounted.current = true;
    }, [filters]);
};
