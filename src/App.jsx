import './App.css'
import AppContextProvider from './context'
import AppRoutes from './pages/router'
import Loading from "./components/loading";
function App() {

  return (
    <AppContextProvider>
      <Loading />
      <AppRoutes/>
    </AppContextProvider>
  )
}

export default App
