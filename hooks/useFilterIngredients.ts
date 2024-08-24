import { Api } from '@/services/api_client';
import { Ingredient } from '@prisma/client';
import { useState, useEffect } from 'react';
import { useSet } from 'react-use';

interface Props {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIds: Set<string>;
    onAddId: (id: string) => void;
}

export const useFilterIngredients = (): Props => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedIds, { toggle }] = useSet(new Set<string>([]));

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients();
    }, []);

    return {
        ingredients,
        loading,
        onAddId: toggle,
        selectedIds
    };
};