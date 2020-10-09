import axios from "axios";

const url = "https://covid19.mathdro.id/api";



 export const fetchData = async (country) => {
  let chnagebleUrl = url;
   if(country){
   chnagebleUrl = `${url}/countries/${country}`;
    console.log(chnagebleUrl,'chnagebleUrl');
   }
  try {
     const {data :{ confirmed,recovered,deaths,lastUpdate}} = await axios.get(chnagebleUrl);
     return { confirmed,recovered,deaths,lastUpdate} ;
      
  } catch (error) {
    console.log(error);
  }
};


export const fetchDailyData = async () => {

  try {
   const {data} = await axios.get(`${url}/daily`);
   const modifiedData = data.map((item) => ({
    confirmed:item.confirmed.total,
    recovered:item.recovered.total,
    date:item.reportDate

   }));
   console.log(modifiedData,'modifiedData');
   return modifiedData;
     
 } catch (error) {}

};


export const fetchCountries = async () => {
  try{
    const {data : { countries}} = await axios.get(`${url}/countries`);
    return countries.map(item=>item.name);
  }
  catch (error){

  }

}
