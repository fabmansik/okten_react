import {apiService} from "./apiService";
import {urls} from "../constants";

const rmService = {
    getEpisodes:()=>apiService.rm.get(urls.rm.base),
    getEpisode:(id)=>apiService.rm.get(urls.rm.byPage(id)),
    getCharacters:(characters)=>apiService.rm.get(urls.rm.characters(characters))
}
export {
    rmService
}