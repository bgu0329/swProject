// 대분류와 소분류에 따라 레시피 이미지를 가져오는 함수
async function fetchAndSetRecipeImages(category, subcategory) {
  try {
    // URL 생성 시 encodeURIComponent 사용
    console.log(category,subcategory);
    const url = `http://localhost:3000/api/getRecipes?category=${encodeURIComponent(
      category
    )}&subcategory=${encodeURIComponent(subcategory)}`;

    console.log('Request URL:', url); // 콘솔에 URL 로그 출력

    const response = await fetch(url, { mode: 'cors' });
    const recipeImageUrls = await response.json();

    console.log('Response Data:', recipeImageUrls); // 콘솔에 응답 데이터 로그 출력

    const images = document.querySelectorAll('.grid-item1 img');
    images.forEach((img, index) => {
      const encodedFileName = encodeURIComponent(
        recipeImageUrls[index] || '온리혼리.png'
      );
      console.log('Image URL:', `../DB/${encodedFileName}`); // 콘솔에 이미지 URL 로그 출력
      img.src = `../DB/${encodedFileName}`;
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', () => {
  fetchAndSetRecipeImages('중식', '샐러드/샌드위치');
});
