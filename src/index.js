import React from "react";
import "font-awesome/css/font-awesome.min.css";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

//selector
const current_course = "CURRENT COURSE";

const current_coursestatus = "CURRENT COURSE STATUS";
const view_part = "VIEW PART";

//action
export const current_courseAction = (
  crsname,
  crsimg,
  crsdesc,
  crsauth,
  crsauthrole,
  crsauthordp,
  crsstatus,
  crsoverview,
  crsdate
) => ({
  type: current_course,
  course_name: crsname,
  course_description: crsdesc,
  course_authorname: crsauth,
  course_authorrole: crsauthrole,
  course_authordp: crsauthordp,
  coursedp: crsimg,
  course_status: crsstatus,
  course_overview: crsoverview,
  course_date: crsdate,
});

export const current_coursestatusAction = () => ({
  type: current_coursestatus,
});

export const view_partAction = () => ({
  type: view_part,
});
const initialValues = {
  course_name: "",
  course_description: "",
  course_authorname: "",
  course_authorrole: "",
  course_authordp: "",
  coursedp: "",
  course_status: 0,
  course_overview: [],
  course_date: "",
  view_part: false,
};
//reducer
const reducer = (state = initialValues, action) => {
  switch (action.type) {
    case current_course:
      return {
        ...state,
        course_name: action.course_name,
        course_description: action.course_description,
        course_authorname: action.course_authorname,
        course_authorrole: action.course_authorrole,
        course_authordp: action.course_authordp,
        coursedp: action.coursedp,
        course_status: action.course_status,
        course_overview: action.course_overview,
        course_date: action.course_date,
      };

    case current_coursestatus:
      return { ...state, course_status: "mass" };
    case view_part:
      return { ...state, view_part: !state.view_part };
    default:
      return { ...state };
  }
};

//store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch
//store.dispatch(current_courseAction("siva"));
//store.dispatch(current_courseAction("siva is back"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
