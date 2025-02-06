import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Alert, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const handleOrderPlaced = () => {
    Alert.alert('Order Placed', 'Your order has been placed successfully!');
  };
  const [count , setCount] = useState(1)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <ScrollView>
      <View style={styles.addressBar}>
        <View style={styles.addressDetails}>
          <Text style={styles.addressTitle}>Deliver to:</Text>
          <Text style={styles.addressText}>John Doe, 123 Main St, Anytown, USA</Text>
        </View>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemList}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>iPhone 13 Pro Max</Text>
            <Text style={[styles.itemPrice, {fontSize:12}]}>Best-in-class smartphone</Text>
            <Text style={styles.itemPrice}>₹66,999</Text>
            <Text style={styles.itemRatings}>Ratings: 4.5/5</Text>
            <View style={styles.count}>
              {/* incease Button  */}
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>{`Add to Cart (${count})`}</Text>
              </TouchableOpacity>
              <Text>{count}</Text>
              {/* decrease  */}
              <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText}>{count > 0? `Remove from Cart (${count})` : 'Remove from Cart'}</Text>
              </TouchableOpacity>
            </View>

            <Button title="Place Order" onPress={handleOrderPlaced} />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>MacBook Air M1</Text>
            <Text style={[styles.itemPrice, {fontSize:12}]}>13.3 inch, Space Grey, 1.29kg</Text>
            <Text style={styles.itemPrice}>₹69,990</Text>
            <Text style={styles.itemRatings}>Ratings: 4.5/5</Text>
            <Button title="Place Order" onPress={handleOrderPlaced} />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>OnePlus Buds 3</Text>
            <Text style={[styles.itemPrice, {fontSize:12}]}>Metallic Gray IN, True Wireless</Text>
            <Text style={styles.itemPrice}>₹5,499</Text>
            <Text style={styles.itemRatings}>Ratings: 4.0/5</Text>
            <Button title="Place Order" onPress={handleOrderPlaced} />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Apple iPad(10th gen)</Text>
            <Text style={[styles.itemPrice, {fontSize:12}]}>64 GB ROM 10.9 inch</Text>
            <Text style={styles.itemPrice}>₹34,900</Text>
            <Text style={styles.itemRatings}>Ratings: 4.3/5</Text>
            <Button title="Place Order" onPress={handleOrderPlaced} />
          </View>
        </View>
      </View>
      </ScrollView>
      <View style={styles.footer}>
        <Icon name="home" size={30} color="#61a0bf" />
        <Icon name="info" size={30} color="#61a0bf" />
        <Icon name="search" size={30} color="#61a0bf" />
        <Icon name="shopping-cart" size={30} color="#61a0bf" />
        <Icon name="person" size={30} color="#61a0bf" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0e3e4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    height: 50,
    borderRadius: 10,
    textAlignVertical: 'center',
    paddingLeft: 10,
  },
  addressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 20,
  },
  addressDetails: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
  },
  changeButton: {
    padding: 10,
    backgroundColor: '#2874f0',
    borderRadius: 5,
  },
  changeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemList: {
    flex: 1,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  itemRatings: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ddd',
    borderRadius: 9,
    marginTop: 7,
  },
  buttonText: {
    borderRadius: 2,
    borderWidth: 1,
    textAlign: 'center',
    width: 30,
  },
  count: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;