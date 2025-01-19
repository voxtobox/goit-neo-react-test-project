import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export async function loadCamperList() {
  const data = await axios.get();
  return data.data;
}

export async function loadCamperById(camperId) {
  const data = await axios.get(`/${camperId}`);
  return data.data;
}
