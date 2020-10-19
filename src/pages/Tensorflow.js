import React, { useRef } from "react";
import useTFClassify from "../customHooks/useTFClassify";

const Tensorflow = () => {
  const imageRef = useRef();
  const [predict, isLoading, predictions] = useTFClassify();

  const predictHanlder = () => {
    const img = imageRef.current;
    predict(img);
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="text-center">
        <h1 className="text-center">Tensorflow Example</h1>
        <img
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3NDc4Nn0"
          ref={imageRef}
          alt="Tensorflow"
          width={400}
          height="auto"
          crossOrigin="anonymous"
          className="my-3"
        />
        <div className="text-center my-5">
          {predictions.length > 0 &&
            predictions.map((prediction, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <p>{prediction.className}</p>
                  <p>{Math.floor(prediction.probability * 100)}%</p>
                </div>
              );
            })}
        </div>
        <button
          onClick={() => predictHanlder()}
          className="p-2 rounded bg-blue-500 text-white"
        >
          {isLoading ? "⌛" : "Predict Result"}
        </button>
      </div>
    </div>
  );
};

export default Tensorflow;
