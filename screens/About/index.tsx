import Header from '@components/Header'
import styles from '@styles/About'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title='About' />
            <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
                <View style={styles.para}>
                    <Text style={styles.heading}>About Kmart</Text>
                    <Text style={styles.body}>
                        Welcome to the Kmart app, your one-stop online shopping destination for groceries and more! With our user-friendly interface and a wide range of products, we aim to provide you with a seamless shopping experience right at your fingertips.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Discover a World of Convenience</Text>
                    <Text style={styles.body}>
                        At Kmart, we understand the value of time and convenience in today's fast-paced world. Our app allows you to browse and shop for groceries and other items from the comfort of your home or on the go. With just a few taps, you can have your favorite products delivered straight to your doorstep, saving you precious time and effort.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Key Features</Text>
                    <Text style={styles.body}>
                        <Text style={styles.bold}>1. Online Grocery Shopping:</Text> Explore our vast collection of groceries and essentials, conveniently categorized to help you find what you need quickly. From fresh produce to pantry staples, we have everything to cater to your dietary preferences.
                        {'\n\n'}
                        <Text style={styles.bold}>2. Secure Online Payments:</Text> We prioritize the security of your transactions. Our app uses Razorpay payment gateway that provides a safe and encrypted platform for you to make seamless online payments. You can choose from various payment options, including credit/debit cards, digital wallets, and more.
                        {'\n\n'}
                        <Text style={styles.bold}>3. Account Management:</Text> Create and manage your Kmart account effortlessly. Keep track of your order history, manage your personal information, and easily reorder your favorite items with just a few taps.
                        {'\n\n'}
                        <Text style={styles.bold}>4. Efficient Search:</Text> Looking for a specific item? Our powerful search functionality allows you to find products across a wide variety of categories. Simply type in what you're looking for, and we'll show you relevant results, helping you find exactly what you need in no time.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Experience Seamless Shopping</Text>
                    <Text style={styles.body}>
                        Kmart is committed to providing you with a smooth and hassle-free shopping experience. We constantly strive to improve our app's performance and usability to ensure that every interaction exceeds your expectations. Your satisfaction is our priority.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.body}>
                        Thank you for choosing Kmart as your preferred online shopping destination. Start exploring our app now and enjoy the convenience of shopping for groceries and more, anytime, anywhere!
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default About