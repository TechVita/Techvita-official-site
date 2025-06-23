import React from "react";
import { services } from "../data/servicesData";
// import ServiceCard from "../components/ServiceCard";
import ServiceCard from "../Components/Service/ServiceCard"

function Services() {
  return (
    <section>
      <h2 className="mb-4 text-center">Services</h2>
      <div className="container">
        <div className="card-wrapper">
          {services.map(service => (
            <div className="" key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
