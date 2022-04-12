import '../styles/Cards.css';
import getChampions, { champions } from '../assets/champions-images';
import { useEffect, useState } from 'react';

const Cards = (props) => {
  const [championsState, setChampionsState] = useState(champions);

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

  const handleCardClick = () => {
    setChampionsState((prevState) => {
      return shuffle(prevState);
    });
  };

  return (
    <div className="cards-container">
      {imgs.map((champ) => {
        return (
          <div key={champ.champion} className="card" onClick={handleCardClick}>
            <img className="champion-img" src={champ.championImg} alt={`League of Legends champion  ${champ.champion}`}></img>
            <div className="champion-name">{champ.champion}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

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
