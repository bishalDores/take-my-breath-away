import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Button from "@mui/material/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SeatPlan = ({ items }) => {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(max-width:768px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant={matches ? "fullWidth" : "standard"}
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
            fontWeight: 500,
            justifyContent: "flex-start",
            padding: "9px 16px",
            borderRadius: "3px",
          },
          "& .Mui-selected": {
            backgroundColor: "#1882FF",
            color: "white !important",
          },
        }}
      >
        <Tab label="seat info" {...a11yProps(0)} />
        <Tab label="policy" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="seat_info">
          {items.map((d, i) => {
            return (
              <div className="seat_info-single" key={i}>
                <div className="left_part">
                  <img src={d.image} alt="demo image" />
                  <span className="seat_num">{d.number}</span>
                  <span>{d.category}</span>
                </div>
                <div className="right_part">
                  <p>BDT {d.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="seat_info">
          <div className="seat_info-single">
            <div className="left_part">
              <span>Charge:</span>
            </div>
            <div className="right_part">
              <p>BDT 50</p>
            </div>
          </div>
          <div className="seat_info-single">
            <div className="left_part">
              <span>Insurance:</span>
            </div>
            <div className="right_part">
              <p>BDT 20</p>
            </div>
          </div>
        </div>

        <div className="total_price">
          <p>Sub Total:</p>
          <p>BDT 1,570</p>
        </div>
        <div className="confirm_service">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <>
                I want to avail{" "}
                <Link href="/">
                  <a>Insurance Service</a>
                </Link>
              </>
            }
            sx={{
              "& .MuiTypography-root": {
                fontSize: "12px",
                color: "#4C4C4C",
                fontWeight: 500,
              },
            }}
          />
          <Button variant="contained" sx={{ width: "100%", fontSize: "12px" }}>
            Select & Continue to return
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="mt-4">Hold tight ! Policies will be updated soon.</p>
      </TabPanel>
    </>
  );
};

export default SeatPlan;
