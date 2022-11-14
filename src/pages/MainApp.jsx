import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addOrgaz,
  editOrgaz,
  loadOrgazes,
  removeOrgaz,
  setOrgazes,
} from "../store/organization/organization.action";
import { MainTable } from "../cmps/Table/MainTable";
import { loadAccounts } from "../store/account/account.action";
import { AddModal } from "../cmps/modals/AddModal";
import { BlueButton } from "../cmps/buttons/BlueButton";

export const MainApp = () => {
  const dispatch = useDispatch();

  const { orgazes } = useSelector((storeState) => storeState.orgazModule);
  const { accounts } = useSelector((storeState) => storeState.accountModule);
  const [filterBy, setFilterBy] = useState({ searchText: "", pageNum: "1" });
  const [isAddClick, setIsAddClick] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [expandRow, setExpandRow] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    status: "0",
    lastLoginDate: "",
    favoriteFoods: [],
    isAdmin: false,
    file: "",
    rowIdx: "add",
  });

  useEffect(() => {
    onRefresh();
  }, [filterBy]);

  const onRefresh = () => {
    dispatch(loadOrgazes(filterBy));
  };

  const getAccounts = (userId) => {
    dispatch(loadAccounts(userId));
  };

  const toggleOnAdd = () => {
    setIsAddClick(!isAddClick);
  };

  const onDeleteRow = (rowIdx) => {
    dispatch(removeOrgaz(orgazes, rowIdx));
    setExpandRow(null);
    setSelectedRow(null);
    setShowActions(null);
  };

  const onSubmit = () => {
    if (form.rowIdx === "add") dispatch(addOrgaz(form));
    else dispatch(editOrgaz(form));
    setIsAddClick(false);
  };

  const onSetOrgazes = (newOrgazes) => {
    dispatch(setOrgazes(newOrgazes));
  };

  const onEditRow = (rowIdx) => {
    const editOrgaz = orgazes[rowIdx];

    setForm({
      firstName: editOrgaz.firstName,
      lastName: editOrgaz.lastName,
      email: editOrgaz.email,
      status: editOrgaz.status,
      lastLoginDate: editOrgaz.lastLoginDate,
      favoriteFoods: [],
      isAdmin: false,
      file: "#",
      rowIdx: rowIdx,
    });
    setIsAddClick(true);
    setExpandRow(null);
    setSelectedRow(null);
    setShowActions(null);
  };

  return (
    <div className="main-app grid">
      {!orgazes ? (
        <div>Error</div>
      ) : (
        <div className="orgaz-table-container flex">
          <MainTable
            orgazes={orgazes}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            accounts={accounts}
            getAccounts={getAccounts}
            onDeleteRow={onDeleteRow}
            onEditRow={onEditRow}
            setShowActions={setShowActions}
            setSelectedRow={setSelectedRow}
            setExpandRow={setExpandRow}
            selectedRow={selectedRow}
            showActions={showActions}
            expandRow={expandRow}
            onSetOrgazes={onSetOrgazes}
          />
        </div>
      )}
      <div className="refresh-btn pointer" onClick={() => onRefresh()}>
        <BlueButton text={"Refresh"} />
      </div>
      <div className="refresh-btn pointer" onClick={() => toggleOnAdd()}>
        <BlueButton text={"Add"} />
      </div>

      {isAddClick && (
        <AddModal
          toggleOnAdd={toggleOnAdd}
          onSubmit={onSubmit}
          form={form}
          setForm={setForm}
        />
      )}
    </div>
  );
};
