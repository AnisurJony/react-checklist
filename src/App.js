import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyBlogs></MyBlogs>

      <Blog name="dilip" job="cricketer"></Blog>
      <Blog name="Mohammed Anisur Rahman" job="Engineer"></Blog>
      <Blog name="Md. Rony" job="Teacher"></Blog>

      <Mobile></Mobile>
      <LoadData></LoadData>
    </div>
  );
}

function MyBlogs() {
  const newStyle = {
    backgroundColor: 'yellow',
    border: '2px',
    margin: '5px',
    color: 'red'
  }
  return (
    <div>
      <article className="blog">
        <h3 style={newStyle}>Road to react</h3>
        <p style={{
          backgroundColor: 'white',
          border: '2px',
          margin: '5px',
          color: 'tomato'
        }}>React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.</p>
      </article>
    </div>
  )
}

function Blog(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Ocupassin:{props.job}</h4>
    </div>
  )
}



function Mobile(props) {
  const [counter, setCounter] = useState(100);
  const clickHandeler = () => {
    if (counter === 0) {
      setCounter(0);

    }

    else {
      setCounter(counter - 10);
    }
  };
  return (
    <div>
      <h2>{counter}</h2>
      <buttton onClick={clickHandeler} style={{ backgroundColor: 'red', color: 'white', border: '2px solid blue', borderRadius: '2px' }}>Battary down</buttton>
    </div>
  )
}


function LoadData(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  return (
    <div>
      {todos.map(todo => <h2>Title:{todo.title}</h2>)}
    </div>
  )
}

export default App;
