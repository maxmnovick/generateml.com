import { CatalogHeaders, CatalogRows, ProductDetailsForm } from "../src/ui-components";


export default function Home() {
  return (
    <div>
      <ProductDetailsForm />
      <CatalogHeaders />
      <CatalogRows />
    </div>
  );
}