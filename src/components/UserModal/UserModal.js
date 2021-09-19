import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import callApi from '../../api';
import "./UserModal.scss";
  
const mapStateToProps = state => {
  return {
      selectedCommunity : state.selectedCommunity
  }
}
const UserModal = (props) => {

  const [data, setData] = useState();
  const [userList, setUserList] = useState("");
  const [selectedUser, setSelectedUser] = useState({photos:["","",""]});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(async () => {
    setIsLoading(true);
    let temp = await callApi();
    setData(temp);
    let com = props.selectedCommunity;
    // console.log(props.selectedCommunity);
    // setCommunity(document.getElementById("selectedCommunity").innerHTML);
    setUserList(temp[com]);
    if(temp[com] != undefined)
      temp[com].map(item => {
        document.getElementById("userList").innerHTML += `<option value=${item.name} />`;
      });
      setIsLoading(false);
  }, [props.selectedCommunity]);


    function input() {
        var val = document.getElementById("userListInput").value;
        var opts = document.getElementById('userList').childNodes;
        for (var i = 0; i < opts.length; i++) {
          if (opts[i].value === val) {
            document.getElementsByClassName("UserModal__Modal")[0].style.height = "400px";
            setTimeout(()=>{
              document.getElementsByClassName("UserModal__UserInfo")[0].style.display = "block";
            },300);
            setSelectedUser(data[props.selectedCommunity].find(user => user.name === val));
            break;
          }
        }
      }

    return (
        <div id="UserModal" style={{display:"none"}}>
            <div className="UserModal__Bg" 
            onClick={
              ()=>{
              document.getElementsByClassName("UserModal__UserInfo")[0].style.display = "none";
              document.getElementsByClassName("UserModal__Modal")[0].style.height = "135px";
              document.getElementById("userListInput").value = "";
              document.getElementById("UserModal").style.display = "none";
              document.getElementById("userList").innerHTML = "";
              }
            }></div>
            <div className="UserModal__Modal animate__animated animate__fadeIn">
                <h1>{props.selectedCommunity}</h1>
                <h2>Search to find user details</h2>
                <h3>Click outside the modal to close</h3>
                <input list="userList" onInput={()=>{input()}} id="userListInput" placeholder="Start typing here.."></input>
                <datalist id="userList" >
                </datalist>
                <div className="UserModal__UserInfo animate__animated animate__fadeIn">
                  <h1>Name : {selectedUser.name}</h1>
                  <h1>Age : {selectedUser.age}</h1>
                  <h1>Gender : {selectedUser.gender}</h1>
                  <h1>Photo Gallery : </h1>
                  <div className="UserModal__UserInfo-Gallery">
                    <img src={selectedUser.photos[0]} alt={selectedUser.photos[0]} onClick={() => {
                      document.getElementById("ImageViewer").style.display = "block";
                      document.getElementsByClassName("ImageViewer__Modal")[0].style.backgroundImage = `url(${selectedUser.photos[0]})`;
                    }}/>
                    <img src={selectedUser.photos[1]} alt={selectedUser.photos[1]} onClick={() => {
                      document.getElementById("ImageViewer").style.display = "block";
                      document.getElementsByClassName("ImageViewer__Modal")[0].style.backgroundImage = `url(${selectedUser.photos[1]})`;
                    }}/>
                    <img src={selectedUser.photos[2]} alt={selectedUser.photos[2]} onClick={() => {
                      document.getElementById("ImageViewer").style.display = "block";
                      document.getElementsByClassName("ImageViewer__Modal")[0].style.backgroundImage = `url(${selectedUser.photos[2]})`;
                    }}/>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps) (UserModal);
