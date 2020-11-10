import React from "react";


function FooterPage(){
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/*Column 1*/}
                <div className="col-md-3 col-sm-6">
                    <ul className="list-unstyled">
                        <h4>Lorem ipsum</h4>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    
                </div>
                 {/*Column 2*/}
                 <div className="col-md-3 col-sm-6">
                    <ul className="list-unstyled">
                        <h4>Lorem ipsum</h4>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    
                </div>
                 {/*Column 3*/}
                 <div className="col-md-3 col-sm-6">
                    <ul className="list-unstyled">
                        <h4>Lorem ipsum</h4>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    
                </div>

            </div>
             {/*Footer bottom*/}
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} UTE-SHOP ALL RIGHTS RESERVED

                </p>

            </div>
        </div>
    </div>
  );
}

export default FooterPage;