import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} title={title} alt={title} />
      <p>{title}</p>
    </div>
  );
};
