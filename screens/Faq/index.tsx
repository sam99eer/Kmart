import Accordion from '@components/Accordion'
import Header from '@components/Header'
import { FAQ_DATA } from '@data/FAQs'
import styles from '@styles/Faq'
import React from 'react'
import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Faq = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title='FAQs' />
            <FlatList
                data={FAQ_DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Accordion title={item.title} body={item.text} />}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Text style={styles.txt}>
                    Welcome to the FAQs section of the Kmart app. Here, we have compiled a list of commonly asked questions to help you navigate and make the most of your online shopping experience. If you have any additional queries, please feel free to contact our customer support team for further assistance.
                </Text>}
                ListFooterComponent={<Text style={styles.txt}>
                    We hope these FAQs have provided helpful information about using the Kmart app. Should you require further assistance, we are always ready to assist you. Happy shopping with Kmart!
                </Text>}
            />
        </SafeAreaView>
    )
}

export default Faq