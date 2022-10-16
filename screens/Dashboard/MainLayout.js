

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import {
    Home,
    Profile,
    Search

} from "../../screens";
import {
    COLORS,
    SIZES,
    FONTS,
    constants

} from "../../constants";
import { measure } from 'react-native-reanimated';

const bottom_tabs = constants.bottom_tabs.map((bottom_tab) => ({
    ...bottom_tab,
    ref: React.createRef()
}))

const TabIndicator = ({ measureLayout, scrollX }) => {

    const inputRange = bottom_tabs.map((_, i) => i * SIZES.width)

    const tabIndicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.width)
    })
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x)
    })
    return (
        <Animated.View 
            style={{
                position: 'absolute',
                left: 0,
                height: "100%",
                width: tabIndicatorWidth,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                transform: [{
                    translateX
                }]
            }}
        />
    )
}

const Tabs = ( { scrollX , onBootomTabPress }) => {

    const containerRef = React.useRef()
    const [measureLayout, setMeasureLayout] = React.useState([])

    React.useEffect(() => {
        let ml = []

        bottom_tabs.forEach(bottom_tab => {
            bottom_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height 
                    })

                    if(ml.length === bottom_tabs.length) {
                        setMeasureLayout(ml)
                    }
                }
            )
        })
    }, [containerRef.current])

        return (
            <View 
                ref={containerRef}
                style ={{
                    flex: 1,
                    flexDirection: 'row'
                }}
                >
                    {/* Tab Indicator */}
                    {measureLayout.length > 0 && <TabIndicator
                    measureLayout={measureLayout} scrollX={scrollX}
                    />}

                    {/* tabs */}
                    {bottom_tabs.map((item, index) =>  {
                        return (
                            <TouchableOpacity
                                key={'BottomTab-${index}'}
                                ref={item.ref}
                                style={{
                                    flex:1,
                                    paddingHorizontal: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}

                                onPress={() => onBootomTabPress(index)}
                                >
                                    <Image
                                        source={item.icon}
                                        resizeMode="contain"
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}
                                    />
                                    <Text
                                        style={{
                                            marginTop: 3,
                                            color: COLORS.white,
                                            ...FONTS.h3
                                        }}
                                    >
                                        {item.label}

                                    </Text>



                            </TouchableOpacity>
                        )
                    })}
                </View>
        )

}




const MainLayout = () => {

    const flatListRef = React.useRef()
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const onBootomTabPress = React.useCallback(bottomTabIndex => {
        flatListRef?.current?.scrollToOffset({
            offset: bottomTabIndex * SIZES.width
        })
    })

    function renderContent() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <Animated.FlatList
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={SIZES.width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => 'Main-${item.id}'}
                    onScroll={
                            Animated.event([
                                { nativeEvent: { contentOffset: { x: scrollX } }}
                            ], {
                                useNativeDriver: false
                            })
                    }
                        renderItem={({item, index}) => {
                            return (
                                <View
                                    style={{
                                        height: SIZES.height,
                                        width: SIZES.width
                                    }}
                                
                                >
                                    {item.label == constants.screens.home && <Home/>}
                                    {item.label == constants.screens.search && <Search/>}
                                    {item.label == constants.screens.profile && <Profile/>}


                                </View>
                            )
                        }}
                    
                />


            </View>
        )
    }

    function renderBottomTab() {
        return (
            <View
                style={{
                    alignItems: 'center' ,
                   
                    paddingVertical: SIZES.base
                }}
                >
                        <Shadow
                            // size={[SIZES.width - (SIZES.padding * 2), 85]}
                        >
                            <View
                                style={{
                                   // flex: 1,
                                    width: SIZES.width*0.95,
                                    height: SIZES.height*0.11,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: COLORS.primary3
                                }}
                             >
                                <Tabs
                                    scrollX={scrollX}
                                    onBootomTabPress={onBootomTabPress}
                                />

                            </View>


                        </Shadow>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* content */}
            {renderContent()}

            {/* Bottom Tab */}
            {renderBottomTab()}
         
        </View>
    )
}

export default MainLayout;
