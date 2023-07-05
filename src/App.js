import './App.css'
import AppContextProvider from './context'
import AppRoutes from './pages/router'

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <AppRoutes/>
      </AppContextProvider>
    </div>

  )
}

export default App
