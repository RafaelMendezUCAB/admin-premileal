import api from '../API/request';

let serverResponse = null;

export default {     

  /* --------------------- API CALLS ------------------------------- */
  async getSettings() {
    serverResponse = await api.settings.getSettings();   
    if(serverResponse.data !== "No settings."){
        return {
            serviceCommision: serverResponse.data[0].set_service_commission,
            gatewayCommision: serverResponse.data[0].set_gateway_commission,
            dolarValue: serverResponse.data[0].set_dolar_value,
            goldIncome: serverResponse.data[0].set_gold_income
        }
    }
  },  

  updateSettings(settings: any){
    return api.settings.updateSettings(settings);
  }

};
