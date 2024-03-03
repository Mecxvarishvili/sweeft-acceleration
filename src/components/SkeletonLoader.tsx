import React from "react";

export default function SkeletonLoader() {
  return (
    <>
      <div className="card is-loading image-card-cont">
        <div className="image"></div>
        <div className="content"></div>
      </div>
      <div className="card is-loading image-card-cont">
        <div className="image"></div>
        <div className="content"></div>
      </div>
      <div className="card is-loading image-card-cont">
        <div className="image"></div>
        <div className="content"></div>
      </div>
      <div className="card is-loading image-card-cont">
        <div className="image"></div>
      </div>
      <div className="card is-loading image-card-cont">
        <div className="image"></div>
      </div>
    </>
  );
}
