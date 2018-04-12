import {
  ACTION_ADD_WORK,
  ACTION_SET_WORK_FILTER
} from './actionTypes'

/**
* Constants to describe how works could be filtered
*/
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/**
*
*/
export function addWork(workData = {}) {
  return {
    type: ACTION_ADD_WORK,
    workData
  };
}

/**
 *
 * @param {string} searchText
 */
export function setWorkFilter(searchText = '') {
  return {
    type: ACTION_SET_WORK_FILTER,
    filter: {
      //TODO
      showFeaturedWorks: true,
      tags: [],
      searchText: searchText
    }
  };
}
