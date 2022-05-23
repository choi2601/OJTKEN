interface BeerInfoType {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: BoilVolume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

interface BoilVolumeType {
  value: number;
  unit: string;
}

interface IngredientsType {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

interface HopType {
  name: string;
  amount: BoilVolume;
  add: string;
  attribute: string;
}

interface MaltType {
  name: string;
  amount: BoilVolume;
}

interface MethodType {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null;
}

interface FermentationType {
  temp: BoilVolume;
}

interface MashTempType {
  temp: BoilVolume;
  duration: number;
}

export { BeerInfoType };
