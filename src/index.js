import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


import './css/style.css'
import App from './components/App'
import {
  addWork,
  setWorkFilter
} from './actions'
import cvApp from './reducers'

const store = createStore(cvApp)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('id-react_app')
);

console.log(store.getState());

const unsibscribe = store.subscribe(() =>
  // any state changes
  console.log(store.getState())
)

store.dispatch(addWork({
  featured: true,
  title: 'Present builder (html version)',
  description: {
    common: 'Present builder allows you to create a small graphic cards (presents) users can send their friends.'+
      ' User can upload the image from local disk or select one from social network. After decoration user can upload result to social network for moderation.'+
      ' Admin panel for professional designers also was implemented. They upload sprites and show live present preview.',
    benefits: 'This tool increased presents count on ok.ru portal\'s database and sails',
    tech: 'Creating bitmap from a bunch of canvases was a very interesting task.'
  },
  dateStart: 'May 22 2014',
  dateEnd: 'Jul 25 2014',
  images: ['https://s3.eu-central-1.amazonaws.com/grishanov.org/img/constructor4.jpg',
    'https://s3.eu-central-1.amazonaws.com/grishanov.org/img/constructor3.jpg',
    'https://s3.eu-central-1.amazonaws.com/grishanov.org/img/constructor5.jpg',
  ],
  url: 'https://ok.ru/app/constructor',
  tags: ['html', 'css', 'javascript', 'ajax', 'canvas', 'cors', 'social', 'rest', 'grunt', 'svg', 'animation'],
  complexity: 5,
  role: 'Developer',
  teamSize: 3
}))
store.dispatch(addWork({
  title: 'The Pushkin state museun of fine arts and ok.ru',
  description: {
    common: 'Partner project with famous museum. Combine and intergrate different services. Coordinating remote team.',
    benefits: 'Reputation marketing for social network and new clients for museum.',
    tech: 'VR service integration into our application'
  },
  dateStart: 'Apr 10 2017',
  dateEnd: 'Apr 28 2017',
  images: ['https://s3.eu-central-1.amazonaws.com/grishanov.org/img/museums1.jpg',
    'https://s3.eu-central-1.amazonaws.com/grishanov.org/img/museums2.jpg'
  ],
  url: 'https://artsmuseum.ok.ru/',
  tags: ['html', 'javascript', 'audio'],
  complexity: 2,
  role: 'Project Manager',
  teamSize: 8
}));
store.dispatch(addWork({
  featured: true,
  title: 'Olympic games 2014',
  description: {
    common: 'User must collect coins and reach finish. Share result with your friends!',
    benefits: 'Relation with important event for the business',
    tech: 'Classic game loop implementation on javascript: sprites, collisions, key handling. Designing of infinite game world was amusing including textures and track curve'
  },
  dateStart: 'Dec 11 2013',
  dateEnd: 'Feb 14 2014',
  images: ['https://s3.eu-central-1.amazonaws.com/grishanov.org/img/olimp.png'],
  url: null,
  tags: ['html', 'javascript', 'jquery', 'game', 'animation', 'canvas'],
  complexity: 4,
  role: 'Developer',
  teamSize: 3
}));
store.dispatch(addWork({
  title: 'Cat detector',
  description: {
    common: 'Hackaton project. Implementing new experimantal features for social network. The app detects cats on user uploaded photos.'
  },
  images: ['https://s3.eu-central-1.amazonaws.com/grishanov.org/img/catdetector.png'],
  dateStart: 'Jan 01 2014',
  dateEnd: 'Jan 30 2014',
  url: null,
  tags: ['AI', 'social', 'javascript'],
  complexity: 4,
  role: 'Project Manager',
  teamSize: 4
}))

store.dispatch(setWorkFilter(''))

unsibscribe()

// function component() {
//
//   var element = document.createElement('div');
//
//   // Lodash, now imported bu this script
//   element.innerHTML = _.join(['Hiss122sss', 'webpack123'], ' ');
//
//   return element;
// }
//
// document.body.appendChild(component());
//
// var variable1 = '123';
// const foo = () => "result_of_foo123";
//alert('hello' + variable1 + ' ' + foo());
