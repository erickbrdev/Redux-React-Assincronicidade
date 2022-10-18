import { REQUIRE_API, API_SUCESS, API_ERROR } from "../action"

const INITIAL_STATE = {
  character: [], 
  isLoading: true,
  error: null,  
}

function  RickMortyReducer(state = INITIAL_STATE, action) {
  switch(action.type){

    case REQUIRE_API:
      return {
        ...state,
        isLoading:true,
      }
    
    case API_SUCESS:
      return {
        character: action.payload.character,        
        isLoading: false,
        error: null,
      }  
    
    case API_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Tente novamente mais tarde'
      }  
    
    default:
      return state
  }
}

export default RickMortyReducer;