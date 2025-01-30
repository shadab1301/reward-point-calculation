import './App.css'
import ErrorBoundryWrapper from './Component/ErrorBoundry/ErrorBoundryWrapper'
import RewardsCalculation from './Component/RewardsCalculationComponent'

function App() {
  return (
    <ErrorBoundryWrapper>
        <RewardsCalculation/>
    </ErrorBoundryWrapper>
    
  )
}
export default App
