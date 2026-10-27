const projectDetails = {
  pentest: {
    kicker: 'CAPSTONE / PENTEST TOOLBOX',
    title: 'Pentest Toolbox',
    body: `<p>منصة تعليمية متكاملة لدراسة اختبار الاختراق، تجمع عددًا من أدوات الأمن السيبراني والاختبار الأخلاقي في بيئة واحدة مرنة ومناسبة لتدريب الطلاب.</p><p>تتضمن الوحدات التدريبية فحص الشبكات، والتقاط الحزم، ومحاكاة ARP Spoofing، وتوليد الحمولات التعليمية، وفحص ثغرات تطبيقات الويب. تم تصميمها للعمل داخل أجهزة افتراضية وشبكات معزولة ضمن مختبر أكاديمي آمن باستخدام Kali Linux وVMware Workstation.</p><ul class="modal-list"><li>لغة التطوير: Python</li><li>البيئة: Kali Linux وVMware Workstation</li><li>المشرف: Dr. Waheeb Abdullah</li><li>تاريخ التسليم: June 20, 2026</li></ul><div class="modal-tags"><span>Python</span><span>Ethical Hacking</span><span>Network Security</span><span>Virtual Labs</span></div>`
  },
  spam: {
    kicker: 'MACHINE LEARNING / NLP',
    title: 'Email/SMS Spam Detection System',
    body: `<p>نظام ذكي لتصنيف الرسائل النصية والبريد الإلكتروني إلى رسائل آمنة (Ham) أو رسائل مزعجة (Spam) باستخدام خوارزميات متعددة للتعلم الآلي.</p><p>يعتمد النظام على معالجة نصية تشمل إزالة الكلمات غير المهمة، وتحويل النص إلى تمثيل رقمي باستخدام TF-IDF، ثم مقارنة نماذج Naive Bayes وLogistic Regression وLinearSVC. حقق نموذج LinearSVC أفضل نتيجة بدقة بلغت 97.9% وفق بيانات المشروع.</p><div class="modal-tags"><span>Python</span><span>TF-IDF</span><span>LinearSVC</span><span>Streamlit</span><span>FastAPI</span></div>`
  },
  bughunt: {
    kicker: 'ACADEMIC ACTIVITY / WHITE-HAT',
    title: 'Vulnerability Assessment & Bug Hunting',
    body: `<p>نشاط أكاديمي في تقييم الثغرات والبحث الأخلاقي عن الأخطاء الأمنية، شمل رصد مشكلات مرتبطة بكشف المعلومات واحتمالية SQL Injection في موقع الجامعة.</p><p>تم إعداد تقرير تقني يتضمن الملاحظات وخطة معالجة شاملة بهدف تحسين الوضع الأمني للمؤسسة، مع الالتزام بالسياق التعليمي والأخلاقي وعدم نشر تفاصيل حساسة.</p><div class="modal-tags"><span>Web Security</span><span>Vulnerability Assessment</span><span>Technical Reporting</span></div>`
  },
  systems: {
    kicker: 'SYSTEM ENGINEERING / DESKTOP APPS',
    title: 'Secure Hotel & Dormitory Management Systems',
    body: `<p>تطوير تطبيقات سطح مكتب متكاملة لإدارة الفنادق والسكن باستخدام C# وMySQL على بيئة Windows.</p><p>ركز المشروع على حماية البيانات الحساسة من خلال وحدات تشفير وضوابط وصول دقيقة، مع تنظيم العمليات الأساسية للنظام داخل واجهة عملية قابلة للاستخدام.</p><div class="modal-tags"><span>C#</span><span>MySQL</span><span>Encryption</span><span>Access Control</span></div>`
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalKicker = document.getElementById('modal-kicker');
const modalBody = document.getElementById('modal-body');
const closeModal = () => {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
const openModal = (id) => {
  const detail = projectDetails[id];
  if (!detail) return;
  modalKicker.textContent = detail.kicker;
  modalTitle.textContent = detail.title;
  modalBody.innerHTML = detail.body;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};
document.querySelectorAll('.open-project').forEach((button) => button.addEventListener('click', () => openModal(button.dataset.project)));
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});
