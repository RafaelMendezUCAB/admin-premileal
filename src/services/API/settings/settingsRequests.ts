import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */
    getSettings() {
        return API_URL.get(process.env.VUE_APP_SETTINGS_ROUTE+"/all");
    },

    /* ---------------------- POST METHODS -------------------------- */

    /* ---------------------- PUT METHODS -------------------------- */
    updateSettings(settings: any){
        return API_URL.put(process.env.VUE_APP_SETTINGS_ROUTE+"/update", settings);
    }
  
    /* ---------------------- DELETE METHODS -------------------------- */
}