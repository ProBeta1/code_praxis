import axios from "axios";

// deprecated , using firebase to store user details instead

export default {
  postIt : async (tmp) => {
    let res = await axios.post('/api/users',tmp);
    return res.data || [];
  }
}