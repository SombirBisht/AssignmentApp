import { useTranslation } from "react-i18next";
import { Text, View } from "react-native"

export const About = () => {
    const { t } = useTranslation();

    return (
        <View>
            <Text style={{ alignSelf: 'center', marginTop: 50 }}>{t('about_screen')}</Text>
        </View>
    );
}