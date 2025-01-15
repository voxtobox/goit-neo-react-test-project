import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export async function loadCamperList() {
  const data = axios.get();
  return data.items;
}

export async function loadCamperById(camperId) {
  const data = axios.get(`/${camperId}`);
  return data;
}
