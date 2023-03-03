export const getEmployeeInfo = async () => {
  const res = await fetch("/web/src/data.json");
  const data = res.json();

  return data;
};
