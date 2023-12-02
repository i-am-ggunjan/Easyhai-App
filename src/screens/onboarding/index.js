import { View, Text, StyleSheet, FlatList, Animated, TouchableOpacity } from 'react-native'
import OnboardingItems from '../../components/cards/OnboardingItem'
import { useRef, useState } from 'react'
import { Color } from '../../styles/colors'
import OnboardingPaginator from '../../components/buttons/OnboardingPaginator'
import OnboardingNextBtn from '../../components/buttons/OnboardingNextBtn'
import PrimaryBtn from '../../components/buttons/PrimaryBtn'

const slides = [
    {
        id: 1, title: "Personalized Learning Paths", description: "We will acurte you with most learning experiences that fits your needs.", image: require('../../assets/images/Onboarding.png')
    },
    {
        id: 2, title: "Flexible Scheduling", description: "Study Your Convenience anywhere at anytime.Your anytime access with best instructor and community", image: require('../../assets/images/Onboarding.png')
    },
    {
        id: 3, title: "Engage with your Experts", description: "Connect with Your  industry experts, experienced instructors and varient community", image: require('../../assets/images/Onboarding.png')
    },
]

const Onboarding = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    // console.log("Current Index ::: ", currentIndex)
    const scrollX = useRef(new Animated.Value(0)).current
    // console.log("Scroll X ::: ", scrollX)
    const slideRef = useRef(null)
    const viewableItemsChange = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slideRef.current.scrollToIndex({ index: currentIndex + 1 })
        }
        else {
            console.log("Last Item", currentIndex)
        }
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={[styles.container]}>
                    <FlatList
                        data={slides} renderItem={({ item, index }) => <OnboardingItems item={item} index={index} scrollX={scrollX} />}
                        keyExtractor={(item) => item?.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={viewableItemsChange}
                        viewabilityConfig={viewConfig}
                        ref={slideRef}
                    />
                    <OnboardingPaginator data={slides} scrollX={scrollX} />
                </View>

                <View style={{ flex: 1 }}>
                    <OnboardingNextBtn currentIndex={currentIndex} lastLength={slides.length - 1} scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
                </View>
            </View>
        </>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    }
})