import { getGifs } from '../../src/helpers/getGifs';

describe('test getGifs', () => {
  test('debe de regresar un arreglo de Gifs', async () => {
    const category = 'Goku';
    const Gifs = await getGifs(category);

    expect(Gifs.length).toBe(10);
    expect(Gifs[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
