import React, { Component } from 'react'

class EventCard extends Component {
  render() {
    /**
      * This function is render for aplication or component
      * @returns {Object} this component
    */

    // destructuring object of prop.data
    let {name, logo, description, url} = this.props.data
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
          <div className="uk-card-footer">
            <a className="uk-button uk-button-secondary" href={url}>Más informacion</a>
          </div>
        </div>
      </div>
     )
  }
}
 
export default EventCard;