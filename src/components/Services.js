import React, {Component} from 'react';
import Title from './Title';
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
state={
    services:[
        {
            icon:<FaCocktail/>,
            title: "free cocktails",
            info: "lorem"
        },
        {
            icon:<FaHiking/>,
            title: "Endless Hiking",
            info: "lorem"
        },
        {
            icon:<FaShuttleVan/>,
            title: "Free shuttle",
            info: "lorem"
        },
        {
            icon:<FaBeer/>,
            title: "Strongest Beer",
            info: "lorem"
        }
    ]
};

    render() {
     return (

        <div className="services">
            <Title title='services' />
            <div className="services-center">
                {this.state.services.map((item, index) => {
              return (
              <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
              </article > 
              );         
          })}
            </div>
        </div>
      );
    }
}