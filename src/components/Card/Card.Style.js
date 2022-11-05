import { StyleSheet, Dimensions} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        margin: 5,
        width: (Dimensions.get("window").width -20 ) / 2,
        height: 150,
    }
})