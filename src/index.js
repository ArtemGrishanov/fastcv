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
  images: ['//grishanov.org/img/constructor4.jpg',
    '//grishanov.org/img/constructor3.jpg',
    '//grishanov.org/img/constructor5.jpg',
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
  images: ['//grishanov.org/img/museums1.jpg',
    '//grishanov.org/img/museums2.jpg'
  ],
  url: 'https://artsmuseum.ok.ru/',
  tags: ['html', 'javascript', 'audio'],
  complexity: 2,
  role: 'Project Manager',
  teamSize: 8
}));
store.dispatch(addWork({
  title: 'Newyear 2015',
  description: {
    common: 'New project where the user is required to collect the needed combination of gems to go through the levels',
    tech: 'Unified model for mobile and Web versions, Drag-n-drop'
  },
  dateStart: 'Nov 01 2015',
  dateEnd: 'Dec 24 2015',
  images: [
    '//grishanov.org/img/newyear2015_1.jpg',
    '//grishanov.org/img/newyear2015_2.jpg'
  ],
  url: null,
  tags: ['html','javascript','game'],
  complexity: 5,
  role: 'Developer',
  teamSize: 6
}));
store.dispatch(addWork({
  title: 'Hockey TV Show Video Quiz',
  description: {
    common: 'Video polling on the serial where you shall give an answer faster than your friends. You can publish your result in the social network',
    tech: 'JSON quiz format for fast edition'
  },
  dateStart: 'Jul 30 2014',
  dateEnd: 'Sep 01 2014',
  images: [''],
  url: null,
  tags: [],
  complexity: 2,
  role: 'Developer',
  teamSize: 3
}));
store.dispatch(addWork({
  title: 'The School',
  description: {
    common: 'Simple game for gathering items on school subject',
    tech: 'Canvas animations, Asynchronous API request pool, Localization on-the-fly! Requesting translations from API and replacing texts in html dom'
  },
  dateStart: 'Jul 30 2014',
  dateEnd: 'Sep 01 2014',
  images: [''],
  url: null,
  tags: [],
  complexity: 4,
  role: 'Developer',
  teamSize: 3
}));
store.dispatch(addWork({
  featured: true,
  title: 'Easter 2014',
  description: {
    common: 'Make your own Easter egg and present it to a friend',
    tech: 'Pre-rendering all design combinations (more than 600 eggs). After that, a client should register only combination index'
  },
  dateStart: 'Mar 11 2014',
  dateEnd: 'Mar 30 2014',
  images: [''],
  url: null,
  tags: [],
  complexity: 4,
  role: 'Developer',
  teamSize: 3
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
  images: ['//grishanov.org/img/olimp.png'],
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
  images: ['//grishanov.org/img/catdetector1.png',
    '//grishanov.org/img/catdetector2.png',
    '//grishanov.org/img/catdetector3.png'
  ],
  dateStart: 'Jan 01 2014',
  dateEnd: 'Jan 30 2014',
  url: null,
  tags: ['AI', 'social', 'javascript'],
  complexity: 4,
  role: 'Project Manager',
  teamSize: 4
}));
store.dispatch(addWork({
  title: 'Film promo',
  description: {
    common: 'The project related to the movie release. My first time responsive experience'
  },
  images: ['//grishanov.org/img/okfilm1.jpg',
    '//grishanov.org/img/okfilm2.jpg'],
  dateStart: '2013-11-13',
  dateEnd: '2013-11-25',
  url: null,
  tags: ['html5', 'video', 'css', 'mobile'],
  complexity: 1,
  role: 'Developer',
  teamSize: 2
}));
store.dispatch(addWork({
  title: 'Mayor Quiz',
  description: {
    common: 'Entertaining test for the users to demolish myths about the social network'
  },
  images: [''],
  dateStart: 'May 30 2013',
  dateEnd: 'Jul 01 2013',
  url: null,
  tags: ['actionscript3','flash','flex','animation','rest','social'],
  complexity: 3,
  role: 'Developer',
  teamSize: 3
}));
store.dispatch(addWork({
  title: 'Security Quiz',
  description: {
    common: 'The application that develops the skills of user’s secure activity in the Internet. Real fraudsters’ methods to hack the users are given as the questions for the test'
  },
  images: [''],
  dateStart: 'May 30 2013',
  dateEnd: 'Jul 01 2013',
  url: null,
  tags: ['actionscript3','flash','flex','animation','rest','social'],
  complexity: 3,
  role: 'Developer',
  teamSize: 5
}));
store.dispatch(addWork({
  title: 'Friends Gallery',
  description: {
    common: 'Guess the interests of your friend; collect a gallery of your friends',
    benefits: 'Gamification helps collecting useful information about social network users',
    tech: 'A lot of custom UI items written in pure Actionscript.'
  },
  images: ['//grishanov.org/img/interests1.jpg',
    '//grishanov.org/img/interests2.jpg'],
  dateStart: 'Jul 30 2013',
  dateEnd: 'Oct 01 2013',
  url: null,
  tags: ['actionscript3','flash','flex','animation','rest','social'],
  complexity: 5,
  role: 'Developer',
  teamSize: 5
}));
store.dispatch(addWork({
  title: 'New Year 2013',
  description: {
    common: ''
  },
  images: ['//grishanov.org/img/newyear2013.jpg'],
  dateStart: 'Sep 05 2012',
  dateEnd: 'Dec 20 2012',
  url: null,
  tags: ['flash','actionscript3','flex','animation','rest','social'],
  complexity: 4,
  role: 'Developer',
  teamSize: 6
}));
store.dispatch(addWork({
  title: 'Barman',
  description: {
    common: ''
  },
  images: ['//grishanov.org/img/Barman.jpg']
}));
store.dispatch(addWork({
  title: 'Mafia',
  description: {
    common: 'Hardcore mobile action. iOs? Android? Java2ME only! Full English localization',
    tech: 'Scripting language. Complex memory management and bitmap data.'
  },
  dateStart: 'Jan 01 2008',
  dateEnd: 'Dec 31 2009',
  images: ['//grishanov.org/img/Brat2.jpg'],
  complexity: 5
}));
store.dispatch(addWork({
  title: 'Facecontrol',
  description: {
    common: ''
  },
  images: ['//grishanov.org/img/Facecontrol.jpg']
}));
store.dispatch(addWork({
  title: 'Radio',
  description: {
    common: ''
  },
  images: ['//grishanov.org/img/Radio.jpg'],
  tags: ['php','lastfm','rest']
}));
store.dispatch(addWork({
  featured: true,
  title: 'Take 2',
  description: {
    common: 'popular Take2 game implemented in Facebook. Multiplayer: you can arrange words for speed in real time. Bots are used in case free users are not available',
    tech: 'Crossword generation based on vocabulary. Programming of a bot playing with the user on his own'
  },
  images: [
    '//grishanov.org/img/Take2_2.png',
    '//grishanov.org/img/Take2_screen.png'
  ],
  dateStart: 'Jan 05 2011',
  dateEnd: 'May 20 2011',
  url: null,
  tags: ['flash','actionscript3','animation','facebook','game','rest','social'],
  complexity: 4,
  role: 'Developer',
  teamSize: 12
}));
store.dispatch(addWork({
  title: 'Shopping School',
  description: {
    common: 'Guess the real price of the product and win a prize. KupiVIP brand gained a huge number of registrations',
    tech: ''
  },
  images: [
    ''
  ],
  complexity: 2,
  dateStart: 'Jan 01 2011',
  dateEnd: 'Dec 01 2011',
}));
store.dispatch(addWork({
  featured: true,
  title: 'Informer',
  description: {
    common: 'A tool for intranet using. Visualizing company KPIs, tweets and staff photo to show on LED panels in the offices',
    tech: 'Grabbing data from CSV-like files. Twitter API integration.'
  },
  images: [
    '//grishanov.org/img/informer1.jpg',
    '//grishanov.org/img/informer2.jpg',
    '//grishanov.org/img/informer3.jpg',
    '//grishanov.org/img/informer4.jpg'
  ],
  dateStart: 'Jun 01 2011',
  dateEnd: 'Aug 30 2011',
}));
store.dispatch(addWork({
  title: 'Tic Tac Toe',
  description: {
    common: '',
    tech: 'Amazing AI with level difference.'
  },
  images: [
    ''
  ],
  complexity: 5,
  dateStart: 'Jan 01 2006',
  dateEnd: 'Dec 01 2006',
}));
store.dispatch(addWork({
  title: 'Numerology',
  description: {
    common: '',
    tech: 'Custom UI elements. Porting to tens of models'
  },
  images: [
    ''
  ],
  complexity: 3,
  dateStart: 'Jan 01 2006',
  dateEnd: 'Dec 01 2006',
  teamSize: 2
}));
store.dispatch(addWork({
  title: 'Cheet Sheets',
  description: {
    common: '',
    tech: 'CMS for manager. Building apps'
  },
  images: [
    ''
  ],
  complexity: 3,
  dateStart: 'Jun 01 2004',
  dateEnd: 'Oct 01 2005',
  teamSize: 4
}));
store.dispatch(addWork({
  title: 'Fastcv',
  description: {
    common: 'Create your site simply with no development'
  },
  url: 'https://github.com/ArtemGrishanov/fastcv',
  images: [

  ]
}));


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
