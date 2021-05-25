import React from 'react';
import {Cards,Country,Graphs} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/image.png';

class App extends React.Component {

  state = {
    country: '',
    data : {},
  }

  async componentDidMount()
  {

    const fetchdata = await fetchData();
    this.setState({data : fetchdata})

  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    console.log(country);
    console.log("data",data);
    this.setState({ data, country: country });
  }


  render() {

    const {data , country} = this.state;
    // console.log(data.keys());
    console.log("Country ",country)

  return (
    <div className={styles.container}>
      {/* <Cards data ={data} />
      <Country></Country>
      <Graphs></Graphs> */}

        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Graphs data={data} country={country} /> 
    </div>
  );
  }
}

export default App;
