
const priorityRank = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const sortedTasks = [...tasks].sort((a, b) => {
  const roiDiff = b.roi - a.roi;
  if (roiDiff !== 0) return roiDiff;

  const priorityDiff =
    priorityRank[b.priority] - priorityRank[a.priority];
  if (priorityDiff !== 0) return priorityDiff;

  return a.title.localeCompare(b.title);
});
