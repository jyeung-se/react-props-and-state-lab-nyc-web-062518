import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    console.log(this.props.pets)
    const mappedPets = this.props.pets.map((pet) => {
      return (<Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />)
    })
    // console.log(mappedPets)
    return (
      <div className="ui cards">
        {mappedPets}
      </div>
    )
  }
}

export default PetBrowser
