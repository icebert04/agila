import React, {Component} from 'react';
import Title from './Title';

//icons
import { FaShieldAlt } from 'react-icons/fa';
import { GiReceiveMoney} from 'react-icons/gi';
import { BsChatFill, BsFillHouseFill } from 'react-icons/bs';
// import {  } from 'react-icons/ai';

export default class Hosts extends Component {
state={
    host:[
        {
            icon:<GiReceiveMoney/>,
            title: "earnings",
            info: "Attain higher occupancy rate through Mid-Term rentals",
            subinfo : "We will fully optimise your property listing, pricing and occupancy"
        },
        {
            icon:<BsChatFill/>,
            title: "communication",
            info: "We handle 100% of guest's communication",
            subinfo: "We take care of all tenant-related risks."
        },
        {
            icon:<FaShieldAlt/>,
            title: "security",
            info: "We screen each and every guests with proper ID verification",
            subinfo : "We find the Best Tenants that goes well with your property, Deposit policy & Insurance a possibility"
            
        },
        {
            icon:<BsFillHouseFill/>,
            title: "property management",
            info: "We help hosts provide 5-star quality housekeeping & maintenance management",
            subinfo: "We furnish up your property, assist professional cleaning (COVID-Free), & schedule regular check-ups to make sure it stays in top-notch condition"
        }
    ]
};

    render() {
     return (

        <div className="hosts">
            <Title title='for hosts' />
            <div className="hosts-center">
                {this.state.host.map((item, index) => {
              return (
              <article key={index} className="host">
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