/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function CatalogRow(props) {
  const { productDetails, overrides, ...rest } = props;
  return (
    <View
      width="600px"
      height="49px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CatalogRow")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="200px"
        height="50px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={productDetails?.SKU}
        {...getOverrideProps(overrides, "SKU")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="200px"
        height="50px"
        position="absolute"
        top="-1px"
        left="200px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={productDetails?.Collection}
        {...getOverrideProps(overrides, "Collection")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="200px"
        height="50px"
        position="absolute"
        top="0px"
        left="400px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={productDetails?.Type}
        {...getOverrideProps(overrides, "Type")}
      ></Text>
    </View>
  );
}
