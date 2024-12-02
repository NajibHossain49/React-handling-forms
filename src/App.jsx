import React from "react";
import UncontrolledFormWithTarget from "./UncontrolledFormWithTarget";
import SingleStateObject from "./SingleStateObject";
import UseReducerForm from "./UseReducerForm";
import IndividualStateForm from "./IndividualStateForm";

const App = () => {
  return (
    <div className="flex flex-wrap justify-around items-start gap-5 p-5">
      <div className="flex-1 min-w-[200px] p-4 border border-gray-300 rounded-lg bg-gray-50">
        <UncontrolledFormWithTarget />
      </div>
      <div className="flex-1 min-w-[200px] p-4 border border-gray-300 rounded-lg bg-gray-50">
        <SingleStateObject />
      </div>
      <div className="flex-1 min-w-[200px] p-4 border border-gray-300 rounded-lg bg-gray-50">
        <IndividualStateForm />
      </div>
      <div className="flex-1 min-w-[200px] p-4 border border-gray-300 rounded-lg bg-gray-50">
        <UseReducerForm />
      </div>
    </div>
  );
};

export default App;
