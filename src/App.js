import './App.scss';
import CommunityCard from './components/CommunityCard/CommunityCard';
import Loader from './components/Loader/Loader';

import {useState, useEffect} from "react"
import UserModal from './components/UserModal/UserModal';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { connect } from 'react-redux';

import callApi from "./api";
import ImageViewer from './components/ImageViewer/ImageViewer';

const colors = ["#F7EB1E","#1D8CFF","#EA4C88","#ED1F25"];
//const communities = [{name:"Chelsea"},{name:"ninjaboiz", desc:"best valorant team"},{name:"ninjaboiz", desc:"best valorant team"},{name:"Chelsea", desc:"best football club"},{name:"ninjaboiz", desc:"best valorant team"},{name:"ninjaboiz", desc:"best valorant team"},];
const output = [];

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

  //render communities
  useEffect(() => {
    communityList.forEach((community, index) => {
      output.push(<CommunityCard CommunityName={community} Color={colors[index%colors.length]} key={index}/>);
    });
  }, [communityList]);

  return (
    <div className="App">
      {
        (isLoading) 
        ? <Loader/> 
        : (
          <>
            <div className="App__Container animate__animated animate__fadeIn">
              <div className="App__Title">
                Communities
                <p>Take a look at all the communities we host. Click on any to know more.</p>
              </div>
              <hr/>
              <div className="App__CommunityContainer">
                {output}
              </div>
            </div>
            <UserModal/>
            <ThemeToggle/>
            <ImageViewer/>
          </>
        )
      }
      
    </div>
  );
}

export default connect(mapStateToProps) (App);
