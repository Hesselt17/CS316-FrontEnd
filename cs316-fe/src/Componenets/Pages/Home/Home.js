import React, { useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";

import image8 from "../../../Assets/TrinityHall.JPG";

//src="https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/images%2FBlackwellDouble.JPG?alt=media&token=d53dfcb1-686d-4ec1-a791-4ca3785b3713"
//"https://momento360.com/e/u/15444867432c4a3797c398608c02bea8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium>"
const Home = () => {
  const photoRef = React.createRef(); // will only be called when the src prop gets updated

  useEffect(() => {
    const photoViewer = new Viewer({
      container: "photoViewer", //photoRef.current,
      panorama: image8,
      navbar: ["fullscreen"],
      //"https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/images%2FBlackwellDouble.JPG?alt=media&token=d53dfcb1-686d-4ec1-a791-4ca3785b3713",
    });

    // unmount component instructions

    return () => {
      photoViewer.destroy();
    };
  }, [image8]);
  return (
    <div>
      <div>Home</div>
      <div
        style={{
          overflow: "auto",
        }}
      >
        {/*<iframe
          title="stock"
          width="50%"
          height="500"
          frameBorder="0"
          src="https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/images%2FBlackwellDouble.JPG?alt=media&token=d53dfcb1-686d-4ec1-a791-4ca3785b3713"
        />*/}
        <div id="photoViewer" />
        {/*<iframe
          width="50%"
          height="500"
          src="https://firebasestorage.googleapis.com/v0/b/designduke-94c81.appspot.com/o/images%2FBlackwellDouble.JPG?alt=media&token=d53dfcb1-686d-4ec1-a791-4ca3785b3713"
        />*/}
      </div>
    </div>
  );
};

export default Home;
