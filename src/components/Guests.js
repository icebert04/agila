import React, {Component} from 'react'
import Title from './Title'

//icons
import { FaBed, FaCoffee } from 'react-icons/fa';
// import {  } from 'react-icons/ti';
import { GrMoney } from 'react-icons/gr';
import { GiTwoCoins, GiEntryDoor} from 'react-icons/gi';
import { BsChatFill, BsFillXSquareFill } from 'react-icons/bs';
// import {  } from 'react-icons/ai';
import { MdKitchen } from 'react-icons/md';

export default class Guests extends Component {
state={
    host:[
        {
            icon:<GiTwoCoins/>,
            title: "cheaper",
            info: "Book online for our reduced weekly/monthly rents up to 50% on all new reservations",
            subinfo : "Lower price than Hotels"
        },
        {
            icon:<FaCoffee/>,
            title: "complete amenities",
            info: "Wifi, Kitchen, Coffee maker, Netflix, Parking, etc... all at your disposal",
            subinfo: "Tell us what else do you need... We'll add that too"
        },
        {
            icon:<BsFillXSquareFill/>,
            title: "flexible cancellation policies",
            info: "Have the option to be able to cancel 2 days before your arrival date",
            subinfo : "Extended stay a possibility when necessary"
            
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

        <div className="guests">
            <Title title='for guests' />
            <div className="guests-center">
                {this.state.host.map((item, index) => {
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