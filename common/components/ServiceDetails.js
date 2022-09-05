import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Diamond, DiamondWhite, Lightning, LightningWhite, TabTwoIcon, TabTwoIconWhite } from "../svgIcons";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SeatPlan from "./SeatPlan";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const boarding_names = ["Kalabagan", "Gabtoli", "Rajarbagh", "Kachpur Bridge", "Komlapur", "Airport"];

const dropping_name = ["Dampara", "Tiger pass", "Pahartoli", "Pathorghata", "Railway colony"];

const ServiceDetails = ({ data }) => {
  const [value, setValue] = React.useState(1);
  const [locations, setLocations] = useState({
    boarding: "",
    dropping: "",
  });
  const matches = useMediaQuery("(max-width:577px)");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleChangeLocation = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
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
          <Tab icon={value === 0 ? <DiamondWhite /> : <Diamond />} iconPosition="start" label="Earliest Buses" {...a11yProps(0)} />
          <Tab icon={value === 1 ? <TabTwoIconWhite /> : <TabTwoIcon />} iconPosition="start" label="Cheapest Buses" {...a11yProps(1)} />
          <Tab icon={value === 2 ? <LightningWhite /> : <Lightning />} iconPosition="start" label="Available Seats" {...a11yProps(2)} />
          <Tab icon={value === 3 ? <LightningWhite /> : <Lightning />} iconPosition="start" label="Fastest Trips" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="no_flight">
            <img src="/images/no-flights.png" alt="no flights" />
            <h1>Sorry !</h1>
            <p>No Bus Found.</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="tab_details_generic">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-9 ticket_details">
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
                    <div className="destination_wrapper">
                      <div className="row">
                        <div className="col-md-6 boarding_point">
                          <FormControl sx={{ marginBottom: 1, width: "100%" }}>
                            {" "}
                            <InputLabel
                              id="boarding-point"
                              sx={{
                                fontSize: "14px",
                                top: "-7px",
                              }}
                            >
                              Boarding Point
                            </InputLabel>
                            <Select
                              labelId="boarding-point"
                              id="boarding-point"
                              value={locations.boarding}
                              onChange={handleChangeLocation}
                              input={<OutlinedInput label="Boarding Point" />}
                              MenuProps={MenuProps}
                              name="boarding"
                              sx={{ fontSize: "14px", fontFamily: "SFM" }}
                              size="small"
                            >
                              {boarding_names.map((name) => (
                                <MenuItem key={name} value={name}>
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-md-6">
                          <FormControl sx={{ marginBottom: 1, width: "100%" }}>
                            {" "}
                            <InputLabel
                              id="dropping-point"
                              sx={{
                                fontSize: "14px",
                                top: "-7px",
                              }}
                            >
                              Dropping Point
                            </InputLabel>
                            <Select
                              labelId="dropping-point"
                              id="dropping-point"
                              value={locations.dropping}
                              onChange={handleChangeLocation}
                              input={<OutlinedInput label="Dropping Point" />}
                              MenuProps={MenuProps}
                              name="dropping"
                              sx={{ fontSize: "14px", fontFamily: "SFM" }}
                              size="small"
                            >
                              {dropping_name.map((name) => (
                                <MenuItem key={name} value={name}>
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="seats_count">
                    <div className="row">
                      <div className="col-12">
                        <div className="seats_count-inner">
                          <div className="single">
                            <img src={data.seats.sold.image} alt="demo name" />
                            <span>{data.seats.sold.amount > 0 && data.seats.sold.amount + " sold out"}</span>
                          </div>
                          <div className="single">
                            <img src={data.seats.booked.image} alt="demo name" />
                            <span>{data.seats.booked.amount > 0 && data.seats.booked.amount + " Booked"}</span>
                          </div>
                          <div className="single">
                            <img src={data.seats.selected.image} alt="demo name" />
                            <span>{data.seats.selected.amount > 0 && data.seats.selected.amount + " Selected"}</span>
                          </div>
                          <div className="single">
                            <img src={data.seats.available.image} alt="demo name" />
                            <span>{data.seats.available.amount > 0 && data.seats.available.amount + " Available"}</span>
                          </div>
                          <div className="single">
                            <img src={data.seats.blocked.image} alt="demo name" />
                            <span>{data.seats.blocked.amount > 0 && data.seats.blocked.amount + " Blocked"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 price_details">
                  <div className="price_calculation">
                    <p>Per Person</p>
                    <p>BDT 750</p>
                    <p>BDT 775</p>
                    <Button variant="contained" sx={{ fontSize: "14px", marginBottom: "12px" }}>
                      view seats
                    </Button>
                    <p className="cancel_policy">Cancellation Policy</p>
                  </div>
                  <div className="seat_panel">
                    <SeatPlan items={data.seats_booked} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="no_flight">
            <img src="/images/no-flights.png" alt="no flights" />
            <h1>Sorry !</h1>
            <p>No Seat Found.</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="no_flight">
            <img src="/images/no-flights.png" alt="no flights" />
            <h1>Sorry !</h1>
            <p>No Trip Found.</p>
          </div>
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
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}
