import axios from "axios";

export default {
  postIt : async (tmp) => {
    let res = await axios.post('/api/strings',tmp);
    return res.data || [];
  }
}