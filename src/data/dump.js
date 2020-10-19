/** ImageContainer Component */

// useEffect(() => {
//   imagesLengthRef.current = imagesLengthRef.current - 1;
// });

// const [name, setName] = useState("Cyber");
// useEffect(() => {
//   setName("Holma");
// });

// Avoid flickering - non block -> synchronously
// useLayoutEffect(() => {
//   setName("Holma");
// });

// const imagesLengthRef = useRef(images.length || 0);
{
  /* {imagesLengthRef.current} */
}
{
  /* <h2 className="text-4xl text-center my-2 border-b">{name}</h2> */
}

// useEffect(() => {
//   if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
//     setPage(page + 1);
//   }
// }, [scrollPosition]);

{
  /* <div className="flex justify-center my-4">
<button
  onClick={() => setPage(page + 1)}
  className="border text-sm border-gray-800 rounded-full p-2 bg-blue-800 text-white"
>
  Load more
</button>
</div> */
}

// useEffect(() => {
//   imageUrlRef.current.focus();
// }, []);

{
  /* <input
              type="text"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Enter image link"
              value={imageUrl}
              onChange={handleInputChange}
              id="imageurl"
              name="imageurl"
              ref={imageUrlRef}
            />
            <button
              onClick={addImage}
              className={`my-4 mx-2  border p-2  text-white transition ease-in-out duration:500 rounded justify-self-auto ${
                !imageUrl ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-500"
              }`}
            >
              Add Image
            </button> */
}

// const addImage = () => {
//   if (!imageUrl) {
//     alert("Please add an image");
//     return;
//   }

//   setImages([imageUrl, ...images]);

//   setImageUrl("");
// };

/** App Component */

// const mountRef = useRef(false);

// componentDidMount
// useEffect(() => {
//   // console.log("App Mounted");
// }, []);

// componentDidUpdate
// useEffect(() => {
//   // if (mountRef.current) console.log("App Updated");
//   // else mountRef.current = true;
// }, [isVisible]);

// const toggleIsVisible = () => {
//   setIsVisible(!isVisible);
// };
{
  /* <button
            onClick={() => toggleIsVisible()}
            className="my-4 border-blue-500 border p-2 text-blue-800 hover:bg-blue-500 hover:text-white transition ease-in-out duration:500 rounded justify-self-auto"
          >
            Toggle Image
          </button> */
}
// {isVisible && }

// const [isVisible, setIsVisible] = useState(false);
