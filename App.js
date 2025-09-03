import { View, Text, StyleSheet, TextInput, Pressable } from "react-native"
import { useState, useEffect } from "react"

export default function App(){

  const [ altura, setAltura ] = useState(0)
  const [ peso, setPeso ] = useState(0)
  const [ imc, setImc ] = useState(0)

  useEffect(()=>{
    if(imc<18.5){
      setStatus('Abaixo do peso')
    } else if(imc>=18.5&&imc<25){
      setStatus('Peso normal')
    } else if(imc>=25&&imc<30){
      setStatus('Sobrepeso')
    } else if(imc>=30&&imc<35){
      setStatus('Obesidade Grau I')
    } else if(imc>=35&&imc<40){
      setStatus('Obesidade Grau II')
    }else if(imc>=40){
      setStatus('Obesidade Grau III')
    } else {
      setStatus('Não classificado')
    }
  },[imc])

  const [ status, setStatus ] = useState('Não classificado')

  return(
    <View style={style.container}>
      <Text style={style.title}>Calcule seu IMC:</Text>
      <View style={style.main}>
        <View>
          <TextInput style={style.input} placeholder="Insira seu peso"
          onChangeText={peso=>setPeso(peso)}></TextInput>
          <TextInput style={style.input} placeholder="Insira sua altura"
          onChangeText={altura=>setAltura(altura)}></TextInput>
        </View>
        <Pressable onPress={()=>setImc(peso/(altura*altura))
        }>
          <Text style={style.btn}>Calcular</Text>
        </Pressable>
      </View>
      <View>
        <Text style={style.result_label}>SEU IMC É:</Text>
        <Text style={style.result}>{imc}</Text>
        <Text style={style.result}>{status}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  main:{
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    fontSize:30,
    color: '#444444ff',
    fontWeight: 'bold',
  },
  input:{
    borderColor: '#000',
    borderWidth: 2,
    width: 300,
    fontSize: 25,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center'
  },
  btn:{
    backgroundColor: '#c4c4c4',
    width: 200,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  result_label:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  result:{
    textAlign: 'center',
    fontSize: 20
  },
})