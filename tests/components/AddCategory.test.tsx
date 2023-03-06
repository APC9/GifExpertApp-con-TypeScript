import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Test <AddCategory  />', () => {
  const inputValue = 'DrangonBall';
  const onNewCategory = jest.fn();

  test('debe de cambiar el valor de la caja de texto ', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input: HTMLInputElement = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    const form: HTMLFormElement = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled(); // halla sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); // halla sido llamada X veces
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //halla sido llamada con el valor
  });

  test('No debe de llamar el onNewCategory si el input esta vacio', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);

    jest.clearAllMocks();
    const form: HTMLFormElement = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
