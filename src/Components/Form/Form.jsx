import React from "react";
import "./Form.css";

function Form(props) {
  const vis = props.visibility ? "visible" : "hidden";
  const formVisibility = {
    visibility: vis,
  };
  return (
    <div className="form" style={formVisibility}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-x-circle close-btn"
          viewBox="0 0 16 16"
          onClick={()=>{
            props.handleClick()
          }}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>

      <div className="row">
        <div className="col col-lg-6 col-md-6">
          <form className="form-body" >
            <table>
              <tr>
                <td>Name</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Email</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Password</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Confirm Password</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit" className="btn btn-primary btn-light btn-form" onClick={(e)=>{
                    e.preventDefault()
                    props.handleClick()
                  }}>SignIn</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit" className="btn btn-primary btn-light btn-form" onClick={(e)=>{
                    e.preventDefault()
                    props.handleClick()
                  }}>LogIn</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="col col-lg-6 col-md-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWpmeNDeVzsIsNKMnGOV-eENcw1YYY7HKRw&usqp=CAU" className="form-img"></img>
        </div>
      </div>
    </div>
  );
}

export default Form;
