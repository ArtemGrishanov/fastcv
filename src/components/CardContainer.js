import React from 'react'
import { WorkCard } from './WorkCard'
import EventEmitter from '../events'

export class CardContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedTags: null,
      allWorks: props.works,
      works: props.works
    }

    this.selectTagHandler = this.selectTag.bind(this)
    EventEmitter.subscribe('EVENT_TAGS_SELECTION_CHANGED', this.onTagsSelectionChange.bind(this))
  }

  selectTag(tag) {
    console.log('CardContainer.selectTag: ' + tag);
    if (tag) {
      let filteredWorks = []
      this.state.allWorks.forEach((element) => {
        if (element.tags && element.tags.indexOf(tag) >= 0) filteredWorks.push(element)
      })
      this.setState({
        works: filteredWorks
      })
    }
    else {
      // no filter
      this.setState({
        works: this.state.allWorks
      })
    }
    this.setState({
      selectedTags: tag
    })
  }

  onTagsSelectionChange(tag) {
    // in fact only ONE tag will come (its not array)
    this.selectTag(tag)
  }

  render() {
    return <div className="card-container">
        {this.state.works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
  }
}
