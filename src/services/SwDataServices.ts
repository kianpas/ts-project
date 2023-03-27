import http from "../http-commons";

class SwDataService {
  getAllFilms(): Promise<any> {
    return http.get("/films");
  }
  getAllPeople(): Promise<any> {
    return http.get("/people");
  }
  getAllStarShips(): Promise<any> {
    return http.get("/starships");
  }
}

export default new SwDataService();
