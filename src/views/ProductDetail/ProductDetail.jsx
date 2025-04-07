import {useShoesStore} from "../../zustand/shoesStore";
import ImageProductDetail from "../../components/product-image-detail/ImageProductDetail";
import DescriptionDetail from "../../components/product-description-detail/DescriptionDetail";
import Style from './ProductDetail.module.css';


await useShoesStore.getState().fetch();

export default function ProductDetail({id})
{
        const products = useShoesStore(state => state.shoes);   
        const productInformation = products.find((product) => product.id === id);


    return(
        <article className={Style["article__detailView"]}>
            <ImageProductDetail productInformation={productInformation.Imagenes} />
            <DescriptionDetail productInformation={productInformation} />
        </article>
   
    );
}