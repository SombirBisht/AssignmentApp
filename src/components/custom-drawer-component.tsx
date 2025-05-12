import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../redux/store";
import { logout } from "../redux/reducer";

export function CustomDrawerContent(props: any) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        Alert.alert(
            t('logout'),
            t('sure_to_logout'),
            [
                {
                    text: t('cancel'),
                    onPress: () => { },
                },
                {
                    text: t('logout'),
                    onPress: async () => {
                        dispatch(logout());
                        props.navigation.replace('Auth');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <DrawerItemList {...props} />
            <View style={styles.logoutContainer}>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logoutText}>{t('logout')}</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    logoutContainer: {
        marginTop: 'auto',
        padding: 10,
        borderTopWidth: 1,
        justifyContent: 'flex-end',
    },
    logoutText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});