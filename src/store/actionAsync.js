import { loginService } from "../services";
import { saveUser } from "./authReducer";

export const loginAction = (loginCredentials) => {
  return async (dispatch) => {
    console.log({ loginCredentials });
    try {
      const { data } = await loginService;
      console.log({ data });
      loginCredentials;
      dispatch(saveUser(data));
    } catch (error) {
      console.log("error::", error);
      const errorMessage = error.response.data.message;
      console.log({ errorMessage });
    }
  };
};
