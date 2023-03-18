import http from "../http-commons";

class SwDataService {
  getAllFilms(): Promise<any> {
    return http.get("/films");
  }
}

export default new SwDataService();
