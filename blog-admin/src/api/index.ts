import Axios from "axios";
import Cookies from "js-cookie";

export const axios = Axios.create({ baseURL: "http://localhost:3000/" });

const token = Cookies.get("authToken");

export const authJsonHeader = (file?: boolean) => ({
  "Content-type": "application/json",
  Accept: file ? "multipart/form-data" : "application/json",
  Authorization: `Bearer ${token}`,
});

export default function transformFormData<T>(payload: T) {
  const formData = new FormData();

  for (const property in payload) {
    formData.append(property, payload[property] as string | Blob);
  }

  return formData;
}
