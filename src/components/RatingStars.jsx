import { useState } from 'react'
import { getProductRating, setProductRating } from '../utils/ratingsStorage'

function RatingStars({ rate, productId }) {
  const apiRounded = Math.round(rate ?? 0)
  const savedRating = productId != null ? getProductRating(productId) : null

  const [userRate, setUserRate] = useState(null)
  const displayRate = userRate ?? savedRating ?? apiRounded

  const handleStarClick = (value) => {
    if (productId == null) return

    setProductRating(productId, value)
    setUserRate(value)
  }

  return (
    <div
      className="rating-stars"
      role="group"
      aria-label={`Рейтинг: ${displayRate} из 5`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= displayRate

        return (
          <button
            key={starValue}
            type="button"
            className={isFilled ? 'star star-filled' : 'star'}
            onClick={() => handleStarClick(starValue)}
            aria-label={`Поставить ${starValue} из 5`}
            aria-pressed={isFilled}
          >
            ★
          </button>
        )
      })}
    </div>
  )
}

export default RatingStars
