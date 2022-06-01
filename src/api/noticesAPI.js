const { API_URL } = require('utils/constants');


export async function getNoticesData(){
  try {
    const url = `${API_URL}/api/eventos-y-noticias?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getNoticesMaxThree() {
  try {
    const url = `${API_URL}/api/eventos-y-noticias?pagination[limit]=3&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
