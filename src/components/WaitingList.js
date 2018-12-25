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

const WaitingList = ({
  input, // **** add
  waitingList,
  onChange, // **** add
  onSubmit, // **** add
  onEnter,
  onLeave,
}) => {
  // **** convert data to component list  
  const waitingItems = waitingList.map(w => (
    <WaitingItem
      key={w.id}
      text={w.name}
      entered={w.entered}
      id={w.id}
      onEnter={() => onEnter(w.id)}
      onLeave={() => onLeave(w.id)}
    />
  ));
  return (
    <div className="WaitingList">
      <h2>Waiter List</h2>
      {/* set event and value */}
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button>Register</button>
      </form>
      <ul>{waitingItems}</ul>
    </div>
  );
};

export default WaitingList;