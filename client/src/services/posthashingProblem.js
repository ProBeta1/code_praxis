import axios from "axios";

export default {
  postIt : async (tmp) => {
    let res = await axios.post('/api/hashing',tmp);
    return res.data || [];
  }
}