import axios from 'axios';


export default async function fetchBusDetails() {

    const data= await axios.get('https://raw.githubusercontent.com/Abhi3391/react-training-project-bus-ticket-booking/main/src/component/bus-data.json')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
      const  buses = data.buses;
      console.log("data",buses);


      return buses;
    
}


