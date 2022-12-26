import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

// Types
export type PriceObs = {
  date: string;
  brand: string;
  product: string;
  price: number;
  weight: number;
  store: string;
  address: string;
};

export const importantCfdbFields = [
  'brand' 
  , 'dry_matter_analysis' 
  , 'ingredients' 
  , 'ingredient_rating' 
  , 'name'
  , 'nutrition_rating' 
  , 'type'
  , 'url' 
  , 'url_manufacturer' 
  // we're writing elm now
] as const;

export type CfdbData = Pick<{
  name: string;
  url: string;
  url_manufacturer: string;
  brand: string;
  quality_ingredients: string[];
  questionable_ingredients: string[];
  potentially_allergenic_ingredients: string[];
  ingredients: string[];
  ingredient_rating: number;
  nutrition_rating: number;
  allergens: string;
  calories_per_100g: number;
  calories_from_carbs: number;
  calories_from_fat: number;
  calories_from_protein: number;
  protein_compare: string;
  carb_compare: string;
  fat_compare: string;
  fiber_compare: string;
  calories_compare: string;
  overall_compare: string;
  guaranteed_analysis: {
    protein: number;
    fat: number;
    fiber: number;
    carb: number;
    ash: number;
  };
  moisture: number;
  type: 'wet' | 'dry';
  dry_matter_analysis: {
    protein: number;
    fat: number;
    fiber: number;
    carb: number;
    ash: number;
  };
}, typeof importantCfdbFields[number]>;

// Context
interface PageContextInterface {
  cfdb: any;
  setCfdb: React.Dispatch<React.SetStateAction<any>>;
  pricesObs: PriceObs[];
  setPricesObs: React.Dispatch<React.SetStateAction<PriceObs[]>>;
}
const PageContext = React.createContext<PageContextInterface>({
  cfdb: {},
  setCfdb: () => {},
  pricesObs: [],
  setPricesObs: () => {},
});

// Provider
interface PageContextProviderProps { children: React.ReactNode; }
const PageContextProvider = React.memo(({ children }: PageContextProviderProps) => {
  const [cfdb, setCfdb] = useLocalStorage<CfdbData[]>('cfdb', []);
  const [pricesObs, setPricesObs] = useLocalStorage<PriceObs[]>('pricesObs', []);

  return (
    <PageContext.Provider value={{ cfdb, setCfdb, pricesObs, setPricesObs }}>
      {children}
    </PageContext.Provider>
  );
});

// Hooks
const useCfdbData = () => {
  const { cfdb, setCfdb } = React.useContext(PageContext);

  return { 
    data: cfdb, 
    setData: setCfdb 
  };
};

const usePricesObsData = () => {
  const { pricesObs, setPricesObs } = React.useContext(PageContext);

  const appendData = React.useCallback(
    (obs: PriceObs) => setPricesObs((prev) => [...prev, [obs]].flat()), 
    [setPricesObs]
  );
  
  return { 
    data: pricesObs,
    appendData,
    setData: setPricesObs 
  };
};

export default PageContextProvider;
export { useCfdbData, usePricesObsData };
