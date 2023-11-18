import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    formKategori: {
        borderBottomWidth: 1,
        fontSize: 15,
        borderColor: '#EA4335',
        marginTop: 10
    },
    wrapForm: {
        marginHorizontal: 10
    },
    txtForm: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginTop: 15,
        marginLeft: 10
    },
    txtUnggah: {
        marginVertical: 10,
        color: 'grey'
    },
    touchUnggah: {
        height: 140,
        backgroundColor: '#D0D0D0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTouch: {
        color: 'grey',
        fontWeight: '500'
    },
    formHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        fontSize: 15,
        borderColor: '#EA4335',
        marginTop: 10
    },
    icoHarga: {
        top: 10
    },
    flexJumlah: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    flexTouch: {
        flexDirection: 'row',
    },
    jumlah: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    tambahBtm: {
        marginTop: 20,
        width: 370,
        height: 45,
        alignItems: 'center',
        backgroundColor: '#EA4335',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtTambah: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    txtDaftarProduk: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },
    // Card Produk
    wrapCard: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#D0D0D0',
        height: 100,
        borderRadius: 10
    },
    imgKategori: {
        height: 80,
        width: 80
    },
    flexCard: {
        marginLeft: 10,
    },
    txtKategoriName: {
        color: '#000',
        fontSize: 15
    },
    wrapCrud: {
        flexDirection: 'row',
        top: 50,
        left: 170,
        position: 'absolute'
    },
    wrapEdit: {
        backgroundColor: '#FBBC04',
        height: 30,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapDelete: {
        backgroundColor: '#EA4335',
        height: 30,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    flexStok: {
        flexDirection: 'row'
    },
    hargaProduk: {
        color: '#EA4335'
    },
    kategori: {
        color: 'grey'
    },
    txtJ: {
        color: 'grey'
    },
    txtR: {
        fontWeight: 'bold',
        color: '#000'
    }
})

export default styles;