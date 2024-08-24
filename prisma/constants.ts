interface Category {
    id: number;
    name: string;
}

interface Ingredient {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface Product {
    name: string;
    imageUrl: string;
    categoryId: number;
}

export const categories: Category[] = [
    { id: 1, name: 'Пиццы' },
    { id: 2, name: 'Завтрак' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Напитки' },
];

export const _ingredients: Ingredient[] = [
    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl: '/ingredients/cheese_border.png',
    },
    {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl: '/ingredients/creamy_mozzarella.png',
    },
    {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl: '/ingredients/cheddar_and_parmesan_cheeses.png',
    },
    {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl: '/ingredients/hot_jlapeno_pepper.png',
    },
    {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl: '/ingredients/tender_chicken.png',
    },
    {
        name: 'Шампиньоны',
        price: 59,
        imageUrl: '/ingredients/champignons.png',
    },
    {
        name: 'Ветчина',
        price: 79,
        imageUrl: '/ingredients/ham.png',
    },
    {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl: '/ingredients/spicy_pepperoni.png',
    },
    {
        name: 'Острая чоризо',
        price: 79,
        imageUrl: '/ingredients/spicy_chorizo.png',
    },
    {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl: '/ingredients/pickled_cucumbers.png',
    },
    {
        name: 'Свежие томаты',
        price: 59,
        imageUrl: '/ingredients/fresh_tomatoes.png',
    },
    {
        name: 'Красный лук',
        price: 59,
        imageUrl: '/ingredients/red_onion.png',
    },
    {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl: '/ingredients/juicy_pineapples.png',
    },
    {
        name: 'Итальянские травы',
        price: 39,
        imageUrl: '/ingredients/italian_herbs.png',
    },
    {
        name: 'Сладкий перец',
        price: 59,
        imageUrl: '/ingredients/sweet_pepper.png',
    },
    {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl: '/ingredients/cubes_of_feta_cheese.png',
    },
    {
        name: 'Митболы',
        price: 79,
        imageUrl:'/ingredients/meatballs.png',
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products: Product[] = [
    {
        name: 'Омлет с ветчиной и грибами',
        imageUrl: '/products/omelette_with_ham_and_mushrooms.webp',
        categoryId: 2,
    },
    {
        name: 'Омлет с пепперони',
        imageUrl: '/products/omelette_with_pepperoni.webp',
        categoryId: 2,
    },
    {
        name: 'Кофе Латте',
        imageUrl: '/products/coffee_latte.webp',
        categoryId: 2,
    },
    {
        name: 'Дэнвич ветчина и сыр',
        imageUrl: '/products/danwich_ham_and_cheese.webp',
        categoryId: 3,
    },
    {
        name: 'Куриные наггетсы',
        imageUrl: '/products/chicken_nuggets.webp',
        categoryId: 3,
    },
    {
        name: 'Картофель из печи с соусом 🌱',
        imageUrl: '/products/oven_baked_potatoes_with_sauce.webp',
        categoryId: 3,
    },
    {
        name: 'Додстер',
        imageUrl: '/products/dodster.webp',
        categoryId: 3,
    },
    {
        name: 'Острый Додстер 🌶️🌶️',
        imageUrl: '/products/sharp_dodster.webp',
        categoryId: 3,
    },
    {
        name: 'Банановый молочный коктейль',
        imageUrl: '/products/banana_milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Карамельное яблоко молочный коктейль',
        imageUrl: '/products/caramel_apple_milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Молочный коктейль с печеньем Орео',
        imageUrl: '/products/oreo_cookie_Milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Классический молочный коктейль 👶',
        imageUrl: '/products/classic_Milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Ирландский Капучино',
        imageUrl: '/products/irish_cappuccino.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Карамельный капучино',
        imageUrl: '/products/coffee_caramel_cappuccinowebp.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Кокосовый латте',
        imageUrl: '/products/coffee_coconut_lattewebp.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Американо',
        imageUrl: '/products/americano_coffee.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Латте',
        imageUrl: '/products/latte_coffee.webp',
        categoryId: 5,
    },
];