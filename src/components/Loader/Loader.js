import React from 'react'
import "./Loader.scss";

const loader = () => {
    return (
        <div className="Loader__Container">
            <div class="loader">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
            </div>
            <div className="Loader__Quote">"Life is sad and full of dissapointments" - ninjaboi</div>
        </div>
    )
}

export default loader
