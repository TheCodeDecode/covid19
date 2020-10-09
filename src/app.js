import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./app.module.css";
import {fetchData} from './api/index';

class App extends React.Component {

    state = {
        data : {},
        country:''
    }


   async componentDidMount(){
        const fetchdata = await fetchData();
        this.setState({data: fetchdata})
    }

    handleCountryChange = async (country) =>{
      const fetchdata = await fetchData(country);
      // const fetchData = await fetchData(country);
        console.log(fetchdata);
        this.setState({data: fetchdata,country:country})
      //fetch the data
      //set the state
    }
  render() {

    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        
        <img src='https://i.ibb.co/7QpKsCX/image.png' className='mt-2'/>
        <Cards  data ={data}/>
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
       
      </div>
    );
  }
}

export default App;
