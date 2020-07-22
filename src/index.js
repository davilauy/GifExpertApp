import React from "react";
import ReactDOM from "react-dom";
import { GifExpertApp } from "./GifExpertApp";
import "./index.css";

ReactDOM.render(
  <GifExpertApp defaultCategories={["Will smith"]} />,
  document.getElementById("root")
);
