import React from 'react';
import './App.scss';

function BookList() {
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  );
}

const Message = () => {
  return <p className="">This is my message.</p>;
};
const Person = () => <h2>Kit</h2>;





//  ### Do not touch!!!!

function App() {
  return (
    <BookList/>
  );


}

export default App;
