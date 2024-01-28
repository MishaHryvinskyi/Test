// import paintings from './painting.json';
// import PaintingList from 'components/Painting/PaintingList';
// import Section from 'components/Painting/Section';
import upcomingEvents from '../../upcoming-events.json'
import { EventBoard } from "components/EventBoard/EventBoard";
import { PageTitle } from "components/PageTitle/PageTitle";
import { Container } from './App.styled';

export const App = () => {
  return <Container>
    <PageTitle text="24th Core Worlds Coalition Conference"/>
    <EventBoard events={upcomingEvents}/>
    {/* <Section title="Топ тижня">
      <PaintingList items={paintings}/>
    </Section>  */}
    {/* <Painting 
      url={paint[0].url} 
      title={paint[0].title} 
      authorLink={paint[0].author.url} 
      authorTag={paint[0].author.tag} 
      price={paint[0].price}
      quantity={paint[0].quantity}
    />
    <Painting 
      url={paint[1].url} 
      title={paint[1].title} 
      authorLink={paint[1].author.url} 
      authorTag={paint[1].author.tag} 
      price={paint[1].price}
      quantity={paint[1].quantity}
    />
    <Painting 
      url={paint[2].url} 
      title={paint[2].title} 
      authorLink={paint[2].author.url} 
      authorTag={paint[2].author.tag} 
      price={paint[2].price}
      quantity={paint[2].quantity}
    /> */}
  </Container>
};
