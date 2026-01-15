
const UndoSnackbar = ({
  open,
  setOpen,
  lastDeletedTask,
  setLastDeletedTask,
  setTasks,
}) => {
  const handleClose = () => {
    setOpen(false);
    setLastDeletedTask(null);
  };

  const handleUndo = () => {
    if (!lastDeletedTask) return;
    setTasks(prev => [...prev, lastDeletedTask]);
    setLastDeletedTask(null);
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Button onClick={handleUndo}>UNDO</Button>
    </Snackbar>
  );
};

export default UndoSnackbar;
