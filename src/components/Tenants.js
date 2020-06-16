import React, {Component} from 'react'
import Title from './Title'

//icons
import { FaBed, FaCoffee, FaVideo } from 'react-icons/fa';
// import {  } from 'react-icons/ti';
// import {  } from 'react-icons/gr';
import { GiTwoCoins } from 'react-icons/gi';
// import {  } from 'react-icons/bs';
// import {  } from 'react-icons/ai';

export default class Tenants extends Component {
state={
    landlord:[
        {
            icon:<FaVideo/>,
            title: "video"
        },
        {
            icon:<FaCoffee/>,
            title: "complete amenities",
            info: "Wifi, Kitchen, Coffee maker, Netflix, Parking, etc... all at your disposal",
            subinfo: "Tell us what else do you need... We'll add that too"
        },
         {
            icon:<GiTwoCoins/>,
            title: "cheaper",
            info: "Book online for our reduced weekly/monthly rents up to 50% on all new reservations",
            subinfo : "Lower price than Hotels"
        },
        {
            icon:<FaBed/>,
            title: "furnished rentals",
            info: "Our listings are half the rate of a hotel for an equivalent stay period, but on par in our level of service and amenities",
            subinfo: "Feel more Independent & Secure"
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