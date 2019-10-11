import React, { Component } from 'react';

class Event extends Component {

  render() {
    console.log(this.props.data) 
    return ( 
      <h1>desde evento js</h1>
     );
  }
}
 
export default Event;