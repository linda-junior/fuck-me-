
const correctPassword = "porn";  // كلمة المرور الصحيحة

function checkPassword() {
    const inputPassword = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    if (inputPassword === correctPassword) {
        // إخفاء شاشة التحقق وعرض الصفحة الرئيسية
        document.getElementById('password-check').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('body').style.overflow = 'auto'
         // تغيير النص في الـ placeholder إلى "مفتوح"
        document.getElementById('password').placeholder ="Welcome to this website";
          // مسح أي حرف موجود في حقل الإدخال حتى يظهر الـ placeholder
          document.getElementById('password').value = "";  // مسح النص الموجود
            
          sidebar.style.right = '-100%'; // إخفاء الشريط الجانبي
        sidebar.style.transition = 'right 3s ease';
        
        errorMsg.style.display = 'none';
    }
        else {
        // عرض رسالة خطأ إذا كانت كلمة المرور غير صحيحة
        errorMsg.style.display = 'block';

        document.getElementById('password').placeholder ="Password is wrong, try again";
        document.getElementById('password').value = "";  // مسح النص الموجود

        // setTimeout(function() {
        //     window.location.href = 'index.html'; // Replace with your desired URL
        // }, 1000); // Delay of 2 seconds before redirection

    }
}

// إضافة مستمع لزر Enter على حقل كلمة المرور
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});







// الحصول على الأيقونة والشريط الجانبي
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

// إضافة حدث للنقر على الأيقونة
menuIcon.addEventListener('click', function() {
    // التبديل بين حالة إظهار الشريط الجانبي وإخفائه
    if (sidebar.style.right === '-100%' || sidebar.style.right === '') {
        sidebar.style.right = '0'; // إظهار الشريط الجانبي
        sidebar.style.transition = 'right 0.4s ease';

        // sidebar.style.display = 'block'; // تأكد من استخدام علامات الاقتباس
    } else {
        sidebar.style.right = '-100%'; // إخفاء الشريط الجانبي
    }
});

