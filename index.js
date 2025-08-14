document.addEventListener('DOMContentLoaded', function() {
    const adPopup = document.getElementById('adPopup');
    const closeAdBtn = document.querySelector('.ad-popup-content .close-popup');
    const adDelayTime = 5000;

    const loginPopup = document.getElementById('loginPopup');
    const fullNameInput = document.getElementById('fullName');
    const villageNameInput = document.getElementById('villageName');
    const submitLoginBtn = document.getElementById('submitLogin');
    const mainContent = document.querySelector('.main-content-wrapper');
    const fullNameError = document.getElementById('fullNameError');
    const villageNameError = document.getElementById('villageNameError');

    // الرابط الصحيح لإرسال البيانات إلى نموذج جوجل
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvyHVV87yFNXqGSLtpwq-sto4nCu6uAST_xZ3rwgZarzYFVw/formResponse";

    function showAdPopup() {
        adPopup.classList.add('show');
    }

    function hideAdPopup() {
        adPopup.classList.remove('show');
    }

    closeAdBtn.addEventListener('click', hideAdPopup);

    adPopup.addEventListener('click', function(event) {
        if (event.target === adPopup) {
            hideAdPopup();
        }
    });

    function showLoginPopup() {
        loginPopup.classList.add('show');
        document.body.classList.add('popup-active');
        setTimeout(() => {
            fullNameInput.focus();
        }, 100);
    }

    function hideLoginPopup() {
        loginPopup.classList.remove('show');
        document.body.classList.remove('popup-active');
        mainContent.style.display = 'block';
    }

    const hasSubmitted = localStorage.getItem('hasSubmitted');

    if (hasSubmitted) {
        hideLoginPopup();
        setTimeout(showAdPopup, adDelayTime);
    } else {
        showLoginPopup();
    }
    
    function clearErrors() {
        fullNameError.classList.remove('show');
        villageNameError.classList.remove('show');
        fullNameError.textContent = '';
        villageNameError.textContent = '';
    }

    submitLoginBtn.addEventListener('click', function() {
        clearErrors();
        const fullName = fullNameInput.value.trim();
        const villageName = villageNameInput.value.trim();
        const nameWords = fullName.split(' ').filter(word => word.length > 0);

        let hasError = false;

        // التحقق من الاسم الرباعي والأحرف
        if (fullName === "") {
            fullNameError.textContent = "الرجاء إدخال اسمك الرباعي.";
            fullNameError.classList.add('show');
            hasError = true;
        } else if (!/^[\u0600-\u06FF\s]+$/.test(fullName)) {
            fullNameError.textContent = "الاسم يجب أن يحتوي على حروف عربية ومسافات فقط.";
            fullNameError.classList.add('show');
            hasError = true;
        } else if (nameWords.length < 4) {
            fullNameError.textContent = "الرجاء إدخال اسم رباعي على الأقل (ثلاثي مع اللقب).";
            fullNameError.classList.add('show');
            hasError = true;
        }
        
        // التحقق من القرية
        if (villageName === "") {
            villageNameError.textContent = "الرجاء إدخال اسم القرية/المنطقة.";
            villageNameError.classList.add('show');
            hasError = true;
        }

        if (hasError) {
            return;
        }
        
        // إظهار حالة التحميل للزر
        submitLoginBtn.disabled = true;
        submitLoginBtn.textContent = 'جارٍ الدخول...';

        // أولاً: نقوم بإخفاء النافذة وفتح الموقع للزائر
        localStorage.setItem('hasSubmitted', 'true');
        hideLoginPopup();
        alert("شكراً لك يا " + fullName + " من قرية " + villageName + "! استمتع بزيارة موقعنا.");
        setTimeout(showAdPopup, adDelayTime);

        // ثانياً: في الخلفية، نقوم بإرسال البيانات إلى نموذج جوجل
        const formData = new FormData();
        // تم تعديل معرفات الحقول هنا
        formData.append('entry.1947596729', fullName); 
        formData.append('entry.542761726', villageName); 

        fetch(googleFormUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // يجب استخدام 'no-cors' لتجنب مشاكل الأمان
        }).then(response => {
            console.log("تم إرسال البيانات بنجاح إلى نموذج جوجل.");
        }).catch(error => {
            console.error("حدث خطأ أثناء إرسال البيانات:", error);
        });
    });
});
