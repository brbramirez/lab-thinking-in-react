import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ( { products } ) => {
  return (
    <div  className='flex flex-col justify-center mx-8'>
    <h1>ProductTable</h1>
    <table className='border-collapse border border-slate-400'>
        <thead>
            <tr>
                <th className='border border-slate-300'>Name</th>
                <th className='border border-slate-300'>Price</th>
            </tr>
        </thead>
        <tbody>
        {
        products.map((item) => {
            return <ProductRow product={item} key={item.id} />;
        })
        }
        </tbody>
    </table>
    </div>
  )
}

export default ProductTable