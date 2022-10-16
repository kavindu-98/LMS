import React from 'react';
import {
    View,  
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Button,
    // Section,
    FlatList
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

import {
    IconButton,
    TextButton,
    VerticalCourseCard,
    LineDivider,
    CategoryCard,
    HorizontalCourseCard
} from "../../components"

import{
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    dummyData

} from "../../constants";

const Section =({ containerStyle, title, onPress, children }) => {
    return (
        <View
            style={{
                ...containerStyle
            }}
        >

            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text 
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                    >
                        {title}
                </Text>
                <TextButton
                    contentContainerStyle={{
                        width: 80,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="See All"
                    onPress={onPress}
                >


                </TextButton>

            </View>
                    {children}



        </View>
    )
}

const Home = () => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Greeting  */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ ...FONTS.h2 }}>Hello, Kavindu!</Text>
                    <Text 
                    style={{
                        color: COLORS.gray50,
                        ...FONTS.body3
                    }}>
                        Sunday, 16th Oct 2022
                    </Text>

                </View>

                {/* Notification */}

                <IconButton
                    icon={icons.notification}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                ></IconButton>
            </View>
        )
    }

    function renderStartLearning() {
        return (
            <ImageBackground
                source={images.bg_4}
                style={{
                     alignItems: 'flex-start',
                     marginTop: SIZES.padding,
                     marginHorizontal: SIZES.padding,
                     padding: 15
                }}

                imageStyle={{
                    borderRadius: SIZES.radius
                }}
                >
                    {/* info */}
                     <View>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body2
                            }}
                            >
                            INTE 31273 
                        </Text>
                        <Text 
                        
                        style={{
                            color: COLORS.white,
                            ...FONTS.body2
                        }}>
                            Integrative Programming and Technologies(20/21)
                        </Text>
                        <Text 
                        
                        style={{
                            marginTop: SIZES.radius,
                            color: COLORS.white,
                            ...FONTS.body4
                        }}>
                            By Mr. Asanka Sanjaya Herath
                        </Text>
                     </View>
                     {/* Image */}
                      <Image
                        source={images.laptop}
                        style={{
                            width: "89%",
                            height: 120,
                            marginTop: SIZES.padding,
                            marginBottom: SIZES.radius
                        }}
                      />

                      {/* button */}
                      <TextButton
                        label="Start Learning"
                        contentContainerStyle={{
                            height: 40,
                            paddingHorizontal: SIZES.padding,
                            borderRadius: 20,
                            backgroundColor: COLORS.white
                        }}
                        labelStyle={{
                            color: COLORS.black
                        }}
                       >

                      </TextButton>
                        </ImageBackground>
        )
    }

//         function renderCourses() {
//         return (

           
//             <FlatList
//                 horizontal
//                 data={dummyData.courses_list_1}
//                 listKey="Courses"
//                 keyExtractor={item => 'Courses-${item.id}'}
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={{
//                     marginTop: 50
//                 }}
//                 renderItem={({ item, index}) => (
//  <VerticalCourseCard
//     containerStyle={{
        
//         marginLeft: index == 0 ? SIZES.
//         padding: SIZES.radius,
//         marginRight: index == dummyData.
//         courses_list_1.length - 1 ? SIZES.
//         padding : 0
//     }}
//     course={item}
// /> 
//                 )}
//             />


//         )

      
//     }

    // function renderCategories() {
    //     return (
    //         <Section
    //             title="Categories"
    //         >

    //         <FlatList
    //             horizontal
    //             data={dummyData.categories}
    //             listKey="Categories"
    //             keyExtractor={item => 'Categories-${item.id}'}
    //             showsHorizontalScrollIndicator={false}
    //             contentContainerStyle={{
    //                 marginTop: SIZES.padding
    //             }}
    //             renderItem={({ item, index }) => (
    //                     <CategoryCard
    //                         category={item}
    //                         containerStyle={{
    //                             marginLeft: index == 0 ? SIZES.padding: SIZES.base,
    //                             marginRight: index == dummyData.categories.length - 1 ? SIZES.padding: 0
    //                         }}
    //                     />
    //             )}

    //             />

    //         </Section>
    //     )
    // }

    function renderPopularCourses() {
        return(
            <Section
            title="Popular Courses"
            containerStyle={{
                marginTop: 30
            }}
        >
    
        <FlatList
           
            data={dummyData.courses_list_2}
            listKey="PopularCourses"
            scrollEnabled={false}
            keyExtractor={item => 'PopularCourses-${item.id}'}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding
            }}
            renderItem={({ item, index }) => (
                   <HorizontalCourseCard
                        course={item}
                        containerStyle={{
                            marginVertical: SIZES.padding,
                            marginTop: index == 0 ? SIZES.radius : SIZES.padding
                        }}
                   
                   >
    
                   </HorizontalCourseCard>
            )}
            ItemSeparatorComponent={() => (
                <LineDivider
                        lineStyle={{
                            backgroundColor: COLORS.gray20
                        }}
                
                />
            )}
    
            />
    
        </Section>
        )
     

    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
 
        {/* header */}
        {renderHeader()}
        {/* Content  */}
        <ScrollView
             contentContainerStyle={{
                paddingBottom: 150
             }} 
             showsVerticalScrollIndicator={false}
        >
            {/* Start Learning */}
             {renderStartLearning()}

             {/* Courses */}
             {/* {renderCourses()} */}

             <LineDivider
                lineStyle={{
                    marginVertical: SIZES.padding
                }}
             />

             {/* Categories */}
             {/* {renderCategories()} */}

             {/* popular Courses */}
             {renderPopularCourses()}
        </ScrollView>

          
        </View>
    )
}

export default Home;