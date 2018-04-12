import React from 'react'

// class Tag extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: props.text || '#text example',
//       active: props.active || 'false'
//     };
//   }
//
//   onClick() {
//
//   }
//
//   render() {
//     return (
//       <span className={'tag ' + (this.state.active === 'true' ? '__active': '')} onClick={this.onClick}>{this.state.text}</span>
//     );
//   }
// }

export const Tag = props => {

  function handleClick(e) {
    console.log('clicked: ' + props.text);
  }

  return (
    <span onClick={handleClick} className={'tag ' + (props.active === 'true' ? '__active': '')}>{props.text}</span>
  );
}
