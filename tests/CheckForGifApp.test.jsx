import { render, screen, fireEvent } from '@testing-library/react';
import { CheckForGifApp } from '../src/CheckForGifApp';

describe('Pruebas en <CheckForGifApp />', () => {

    test('Debe renderizar el título correctamente', () => {
        render(<CheckForGifApp />);
        expect(screen.getByText('CheckForGifApp')).toBeTruthy();
    });

    test('Debe mostrar la categoría inicial "Messi"', () => {
        render(<CheckForGifApp category={'Messi'}/>);
        expect(screen.getByText('Messi')).toBeTruthy();
    });

    test('Debe agregar una nueva categoría cuando se envía el formulario', () => {
        render(<CheckForGifApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        // Simula el cambio en el input y el envío del formulario
        fireEvent.change(input, { target: { value: 'Di Maria' } });
        fireEvent.submit(form);
        
        // Verifica que la nueva categoría se haya agregado
        expect(screen.getByText('Di Maria')).toBeTruthy();
    });

    test('No debe agregar una categoría duplicada', () => {
        render(<CheckForGifApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        // Simula el cambio en el input y el envío del formulario con una categoría existente
        fireEvent.change(input, { target: { value: 'Di Maria' } });
        fireEvent.submit(form);
        
        // Verifica que solo exista una vez la categoría 'Di Maria'
        const categories = screen.getAllByText('Di Maria');
        expect(categories.length).toBe(1);
    });

});
