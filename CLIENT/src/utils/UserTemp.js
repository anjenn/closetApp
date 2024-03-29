// This file is used to save user data to local storage
const saveUserData = (obj, objName) => { //saved with obj name "currUser"
  window.localStorage.setItem(objName, JSON.stringify(obj));
  // console.log(`util function result: ${loadUserData(objName)}`);
};
const loadUserData = (objName) => {
  if(!checkIfSaved(objName)){
    return {}
  }
  else{
    let newObj = JSON.parse(window.localStorage.getItem(objName));
    //console.log(`util function result: ${JSON.stringify(newObj)}`);
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
