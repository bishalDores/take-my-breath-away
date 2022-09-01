import FilterTab from "../common/components/FilterTab";
import ServiceDetails from "../common/components/ServiceDetails";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 left_panel_bg">
          <div className="left_panel">
            <FilterTab />
          </div>
        </div>
        <div className="col-md-9 right_panel_bg">
          <div className="right_panel">
            <ServiceDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
