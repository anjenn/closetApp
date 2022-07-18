const saveTags = (obj) => {
  window.localStorage.setItem("myObj", JSON.stringify(obj));
  // if (loadTags.length == 0) {
  //   alert("No tag selected");
  // }
};

const loadTags = () => {
  let newObj = window.localStorage.getItem("myObj");
  // console.log(newObj);
  return newObj;
};

export default {
  saveTags,
  loadTags,
};
