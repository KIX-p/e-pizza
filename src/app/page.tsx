import { Container, Title} from "@/components/shared";
import Filters from "@/components/shared/filters";
import ProductCard from "@/components/shared/ProductCard";
import ProductsGroupList from "@/components/shared/ProductsGroupList";
import TopBar from "@/components/shared/topBar";



export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text ="Wszystkie pizzy" size="lg" className="font-extrabold"/>

      </Container>

      <TopBar/>

      
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Filtracja */}
          <div className="w-[250px]">
            <Filters />
          </div>
          

          {/* Lista towarów */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Pizza" items={[{
                id: 1,
                name: "Pizza Margherita",
                imageUrl: "https://media.dodostatic.com/image/r:292x292/11ef16e27404d8a2bffb177c27cf05d2.avif",
                items: [{
                  price: 25,
                }]
              }, {
                id: 2,
                name: "Pizza Capriciosa",
                imageUrl: "https://media.dodostatic.com/image/r:292x292/11ef16e27404d8a2bffb177c27cf05d2.avif",
                items: [{
                  price: 30,
                }]
              }, {
                id: 3,
                name: "Pizza Hawajska",
                imageUrl: "https://media.dodostatic.com/image/r:292x292/11ef16e27404d8a2bffb177c27cf05d2.avif",
                items: [{
                  price: 35,
                }]
              }, {
                id: 4,
                name: "Pizza Pepperoni",
                imageUrl: "https://media.dodostatic.com/image/r:292x292/11ef16e27404d8a2bffb177c27cf05d2.avif",
                items: [{
                  price: 40,
                }]
              }, {
                id: 5,
                name: "Pizza Vegetariana",
                imageUrl: "https://media.dodostatic.com/image/r:292x292/11ef16e27404d8a2bffb177c27cf05d2.avif",
                items: [{
                  price: 45,
                }]
              }, {
                id: 6,
                name: "Pizza Quattro Stagioni",
                imageUrl: "https://media.dodostatic.com/image/r:292x292/11ef16e27404d8a2bffb177c27cf05d2.avif",
                items: [{
                  price: 50,
                }]
              }]} categoryId={1}/>

              <ProductsGroupList title="Combo" items={[
                {
                  id: 13,
                  name: "Duza pizza i przystawka",
                  imageUrl: "https://media.dodostatic.com/image/r:233x233/11ef427a78aa6fcfb1229f936e6c4d91.avif",
                  items: [{
                    price: 58,
                  }]
                }, 
                {
                  id: 14,
                  name: "Duza pizza i napoj",
                  imageUrl: "https://media.dodostatic.com/image/r:233x233/11ef427a78aa6fcfb1229f936e6c4d91.avif",
                  items: [{
                    price: 55,
                  }]
                },
                {
                  id: 15,
                  name: "Duza pizza i przystawka",
                  imageUrl: "https://media.dodostatic.com/image/r:233x233/11ef427a78aa6fcfb1229f936e6c4d91.avif",
                  items: [{
                    price: 58,
                  }]
                }, 
                {
                  id: 16,
                  name: "Duza pizza i napoj",
                  imageUrl: "https://media.dodostatic.com/image/r:233x233/11ef427a78aa6fcfb1229f936e6c4d91.avif",
                  items: [{
                    price: 55,
                  }]
                },
                {
                  id: 17,
                  name: "Duza pizza i przystawka",
                  imageUrl: "https://media.dodostatic.com/image/r:233x233/11ef427a78aa6fcfb1229f936e6c4d91.avif",
                  items: [{
                    price: 58,
                  }]
                }, 
                {
                  id: 18,
                  name: "Duza pizza i napoj",
                  imageUrl: "https://media.dodostatic.com/image/r:233x233/11ef427a78aa6fcfb1229f936e6c4d91.avif",
                  items: [{
                    price: 55,
                  }]
                }
              ]} categoryId={2}/>

              <ProductsGroupList title="Napoje" items={[{
                id: 7,
                name: "Coca-Cola",
                imageUrl: "https://szybkikoszyk.pl/napoj-gazowany-coca-cola-330-ml.2.jpg",
                items: [{
                  price: 5,
                }]
                
              }, { 
                id: 8,
                name: "Sprite",
                imageUrl: "https://szybkikoszyk.pl/napoj-gazowany-coca-cola-330-ml.2.jpg",
                items: [{
                  price: 5,
                }]
              }, {
                id: 9,
                name: "Fanta",
                imageUrl: "https://szybkikoszyk.pl/napoj-gazowany-coca-cola-330-ml.2.jpg",
                items: [{
                  price: 5,
                }]
              }, {
                id: 10,
                name: "Pepsi",
                imageUrl: "https://szybkikoszyk.pl/napoj-gazowany-coca-cola-330-ml.2.jpg",
                items: [{
                  price: 5,
                }]
              }, {
                id: 11,
                name: "Mirinda",
                imageUrl: "https://szybkikoszyk.pl/napoj-gazowany-coca-cola-330-ml.2.jpg",
                items: [{
                  price: 5,
                }]
              }, {
                id: 12,
                name: "7Up",
                imageUrl: "https://szybkikoszyk.pl/napoj-gazowany-coca-cola-330-ml.2.jpg",
                items: [{
                  price: 5,
                }]
              }]}
              categoryId={6}
            />
            </div>
          </div>
        </div>
      </Container>


      
      
    </>
  );
}
