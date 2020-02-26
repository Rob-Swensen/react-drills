import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
        // this.loginAlert = this.loginAlert.bind(this)
    }

    usernameChange(val){
        this.setState({username: val})
    }

    passwordChange(val){
        this.setState({password: val})
    }

    loginAlert(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.usernameChange(e.target.value)} type='text'/>
                <input onChange={(e) => this.passwordChange(e.target.value)} type='text'/>
                <button onClick={() => this.loginAlert()}>Login</button>
            </div>
        )
    }
}

export default Login;