import React, { useEffect } from "react";

import "../../../Styles/CarouselPage.scss";

import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { getCarouselItems } from "../../../Store/Actions/CarouselAction";

import { connect } from "react-redux";
import CarouselItem from "./CarouselItem";

function CarouselPage({ handlePageChange, getCarouselItems, carouselItems }) {
  useEffect(() => {
    getCarouselItems();
  }, [getCarouselItems]);

  const items = carouselItems.Search;

  return (
    <div
      style={{ marginBottom: "3rem", marginTop: "2rem" }}
      className="carouselPage"
    >
      <div className="carouselPage__title">
        <h2>Popular Movies</h2>
      </div>

      <div className="carouselPage__carousel">
        <Carousel
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {items !== undefined ? (
            items.map((item) => (
              <CarouselItem
                handlePageChange={handlePageChange}
                key={item.imdbID}
                info={item}
              />
            ))
          ) : (
            <h1>Not Found Carousel</h1>
          )}
        </Carousel>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    carouselItems: state.CarouselReducer.carouselItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCarouselItems: () => dispatch(getCarouselItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage);
