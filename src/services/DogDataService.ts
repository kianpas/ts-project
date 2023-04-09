import { dogAxios } from "@/http-commons";

class DogDataService {
  getBreedList(): Promise<any> {
    return dogAxios.get("/breeds/list/all");
  }

  getBreedImage(breed:string): Promise<any> {
    return dogAxios.get(`/breed/${breed}/images/random`);
  }
}

export default new DogDataService();