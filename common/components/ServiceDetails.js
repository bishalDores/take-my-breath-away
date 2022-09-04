import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Diamond,
  DiamondWhite,
  Lightning,
  LightningWhite,
  TabTwoIcon,
  TabTwoIconWhite,
} from "../svgIcons";
import useMediaQuery from "@mui/material/useMediaQuery";

const ServiceDetails = ({ data }) => {
  const [value, setValue] = React.useState(1);
  const matches = useMediaQuery("(max-width:577px)");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="service_wrapper">
      <p className="bus_amount">{data.total_bus} Available Buses</p>

      <div className="service_tabs">
        <Tabs
          variant={matches ? "scrollable" : "fullWidth"}
          value={value}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
          sx={{
            minHeight: 0,
            "& .MuiTabs-scroller": {
              border: "1px solid #F6F6F6",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiButtonBase-root": {
              minHeight: 0,
              fontSize: "14px",
              fontFamily: "SFR",
              fontWeight: 600,
              justifyContent: "flex-start",
              textTransform: "initial",
            },
            "& .Mui-selected": {
              backgroundColor: "#3884F7",
              color: "white !important",
            },
          }}
        >
          <Tab
            icon={value === 0 ? <DiamondWhite /> : <Diamond />}
            iconPosition="start"
            label="Earliest Buses"
            {...a11yProps(0)}
          />
          <Tab
            icon={value === 1 ? <TabTwoIconWhite /> : <TabTwoIcon />}
            iconPosition="start"
            label="Cheapest Buses"
            {...a11yProps(1)}
          />
          <Tab
            icon={value === 2 ? <LightningWhite /> : <Lightning />}
            iconPosition="start"
            label="Available Seats"
            {...a11yProps(2)}
          />
          <Tab
            icon={value === 3 ? <LightningWhite /> : <Lightning />}
            iconPosition="start"
            label="Fastest Trips"
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="tab_details_generic">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8 ticket_details">
                  <div className="ticket_details-inner">
                    <div className="details_heading">
                      <p className="ac_type">AC</p>
                      <div>
                        <div className="bus_name">Hanif Enterprise</div>
                        <div className="bus_num">31-DHK-CTG(D)</div>
                      </div>
                      <p className="price">
                        <span>
                          <img src="/images/coin.svg" alt="coin" />
                        </span>
                        55
                      </p>
                    </div>
                    <div className="from_to_wrapper">
                      <div className="from_wrapper">
                        <p>From</p>
                        <p>DHAKA</p>
                        <p>11:30 PM</p>
                        <p>Kolabagan Counter</p>
                        <p>22 June 2021</p>
                      </div>
                      <div className="travel_duration">
                        <img src="/images/bus.png" alt="bus" />
                        <p className="seats_available">16 Seats available</p>
                        <p className="duration">6h 00m</p>
                      </div>
                      <div className="from_wrapper">
                        <p>To</p>
                        <p>CHOTTOGRAM</p>
                        <p>5:30 AM</p>
                        <p>Dampara Counter</p>
                        <p>23 June 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 price_details">
                  per person
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </div>
    </div>
  );
};

export default ServiceDetails;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
