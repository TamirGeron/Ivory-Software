import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ExpendedRowCMP } from "./ExpendedRowCMP";
import { RowActionMenu } from "../modals/RowActionMenu";
import { orgazesService } from "../../services/organization.service";

export const OrgazTableBody = ({
  table,
  selectedRow,
  onSelectedRow,
  selectedHeader,
  onActionClick,
  flexRender,
  showActions,
  expandRow,
  accounts,
  onDeleteRow,
  onEditRow,
  orgazes,
  onSetOrgazes,
}) => {
  const onDragEnd = (res) => {
    if (!res.destination) return;
    const newOrgazes = orgazesService.onDrag(res, orgazes);
    onSetOrgazes(newOrgazes);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="droppableGroup">
        {(provided, snapshot) => (
          <tbody ref={provided.innerRef} {...provided.droppableProps}>
            {table
              .getRowModel()
              .rows.slice(0)
              .map((row, rowIdx) => {
                return (
                  <>
                    <Draggable key={row.id} draggableId={row.id} index={rowIdx}>
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={
                            "pointer " +
                            (row.original.status === "0" ? "color-row " : " ") +
                            (selectedRow === row.id ? "active-row " : " ")
                          }
                          key={row.id}
                          onClick={() => onSelectedRow(row)}
                        >
                          {row.getVisibleCells().map((cell, idx) => {
                            return (
                              <td
                                className={
                                  selectedHeader === idx ? "active-col" : ""
                                }
                                key={cell.id}
                                onClick={() => onActionClick(row.id, idx)}
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            );
                          })}
                          {showActions === row.id && (
                            <RowActionMenu
                              rowIdx={rowIdx}
                              onDeleteRow={onDeleteRow}
                              onEditRow={onEditRow}
                            />
                          )}
                        </tr>
                      )}
                    </Draggable>
                    <tr>
                      <td className="expand-row-container" colSpan="6">
                        {expandRow === row.id && (
                          <ExpendedRowCMP accounts={accounts} />
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};
