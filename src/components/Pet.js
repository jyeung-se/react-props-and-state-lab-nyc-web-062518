import React from 'react'

class Pet extends React.Component {

  render() {
    // debugger
    const gender = () => {
      if (this.props.pet.gender === 'male') {
        return '♂'
      } else {
        return '♀'
      }
    }

    // const cannotAdopt = <button className="ui disabled button">Already adopted</button>
    // const canAdopt = <button className="ui primary button" onClick={(pet) => this.props.onAdoptPet(pet)}>Adopt pet</button>
    // const adoptionStatus = () => {
    //   return (this.props.pet.isAdopted ? cannotAdopt : canAdopt)
    // }

    return (
      <div className="card" pet={this.props.pet.id}>
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted === true ?
          <button className="ui disabled button">Already adopted</button>
          :
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
