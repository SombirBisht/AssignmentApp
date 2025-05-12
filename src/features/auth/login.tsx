import { useCallback, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { emailPattern, passwordPattern } from "../../constants/constant";
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from "../../redux/store";
import { saveCredentials } from "../../redux/reducer";
import { CustomTextInput } from "../../components/custom-text-input";
import { CustomButton } from "../../components/custom-button";

export const LoginScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // validate email and password
  const validateEmail = useCallback((email: string) => emailPattern.test(email), []);
  const validatePassword = useCallback((password: string) => passwordPattern.test(password), []);

  // form validation
  const validateForm = (email: string, password: string) => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  };

  // on Email change
  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
    validateForm(email, password);
  }, [password, validateForm]);

  // on Password change
  const handlePasswordChange = useCallback((password: string) => {
    setPassword(password);
    validateForm(email, password);
  }, [email, validateForm]);

  // submit form
  const handleSubmit = useCallback(() => {
    dispatch(saveCredentials(email));
    setEmail('');
    setPassword('')
    navigation.replace('Drawer');
  }, [dispatch, email, navigation]);

  return (
    <View style={styles.container}>
      {/* App logo */}
      <Image
        source={require('../../../src/assets/logo.png')}
        style={{ height: '30%', width: '100%', marginBottom:20, alignSelf: 'center' }}
      />

      {/* Email section */}
      <Text style={styles.label}>{t('email')}</Text>
      <CustomTextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder={t('email')}
        keyboardType="email-address"
      />
      {!validateEmail(email) && email.length > 0 && (
        <Text style={styles.errorText}>{t('please_enter_valid_email_address')}</Text>
      )}

      {/* Password section */}
      <Text style={styles.label}>{t('password')}</Text>
      <CustomTextInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder={t('password')}
        secureTextEntry
      />
      {!validatePassword(password) && password.length > 0 && (
        <Text style={styles.errorText}>{t('password_validation')}</Text>
      )}

      {/* Login button */}
      <CustomButton
        title={t('login')}
        onPress={handleSubmit}
        isEnabled={isSubmitEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
});