import axios from "axios";
const BASEURL = "https://api.figma.com/v1/files/";
const APIKEY = "1995-66771409-d749-4817-a00e-1213c59c8c98";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY);
  }
};
