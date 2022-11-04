const saveTags = (arr, arrName) => {
  window.localStorage.setItem(arrName, JSON.stringify(arr));
};

const loadTags = (arrName) => {
  let newArr = JSON.parse(window.localStorage.getItem(arrName));
  return newArr;
};

const deleteTags = (arrName) => {
  localStorage.removeItem(arrName);
};

const fetchTagsArray = () => {
  return [
    "feminine",
    "tomboy",
    "retro",
    "streetwear",
    "punk",
    "classic",
    "formal",
    "gothic",
    "sporty",
    "girly"
  ];
}

export default {
  saveTags,
  loadTags,
  deleteTags,
  fetchTagsArray
};
