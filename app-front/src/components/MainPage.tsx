import Category from "./Category"
import ProductGrid from "./ProductGrid";
import PubPainel from "./PubPainel";
import Footer from "./Footer";

const MainPage = () => {
    return (
        <>
            <PubPainel />
            <Category />
            <ProductGrid />
            <Footer />
        </>
    );
};

export default MainPage;
