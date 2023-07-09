import './App.css'
import AppContextProvider from './context'
import AppRoutes from './pages/router'
import Loading from "./components/loading";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <Toaster />
        <Loading />
        <AppRoutes/>
      </AppContextProvider>
    </div>

  )
}

export default App
