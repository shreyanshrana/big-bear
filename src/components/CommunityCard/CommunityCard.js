import React from 'react'
import { connect } from 'react-redux';
import "./CommunityCard.scss";



const mapStateToProps = state => {
    return {
        selectedCommunity : state.selectedCommunity
    }
}

const CommunityCard = (props) => {
    return (
        <div className="CommunityCard" 
        onClick={
            ()=>{
                document.getElementById("UserModal").style.display = "block";
                // console.log(props);
                props.dispatch({type: 'SET_SELECTED_COMM', payload:props.CommunityName});
            }
            }>
            <div className="CommunityCard__Img" style={{backgroundColor:props.Color}}>
                {props.CommunityName.substr(0,1)}
            </div>
            <div className="CommunityCard__Info">
                <h1>
                    {props.CommunityName}
                </h1>
                <h2>
                    {props.CommunityDesc != undefined ? props.CommunityDesc : "add description to the community"}
                </h2>
            </div>
            {/* <div className="CommunityCard__Shadow"/> */}
        </div>
    )
}

export default connect(mapStateToProps) (CommunityCard);
