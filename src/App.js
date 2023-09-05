import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ClassComp from './ClassComp';

function App() {

    const [num, setNum] = useState(0);
    const [factorNum, setFactorNum] = useState(28);

    function addNum() {
        setNum(num + 1);
    }

    const users = [
        {
            id: 1,
            name: 'Alice',
            age: 28,
            job: 'Engineer',
        },
        {
            id: 2,
            name: 'Bob',
            age: 34,
            job: 'Designer',
        },
        {
            id: 3,
            name: 'Charlie',
            age: 22,
            job: 'Student',
        },
        {
            id: 4,
            name: 'David',
            age: 41,
            job: 'Manager',
        },
        {
            id: 5,
            name: 'Eva',
            age: 30,
            job: 'Doctor',
        },
    ];
    
    // Example: mapping over the users to get their names
    const userNames = users.map(user => user.name);
    console.log(userNames); // ['Alice', 'Bob
     

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <p class="num">
                {num}
            </p>
        </div>
        <div>
            <button class="button" onClick={addNum}>Click me!</button>
        </div>

        <input 
          type="number" 
          step="1"
          value={factorNum}
          onChange={e => setFactorNum(e.target.value)}
        />

        <ClassComp num={factorNum} />

        <h4 style={{marginBottom: '10px'}}>List of Users</h4>

        <div>
            {users.map(user => {
                return (
                    <div style={{textAlign: 'left', border: '1px solid #61dafb', margin: '10px 20px', padding: '5px 20px'}}>
                        <p>{user.id} : {user.name} </p>
                        <p>{user.age} | {user.job}</p>
                    </div>
                )
            })}
        </div>
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
