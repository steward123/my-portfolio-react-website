import React from 'react';
import contactUsImage from '../assets/contact-us-3483604-2912020.png';
import {useState} from "react";
import axios from "axios";
import resume from "../assets/Resume-Soumit-Mondal.pdf";
// Importing toastify module
import { ToastContainer, toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";


const Contact =()=>{
    // variables declartion
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    
const addUser = async()=>{
    
    const headers = {
        'content-type': 'application/json'
    };
    {/*const response = */}
    {/*http://localhost:5225/downloadsResume*/} {/*https://dotnetreactwebsitebackend.azurewebsites.net/downloadsResume*/}
    await axios.post("http://localhost:5387/api/resume",{
        Name:Name,
        Email:Email,
        message:message
    },{headers}).then((response)=>{
        {/*const url = window.URL.createObjectURL(new Blob([response.data],{type:'application/pdf'}));
        const link = document.createElement('a');
        link.href=url;
        link.setAttribute('download','Resume-Soumit-Mondal.pdf');
        document.body.appendChild(link);
    link.click() */}

    if(response.data.guid_generate)
        {
            toast.success("Request For Resume download is Successfull!!")
            const link = document.createElement('a');
            link.href = resume;
            link.setAttribute('download','Resume-Soumit-Mondal.pdf');
            document.body.appendChild(link);
            link.click()
        }
        else
        {
            toast.error("Request For Resume Download Failed!!")
            setName('');
            setEmail('');
            setMessage('');
        }

    }).catch((err)=>{
        console.log(err);
    },[]);


    setName('');
    setEmail('');
    setMessage('');
}

    return(
      <>
<ToastContainer
        autoClose={10000}
        hideProgressBar={false}
        position="bottom-center"
/>
          <div className="Main-container py-14 bg-slate-50 h-screen">
              <h1 className="text-5xl font-bold text-center justify-center underline">Contact Me!!</h1>
              <div className="flex items-center mt-14">
              {/*Image container*/}
              <div className="w-full flex justify-center items-center">
                  <img src={contactUsImage}></img>
              </div>
                  {/* Form-container*/}
              <div className="w-full flex justify-center">
              <div className="space-y-5 me-10">
                  <div className="mt-6">
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Enter Your name</span>
                              <input
                                  type="text"
                                  name="Name"
                                  className="

            w-full
             px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            border
          "
                                  placeholder="Tokito Muichiro"
                                  value={Name}
                                  onChange={(n)=> setName(n.target.value)}
                              />
                          </label>
                      </div>
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Email address</span>
                              <input
                                  name="Email"
                                  type="email"
                                  className="

            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            border
          "
                                  placeholder="muichiro.tokoito@example.com"
                                  required
                                  value={Email}
                                  onChange={(e)=> setEmail(e.target.value)}
                              />
                          </label>
                      </div>
                      <div className="mb-2">
                          <label>
                              <span className="text-gray-700">Message</span>
                              <textarea
                                  name="message"
                                  className="

            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            border
          "
                                  rows="5"
                                  value={message}
                                  onChange={(m)=>setMessage(m.target.value)}
                              ></textarea>
                          </label>
                      </div>

                      <div className="mb-6">
                          <button
                          type="submit"
                              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-full
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                          onClick={addUser}>
                              Contact Me
                          </button>
                      </div>
                      <div></div>
                  </div>
              </div>
              </div>
              </div>
          </div>
      </>
    );
}

export default Contact;