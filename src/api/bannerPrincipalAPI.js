const { API_URL } = require('utils/constants');

export async function getBannersPrincipal() {
  try {
    const url = `${API_URL}/api/banner-principals?sort[0]=orden:asc&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
