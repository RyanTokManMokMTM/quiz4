// import logo from './logo.svg';
import './App.css'
import MultiButton from './componets/mulitButton'
import HelloText from './componets/Text'

function App() {
    return ( 
      <div>
        <HelloText/>
        {MultiButton(10)}
      </div>
    )
}

export default App;