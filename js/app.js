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
// تهيئة OrbitDB للحوارات
let orbitInstance;
async function initChat() {
    const ipfsConfig = { repo: './ipfs' };
    const orbit = await OrbitDB.createInstance(ipfsConfig);
    const db = await orbit.create('humanverse-chat', 'docstore');
    return db;
}

// إرسال رسالة مع فحص آلي
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    
    // فحص المحتوى بالذكاء الاصطناعي
    const isClean = await DeepSeek.scanText(input.value); // دالة افتراضية
    
    if(isClean) {
        await orbitInstance.put({ content: input.value, timestamp: Date.now() });
        chatBox.innerHTML += `<div class="message">${input.value}</div>`;
        input.value = '';
    } else {
        alert('الرسالة تحتوي محتوى غير لائق!');
    }
}

// تهيئة الويب 3 للتبرعات
async function initDonation() {
    if(window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
        } catch (error) {
            console.error("الوصول مرفوض");
        }
    }
}

// التهيئة الكاملة
window.addEventListener('load', async () => {
    orbitInstance = await initChat();
    await initDonation();
    console.log("HumanVerse جاهز!");
});
