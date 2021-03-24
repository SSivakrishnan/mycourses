import React from "react";
import { BiAlarm, BiCalendarAlt } from "react-icons/bi";
import { AiFillCopy, AiOutlineLock } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { IoIosChatboxes } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { view_partAction } from "../index";
import { Link } from "react-router-dom";
function Previewpage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("...........", state.view_part);
  const visible_overview = state.course_overview.slice(0, 3);
  const hidden_overview = state.course_overview.slice(
    3,
    state.course_overview.length
  );
  const juice_width = Math.round((state.course_status / 15) * 100);

  return (
    <div className="previewpage">
      <div className="backtocourse">
        <Link to="/">&larr;Back to my courses</Link>
      </div>

      <div className="pp-crsdiv">
        <h3 className="pp-crs-heading">{state.course_name}</h3>
        <div className="pp-crsdiv-status">
          <div className="pp-progressbar">
            <div
              className="pp-pb-juice"
              style={{ width: juice_width + "%" }}
            ></div>
          </div>
          <h4>{juice_width}% completed</h4>
          <h5>{state.course_status}/15 classes</h5>
        </div>
        <p>{state.course_description}</p>
      </div>
      <h3 className="pp-nxtcls-heading">Your next class sehedule</h3>
      <div className="pp-nxtcls">
        <div className="pp-nxtcls-top">
          <h2>Basics of components</h2>
          <hr />
          <h4>Topic 4</h4>

          <p className="pp-nextcls-date">
            <BiAlarm /> {state.course_date.slice(0, 8)}&nbsp;&nbsp;&nbsp;&nbsp;
            <BiCalendarAlt /> {state.course_date.slice(9, 15)}
          </p>
        </div>
        <div className="pp-nxtcls-bottom">
          <button className="cpyclslink">
            <AiFillCopy className="copyicon" />
            &nbsp; Copy class link
          </button>
          <button className="joincls">Join class</button>
        </div>
        <a href="!#">Notify changes in timing</a>
      </div>
      <h3 className="pp-tutordetail-heading">Tutor details</h3>
      <div className="pp-tutordetail">
        <div className="pp-tutordetail-top">
          <img src={state.course_authordp} alt={state.course_authorname} />
          <h4>{state.course_authorname}</h4>
          <br />
          <br />
          <p>{state.course_authorrole}</p>
          <h5 className="author-rating">
            <FcRating />
            4.5
          </h5>
        </div>
        <button className="chat">Chat</button>
        <button className="track">Track assignment</button>
        <br />
        <button className="rwr">Rate &#38; Write Review</button>
      </div>
      <div className="pp-crsoverview">
        <div className="crsoverview-heading">
          <h2>Course overview</h2>
        </div>
        {visible_overview.map((crs, i) => (
          <div className="crsoverview-content" key={i}>
            <h4>
              <span>
                <AiOutlineLock />
              </span>
              {crs}
            </h4>
          </div>
        ))}
        {hidden_overview.map((crs, i) => (
          <div className="hidding-part" data-vp={state.view_part} key={i}>
            <div className="crsoverview-content">
              <h4>
                <span>
                  <AiOutlineLock />
                </span>
                {crs}
              </h4>
            </div>
          </div>
        ))}

        <button
          className="view-part"
          onClick={() => dispatch(view_partAction())}
        >
          {state.view_part ? "view less" : "view all "}
        </button>
      </div>
      <div className="pp-review">
        <p>Write review about course</p>
      </div>
      <div className="pp-helpsupport">
        <div className="help-logo">
          <IoIosChatboxes />
        </div>
        <div className="helpsupport">
          <h5>Help &#38; support </h5>
          <hr />
          <p>Reach us if you find issue in this course</p>
        </div>
      </div>
    </div>
  );
}

export default Previewpage;
