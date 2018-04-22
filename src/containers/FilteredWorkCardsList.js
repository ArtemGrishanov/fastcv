// import { connect } from 'react-redux'
//
// import { CardContainer } from '../components/CardContainer'
// import { setWorkFilter } from '../actions'
//
// const getFilteredWorks = (works, filter) => {
//   if (filter.searchText) {
//     //TODO rrr
//     return works.filter(w => w.title.indexOf(filter.searchText) >= 0);
//   }
//   return works;
// }

// const mapStateToProps = state => {
//   return {
//     works: getFilteredWorks(state.works, state.filter)
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onTagClick: () => {
//       dispatch(setWorkFilter('')) //TODO text
//     }
//   };
// }
//
// /*
//   Container component for filtering and viewing work cards
// */
// export const FilteredWorkCardsList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
// (CardContainer);
