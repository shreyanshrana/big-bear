import React from 'react'
import "./ThemeToggle.scss"
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        theme : state.theme
    }
}

const ThemeToggle = (props) => {

    const toggleTheme = () => {
        if(props.theme == 'light')
            props.dispatch({type : 'DARK_MODE'});
        else
            props.dispatch({type : 'LIGHT_MODE'});  
    }

    return (
        <div class="theme-light">
            <div class="toggler">
                    <label id="switch" class="switch">
                        <input type="checkbox" onClick={() => {toggleTheme()}} id="slider"/>
                        <span class="slider round"></span>
                    </label>
            </div>
        </div>
    )

}

export default connect(mapStateToProps) (ThemeToggle);
