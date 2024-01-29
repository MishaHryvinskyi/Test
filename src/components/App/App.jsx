// import paintings from './painting.json';
// import PaintingList from 'components/Painting/PaintingList';
// import Section from 'components/Painting/Section';
// import upcomingEvents from '../../upcoming-events.json'
// import { EventBoard } from "components/EventBoard/EventBoard";
// import { PageTitle } from "components/PageTitle/PageTitle";

import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';



export const App = () => {
  return <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics 
      stats={data} 
      title="Upload stats"
    />

    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
    {/* <PageTitle text="24th Core Worlds Coalition Conference"/>
    <EventBoard events={upcomingEvents}/> */}
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
  </div>
};