import React from 'react';
// import NavBar from './components/NavBar';
import StyledApp from './App.styled';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LinkShortener from './components/LinkShortener';
import ShortlyDetails from './components/ShortlyDetails';
import GlobalStyles from './components/styles/GlobalStyles.js';
import Test2 from './components/Test2';


const App = () => {
 //   const [newDataFunction, setNewDataFunction] = useState("");

   //  const initialState = { apiData: ""};

 /* const ACTIONS = {
    GET_DATA_FROM_API: "get-data-from-api",
    
  }*/
  /*  const [state, dispatch] = useReducer(reducer, initialState)
    const {apiData} = state; */

/*
    function reducer(state, action) {
      switch(action.type){
        case ACTIONS.GET_DATA_FROM_API :
          return{
            ...state,
            apiData: action.data
          }
        default:
          return state;
      }
    } */
    /*

    function getUrl(event){        
      setUrl(event.target.value);
      console.log(event.target.value);           
    }


    useEffect(() => {
      const getData = async () => {
       await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response) => {
          dispatch({type: ACTIONS.GET_DATA_FROM_API, data: response.data});
        })
       } 
       setNewDataFunction(getData)
    }, [ACTIONS.GET_DATA_FROM_API,url,]);
    console.log(apiData.result); */
  
  return (
    <StyledApp>
      <GlobalStyles/>
      <Test2/>
      <Hero/>
      <LinkShortener/>
      <ShortlyDetails/>
      <Boost/>
      <Footer/>
      
    </StyledApp>
  )
}

export default App