import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="page not-found-page">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/products" className="to-products-link">
        Перейти к товарам
      </Link>
    </main>
  )
}

export default NotFoundPage
