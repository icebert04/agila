import React, {Component} from 'react'
import Title from './Title';
import { FaFacebookSquare, FaPhone} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

export default class Futer extends Component {
state={
  contact:[
    {
      icon:<FaFacebookSquare />,
      title: "message us on Facebook",
      link: "facebook.com"
    },
    {
      icon:<FaPhone />,
      title: "call us",
      info: "425-425-425"
    },
    {
      icon:<GrMail />,
      title: "Email us",
      info: "abc@email.com"
    }
  ]
}

    render() {
     return (
        <div className="footer">
            <Title title="contact us" />
            <div className="footer-center">
            {this.state.contact.map((item,index) => {
              return (
                <article key={index} className="contact">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                <a href="https://www.facebook.com/" target="_blank">{item.link}</a>
                </article >
              );
            })}
           
            </div>
            <h7 className="copyright">
             Copyright © 2020
           </h7>
        </div>
        
      )
    }
}