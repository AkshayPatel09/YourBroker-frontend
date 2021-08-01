import React, { useState } from "react";
import "./Header.css";
import Form from "../Form/Form"

function Header(){

    const [active,setActive] = useState(false);

    function handleClick(event){
        console.log(event);
        (!active ? setActive(true): setActive(false));
    }


    return(
        <div className="Header-section">
              <div className="container header-top">
                    <div className="row ">
                        <div className="col col-sm-12 col-md-12 col-lg-6 col-12" >
                            <div id="header-title">
                            Are you looking for your dream home?
                            </div>
                        
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-6">
                            <div className="Header-intro">
                            <p>
                                Hey looking for your dream home ? you are at the right place. yourbroker believes in 100% customer satisfaction and we provide best services in the market.
                            </p>
                            <button className="btn btn-light btn-custom" onClick={handleClick}> SignUp</button>
                            <button className="btn btn-light btn-custom" onClick={handleClick}>Login</button>
                            </div>
                            
                        {/* {{active ? <Form /> : 'none'}} */}
                        </div>
                    </div>
                
            </div>
            
            {/* <div className="cut-section"></div> */}
            <Form visibility={active} handleClick={handleClick}/>
        </div>
      
    )
}

export default Header;
