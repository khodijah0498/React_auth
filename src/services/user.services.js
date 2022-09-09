import axios from "axios";
import { baseUrl } from "../config";

const signupService = (userData) => axios.post(`${baseUrl}/signup`, userData);

const loginService = (loginCredentials) =>
  axios.post(`${baseUrl}/login`, loginCredentials);

export { signupService, loginService };
