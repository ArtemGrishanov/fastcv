import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


import './css/style.css'
import App from './components/App'
import { cv } from './cv'
// import {
//   addWork,
//   setWorkFilter
// } from './actions'
//import cvApp from './reducers'

// const store = createStore(cvApp)

const allTags = []
const selectedWorks = []
cv.works.forEach((element) => {
  element.workId = element.title.replace(/[^A-z0-9]/g,'')
  // collect all unique tags
  if (element.tags && element.tags.length > 0) {
    element.tags.forEach((tag) => {
      if (allTags.indexOf(tag) < 0) allTags.push(tag)
    })
  }

  //
  if (element.selectedWorks) selectedWorks.push(element)
})

ReactDOM.render(
  <App tags={allTags} selectedWorks={selectedWorks}/>,
  document.getElementById('id-react_app')
);

// console.log(store.getState());
//
// const unsibscribe = store.subscribe(() =>
//   // any state changes
//   console.log(store.getState())
// )
//
//
//
// store.dispatch(setWorkFilter(''))
//
// window.works = store.getState().works;
//
// unsibscribe()





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
