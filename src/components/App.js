import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    let petsDataSource = '/api/pets'

    if (this.state.filters.type !== 'all') {
      petsDataSource += `?type=${this.state.filters.type}`
    }

    fetch(petsDataSource)
      .then(res => res.json())
      .then(pets => this.setState({
        pets: pets
      }))
      // debugger
      // .then(pets => console.log(pets))
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }


  onAdoptPet = (id) => {
    const newState = this.state.pets.map(pet => {
      if (pet.id === id ) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    this.setState({pets: newState})
  }

  render() {
      // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
