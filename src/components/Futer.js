import React, {Component} from 'react'
import Title from './Title';


export default class Futer extends Component {
state={
  contact:[
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
    },
    {
      title_newsletter: "let's stay connected",
      info_newsletter: "Subscribe to our Newsletter & be the first to hear about the latest news and updates",
      
    },
    {
      title_site: "site links",
      info_site: "help & support"
    },
    {
      title_facebook: "Join our facebook group",
      info_facebook: "This is an exclusive group for 'Friendlies' who wants to meet new interesting and talented people. Everyone is free to join! "
    }
  ]
}

    render() {
     return (
        <div className="footer">
            <div className="footer-center">
            {this.state.contact.map((item,index) => {
              return (
                <>  
                <section>
            
              <article key={index} className="footers">
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
                <a href="https://www.facebook.com/" target="_blank">{item.link}</a>
              </article >
            

              
                  <article key={index} class="footers">
                  <h5>
                      {item.title_newsletter}
                  </h5>
                  <p>{item.info_newsletter}</p>
                  </article>
             

              
                  <article key={index} className="footers">
                        <h5>{item.title_site}</h5>
                        <p>{item.info_site}</p>
                  </article>
                  

                  <article key={index} className= "footers">
                        <h5>{item.title_facebook}</h5>
                        <p>{item.info_facebook}</p>
                    </article>
              
                  </section>

                </>
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