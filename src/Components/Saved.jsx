import React from "react";
import Button from "react-bootstrap/Button";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

const Saved = ({ savedprops, loaderprops }) => {
  const location = useLocation();
  return (
    <>
      <div className="container-fluid">
        {loaderprops | (savedprops.length == 0) ? (
          <Loader />
        ) : (
          <div className="flex">
            {savedprops.map((images) => (
              <div key={images.id} className="items">
                <img src={images.src.medium} alt={images.photographer} />
              </div>
            ))}
          </div>
        )}

        <div className="bottom-button text-center my-5">
          {savedprops.length >= 6 && (
            <Button href="#top" variant="outline-light" size="lg">
              Back to top
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Saved;
