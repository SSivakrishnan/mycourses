import React, { useState } from "react";
import course_details from "../data/coursedetails";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  current_courseAction,
  //  current_coursestatusAction
} from "../index";
function Coursepage() {
  const [inPreview, setInPrevirw] = useState(false);
  const dispatch = useDispatch();
  if (inPreview) {
    return <Redirect to="/previewpage/" />;
  }
  const handleinpreview = () => {
    setInPrevirw(!inPreview);
  };
  const random = Math.floor(Math.random() * Math.floor(10));
  console.log("random........", random);
  return (
    <div className="coursepage">
      <div className="crspg-topnav">
        <h3>&larr; My courses</h3>
      </div>
      <div className="flex-container">
        {course_details.map((crs) => (
          <div
            className="crspg-card"
            key={crs.id}
            style={{ backgroundColor: "#" + random + "d8c495c" }}
          >
            <div className="crspg-img">
              <img src={crs.image} alt={crs.name} />
            </div>
            <div className="crspg-name">
              <h3>{crs.name}</h3>
            </div>
            <hr />
            <div className="crspg-author">
              <img src={crs.authordp} alt={crs.author} />
              <p>{crs.author}</p>
            </div>
            <div className="crspg-status">
              <h3>{crs.status}/15</h3>
              <p>classes completed </p>
            </div>
            <div className="crspg-view-course">
              <button
                onClick={() => {
                  handleinpreview();
                  dispatch(
                    current_courseAction(
                      crs.name,
                      crs.image,
                      crs.description,
                      crs.author,
                      crs.authorrole,
                      crs.authordp,
                      crs.status,
                      crs.overview,
                      crs.date
                    )
                  );
                }}
              >
                View course <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coursepage;
