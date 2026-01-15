
const TaskItem = ({ task, onView, onEdit, onDelete }) => {
  return (
    <div onClick={() => onView(task)}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(task);
        }}
      >
        Edit
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
