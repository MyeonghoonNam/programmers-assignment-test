export const getPersonalInfo = async () => {
  const res = await fetch("/web/src/data/new_data.json");
  const data = await res.json();

  return data;
};
