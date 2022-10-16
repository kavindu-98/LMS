
import React from 'react'
import { 
        View,
        TouchableOpacity,
        ImageBackground,
        Text
     } from 'react-native'

     import { COLORS, FONTS, SIZES  } from '../constants'

const CategoryCard = ({ category, containerStyle }) => {
  return (
    <TouchableOpacity>
        <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
            height: 150,
            width: 220,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            justifyContent: 'flex-end',
            ...containerStyle 
        }}
        />
    </TouchableOpacity>
  )
}

export default CategoryCard