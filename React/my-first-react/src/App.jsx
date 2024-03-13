import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Todo from "./ToDo";
import Actors from "./ToDo";
import ShowBook from "./Books";


function App() {
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel'];
  const books = [
    {name:'physics',price:'50'},
    {name:'chem',price:'30'},
    {name:'bio',price:'40'},]
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Actors name='bappa raj'></Actors>
      {
        actors.map(actor => 
          <Actors name={actor}></Actors>
        )
      } */}
      <ShowBook books={books}></ShowBook>

      {/* <Todo task="learn react baba" isDone={true}></Todo> */}

      {/* <Todo task="core concept" isDone={false}></Todo>

      <Todo task="Try Jsx" isDone={true}></Todo> */}
      {/* <Person></Person>
      <Device name='laptop'></Device>
      <Device name='mobile'></Device>
      <Device name='iphone'></Device>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}



function Device({ name }) {
  // console.log(name)
  return <h2>This is Device: {name} </h2>;
}

function Person() {
  const age = 25;
  return <h3>I'm a person, with age: {age}</h3>;
}
function Student() {
  return (
    <div className="student">
      <h2>This is a Student</h2>
      <p>Name: </p>
      <p>age: </p>
    </div>
  );
}

function Developer() {
  const devoStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={devoStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
