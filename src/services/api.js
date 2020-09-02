// const API_ROOT = "http://localhost:3000";
const API_ROOT = "https://whispering-beach-85385.herokuapp.com";

const login = async (config) => {
  const response = await fetch(`${API_ROOT}/login`, config);
  return response.json();
};

const signUp = async (config) => {
  const response = await fetch(`${API_ROOT}/user/new`, config);
  return response.json();
};

const getProducts = () => {
  return fetch(`${API_ROOT}/products`, { credentials: "include" });
};

const recipesPlaylist = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLfjCPTMx3kCppMEQ-OIMWLKvpOrXrDX-b&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  //https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UC7s6USfYN4-_Wk6roCXtdjg&part=snippet,id&order=date&maxResults=3
};

const getVideos = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UU7s6USfYN4-_Wk6roCXtdjg&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=20`
  );
};
const getRecipes = async () => {
  const response = await fetch(`${API_ROOT}/recipes`);
  return response.json();
};

const newRecipe = async (config) => {
  const response = await fetch(`${API_ROOT}/recipes/new`, config);
  return response.json();
};

const deleteRecipe = async (id, config) => {
  const response = await fetch(`${API_ROOT}/recipes/${id}/delete`, config);
  return response.json();
};

const autoLogin = async () => {
  const response = await fetch(`${API_ROOT}/autologin`, {
    credentials: "include",
  });
  return response;
};

const logOut = (config) => {
  return fetch(`${API_ROOT}/signout`, config);
};

const getCS = (config) => {
  return fetch(`${API_ROOT}/secret`, config);
};

export default {
  API_ROOT: API_ROOT,
  auth: {
    login: login,
    autoLogin: autoLogin,
    logOut: logOut,
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
  youtube: {
    recipesPlaylist: recipesPlaylist,
    getVideos: getVideos,
  },
  recipes: {
    getRecipes: getRecipes,
    newRecipe: newRecipe,
    deleteRecipe: deleteRecipe,
  },
};
