import React,{useState} from 'react'
import data from './data';
import List from './List';
import './App.css';

{/*import logo from './logo.svg';*/}

function App()
{
  const [people,setPeople] = useState(data);
  return(
    <main>
      <sectiion className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=>{setPeople([])}}>Clear All</button>
      </sectiion>

    </main>
  )
}


export default App



{/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/}