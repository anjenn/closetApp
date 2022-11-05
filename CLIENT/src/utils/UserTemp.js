// Stores the data for a session

const saveUserData = (obj, objName) => { //saved with obj name "currUser"
  window.localStorage.setItem(objName, JSON.stringify(obj));
  alert("saving function called");
  console.log(loadUserData(objName));
};
const loadUserData = (objName) => {
  if(!checkIfSaved(objName)){
    return null
  }
  else{
    let newObj = JSON.parse(window.localStorage.getItem(objName));
    return newObj;
  }
};
const deleteUserData = (objName) => {
  localStorage.removeItem(objName);
}
const checkIfSaved = (objName) => {
  let newObj = window.localStorage.getItem(`${objName}`);
  let status = null;
  newObj ? status = true : status = false;
  return status
};
export default {
  saveUserData,
  loadUserData,
  deleteUserData,
  checkIfSaved
};
