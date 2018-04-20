import { combineReducers } from 'redux'

import {
  ACTION_ADD_WORK,
  ACTION_SET_WORK_FILTER
} from './actionTypes'

const initialState = {
  filter: {
    showFeaturedWorks: true,
    tags: [],
    searchText: ''
  },
  works: [
    {
      title: 'work title',
      description: 'work description, technologies, features, business purposes',
      date: 'Apr 4 2018',
      images: ['https://grishanov.org/1.jpg','https://grishanov.org/2.jpg'],
      url: 'http://example.org',
      tags: ['react', 'javascript', 'css']
    },
    {
      title: 'Another good work'
    }
  ]
}

/**
* Create key from title for direct project link
*/
function createKey(str) {
  return str.replace(/[^A-z0-9]/,'')
}

function works(state = [], action) {
  switch(action.type) {
    case ACTION_ADD_WORK: {
      return [
          ...state,
          {
            key: createKey(action.workData.title),
            title: action.workData.title,
            description: action.workData.description,
            date: action.workData.date,
            images: action.workData.images,
            url: action.workData.url,
            tags: action.workData.tags
          }
        ]
    }
    default:
      return state;
  }
}

function filter(state = initialState.filter, action) {
  switch(action.type) {
    case ACTION_SET_WORK_FILTER: {
      return {...state,
          showFeaturedWorks: action.filter.showFeaturedWorks,
          tags: action.filter.tags,
          searchText: action.filter.searchText
      };
    }
    default:
      return state;
  }
}

// function myApp(state = initialState, action) {
//   switch (action.type) {
//     case ACTION_SET_WORK_FILTER: {
//       // creating new object here
//       Object.assign({}, state, {
//         worksFilterText: action.filter
//       });
//     }
//     case ACTION_ADD_WORK: {
//       Object.assign({}, state, {
//         works: works(state.works, action) // call another reducer
//       });
      // return Object.assign({}, state, {
      //   works: [
      //     ...state.works,
      //     {
      //       title: action.workDate.title,
      //       description: action.workData.description,
      //       date: action.workData.date,
      //       images: action.workData.images,
      //       url: action.workData.url,
      //       tags: action.workData.tags
      //     }
      //   ]
      // });
//     }
//     default: {
//       return state;
//     }
//   }
// }

const cvApp = combineReducers({
  filter,
  works
})

export default cvApp
