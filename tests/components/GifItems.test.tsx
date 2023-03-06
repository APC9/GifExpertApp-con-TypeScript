import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItems } from '../../src/components/GifItems';

describe('Test <GifItems /> ', () => {
  const title = 'Goku';
  const url = 'https://media.giphy.com/media/l0000';

  test('debe de hacer match con el snapchot', () => {
    const { container } = render(<GifItems title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el url y el Alt indicado', () => {
    render(<GifItems title={title} url={url} />);

    //expect(screen.getByRole<HTMLImageElement>('img').src).toBe(url);
    const { src, alt } = screen.getByRole<HTMLImageElement>('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('Debe de monstrar el titulo en el componente', () => {
    render(<GifItems title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
