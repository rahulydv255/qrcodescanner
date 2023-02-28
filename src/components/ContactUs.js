import React from 'react'
import NavBar from './NavBar'
import './ContactUs.css'

function ContactUs() {

  const submitContactForm =()=>{
    alert("This Form Is Submitted")
  }

  return (
    <>
    <NavBar />
    <div>
    <section class="footer_get_touch_outer">
    <div class="container">
      <div class="footer_get_touch_inner grid-70-30">
        <div class="colmun-70 get_form">
          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
            </div>
            <form action="#">
              <div class="grid-50-50">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone"/>
              </div>
              <div class="grid-full">
                <textarea placeholder="Write Your Query Here..." cols="30" rows="10"></textarea>
                <input onClick={submitContactForm} type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <div class="colmun-30 get_say_form">
          <h5>Say Hi!</h5>
          <ul class="get_say_info_sec">
            <li>
              <i class="fa fa-envelope"></i>
              <a href="mailto:">Amar@gmail.com</a>
            </li>
            <li>
              <i class="fa fa-whatsapp"></i>
              <a href="tel:">+91 8169914387</a>
            </li>
            <li>
              <i class="fa fa-skype"></i>
              <a href="#">Amar Ram</a> 
            </li>
          </ul>        
        </div>        
      </div>
    </div>
  </section>
  </div>
    </>
  )
}

export default ContactUs