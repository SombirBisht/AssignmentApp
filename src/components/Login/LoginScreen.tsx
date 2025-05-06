import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { emailPattern, passwordPattern } from "../../utils/constant";
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from "../../redux/store";
import { saveCredentials } from "../../redux/reducer";

export const LoginScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const validateEmail = (email: string) => email.match(emailPattern);
  const validatePassword = (password: string) => password.match(passwordPattern);

  const handleEmailChange = (email: string) => {
    setEmail(email);
    validateForm(email, password);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    validateForm(email, password);
  };

  const validateForm = (email: string, password: string) => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  };

  const handleSubmit = () => {
    dispatch(saveCredentials(email));
    setEmail('');
    setPassword('')
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('login_form')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('email')}
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
      />
      {!validateEmail(email) && email.length > 0 && (
        <Text style={styles.errorText}>{t('please_enter_valid_email_address')}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder={t('password')}
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      {!validatePassword(password) && password.length > 0 && (
        <Text style={styles.errorText}>{t('password_validation')}</Text>
      )}

      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: isSubmitEnabled ? '#212f3c' : '#E0E0E0' }]} onPress={handleSubmit} disabled={!isSubmitEnabled} >
        <Text style={styles.buttonStyle}>{t('submit')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#212f3c',
    alignSelf: 'center'
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  buttonContainer: {
    borderRadius: 20,
    marginHorizontal: 50,
    marginBottom: 20,
    width: '80%',
    marginTop: 20
  },
  buttonStyle: {
    padding: 10,
    color: 'white',
    alignSelf: 'center'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});