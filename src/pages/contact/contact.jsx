import React from 'react'
import "./contact.css"
import { Appnavbar } from '../../components/appnavbar/appnavbar'
import location from "../../components/assets/mynaui_location.png"
import Phone from "../../components/assets/call.png"
import Email from "../../components/assets/inbox.png"
import X from "../../components/assets/twitter.png"

export const Contact = () => {
  return (
    <section id='contactpage'>
      <Appnavbar />
      <section className='contactPage'>
        <h2>
          Contact Form
        </h2>
        <div className='mainbox'>
          <div className='contactLeft'>
            <h3>Get intouch with us</h3>
            <form action="" method="post">
              <p>
                <input type="text" name="name" id="name" placeholder='name' />
                <input type="email" name="email" id="email" placeholder='email' />
              </p>
              <p><input type="text" name="subject" id="subject" placeholder='subject' /></p>
              <p className='msg'><input type="text" name="message" className="message" placeholder='message' /></p>
              <button type='submit' className='btn'>Send messsage</button>
            </form>
          </div>
          <div className='contactRight'>
            <h3>Contact Form</h3>
            <div>
              <div className="contactsubbox">
                <span className="flexrows">
                  <img src={location} alt="" />
                  <div>
                    <span>Address : </span>204, West Indies, 21st Street, New York NY 10016
                  </div>
                </span>
                <span className="flexrows">
                  <div className='help'>
                    <h1>Need help</h1>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odi
                    </div>
                  </div>
                </span>
                <span className="flexrows">
                  <img src={Phone} alt="" />
                  <div>
                    <span>Phone: </span>+1235 4488 67
                  </div>
                </span>
                <span className="flexrows">
                  <img src={Email} alt="" />
                  <div>
                    <span>Email: </span>idanmart@gmail.com
                  </div>
                </span>
                <span className="flexrows">
                  <img src={X} alt="" />
                  <div>
                    <span>Twitter: </span>@idanmart
                  </div>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section >
      <section className='email_section'>
        <h2>IdanMart vendor hub is here for YOU</h2>
        <h3>New to idanMart?</h3>
        <div className='email_section_subDiv'>
          <p>Subscribe to get updates on our offers via newletter</p>
          <article>Download idanMart app</article>
        </div>
        <div className='email_section_subDiv subdiv2'>
          <div className='email_box'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M10.4167 10.4167H37.5001C39.1577 10.4167 40.7474 11.0752 41.9195 12.2473C43.0916 13.4194 43.7501 15.0091 43.7501 16.6667V35.4167C43.7501 37.0744 43.0916 38.6641 41.9195 39.8362C40.7474 41.0083 39.1577 41.6667 37.5001 41.6667H10.4167C8.75914 41.6667 7.16943 41.0083 5.99733 39.8362C4.82523 38.6641 4.16675 37.0744 4.16675 35.4167V16.6667C4.16675 15.0091 4.82523 13.4194 5.99733 12.2473C7.16943 11.0752 8.75914 10.4167 10.4167 10.4167ZM10.4167 12.5001C9.37508 12.5001 8.45841 12.8542 7.75008 13.4792L23.9584 23.9584L40.1667 13.4792C39.4584 12.8542 38.5417 12.5001 37.5001 12.5001H10.4167ZM23.9584 26.4792L6.52091 15.1667C6.35425 15.6251 6.25008 16.1459 6.25008 16.6667V35.4167C6.25008 36.5218 6.68907 37.5816 7.47047 38.363C8.25187 39.1444 9.31168 39.5834 10.4167 39.5834H37.5001C38.6051 39.5834 39.665 39.1444 40.4464 38.363C41.2278 37.5816 41.6667 36.5218 41.6667 35.4167V16.6667C41.6667 16.1459 41.5626 15.6251 41.3959 15.1667L23.9584 26.4792Z" fill="#121212" fill-opacity="0.42" />
            </svg>
            <input type='text' placeholder="Enter Email Addres"/>
          </div>
          <div className='getAppcontainer'>
            <div className='getApp'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M28.4168 33.8C26.7834 35.3833 25.0001 35.1333 23.2834 34.3833C21.4668 33.6167 19.8001 33.5833 17.8834 34.3833C15.4834 35.4167 14.2168 35.1167 12.7834 33.8C4.65011 25.4167 5.85011 12.65 15.0834 12.1833C17.3334 12.3 18.9001 13.4167 20.2168 13.5167C22.1834 13.1167 24.0668 11.9667 26.1668 12.1167C28.6834 12.3167 30.5834 13.3167 31.8334 15.1167C26.6334 18.2333 27.8668 25.0833 32.6334 27C31.6834 29.5 30.4501 31.9833 28.4001 33.8167L28.4168 33.8ZM20.0501 12.0833C19.8001 8.36667 22.8168 5.3 26.2834 5C26.7668 9.3 22.3834 12.5 20.0501 12.0833Z" fill="white" />
              </svg>
              <div>
                <h4>Get it on</h4>
                <article>Play store</article>
              </div>
            </div>
            <div className='getApp'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 34.1666V5.83325C5 4.84992 5.56667 3.98325 6.4 3.58325L22.8167 19.9999L6.4 36.4166C5.56667 35.9999 5 35.1499 5 34.1666ZM28.0167 25.1999L10.0833 35.5666L24.2333 21.4166L28.0167 25.1999ZM33.6 18.0166C34.1667 18.4666 34.5833 19.1666 34.5833 19.9999C34.5833 20.8333 34.2167 21.4999 33.6333 21.9666L29.8167 24.1666L25.65 19.9999L29.8167 15.8333L33.6 18.0166ZM10.0833 4.43325L28.0167 14.7999L24.2333 18.5833L10.0833 4.43325Z" fill="white" />
              </svg>
              <div>
                <h4>Get it on</h4>
                <article>Apple store</article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section >
  )
}
