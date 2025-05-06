import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { useTranslation } from "react-i18next";

interface MoviesData {
    id: string
    url: string
    title: string
}

export const HomeScreen = () => {
    const { t } = useTranslation();

    const movies = [
        { id: '1', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss') },
        { id: '2', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick') },
        { id: '3', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man') },
        { id: '4', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman') },
        { id: '5', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss') },
        { id: '6', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick') },
        { id: '7', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man') },
        { id: '8', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman') },
    ];

    const renderItem = ({ item }: { item: MoviesData }) => (
        <View style={styles.item}>
            <Image
                style={styles.tinyLogo}
                source={{ uri: item.url }}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    item: {
        flex: 1,
        margin: 10,
        backgroundColor: '#f4f4f4',
        borderRadius: 8,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        padding: 10
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        height: 50,
        color: 'black',
    },
    movieImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    buttonContainer: {
        borderRadius: 20,
        marginHorizontal: 50,
        marginBottom: 20,
        width: '80%',
        marginTop: 20,
        backgroundColor: '#212f3c'
    },
    buttonStyle: {
        padding: 10,
        color: 'white',
        alignSelf: 'center'
    },
    tinyLogo: {
        height: 100,
    },
});