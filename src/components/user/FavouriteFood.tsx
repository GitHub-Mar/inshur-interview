import React from "react";
import Carousel from "react-material-ui-carousel";

export const FavouriteFood = ({}) => {
  const imageHeight: number = 100;
  const imageWidth: number = 100;
  return (
    <>
      <h3>Favourite food(s)</h3>
      <Carousel>
        <img src="assets/laksa.png" height={imageHeight} width={imageWidth} />
        <img src="assets/sushi.png" height={imageHeight} width={imageWidth} />
        <img src="assets/curry.png" height={imageHeight} width={imageWidth} />
        <img src="assets/tacos.png" height={imageHeight} width={imageWidth} />
        <img
          src="assets/SausageNMash.png"
          height={imageHeight}
          width={imageWidth}
        />
      </Carousel>
    </>
  );
};