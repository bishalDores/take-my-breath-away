import React from "react";

const ServiceDetails = ({ data }) => {
  return (
    <div className="service_wrapper">
      <p className="bus_amount">{data.total_bus} Available Buses</p>
    </div>
  );
};

export default ServiceDetails;
