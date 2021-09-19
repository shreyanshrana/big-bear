import './App.scss';
import Loader from './components/Loader/Loader';

import { connect } from 'react-redux';

import AppContainer from './components/AppContainer/AppContainer';
import { useEffect, useState } from 'react';
import callApi from './api';


const mapStateToProps = state => {
  return {
      theme : state.theme
  }
}

const App = (props) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [communityList, setCommunityList] = useState([]);
  
  useEffect(async () => {
    let temp = (await callApi());
    let holder = [];
    for (const item in temp){
      holder.push(item);
    }
    setCommunityList(holder);
    setIsLoading(false);

  }, []);

  
  //change class based on theme
  useEffect(() => {
    if(props.theme == 'dark')
    {
      document.getElementsByClassName("App")[0].classList.add("dark-mode");
      document.getElementsByClassName("App")[0].classList.remove("light-mode");
    }
    else
    {
      document.getElementsByClassName("App")[0].classList.remove("dark-mode");
      document.getElementsByClassName("App")[0].classList.add("light-mode");
    }
  }, [props.theme]);

  return (
    <div className="App">
      {
        (isLoading) 
        ? <Loader/> 
        : <AppContainer communityList={communityList}/>
      }
    </div>
  );
}

export default connect(mapStateToProps) (App);
