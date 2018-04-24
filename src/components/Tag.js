import React from 'react'

import EventEmitter from '../events'

export class Tag extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      active: false,
      text: props.text
    }

    this.onTagClick = this.onTagClick.bind(this)

    EventEmitter.subscribe('EVENT_TAGS_SELECTION_CHANGED', this.onTagsSelectionChange.bind(this))
  }

  onTagsSelectionChange(tag) {
    if (tag !== this.state.text) {
      this.setState({
        active: false
      })
    }
  }

  onTagClick() {
    const a = !this.state.active
    this.setState({
      active: a
    })
    EventEmitter.dispatch('EVENT_TAGS_SELECTION_CHANGED', (a === true) ? this.state.text: null);
  }

  render() {
    return (
      <span onClick={this.onTagClick} className={'tag ' + (this.state.active === true ? '__active': '')}>{'#' + this.state.text}</span>
    )
  }
}
