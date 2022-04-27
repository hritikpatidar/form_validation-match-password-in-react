import React, { Component } from 'react'

export default class FormValidationRFC extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            isError:{
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
            }
           
        }

    }
  
    handalChange =(e)=>{
        //console.log(name,value)
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name)
        let data ={...this.state}
        data = {...this.state,[name]:value}
        
        e.preventDefault();
        this.setState({
            ...this.state,
            ...data,
            isError:{
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            }
          });
          console.log(this.state.isError.name);
          console.log(this.state.isError.email);
          
    }
    

    handalSubmit =(e)=>{
        e.preventDefault();
        //console.log(this.state.name); 
        // console.log(this.state.email);
        // console.log(this.state.password);
        //console.log(this.state.confirmPassword);
        console.log(this.state)
        //console.log(this.state.isError)
        
        this.setState(this.validation())
        //alert("okok");
    }



    validation(){
        const data = this.state.isError;
        const numberregex = /^[a-zA-Z]+$/;
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        //console.log(this.state.email)
        const isError = {}

        // name input validatoin
        if(!this.state.name){
            data.name = "please enter your name";
        }else if (!numberregex.test(this.state.name)) {
            data.name = "enter only alphabets"
        }

        // email input validation
        if(!this.state.email){
            data.email = "pleas enter email";
        }else if (!emailregex.test(this.state.email)) {
            data.email = "email does not valid "
        }

        // password input validation
        if(!this.state.password){
            data.password = "pleas enter password";
        }else if (this.state.password.length <= 2) {
            data.password = "please enter grater than 2"
        }else if (!passregex.test(this.state.password)) {
            data.password = "uppercase and lowercase letter and 6 to 20 numeric digit"
        }

        // confirmPassword input validation
        if(!this.state.confirmPassword){
            data.confirmPassword = "pleas enter confirmPassword";
        }else if (this.state.confirmPassword.length <= 2) {
            data.confirmPassword = "please enter grater than 2 "
        }else if (!passregex.test(this.state.confirmPassword)) {
            data.confirmPassword = "6 to 20  numeric digit, one uppercase and one lowercase letter"
        }else if (this.state.password !== this.state.confirmPassword) {
            data.confirmPassword = "password does not match"
        }

        //return statement
        return isError;
    }
    render() {
        return (
            <React.Fragment>
                <form id='my_form' onSubmit={(e) => { this.handalSubmit(e) }}>
                    <h1>Form Validation In React Using RCC</h1>
                    <input type="text" name="name" value={this.state.name}onChange={(e) => { this.handalChange(e) }} placeholder="enter name" /><br />
                    {<span className='err'>{this.state.isError.name}</span>}<br />
            
            
                    <input type="email" name="email" value={this.state.email} onChange={(e) => { this.handalChange(e) }} placeholder="enter email" /><br />
                    {<span className='err'>{this.state.isError.email}</span>}<br />
            
            
                    <input type="password" name="password" value={this.state.password} onChange={(e) => { this.handalChange(e) }} placeholder="enter password" /><br />
                    {<span className='err'>{this.state.isError.password}</span>}<br />
            
            
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={(e) => { this.handalChange(e) }} placeholder="enter Confirm password" /><br />
                    {<span className='err'>{this.state.isError.confirmPassword}</span>}<br />
                    <button type="submit" >submit</button>
            
                </form>
            </React.Fragment>
            
        )
    }
}
