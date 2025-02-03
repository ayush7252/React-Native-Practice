import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image 
        source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=400'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis quam libero fugit error similique alias. Adipisci doloremque in dignissimos architecto magnam, animi voluptate perspiciatis error. Dicta blanditiis facere atque.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={()=> openWebsite('https://www.youtube.com/')}>
                <Text style={styles.socialLinks}>
                    Read More
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> openWebsite('https://www.instagram.com/')}
            >
                <Text style={styles.socialLinks}>
                    Follow me
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white'
    },
    card: {
        width: 380,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#F3B431',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage:{
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    },


})