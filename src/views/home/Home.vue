<template>
    <v-app light>
        <div>
            <Navbar></Navbar>
        </div>
        <v-content>

            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">General System Configurations</h1>
                    </div>
                </v-col>
            </v-row>

            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12" md="6" lg="8">
                    <v-form v-model="valid">                      

                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field   
                                v-model="serviceCommissionAux"              
                                label="Service Commission*"
                                outlined                        
                                :disabled="loading"
                                :rules="[rules.required, rules.validNumber]"
                                v-on:keypress="restrictChars($event, serviceCommissionAux)"
                              ></v-text-field>

                          </v-col>
                      </v-row>
                      
                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field   
                                v-model="gatewayCommissionAux"          
                                label="Gateway Commission*"
                                outlined                        
                                :disabled="loading"
                                :rules="[rules.required, rules.validNumber]"
                                v-on:keypress="restrictChars($event, gatewayCommissionAux)"
                              ></v-text-field>

                          </v-col>
                      </v-row>

                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field  
                                  v-model="dolarValueAux"                      
                                  label="Dolar Value*"
                                  outlined                        
                                  :disabled="loading"
                                  :rules="[rules.required]"
                                  v-on:keypress="allowOnlyNumbers($event, dolarValueAux)"
                              ></v-text-field>
                          </v-col>
                      </v-row>

                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field       
                                  v-model="goldIncomeAux"                 
                                  label="Income necessary to become GOLD*"
                                  outlined                        
                                  :disabled="loading"
                                  :rules="[rules.required, rules.validNumber]"
                                v-on:keypress="restrictChars($event, goldIncomeAux)"
                              ></v-text-field>
                          </v-col>
                      </v-row>
                      
                    </v-form>

                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col cols="11" lg="12">
                                <v-btn
                                  color="danger"    
                                  @click="setOriginalValues"  
                                  class="resetButton" 
                                >
                                  Reset values
                                </v-btn>
                                
                                <v-btn
                                  color="primary"    
                                  @click="saveConfigurations"                                        
                                >
                                  Save configurations
                                </v-btn>
                            </v-col>
                        </v-row>
                        
                    </div>  

                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col class="d-flex justify-center">
                            <v-overlay                                  
                              :value="configurationsSaved"                      
                            >
                                <v-card
                                  max-width="500"
                                  class="mx-auto"
                                >
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title class="headline d-flex justify-center">New configurations saved!</v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>                                                                                                               
                                  <v-card-text>
                                    <span>The new configurations for the system has been successfully updated.</span>
                                  </v-card-text>                                                                          
                                  <div class="text-center">
                                      <v-btn
                                        color="success"
                                        @click="configurationsSaved = false"
                                        style="margin-bottom: 2%;"
                                      >
                                        Ok
                                    </v-btn>  
                                  </div>                                                           
                                </v-card>                              
                            </v-overlay>                                               
        
                        </v-col>
                    </v-row> 

                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col class="d-flex justify-center">
                                <v-overlay
                                  :value="proccessingRequest"
                                >
                                    <v-card
                                      max-width="344"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">Updating configurations.</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                        
                                        <v-progress-circular
                                          :size="70"
                                          :width="7"
                                          color="primary"
                                          indeterminate
                                        ></v-progress-circular> 

                                      <v-card-text>
                                        This could take some time. Please, be patient.
                                      </v-card-text>                                       
                                    </v-card>

                                </v-overlay> 
                            </v-col>
                        </v-row>
                    </div> 

                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col class="d-flex justify-center">
                            <v-overlay                                  
                              :value="error"                      
                            >
                                <v-card
                                  max-width="500"
                                  class="mx-auto"
                                >
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title class="headline d-flex justify-center">{{errorTittle}}</v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>                                                                                                               
                                  <v-card-text>
                                    <span>{{errorDescription}}.</span>
                                  </v-card-text>                                                                          
                                  <div class="text-center">
                                      <v-btn
                                        color="success"
                                        @click="error = false"
                                        style="margin-bottom: 2%;"
                                      >
                                        Ok
                                    </v-btn>  
                                  </div>                                                           
                                </v-card>                              
                            </v-overlay>                    

                        </v-col>
                    </v-row>                  
                    
                </v-col>                
            </v-row>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script lang="ts">
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

// Components
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

import settingsService from '@/services/settings/settingsService';

@Component({
    components: {
      Footer,
      Navbar
    }
})
export default class Home extends Vue{
    
    valid = false;
    loading = false;

    error = false;
    errorTittle = 'asasdasdasd';
    errorDescription = 'aasdadadad';  
    
    configurationsSaved = false;
    proccessingRequest = false;

    serviceCommissionAux = 0;
    gatewayCommissionAux = 0;
    dolarValueAux = 0;
    goldIncomeAux = 0;

    settings: any = {};

    rules = {
        required: (value: any) => !!value || 'Required.',
        validNumber: (value: string) => !!value && this.numberIsValid(value) || 'Invalid amount',        
    }

    mounted(){
        this.getSettings();
    }

    async getSettings(){
        this.settings = await settingsService.getSettings();
        console.log("Settings: ", this.settings);
        this.setOriginalValues();
    }

    setOriginalValues(){
        this.serviceCommissionAux = this.settings.serviceCommision.toString();
        this.gatewayCommissionAux = this.settings.gatewayCommision.toString();
        this.dolarValueAux = this.settings.dolarValue;
        this.goldIncomeAux = this.settings.goldIncome.toString();
    }

    numberIsValid(value: string){
        const dotsCount = value.split(".");
        if(dotsCount.length === 2){
            if(dotsCount[1].length < 3 && dotsCount[1].length > 0){
                return true;
            }
        }
        else if(dotsCount.length === 1){
            return true;
        }
        return false;
    }

    restrictChars(event: any, value: string){
        if(((event.charCode < 48 || event.charCode > 57) && event.charCode !== 46) || value.length > 8){
            event.preventDefault();
        }        
    }

    allowOnlyNumbers(event: any, value: number){
        if((event.charCode < 48 || event.charCode > 57) || value > 100000){
            event.preventDefault();
        } 
    }

    restrictNumbersAndSpecialCharacters(event: any){
      if((event.charCode < 65 || event.charCode > 90) && (event.charCode < 97 || event.charCode > 122) && event.charCode !== 32){
        event.preventDefault();
      }      
    }

    restrictionForGoldIncome(event: any, value: string){
        if(((event.charCode < 48 || event.charCode > 57) && event.charCode !== 46) || value.length > 8){
            event.preventDefault();
        }  
    }

    saveConfigurations(){
        if(this.valid){
            this.proccessingRequest = true;
        }
        else {
            console.log("hs")
        }
    }

}
</script>

<style src="./Home.css" scoped></style>