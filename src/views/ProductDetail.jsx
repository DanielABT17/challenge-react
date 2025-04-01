import {useShoesStore} from "../zustand/shoesStore";
import ImageProductDetail from "../components/product-image-detail/ImageProductDetail";
await useShoesStore.getState().fetch();

export default function ProductDetail({id})
{
        const products = useShoesStore(state => state.shoes);   
        const productInformation = products.find((product) => product.id === 1);

    return(
        <ImageProductDetail imagesList={productInformation.Imagenes} />
    );
}