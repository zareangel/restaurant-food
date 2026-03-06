import { getProducts } from '../../api/productsApi';
import { getCategories } from '../../api/categoriesApi';
import { useEffect, useState } from 'react';
import './Menu.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Menu = () => {
    
    const [sortOrder, setSortOrder] = useState("default");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("all");
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const prod = await getProducts();
                const cats = await getCategories();

                setProducts(prod);
                setCategories(cats);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // 🔎 filtro combinado profesional
    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" ||
            product.category?.id === Number(selectedCategory);

        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.price - b.price;
        }
        if (sortOrder === "desc") {
            return b.price - a.price;
        }
    })
    
    return (
        
        
        <section id="menu">
            
            
            <div className='home-container' >

                <h1 className='product-title'>Our Products</h1>

                {/* Search Product*/}
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    className='search-input'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className='filters-container'>
                    {/*Search Category*/}

                    <select
                        className='category-select'
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All categories</option>

                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    <select
                        name="sort"
                        id="sort"
                        className="sort-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="default">Sort by</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>

                </div>

                {filteredProducts.length === 0 &&
                    <p className='no-products'>No products found</p>
                }

                {/* GRID */}
                <div className='product-grid'>
                    {sortedProducts.map(product => (
                        <div key={product.id} className='product-card'>

                            <div className='image-wrapper'>
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className='product-info'>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p className='price'>${product.price}</p>

                                <button
                                    className='buy-btn'
                                    onClick={() => addToCart(product)}
                                >
                                    Add to cart
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Menu;