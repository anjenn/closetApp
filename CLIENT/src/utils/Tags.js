const saveTags = (obj, objName) => {
  window.localStorage.setItem(objName, JSON.stringify(obj));
  alert("saving function called");
  // if (loadTags.length == 0) {
  //   alert("No tag selected");
  // }
  // use lodash library to check whether the object is empty or not
  // or use the checkIfSaved function given below
};

const loadTags = (objName) => {
  let newObj = window.localStorage.getItem(objName);
  //returned as object format
  return newObj;
};

const deleteTags = (objName) => {
  localStorage.removeItem(objName);
};

const fetchTags = () => {
  return [
    "feminine",
    "preppy",
    "girly",
    "vintage",
    "bohemian",
    "chic",
    "sexy",
    "casual",
    "formal",
    "punk",
    "rocker",
    "tomboy",
    "gothic",
    "sporty",
    "ethnic"
  ];
}

// const checkIfSaved = (objName) => {
//   let newObj = window.localStorage.getItem(`${objName}`);
// };

export default {
  saveTags,
  loadTags,
  fetchTags
};
