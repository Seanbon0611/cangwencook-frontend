const API_ROOT = "http://localhost:3000";

const login = async (config) => {
  const response = await fetch(`${API_ROOT}/login`, config);
  return response.json();
};

const signUp = async (config) => {
  const response = await fetch(`${API_ROOT}/user/new`, config);
  const json = await response.json();
  return json;
};

const getProducts = () => {
  return fetch(`${API_ROOT}/products`, { credentials: "include" });
};

const recipesPlaylist = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLfjCPTMx3kCppMEQ-OIMWLKvpOrXrDX-b&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
};

const getVideos = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UU7s6USfYN4-_Wk6roCXtdjg&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=20`
  );
};


const logOut = (config) => {
  return fetch(`${API_ROOT}/signout`, config);
};

export default {
  API_ROOT: API_ROOT,
  auth: {
    login: login,
    logOut: logOut,
  },
  user: {
    signUp: signUp,
  },
  product: {
    getProducts: getProducts,
  },
  youtube: {
    recipesPlaylist: recipesPlaylist,
    getVideos: getVideos,
  },
};
