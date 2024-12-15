export interface Professor {
  name: string;
  genre: 'Homme' | 'Femme';
  domaine: 'Communication' | 'Design' | 'Developpement';
  cheveux: string;
  yeux: string;
  UE: string[]
  photo: string;
}