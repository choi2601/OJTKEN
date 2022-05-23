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
  volume: BoilVolumeType;
  boil_volume: BoilVolumeType;
  method: MethodType;
  ingredients: IngredientsType;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

interface BoilVolumeType {
  value: number;
  unit: string;
}

interface IngredientsType {
  malt: MaltType[];
  hops: HopType[];
  yeast: string;
}

interface HopType {
  name: string;
  amount: BoilVolumeType;
  add: string;
  attribute: string;
}

interface MaltType {
  name: string;
  amount: BoilVolumeType;
}

interface MethodType {
  mash_temp: MashTempType[];
  fermentation: FermentationType;
  twist: null;
}

interface FermentationType {
  temp: BoilVolumeType;
}

interface MashTempType {
  temp: BoilVolumeType;
  duration: number;
}

export { BeerInfoType };
