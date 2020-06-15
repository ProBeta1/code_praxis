import axios from "axios";

export default {
  getAll : async () => {
    let res = await axios.get('/api/data_structures');
    return res.data || [];
  }
}