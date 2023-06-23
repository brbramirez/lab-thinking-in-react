const SearchBar = ( {products, setProducts} ) => {

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    const filteredProduct = products.filter((product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
      setProducts(searchInput ? filteredProduct : products);
    }

    const handleCheck = (e) => {
      const checked = e.target.checked;
      const filterCheck = products.filter((product) => {
        return checked ? product.inStock : true;
      })
      setProducts(filterCheck)
    }

  return (
    <div>
      <input onChange={(e) => {handleSearch(e)}} placeholder="Search product"></input>
      <label for='checkbox'>Only in stock</label>
      <input id="checkbox" name="checkbox" onChange={(e) => {handleCheck(e)}} type="checkbox"/>
    </div>
  )
}

export default SearchBar