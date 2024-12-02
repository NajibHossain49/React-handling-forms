// eslint-disable-next-line no-unused-vars
import React from "react";
import UncontrolledFormWithTarget from "./UncontrolledFormWithTarget";
import SingleStateObject from "./SingleStateObject";
import UseReducerForm from "./UseReducerForm";
import IndividualStateForm from "./IndividualStateForm";

const App = () => {
  return (
    <div>
      {/* <UncontrolledFormWithTarget /> */}
      {/* <SingleStateObject /> */}
      <UseReducerForm />
      <IndividualStateForm />
    </div>
  );
};

export default App;
