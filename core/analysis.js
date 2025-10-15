‏document.addEventListener("DOMContentLoaded", () => {
‏  const startButton = document.getElementById("start-analysis");
‏  const questionsSection = document.getElementById("ai-questions");
‏  const blendsSection = document.getElementById("blend-suggestions");
‏  const emotionInput = document.getElementById("emotion-text");
‏
‏  // استرجاع الحالة المحفوظة عند تحميل الصفحة
‏  const savedEmotion = localStorage.getItem("emotionText");
‏  const analysisStarted = localStorage.getItem("analysisStarted");
‏  const analysisCompleted = localStorage.getItem("analysisCompleted");
‏
‏  if (savedEmotion) {
‏    emotionInput.value = savedEmotion;
‏  }
‏
‏  if (analysisStarted === "true") {
‏    showQuestions();
‏  }
‏
‏  if (analysisCompleted === "true") {
‏    showBlends();
‏  }
‏
‏  // عند الضغط على زر "ابدأ التحليل"
‏  startButton.addEventListener("click", () => {
‏    const emotionText = emotionInput.value.trim();
‏    if (!emotionText) {
‏      alert("يرجى كتابة مشاعرك أولاً.");
‏      return;
‏    }
‏
‏    localStorage.setItem("emotionText", emotionText);
‏    localStorage.setItem("analysisStarted", "true");
‏    showQuestions();
‏  });
‏
‏  function showQuestions() {
‏    questionsSection.classList.remove("hidden");
‏    questionsSection.innerHTML = `
‏      <h2>أسئلة تحليلية</h2>
‏      <form id="emotion-form">
‏        <label>هل حالتك مؤقتة أم مستمرة؟</label><br>
‏        <select name="duration" required>
‏          <option value="">اختر</option>
‏          <option value="مؤقتة">مؤقتة</option>
‏          <option value="مستمرة">مستمرة</option>
‏        </select><br><br>
‏
‏        <label>هل ترغب في عطر يرفع طاقتك أم يهدّئك؟</label><br>
‏        <select name="effect" required>
‏          <option value="">اختر</option>
‏          <option value="يرفع الطاقة">يرفع الطاقة</option>
‏          <option value="يهدّئ">يهدّئ</option>
‏        </select><br><br>
‏
‏        <button type="submit">أكمل التحليل</button>
‏      </form>
‏    `;
‏
‏    const form = questionsSection.querySelector("#emotion-form");
‏    form.addEventListener("submit", (e) => {
‏      e.preventDefault();
‏      const duration = form.duration.value;
‏      const effect = form.effect.value;
‏
‏      if (!duration || !effect) {
‏        alert("يرجى الإجابة على جميع الأسئلة.");
‏        return;
‏      }
‏
‏      localStorage.setItem("analysisCompleted", "true");
‏      showBlends();
‏    });
‏  }
‏
‏  function showBlends() {
‏    blendsSection.classList.remove("hidden");
‏    blendsSection.innerHTML = `
‏      <h2>العطور المقترحة لك</h2>
‏
‏      <div class="blend-box">
‏        <h3>خلطة الصفاء | Serenity Blend</h3>
‏        <ul>
‏          <li>ياسمين</li>
‏          <li>لافندر</li>
‏          <li>خشب الصندل</li>
‏        </ul>
‏      </div>
‏
‏      <div class="blend-box">
‏        <h3>خلطة الحماس | Vitality Blend</h3>
‏        <ul>
‏          <li>برغموت</li>
‏          <li>فلفل وردي</li>
‏          <li>عنبر</li>
‏        </ul>
‏      </div>
‏
‏      <div class="blend-box">
‏        <h3>خلطة الاحتواء | Embrace Blend</h3>
‏        <ul>
‏          <li>زهرة البرتقال</li>
‏          <li>مسك أبيض</li>
‏          <li>باتشولي ناعم</li>
‏        </ul>
‏      </div>
‏    `;
‏  }
‏});
‏
