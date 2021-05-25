import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {

    let changeableUrl = url;

    console.log("Country",country)

    if (country) {
        if(country == "global"){
            changeableUrl = url;
        }
        else{
            console.log("In");
            changeableUrl = `${url}/countries/${country}`;
        }
    }

    try {

        console.log("Index.js",url)
        const { data : { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);

        const modifiedData = { confirmed,recovered,deaths,lastUpdate }

        console.log("last ",lastUpdate)
        return modifiedData
        
    } catch (error) {
        
    }
}


export const fetchDailyData = async() =>{
    try {
        const url = `https://covid19.mathdro.id/api/daily`

        console.log("modify")
        const { data } = await axios.get(url);

        const modifiedData = data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }
        ));
        
        console.log("modify",modifiedData)
        return modifiedData

    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };