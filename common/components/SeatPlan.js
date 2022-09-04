import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";

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

const SeatPlan = () => {
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
        Item One Item One Item One Item One Item One Item One Item One Item One Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </>
  );
};

export default SeatPlan;
