import styles from './DescriptionDetail.module.css';
import AddCartButton from '../add-cart-button/AddCartButton.jsx';
import AddQuantity from '../quantity-button/AddQuantity.jsx';



export default function DescriptionDetail({productInformation}) {
    return(
        <div className = {styles['div__DescriptionDetail']}>
            <ShowTextDetail productInformation={productInformation} />
            <Price productInformation={productInformation} />
            <div className={styles['div__buttonsContainer']}>
                <AddQuantity productInformation={productInformation}/>
                <AddCartButton productId ={productInformation.id} />
            </div>
            
        </div>
    )

}
export function ShowTextDetail({productInformation}){
    

    return(
        <div className={styles['div__ShowTextDetail']}>
            <section className={styles['div__ShowTextDetail--marcaContainer']}>
                <h3 className={styles['ShowTextDetail__marcaContainer--marca']}>
                    {productInformation.Marca.toUpperCase()}
                </h3>
            </section>

            <section className={styles['div__ShowTextDetail--titleContainer']}>
                <h1 className={styles['ShowTextDetail__titleContainer--title']}>
                {productInformation.Nombre}
                </h1>
            </section>

            <section className={styles['div__ShowTextDetail--descriptionContainer']}>
                <p className={styles['ShowTextDetail__descriptionContainer--description']}>{productInformation.Descripcion}</p>
            </section>

        </div>
    )
}

export function Price({productInformation}){
    const hasDiscount = productInformation.Descuento != 0;
    return(

        <section className={styles['div__Price--priceContainer']}>
            <div>
                {hasDiscount && (<h2>${(productInformation.Precio-(productInformation.Descuento/100)*productInformation.Precio).toFixed(2)}</h2>)}
                {hasDiscount && (<p className={styles['prince__priceContainer--discount']}>{productInformation.Descuento}%</p>)} 
            </div>

            <p className={styles['prince__priceContainer--fullPrice']}>${productInformation.Precio.toFixed(2)}</p>
        </section>

    )
}



