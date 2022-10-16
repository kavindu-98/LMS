import React from 'react'
import { 
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    Text
 } from 'react-native'

 import { COLORS, FONTS, SIZES , icons } from '../constants'

const HorizontalCourseCard = ({ course, containerStyle }) => {
  return (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            ...containerStyle
        }}
    >
        {/* thumbnail */}
        <ImageBackground
            source={course.thumbnail}
            resizeMode="cover"
            style={{
                width: 130,
                height: 130,
                marginBottom: SIZES.radius
            }}
            imageStyle={{
                borderRadius:SIZES.radius
            }}
        >
            <View
               style={{
                    position: 'absolute',
                    top: 10,
                    // right: 10,
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: COLORS.white
               }} 
            >

                <Image 
                    source={icons.favourite}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: course.is_favourite ? COLORS.secondary
                         : COLORS.additionalColor4
                    }}

                
                />


            </View>


        </ImageBackground>

        {/* Details */}
        <View 
            style={{
                flex: 1,
                marginLeft: SIZES.base
            
            }}
        >
            {/* Title */}

            
            <Text
                style={{
                    ...FONTS.h3,
                    fontSize: 18
                }}
            >
            {course.title}
            </Text>
            {/* Instructor & duration */}

            <View 
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.base
                }}
            >
                    <Text
                        style={{
                            ...FONTS.body4,
                            
                        }}
                    >
                    By {course.instructor}
                </Text>
                

            </View>

        </View>





    </TouchableOpacity>
  )
}

export default HorizontalCourseCard