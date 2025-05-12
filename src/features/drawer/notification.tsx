import { useTranslation } from "react-i18next";
import { Text, View } from "react-native"

export const Notification = () => {
    const { t } = useTranslation();

    return (
        <View>
            <Text style={{ alignSelf: 'center', marginTop: 50 }}>{t('notification_screen')}</Text>
        </View>
    );
}