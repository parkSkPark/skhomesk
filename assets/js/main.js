// assets/js/main.js 예시
// 페이지 로드 후 초기화 로직을 한 곳에서 관리합니다
document.addEventListener('DOMContentLoaded', function() {
    // 1. 네비게이션 스크롤 스파이 활성화 (Bootstrap Scrollspy)
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbarNav',
      offset: 80 // 헤더 높이만큼 오프셋
    });
  
    // 2. 부드러운 스크롤 (Smooth Scroll)
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70, // 고정 헤더 높이 보정
            behavior: 'smooth'
          });
        }
      });
    });
  
    // 3. 모달 자동 포커스 (선택 사항)
    var storyModal = document.getElementById('storyModal');
    if (storyModal) {
      storyModal.addEventListener('show.bs.modal', function () {
        storyModal.querySelector('.modal-body').focus();
      });
    }
  
    // 4. 폼 제출 전 추가 검증 (추후 확장)
    var contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        if (!contactForm.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
          contactForm.classList.add('was-validated');
        }
      }, false);
    }
  });