import axios from "axios";

export default {
  postIt : async (tmp) => {
    let res = await axios.post('/api/greedy',tmp);
    return res.data || [];
  }
}