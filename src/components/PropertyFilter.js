import React from 'react';
import {useContext} from 'react';
import {PropertyContext} from '../context'
import Title from '../components/Title'
//get all unique values
const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}

export default function PropertyFilter({propertys}) {
  const context = useContext(PropertyContext);
    const {
        handleChange,
        location,
        terms,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        wifi,
        pets,
        parking
    } = context;
    // get unique locations
    let locations = getUnique(propertys, 'location');
    //add all
    locations = ['any',...locations];

    //terms
    let term = getUnique(propertys,'terms');
    term = term.map((item,index)=>{
   return <option key={index} value={item}>{item}</option>
        })
        
    //map to jsx
    locations = locations.map((item,index)=>{
        return( <option value={item} key={index}>{item}</option>
          );
        });
    //capacity
      let people = getUnique(propertys,'capacity');
    people = people.map((item,index)=>{
   return <option key={index} value={item}>{item}</option>
        })



//returns everything in return to site
    return (
        <section className="filterContainer">
            <Title title="search Properties"/>
        <form className="filter-form">
            {/*select location*/}
            <div className="form-group">
                <label name="location">property location</label>
                <select name="location" 
                id="location" 
                value={location} 
                className="form-control" 
                onChange={handleChange} >
                 {locations}
                 </select> 
                
            </div>
            {/*end of select location*/}

            {/* terms */}
            <div className="form-group">
                <label name="terms">term</label>
                <select name="terms" 
                id="terms" 
                value={terms} 
                className="form-control" 
                onChange={handleChange} >
                 {term}
                 </select> 
                
            </div>
            {/* end of terms */}

            {/*guests*/}
            <div className="form-group">
                <label name="capacity">guests</label>
                <select name="capacity" 
                id="capacity" 
                value={capacity} 
                className="form-control" 
                onChange={handleChange} >
                 {people}
                 </select> 
                
            </div>
            {/*guests end*/}

            {/* property price */}
                <div className="form-group">
                    <label htmlFor="price">
                         price ₱{price}
                    </label>
                    <input type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price} 
                    onChange={handleChange} 
                    className="form-control"/>
                </div>
            {/* end of property price */}
            {/* size */}
            <div className="form-group">
                <label htmlFor="size"> size</label>
                    <div className="size-inputs">
                        {/*min size*/}
                        <input type="number" 
                        name ="minSize" 
                        id="size" 
                        value={minSize} 
                        onChange={handleChange} 
                        className="size-input"/>
                        {/*max size */}
                        <input type="number" 
                        name ="maxSize" 
                        id="size" 
                        value={maxSize} 
                        onChange={handleChange} 
                        className="size-input"/>
                    </div>
            </div>
            {/* end of size */}
            {/* extras */}
            <div className="form-group">
                {/* wifi */}
                <div className="single-extra">
                    <input type="checkbox"
                     name="wifi"
                     id="wifi"
                     checked={wifi}
                     onChange={handleChange}/>
                    <label htmlFor="wifi">wifi</label>
                </div>

                {/* pets */}
                <div className="single-extra">
                    <input type="checkbox"
                     name="pets"
                     id="pets"
                     checked={pets}
                     onChange={handleChange}/>
                    <label htmlFor="pets">pets</label>
                </div>
          
                {/* parking */}
                <div className="single-extra">
                    <input type="checkbox"
                     name="parking"
                     id="parking"
                     checked={parking}
                     onChange={handleChange}/>
                    <label htmlFor="parking">parking</label>
                </div> 
             </div>
                {/* end of parking */}

            {/* end of extras */}

        </form>
        </section>
    )
}