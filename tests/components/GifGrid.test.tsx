import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { getGifs } from '../../src/helpers/getGifs';
import { useFetchGifs } from '../../src/hook/useFetchGifs';

jest.mock('../../src/hook/useFetchGifs');

describe('Test en <GifGrid />', () => {
  const category = 'Sheldon';

  test('Debe de mostrar el loading inicialmente', () => {
    const mockFetchGifs = jest.mocked(useFetchGifs);
    mockFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...')).toBeTruthy();
  });

  test('Debe de mostrar la categoria en un H3', () => {
    const mockFetchGifs = jest.mocked(useFetchGifs);
    mockFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toContain(
      category
    );
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', async () => {
    const mockFetchGifs = jest.mocked(useFetchGifs);

    const Gifs = await getGifs(category);

    mockFetchGifs.mockReturnValue({
      images: Gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(10);
  });
});
