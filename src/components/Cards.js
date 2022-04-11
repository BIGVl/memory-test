import '../styles/Cards.css';
import getChampions from '../assets/champions-images';
import { useEffect, useState } from 'react';

const Cards = (props) => {
  const [img, setImg] = useState('');

  const getImage = async () => {
    const champion = await getChampions();
    setImg(champion);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Cards;

/**Create an array that will contain all the champions names and loop through the array to create a card for each champion by calling the getChampion
 * and create a card component that will contain all the data and the values values that each card will need or maybe just a html tag, see for yourself
 *
 */
