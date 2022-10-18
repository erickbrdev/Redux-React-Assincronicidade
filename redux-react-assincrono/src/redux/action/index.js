import fetchRickAndMorty from "../../service/RickMortyApi"

const REQUIRE_API = 'REQUIRE_API'
const API_SUCESS = 'API_SUCESS'
const API_ERROR = 'API_ERROR'

const requireApi = () => ({
  type: REQUIRE_API,
})

const sucessApi = (character) => ({
  type: API_SUCESS,
  payload: {
    character,
  }
})

const errorApi = () => ({
  type: API_ERROR
})

function fetchWithTank(){
  return async (dispatch, _getState, _extraArguments) => {
    dispatch(requireApi);
    try{
      const { results } = await fetchRickAndMorty();
      dispatch(sucessApi(results))
    } 
    catch(error){
      dispatch(errorApi)
    }
  }
}
//dispatch(requisição)
//try ? dispatch da sucessAPI
//catch ? dispatch da errorAPI

export {
  REQUIRE_API,
  API_SUCESS,
  API_ERROR,
  fetchWithTank
}