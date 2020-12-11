import React from 'react';


const index = props => {
    return (
        <div className="col-lg-3 col-md-6 feature-col  ">
            <div className="feature-content">
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
                <p>{
                    props.content
                    }
                </p>
            </div>
        </div>
    );
};



export default index;