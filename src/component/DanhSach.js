import { Image, Modal, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/action';
import { addToCart } from '../redux/actionCart';

const DanhSach = () => {
    const listSach = useSelector(state => state.sach.SachItems);
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [item, setitem] = useState([])
    const [ma_sach_ph42693, setma_sach_ph42693] = useState('')
    const [tieu_de_ph42693, settieu_de_ph42693] = useState('')
    const [tac_gia_ph42693, settac_gia_ph42693] = useState('')
    const [nam_xuat_ban_ph42693, setnam_xuat_ban_ph42693] = useState('')
    const [so_trang_ph42693, setso_trang_ph42693] = useState('')
    const [the_loai_ph42693, setthe_loai_ph42693] = useState('')
    const [So_luong_ph42693, setSo_luong_ph42693] = useState('')
    const [hinh_anh_2024_ph42693, sethinh_anh_2024_ph42693] = useState('')
    const [don_gia_2024_ph42693, setdon_gia_2024_ph42693] = useState('')

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])


    const ModalChitiet = () => {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Thông tin chi tiết sách</Text>
                            <Text style={styles.modalText}>Mã sách : {ma_sach_ph42693}</Text>
                            <Text style={styles.modalText}>Tiêu đề : {tieu_de_ph42693}</Text>
                            <Text style={styles.modalText}>Tác giả : {tac_gia_ph42693}</Text>
                            <Text style={styles.modalText}>Năm xb : {nam_xuat_ban_ph42693}</Text>
                            <Text style={styles.modalText}>SỐ trang : {so_trang_ph42693}</Text>
                            <Text style={styles.modalText}>Thể loại : {the_loai_ph42693}</Text>
                            <Text style={styles.modalText}>Số lượng : {So_luong_ph42693}</Text>
                            <Text style={styles.modalText}>Đơn giá : {don_gia_2024_ph42693}</Text>
                            <Image source={{ uri : hinh_anh_2024_ph42693}} style={{width: 160, height: 160}}/>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    dispatch(addToCart(item))
                                    ToastAndroid.show("Đã thêm vào giỏ hàng",0)
                                }}>
                                <Text style={styles.textStyle}>Add to cart</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Đóng</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    return (
        <View>
            {listSach.map(item => (
                <Pressable onPress={()=> {
                    setModalVisible(true)
                    setitem(item)
                    setma_sach_ph42693(item.ma_sach_ph42693)
                    settieu_de_ph42693(item.tieu_de_ph42693)
                    settac_gia_ph42693(item.tac_gia_ph42693)
                    setSo_luong_ph42693(item.So_luong_ph42693)
                    setdon_gia_2024_ph42693(item.don_gia_2024_ph42693)
                    setso_trang_ph42693(item.so_trang_ph42693)
                    setthe_loai_ph42693(item.the_loai_ph42693)
                    setnam_xuat_ban_ph42693(item.nam_xuat_ban_ph42693)
                    sethinh_anh_2024_ph42693(item.hinh_anh_2024_ph42693)

                }}
                key={item.id} style={{ padding: 20, margin: 10, borderWidth: 1, borderRadius: 10 }}>
                    <Text>Mã sách : {item.ma_sach_ph42693}</Text>
                    <Text>Tiêu đề : {item.tieu_de_ph42693}</Text>
                    <Pressable onPress={() => {
                        dispatch(addToCart(item))
                        ToastAndroid.show("Đã thêm vào giỏ hàng", 0)
                    }}
                        style={{ padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 10, backgroundColor: 'green', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Add to cart</Text>
                    </Pressable>
                </Pressable>
            ))}

            <ModalChitiet/>
        </View>
    )
}

export default DanhSach

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        margin: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})