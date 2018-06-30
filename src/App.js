import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div id="result ">
        <section class="hero is-light is-bold ">
          <div class="hero-head">
            <Header />
          </div>
          </section>
          <div className="container is-fullhd  mt-5 " >
            <div  className=" ml-5 mt-2 " >
            <h5 >Do you have a debtor? Use this app! </h5>
            It is an application to help you with debt collection, 
            we will have AI to meet for you.
            </div>
            
            <center><figure class="image" style={{width:800 }}>
              <img src=".\pic.png"/>
            </figure></center>
            
            
          

            </div>
      </div>
      
    );
  }
}

export default App;
