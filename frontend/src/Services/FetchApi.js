export const create = async (nota) => {
  const URL = `http://localhost:8000/notas`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        note: nota,
      }),
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const getList = async () => {
  const URL = `http://localhost:8000/notas`;
  try {
    const response = await fetch(URL, {
      method: "get",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};