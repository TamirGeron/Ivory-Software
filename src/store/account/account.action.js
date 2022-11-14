import { orgazesService } from "../../services/organization.service";

export function loadAccounts(userId) {
  return async (dispatch) => {
    try {
      const accounts = await orgazesService.queryAccount(userId);
      dispatch({ type: "SET_ACCOUNTS", accounts });
    } catch (err) {
      console.log(err);
    }
  };
}
