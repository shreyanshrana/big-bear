import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import callApi from '../../api';
import "./ImageViewer.scss";
  
const mapStateToProps = state => {
  return {
      selectedCommunity : state.selectedCommunity
  }
}
const ImageViewer = (props) => {

    return (
        <div id="ImageViewer" style={{display:"none"}}>
            <div className="ImageViewer__Bg" 
            onClick={
              ()=>{
              document.getElementById("ImageViewer").style.display = "none";
              }
            }>
            </div>
            <div className="ImageViewer__Modal animate__animated animate__fadeIn">
            </div>
        </div>
    )
}

export default connect(mapStateToProps) (ImageViewer);
