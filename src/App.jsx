import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/layout';
import Rockets from './components/rockets';
import Missions from './components/mission';
import Profile from './components/profile';
import Indicator from './components/indicator';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Rockets />} />
            <Route path="missions" element={<Missions />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Indicator error="404 Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
