import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Adopt me!'),
    [
      React.createElement(Pet, {
        name: 'Kongo',
        animal: 'Dog',
        breed: 'Frenchie',
      }),
      React.createElement(Pet, {
        name: 'Salt',
        animal: 'Cat',
        breed: 'Lebanese',
      }),
      React.createElement(Pet, {
        name: 'Oink',
        animal: 'Pig',
        breed: 'British',
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById('root'));
