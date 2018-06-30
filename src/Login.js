import React from 'react';
import { Animated } from "react-animated-css";
import { Route } from 'react-router-dom';
import PageForUser from './PageForUser';
import 'bulma/css/bulma.css';


export default class Login extends React.Component {
    state = {
        
        //this.handleLoginClick = this.handleLoginClick.bind(this);
       
            users:'',
            passw:'',
            UserHasLogin:false
       
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value,})
    }
    onSubmit(event) {
        this.setState({
            UserHasLogin: true })
      }
    

  render() {
    return (
        <div id="login"> 
                    {this.state.UserHasLogin
                      ? [
                          <Animated
                            animationIn="flipInX"
                            animationOut="fadeOut"
                            isVisible={true}
                          >
                            <div class="notification is-primary is-small">
                            <button class="delete" onClick={() => this.setState({UserHasLogin: false})}></button>
                                <Route path="/" component={() => <PageForUser />} />
                            </div>
                          </Animated>
                        ]
                      : [
                         
                            <Animated
                              animationIn="flipInX"
                              animationOut="fadeOut"
                              isVisible={true}
                            >

                                <form >
                                    <label style={{width:185}}>
                                        <h7 className="small has-text-grey"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USERNAME</b></h7>
                                        <input 
                                            class="input is-rounded is-small" 
                                            type="text" placeholder="Username" 
                                            name="users" 
                                            onChange={e => this.onChange(e)}
                                            value={this.state.users} />   
                                    </label>
                                    &nbsp;&nbsp;
                                    <label style={{width:185}}>
                                        <h7 className="small has-text-grey"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PASSWORD</b></h7>
                                        <input 
                                            class="input is-rounded is-small" 
                                            type="password" 
                                            placeholder="Password" 
                                            name='passw' 
                                            onChange={e => this.onChange(e)}
                                            value={this.state.passw}/>   
                                    </label>
                                    &nbsp;&nbsp;
                                    <a class="button is-primary is-bold is-rounded has-text-white mt-3" onClick={() => this.onSubmit()}>Login</a>              
                                </form>
                             
                            </Animated>
                          
                        ]}            
        </div>
         
        
    );
  }
}
