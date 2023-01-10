const saveTags = (arr, arrName) => {
  //console.log(arr);
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
    "tomboy",
    "retro",
    "streetwear",
    "punk",
    "casual",
    "y2k",
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
