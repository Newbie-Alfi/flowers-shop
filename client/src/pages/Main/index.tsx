import { SaleList } from "@entities/Sale/ui";
import { observer } from "mobx-react-lite";
import { ProductList } from "./ui/ProductList";

// const MainPage = observer(() => {
const MainPage = observer(() => (
  <>
    <SaleList />
    <ProductList />
  </>
));

export default MainPage;
