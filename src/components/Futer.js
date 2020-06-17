import React, {Component} from 'react'

import JoinButton from "./JoinButton";
import PageLink from "./PageLink";
import Eagle from './Eagle';

import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMail } from "react-icons/ti";

import Agila from './Agila';

export default class Futer extends Component {
state={
  footers:[
    {
      title_contact: "contact us",
      subtitle: "Our team is at your disposal",
      cell_icon: <FaPhoneAlt/>,
      number: " 0917-5691002",
      number_cell: "Cell:",
      number_lan: "Phone:",
      lanNumber: " 02-88090130" ,
      info_contact: " admin@balayagila.com",
      email_name: <TiMail/>,
      facebook_title: "Visit our FB Page",
  
      title_Philippine_eagle: "Our Philippine Eagle is diminishing",
      info_Philippine_eagle: "Help The Philippine Eagle Foundation in your own way",
      donate: "donate",
   
      title_site: "site links",
      
      faq: "FAQ",
      insurance: "Insurance",
      about: "About us",
      accommodation: "Temporary Accommodation",
      covid: "COVID-19 protected",
    }
  ],
  facebook: [
    { 
    icon: <GrFacebook/>,
    title_facebook: "Join our exclusive facebook group",
    info_facebook: "Become part of our substantial & vibrant 'Hosting Community', Get inside access",
    button: "Join Now"
  }
  ]
}

    render() {
     return (
      
            <section className="footer">
            <div className="footer-center">
              
            {this.state.footers.map((item,a,e,o,u) => { 
            return (
            <>
              <article key={a} className="footers">
                  <h5>{item.title_contact}</h5>
                    <h6>{item.subtitle}</h6>
              <ul>
                <li>  
                  <p><b>{item.cell_icon}</b>{item.number}</p>
                </li>

                <li>
                  <p><b>{item.cell_icon}</b> {item.lanNumber}</p>
                </li>
              </ul>
                <br/>
                  <p><b>{item.email_name}</b> {item.info_contact}</p>
                <br/>
              <h5>{item.facebook_title}</h5>
                <PageLink/>
              </article >
              
              <article key={e} className="footers">
                <div>
                  <h5>
                  {item.title_Philippine_eagle}
                  </h5>
                  <p>{item.info_Philippine_eagle}</p>
                  <Eagle/>
                  </div>
                  <div>
                    <Agila/>
                    </div>
                  </article>
                

                  <div key={o} className="footers">
                        <h5>{item.title_site}</h5>
                        <ul className="footer-sites footer-link">
                          <li><a>{item.covid}</a></li>
                          <div className="seperator" />
                          <li><a>{item.about}</a></li>
                          <div className="seperator" />
                          <li><a>{item.faq}</a></li>
                          <div className="seperator" />
                          <li><a>{item.insurance}</a></li>
                          <div className="seperator" />
                          <li><a>{item.accommodation}</a></li>
                        </ul>
                      </div>

                      <div key={u} className= "footers">
                        <span>{item.icon}</span><h5>{item.title_facebook}</h5>
                        
                        <p>{item.info_facebook}</p>
                        <JoinButton />
                    </div>

                    </>
                    );
                   })}
                   </div> 
                    
                   <h6 className="copyright">
             ©2020 Balay Agila - All Rights Reserved
           </h6>
        </section>
              
              );
            
             
      
              
              {/* <div>
              {this.state.pef.map((item,o) => {
                return (
                  <>
                  <div key={o} className="footers">
                  <h5>
                  {item.title_Philippine_eagle}
                  </h5>
                  <p>{item.info_Philippine_eagle}</p>
                  <Eagle/>
                  </div>
                  <div>
                    <Agila/>
                  </div>
             </>
              );
            })}
              </div> */}
              
            {/*    <div>
              {this.state.sites.map((item,e) => { 
              return (
                <>
                  <div key={e} className="footers">
                        <h5>{item.title_site}</h5>
                        <ul className="footer-sites footer-link">
                          <li><a>{item.covid}</a></li>
                          <div className="seperator" />
                          <li><a>{item.about}</a></li>
                          <div className="seperator" />
                          <li><a>{item.faq}</a></li>
                          <div className="seperator" />
                          <li><a>{item.insurance}</a></li>
                          <div className="seperator" />
                          <li><a>{item.accommodation}</a></li>
                        </ul>
                  </div>
                  </>
                  );
                })}
              </div>
*/}
                  {/* <div>
                  {this.state.facebook.map((item,u) => {
                    return (
                      <>
                  <div key={u} className= "footers">
                        <span>{item.icon}</span><h5>{item.title_facebook}</h5>
                        
                        <p>{item.info_facebook}</p>
                        <JoinButton />
                    </div>
                </>
              );
            })}
                </div> */}
            
          
  
               
                
                
    }
  }  