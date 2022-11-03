const saveTags = (arr, arrName) => {
  window.localStorage.setItem(arrName, JSON.stringify(arr));
  alert("saving function called");
  // if (loadTags.length == 0) {
  //   alert("No tag selected");
  // }
};

const loadTags = (arrName) => {
  let newArr = window.localStorage.getItem(arrName);
  return newArr;
};

const deleteTags = (arrName) => {
  localStorage.removeItem(arrName);
};

const fetchTagsArray = () => {
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

// const checkIfSaved = (arrName) => {
//   let newObj = window.localStorage.getItem(`${arrName}`);
// };

export default {
  saveTags,
  loadTags,
  deleteTags,
  fetchTagsArray
};
