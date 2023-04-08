import { apiClient } from "@/http-commons";

class SwDataService {
  getAllFilms(): Promise<any> {
    return apiClient.get("/films");
  }
  getAllPeople(): Promise<any> {
    return apiClient.get("/people");
  }
  getAllStarShips(): Promise<any> {
    return apiClient.get("/starships");
  }
}

export default new SwDataService();
