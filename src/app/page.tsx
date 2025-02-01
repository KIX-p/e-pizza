import { Container, Title} from "@/components/shared";
import TopBar from "@/components/shared/topBar";



export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text ="Wszystkie pizzy" size="lg" className="font-extrabold"/>

      </Container>
      <TopBar/>
      
    </>
  );
}
