import { GifItems } from './GifItems';
import { useFetchGifs } from '../hook/useFetchGifs';

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images?.map(({ id, title, images }) => (
          <GifItems key={id} title={title} url={images.downsized_medium.url} />
        ))}
      </div>
    </>
  );
};
