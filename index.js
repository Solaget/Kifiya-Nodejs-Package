import axios from "axios";

export class fakeApi {
  constructor(secertKey) {
    this.secertKey = secertKey;
  }

  async getFakeData({ size }) {
    const response = await axios.get("https://fakestoreapi.com/users");
    let data = await response.data;

    if (size) {
      data.length = size;
    }

    return { data, yourSecretKey: this.secertKey };
  }
}
