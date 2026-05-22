import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../components/RatingStars'

const PRODUCTS_URL = 'https://fakestoreapi.com/products'

function ProductListPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(PRODUCTS_URL)

        if (!response.ok) {
          throw new Error('Не удалось получить товары')
        }

        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <p className="state-message">Загрузка списка товаров...</p>
  }

  if (error) {
    return <p className="state-message error-message">{error}</p>
  }

  return (
    <main className="page products-page">
      <section className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-title-link">
              {product.title}
            </Link>
            <RatingStars
              key={product.id}
              rate={product.rating?.rate}
              productId={product.id}
            />
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProductListPage
