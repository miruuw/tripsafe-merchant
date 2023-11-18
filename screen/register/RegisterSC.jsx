import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import client from '../../api/client';
import { useLogin } from '../../context/LoginProvider';
import FormInput from '../../components/FormInput';
import styles from './register.style';

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Nama tidak valid!')
    .required('Nama wajib diisi!'),
  email: Yup.string().email('Email tidak valid!').required('Email wajib diisi!'),
  password: Yup.string()
    .trim()
    .min(8, 'Kata sandi terlalu pendek!')
    .required('Kata sandi wajib diisi!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Kata sandi tidak cocok!'
  ),
});

const RegisterSC = ({ navigation }) => {
  const { setProfile, setIsLoggedIn } = useLogin();

  const signUp = async (values, formikActions) => {
    try {
      const res = await client.post('/register-merchant', {
        ownerName: values.ownerName,
        businessName: values.businessName,
        email: values.email,
        password: values.password,
      });

      if (res.data.success) {
        // Lakukan sesuatu dengan respon dari server jika diperlukan
        // ...

        // Set profil pengguna dan tandai pengguna sebagai masuk
        setProfile(res.data.user);
        setIsLoggedIn(true);
      }

      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } catch (error) {
      console.error('Error during sign up:', error.message);
      // Tampilkan pesan kesalahan kepada pengguna jika diperlukan
      // ...
      formikActions.setSubmitting(false);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.WrapperRegister}>
        <Text style={styles.TxtRegis}>Selamat Datang</Text>
        <Text style={styles.TxtRegis2}>Silahkan Buat Akun Anda</Text>
      </View>

      <View style={styles.WrapperInput}>
        <Formik
          initialValues={{
            ownerName: '',
            businessName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={signUp}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <FormInput
            value={values.ownerName}
            error={touched.ownerName && errors.ownerName}
            onChangeText={handleChange('ownerName')}
            onBlur={handleBlur('ownerName')}
            label='Nama Pemilik'
            placeholder='Masukkan nama pemilik'
          />
          <FormInput
            value={values.businessName}
            error={touched.businessName && errors.businessName}
            onChangeText={handleChange('businessName')}
            onBlur={handleBlur('businessName')}
            label='Nama Bisnis'
            placeholder='Masukkan nama bisnis'
          />
          <FormInput
            value={values.email}
            error={touched.email && errors.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            autoCapitalize='none'
            label='Email'
            placeholder='pengguna@email.com'
          />
          <FormInput
            value={values.password}
            error={touched.password && errors.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            autoCapitalize='none'
            secureTextEntry
            label='Password'
            placeholder='********'
          />
          <FormInput
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            autoCapitalize='none'
            secureTextEntry
            label='Confirm Password'
            placeholder='********'
          />
              <TouchableOpacity
                disabled={isSubmitting}
                onPress={handleSubmit}
                style={styles.viewButton}>
                <Text style={styles.textLogin}>Daftar</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>Sudah Memiliki Akun?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}>
            <Text style={{ color: "#EA4335", fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterSC;
