//Fetches any image of a champion from League Of Legends
export default async function getChampions(champion) {
  try {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`);

    const championBlob = await response.blob();
    const imgChampion = URL.createObjectURL(championBlob);
    return imgChampion;
  } catch (err) {
    console.log(err);
  }
}

//List on LoL champions images to be displayed as clickable cards
const champions = [
  'Aatrox',
  'Darius',
  'Zed',
  'Yone',
  'Vi',
  'Akali',
  'Nami',
  'Kayle',
  'Katarina',
  'Kayn',
  'Jayce',
  'Jax',
  'Karma',
  'Karthus',
  'Kalista',
  'LeeSin',
  'Malphite',
  'Malzahar',
  'Qiyana',
  'Renekton'
];
export { champions };
