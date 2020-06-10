import React, {Component} from 'react'
import Newsletter from './Newsletter'
import JoinButton from "./JoinButton";

import { GrFacebook } from "react-icons/gr";

export default class Futer extends Component {
state={
  footers:[
    {
      title_contact: "contact us",
      subtitle: "customer support",
      number: " 0917-5691002",
      number_cell: "Cell:",
      number_lan: "Phone:",
      lanNumber: " 02-88090130" ,
      info_contact: "Email: somewhere@gmail.com",
      facebook_title: "Facebook Page",
      link: "Balay Agila"
    }
  ],
  newsletter: [
    {
      title_newsletter: "let's stay connected",
      info_newsletter: "Subscribe to our Newsletter & be the first to hear about the latest news and updates",
      placeholder:  "Enter Email...",
      subscribe: "subscribe"
    }
  ],
  sites: [
    {
      title_site: "site links",
      info_site: "help & support",
      help: "help & support",
      privacy: "privacy policy",
      about: "About us",
      contact: "Contact"
    }
  ],
  facebook: [
    { 
    icon: <GrFacebook/>,
    title_facebook: "Join our facebook group",
    info_facebook: "This is an exclusive group for 'Friendlies' who wants to meet new interesting and talented people. Everyone is free to join!",
    button: "Join Now"
  }
  ]
}

    render() {
     return (
        <section className="footer">
            <div className="footer-center">
              <div>
            {this.state.footers.map(item => {
              return (
                
              <article key={`item-${item.title}`} className="footers">
                  <h5>{item.title_contact}</h5>
                    <h6>{item.subtitle}</h6>
              <ul>
                <li>  
                  <p><b>{item.number_cell}</b>{item.number}</p>
                </li>

                <li>
                  <p><b>{item.number_lan}</b> {item.lanNumber}</p>
                </li>
              </ul>
                <br/>
                  <p>{item.info_contact}</p>
                <br/>
              <h5>{item.facebook_title}</h5>
                <a className="footer-link" href="https://www.facebook.com/" target="_blank">{item.link}</a>
              </article >
              );
             })}
             </div> 
      
              
              <div>
              {this.state.newsletter.map(item => {
                return (
                  <>
                  <div key={`item-${item.title}`} class="footers">
                  <h5>
                  {item.title_newsletter}
                  </h5>
                  <p>{item.info_newsletter}</p>
                  <form name="contact" method="POST">
                  <Newsletter />
                  </form>
                  </div>
             </>
              );
            })}
              </div>
              
              <div>
             {this.state.sites.map(item => {
              return (
                <>
                  <div key={`item-${item.title}`} className="footers">
                        <h5>{item.title_site}</h5>
                        <ul className="footer-sites footer-link">
                          <li><a>{item.help}</a></li>
                          <div className="seperator" />
                          <li><a>{item.privacy}</a></li>
                          <div className="seperator" />
                          <li><a>{item.about}</a></li>
                          <div className="seperator" />
                          <li><a>{item.contact}</a></li>
                        </ul>
                  </div>
                  </>
                  );
                })}
              </div>

                  <div>
                  {this.state.facebook.map(item => {
                    return (
                      <>
                  <div key={`item-${item.title}`} className= "footers">
                        <span>{item.icon}</span><h5>{item.title_facebook}</h5>
                        
                        <p>{item.info_facebook}</p>
                        <JoinButton />
                    </div>
                </>
              );
            })}
            
          
                </div>
  
                </div>
                <h7 className="copyright">
             Copyright © 2020
           </h7>
        </section>
      );            
    }
  }  