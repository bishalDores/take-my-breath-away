import React from "react";
import RangeSlider from "./RangeSlider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterTab = ({ data }) => {
  return (
    <div className="filterTab_wrapper">
      <div className="header">
        <p>Sort & Filter</p>
        <p style={{ cursor: "pointer" }}>RESET</p>
      </div>
      <hr className="custom_hr" />
      <div className="price_wrapper">
        <div className="price_range_inner">
          <p>Price Range</p>
          <div className="range_slider">
            <div className="price_range">
              <div>
                <h6>Minimum Price</h6>
                <h5>500</h5>
              </div>
              <div>
                <h6>Maximum Price</h6>
                <h5>3,213</h5>
              </div>
            </div>
            <RangeSlider />
          </div>
        </div>
        <hr className="custom_hr" />
      </div>
      <div className="generic_wrapper">
        <div className="generic_wrapper_inner">
          <p>Class</p>
          <FormGroup sx={{ marginBottom: "41px" }}>
            {data.class_category.map((cat, index) => {
              return <FormControlLabel control={<Checkbox />} label={`${cat.title} (${cat.seats})`} key={index} />;
            })}
          </FormGroup>
        </div>
        <hr className="custom_hr" />
      </div>
      <div className="generic_wrapper">
        <div className="generic_wrapper_inner">
          <p>Schedule</p>
          <div className="schedule_departure">
            <p>Departure Time</p>
            <div className="time_segment">
              {data.departure.map((t, index) => {
                return (
                  <div className="time_segment-single" key={index}>
                    <img src={t.icon} /> <span>{t.time_segment}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTab;
