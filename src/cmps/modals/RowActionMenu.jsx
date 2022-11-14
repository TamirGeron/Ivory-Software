import React from "react";

export const RowActionMenu = ({ onDeleteRow, rowIdx, onEditRow }) => {
  return (
    <td className="row-action-menu">
      <div className="main-section">
        <div id="ok-to-click" onClick={() => onEditRow(rowIdx)}>
          Edit
        </div>
        <div id="ok-to-click" onClick={() => onDeleteRow(rowIdx)}>
          Delete
        </div>
      </div>
    </td>
  );
};
