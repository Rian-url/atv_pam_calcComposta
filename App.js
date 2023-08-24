import { Text, SafeAreaView, StyleSheet, input, view } from 'react-native';
import React, { useState, useEffect} from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  const [n1, setN1] = useState (0)
  const [n2, setN2] = useState (0)
  const [n3, setN3] = useState (0)
  const [n4, setN4] = useState (0)
  const [n5, setN5] = useState (0)
  

   function calcRegraComposta() {
     const vl1 = n1 * n2
     const vl2 = n4 * n5
     const vl3 = n3 * vl2
     const result2 = vl3 / vl1;

     if(n1, n2, n3, n4, n5 == 0) {
       return document.getElementById("result").innerHTML = 'Insira os valores corretamente';
     }
     else
     {
       return document.getElementById("result").innerHTML = 'Resultado: ' + result2;
     }

   }  


return (
  <view>
     <SafeAreaView style={styles.div}>
    <h1 style={styles.title} > CALCULADORA REGRA DE 3 COMPOSTA</h1>
    <label style={styles.subTitle}> Digite o primeiro valor: </label>
    <input type='number' value={n1} onChange={(e) => setN1(e.target.value)} style={styles.input}/>
    <label style={styles.subTitle}> Digite o segundo valor: </label>
    <input type='number' value={n2} onChange={(e) => setN2(e.target.value)} style={styles.input}/>
    <label style={styles.subTitle}> Digite o terceiro valor: </label>
    <input type='number' value={n3} onChange={(e) => setN3(e.target.value)} style={styles.input}/>
    <label style={styles.subTitle}> Digite o quarto valor: </label>
    <input type='number' value={n4} onChange={(e) => setN4(e.target.value)} style={styles.input}/>
    <label style={styles.subTitle}> Digite o quinto valor: </label>
    <input type='number' value={n5} onChange={(e) => setN5(e.target.value)} style={styles.input}/>
    <input type='submit' value='Calcular' onClick={calcRegraComposta} style={styles.button}/>
    <label id='result' style={styles.label}> </label>
    </SafeAreaView>
    </view>
  );
 } 


const styles = StyleSheet.create({
div: {
    backgroundColor: '#b2dafa',
    color: '#5086c1',
    fontFamily: 'Sans-serif'
     
  },
  button : {
    color:'#5086c1',
    width: 150,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor:  'white',
    marginTop: 10,
    marginLeft:3,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5
  },
  title: {
    textAlign: 'center',
  },

  label: {
    backgroundColor: 'white',
    fontSize: 20,
    color:'green'
  },

  input: {
    width: 200,
    borderRadius:3,
    borderStyle: 'none',
    marginBottom: 5,
    marginLeft: 5
  },

  subTitle: {
    marginLeft: 5,
  }
});
