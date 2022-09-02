import FilterTab from "../common/components/FilterTab";
import ServiceDetails from "../common/components/ServiceDetails";

const data = {
  class_category: [
    {
      title: "AC",
      seats: 40,
    },
    {
      title: "Non AC",
      seats: 24,
    },
  ],
  departure: [
    { time_segment: "00:00 - 05:59", icon: "/images/time_segment.svg" },
    { time_segment: "06:00 - 11:59", icon: "/images/time_segment.svg" },
    { time_segment: "12:00 - 17:59", icon: "/images/time_segment.svg" },
    { time_segment: "18:00 - 23:59", icon: "/images/time_segment.svg" },
  ],
  total_bus: 48,
};

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 left_panel_bg">
          <div className="left_panel">
            <FilterTab data={data} />
          </div>
        </div>
        <div className="col-md-8 col-lg-9 right_panel_bg">
          <div className="right_panel">
            <ServiceDetails data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
