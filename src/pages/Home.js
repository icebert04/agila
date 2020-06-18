import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Landlord from "../components/Landlord";
import FeaturedPropertys from "../components/FeaturedPropertys";
import Futer from "../components/Futer";
import Tenants from "../components/Tenants";
import Info from "../components/Info";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Balay Agila"
          subtitle="We visit the Properties, so you can book from wherever you are"
        >
          <Link to="/properties" className="btn-primary">
            search rentals
          </Link>
        </Banner>
      </Hero>

      <Info />

      <Tenants />

      <Landlord />

      <FeaturedPropertys />

      <Futer />
    </>
  );
}
