const { API_URL } = require('utils/constants');
export async function getEventsComunicadosGallery() {
  try {
    const url = `${API_URL}/api/eventos-y-noticias?sort[0]=Fecha:desc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    const url2 = `${API_URL}/api/comunicados-de-prensas?sort[0]=Fecha:desc&populate=*`;
    const response2 = await fetch(url2);
    const result2 = await response2.json();

    let arr3 = result.data.concat(result2.data);
 
    return arr3;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getEventsComunicadosGalleryMaxSix() {
  try {
    const url = `${API_URL}/api/eventos-y-noticias?sort[0]=Fecha:desc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    const url2 = `${API_URL}/api/comunicados-de-prensas?sort[0]=Fecha:desc&populate=*`;
    const response2 = await fetch(url2);
    const result2 = await response2.json();

    let arr3 = result.data.concat(result2.data);
    
    arr3 = arr3.filter((item, index) => index < 6);
    return arr3;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getNoticesData() {
  try {
    const url = `${API_URL}/api/eventos-y-noticias?sort[0]=Fecha:desc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getNoticesDataMaxSix() {
  try {
    const url = `${API_URL}/api/eventos-y-noticias?pagination[limit]=6&sort[0]=Fecha:desc&populate=*`;
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
export async function getNoticeByUrl(idNotice) {
  try {
    const url = `${API_URL}/api/eventos-y-noticias?filters[id][$eq]=${idNotice}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

//api de comunicados de prensa
export async function getComunicadosPrensaData() {
  try {
    const url = `${API_URL}/api/comunicados-de-prensas?sort[0]=Fecha:desc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getComunicadosPrensaDataMaxSix() {
  try {
    const url = `${API_URL}/api/comunicados-de-prensas?pagination[limit]=6&sort[0]=Fecha:desc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getComunicadosPrensaMaxThree() {
  try {
    const url = `${API_URL}/api/ecomunicados-de-prensas?pagination[limit]=3&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getComunicadoPrensaByUrl(idNotice) {
  try {
    const url = `${API_URL}/api/comunicados-de-prensas?filters[id][$eq]=${idNotice}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    console.log('hoaaa0>', result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
