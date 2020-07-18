import React, { useEffect, useState, Fragment } from "react";

// class ScrollToTop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       is_visible: false,
//     };
//   }

//   componentDidMount() {
//     console.log(this);
//     document.addEventListener("scroll", function (e) {
//       this.toggleVisibility();
//     });
//   }

//   toggleVisibility() {
//     if (window.pageYOffset > 300) {
//       console.log("toggle true");
//       this.setState({
//         is_visible: true,
//       });
//     } else {
//       console.log("toggle false");
//       this.setState({
//         is_visible: false,
//       });
//     }
//   }

//   scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }

//   render() {
//     const { is_visible } = this.state;
//     return (
//       <div className="scroll-to-top">
//         {is_visible && (
//           <div onClick={() => this.scrollToTop()}>
//             <button id="myBtn" title="Go to top">
//               <i className="fa fa-angle-up fa-2x"></i>
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const ScrollToTop = () => {
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []); //without this array passing here it used to run infinitely

  const [visibilityState, setVisibilityState] = useState({
    is_visible: false,
  });

  let button = null;

  if (visibilityState.is_visible) {
    button = (
      <div className="scroll-to-top">
        <div onClick={() => scrollToTop()}>
          <button id="myBtn" title="Go to top">
            <i className="fa fa-angle-up fa-2x"></i>
          </button>
        </div>
      </div>
    );
  }

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setVisibilityState({
        is_visible: true,
      });
    } else {
      setVisibilityState({
        is_visible: false,
      });
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return <Fragment>{button}</Fragment>;
  //here i have used buuton inseide fragment otherwise it gives an error message
};

export default ScrollToTop;
