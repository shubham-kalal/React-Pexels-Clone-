import React from "react";
import Button from "react-bootstrap/Button";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ image, loaderprops, setSavedprops, savedprops }) => {



  
  const saveImage = (img) => {
    let flag = true;
    if (savedprops != null && savedprops.length > 0) {
      for (let i = 0; i < savedprops.length; i++) {
        if (savedprops[i].id == img.id) {
          flag = false;
          //react toastify
          // console.log("img already saved");
          toast.success("Image already Saved", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }

    if (flag) {
      setSavedprops([...savedprops, img]); // Corrected: image changed to img
      // console.log("image saved");
      toast.success(" image Saved", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };


  return (
    <div>
      <ToastContainer />
      <div className="container-fluid">
        {loaderprops ? (
          <Loader />
        ) : (
          <div className="flex">
            {image.map((images) => (
              <div
                key={images.id}
                className="items"
                onClick={() => saveImage(images)}
              >
                <img src={images?.src?.medium} alt={images?.photographer} />
              </div>
            ))}
          </div>
        )}

        <div className="bottom-button text-center my-5">
          {image.length != 0 && (
            <Button href="#top" variant="outline-light" size="lg">
              Back to top
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
