import axios from "axios";

export default {
  postIt : async (tmp) => {
    let res = await axios.post('/api/data_structures',tmp);
    return res.data || [];
  }
}