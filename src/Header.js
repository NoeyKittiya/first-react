import React from 'react';
import Login from './Login';


export default class Header extends React.Component {
  render() {
    return (
        <div id="header">  
            <nav class="navbar ">
                <div class="navbar-start mt-5 mb-2"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <form>
                        <img
                            src=".\money-bag-with-dollar-sign.png"
                            width="50"
                            height="50"
                        />
                    </form>
                    <form>
                     <h4 className="mt-1"><b>FINANCE APP</b><h6 > DEBT <b>#2302</b></h6></h4>
                    </form>
                </div>
                <div class="navbar-end mt-5 mb-2">
                   <Login />
                </div>
            </nav>   
        </div>
        
    );
  }
}