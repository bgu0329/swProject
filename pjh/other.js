document.querySelectorAll('.grid-item1 img').forEach((img, index) => {
    img.addEventListener('click', () => {
      // 클릭 시 특정 페이지로 이동하는 함수 호출
      navigateToPage(index + 1); // index는 0부터 시작하므로 1을 더해줍니다.
    });
  });
  
  // 페이지 이동 함수
  function navigateToPage(categoryIndex) {
    // 여기서 categoryIndex를 사용하여 이동할 페이지 URL을 동적으로 생성
    let pageUrl = '';
    switch (categoryIndex) {
      case 1:
        pageUrl = '../pjh/other/gook.html'; // 국/탕 페이지 URL
        break;
      case 2:
        pageUrl = '../pjh/other/dry.html'; // 마른반찬 페이지 URL
        break;
      case 3:
        pageUrl = '../pjh/other/jjigae.html'; // 마른반찬 페이지 URL
        break;
      case 4:
        pageUrl = '../pjh/other/main.html'; // 마른반찬 페이지 URL
        break;
      case 5:
        pageUrl = '../pjh/other/noodle.html'; // 마른반찬 페이지 URL
        break;
      case 6:
        pageUrl = '../pjh/other/rice.html'; // 마른반찬 페이지 URL
        break;
      case 7:
        pageUrl = '../pjh/other/kimchi.html'; // 마른반찬 페이지 URL
        break;
      case 8:
        pageUrl = '../pjh/other/salad.html'; // 마른반찬 페이지 URL
        break;
      default:
        pageUrl = "../pjh/index.html"; // 기본 페이지 URL
    }
  
    // 페이지 이동
    window.location.href = pageUrl;
  }