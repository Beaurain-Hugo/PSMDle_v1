export const getChampionImage = (championName: string): string => {
  // Handle special cases where champion names differ in Data Dragon
  const nameMap: { [key: string]: string } = {
    'Bel\'Veth': 'Belveth',
    'Kai\'Sa': 'Kaisa',
    'Aurelion Sol': 'AurelionSol',
    'Dr. Mundo': 'DrMundo',
    'Jarvan IV': 'JarvanIV',
    'Kog\'Maw': 'KogMaw',
    'K\'Sante': 'KSante',
    'Master Yi': 'MasterYi',
    'Miss Fortune': 'MissFortune',
    'Rek\'Sai': 'RekSai',
    'Tahm Kench': 'TahmKench',
    'Twisted Fate': 'TwistedFate',
    'Xin Zhao': 'XinZhao'
  };

  const formattedName = nameMap[championName] || championName.replace(/[^a-zA-Z]/g, '');
  return `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${formattedName}.png`;
};