import './App.css'
import AppContextProvider from './context'
import AppRoutes from './pages/router'
import Loading from "./components/loading";

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <Loading />
        <AppRoutes/>
      </AppContextProvider>
    </div>

  )
}

export default App
