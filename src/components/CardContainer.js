import '../styles/Cards.css';
import getChampions, { champions } from '../assets/champions-images';
import { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {
  const [imgs, setImgs] = useState([]);

  const getImage = async (champion) => {
    const championImg = await getChampions(champion);
    setImgs((prevState) => {
      return [...prevState, { championImg, champion }];
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

  const handleCardClick = (e) => {
    if (!e.target.parentElement.classList.contains('clicked')) {
      setImgs((prevState) => {
        return [...shuffle(prevState)];
      });
    }
  };

  return (
    <div className="cards-container">
      {imgs.map((champ) => {
        return <Card champion={champ.champion} championImg={champ.championImg} handleCardClick={handleCardClick} />;
      })}
    </div>
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
