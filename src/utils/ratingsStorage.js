const STORAGE_PREFIX = 'fakestore-rating-'

export function getProductRating(productId) {
  const value = localStorage.getItem(`${STORAGE_PREFIX}${productId}`)
  return value === null ? null : Number(value)
}

export function setProductRating(productId, rating) {
  localStorage.setItem(`${STORAGE_PREFIX}${productId}`, String(rating))
}

export function getDisplayRating(apiRate, productId) {
  const saved = getProductRating(productId)
  if (saved !== null) return saved
  return Math.round(apiRate ?? 0)
}
