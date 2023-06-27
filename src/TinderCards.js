import React, { useState } from 'react'
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://static01.nyt.com/images/2023/05/24/multimedia/24MUSK-top-hbft/24MUSK-top-hbft-mediumSquareAt3X.jpg"
        },
        {
            name: 'Jeff Bezos',
            url: "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame =(name) => {
        console.log(name + "left the screen!");
        // setLastDirection(direction);
    };

  return (
    <div className='tinderCards'>
        <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
     
    </div>
  )
}

export default TinderCards
