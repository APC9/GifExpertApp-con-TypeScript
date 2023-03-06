import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';

describe('Test <GifExpertApp /> ', () => {
  test('Debe de mostrar el isloading....', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'GifExpertApp'
    );
  });

  test('Debe de mostrar el titulo en un H1', () => {
    render(<GifExpertApp />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'GifExpertApp'
    );
    const form: HTMLFormElement = screen.getByRole('form');
    expect(form).toBeTruthy();
  });

  test('Debe de mostrar un formulario', () => {
    render(<GifExpertApp />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    const form: HTMLFormElement = screen.getByRole('form');

    expect(form).toBeTruthy();

    fireEvent.input(input, { target: { value: 'saitama' } });
    fireEvent.submit(form);
  });

  test('Debe de mostrar 2 titulos de Gifs al hacer el posteo del formulario', () => {
    render(<GifExpertApp />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    const form: HTMLFormElement = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'saitama' } });
    fireEvent.submit(form);

    screen.debug();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });
});
