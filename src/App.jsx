import './App.css'
import AppContextProvider from './context'
import AppRoutes from './pages/router'

function App() {

  return (
    <AppContextProvider>
      <AppRoutes/>
    </AppContextProvider>
  )
}

export default App
