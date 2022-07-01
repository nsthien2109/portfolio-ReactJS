import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Map, { Marker } from "react-map-gl";
import { Slide } from "react-awesome-reveal";
import mapboxgl from "mapbox-gl";
import markerUrl from "../../../assets/icons/pin.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxsZW5od2tpbSIsImEiOiJja21ydzdiZXUwYnprMnBwZjBoaml1MjJvIn0.YFuQaFPaHsd-NQhU002DCw";

const Contact = () => {
  return (
    <div className="w-full flex justify-center dark:bg-[#111111]">
      <Slide>
        <div className="px-5 py-28 max-w-[880px]">
          <PageHeader page="Contact" title="Get in touch" />
          <div className="map w-full h-[400px] mt-12">
            <Map
              initialViewState={{
                longitude: 108.25304896333833,
                latitude: 15.975385952771509,
                zoom: 15,
              }}
              style={{ height: 400 }}
              mapStyle="mapbox://styles/mapbox/dark-v10">
              <Marker
                longitude={108.25304896333833}
                latitude={15.975385952771509}
                anchor="bottom">
                <p className="text-white">Vietnam-Korea University</p>
                <img src={markerUrl} width="20px" />
              </Marker>
            </Map>
          </div>
          <div className="w-full mt-8 form-contact">
            <form action="">
              <input
                type="text"
                name=""
                className="border border-gray-400 dark:bg-[#111111] w-full py-[10px] px-4 mb-5 italic"
                placeholder="Name"
              />
              <input
                type="text"
                name=""
                className="border border-gray-400 w-full dark:bg-[#111111] py-[10px] px-4 mb-5 italic"
                placeholder="Email"
              />
              <textarea
                name=""
                placeholder="Message"
                className="border border-gray-400 w-full dark:bg-[#111111] h-[120px] py-[10px] px-4 mb-5"></textarea>
              <button className="py-4 text-white bg-black dark:bg-white dark:text-black px-9">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
