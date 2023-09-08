import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../store';
import Rockets from '../components/rockets';

describe('Checks for rockets list component', () => {
  test('renders rockets list', () => {
    // Arrange
    render(<Provider store={Store}><Rockets /></Provider>);
    // Act
    const button = screen.findByText(/reserve/i);
    // Assert
    expect(button).toMatchSnapshot();
  });
  test('simulate rocket button click', async () => {
    // Arrang
    render(<Provider store={Store}><Rockets /></Provider>);
    // Act
    let button = await screen.findAllByText(/reserve/i);
    fireEvent.click(button[0]);
    button = screen.getByText(/cancel/i);
    // Assert
    expect(button).toMatchSnapshot();
  });
});
