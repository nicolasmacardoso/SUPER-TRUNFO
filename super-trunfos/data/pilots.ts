export type Pilot = {
  id: number;
  name: string;
  description: string;
  team: string;
  country: string;
  stars: number;
  image: string;
};

const pilots: Pilot[] = [
  {
    id: 1,
    name: 'Lewis Hamilton',
    description:
      'Heptacampe\u00E3o mundial de F\u00F3rmula 1 e um dos maiores pilotos da hist\u00F3ria.',
    team: 'Mercedes',
    country: 'Reino Unido',
    stars: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Lewis_Hamilton_2022_Saudi_Arabia.jpg',
  },
  {
    id: 2,
    name: 'Max Verstappen',
    description:
      'Campe\u00E3o dominante da Red Bull e refer\u00EAncia da nova gera\u00E7\u00E3o da F\u00F3rmula 1.',
    team: 'Red Bull Racing',
    country: 'Holanda',
    stars: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Max_Verstappen_2017_Malaysia_3.jpg',
  },
  {
    id: 3,
    name: 'Charles Leclerc',
    description: 'Piloto talentoso da Ferrari, conhecido pela velocidade em classifica\u00E7\u00E3o.',
    team: 'Ferrari',
    country: 'M\u00F4naco',
    stars: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Charles_Leclerc_2022_Saudi_Arabia.jpg',
  },
  {
    id: 4,
    name: 'Fernando Alonso',
    description: 'Bicampe\u00E3o mundial com enorme experi\u00EAncia e leitura de corrida.',
    team: 'Aston Martin',
    country: 'Espanha',
    stars: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Fernando_Alonso_2016_Malaysia_1.jpg',
  },
];

export default pilots;
