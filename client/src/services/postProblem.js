import axios from "axios";

export default {
  postIt : async () => {
    let res = await axios.post('/api/problem');
    return res.data || [];
  }
}