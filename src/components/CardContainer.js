import '../styles/Cards.css';
import getChampions, { champions } from '../assets/champions-images';
import { useEffect, useState } from 'react';
import Card from './Card';
import Score from './Score';

const CardContainer = () => {
  const [imgs, setImgs] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  //It is used for every champion on the champions array, so for each champion we call to get the image
  //and for each image we add in the same object the name of the champion
  //and another property that we will use to check if that champion was clicked
  const getImage = async (champion) => {
    const championImg = await getChampions(champion);
    setImgs((prevState) => {
      return [...prevState, { championImg, champion, isClicked: false }];
    });
  };

  useEffect(() => {
    champions.map((champion) => {
      return getImage(champion);
    });
    return () => {
      setImgs([]);
    };
  }, []);

  useEffect(() => {
    setImgs((prevState) => {
      return [...shuffle(prevState)];
    });
  }, []);

  //Every time the users clicks a img we shuffle the order fo the cards we check if it was previously clicked
  //and if not we add to current score if it was we get the current score to 0.
  const handleCardClick = (e) => {
    setImgs((prevState) => {
      prevState.map((img) => {
        if (e.target.parentElement.id === img.champion) {
          if (img.isClicked === false) {
            img.isClicked = true;
            setScore((prevState) => {
              return prevState + 1;
            });
            if (score > bestScore) {
              setBestScore(score);
            }
          } else {
            setScore(0);
          }
        }
      });
      console.log(score, bestScore, prevState);
      return [...shuffle(prevState)];
    });
  };

  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <div className="cards-container">
        {imgs.map((champ) => {
          return <Card champion={champ.champion} championImg={champ.championImg} handleCardClick={handleCardClick} />;
        })}
      </div>
    </>
  );
};

export default CardContainer;

//Shuffles the array so every time the user click an image it re-arranges the items displayed in a random order

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }

  return array;
}
