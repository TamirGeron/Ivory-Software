import { useState, useEffect } from "react";

import { OrgazTable } from "./OrgazTable";

export const MainTable = ({
  orgazes,
  filterBy,
  setFilterBy,
  accounts,
  getAccounts,
  onDeleteRow,
  onEditRow,
  selectedRow,
  showActions,
  expandRow,
  setShowActions,
  setSelectedRow,
  setExpandRow,
  onSetOrgazes,
}) => {
  useEffect(() => {
    document.addEventListener("mousedown", eventListeners);
    return () => {
      document.removeEventListener("mousedown", eventListeners);
    };
  }, []);

  const eventListeners = ({ target }) => {
    if (target.id !== "ok-to-click") setShowActions(false);
  };

  const onHandleChange = ({ target }) => {
    setFilterBy({ pageNum: filterBy.pageNum, searchText: target.value });
  };

  const onSetPage = (diff) => {
    let page = filterBy.pageNum;
    page = parseInt(page) + diff;
    if (page < 1) page = 4;
    else if (page > 4) page = 1;
    setFilterBy({ searchText: filterBy.searchText, pageNum: page.toString() });
    setSelectedRow(null);
  };

  const onSelectedRow = (row) => {
    if (selectedRow === row.id) {
      onExpandRow(row);
    } else {
      setSelectedRow(row.id);
    }
  };

  const onExpandRow = (row) => {
    if (expandRow === row.id) setExpandRow(null);
    else {
      setExpandRow(row.id);
      getAccounts(row.original.userId);
    }
  };

  const onActionClick = (rowId, idx) => {
    if (idx === 5) setShowActions(rowId);
  };
  return (
    <div className="orgaz-table flex flex-column align-center">
      <div className="text-search">
        <div>search:</div>
        <input onChange={(ev) => onHandleChange(ev)} type="text" />
      </div>
      <OrgazTable
        orgazes={orgazes}
        selectedRow={selectedRow}
        onSelectedRow={onSelectedRow}
        onActionClick={onActionClick}
        showActions={showActions}
        expandRow={expandRow}
        accounts={accounts}
        onDeleteRow={onDeleteRow}
        onEditRow={onEditRow}
        onSetOrgazes={onSetOrgazes}
      />
      {orgazes.length === 0 && <div className="empty-header">Empty</div>}
      <div className="paging flex">
        <button onClick={() => onSetPage(-1)}>◀</button>
        <div>{filterBy.pageNum}</div>
        <button onClick={() => onSetPage(1)}>▶</button>
      </div>
      <div className="total-rows">Total {orgazes.length} of rows</div>
    </div>
  );
};
