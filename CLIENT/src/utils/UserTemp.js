// Stores the data for a session

const saveUserData = (obj, objName) => {
    window.localStorage.setItem(objName, JSON.stringify(obj));
    alert("saving function called");
    // if (loadTags.length == 0) {
    //   alert("No tag selected");
    // }
    // use lodash library to check whether the object is empty or not
    // or use the checkIfSaved function given below
  };
  
  const loadUserData = (objName) => {
    let newObj = window.localStorage.getItem(objName);
    //returned as array format
    return newObj;
  };
  
  const deleteUserData = (objName) => {
    localStorage.removeItem(objName);
  }
  
  // const checkIfSaved = (objName) => {
  //   let newObj = window.localStorage.getItem(`${objName}`);
  // };
  
  export default {
    saveUserData,
    loadUserData,
    deleteUserData
  };
  