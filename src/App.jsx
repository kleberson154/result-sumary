import Result from './components/Result'
import Summary from './components/Summary'

function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white rounded-3xl flex shadow-2xl">
          <Result />
          <Summary />
        </div>
      </div>
    </>
  )
}

export default App
