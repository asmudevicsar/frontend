import { API_URL } from "utils/constants";


export async function getPartners(idProject) {
    try {
      const url = `${API_URL}/api/socioss?populate=*`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }