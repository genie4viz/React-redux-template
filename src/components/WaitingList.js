import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>Come in</button>
        <button onClick={onLeave}>Go out</button>
      </div>
    </li>
  );
};

const WaitingList = ({ waitingList, onEnter, onLeave }) => {
  return (
    <div className="WaitingList">
      <h2>Waiter List</h2>
      <form>
        <input />
        <button>Register</button>
      </form>
      <ul>
        <WaitingItem text="John" entered />
        <WaitingItem text="Louis" />
        <WaitingItem text="Jeffery" />
      </ul>
    </div>
  );
};

export default WaitingList;
