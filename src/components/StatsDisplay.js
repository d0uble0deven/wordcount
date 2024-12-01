import React from "react";

const StatsDisplay = ({ label, value, unit }) => (
  <a>
    {label}: {value} {unit}
  </a>
);

export default StatsDisplay;
