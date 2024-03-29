// const API_ROOT = "http://localhost:3000";
const API_ROOT = "https://whispering-beach-85385.herokuapp.com";

const login = async (config) => {
  const response = await fetch(`${API_ROOT}/login`, config);
  return response.json();
};

const signUp = (config) => {
  return fetch(`${API_ROOT}/user/new`, config).then((res) => res.json());
};

const getProducts = () => {
  return fetch(`${API_ROOT}/products`, { credentials: "include" });
};

const getRecipes = async () => {
  const response = await fetch(`${API_ROOT}/recipes`);
  return response.json();
};

const newRecipe = async (config) => {
  const response = await fetch(`${API_ROOT}/recipes/new`, config);
  return response.json();
};

const editRecipe = async (id, config) => {
  const response = await fetch(`${API_ROOT}/recipes/${id}/edit`, config);
  return response.json();
};
const deleteRecipe = async (id, config) => {
  const response = await fetch(`${API_ROOT}/recipes/${id}/delete`, config);
  return response.json();
};

const autoLogin = () => {
  return fetch(`${API_ROOT}/autologin`, {
    credentials: "include",
  }).then((res) => res.json());
};

const passwordReset = async (config) => {
  const response = await fetch(`${API_ROOT}/forgot_password`, config);
  return response.json();
};

const logOut = (config) => {
  return fetch(`${API_ROOT}/signout`, config);
};

const getCS = (config) => {
  return fetch(`${API_ROOT}/secret`, config);
};

const newContact = (config) => {
  return fetch(`${API_ROOT}/new_contact`, config).then((res) => res.json());
};

const addTagToContact = (config) => {
  return fetch(`${API_ROOT}/tag`, config).then((res) => res.json());
};

const addFeedback = (config) => {
  return fetch(`${API_ROOT}/feedback`, config).then((res) => res.json());
};
const addCollaborate = (config) => {
  return fetch(`${API_ROOT}/collaborate`, config).then((res) => res.json());
};

export default {
  API_ROOT: API_ROOT,
  activeCampaign: {
    newContact: newContact,
    addTagToContact: addTagToContact,
  },
  auth: {
    login: login,
    autoLogin: autoLogin,
    logOut: logOut,
    passwordReset: passwordReset,
  },
  user: {
    signUp: signUp,
  },
  checkout: {
    getCS: getCS,
  },
  product: {
    getProducts: getProducts,
  },
  recipes: {
    getRecipes: getRecipes,
    newRecipe: newRecipe,
    deleteRecipe: deleteRecipe,
    editRecipe: editRecipe,
  },
  collaborate: {
    addCollaborate: addCollaborate,
  },
  feedback: {
    addFeedback: addFeedback,
  },
};
