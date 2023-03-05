import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { Datum } from '../interface/gifsInterface';

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Datum[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
