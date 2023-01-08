import React, { useState } from 'react'


export default function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        confirmpassword: "",
    })

    const [error, setError] = useState({
        nameErr: "",
        emailErr: "",
        usernameErr: " ",
        passErr: "",
        confirmpassErr: "",
    })

    function updateForm(event) {
        const emailRegx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/
        const passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        setUser({ ...user, [event.target.name]: event.target.value })
        switch (event.target.name) {
            case "name": setError({ ...error, nameErr: (event.target.value.length === 0) ? "name is required " : ""  })
                break;
            case "email": setError({ ...error, emailErr: (emailRegx.test(event.target.value) )? " " : "please enter valid email" })
                break;
            case "password":
                setError({ ...error, passErr: passReg.test(event.target.value) ? "" : "please enter valid password" })
                break;
            case "confirmpassword":
                setError({ ...error, confirmpassErr: (user.password === event.target.value) ? "" : " invalid confirm password" })
                break;
            default: break;
        }

    }
  function handleSubmit(e){
     e.preventDefault();
   
  }

    return (
        <form onSubmit={(e)=>{handleSubmit(e)}} className='container col-6 text-start'>
            <div className="form-group">
                <label for="exampleInputEmail1 ">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" name="name"
                    value={user.name}
                    onChange={(e) => { updateForm(e) }} />
                <p className="text-danger">{error.nameErr}</p>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" placeholder="email" name="email"
                    value={user.email}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <p className='text-danger'>{error.emailErr}</p>
            <div className="form-group">
                <label for="exampleInputPassword1">User Name</label>
                <input type="text" className="form-control" placeholder="user name" name="userName"
                    value={user.userName}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password"
                    value={user.password}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <p className="text-danger">{error.passErr}</p>
            <div className="form-group">
                <label for="exampleInputPassword1">Confirme Password</label>
                <input type="password" className="form-control" placeholder="confirmePassword" name='confirmpassword'
                    value={user.confirmpassword}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <p  className="text-danger">{error.confirmpassErr}</p>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

