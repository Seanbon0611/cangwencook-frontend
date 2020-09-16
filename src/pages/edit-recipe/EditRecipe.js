import React, { useState } from "react";
import RecipeFormDetails from "../../components/recipe-form-details/RecipeFormDetails";
import RecipeFormIngredients from "../../components/recipe-form-ingredients/RecipeFormIngredients";
import RecipeFormInstructions from "../../components/recipe-form-instructions/RecipeFormInstructions";
import RecipeConfirmation from "../../components/recipe-confirmation/RecipeConfirmation";
import api from "../../services/api";
import "./edit-recipe.styles.scss";

const EditRecipe = ({ recipe }) => {
  const { attributes } = recipe;
  const [step, setStep] = useState(1);
  const ingredientAttributes = { name: "", measurement: "" };
  const instructionAttributes = { step: "" };
  const [ingredients, setIngredients] = useState(attributes.ingredients);
  const [instructions, setInstructions] = useState(attributes.instructions);
  const [formData, setFormData] = useState({
    title: attributes.title,
    description: attributes.description,
    image: attributes.image,
    calories: attributes.calories,
    netCarbs: attributes.netCarbs,
    fat: attributes.fat,
    protein: attributes.protein,
    keto: attributes.keto,
    paleo: attributes.paleo,
    lowCalorie: attributes.lowCalorie,
    dairyFree: attributes.dairyFree,
    glutenFree: attributes.glutenFree,
    quick: attributes.quick,
    ingredients: attributes.ingredients,
    instructions: attributes.instructions,
  });
  const addIngredients = () => {
    setIngredients([...ingredients, { ...ingredientAttributes }]);
  };

  const addInstructions = () => {
    setInstructions([...instructions, { ...instructionAttributes }]);
  };
  const handleChange = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
    const data = JSON.stringify({
      title: formData.title,
      description: formData.description,
      image: formData.image,
      calories: formData.calories,
      netCarbs: formData.netCarbs,
      fat: formData.fat,
      protein: formData.protein,
      keto: formData.keto,
      paleo: formData.paleo,
      lowCalorie: formData.lowCalorie,
      dairyFree: formData.dairyFree,
      glutenFree: formData.glutenFree,
      quick: formData.quick,
      instructions: instructions,
      ingredients: ingredients,
    });
    const config = {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data,
    };

    api.recipes.editRecipe(config).then((json) => console.log(json));
  };

  const next = () => {
    setStep((s) => s + 1);
  };

  const prev = () => {
    setStep((s) => s - 1);
  };
  switch (step) {
    case 1:
      return (
        <RecipeFormDetails
          recipe={recipe}
          next={next}
          prev={prev}
          formData={formData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <RecipeFormIngredients
          recipe={recipe}
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
          recipe={recipe}
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
          recipe={recipe}
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

export default EditRecipe;
