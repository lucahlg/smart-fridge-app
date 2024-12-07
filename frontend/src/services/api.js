const API_URL = "http://localhost:5000";

export const getHomeMessage = async () => {
  const response = await fetch(`${API_URL}/`);
  const data = await response.json();
  return data;
};

export const getUnits = async () => {
  const response = await fetch(`${API_URL}/api/units`);
  const data = await response.json();
  return data;
};

export const createUnit = async (unit) => {
  const response = await fetch(`${API_URL}/api/units`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(unit),
  });
  const data = await response.json();
  return data;
};
