// server/api/reviews.js
export default defineEventHandler(async (event) => {
  const { id } = getQuery(event); // Получаем ID из запроса
  const reviews = await getReviewsById(id); // Здесь функция для получения отзывов по ID

  if (!reviews) {
    return { rating: 0, reviewCount: 0 }; // Если нет отзывов
  }

  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = totalRating / totalReviews;

  return {
    rating: avgRating.toFixed(1),
    reviewCount: totalReviews,
  };
});
