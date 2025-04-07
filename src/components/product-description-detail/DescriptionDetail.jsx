import Style from './DescriptionDetail.module.css';
import { useState } from 'react';
import AddCartButton from '../add-cart-button/AddCartButton.jsx';
import AddQuantity from '../quantity-button/AddQuantity.jsx';

const id = 1;
export default function DescriptionDetail({productInformation}) {
    const [description, setDescription] = useState(0);

    function handleDescriptionClick(index) {
        setDescription(index); 
    }

    return(
        <div className = {Style['div__DescriptionDetail']}>
            <ShowTextDetail productInformation={productInformation} />
            <Price productInformation={productInformation} />
            <div className={Style['div__buttonsContainer']}>
                <AddQuantity />
                <AddCartButton />
            </div>
            
        </div>
    )

}
export function ShowTextDetail({productInformation}){
    

    return(
        <div className={Style['div__ShowTextDetail']}>
            <section className={Style['div__ShowTextDetail--marcaContainer']}>
                <h3 className={Style['ShowTextDetail__marcaContainer--marca']}>
                    {productInformation.Marca.toUpperCase()}
                </h3>
            </section>

            <section className={Style['div__ShowTextDetail--titleContainer']}>
                <h1 className={Style['ShowTextDetail__titleContainer--title']}>
                {productInformation.Nombre}
                </h1>
            </section>

            <section className={Style['div__ShowTextDetail--descriptionContainer']}>
                <p className={Style['ShowTextDetail__descriptionContainer--description']}>{productInformation.Descripcion}</p>
            </section>

        </div>
    )
}

export function Price({productInformation}){
    const hasDiscount = productInformation.Descuento != 0;
    return(

        <section className={Style['div__Price--priceContainer']}>
            <div>
                {hasDiscount && (<h2>${((productInformation.Descuento/100)*productInformation.Precio).toFixed(2)}</h2>)}
                {hasDiscount && (<p className={Style['prince__priceContainer--discount']}>{productInformation.Descuento}%</p>)} 
            </div>

            <p className={Style['prince__priceContainer--fullPrice']}>${productInformation.Precio.toFixed(2)}</p>
        </section>

    )
}

