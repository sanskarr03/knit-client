import React from 'react'
import Lottie from "lottie-react";
import yarn from "../assets/yarn-cat.json";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img2 from "../assets/img2.jpg";


export const Contact = () => {
  return (
    <>
    <style>
        {`
        *, *:before, *:after {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
         
          
          body, button, input {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
          }
          
          .background {
            display: flex;
            min-height: 100vh;
          }
          .yarn{
            width:100px;
          height:80px;
          margin-right: 400px;
          }
          
          .container {
            flex: 0 1 700px;
            margin: auto;
            padding: 80px;
            position: relative;
          }
          
          .screen {
            position: relative;
            background: #3e3e3e;
            border-radius: 15px;
            animation: fade-in 1.5s;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 100;
          }
        }
          
          .screen:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 20px;
            right: 20px;
            bottom: 0;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
            z-index: -1;
          }
          
          .screen-header {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            background: #f8e9e9;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }
          
          
          
          .screen-header-button {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin-right: 3px;
            border-radius: 8px;
            background: white;
          }
          
          
          
          .screen-body {
            display: flex;
          }
          
          .screen-body-item {
            flex: 1;
            padding: 50px;
          }
          
          .screen-body-item.left {
            display: flex;
            flex-direction: column;
          }
          
          .app-title {
            display: flex;
            flex-direction: column;
            position: relative;
            color: #e4abb3;
            font-size: 26px;
          }
          
          .app-title:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 25px;
            height: 4px;
            background: #e4abb3;
          }
          
          .app-contact {
            margin-top: 160px;
            font-size: 40px;
            color: #e4abb3;
          }

          .app-contact:hover {
            color: #b9134f;
          }
          
          .app-form-group {
            margin-bottom: 15px;
          }
          
          .app-form-group.message {
            margin-top: 40px;
          }
          
          .app-form-group.buttons {
            margin-bottom: 0;
            text-align: right;
          }
          
          .app-form-control {
            width: 100%;
            padding: 10px 0;
            background: none;
            border: none;
            border-bottom: 1px solid #666;
            color: #f8e9e9;
            font-size: 14px;
            text-transform: uppercase;
            outline: none;
            transition: border-color .2s;
          }
          
          .app-form-control::placeholder {
            color:#f8e9e9;
          }
          
          .app-form-control:focus {
            border-bottom-color: #ddd;
          }
          
          .app-form-button {
            background: none;
            border: none;
            color: #e4abb3;
            font-size: 14px;
            cursor: pointer;
            outline: none;
          }
          
          .app-form-button:hover {
            color: #b9134f;
          }
          
    
          
          .dribbble {
            width: 20px;
            height: 20px;
            margin: 0 5px;
          }
          
          @media screen and (max-width: 20px) {
            .screen-body {
              flex-direction: column;
            }
          
            .screen-body-item.left {
              margin-bottom: 30px;
            }
          
            .app-title {
              flex-direction: row;
            }
          
            .app-title span {
              margin-right: 12px;
            }
          
            .app-title:after {
              display: none;
            }
          }
          
          @media screen and (max-width: 600px) {
            .screen-body {
              padding: 40px;
            }
          
            .screen-body-item {
              padding: 0;
            }
          }
          
          }`}
    </style>
    <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <Lottie loop={true} animationData={yarn} className="yarn" />
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CHAT WITH</span>
            <span>US</span>
          </div>
          <div>
            <Link to="https://www.instagram.com/knitflixxandchilll/ " ><FaInstagramSquare className='app-contact' /></Link>
          </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
            <form action="https://api.web3forms.com/submit" method="POST"/>
            <input type="hidden" name="access_key" value="30141d0f-1e21-4306-8be3-1824b97f4133"/>
              <input className="app-form-control" name="name" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" name="email" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" name="contact" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" name="message" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" type="submit">SEND</button>
            </div>
          </div>
        </div>

        
      </div>
      
      
      
    </div>
    
  </div>
</div>



</>
  )
}
