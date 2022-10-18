import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { fetchWithTank } from './redux/action';

class App extends Component {
    render(){
      const { character, isLoading } = this.props
      if(isLoading) { return <div className='isLoading'><h2>Aguarde...</h2></div>}
      return(
        <div className='main-container'>
          <h2 className='title-person'> ☢️ Rick and Morty ☣️ </h2>
          <div className='container-personagens'> 
            {
              character.map(({name, species, image}, index) => {
                return (
                  <div key={index} className='infos-persons'>
                    <h2 className='name-person'> { name } </h2>
                    <h3 className='specie-person'> Especie: {species}</h3>
                    <img className='img-person' src={ image } alt={ name }></img>                    
                  </div>
                )
              })
            }
            <footer>
              <h3 className='footer'>Diretos reservados por Erick Andrade, 2022 @EBA</h3>
            </footer> 
          </div>
        </div>
      )
    }
}

function mapStateToProps(state){
  const { RickMortyReducer: { character, isLoading } } = state
  return {
    character,
    isLoading,
  }
}

function mapDispatchToProps(dispatch){
  return dispatch(fetchWithTank())
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
