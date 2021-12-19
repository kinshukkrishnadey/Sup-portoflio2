import React, {useState} from 'react';
import './Contact.css';
import contactImg from "./img/img/about-9.jpg";
import emailjs from 'emailjs-com';

const Result=()=>{
    return(
        <p>Your Message has been successfully sent. Sup will contact you soon.</p>
    )
}
function Contact(props) {
    const [result, showResult] = useState(false);
    const sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_i5svofn', 'template_b07p37v', e.target, 'user_d9nONXuldINcG0AGwM3AF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };
  
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via Email:</p>
                           <p className="hire__text white"><strong>s.sup.dey@gmail.com</strong></p>
                        </div>
                        <form action="" onSubmit={sendEmail} >
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your Name" name="fullName"/>
                           <input type="text" className="contact email" placeholder="Your Email Address*" name="email"/>
                           <input type="text" className="contact subject" placeholder="Write a Subject" name="subject"/>
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                           <div className="row">{result?<Result/>:null}</div>
                        </div>
                        </form>
                        
                        
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>

        
    )
}

export default Contact