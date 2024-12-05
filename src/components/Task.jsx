import React from "react";
import PropTypes from "prop-types";

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={state === "TASK_ARCHIVED"} disabled={true} name="checked" />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "16px" }}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  /** Default use for Task component */
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  /** Function to archive the task */
  onArchiveTask: PropTypes.func,
  /** Function to Pin the task */
  onPinTask: PropTypes.func,
};
