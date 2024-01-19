import React, { useState } from "react";
import data from "../Utils/properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./propertyDetails.css";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

const PropertyDetails2 = () => {
  const propData = data.properties.find((property) => property.id === "prop2");
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Header />
      <div className="property-details">
        <h1 className="primaryText">{propData.type}</h1>
        <img src={propData.picture} alt={propData.type} />

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Google Map</Tab>
          </TabList>

          <TabPanel>
            <p className="secondaryText">{propData.description}</p>
            <p className="secondaryText">Price: {propData.price}</p>
            <p className="secondaryText">Location: {propData.location}</p>
            <p className="secondaryText">Postal Code: {propData.postcode}</p>
            <p className="secondaryText">Bedrooms: {propData.bedrooms}</p>
            <p className="secondaryText">Tenure: {propData.tenure}</p>
            <p className="secondaryText">
              Added Date: {propData.added.day} of {propData.added.month}{" "}
              {propData.added.year}
            </p>
          </TabPanel>

          <TabPanel>
            <img src="./floorplan.jpg" alt="floorplan" />
            <p className="secondaryText">Floorplan</p>
          </TabPanel>

          <TabPanel>
            <img src="./map.jpg" alt="map" />
            <p className="secondaryText">Map</p>
          </TabPanel>
        </Tabs>

        <div className="flexCenter thumbnail">
          <img
            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="flexCenter thumbnail">
          <img
            src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails2;
