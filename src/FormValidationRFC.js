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
          
    }

    handalSubmit =(e)=>{
        e.preventDefault();
        // console.log(this.state.name); 
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.confirmPassword);

        console.log(this.state)
        this.validation()
        //alert("okok");
    }



    validation(){
        console.log(this.state.name)
        if(!this.state.name){
            this.state.isError.name = "please enter your name"
        }
        if(!this.state.email){
            this.state.isError.email = "pleas enter email"
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
