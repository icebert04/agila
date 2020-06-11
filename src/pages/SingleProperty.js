import React, {Component} from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {PropertyContext} from '../context';
import StyledHero from '../components/StyledHero';
import Futer from '../components/Futer';
 
export default class SingleProperty extends Component {
  constructor(props){
    super(props);
 
   this.state ={
     slug:this.props.match.params.slug,
     defaultBcg
   };
  }
  static contextType = PropertyContext;
 // componentDidMount() {
 //console.log(this.props);
 // }

 

    render() {
      const { getProperty } = this.context;
      const property = getProperty(this.state.slug);

      if (!property){
        return ( 
        <div className="error">
          <h3>no such property could be found...</h3>
          <Link to="/properties" className="btn-primary">back to properties</Link>
        </div>
        );
      }

     


      const {name,
        description,
        location,
        terms,
        capacity,
        size,
        price,
        extras,
        wifi,
        pets,
        parking,
        fbLink,
        images} = property;
        const [mainImg,...defaultImg] = images;
     return (
       <>
     <StyledHero img ={images[0] || this.state.defaultBcg}>
       <Banner title={`${name} property`}>
         <Link to="/properties" className="btn-primary">
            back to properties
         </Link>
       </Banner>
     </StyledHero>
      <section className="single-property">
        <div className="single-property-images">
      
    
             {defaultImg.map((item,index)=> (
           
            
             <img key={index} src={item} alt={name}/>
            
             ))}
         </div>
 
        <div className="single-property-info">
          <article className="desc">
            <h3>description</h3>
            <p>{description}</p>
          </article>
          <article className="info">

            <h3>info</h3>

            <h6>location : {location}</h6>

            <h6>term : {terms}</h6>

            <h6>price : ₱{price}</h6>

            <h6>size : {size}SQFT</h6>
      
      <h6>max capacity : {capacity > 1 ? `${capacity} people`: `${capacity} person`
      }</h6>
      
      <h6>{pets?"pets allowed":"no pets allowed"}</h6>
      
      <h6>{wifi?"wifi included":"no wifi included"}</h6>

      <h6>{parking?"parking available":"no parking available"}</h6>
          </article>
        </div>     
        </section>
        <section className="property-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item,index)=>{
              return <li key={index}>- {item}</li>
            })}
          </ul>
          
        </section>
       <section>
        <div className="fbLink btn">     
                <p> Contact us or 
                <a className="btn-small btn" href={fbLink} target="_blank"> Book now</a>
              </p>
          </div>
          </section>
        <Futer />
      </>
     );     
   }
}