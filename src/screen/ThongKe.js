import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/action';

const ThongKe = () => {
    const listSach = useSelector(state => state.sach.SachItems);
    const dispatch = useDispatch()

    const [listTK, setlistTK] = useState([])

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const getListTK = () => {
        const list = listSach.filter(item => item.So_luong_ph42693 > 100);
        setlistTK(list)
    }

    useEffect(() => {
      getListTK()
    }, [])

    
    

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>Mã sách : {item.ma_sach_ph42693}</Text>
                <Text>Số lượng : {item.So_luong_ph42693}</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={listTK}
                keyExtractor={item => item.id}
                renderItem={renderItem}></FlatList>
        </View>
    )
}

export default ThongKe

const styles = StyleSheet.create({})