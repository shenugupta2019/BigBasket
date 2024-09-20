// components/atoms/GenericImage.tsx

import React, { useState } from 'react';
import { Image, ImageProps, StyleSheet, ImageSourcePropType, ImageStyle, View, ActivityIndicator } from 'react-native';

interface GenericImageProps extends Omit<ImageProps, 'source'> {
  source: string | ImageSourcePropType;
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
  height = 200,
  borderRadius = 0,
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
    <View style={{ width, height }}>
      {isLoading && placeholder && (
        <Image
          source={placeholder}
          style={[styles.image, { width, height, borderRadius }, style]}
        />
      )}
      <Image
        style={[styles.image, { width, height, borderRadius }, style]}
        source={imageSource}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
        {...rest}
      />
      {isLoading && <ActivityIndicator style={styles.loadingIndicator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -15,
    marginTop: -15,
  },
});

export default ImageComponent;
