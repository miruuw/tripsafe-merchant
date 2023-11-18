import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import styles from './produk.style';


const CardProduk = () => {
    let priceProduk = 50000;
    let stokJumlah = 99;
    return (
        <View style={styles.wrapCard}>
            <Image
                style={styles.imgKategori}
                source={require('../../assets/image/lokasi.png')} />
            <View style={styles.flexCard}>
                <Text style={styles.txtKategoriName}>Nama Kategori</Text>
                <Text style={styles.kategori}>Kategori</Text>
                <Text style={styles.hargaProduk}>Rp {priceProduk}</Text>

                <View style={styles.flexStok}>
                    <Text style={styles.txtJ}>Stok :</Text>
                    <Text style={styles.txtR}>{stokJumlah}</Text>
                </View>
                <View style={styles.wrapCrud}>
                    <TouchableOpacity
                        style={styles.wrapEdit}>
                        <Image source={require('../../assets/icon/edit-ico.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.wrapDelete}>
                        <Image source={require('../../assets/icon/delete-ico.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const KelolaProduk = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.txtForm}>Form Pemabahan Produk</Text>
                <View style={styles.wrapForm}>
                    <TextInput
                        style={styles.formKategori}
                        placeholder='Masukan Nama Produk' />
                    <TextInput
                        style={styles.formKategori}
                        placeholder='Pilih Kategori' />
                    <View style={styles.wrapUnggah}>
                        <Text style={styles.txtUnggah}>Tambahkan Gambar / Icon Produk</Text>
                        <TouchableOpacity style={styles.touchUnggah}>
                            <Image source={require('../../assets/icon/upload-ico.png')} />
                            <Text style={styles.txtTouch}>Unggah Gambar</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.formKategori}
                        placeholder='Masukan Seri Produk / Nomor Seri'
                    />
                    <TextInput
                        style={styles.formKategori}
                        placeholder='masukan Deskripsi Produk'
                    />
                    <View
                        style={styles.formHarga}>
                        <TextInput

                            placeholder='Buat Harga Produk'
                        />
                        <Image style={styles.icoHarga} source={require('../../assets/icon/money.png')} />
                    </View>
                    <View style={styles.flexJumlah}>
                        <Text style={styles.txtJumlah}>Jumlah Stok Produk</Text>
                        <View style={styles.flexTouch}>
                            <TouchableOpacity
                                style={styles.min}>
                                <Image source={require('../../assets/icon/plus.png')} />
                            </TouchableOpacity>
                            <Text style={styles.jumlah}>{resultJumlah}</Text>
                            <TouchableOpacity
                                style={styles.plus}>
                                <Image source={require('../../assets/icon/minus.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.tambahBtm}>
                        <Text style={styles.txtTambah}>Tambah</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.txtDaftarProduk}>Daftar Yang Sudah Ditambahkan</Text>
                {/* card produk */}
                <CardProduk />
                <CardProduk />
                <CardProduk />
            </View>
        </ScrollView>
    )
}

export default KelolaProduk;