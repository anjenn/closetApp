const saveTags = (obj) => {
  window.localStorage.setItem("myObj", JSON.stringify(obj));
};

const loadTags = () => {
  let newObj = window.localStorage.getItem("myObj");
  console.log(newObj);
  return newObj;
};

export default {
  saveTags,
  loadTags,
};
