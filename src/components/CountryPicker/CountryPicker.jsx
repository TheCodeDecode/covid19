
import React, {useState,useEffect} from 'react';
import { NativeSelect,FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const CountryPicker = ({handleCountryChange}) =>{

    const [fetchedCountries,setFetchedCountries] = useState([]);
 
    useEffect(() =>{
        const  fetchAPI = async ()=>{
         setFetchedCountries(await fetchCountries());
          
        }
        fetchAPI();
    },[setFetchedCountries])



    return(
<FormControl  className={styles.formControl}>
    <Select defaultValue="India" onChange={(e) => handleCountryChange(e.target.value)} className={styles.m2}>
        {fetchedCountries.map((item,i) => <MenuItem  key ={i}value={item}>{item}</MenuItem >)}
    </Select>
</FormControl>
        
    )
}

export default CountryPicker;