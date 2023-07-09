import { createRef } from 'react'
import { Route, Routes, useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Protected from '../components/protected'
import HomePage from './home'
import LoginPage from './login'
import LogoutPage from './logout'
import NotFoundPage from './not-found'
import QuizPage from './quiz'
import StationPage from './station'
import StationCheckPage from './station-check'
import StationDashboardPage from './station-dashboard'
import { useSystem } from '../hooks/useSystem'

const routes = [
  { path: '/*', name: 'NotFoundPage', element: <NotFoundPage />, nodeRef: createRef() }, 
  { path: '/', name: 'LoginPage', element: <LoginPage />, nodeRef: createRef() }, 

  { path: '/home', name: 'HomePage', element: <HomePage />, nodeRef: createRef() }, 

  { path: '/login', name: 'LoginPage', element: <LoginPage />, nodeRef: createRef() }, 
  { path: '/logout', name: 'LogoutPage', element: <LogoutPage />, nodeRef: createRef() }, 


  { path: '/station', name: 'StationPage', element: <Protected><StationPage /></Protected> , nodeRef: createRef() }, 
  { path: '/station-dashboard', name: 'StationDashboardPage', element: <Protected><StationDashboardPage /></Protected> , nodeRef: createRef() }, 
  { path: '/station-check', name: 'StationCheckPage', element: <Protected><StationCheckPage /></Protected>, nodeRef: createRef() }, 

  { path: '/quiz', name: 'QuizPage', element: <Protected><QuizPage /></Protected>, nodeRef: createRef() }, 

];
 
function WrapperRoutes() { 
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =  routes.find((route) => route.path === location.pathname) ?? {}
  const {trace} = useSystem();

  const myOnEnter = (node, done)=>{
    trace('WrapperRoutes:myOnEnter:location', location);
  }
  const myOnExit = (node, done)=>{
    trace('WrapperRoutes:myOnExit:location', location);
  }
  

  return (
    <>
      <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              onEnter={()=>myOnEnter(nodeRef)}
              onExit={()=>myOnExit(nodeRef)}
              nodeRef={nodeRef}
              timeout={200}
              classNames="mypage"
              unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="mypage">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
    </>
  )
}


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<WrapperRoutes />}>
        {routes.map(r=>(<Route key={r.path} path={r.path} element={r.element} />))}
      </Route>
    </Routes>
  )
}

export default AppRoutes