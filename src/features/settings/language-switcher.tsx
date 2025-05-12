import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../components/custom-button';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ alignSelf: 'center', marginTop: 50 }}>{t('change_language_screen')}</Text>
      <View style={styles.bottomButtons}>
        <CustomButton
          title={"English"}
          onPress={() => handleLanguageChange('en')}
          isEnabled={true}
          buttonStyle={{ width: '40%', marginHorizontal: 25 }}
        />
        <CustomButton
          title={"العربية"}
          onPress={() => handleLanguageChange('ar')}
          isEnabled={true}
          buttonStyle={{ width: '40%', marginHorizontal: 25 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomButtons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonView: {
    flex: 1,
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: '#212f3c'
  },
  buttonText: {
    padding: 10,
    color: 'white',
    alignSelf: 'center'
  }
})



