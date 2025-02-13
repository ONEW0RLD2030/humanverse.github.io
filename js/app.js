// تحميل الآيات من ملف JSON
fetch('assets/verses.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('quran-verses');
    data.forEach(verse => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${verse.surah}</h3><p>${verse.text}</p>`;
      container.appendChild(div);
    });
  });

// تكامل DeepSeek للشفافية
const deepSeekMonitor = {
  log: (action) => {
    console.log(`[DeepSeek Audit] ${new Date().toISOString()}: ${action}`);
    // إرسال البيانات إلى سيرفر مراقبة (اختياري)
  }
};

// تسجيل كل تفاعل
document.addEventListener('DOMContentLoaded', () => {
  deepSeekMonitor.log('Page loaded');
});
// مراقبة أي تغييرات في DOM
const observer = new MutationObserver((mutations) => {
  deepSeekMonitor.log('DOM modified');
});
observer.observe(document.body, { childList: true, subtree: true });
