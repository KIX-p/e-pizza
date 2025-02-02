import { Container, Title} from "@/components/shared";
import Filters from "@/components/shared/filters";
import TopBar from "@/components/shared/topBar";



export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text ="Wszystkie pizzy" size="lg" className="font-extrabold"/>

      </Container>

      <TopBar/>

      
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filtracja */}
          <div className="w-[250px]">
            <Filters />
          </div>
          

          {/* Lista towarów */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Lista towarów
            </div>
          </div>
        </div>
      </Container>


      
      
    </>
  );
}
