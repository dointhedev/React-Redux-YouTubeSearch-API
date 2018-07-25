//import axios from "axios";
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyBGeM99z6sy3km8XDDu3mMXq8IqGVR97LQ";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  youTubeSearch: search => {
    return YTSearch({key: API_KEY, term: search})
}}