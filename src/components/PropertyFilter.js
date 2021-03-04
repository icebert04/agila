import React from "react";
import { useContext } from "react";
import { PropertyContext } from "../context";
import Title from "../components/Title";
//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function PropertyFilter({ propertys }) {
  const context = useContext(PropertyContext);
  const {
    handleChange,
    location,
    terms,
    capacity,
    price,
    minPrice,
    maxPrice,
    Wifi,
    pets,
    parking,
  } = context;
  // get unique locations
  let locations = getUnique(propertys, "location");
  //add all
  locations = ["any", ...locations];

  
  //map to jsx
  locations = locations.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  
  //terms
  
  // const termSort = [].concat(this.state.data)
  //   .sort((a, b) => a.term > b.term ? 1 : -1);
  let term = getUnique(propertys, "terms");

  term = ["any", ...term];
  
  term = term.map((item, index) => { 
  
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
    
  });
  


  //capacity
  let people = getUnique(propertys, "capacity");

  people = people.map((item, index) => {

  // const array = [{people}]

  // array.sort(function(a, b) {
  //   return a.value - b.value;
  // });
  // console.log(array);
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //returns everything in return to site
  return (
    <section className="filterContainer">
      <Title title="search Properties" />
      <form className="filter-form">
        {/*select location*/}
        <div className="form-group">
          <label name="location">property location</label>
          <select
            name="location"
            id="location"
            value={location}
            className="form-control"
            onChange={handleChange}
          >
            {locations}
          </select>
        </div>
        {/*end of select location*/}

        {/* terms */}
        <div className="form-group">
          <label name="terms">term</label>
          <select
            name="terms"
            id="terms"
            value={terms}
            className="form-control"
            onChange={handleChange}
          >
            {term}
          </select>
        </div>
        {/* end of terms */}

        {/*tenants*/}
        <div className="form-group">
          <label name="capacity">tenants</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*tenants end*/}

        {/* property price */}
        <div className="form-group">
          <label htmlFor="price">price ₱{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of property price */}
        {/* extras */}
        <div className="form-group">
          {/* Wifi */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="Wifi"
              id="Wifi"
              checked={Wifi}
              onChange={handleChange}
            />
            <label htmlFor="Wifi">Wifi</label>
          </div>

          {/* pets */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>

          {/* parking */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="parking"
              id="parking"
              checked={parking}
              onChange={handleChange}
            />
            <label htmlFor="parking">parking</label>
          </div>
        </div>
        {/* end of parking */}

        {/* end of extras */}
      </form>
    </section>
  );
}
