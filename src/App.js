import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illastrator', price:'$70.99'},
    {name: 'Primior pro', price:'$120.99'},
    {name: 'PDF Reader', price:'$9.99'} 
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Product product = {products[3]}></Product>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'gray',
    height: '200px',
    width: '200px',
    margin:'10px',
    float: 'left'

  }
  return(
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button>Bye now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}: {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
