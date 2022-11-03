const saveTags = (arr, arrName) => {
  window.localStorage.setItem(arrName, JSON.stringify(arr));
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

export default {
  saveTags,
  loadTags,
  deleteTags,
  fetchTagsArray
};
