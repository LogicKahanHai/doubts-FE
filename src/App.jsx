import Navbar from './components/Navbar'
import './App.css'
import QuestionsContainer from './components/questions/QuestionsContainer'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto d-flex justify-content-center">
        <div className='d-block'>
          <h1>Welcome {"{name}"}</h1>
          <p className="text-muted">
            You can ask your questions below
          </p>
          <QuestionsContainer />
        </div>
      </div>
    </>
  )
}

export default App
