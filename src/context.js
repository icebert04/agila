import React, {Component} from 'react';
//import items from './data';
import Client from './Contentful';

const PropertyContext = React.createContext();
// <PropertyContext.Provider value ={}
//this is just state the filter that is rendered on open
class PropertyProvider extends Component {
state={
    propertys:[],
    sortedPropertys:[],
    featuredPropertys:[],
    loading:true,
    location: "any",
    terms: "daily",
    capacity:1,
    price:0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    wifi: false,
    pets: false,
    parking: false,
};
//getData externally
  getData = async () => {
    try{
      let response = await Client.getEntries({
        content_type:"agilamodel",
      //  order: "sys.createdAt"
      order: 'fields.price'
      
      });

      let propertys= this.formatData(response.items);
      let featuredPropertys = propertys.filter(property =>property.featured === true);
      let maxPrice = Math.max(...propertys.map(item => item.price));
      let maxSize = Math.max(...propertys.map(item => item.size));

      this.setState({

          propertys, 
          featuredPropertys,
          sortedPropertys:propertys, 
          loading:false,
          price:maxPrice,
          maxPrice,
          maxSize
      });     
    } catch (error) {
      console.log(error);
    }
  }


//this helps formatData with details
  componentDidMount(){
     this.getData ()
     
  }
// this formats data from the Data which are images, description, etc...
  formatData(items) {
      let tempItems = items.map(item =>{
        let id = item.sys.id
        let images = item.fields.images.map(image => image.fields.file.url);

        let property = {...item.fields, images, id};
        return property;    
      });
      return tempItems;
  }
// this gets the slug of a property
    getProperty = slug => {
      let tempPropertys = [...this.state.propertys];
      const property = tempPropertys.find(property => property.slug === slug);
      return property;
  };
// this handles change on the checkbox
    handleChange = event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked:target.value;
      const name = event.target.name;
      this.setState({
        [name]:value
      }, this.filterPropertys)
       };
//filters properties
    filterPropertys = () => {
      let {
        propertys, location, terms, capacity, price, minSize, maxSize, wifi, pets, parking
      } = this.state
    //all the properties
    let tempPropertys = [...propertys];
    //transform value capacity
      capacity = parseInt(capacity)
    //transfrom value price
      price = parseInt(price)

  //filters by location
    if(location !== 'any'){
      tempPropertys = tempPropertys.filter(property => property.location === location)
    }

    //filters by terms
    if(terms !== 'daily'){
      tempPropertys = tempPropertys.filter(property => property.terms === terms)
    }

 //filters by capacity
    if(capacity !== 1  ) {
      tempPropertys = tempPropertys.filter(property => property.capacity >= capacity)
    }

//filters by price
    tempPropertys = tempPropertys.filter(property => property.price <= price);

//filter by size
    tempPropertys = tempPropertys.filter(property => property.size >= minSize && property.size <= maxSize)

//filter by wifi
    if(wifi){
       tempPropertys = tempPropertys.filter(property => property.wifi === true)
    }
//filter by pets
    if(pets){
      tempPropertys = tempPropertys.filter(property => property.pets === true)
    }
//filter by parking
    if(parking){
      tempPropertys = tempPropertys.filter(property => property.parking == true)
    }

//change state
this.setState({
  sortedPropertys:tempPropertys
})
      };

//renders everything
    render() {
     return (
        <PropertyContext.Provider value={{...this.state,
           getProperty: this.getProperty, handleChange:this.handleChange
           }}
           >
            {this.props.children}
        </PropertyContext.Provider>
      );
    }
  
}
//property consumer function used when exported
const PropertyConsumer = PropertyContext.Consumer;
//exports functions when imported elsewhere
export function withPropertyConsumer(Component){
  return function ConsumerWrapper(props){
    return <PropertyConsumer>
      {value => <Component {...props} context={value}/>}
    </PropertyConsumer>
  }
}
export { PropertyProvider, PropertyConsumer, PropertyContext };