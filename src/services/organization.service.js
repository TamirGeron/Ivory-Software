import axios from "axios";

export const orgazesService = {
  queryOrgaz,
  queryAccount,
  onDrag,
};

async function queryOrgaz(filterBy = { pageNum: "4", searchText: "" }) {
  try {
    const res = await axios.post(
      "http://54.194.238.190:8080/admin_get_organization_users",
      {
        content: {
          organizationCode: "Ivory",
          pageNum: filterBy.pageNum,
          searchText: filterBy.searchText,
        },
      }
    );
    return res.data.content.list;
  } catch (err) {
    console.log("err", err);
    alert(err);
  }
}

async function queryAccount(userId) {
  try {
    const res = await axios.post(
      "http://54.194.238.190:8080/admin_get_user_accounts",
      {
        content: {
          userId,
        },
      }
    );
    return res.data.content.list;
  } catch (err) {
    console.log("err", err);
    alert(err);
  }
}

function onDrag(res, orgazes) {
  const newOrgazes = [...orgazes];
  const [removed] = newOrgazes.splice(res.source.index, 1);
  newOrgazes.splice(res.destination.index, 0, removed);
  return newOrgazes;
}
