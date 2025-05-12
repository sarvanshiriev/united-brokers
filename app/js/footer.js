function initMobileFooterToggle() {
    if (window.innerWidth < 768) {
      document.querySelectorAll('.footer__list-title').forEach(title => {
        title.addEventListener('click', () => {
          const block = title.nextElementSibling;
  
          document.querySelectorAll('.footer__list-block').forEach(otherBlock => {
            if (otherBlock !== block) {
              otherBlock.style.display = 'none';
            }
          });
  
          if (block.style.display === 'block') {
            block.style.display = 'none';
          } else {
            block.style.display = 'block';
          }
        });
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', initMobileFooterToggle);
  
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      initMobileFooterToggle();
    }
  });
  