import React, { Component } from 'react';
import Dashboard from './dashboard';

import img1 from '../assets/pic1.jpg';
import img2 from '../assets/pic2.jpg';
import img3 from '../assets/pic3.jpg';

class cards extends Component {
   
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Dashboard imgsrc={img1} title="Skyline"/>
                    </div>
                    <div className="col-md-4">
                    <Dashboard imgsrc={img2} title="Downtown"/>
                    </div>
                    <div className="col-md-4">
                    <Dashboard imgsrc={img3} title="Workplace"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default cards;