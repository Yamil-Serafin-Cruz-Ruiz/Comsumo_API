import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';

const ScreenProductsList = ()=>{
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProductos();
    }, []);

    const getProductos = () => {
        const URL = "https://fakestoreapi.com/products";

        fetch(URL)
        .then((res) => {
            if (!res.ok){
                throw new Error("Algo Salió Mal en la Conexión");
            }
            return res.json();
        })
        .then((data) => {
            setProducts(data);
            setIsLoading(false);
            console.log(data);
        })
        .catch((error) => {
            setError(error.message);
            console.log(error.message);
        });
    };
    return (

      <View style={styles.contenedor}>
        <Text style={{fontSize: 24, textAlign: "center", color: "#fff", paddingBottom: 10}}>WegStore</Text>
        { isLoading ? (
        <ActivityIndicator color="red" size="large"/>
        
        ) : error ? (
        <Text style={styles.errorStyle}>{error}</Text> 
        ) : ( 
            
            <FlatList
            showsHorizontalScrollIndicator={false} 
            data={products} 
            renderItem={({item}) => (
                <View style={styles.cardConteiner}>
                    <Image source={{uri: item.image}} style={styles.imagenes}/>
                    <Text style={styles.text_producto}>
                        {item.title}
                    </Text>
                    <Text style={styles.text_precio}>
                        Costo: ${item.price}
                    </Text>
                </View>
            )}
        />  
    )}
    </View>
    );
};

export default ScreenProductsList

const styles = StyleSheet.create({
    cardConteiner: {
        marginTop: 20,
        backgroundColor: '#4e968a',
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    imagenes: {
        height: 200,
        width: 200,
    },
    errorStyle: {
        color: "red",
        fontSize: 18,
    },
    contenedor:{
        marginTop: 50,
    },
    text_precio: {
        fontSize: 20, 
        textAlign: "center", 
        fontWeight: "bold"
    },
    text_producto: {
        fontSize: 18, 
        textAlign: "center",
        padding: 10,
    },
});