import './App.css'
import LoginFormContainer from './components/containers/LoginFormContainer'
import TodoContainer from './components/containers/TodoContainer'
import { TodoFormContainer } from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function AppReduxSaga() {
  return (
    <div className="App">
      <LoginFormContainer />
    </div>
  )
}

export default AppReduxSaga
