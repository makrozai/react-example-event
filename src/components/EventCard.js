import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    console.log(this.props.data) 
    return ( 
      <div>
        <div className="uk-card uk-card-default">
          <img />
        </div>
      </div>
     );
  }
}
 
export default EventCard;