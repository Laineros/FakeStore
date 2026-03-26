function RatingStars({ rate }) {
  const roundedRate = Math.round(rate ?? 0)
  const stars = Array.from({ length: 5 }, (_, index) => index < roundedRate)

  return (
    <div className="rating-stars" aria-label={`Рейтинг: ${roundedRate} из 5`}>
      {stars.map((isFilled, index) => (
        <span key={index} className={isFilled ? 'star star-filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default RatingStars
