import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { useTranslation } from "react-i18next";
import { MoviesData } from "../../types/home";
import { useState } from "react";

export const HomeScreen = () => {
    const { t } = useTranslation();
    const [refresh, setRefresh] = useState(false)
    let moviesData = [
        { id: '1', url: 'https://api.slingacademy.com/public/sample-products/1.png', title: t('avatarss'), description: t('description_text') },
        { id: '2', url: 'https://api.slingacademy.com/public/sample-products/2.png', title: t('maverick'), description: t('description_text') },
        { id: '3', url: 'https://api.slingacademy.com/public/sample-products/3.png', title: t('spider_man'), description: t('description_text') },
        { id: '4', url: 'https://api.slingacademy.com/public/sample-products/4.png', title: t('batman'), description: t('description_text') },
        { id: '5', url: 'https://api.slingacademy.com/public/sample-products/5.png', title: t('avatarss'), description: t('description_text') },
        { id: '6', url: 'https://api.slingacademy.com/public/sample-products/6.png', title: t('maverick'), description: t('description_text') },
        { id: '7', url: 'https://api.slingacademy.com/public/sample-products/7.png', title: t('spider_man'), description: t('description_text') },
        { id: '8', url: 'https://api.slingacademy.com/public/sample-products/8.png', title: t('batman'), description: t('description_text') },
        { id: '9', url: 'https://api.slingacademy.com/public/sample-products/9.png', title: t('avatarss'), description: t('description_text') },
        { id: '10', url: 'https://api.slingacademy.com/public/sample-products/10.png', title: t('maverick'), description: t('description_text') },
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
            { id: '11', url: 'https://api.slingacademy.com/public/sample-products/11.png', title: t('spider_man'), description: t('description_text') },
            { id: '12', url: 'https://api.slingacademy.com/public/sample-products/12.png', title: t('batman'), description: t('description_text') },
            { id: '13', url: 'https://api.slingacademy.com/public/sample-products/13.png', title: t('avatarss'), description: t('description_text') },
            { id: '14', url: 'https://api.slingacademy.com/public/sample-products/14.png', title: t('maverick'), description: t('description_text') },
            { id: '15', url: 'https://api.slingacademy.com/public/sample-products/15.png', title: t('spider_man'), description: t('description_text') },
            { id: '16', url: 'https://api.slingacademy.com/public/sample-products/16.png', title: t('batman'), description: t('description_text') },
            { id: '17', url: 'https://api.slingacademy.com/public/sample-products/17.png', title: t('avatarss'), description: t('description_text') },
            { id: '18', url: 'https://api.slingacademy.com/public/sample-products/18.png', title: t('maverick'), description: t('description_text') },
            { id: '19', url: 'https://api.slingacademy.com/public/sample-products/19.png', title: t('spider_man'), description: t('description_text') },
            { id: '20', url: 'https://api.slingacademy.com/public/sample-products/20.png', title: t('batman'), description: t('description_text') },
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