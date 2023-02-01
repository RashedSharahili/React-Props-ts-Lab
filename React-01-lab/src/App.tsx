import './App.css'
import Programers from './components/Programers'
import Companies from './components/Companies'
import Services from './components/Services'

function App() {

  return (
    <div className="App">
      <br></br>
      <div className="container">
        <Companies coName={"pp"} emp_count={3} founderYear={2016}/>
        <br></br>
        <h2>Employees</h2>
        <div className="row">
          <div className="col-4">
            <Programers name={"Rashed"} progLangs={"PHP | SWIFT | KOTLIN | JAVASCRIPT"} experienceWork={4} company={"PP"} />
          </div>
          <div className="col-4">
            <Programers name={"Rashed"} progLangs={"PHP | SWIFT | KOTLIN | JAVASCRIPT"} experienceWork={4} company={"PP"} />
          </div>
          <div className="col-4">
            <Programers name={"Rashed"} progLangs={"PHP | SWIFT | KOTLIN | JAVASCRIPT"} experienceWork={4} company={"PP"} />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-4">
            <Services serviceKind={"Programming"} expectedPrices={1500} />
          </div>
          <div className="col-4">
            <Services serviceKind={"Maintince"} expectedPrices={900} />
          </div>
          <div className="col-4">
            <Services serviceKind={"Networking"} expectedPrices={2000} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
