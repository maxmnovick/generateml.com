/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { ProductDetails } from "../models";
import { schema } from "../models/schema";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function ProductDetailsForm(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeFourFourSixTwoSixNineZeroValue,
    setTextFieldThreeFourFourSixTwoSixNineZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFourSixTwoSixNineSevenValue,
    setTextFieldThreeFourFourSixTwoSixNineSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFourSixTwoSevenZeroFourValue,
    setTextFieldThreeFourFourSixTwoSevenZeroFourValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      SKU: textFieldThreeFourFourSixTwoSixNineZeroValue,
      Collectio: textFieldThreeFourFourSixTwoSixNineSevenValue,
      Type: textFieldThreeFourFourSixTwoSevenZeroFourValue,
      Collection: textFieldThreeFourFourSixTwoSixNineSevenValue,
    },
    model: ProductDetails,
    schema: schema,
  });
  return (
    <View
      width="300px"
      height="324px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProductDetailsForm")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="0px"
        left="0px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="SKU"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeFourFourSixTwoSixNineZeroValue}
        onChange={(event) => {
          setTextFieldThreeFourFourSixTwoSixNineZeroValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField34462690")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="72px"
        left="0px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Collection"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeFourFourSixTwoSixNineSevenValue}
        onChange={(event) => {
          setTextFieldThreeFourFourSixTwoSixNineSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField34462697")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="144px"
        left="0px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Type"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeFourFourSixTwoSevenZeroFourValue}
        onChange={(event) => {
          setTextFieldThreeFourFourSixTwoSevenZeroFourValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField34462704")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="250px"
        left="76px"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Create Product"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
