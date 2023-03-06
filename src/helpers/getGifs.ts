import { Datum } from '../interface/gifsInterface';

export const getGifs = async (category: string): Promise<Datum[]> => {
  const limit = 10;
  const key = '9WistE8EAC2MCmNfKQOAOp2k5cfdcOBf'; //import.meta.env.VITE_APY_GIF;
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=${limit}`
  );
  const data: Datum = await resp.json();

  return data.data;
};
