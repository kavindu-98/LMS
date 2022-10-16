import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity

} from 'react-native';

import { SIZES, COLORS, FONTS, icons} from "../constants";
const VerticalCourseCard = ({ containerStyle, course}) => {
    return (
        <TouchableOpacity 
            style={{
                width: 270,
                ...containerStyle
            }}
        >
            {/* Thumnail */}
{/* <Image
    source={course.thumbnail}
    resizeMode="cover"
    style={{
        width: "100%",
        height: 150,
        marginBottom: SIZES.radius,
        borderRadius: SIZES.radius
    }}
/> */}

{/* Details */}

<View
    style={{
        flexDirection: 'row'
    }}
>
    {/* play */}
    {/* <View
    style={{
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: COLORS.primary
    }}
>
    <Image
        source={icons.play}
        resizeMode="contain"
        style={{
            width: 20,
            height: 20
        }}
    />



</View> */}
    

</View>

        </TouchableOpacity>
    )
}


export default VerticalCourseCard;
