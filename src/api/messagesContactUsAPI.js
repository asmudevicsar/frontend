const { API_URL } = require('utils/constants');

export async function getMessagesContactUs() {
  try {
    const url = `${API_URL}/api/mensajes-contactanoss?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
