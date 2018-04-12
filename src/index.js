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
  title: 'Present builder (html version)',
  description: 'Present builder allows you to create a small graphic cards (presents) users can send their friends.'+
    ' User can upload the image from local disk or select one from social network. After decoration user can upload result to social network for moderation.'+
    ' Admin panel for professional designers also was implemented. They upload sprites and show live present preview.',
  benefit: 'This tool increased presents count on ok.ru portal\'s database and sails',
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
  title: 'New work title',
  description: 'New work description',
  images: ['https://www.travelgayeurope.com/wp-content/uploads/2017/02/Gay-RIGA-City-Guide.jpg']
}))
store.dispatch(addWork({
  title: 'Other new work title',
  description: 'New work description',
  images: ['https://d1x3cbuht6sy0f.cloudfront.net/sales/43260/afd21695_994d_48f7_84b9_2d9b4072a696.jpg']
}))
store.dispatch(addWork({
  title: 'Work with no images',
  description: 'New work description'
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
