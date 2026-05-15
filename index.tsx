import React from 'react';
import ReactDOM from 'react-dom';
import ThreeCardComponent from './ThreeCardComponent';

const cardItems = [
  { title: 'Card 1', description: 'This is the description of card 1', icon: 'fas fa-lock' },
  { title: 'Card 2', description: 'This is the description of card 2', icon: 'fas fa-cog' },
  { title: 'Card 3', description: 'This is the description of card 3', icon: 'fas fa-bell' }
];

const App = () => {
  return (
    <div>
      <ThreeCardComponent cardItems={cardItems} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);