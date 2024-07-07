export interface Person {
  id: number;
  name: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export const extractId = (url: string) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 2];
};
