import React, { useState } from "react";
import PropTypes from "prop-types";
import useTFClassify from "../customHooks/useTFClassify";
import { useRef } from "react";

const Image = ({ src, handleRemove, id, setShowPreview }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [predict, isLoading, predictions, setPredictions] = useTFClassify();
  const imageRef = useRef();

  const handleMouseInOut = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div>
      <div className="relative">
        <img
          src={src}
          className="cursor-pointer hover:opacity-75 transition ease-in-out duration-200"
          alt="something"
          onMouseEnter={handleMouseInOut}
          onMouseLeave={handleMouseInOut}
          onClick={() => setShowPreview(src)}
          crossOrigin="anonymous"
          ref={imageRef}
        />
        {(predictions.length > 0 || isLoading) && (
          <span
            onClick={() => setPredictions([])}
            className="absolute top-0 p-2 left-0 ml-1 mr-1 mt-2 bg-gray-800 text-white"
          >
            {isLoading && <p>Fetching data...</p>}
            {predictions.map((prediction, index) => {
              return (
                <div key={index} className="flex text-sm justify-between">
                  <p>{prediction.className}</p>
                  <p>{Math.floor(prediction.probability * 100)}%</p>
                </div>
              );
            })}
          </span>
        )}
        <span
          onClick={() => handleRemove(id)}
          title="Click to remove"
          className={`${
            !isHovering ? "hidden" : "flex"
          } hover:bg-red-700 transition duration-200 ease-in-out justify-center items-center absolute text-sm bg-gray-900 top-0 right-0 mr-2 mt-2 p-2 border rounded-full text-gray-200 w-8 h-8 cursor-pointer`}
        >
          x
        </span>
        <span
          onClick={() => predict(imageRef.current)}
          title="Click to get name"
          className={`${
            !isHovering ? "hidden" : "flex"
          } transition duration-200 ease-in-out justify-center items-center absolute text-sm bg-gray-900 top-0 left-0 ml-2 mt-2 p-2 border rounded-full text-gray-200 w-8 h-8 cursor-pointer`}
        >
          {isLoading ? "⏳" : "❓"}
        </span>
      </div>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
  handleRemove: PropTypes.func,
  setShowPreview: PropTypes.func,
};

export default Image;
