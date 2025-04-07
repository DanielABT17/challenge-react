import {useShoesStore} from "../../zustand/shoesStore";
import ImageProductDetail from "../../components/product-image-detail/ImageProductDetail";
import style from '../ProductDetail/ProductDetail.module.css';
await useShoesStore.getState().fetch();

export default function ProductDetail({id})
{
        const products = useShoesStore(state => state.shoes);   
        /*REMEMBER TO CHANGE THIS*/
        const productInformation = products.find((product) => product.id ===1); //Replace the 1 by the id property when there is communication between views.
    return(
        <article className={style["article__detailView"]}>
            <ImageProductDetail imagesList={productInformation.Imagenes} />

        </article>
    );
}