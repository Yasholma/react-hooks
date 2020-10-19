import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { useState } from "react";

const useTFClassify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  function predict(img) {
    setIsLoading(true);
    mobilenet.load().then((model) => {
      model.classify(img).then((predictions) => {
        setIsLoading(false);
        setPredictions(predictions);
      });
    });
  }

  return [predict, isLoading, predictions, setPredictions];
};

export default useTFClassify;
