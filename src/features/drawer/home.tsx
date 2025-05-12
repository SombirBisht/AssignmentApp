import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { useTranslation } from "react-i18next";
import { MoviesData } from "../../types/home";
import { useState } from "react";

export const HomeScreen = () => {
    const { t } = useTranslation();
    const [refresh, setRefresh] = useState(false)
    let moviesData = [
        { id: '1', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss'), description: t('description_text') },
        { id: '2', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick'), description: t('description_text') },
        { id: '3', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man'), description: t('description_text') },
        { id: '4', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman'), description: t('description_text') },
        { id: '5', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss'), description: t('description_text') },
        { id: '6', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick'), description: t('description_text') },
        { id: '7', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man'), description: t('description_text') },
        { id: '8', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman'), description: t('description_text') },
        { id: '9', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss'), description: t('description_text') },
        { id: '10', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick'), description: t('description_text') },
    ];
    const [movies, setMovies] = useState(moviesData)

    const renderItem = ({ item }: { item: MoviesData }) => (
        <View style={styles.item}>
            <Image
                style={styles.tinyLogo}
                source={{ uri: item.url }}
            />
            <View style={{ marginTop: 5 }}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    );

    function onEndReach() {
        if (movies.length > 10)
            return

        setRefresh(true)
        let newMovies = [
            { id: '11', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man'), description: t('description_text') },
            { id: '12', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman'), description: t('description_text') },
            { id: '13', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss'), description: t('description_text') },
            { id: '14', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick'), description: t('description_text') },
            { id: '15', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man'), description: t('description_text') },
            { id: '16', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman'), description: t('description_text') },
            { id: '17', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('avatarss'), description: t('description_text') },
            { id: '18', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('maverick'), description: t('description_text') },
            { id: '19', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('spider_man'), description: t('description_text') },
            { id: '20', url: 'https://www.gstatic.com/webp/gallery/1.jpg', title: t('batman'), description: t('description_text') },
        ];
        setTimeout(() => {
            setMovies([...movies, ...newMovies])
            setRefresh(false)
        }, 5000);
    }

    return (
        <View style={styles.container}>
            {/* Movies list */}
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                initialNumToRender={4}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
                refreshing={refresh}
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