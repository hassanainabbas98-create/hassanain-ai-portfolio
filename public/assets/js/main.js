/**
 * Portfolio Main Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Dynamic Typing Effect in Hero
  initTypewriter();

  // 2. Render Dynamic Content (Projects, Skills, Experience, Stats)
  renderStats();
  renderSkills();
  renderProjects('all');
  renderExperience();

  // 3. Project Filter Buttons
  setupProjectFilters();

  // 4. Modal Handlers
  setupModalHandlers();

  // 5. Contact Form & Copy Email
  setupContactForm();
  setupCopyEmail();

  // 6. Navigation (Mobile menu & scroll spy)
  setupNavigation();

  // 7. Back to Top Button
  setupBackToTop();
});

/* ==========================================================================
   1. Dynamic Typing Effect
   ========================================================================== */
function initTypewriter() {
  const element = document.getElementById('typewriter-text');
  if (!element || !window.PORTFOLIO_DATA?.personal?.typingRoles) return;

  const roles = window.PORTFOLIO_DATA.personal.typingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const eraseSpeed = 50;
  const pauseEnd = 1800;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      element.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? eraseSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   2. Render Dynamic Components
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container || !window.PORTFOLIO_DATA?.personal?.stats) return;

  container.innerHTML = window.PORTFOLIO_DATA.personal.stats.map(stat => `
    <div class="glass-panel p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all text-center">
      <div class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
        ${stat.value}
      </div>
      <div class="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
        ${stat.label}
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const data = window.PORTFOLIO_DATA?.skills;
  if (!data) return;

  const renderCategory = (containerId, items, colorClass) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(skill => `
      <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-slate-700 hover:bg-slate-800/50 transition-all">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-800/80 ${colorClass}">
            <i data-lucide="${skill.icon || 'code'}" class="w-4 h-4"></i>
          </div>
          <span class="text-sm font-medium text-slate-200">${skill.name}</span>
        </div>
        <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-white/5">
          ${skill.level}
        </span>
      </div>
    `).join('');
  };

  renderCategory('skills-frontend', data.frontend, 'text-cyan-400');
  renderCategory('skills-backend', data.backend, 'text-indigo-400');
  renderCategory('skills-cloud', data.databaseCloud, 'text-purple-400');
  renderCategory('skills-tools', data.tools, 'text-emerald-400');

  if (window.lucide) window.lucide.createIcons();
}

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !window.PORTFOLIO_DATA?.projects) return;

  const projects = window.PORTFOLIO_DATA.projects.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        No projects found in this category.
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(project => `
    <article class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-white/10" data-category="${project.category}">
      <!-- Preview Image Banner -->
      <div class="relative overflow-hidden aspect-video bg-slate-900 border-b border-white/5 cursor-pointer" onclick="openProjectModal('${project.id}')">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
        <span class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-cyan-400 border border-cyan-500/20 backdrop-blur-md">
          ${project.category.toUpperCase()}
        </span>
      </div>

      <!-- Card Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer" onclick="openProjectModal('${project.id}')">
            ${project.title}
          </h3>
          <p class="text-xs text-indigo-400 font-medium mt-1">${project.subtitle}</p>
          <p class="text-sm text-slate-300 mt-3 line-clamp-2 leading-relaxed">
            ${project.description}
          </p>

          <!-- Tech Pills -->
          <div class="flex flex-wrap gap-1.5 mt-4">
            ${project.tags.map(tag => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Action Links -->
        <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <button onclick="openProjectModal('${project.id}')" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5">
            <span>Project Details</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
          <div class="flex items-center gap-2">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-white/5" title="View Source Code">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
            ` : ''}
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-indigo-600/30 text-indigo-300 hover:bg-indigo-600/50 hover:text-white transition-all border border-indigo-500/20" title="Live Preview">
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !window.PORTFOLIO_DATA?.experiences) return;

  container.innerHTML = window.PORTFOLIO_DATA.experiences.map((exp, idx) => `
    <div class="relative pl-8 sm:pl-10 group">
      <!-- Dot on timeline -->
      <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      
      <!-- Content Box -->
      <div class="glass-panel p-6 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 class="text-lg font-bold text-white">${exp.role}</h3>
          <span class="text-xs px-3 py-1 rounded-full bg-slate-800/90 text-cyan-300 border border-cyan-500/20 font-medium self-start sm:self-auto">
            ${exp.period}
          </span>
        </div>
        <div class="text-sm font-semibold text-indigo-400 mt-1 flex items-center gap-2">
          <span>${exp.company}</span>
          <span class="text-slate-500">•</span>
          <span class="text-xs text-slate-400 font-normal">${exp.location}</span>
        </div>
        <p class="text-sm text-slate-300 mt-3 leading-relaxed">
          ${exp.description}
        </p>
        <div class="flex flex-wrap gap-2 mt-4">
          ${exp.technologies.map(tech => `
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800/60 text-slate-300 border border-white/5">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. Project Filters
   ========================================================================== */
function setupProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');

      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   4. Project Quick View Modal
   ========================================================================== */
function setupModalHandlers() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const backdrop = document.getElementById('modal-backdrop');

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

window.openProjectModal = function(projectId) {
  const project = window.PORTFOLIO_DATA?.projects?.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');
  const desc = document.getElementById('modal-description');
  const img = document.getElementById('modal-image');
  const tagsContainer = document.getElementById('modal-tags');
  const highlightsContainer = document.getElementById('modal-highlights');
  const liveLink = document.getElementById('modal-live-link');
  const githubLink = document.getElementById('modal-github-link');

  if (title) title.textContent = project.title;
  if (subtitle) subtitle.textContent = project.subtitle;
  if (desc) desc.textContent = project.fullDescription || project.description;
  if (img) {
    img.src = project.image;
    img.alt = project.title;
  }

  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(tag => `
      <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-cyan-500/20 font-medium">
        ${tag}
      </span>
    `).join('');
  }

  if (highlightsContainer) {
    highlightsContainer.innerHTML = (project.highlights || []).map(item => `
      <li class="flex items-start gap-2.5 text-sm text-slate-300">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  if (liveLink) {
    if (project.liveUrl) {
      liveLink.href = project.liveUrl;
      liveLink.classList.remove('hidden');
    } else {
      liveLink.classList.add('hidden');
    }
  }

  if (githubLink) {
    if (project.githubUrl) {
      githubLink.href = project.githubUrl;
      githubLink.classList.remove('hidden');
    } else {
      githubLink.classList.add('hidden');
    }
  }

  if (window.lucide) window.lucide.createIcons();

  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

/* ==========================================================================
   5. Contact Form & Copy Email
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Visual button state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>
      <span>Sending Message...</span>
    `;
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (window.lucide) window.lucide.createIcons();
      showToast('Thank you! Your message has been sent successfully.', 'success');
    }, 1200);
  });
}

function setupCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = window.PORTFOLIO_DATA?.personal?.email || 'alex.morgan.dev@example.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`, 'info');
    }).catch(() => {
      showToast('Failed to copy email automatically.', 'error');
    });
  });
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-xl border text-sm font-medium transition-all toast-animation';
    document.body.appendChild(toast);
  }

  const icons = {
    success: '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-400"></i>',
    error: '<i data-lucide="alert-circle" class="w-5 h-5 text-rose-400"></i>',
    info: '<i data-lucide="info" class="w-5 h-5 text-cyan-400"></i>'
  };

  const borders = {
    success: 'border-emerald-500/30 bg-slate-900/90 text-emerald-200',
    error: 'border-rose-500/30 bg-slate-900/90 text-rose-200',
    info: 'border-cyan-500/30 bg-slate-900/90 text-cyan-200'
  };

  toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-xl border text-sm font-medium transition-all toast-animation ${borders[type] || borders.info}`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <span>${message}</span>
  `;

  if (window.lucide) window.lucide.createIcons();

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.remove();
  }, 3500);
}

/* ==========================================================================
   6. Navigation & Scrollspy
   ========================================================================== */
function setupNavigation() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active section scrollspy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-cyan-400', 'font-semibold');
            link.classList.remove('text-slate-300');
          } else {
            link.classList.remove('text-cyan-400', 'font-semibold');
            link.classList.add('text-slate-300');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   7. Back to Top Button
   ========================================================================== */
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 450) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
