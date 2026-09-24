/**
 * Main Script - SuaraNTB
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeaderDate();
  initTheme();
  initDropdowns();
  initSearchOverlay();
  initAdCarousel();
  initArchiveFilter();
  initHeadlineSlider();
});

/* ==========================================================================
   0. Header Date (menyesuaikan tanggal/waktu sekarang)
   ========================================================================== */
function initHeaderDate() {
  const dateEls = document.querySelectorAll('.header-date');
  if (dateEls.length === 0) return;

  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const now = new Date();
  const teks = `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

  dateEls.forEach(el => { el.textContent = teks; });
}

/* ==========================================================================
   1. Theme Handling (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  applyTheme(currentTheme);

  const themeToggleBtns = document.querySelectorAll('.js-theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeIcons(theme);
}

function updateThemeIcons(theme) {
  const themeToggleBtns = document.querySelectorAll('.js-theme-toggle');
  themeToggleBtns.forEach(btn => {
    if (theme === 'dark') {
      // Moon / Sun icon
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      btn.setAttribute('aria-label', 'Beralih ke mode terang');
    } else {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      btn.setAttribute('aria-label', 'Beralih ke mode gelap');
    }
  });
}

/* ==========================================================================
   2. Dropdowns Handling
   ========================================================================== */
function initDropdowns() {
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const menu = item.querySelector('.nav-dropdown-menu');

    function positionMenu() {
      if (!menu) return;
      const rect = item.getBoundingClientRect();
      menu.style.position = 'fixed';
      menu.style.top = (rect.bottom + 4) + 'px';
      const maxLeft = window.innerWidth - 190;
      menu.style.left = Math.max(10, Math.min(rect.left, maxLeft)) + 'px';
      menu.style.zIndex = '999';
    }

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('dropdown-open');

      dropdownItems.forEach(d => {
        d.classList.remove('dropdown-open');
        const m = d.querySelector('.nav-dropdown-menu');
        if (m) m.style.display = 'none';
      });

      if (!isOpen) {
        item.classList.add('dropdown-open');
        if (menu) {
          positionMenu();
          menu.style.display = 'flex';
        }
      }
    });

    // Hover on desktop
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 1024 && menu) {
        positionMenu();
        menu.style.display = 'flex';
        item.classList.add('dropdown-open');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 1024 && menu) {
        menu.style.display = 'none';
        item.classList.remove('dropdown-open');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.has-dropdown')) {
      dropdownItems.forEach(d => {
        d.classList.remove('dropdown-open');
        const m = d.querySelector('.nav-dropdown-menu');
        if (m) m.style.display = 'none';
      });
    }
  });

  // Reposition / close on scroll
  window.addEventListener('scroll', () => {
    dropdownItems.forEach(d => {
      d.classList.remove('dropdown-open');
      const m = d.querySelector('.nav-dropdown-menu');
      if (m) m.style.display = 'none';
    });
  }, { passive: true });
}

/* ==========================================================================
   3. Search Overlay Handling
   ========================================================================== */
function initSearchOverlay() {
  const searchOverlay = document.getElementById('searchOverlay');
  const openBtns = document.querySelectorAll('.js-open-search');
  const cancelBtn = document.getElementById('btnSearchCancel');
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('btnSearchClear');
  const searchPreview = document.getElementById('searchPreview');
  const searchTagsContainer = document.getElementById('searchTagsContainer');
  const searchPostsContainer = document.getElementById('searchPostsContainer');
  const moreResultsBtn = document.getElementById('btnMoreResults');

  if (!searchOverlay) return;

  function openOverlay() {
    searchOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.focus();
    }
  }

  function closeOverlay() {
    searchOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openOverlay));
  if (cancelBtn) cancelBtn.addEventListener('click', closeOverlay);

  // Close when clicking blurred background outside card
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      closeOverlay();
    }
  });

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.classList.remove('visible');
      renderSearchResults('');
      searchInput.focus();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (q.length > 0) {
        if (clearBtn) clearBtn.classList.add('visible');
        searchInput.setAttribute('placeholder', 'Cari postingan dan tag');
      } else {
        if (clearBtn) clearBtn.classList.remove('visible');
        searchInput.setAttribute('placeholder', 'Cari postingan, tag');
      }
      renderSearchResults(q);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        if (q) {
          window.location.href = `pencarian.html?q=${encodeURIComponent(q)}`;
        }
      }
    });
  }

  if (moreResultsBtn) {
    moreResultsBtn.addEventListener('click', () => {
      const q = searchInput ? searchInput.value.trim() : '';
      if (q) {
        window.location.href = `pencarian.html?q=${encodeURIComponent(q)}`;
      }
    });
  }

  function renderSearchResults(query) {
    if (!query) {
      if (searchPreview) searchPreview.style.display = 'none';
      return;
    }

    if (searchPreview) searchPreview.style.display = 'block';

    const normalized = query.toLowerCase();

    // Match Tags
    const matchedTags = new Set();
    SUARA_NTB_DATA.articles.forEach(art => {
      art.tags.forEach(t => {
        if (t.toLowerCase().includes(normalized)) {
          matchedTags.add(t);
        }
      });
    });

    if (searchTagsContainer) {
      if (matchedTags.size > 0) {
        searchTagsContainer.innerHTML = Array.from(matchedTags).map(tag => `
          <a href="pencarian.html?q=${encodeURIComponent(tag)}" class="search-tag-pill"># ${escapeHTML(tag)}</a>
        `).join('');
      } else {
        searchTagsContainer.innerHTML = `<a href="pencarian.html?q=${encodeURIComponent(query)}" class="search-tag-pill"># ${escapeHTML(query)}</a>`;
      }
    }

    // Match Posts
    const matchedArticles = SUARA_NTB_DATA.articles.filter(art => {
      return art.title.toLowerCase().includes(normalized) ||
             art.excerpt.toLowerCase().includes(normalized) ||
             art.category.toLowerCase().includes(normalized);
    });

    if (searchPostsContainer) {
      if (matchedArticles.length > 0) {
        searchPostsContainer.innerHTML = matchedArticles.slice(0, 4).map(art => {
          const highlightedTitle = highlightKeyword(art.title, query);
          const snippet = art.excerpt.length > 90 ? art.excerpt.substring(0, 90) + '...' : art.excerpt;
          return `
            <div class="search-post-item">
              <a href="isi-berita.html?id=${art.id}" class="search-post-title">${highlightedTitle}</a>
              <p class="search-post-snippet">${escapeHTML(snippet)}</p>
            </div>
          `;
        }).join('');
      } else {
        searchPostsContainer.innerHTML = `
          <div class="search-post-item">
            <p class="search-post-snippet">Tidak ada postingan yang sesuai kata kunci.</p>
          </div>
        `;
      }
    }
  }
}

