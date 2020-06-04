import React, {Component} from 'react';
import {PropertyContext } from '../context';
import Loading from './Loading';
import Property from './Property';
import Title from './Title'

export default class FeaturedPropertys extends Component {
static contextType = PropertyContext

    render() {
        let {loading, featuredPropertys : propertys} = this.context;
       propertys = propertys.map(property => {
            return <Property key={property.id} property={property}/>
        });

     return( 
     <section className="featured-propertys"> 
         <Title title="featured properties"/>
         <div className="featured-propertys-center">
             {loading?<Loading/>:propertys}
         </div>
     </section> 
     );
  }

}