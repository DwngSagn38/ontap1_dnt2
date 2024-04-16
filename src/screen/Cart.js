import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart } from '../redux/actionCart';

const Cart = () => {
    const listCart = useSelector(state => state.cart.CartItems);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            {listCart == 0 ? <Text style={{ textAlign: 'center' }}>Giỏ hàng rỗng</Text>
                : listCart.map(item => (
                    <View key={item.id} style={{ padding: 20, margin: 10, borderWidth: 1, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image source={{ uri: item.hinh_anh_2024_ph42693 }}
                                style={{ width: 100, height: 100 }} />
                            <View>
                                <Text>Mã sách : {item.ma_sach_ph42693}</Text>
                                <Text>Tiêu đề : {item.tieu_de_ph42693}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Pressable onPress={() => dispatch(removeCart(item))}
                                style={{ padding: 12, backgroundColor: 'pink', borderRadius: 10 }}>
                                <Text>Giảm</Text>
                            </Pressable>

                            <Text>Số lượng mua : {item.quantity}</Text>
                            <Pressable onPress={() => dispatch(addToCart(item))}
                                style={{ padding: 12, backgroundColor: 'pink', borderRadius: 10 }}>
                                <Text>Tăng</Text>
                            </Pressable>
                        </View>
                    </View>
                ))}

            {listCart != 0 ? <Pressable
                style={{ padding: 20, borderRadius: 10, backgroundColor: 'green', marginHorizontal: '5%', position: 'absolute', bottom: 20, width: '90%', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Mua hàng</Text>
            </Pressable> : null}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})