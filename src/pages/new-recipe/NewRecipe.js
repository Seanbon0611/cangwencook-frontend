import React, { useState } from "react";
import RecipeFormDetails from "../../components/recipe-form-details/RecipeFormDetails";
import RecipeFormIngredients from "../../components/recipe-form-ingredients/RecipeFormIngredients";
import RecipeFormInstructions from "../../components/recipe-form-instructions/RecipeFormInstructions";
import RecipeConfirmation from "../../components/recipe-confirmation/RecipeConfirmation";
import "./new-recipe.styles.scss";

const NewRecipePage = () => {
  const [step, setStep] = useState(1);
  const ingredientAttributes = { name: "", measurement: "" };
  const instructionAttributes = { step: "" };
  const [ingredients, setIngredients] = useState([{ ...ingredientAttributes }]);
  const [instructions, setInstructions] = useState([
    { ...instructionAttributes },
  ]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    calories: null,
    netCarbs: null,
    fat: null,
    protein: null,
    keto: null,
    paleo: null,
    lowCalorie: null,
    dairyFree: null,
    glutenFree: null,
    quick: null,
  });
  const addIngredients = () => {
    setIngredients([...ingredients, { ...ingredientAttributes }]);
  };

  const addInstructions = () => {
    setInstructions([...instructions, { ...instructionAttributes }]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientsChange = (e) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[e.target.dataset.index][e.target.className] =
      e.target.value;
    setIngredients(updatedIngredients);
  };

  const handleInstructionsChange = (e) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[e.target.dataset.index][e.target.className] =
      e.target.value;
    setInstructions(updatedInstructions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  const next = () => {
    setStep((s) => s + 1);
  };

  const prev = () => {
    setStep((s) => s - 1);
  };
  console.log(instructions);
  switch (step) {
    case 1:
      return (
        <RecipeFormDetails
          next={next}
          prev={prev}
          formData={formData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <RecipeFormIngredients
          next={next}
          prev={prev}
          ingredients={ingredients}
          handleIngredientsChange={handleIngredientsChange}
          addIngredients={addIngredients}
        />
      );
    case 3:
      return (
        <RecipeFormInstructions
          next={next}
          prev={prev}
          instructions={instructions}
          handleInstructionsChange={handleInstructionsChange}
          addInstructions={addInstructions}
        />
      );
    case 4:
      return (
        <RecipeConfirmation
          instructions={instructions}
          ingredients={ingredients}
          formData={formData}
          handleSubmit={handleSubmit}
          prev={prev}
        />
      );
    default:
      return null;
  }
};

export default NewRecipePage;
