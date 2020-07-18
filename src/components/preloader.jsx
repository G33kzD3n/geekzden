import React, { useRef, useEffect } from "react";

const Preloader = () => {
  const stopLoader = useRef(null);

  useEffect(() => {
    const remove = setTimeout(() => {
      stopLoader.current.classList.remove("preloader-visible");
      stopLoader.current.classList.add("preloader-hidden");
    }, 700);
    return () => clearTimeout(remove);
  }, []);

  /***************************************************************************** */
  //the below code was used in a class based component, new code performs same work as the previous
  // componentDidMount() {
  //   setTimeout(() => {
  //     document.querySelector("#preloader").classList.remove("preloader-visible");
  //     document.querySelector("#preloader").classList.add("preloader-hidden");
  //   }, 700);
  // }

  return (
    <div ref={stopLoader} id="preloader" className={"preloader-visible"}>
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
