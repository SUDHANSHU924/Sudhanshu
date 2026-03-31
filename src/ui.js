/* DOM interactions, navigation, modals, contact form stub, resume generation */
import { smoothScrollTo, focusTrap, loadScriptOnce } from './utils.js';
import { modalAnimation } from './animations.js';

const assetBase = import.meta.env.BASE_URL;
const modelUrl = (fileName) => `${assetBase}models/${fileName}`;

const projectsData = [
  {
    id: 1,
    title: 'SMS Spam Detection Model',
    desc: 'SMS spam classifier using a pretrained scikit-learn model and vectorizer.',
    stack: ['GitHub'],
    repo: 'https://github.com/SUDHANSHU924/SMS-Spam-Detection-Model',
    model: modelUrl('project-3d-01.glb')
  },
  {
    id: 2,
    title: 'Personal Fitness Tracker',
    desc: 'Notebook project analyzing fitness data with cleaning, visualization, and insights.',
    stack: ['GitHub'],
    repo: 'https://github.com/SUDHANSHU924/Personal-Fitness-Tracker-',
    model: modelUrl('project-3d-02.glb')
  },
  {
    id: 3,
    title: 'Sudhanshu',
    desc: 'Portfolio repository highlighting skills, experience, and projects.',
    stack: ['GitHub'],
    repo: 'https://github.com/SUDHANSHU924/Sudhanshu',
    model: modelUrl('project-3d-03.glb')
  },
  {
    id: 4,
    title: 'AURA 2.0',
    desc: 'Intelligent multi-modal assistant with NLP, vision, voice, and system modules.',
    stack: ['GitHub'],
    repo: 'https://github.com/SUDHANSHU924/AURA2.O',
    model: modelUrl('project-3d-01.glb')
  },
  {
    id: 5,
    title: 'WARGO',
    desc: 'Eco-focused ride sharing platform with real-time location and dynamic pricing.',
    stack: ['GitHub'],
    repo: 'https://github.com/SUDHANSHU924/WARGO',
    model: modelUrl('project-3d-02.glb')
  },
  {
    id: 6,
    title: 'Payroll Management System',
    desc: 'Payroll management project repository on GitHub.',
    stack: ['GitHub'],
    repo: 'https://github.com/SUDHANSHU924/Payroll-management-system',
    model: modelUrl('project-3d-03.glb')
  }
];

