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

        let data ={...this.state}
        data = {...this.state,[name]:value}
        e.preventDefault();
        this.setState({
            ...this.state,
            ...data
          });
          console.log(this.state.isError)
          
    }

    handalSubmit =(e)=>{
        e.preventDefault();
        // console.log(this.state.name); 
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.confirmPassword);

    
        this.validation()
        //alert("okok");
    }



    validation(){
        const data = this.state.isError
        this.state.isError = {}
        //console.log(this.state.name)
        if(!this.state.name){
            data.name = "please enter your name";
        }
        if(!this.state.email){
            data.email = "pleas enter email";
        }
        if(!this.state.password){
            data.password = "pleas enter password";
        }
        if(!this.state.confirmPassword){
            data.confirmPassword = "pleas enter confirmPassword";
        }
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
