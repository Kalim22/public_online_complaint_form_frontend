import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { gridImages } from "../../assets/data/ImageList";

function GridPhoto() {
  return (
    <>
      <div className="grid-wrapper">
        <div>
          <LazyLoadImage src={gridImages[2]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[4]} alt="" />
        </div>
        <div className="tall">
          <LazyLoadImage src={gridImages[12]} alt="" />
        </div>
        <div className="wide">
          <LazyLoadImage src={gridImages[13]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[22]} alt="" />
        </div>
        <div className="tall">
          <LazyLoadImage src={gridImages[17]} alt="" />
        </div>
        <div className="big">
          <LazyLoadImage src={gridImages[9]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[3]} alt="" />
        </div>
        <div className="wide">
          <LazyLoadImage src={gridImages[11]} alt="" />
        </div>
        <div className="big">
          <LazyLoadImage src={gridImages[19]} alt="" />
        </div>
        <div className="tall">
          <LazyLoadImage src={gridImages[21]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[14]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[30]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[25]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[18]} alt="" />
        </div>
        <div className="wide">
          <LazyLoadImage src={gridImages[7]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[15]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[31]} alt="" />
        </div>
        <div className="wide">
          <LazyLoadImage src={gridImages[26]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[1]} alt="" />
        </div>
        <div className="wide">
          <LazyLoadImage src={gridImages[5]} alt="" />
        </div>
        <div className="big">
          <LazyLoadImage src={gridImages[23]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[10]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[15]} alt="" />
        </div>
        <div className="big">
          <LazyLoadImage src={gridImages[16]} alt="" />
        </div>
        <div className="tall">
          <LazyLoadImage src={gridImages[20]} alt="" />
        </div>
        <div>
          <LazyLoadImage src={gridImages[28]} alt="" />
        </div>
        <div>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1493306454986-c8877a09cbeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1381&amp;q=80"
            alt=""
          />
        </div>
        <div className="wide">
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default GridPhoto;
