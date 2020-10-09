
import React, {useState,useEffect} from 'react';
import { NativeSelect,FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index';

const CountryPicker = ({handleCountryChange}) =>{

    const [fetchedCountries,setFetchedCountries] = useState([]);
 
    useEffect(() =>{
        const  fetchAPI = async ()=>{
         setFetchedCountries(await fetchCountries());
          
        }
        fetchAPI();
    },[setFetchedCountries])



    return(
<FormControl className={styles.m2}>
    <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((item,i) => <option key ={i}value={item}>{item}</option>)}
    </NativeSelect>
</FormControl>
        
    )
}

export default CountryPicker;