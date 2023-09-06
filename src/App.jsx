import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/layout';
import Rockets from './components/rockets';
import Missions from './components/missions';
import Profile from './components/profile';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Rockets />} />
            <Route path="missions" element={<Missions />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
