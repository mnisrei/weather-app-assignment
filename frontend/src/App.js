import Weather from './pages/Weather/Weather';
import { Provider } from 'react-redux';
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
