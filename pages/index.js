import { API, DataStore } from "aws-amplify";
import React, { useState } from "react";
import { ProductDetails, ProductImport } from "../src/models";
import { CatalogHeaders, CatalogRows, ImportHeaders, ImportRows, ProductDetailsForm } from "../src/ui-components";
//const {spawn} = require("child_process");

export default function Home() {

  const [sku, setSku] = useState("");
  const [collection, setCollection] = useState("");
  const [type, setType] = useState("");

  const [handle, setHandle] = useState("");
  const [title, setTitle] = useState("");

  // const data_to_pass_in = {
  //   data_sent: 'data sent',
  //   data_returned: undefined
  // }
  
  // const python_process = spawn('python3',['api/product-generator-test.py',JSON.stringify(data_to_pass_in), 'js'])
  // python_process.stdout.on('data', (data) => {
  //   console.log("data received: ", JSON.parse(data.toString()))
  // });

  const saveProduct = async () => {
    try {
      const myInit = {
        queryStringParameters: {
          collection: collection,
          type: type
        }
      };
      const handle = await API.get('productgeneratorapi','/product', myInit);
      console.log({ handle });

      await DataStore.save(
        new ProductDetails({
          SKU: sku,
          Collection: collection,
          Type: type
        })
      );
      await DataStore.save(
        new ProductImport({
          Handle: handle,
          Title: (function setTitle(c, t) {
            return c + " " + t
          })(collection, type),
          Variant_SKU: sku
        })
      );

      
      //console.log("Post saved successfully!");
    } catch(e) {
      console.log(e);
    }
  }

  const addProductOverrides = {
    "TextField34462690": {
      onChange: (event) => {
        setSku(event.target.value);
      }
    },
    "TextField34462697": {
      onChange: (event) => {
        setCollection(event.target.value);
      }
    },
    "TextField34462704": {
      onChange: (event) => {
        setType(event.target.value);
      }
    },
    "Button": {
      onClick: saveProduct
    }
  }

  

  return (
    <div className="App">
      <ProductDetailsForm overrides={addProductOverrides}/>
      <div className="row">
        <div className="column">
          <CatalogHeaders />
          <CatalogRows />
        </div>
        <div className="column">
          <ImportHeaders />
          <ImportRows />
        </div>
      </div>
    </div>
  );
}