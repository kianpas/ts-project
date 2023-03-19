import http from "../http-commons";

class SwDataService {
  getAllFilms(): Promise<any> {
    return http.get("/films");
  }
  getAllPeople(): Promise<any> {
    return http.get("/people");
  }
}

export default new SwDataService();
