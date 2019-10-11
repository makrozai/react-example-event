import React, { Component } from 'react';

class BaseForm extends Component {
  state = {  }

  references = {
    name: React.createRef(),
    category: React.createRef()
  }

  searchEvent = (e) => {
    /**
      * this function search the event in  api
      * @param {event} input  event of submit form
      * @returns {Object} object of element category for select list(html)
    */
    e.preventDefault()

    // create the object
    let searchData = {
      name: this.references.name.current.value,
      category: this.references.category.current.value
    }
    
    // send data to props
    this.props.getEvents(searchData)
     
  }
  
  showOptions = key => {
    /**
      * this function show all options from object list
      * @param {number} input number is key item of object list
      * @returns {Object} object of element category for select list(html)
    */
    let category = this.props.categories[key]
    let {id, name_localized} =category

    if(!id || !name_localized) return null

    return(
      <option key={id} value={id}>{name_localized}</option>
    )
  }
  render() {
    /**
      * This function is render for aplication or component
      * @returns {Object} this component
    */
    let categories = Object.keys(this.props.categories)

    return ( 
      <form onSubmit={this.searchEvent}>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoria
          </legend>
          <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
              <input 
                className="uk-input" 
                type="text"
                placeholder="nombre de evento o ciudad"
                ref={this.references.name}
              />
            </div>
            <div className="uk-margin" uk-margin="true">
              <select 
                className="uk-select"
                ref={this.references.category}
              >
                {categories.map(this.showOptions)}
              </select>
            </div>
            <div className="uk-margin" uk-margin="true">
              <button className="uk-button uk-button-danger">Buscar</button>
            </div>
          </div>
        </fieldset>
      </form>
     )
  }
}
 
export default BaseForm;