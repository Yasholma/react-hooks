import React, { useState } from "react";
import useUnsplash from "../customHooks/useUnsplash";
import useDebounce from "../customHooks/useDebounce";
import Image from "./Image";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";

const ImageContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages, errors, isLoading] = useUnsplash(page, searchTerm);
  const debounce = useDebounce();
  const [showPreview, setShowPreview] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  };

  const handleRemove = (id) => {
    const filteredImages = images.filter((img) => img.id !== id);
    setImages(filteredImages);
  };

  return (
    <React.Fragment>
      {errors.length ? (
        <h2 className="text-red-700 m-auto h-full w-full text-4xl text-center fixed left-0 flex justify-center items-center">
          Network: {errors[0]}
        </h2>
      ) : (
        <React.Fragment>
          <h2 className="text-3xl text-center flex items-center justify-between">
            Number of Images: {images.length}
          </h2>
          <div className="input-field flex ml-2 my-3 items-center justify-center">
            <input
              type="text"
              className="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Search Image"
              onChange={handleInputChange}
              id="searchTerm"
              name="searchTerm"
            />
          </div>

          <AnimateSharedLayout>
            <InfiniteScroll
              dataLength={images.length}
              next={() => setPage(page + 1)}
              hasMore={true}
              className="grid grid-cols-5 gap-2"
            >
              {images.map(({ urls, id }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId={urls.regular}
                >
                  <Image
                    src={urls.regular}
                    id={id}
                    handleRemove={handleRemove}
                    setShowPreview={setShowPreview}
                  />
                </motion.div>
              ))}
            </InfiniteScroll>

            <AnimatePresence>
              {!!showPreview && (
                <motion.section
                  layoutId={showPreview}
                  exit={{
                    opacity: 0,
                    rotate: 360,
                    transition: { duration: 1 },
                  }}
                  className="z-50 h-screen flex justify-center items-center fixed top-0 left-0 right-0 bottom-0"
                  onClick={() => setShowPreview("")}
                >
                  <div className="modal border rounded bg-white">
                    <img
                      src={showPreview}
                      width={300}
                      height="auto"
                      alt="something"
                    />
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </React.Fragment>
      )}
      {<Loading isLoading={isLoading} />}
    </React.Fragment>
  );
};

export default ImageContainer;
