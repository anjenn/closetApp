// Stores the data for a session

const savePostData = (obj, objName) => { //saved with obj name "currUser"
  window.localStorage.setItem(objName, JSON.stringify(obj));
  //console.log(loadPostData(objName));
};
const loadPostData = (objName) => {
  let newObj = JSON.parse(window.localStorage.getItem(objName));
  return newObj;
};
const deletePostData = (objName) => {
  localStorage.removeItem(objName);
}
const checkIfSaved = (objName) => {
  let newObj = window.localStorage.getItem(`${objName}`);
  let status = null;
  newObj ? status = true : status = false;
  return status
};
export default {
  savePostData,
  loadPostData,
  deletePostData,
  checkIfSaved
};
