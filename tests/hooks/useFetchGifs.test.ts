import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hook/useFetchGifs';

describe('Test hook useFetchGifs', () => {
  const category = 'Saitama';
  test('Debe de retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;

    expect(images).toBe(undefined);
    expect(isLoading).toBe(true);
  });

  test('Debe de retornar un images[] y el isLoading=False', async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() =>
      expect(result.current.images?.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images?.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
