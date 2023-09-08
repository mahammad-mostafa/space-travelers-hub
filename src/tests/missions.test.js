import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/mission';
import Missions from '../components/missions';
import store from '../store';

describe('Missions list component', () => {
  it('renders properly', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    screen.debug();
  });

  it('renders the list of missions', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const listElement = await screen.findByTestId('missions-list');
    expect(listElement).toBeInTheDocument();
  });

  test("clicking 'join' toggles the member status", async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    await screen.findByTestId('missions-list');

    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button);
    expect(button.textContent).toBe('Leave');
  });
});

describe('Mission item component', () => {
  const missionObj = {
    name: 'Mission name',
    id: '1',
    description: 'Mission description',
    link: 'Mission website',
    member: false,
  };

  it('renders properly', () => {
    render(
      <Provider store={store}>
        <Mission mission={missionObj} />
      </Provider>,
    );
    screen.debug();
  });

  it('contains the correct values', () => {
    render(
      <Provider store={store}>
        <Mission mission={missionObj} />
      </Provider>,
    );
    const nameElement = screen.getByText(missionObj.name);
    const descriptionElement = screen.getByText(missionObj.description);

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
