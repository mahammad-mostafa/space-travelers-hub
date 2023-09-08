import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../store';
import Rocket from '../components/rocket';

describe('Checks for rocket item component', () => {
  const rocket = {
    id: '0', name: 'test', description: 'test', image: 'blank', link: 'test', reserved: false,
  };
  test('renders rocket item in rockets page', () => {
    // Arrange
    render(<Provider store={Store}><Rocket rocket={rocket} /></Provider>);
    // Act
    const button = screen.getByText(/reserve/i);
    // Assert
    expect(button).toMatchSnapshot();
  });
  test('renders rocket item in profile page', () => {
    // Arrang
    render(<Provider store={Store}><Rocket rocket={rocket} profile /></Provider>);
    // Act
    const button = screen.getByText(/read/i);
    // Assert
    expect(button).toMatchSnapshot();
  });
});
