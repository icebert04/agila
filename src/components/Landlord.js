import React, {Component} from 'react';
import Title from './Title';

//icons
import { FaShieldAlt } from 'react-icons/fa';
import { GiReceiveMoney} from 'react-icons/gi';
import { BsChatFill, BsFillHouseFill } from 'react-icons/bs';
// import {  } from 'react-icons/ai';

export default class Landlord extends Component {
state={
    landlord:[
        {
            icon:<GiReceiveMoney/>,
            title: "earnings",
            info: "Attain higher occupancy rate through Mid-Term rentals",
            subinfo : "Steady cash-flow guaranteed, maximizing the property's annual yield"
        },
        {
            icon:<BsChatFill/>,
            title: "communication",
            info: "We handle 100% of tenant's communication",
            subinfo: "Contactless Booking and Check-In... Easy online so you can review, offer the contract, check-in and collect payments digitally"
        },
        {
            icon:<FaShieldAlt/>,
            title: "security",
            info: "Vetted tenants, typically business executives who stay for one month or longer",
            subinfo : "Your property will always be in impeccable condition... Security Deposit Policy & Insurance a possibility"
            
        },
        {
            icon:<BsFillHouseFill/>,
            title: "property management",
            info: "Our customer support team will manage all the work on your behalf to enable a seamless guest experience",
            subinfo: "We help landlords provide 5-star quality housekeeping & maintenance management, assist professional cleaning (COVID-Protect), & schedule regular check-ups to make sure it stays in top-notch condition"
        }
    ]
};

    render() {
     return (

        <div className="landlords">
            <Title title='for landlords' />
            <div className="landlords-center">
                {this.state.landlord.map((item, index) => {
              return (
              <article key={index} className="landlord">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
              <br/>
              <p>{item.subinfo}</p>
              </article > 
              );         
          })}
            </div>
        </div>
      );
    }
}