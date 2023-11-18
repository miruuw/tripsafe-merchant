import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import style from './katalog.style';

const KatalogProduk = ({navigation}) => {
    let namaProduk = 'Produk xyz';
    let harga = 50000;
    return (
        <View>
        <ScrollView horizontal>
            <TouchableOpacity style={style.cardKategori}>
                <Text style={style.txtKategori}>Kategori Produk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.cardKategori}>
                <Text style={style.txtKategori}>Kategori Produk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.cardKategori}>
                <Text style={style.txtKategori}>Kategori Produk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.cardKategori}>
                <Text style={style.txtKategori}>Kategori Produk</Text>
            </TouchableOpacity>
        </ScrollView>

        <ScrollView >
            <View style={style.wrapperLink}>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                // onPress={() => navigation.navigate('DetailProduk')}
                >
                <View style={style.linkProduk}>
                    <Image
                    style={style.imgProduk}
                    source={require('../../assets/image/lokasi.png')} />
                    <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                    <Text style={style.txtHarga}>Rp {harga}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                // onPress={() => navigation.navigate('DetailProduk')}
                >
                <View style={style.linkProduk}>
                    <Image
                    style={style.imgProduk}
                    source={require('../../assets/image/lokasi.png')} />
                    <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                    <Text style={style.txtHarga}>Rp {harga}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                // onPress={() => navigation.navigate('DetailProduk')}
                >
                <View style={style.linkProduk}>
                    <Image
                    style={style.imgProduk}
                    source={require('../../assets/image/lokasi.png')} />
                    <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                    <Text style={style.txtHarga}>Rp {harga}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                // onPress={() => navigation.navigate('DetailProduk')}
                >
                <View style={style.linkProduk}>
                    <Image
                    style={style.imgProduk}
                    source={require('../../assets/image/lokasi.png')} />
                    <Text style={style.txtNamaProduk}>{namaProduk}</Text>
                    <Text style={style.txtHarga}>Rp {harga}</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{marginTop: 20, width: 400, height: 20}}></View>
        </ScrollView>
    </View>
    )
}

export default KatalogProduk

