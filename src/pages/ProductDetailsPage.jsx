import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RatingStars from '../components/RatingStars'

function ProductDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        if (!response.ok) {
          throw new Error('Не удалось получить товар')
        }

        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <p className="state-message">Загрузка карточки товара...</p>
  }

  if (error) {
    return <p className="state-message error-message">{error}</p>
  }

  if (!product) {
    return <p className="state-message error-message">Товар не найден</p>
  }

  return (
    <main className="page product-details-page">
      <article className="product-details-card">
        <h1 className="product-details-title">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
          width="220"
          height="220"
        />
        <p className="product-details-text">
          <strong>Price:</strong> {product.price} $
        </p>
        <p className="product-details-text">
          <strong>Description:</strong> {product.description}
        </p>
        <RatingStars rate={product.rating?.rate} />
      </article>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Назад
      </button>
    </main>
  )
}

export default ProductDetailsPage
