const baseURL = 'https://notekeeper-ef0c5-default-rtdb.firebaseio.com/data';

export const deleteNote = (id) => {
  try {
    fetch(`${baseURL}/${id}.json`, {
      method: 'DELETE',
    });
  } catch (err) {
    alert(err);
  }
};

export const getAllNotes = async () => {
  try {
    const response = await fetch(`${baseURL}.json/`);
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    alert(err);
  }
};

export const getOneNote = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}.json`);
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    alert(err);
  }
};

export const postNote = (data) => {
  try {
    fetch(`${baseURL}.json`, {
      method: 'POST',
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    alert(err);
  }
};

export const updateNote = (id, body) => {
  try {
    fetch(`${baseURL}/${id}.json`, {
      method: 'PATCH',
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    alert(err);
  }
};
