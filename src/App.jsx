import './App.css'
import AppContextProvider from './context'
import AppRoutes from './pages/router'
import Loading from "./components/loading";
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <AppContextProvider>
      <Toaster />
      <Loading />
      <AppRoutes/>
    </AppContextProvider>
  )
}

export default App
