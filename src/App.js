import React, { useState } from 'react'


export default function App() {
  //1. state/Hooks
  var initialData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialData);

  //2. funtion defination

  let handalSubmit = (e) => {
    e.preventDefault();
    //console.log(data)
    setError(validate(data));

  }
  //console.log('data', data)


  let handalChange = (e) => {
    //console.log('name', e.target.name, e.target.value);
    let newData = { ...data }
    newData = { ...data, [e.target.name]: e.target.value }
    setData({ ...data, ...newData });
    //console.log(data)
    //remove(newData);
  }

  let remove = (values) => {

    //console.log(values)
    // name input validation
    if(values.name !== "") {
      error.name = '';
    }

    // email input validation
    if(values.email !== ""){
      error.email = "";
    }

    // password input validation
    if(values.password !== ""){
      error.password = "";
    }


    // confirmPassword input validation
    if(values.confirmPassword !== ""){
      error.confirmPassword = '';
    }
   
    return error;
  }
  //console.log(data)
  let validate = (value) => {
    const error = {};
    const numberregex = /^[a-zA-Z]+$/;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    //console.log("data",value);
    

    // name input validation
    if (!value.name) {
      error.name = "please enter your name"
    } else if (!numberregex.test(value.name)) {
      error.name = "enter only alphabets"
    }
    //console.log(value.name.length)


    // email input validation
    if (!value.email) {
      error.email = "please enter your email"
    } else if (!emailregex.test(value.email)) {
      error.email = "email does not valid "
    }



    // password input validation
    if (!value.password) {
      error.password = "please enter your password"
    } else if (value.password.length <= 2) {
      error.password = "please enter grater than 2 "
    } else if (!passregex.test(value.password)) {
      error.password = "6 to 20  numeric digit, one uppercase and one lowercase letter"
    }


    // confirmPassword input validation
    if (!value.confirmPassword) {
      error.confirmPassword = "please enter your confirmPassword"
    } else if (value.confirmPassword.length <= 2) {
      error.confirmPassword = "please enter grater than 2 "
    } else if (!passregex.test(value.confirmPassword)) {
      error.confirmPassword = "6 to 20  numeric digit, one uppercase and one lowercase letter"
    } else if (value.password !== value.confirmPassword) {
      error.confirmPassword = "password does not match"
    }

    // return statement 
    return error;
  };


  //3. return statement / jsx
  return (
    <React.Fragment>
      <form id='my_form' onSubmit={(e) => { handalSubmit(e) }}>
        <h1>Form Validation In React Using RFC</h1>
        <input type="text" name="name" value={data.name} onChange={(e) => { handalChange(e) }} placeholder="enter name" /><br />
        {<span className='err'>{error.name}</span>}<br />


        <input type="email" name="email" value={data.email} onChange={(e) => { handalChange(e) }} placeholder="enter email" /><br />
        {<span className='err'>{error.email}</span>}<br />


        <input type="password" name="password" value={data.password} onChange={(e) => { handalChange(e) }} placeholder="enter password" /><br />
        {<span className='err'>{error.password}</span>}<br />


        <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={(e) => { handalChange(e) }} placeholder="enter Confirm password" /><br />
        {<span className='err'>{error.confirmPassword}</span>}<br />
        <button type="submit" >submit</button>

      </form>
    </React.Fragment>
  )
}



