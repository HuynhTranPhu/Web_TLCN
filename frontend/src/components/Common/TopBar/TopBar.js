import React from 'react';
import TopBarC from './TopBarC';

const TopBar = () => {
    const topBar = [ {content:'support@email.com', icon:'fa fa-envelope'},
                     {content:'+034-304-8571',icon:'fas fa-phone'}]
    return (
        <div className="top-bar">
                  <div className="container-fluid">
                      <div className="row">
                      {topBar.map(item=><TopBarC   content={item.content} icon={item.icon}></TopBarC>)}
                      </div>
                        
                  </div>
        </div>
    );
};

export default TopBar;