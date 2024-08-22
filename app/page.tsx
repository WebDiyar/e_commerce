import { Container, SortPopup, Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>

      <TopBar />

      <Container className="pb-14 mt-3">
        <div className="flex gap-[80px]">

          <div className="max-w-[200px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550, 
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },

                  {
                    id: 5,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  }, {
                    id: 6,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1} />
                 
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },

                  {
                    id: 5,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  }, {
                    id: 6,
                    name: "Чизбургер пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF45F297D4479903041766B142AB1.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
