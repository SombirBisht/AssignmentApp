import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../../src/features/drawer/home';
import { CustomDrawerContent } from '../components/custom-drawer-component';
import { LanguageSwitcher } from '../features/settings/language-switcher';
import { Notification } from '../features/drawer/notification';
import { About } from '../features/drawer/about';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
    const { t } = useTranslation();

    return (
        <Drawer.Navigator initialRouteName={'Home'} drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name={t('home')} component={HomeScreen} />
            <Drawer.Screen name={t('notification')} component={Notification} />
            <Drawer.Screen name={t('change_language')} component={LanguageSwitcher} />
            <Drawer.Screen name={t('about')} component={About} />
        </Drawer.Navigator>
    );
}

