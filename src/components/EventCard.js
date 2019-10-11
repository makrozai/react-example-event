import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    
    let {name, logo, description} = this.props.data
    // validate data name of item event
    if(!name) return null
    
    if(description.text.length > 250) {
      description.text = description.text.substr(0,250)
    }


    return ( 
      <div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            { logo !== null ?
                <img src={logo.url} alt={name.text} />
                : ''
            }
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{name.text}</h3>
            <p>{description.text}</p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default EventCard;