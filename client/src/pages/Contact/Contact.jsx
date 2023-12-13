import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { toast } from 'react-toastify';
import axios from "axios"

import './Contact.css'
import contactUs from "../../assets/image/contactUs.png"
import { url } from '../../assets/data';

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [msg,setMsg] = useState("");    

    const handleSubmit = async() =>{
        try{
            if(!name || !email || !msg){
                toast.error("Please provide all details");
            }

            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
            toast.error("Please provide a valid email address");
            return;
            }
            
            const res = await axios.post(`${url}api/v1/portfolio/sendEmail`,{name,email,msg});
            if(res.data.success){
                toast.success(res.data.msg);
            }
            else{
                toast.error(res.data.msg);
            }
        }
        catch(err){
            toast.error("Internal server error.Please try again");
            console.log(err);
        }
    }

  return (
    <div className="contact" id='contact'>
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <img src={contactUs} alt="contactUs" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="row mt-3 text-center">
                        <h2>
                            <span>Contact With</span>
                            <a href="https://www.linkedin.com/in/pradip-ram-0bbb73222/" target="_blank" rel="noreferrer" className='ms-2'>
                                <FaLinkedin color="blue"/>  
                            </a>
                            <a href="https://github.com/Pradipram" target='_blank' rel="noreferrer" className='ms-2'>
                                <FaGithub  color='black'/>
                            </a>
                            <a
                            href="mailto:pradipramnawa@gmail.com?subject=Interested%20in%20your%20work&body=Dear%20[Your%20Name],%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20work.%20I%20would%20like%20to%20connect%20with%20you%20to%20discuss%20some%20potential%20opportunities.%0D%0A%0D%0ABest%20regards,"
                            target="_blank"
                            rel="noreferrer noopener" 
                            className="ms-2"
                            >
 <IoIosMail size={40} color="#29aae3"/>
</a>
                        </h2>
                        <div className='line-div'>
                            <div className="line"/>
                            <small className='or'>OR</small>
                            <div className="line"/>
                        </div>
                        <div className="mt-3 contact-form">
                            <div className="px-3">
                                <input type="text" name='name' placeholder='Enter your Name' className='mb-3' value={name} onChange={(e) =>setName(e.target.value)}/>   
                            </div>
                            <div className="px-3">
                                <input type="email" name='email' placeholder='Enter your email' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="px-3">
                                <textarea name="msg" id="msg" cols="30" rows="5" className='mb-3' placeholder='Enter your message' value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                            </div>
                            <div className="px-3 text-center">
                                <button type='submit' className='btn btn-primary mb-3 button' onClick={handleSubmit}>
                                    <span>Send Message</span>
                                    <IoSendSharp className='ms-2'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact