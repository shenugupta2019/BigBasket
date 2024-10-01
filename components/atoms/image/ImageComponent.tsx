// components/atoms/GenericImage.tsx

import React, { useState } from 'react';
import { Image, ImageProps, StyleSheet, ImageSourcePropType, ImageStyle, View, ActivityIndicator } from 'react-native';
import imageStyles from './ImageComponent.styles';

interface GenericImageProps extends Omit<ImageProps, 'source'> {
  source?: string | ImageSourcePropType;
  width?: ImageStyle['width'];  // Adjust width type to match ImageStyle
  height?: ImageStyle['height']; // Adjust height type to match ImageStyle
  borderRadius?: number;
  style?: ImageStyle;
  placeholder?: ImageSourcePropType;
  errorImage?: ImageSourcePropType;
}

const ImageComponent: React.FC<GenericImageProps> = ({
  source,
  width = '100%',
  height = 80,
  borderRadius = 20,
  style,
  placeholder,
  errorImage,
  ...rest
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle source as either string (URL) or local asset
  const imageSource: ImageSourcePropType =
    isError && errorImage ? errorImage :
    typeof source === 'string' ? { uri: source } : source;

  return (
    <View style={{ width,backgroundColor:'pink',height:height}}>
      {isLoading && placeholder && (
        <Image
          source={placeholder}
          style={[imageStyles.image, { width, height:height, borderRadius }, style]}
        />
      )}
      <Image
        style={[imageStyles.image, { width, height:height, borderRadius }, style]}
        source={imageSource}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
        {...rest}
      />
      {isLoading && <ActivityIndicator style={imageStyles.loadingIndicator} />}
    </View>
  );
};



export default ImageComponent;
