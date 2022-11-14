import { orgazesService } from "../../services/organization.service";

export function loadOrgazes(filterBy) {
  return async (dispatch) => {
    try {
      const orgazes = await orgazesService.queryOrgaz(filterBy);
      dispatch({ type: "SET_ORGAZES", orgazes });
    } catch (err) {
      console.log(err);
    }
  };
}

export function removeOrgaz(oldOrgazes, orgazIdx) {
  return async (dispatch) => {
    try {
      dispatch({ type: "REMOVE_ORGAZ", orgazIdx });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addOrgaz(orgaz) {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_ORGAZ", orgaz });
    } catch (err) {
      console.log(err);
    }
  };
}

export function editOrgaz(orgaz) {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_ORGAZ", orgaz });
    } catch (err) {
      console.log(err);
    }
  };
}

export function setOrgazes(orgazes) {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_ORGAZES", orgazes });
    } catch (err) {
      console.log(err);
    }
  };
}
