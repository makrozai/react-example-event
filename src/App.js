import React, { Component } from 'react'

/** Import of components */
import Header from './components/HeaderTemplate'
import BaseForm from './components/BaseForm'
import EventList from './components/EventList'

class App extends Component{

  token = 'CXSGBLMBX7O2BSVPLQRI'
  order = 'date'

  state = {
    categories: [],
    events: []
  }

  componentDidMount() {
    /**
      * this function execute in create component
    */
    this.getCategories()
  }
  getCategories = async () => {
    /**
      * this function get all categories for api
      * @param {String} input token for request
      * @returns {Object} object of list all categories
    */
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`

    await fetch(url)
      .then(response => {
        return response.json()
      })
      .then(categories => {
        this.setState({
          categories: categories.categories
        })
      })
  }
  
  getEvents = async (search) => {
    /**
      * this function get all events for api
      * @param {String} input token for request
      * @returns {Object} object of list all categories
    */
   let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.order}&token=${this.token}&locale=es_ES`

   await fetch(url)
     .then(response => {
       return response.json()
     })
     .then(events => {
      this.setState({
        events: events.events
      })
     })
  }
  render() {
    /**
      * This function is render for aplication or component
      * @returns {Object} this component
    */
    return (
      <div className="App">
        <Header />

        <div className="uk-container">
          <BaseForm 
            categories={this.state.categories}
            getEvents ={this.getEvents}
          />
          <EventList 
            events={this.state.events}
          />
        </div>
      </div>
    );
  }
}

export default App