function highlightKeyword(text, keyword) {
  if (!keyword) return escapeHTML(text);
  const regex = new RegExp(`(${escapeRegex(keyword)})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ==========================================================================
   4. Ad Banner Carousel
   ========================================================================== */
function initAdCarousel() {
  const carousels = document.querySelectorAll('.js-ad-carousel');
  carousels.forEach(carousel => {
    const slides = carousel.querySelector('.ad-banner-slides');
    const dots = carousel.querySelectorAll('.ad-dot');
    if (!slides || dots.length === 0) return;

    let currentIndex = 0;
    const totalSlides = dots.length;

    function goToSlide(index) {
      currentIndex = index;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    // Autoplay every 5s
    setInterval(() => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      goToSlide(nextIndex);
    }, 5000);
  });
}

/* ==========================================================================
   5. Custom Select & Filter Arsip (Index Berita)
   ========================================================================== */
function initArchiveFilter() {
  const selectWrappers = document.querySelectorAll('.custom-select-wrapper');

  selectWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const options = wrapper.querySelectorAll('.custom-select-option');
    const inputVal = wrapper.querySelector('input[type="hidden"]');
    const labelSpan = trigger ? trigger.querySelector('.select-label') : null;

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrapper.classList.contains('is-open');
        selectWrappers.forEach(w => w.classList.remove('is-open'));
        if (!isOpen) wrapper.classList.add('is-open');
      });
    }

    options.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = opt.getAttribute('data-value');
        const text = opt.textContent;
        if (inputVal) inputVal.value = val;
        if (labelSpan) labelSpan.textContent = text;
        options.forEach(o => o.classList.remove('is-selected'));
        opt.classList.add('is-selected');
        wrapper.classList.remove('is-open');
      });
    });
  });

  document.addEventListener('click', () => {
    selectWrappers.forEach(w => w.classList.remove('is-open'));
  });

  const filterForm = document.getElementById('archiveFilterForm');
  const resultArea = document.getElementById('archiveResultArea');

  if (filterForm && resultArea) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tgl = document.getElementById('filterTanggal')?.value;
      const bln = document.getElementById('filterBulan')?.value;
      const thn = document.getElementById('filterTahun')?.value;

      // Logic: 31 Agustus 2026 -> 3 berita, lainnya -> tidak ada berita
      if (tgl === '31' && (bln === 'Agustus' || bln === '08') && thn === '2026') {
        const matchingNews = SUARA_NTB_DATA.articles.filter(a => a.date.includes('31 Agustus 2026')).slice(0, 3);
        resultArea.innerHTML = `
          <div class="filter-result-frame">
            <div class="filter-result-msg">
              <span class="filter-info-icon" aria-hidden="true">i</span>
              <span>Ditemukan ${matchingNews.length} berita</span>
            </div>
            <div class="section-frame">
              <div class="category-unified-list">
                ${matchingNews.map((art, idx) => `
                  <article class="category-sub-item">
                    <div class="category-sub-thumb">
                      <img src="${art.thumb}" alt="${art.title}" loading="lazy">
                    </div>
                    <div class="category-sub-body">
                      <h4 class="category-sub-title"><a href="isi-berita.html?id=${art.id}">${art.title}</a></h4>
                      <div class="category-sub-meta">${art.date || '31 Agustus 2026'}, ${art.time || '10:00 WITA'}</div>
                    </div>
                  </article>
                  ${idx < matchingNews.length - 1 ? '<div class="section-item-divider"></div>' : ''}
                `).join('')}
              </div>
            </div>
          </div>
        `;
      } else {
        resultArea.innerHTML = `
          <div class="filter-result-frame">
            <div class="filter-result-msg not-found">Tidak ada berita yang di temukan pada tanggal ini.</div>
          </div>
        `;
      }
    });
  }
}

/* ==========================================================================
   6. Headline Slider (Kotak Utama Swipe Kiri-Kanan)
   ========================================================================== */
function initHeadlineSlider() {
  const container = document.querySelector('.js-headline-slider');
  if (!container) return;

  const track = container.querySelector('.headline-track');
  const slides = container.querySelectorAll('.headline-slide');
  const prevBtn = container.querySelector('.headline-slider-btn.prev');
  const nextBtn = container.querySelector('.headline-slider-btn.next');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetTimer();
    });
  }

  // Touch Swipe Support
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diff = startX - currentX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetTimer();
    }
  });

  function startTimer() {
    autoplayTimer = setInterval(nextSlide, 5500);
  }

  function resetTimer() {
    clearInterval(autoplayTimer);
    startTimer();
  }

  container.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  container.addEventListener('mouseleave', startTimer);

  startTimer();
}
