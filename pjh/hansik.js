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
        pageUrl = '../pjh/hansik/gook.html'; // 국/탕 페이지 URL
        break;
      case 2:
        pageUrl = '../pjh/hansik/dry.html'; // 마른반찬 페이지 URL
        break;
      case 3:
        pageUrl = '../pjh/hansik/jjigae.html'; // 마른반찬 페이지 URL
        break;
      case 4:
        pageUrl = '../pjh/hansik/main.html'; // 마른반찬 페이지 URL
        break;
      case 5:
        pageUrl = '../pjh/hansik/noodle.html'; // 마른반찬 페이지 URL
        break;
      case 6:
        pageUrl = '../pjh/hansik/rice.html'; // 마른반찬 페이지 URL
        break;
      case 7:
        pageUrl = '../pjh/hansik/kimchi.html'; // 마른반찬 페이지 URL
        break;
      case 8:
        pageUrl = '../pjh/hansik/salad.html'; // 마른반찬 페이지 URL
        break;
      default:
        pageUrl = "../pjh/index.html"; // 기본 페이지 URL
    }
  
    // 페이지 이동
    window.location.href = pageUrl;
  }