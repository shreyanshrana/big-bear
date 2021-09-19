import axios from "axios"

const API_URL = "https://demo.bigbeartech.in/sample-api";

const callApi = async () => {
    return ((await axios.get(API_URL)).data);
}

export default callApi;