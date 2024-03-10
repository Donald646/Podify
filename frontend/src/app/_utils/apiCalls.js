const API_URL = "http://127.0.0.1:5001/";

export const postData = async (endpoint, body) => {
  const allHeaders = { "Content-Type": "application/json" };
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: allHeaders,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
