import React from 'react';
import './modeSelectedView.css'

const ModeSelectedView = ({ onSelect }) => {
    
    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    return (
        <div  >
            <div className="wrapper">
                <div className="content">
                    <div className="header">
                        <h3>Select dataset</h3>
                    </div>
                    <div className="choiseDate">
                        <button onClick={() => onSelect(smallUrl)} className="btn btn-success">Small(32)</button>
                        <button onClick={() => onSelect(bigUrl)} className="btn btn-danger">Big(1000)</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ModeSelectedView;