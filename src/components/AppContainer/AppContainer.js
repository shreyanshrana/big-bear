import React, { useEffect, useState } from 'react'

import "./AppContainer.scss";

import ImageViewer from '../ImageViewer/ImageViewer';
import UserModal from '../UserModal/UserModal';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import CommunityCard from '../CommunityCard/CommunityCard';

//just for aesthetics
const colors = ["#F7EB1E","#1D8CFF","#EA4C88","#ED1F25"];
// const output = [];

const AppContainer = (props) => {

    const [output, setOutput] = useState([]);
    //render communities
    useEffect(() => {
        let temp = [];
        props.communityList.forEach((community, index) => {
            temp.push(<CommunityCard CommunityName={community} Color={colors[index%colors.length]} key={index}/>);
        });
        setOutput(temp);
      }, [props.communityList]);
    
    return (
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

export default AppContainer
