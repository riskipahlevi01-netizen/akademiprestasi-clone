document.addEventListener("DOMContentLoaded", async () => {
  // Fungsi untuk memuat komponen HTML ke dalam elemen yang ditentukan
  async function loadComponent(selector, filePath) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`Gagal memuat ${filePath}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error("Error memuat komponen:", filePath, err);
    }
  }

  // Tentukan basePath berdasarkan URL
  const basePath = (() => {
    const pathname = window.location.pathname;

    if (pathname.includes("/blogs/detail/")) {
      return "../../../";
    }

    if (pathname.includes("/kampus/")) {
        return "../../";
    }

    if (pathname.includes("/program/")) {
        return "../../";
    }

    if (pathname.includes("/tentang-kami") ||
        pathname.includes("/bimbel-akmil") ||
        pathname.includes("/blogs") ||
        pathname.includes("/kontak-kami")) {
      return "..";
    }

    return ".";
  })();

  // Muat header dan footer
  await loadComponent("header", `${basePath}/components/header.html`);
  await loadComponent("footer", `${basePath}/components/footer.html`);



});



  document.addEventListener("DOMContentLoaded", function() {
    const toggleTitles = document.querySelectorAll('.elementor-tab-title');

    toggleTitles.forEach(function(title) {
      title.addEventListener('click', function() {
        const contentId = title.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const expanded = title.getAttribute('aria-expanded') === 'true';

        // Toggle visibility
        content.style.display = expanded ? 'none' : 'block';
        title.setAttribute('aria-expanded', !expanded);

        // Toggle icons
        const toggleIcon = title.querySelector('.elementor-toggle-icon');
        if (expanded) {
          toggleIcon.classList.remove('elementor-toggle-icon-opened');
          toggleIcon.classList.add('elementor-toggle-icon-closed');
        } else {
          toggleIcon.classList.remove('elementor-toggle-icon-closed');
          toggleIcon.classList.add('elementor-toggle-icon-opened');
        }
      });
    });
  });




