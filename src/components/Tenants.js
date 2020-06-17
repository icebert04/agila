import React, {Component} from 'react'
import Title from './Title'

//icons
import { FaCoffee, FaVideo } from 'react-icons/fa';
// import {  } from 'react-icons/ti';
// import {  } from 'react-icons/gr';
import { GiTwoCoins, GiLifeSupport } from 'react-icons/gi';
// import {  } from 'react-icons/bs';
// import {  } from 'react-icons/ai';


export default class Tenants extends Component {
state={
    landlord:[
        {
            icon:<FaVideo/>,
            title: "view online",
            info: "Our team will visit properties, take photos, floor plans and video tours for you, at no cost",
            subinfo: "We will show you around, a guided tour from the comforts of your home"
        },
        {
            icon:<FaCoffee/>,
            title: "complete amenities",
            info: "High-speed WiFi, fully-equipped kitchen, a coffee machine, on-site laundry, gym, working desks/office space & more",
            subinfo: "Tell us what else do you need... We'll add that too"
        },
         {
            icon:<GiTwoCoins/>,
            title: "cheaper",
            info: "Will help you find the right location and a furnished home to fit your need within your budget",
            subinfo : "Provide more spacious, lower-cost alternative to a hotel"
        },
        {
            icon:<GiLifeSupport/>,
            title: "Ongoing Support",
            info: "Avoid face-to-face contact with around the clock support via phone & email",
            subinfo: "Our live chat is here to manage all critical service needs"
        }
    ]
};

    render() {
     return (

        <div className="tenants">
            <Title title='for tenants' />
            <div className="tenants-center">
                {this.state.landlord.map((item, index) => {
              return (
              <article key={index} className="guest">
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