export type SpaService = {
  id: string;
  serviceName: string;
  description: string;
  price: string;
};

export type PetProduct = {
  id: string;
  category: string;
  image: string;
  description: string;
  collection: string;
  price: string;
};

export type ContentItemType = {
  id: number;
  title?: string;
  imageUrl: string;
  text: string;
};

export type InfoDogType = {
  name: string;
  energy: number;
  image_link: string;
  good_with_other_dogs: number;
  good_with_strangers: number;
  min_life_expectancy: number;
};
