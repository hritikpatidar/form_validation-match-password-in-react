import React,{useEffect, useState } from 'react'


export default function App() {
    //1. state/Hooks
    var initialData = { 
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
    }

    const [data, setData] = useState(initialData);
    const [error,setError]= useState(initialData);
    const [isSubmit, setIsSubmit] = useState(false)

    //2. funtion defination
    
    let handalSubmit = (e) => {
        e.preventDefault();
        //console.log(data)
        setError(validate(data));
        setIsSubmit(true);
    }
    //console.log('data', data)

    useEffect(() => {
     console.log("error",error)
     if(Object.keys(error).length === 0 && isSubmit ){
       console.log(data);
     }
    })


    let handalChange = (e) => {
        //console.log('name', e.target.name, e.target.value);
        //const newEntry = {name:data.name,email:data.email,password:data.password,confirmPassword:data.confirmPassword}
        setData({ ...data, [e.target.name]: e.target.value });
        //console.log(data)
    }
    //console.log(data)
    let validate = (value)=>{
      const error = {};
      const numberregex = /^[a-zA-Z]+$/;
      const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      //console.log("data",value);

      if(!value.name){
        error.name = "please enter your name"
      }else if (!numberregex.test(value.name)){
        error.name = "enter only alphabets"
      }


      if(!value.email){
        error.email = "please enter your email"
      }  else if(!emailregex.test(value.email)){
        error.email = "email does not valid "
      }


      if(!value.password){
        error.password = "please enter your password"
      }else if(value.password.length <= 2 ){
        error.password = "please enter lessthe "
      }else if(!passregex.test(value.password)){
        error.password = "6 to 20  numeric digit, one uppercase and one lowercase letter"
      }


      if(!value.confirmPassword){
        error.confirmPassword = "please enter your confirmPassword"
      }else if(value.confirmPassword.length <= 2 ){
        error.confirmPassword = "please enter lessthe "
      }else if(!passregex.test(value.confirmPassword)){
        error.confirmPassword = "6 to 20  numeric digit, one uppercase and one lowercase letter"
      }else if(value.password !== value.confirmPassword){
        error.confirmPassword ="password does not match"
      }


      return error;
    };
  
      
    //3. return statement / jsx
    return (
        <React.Fragment>
            <form id='my_form' onSubmit={(e) => { handalSubmit(e) }}>
                <h1>Form Validation In React</h1>
                <input type="text"  name="name" value={data.name} onChange={(e) => { handalChange(e) }} placeholder="enter name" /><br />
                {<span className='err'>{error.name}</span>}<br />

                
                <input type="email"  name="email" value={data.email} onChange={(e) => { handalChange(e) }} placeholder="enter email" /><br />
                {<span className='err'>{error.email}</span>}<br />

                
                <input type="password"  name="password" value={data.password} onChange={(e) => { handalChange(e) }} placeholder="enter password" /><br />
                {<span className='err'>{error.password}</span>}<br />

                
                <input type="password"  name="confirmPassword" value={data.confirmPassword} onChange={(e) => { handalChange(e) }} placeholder="enter Confirm password" /><br />
                {<span className='err'>{error.confirmPassword}</span>}<br />
                <button type="submit" >submit</button>

            </form>
        </React.Fragment>
    )
}



