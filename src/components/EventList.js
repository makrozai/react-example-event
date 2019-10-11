import React, { Component } from 'react';

/** Import of components */
import Event from './components/event'

class EventList extends Component {
  render() { 
    return ( 
      <div className="uk-child-width-1-4@m" uk-grid="true">
        { Object.keys(this.props.events).map(key => (
          <Event 
            key={key}
            data={this.props.events[key]}
          />
        )) }
      </div>
     );
  }
}
 
export default EventList;