import axios from "axios";

export default {
  postIt : async (tmp) => {
    let res = await axios.post('/api/questions',tmp);
    return res.data || [];
  }
}