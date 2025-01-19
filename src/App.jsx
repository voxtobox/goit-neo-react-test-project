import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
