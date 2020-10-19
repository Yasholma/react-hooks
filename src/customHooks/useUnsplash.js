import Axios from "axios";
import { useEffect, useState } from "react";

const api = process.env.REACT_APP_UNSPLASH_API;
const sKey = process.env.REACT_APP_UNSPLASH_KEY;

const useUnsplash = (page = 1, searchTerm) => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearch = () => {
    const url = `${api}/search/photos/?client_id=${sKey}&page=${page}&query=${searchTerm}`;
    setIsLoading(true);
    Axios.get(`${url}`)
      .then((res) => {
        const data = res.data;
        if (page > 1) setImages([...images, ...data.results]);
        else setImages([...data.results]);

        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setIsLoading(false);
      });
  };

  const fetchRandom = () => {
    const url = `${api}/photos/?client_id=${sKey}&page=${page}`;
    setIsLoading(true);
    Axios.get(`${url}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm) fetchSearch();
    else fetchRandom();

    return () => {
      console.log("Cleaning up");
    };
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
};

export default useUnsplash;
