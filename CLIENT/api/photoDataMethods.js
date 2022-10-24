import http from "../http-common";

// warning!! when using query parameter in the url there should be no whitespace
// when dealing with 'id' within custom functions in api, stick to '_id'

class photoDataMethods {
    createPhoto(data, postID) { // create a photo
        return http.post(`/PostEditor/${postID}`, data);
    }
    deletePhoto(postID) { // delete a photo via PostID
        return http.delete(`/PostEditor/${postID}`);
    }
    updatePhoto(data, postID) { // update a photo via PostID
        return http.put(`/PostEditor/${postID}`, data);
    }
    getPhotos(postID) { // load a photo via PostID
        return http.get(`/PostEditor/${postID}`);
    }
}
export default new photoDataMethods();