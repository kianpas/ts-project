import { catAxios } from "@/http-commons";

class CatDataService {
  getBreeds(): Promise<any> {
    return catAxios.get("/breeds");
  }
}

export default new CatDataService();