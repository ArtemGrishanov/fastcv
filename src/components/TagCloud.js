import React from 'react'
import { Tag } from './Tag';

export class TagCloud extends React.Component {

  /**
  *
  **/
  constructor(props) {
    super(props);
    this.state = {
      //TODO get this properties from Storage
      tags: ['#canvas', '#React', '#javascript']
    };
  }

  render() {
    return (
      <div className="tag-cloud">
        {this.state.tags.map((tag, i) =>
          <Tag key={i} text={tag}/>
        )}
      </div>
    );
  }
}
