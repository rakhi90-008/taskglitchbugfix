
export const calculateROI = (revenue, timeTaken) => {
  const revenueNum = Number(revenue);
  const timeNum = Number(timeTaken);

  if (!revenueNum || !timeNum || timeNum === 0) return 0;

  return Number((revenueNum / timeNum).toFixed(2));
};
