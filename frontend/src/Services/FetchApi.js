export const create = async (nota) => {
  const URL = `http://localhost:8000/notas`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        note: nota.text,
        collor: nota.collor,
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

export const remove = async (id) => {
  const URL = `http://localhost:8000/notas/${id}`;
  try {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (id, nota) => {
  const URL = `http://localhost:8000/notas/${id}`;
  try {
    const response = await fetch(URL, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        note: nota.text,
        collor: nota.collor,
      }),
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};