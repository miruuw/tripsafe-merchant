import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './kategori.style';

const CardKategori = () => {
    return (
        <View style={styles.wrapCard}>
            <Image
                style={styles.imgKategori}
                source={require('../../assets/image/lokasi.png')} />
            <View style={styles.flexCard}>
                <Text style={styles.txtKategoriName}>Nama Kategori</Text>
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

const KelolaKategori = () => {
    return (
        <ScrollView>
            <View style={styles.wrapForm}>
                <Text style={styles.txtForm}>Form Penambahan Kategori</Text>
                <TextInput
                    style={styles.formKategori}
                    placeholder='Masukan Nama Kategori'
                />
                <Text style={styles.txtKeterangan}>Tambahkan Gambar / Icon Kategori</Text>
                <TouchableOpacity
                    style={styles.formImage}>
                    <Image source={require('../../assets/icon/upload-ico.png')} />
                    <Text style={styles.txtUpload}>Unggah Gambar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tambahBtm}>
                    <Text style={styles.txtTambah}>Tambah</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.judulKategori}>Daftar Kategori</Text>
            </View>

            <View>
                <CardKategori />
                <CardKategori />
                <CardKategori />
                <CardKategori />
            </View>
        </ScrollView>
    )
}

export default KelolaKategori