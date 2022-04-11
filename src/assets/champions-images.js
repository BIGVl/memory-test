export default async function getChampions() {
  try {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg');

    const championBlob = await response.blob();
    const imgChampion = URL.createObjectURL(championBlob);
    return imgChampion;
  } catch (err) {
    console.log(err);
  }
}
