import React from 'react';

const index = (props) => {
    return (
        <div className="col-sm-6">
            <i className={props.icon}></i>
            {props.content}
        </div>
    );
};

export default index;