const ProductRow = ({ product }) => {
    const outOfStock = {
        color:'red'
    }

  return (
    <tr>
      {product.inStock ? (
        <td className='border border-slate-300'>{product.name}</td>
      ) : (
        <td className='border border-slate-300' style={outOfStock}>{product.name}</td>
      )}
      {product.inStock ? (
        <td className='border border-slate-300'>{product.price}</td>
      ) : (
        <td className='border border-slate-300' style={outOfStock}>{product.price}</td>
      )}
    </tr>
  )
}

export default ProductRow