const timelineData = [
  {
    id: 'education',
    title: 'Education',
    items: [
      {
        title: 'B.Tech in Computer Science Engineering (CSE 27)',
        org: 'Bansal Institute of Science and Technology, Bhopal',
        date: '2023 - 2027',
        bullets: []
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    items: [
      {
        title: 'Artificial Intelligence Intern',
        org: 'Edunet Foundation (Microsoft + AICTE)',
        date: 'Apr 2025 - Present',
        bullets: [
          'Learned AI, ML, and deep learning concepts',
          'Built real-world AI projects using Microsoft Azure',
          'Worked on image classification and practical applications'
        ]
      },
      {
        title: 'Android Developer Intern',
        org: 'CipherByte Technologies',
        date: 'Mar 2025 - Apr 2025',
        bullets: [
          'Developed mobile applications',
          'Gained hands-on experience in app development'
        ]
      },
      {
        title: 'Python Developer Intern',
        org: 'CodSoft',
        date: 'Nov 2024 - Feb 2025',
        bullets: [
          'Built Python-based applications',
          'Improved problem-solving skills'
        ]
      },
      {
        title: 'UI/UX Designer',
        org: 'Cognifyz Technologies',
        date: 'Nov 2024 - Feb 2025',
        bullets: [
          'Designed user-friendly interfaces',
          'Improved user experience and layouts'
        ]
      }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership and Roles',
    items: [
      {
        title: 'Google Student Ambassador',
        org: 'Google',
        date: '2025',
        bullets: [
          'Promoted tech learning and community engagement'
        ]
      },
      {
        title: 'Student Ambassador',
        org: 'LetsUpgrade',
        date: 'Mar 2025 - Apr 2025',
        bullets: [
          'Promoted tech education initiatives',
          'Engaged with the student community'
        ]
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    items: [
      {
        title: 'SMS Spam Detection System',
        org: 'Machine Learning and NLP',
        date: '',
        bullets: [
          'Classifies messages as spam or not spam'
        ]
      },
      {
        title: 'AI Sports Talent Platform',
        org: 'TensorFlow and OpenCV',
        date: '',
        bullets: [
          'AI-based mobile app to identify sports talent'
        ]
      },
      {
        title: 'Fitness Tracker Web App',
        org: 'Streamlit and Machine Learning',
        date: '',
        bullets: [
          'Predicts calories and visualizes user fitness data'
        ]
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    items: [
      {
        title: 'Core Skills',
        org: '',
        date: '',
        bullets: [
          'DSA and problem solving',
          'Web development (HTML, CSS, JS)',
          'Python and C++',
          'OOPS concepts',
          'AWS and cloud basics',
          'AI/ML fundamentals'
        ]
      }
    ]
  },
  {
    id: 'certifications',
    title: 'Certifications',
    items: [
      {
        title: 'AWS Cloud Foundations',
        org: '',
        date: '',
        bullets: []
      },
      {
        title: 'Microsoft Azure Fundamentals',
        org: '',
        date: '',
        bullets: []
      },
      {
        title: 'C++ Programming (Coursera)',
        org: '',
        date: '',
        bullets: []
      },
      {
        title: 'OOPS (NPTEL - Elite)',
        org: '',
        date: '',
        bullets: []
      }
    ]
  }
];

export function initUI(){
  document.getElementById('year').textContent = new Date().getFullYear();
  setupNav();
  renderProjects();
  renderTimeline();
  setupContactForm();
  setupDegreeBadge();
  setupInspectToggle();
  setupCVDownload();
}

function setupNav(){
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', ()=>{
    const active = menu.dataset.active === 'true';
    menu.dataset.active = (!active).toString();
    toggle.setAttribute('aria-expanded', (!active).toString());
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', e=>{ e.preventDefault(); smoothScrollTo(a.getAttribute('href')); }));
}

function renderProjects(){
  const track = document.getElementById('projects-track');
  if(!track) return;
  
  projectsData.forEach((p, i)=>{
    const card = document.createElement('article');
    card.className='project-card';
    card.tabIndex=0;
    card.innerHTML = `
      <div>
        <span style="font-size:0.85rem; color:var(--accent3); letter-spacing:2px;">PROJECT ${String(i+1).padStart(2,'0')}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div style="margin-top:1rem;">
          ${p.stack.map(s=>`<span style="display:inline-block; padding:0.4rem 0.8rem; background:rgba(255,255,255,0.08); border-radius:6px; font-size:0.8rem; margin:0.3rem 0.3rem 0 0;">${s}</span>`).join('')}
        </div>
      </div>
      <button class="btn ghost" data-id="${p.id}" aria-haspopup="dialog" data-magnetic>View Project</button>
    `;
    card.querySelector('button').addEventListener('click', ()=> openProjectModal(p));
    card.addEventListener('keydown', e=>{ if(e.key==='Enter') openProjectModal(p); });
    track.appendChild(card);
  });
}

function renderTimeline(){
  const container = document.getElementById('timeline-container');
  if(!container) return;
  container.innerHTML = '';

  timelineData.forEach(section=>{
    const sectionEl = document.createElement('div');
    sectionEl.className = 'timeline-section';
    sectionEl.innerHTML = `<h3>${section.title}</h3>`;

    section.items.forEach(item=>{
      const itemEl = document.createElement('div');
      itemEl.className = 'timeline-item';
      const meta = [item.org, item.date].filter(Boolean).join(' | ');
      const bullets = item.bullets && item.bullets.length
        ? `<ul class="timeline-list">${item.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`
        : '';
      itemEl.innerHTML = `
        <h4>${item.title}</h4>
        ${meta ? `<div class="timeline-meta">${meta}</div>` : ''}
        ${bullets}
      `;
      sectionEl.appendChild(itemEl);
    });

    container.appendChild(sectionEl);
  });
}

function openProjectModal(project){
  const root = document.getElementById('modal-root');
  const modal = document.createElement('div');
  modal.className='modal';
  modal.role='dialog';
  modal.ariaLabel = project.title;
  modal.innerHTML = `<div class="modal__inner"><h3>${project.title}</h3><p>${project.desc}</p><p><strong>Stack:</strong> ${project.stack.join(', ')}</p><a href="${project.repo}" target="_blank" rel="noopener" class="btn primary">Repo</a><button class="btn ghost" data-close>Close</button></div>`;
  root.appendChild(modal);
  modalAnimation(modal);
  const closeBtn = modal.querySelector('[data-close]');
  function close(){ modal.classList.add('closing'); setTimeout(()=>modal.remove(),300); }
  closeBtn.addEventListener('click', close);
  modal.addEventListener('close', close);
  focusTrap(modal);
  closeBtn.focus();
  document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown', esc); }});
}

function setupContactForm(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Form submission stub. Configure Netlify/Formspree.');
  });
}

function setupDegreeBadge(){
  const badge = document.querySelector('.degree-badge');
  if(!badge) return;
  badge.addEventListener('mouseenter', ()=> badge.classList.add('flip'));
  badge.addEventListener('mouseleave', ()=> badge.classList.remove('flip'));
  badge.addEventListener('keydown', e=>{ if(e.key==='Enter') badge.classList.toggle('flip'); });
}

let inspectMode=false; let overlay;
function setupInspectToggle(){
  function toggle(){ inspectMode=!inspectMode; document.querySelector('[data-action="toggle-inspect"]').setAttribute('aria-pressed', inspectMode.toString()); if(inspectMode){ overlay=document.createElement('div'); overlay.className='inspect-overlay'; overlay.textContent='Inspect Mode ON'; document.body.appendChild(overlay); } else { overlay?.remove(); } }
  document.querySelector('[data-action="toggle-inspect"]').addEventListener('click', toggle);
  window.addEventListener('keydown', e=>{ if(e.key==='I') toggle(); });
}

function setupCVDownload(){
  const btn = document.querySelector('[data-action="download-cv"]');
  btn.addEventListener('click', async ()=>{
    // Light client-side PDF generation fallback
    try {
      await loadScriptOnce('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js');
      // eslint-disable-next-line no-undef
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text('Sudhanshu Suryawanshi - Resume (Placeholder)', 10, 10);
      doc.text('Replace this content in ui.js setupCVDownload()', 10, 20);
      doc.save('Sudhanshu_Suryawanshi_Resume.pdf');
    } catch(err){
      console.warn('PDF generation failed, falling back to print', err);
      window.print();
    }
  });
}
