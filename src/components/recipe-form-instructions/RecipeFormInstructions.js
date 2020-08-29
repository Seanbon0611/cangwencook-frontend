import React, { Fragment } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
const RecipeFormInstructions = ({
  next,
  prev,
  handleInstructionsChange,
  instructions,
  addInstructions,
}) => {
  return (
    <div>
      <input type="button" onClick={addInstructions} value="Add Instruction" />
      {instructions.map((step, index) => {
        const stepId = `${step}~${index}`;
        return (
          <Fragment key={`step~${index}`}>
            <FormInput
              type="text"
              data-index={index}
              name={stepId}
              className="step"
              onChange={handleInstructionsChange}
              defaultValue={instructions[index].step}
              label={`Step #${index + 1}:`}
              textarea
              placeholder="Give detailed instructions"
            />
          </Fragment>
        );
      })}
      <CustomButton onClick={prev}>Back</CustomButton>
      <CustomButton onClick={next}>Next</CustomButton>
    </div>
  );
};

export default RecipeFormInstructions;
