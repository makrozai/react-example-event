import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** Import of components */
import EventCard from './EventCard'

class EventList extends Component {
  render() { 
    return ( 
      <div className="uk-child-width-1-4@m" uk-grid="true">
        { Object.keys(this.props.events).map(key => (
          <EventCard
            key={key}
            data={this.props.events[key]}
          />
        )) }
      </div>
     );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired
}
 
export default EventList;