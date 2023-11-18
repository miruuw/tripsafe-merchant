import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    cardKategori: {
        width: 150,
        height: 40,
        marginVertical: 15, 
        marginLeft: 10,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EA4335'
    },
    txtKategori: {
        color: '#EA4335'
    },
    wrapperLink: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 411,
        padding: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkProduk: {
        width: 180,
        height: 180,
        borderRadius: 10, 
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        elevation: 3
    },
    imgProduk: {
        width: 180,
        height: 120,
        borderRadius: 10
    },
    txtNamaProduk: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 16,
        overflow: 'hidden',
        fontWeight: '700'
    },
    txtHarga: {
        marginLeft: 10,
        color: '#EA4335',
        fontWeight: '500'
    }
})

export default style