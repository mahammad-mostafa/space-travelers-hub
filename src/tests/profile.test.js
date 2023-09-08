import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../store';
import Profile from '../components/profile';

describe('Checks for profile page component', () => {
  test('renders rockets section in profile component', () => {
    // Arrange
    render(<Provider store={Store}><Profile /></Provider>);
    // Act
    const text = screen.getByText('My Rockets');
    // Assert
    expect(text).toMatchSnapshot();
  });
  test('renders missions section in profile component', () => {
    // Arrange
    render(<Provider store={Store}><Profile /></Provider>);
    // Act
    const text = screen.getByText('My Missions');
    // Assert
    expect(text).toMatchSnapshot();
  });
  test('renders empty rockets list in profile component', () => {
    // Arrange
    render(<Provider store={Store}><Profile /></Provider>);
    // Act
    const text = screen.getByText('No Rockets Reserved');
    // Assert
    expect(text).toMatchSnapshot();
  });
  test('renders empty missions list in profile component', () => {
    // Arrange
    render(<Provider store={Store}><Profile /></Provider>);
    // Act
    const text = screen.getByText('No Missions Joined');
    // Assert
    expect(text).toMatchSnapshot();
  });
});
