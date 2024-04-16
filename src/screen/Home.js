import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DanhSach from '../component/DanhSach'

const Home = ({ navigation }) => {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable onPress={() => { navigation.navigate("Cart") }}
                    style={{ width: '40%',padding: 20, margin: 20, backgroundColor: 'pink', borderRadius: 20, alignItems: 'center' }}>
                    <Text>Giỏ hàng của tôi</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("ThongKe") }}
                    style={{ width: '40%',padding: 20, margin: 20, backgroundColor: 'pink', borderRadius: 20, alignItems: 'center' }}>
                    <Text>Thống kê</Text>
                </Pressable>
            </View>
            <DanhSach />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})