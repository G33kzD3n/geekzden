import React from "react";
import Button from "./button";
import { useState } from "react";

const signIn = {
  id: "signin",
  already: "No account?",
  type: "Sign in",
  header: "Welcome Back",
  message:
    "Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.",
};
const signUp = {
  id: "signup",
  already: "Already have an account?",
  type: "Sign up",
  header: "Join GEEKZ DEN",
  message:
    "Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.",
};
const Modal = ({ type }) => {
  const [presentModal, setPresentModal] = useState(type);
  // console.log(presentModal);
  var data = null;
  presentModal === "Sign in" ? (data = signIn) : (data = signUp);

  const handleModal = (id) => {
    // console.log(id);
    if (id === "signIn") {
      setPresentModal("Sign in");
      data = signIn;
    } else {
      setPresentModal("Sign up");
      data = signUp;
    }
  };
  return (
    <React.Fragment>
      <button
        id="trigger"
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={"#" + data.id}
        // onClick={handleModal(data.type)}
      >
        {type}
      </button>

      <div
        className="modal fade"
        id={data.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h5
                className="modal-title w-100 pl-4 text-center"
                id="exampleModalCenterTitle"
              >
                {data.header}
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body container text-center">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <p style={{ fontSize: 14 }}>{data.message}</p>
                </div>
              </div>
              <div className="col-lg-2"></div>
              <div style={{ paddingTop: 40 }}>
                <div className="pt-3 ">
                  <Button
                    text={`${data.type} with Facebook`}
                    icon="fa fa-facebook-official"
                    color="#3C5A99"
                  />
                </div>
                <div className="pt-3 ">
                  <Button
                    text={`${data.type} with Google`}
                    icon="fa fa-google"
                    color="#EA4335"
                  />
                </div>
                <div className="pt-3 ">
                  <Button
                    text={`${data.type} with Email`}
                    icon="fa fa-envelope-o"
                  />
                </div>
              </div>
              <div className="pt-5">
                {data.already}
                {data.id === "signin" ? (
                  <span
                    style={{ cursor: "pointer" }}
                    className="text-success"
                    onClick={() => handleModal("signUp")}
                  >
                    {" "}
                    Create one
                  </span>
                ) : (
                  <span
                    style={{ cursor: "pointer" }}
                    className="text-success"
                    onClick={() => handleModal("signIn")}
                  >
                    {" "}
                    Sign in
                  </span>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <p className="px-5 text-center" style={{ fontSize: 10 }}>
                To make Geekz Den work, we log user data and share it with
                service providers. Click “{data.type}” above to accept Geekz Den
                Terms of Service & Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
