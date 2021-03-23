import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import * as Location from 'expo-location'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

import api, { key } from '../../services/api'
import { set } from 'react-native-reanimated';


const Home = () => {
  const [errorMsg, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [icon, setIcon] = useState({name: "cloud", color: "#fff"})
  const [backgound, setBackgound] = useState(['#1ed6ff', '#97c1ff'])

  useEffect(()=> {

    (async () => {
      let {status} = await Location.requestPermissionsAsync()

      if(status !== 'granted'){
        setErrorMessage('Permissao negada para acessar localizaçao')
        setLoading(false)
        return;
      }

      const location = await Location.getCurrentPositionAsync({})

      //weather?key=SUA-CHAVE&lat=-23.682&lon=-46.875&user_ip=remote

      const response = await api.get(`https://api.hgbrasil.com/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
      
      setWeather(response.data)

      if(response.data.results.currently === 'noite'){
        setBackgound(['#0c3741', '#0f2f61'])
      }

     switch(response.data.results.condition_slug){
       case 'clear_day':
         setIcon({name: 'partly-sunny', color: '#FFB300'})
         break
        case 'rain':
          setIcon({name: 'rainy', color: '#FFF'})
          break
        case  'storm':
          setIcon({name: 'rainy', color: '#fff'})
          break
     }

     setLoading(false)

    //  console.log(weather)
    
    })()

  }, [])

  if(loading){
    return(
      <View style={styles.loading}>
        <Text style={{fontSize: 17}}>Buscando dados...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={backgound} weather={weather} icon={icon}/>
      <Conditions weather={weather} />

      <FlatList
        horizontal
        style={styles.list}
        data={weather.results.forecast}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    backgroundColor: "#e8f2ff",
    position: 'relative'
  },
  list: {
    marginTop: 10,
    marginHorizontal: 10
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    backgroundColor: "#e8f2ff",
    position: 'relative'
  }
})

export default Home;