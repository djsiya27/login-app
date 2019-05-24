import React, { Component } from 'react';



import "./card-style.css";

const Dashboard = props =>  {
    
   
        return ( 
            
                <div className="card text-center shadow">
                    <div className="overflow">
                        <img src={props.imgsrc} alt="image" className="card-img-top" />
                    </div>
                    <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus nam quae ratione dicta sed saepe obcaecati illum debitis quasi.
                    </p>
                    <a href="#" className="btn btn-outline-success">Go Anywhere</a>
                    </div>
                </div>
            
         );
    }

 
export default Dashboard;