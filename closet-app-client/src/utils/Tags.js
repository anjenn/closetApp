const saveTags = (obj) => {
  window.localStorage.setItem("myObj", JSON.stringify(obj));
  alert("saving function called");
  // if (loadTags.length == 0) {
  //   alert("No tag selected");
  // }
  // use lodash library to check whether the object is empty or not
  // or use the checkIfSaved function given below
};

const loadTags = () => {
  let newObj = window.localStorage.getItem("myObj");
  console.log(newObj);
  return newObj;
};

// const checkIfSaved = (objName) => {
//   let newObj = window.localStorage.getItem(`${objName}`);
// };

export default {
  saveTags,
  loadTags,
};
