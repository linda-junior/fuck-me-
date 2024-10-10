
    console.log("Welcome to ( X fuck me ) Site 🔒⛓️‍💥")



const correctPassword = "porn";  // كلمة المرور الصحيحة

function checkPassword() {
    const inputPassword = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (inputPassword === correctPassword) {
        // إخفاء شاشة التحقق وعرض الصفحة الرئيسية
        document.getElementById('password-check').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('body').style.overflow = 'auto';
        
        document.getElementById('password').placeholder = "Welcome to this website";
        
        document.getElementById('password').value = "";  // مسح النص الموجود
        
        document.getElementById('password').blur(); // فقدان التركيز لإخفاء لوحة المفاتيح
        
        // إخفاء السايدبار
        sidebar.style.right = '-100%';   
        isSidebarOpen = false; // تحديث حالة السايد بار

        // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️  المشكله انها بتذهب الي اليمين وهي فعليا مفتوحه وانا لم اغلقها شخصيا
        // فعند السحب من اي مكان في الشاشه ستعود لانها اساسا غير مغلقه


        sidebar.style.transition = 'right 3s ease';
        
        errorMsg.style.display = 'none';

        console.log(" X fuck me Site is Open ⛓️‍💥 ")

    } else {
        errorMsg.style.display = 'block';
        
        document.getElementById('password').placeholder = "Password is wrong, try again";
        document.getElementById('password').value = "";  // مسح النص الموجود
    }
}

// إضافة مستمع لزر Enter على حقل كلمة المرور
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});



// MenuIcon & Sidebar ********************************************************************



// // الحصول على الأيقونة والشريط الجانبي
// const menuIcon = document.getElementById('menuIcon');
// const sidebar = document.getElementById('sidebar');
// let startX = 0;
// let currentX = 0;
// let isDragging = false;
// let isSidebarOpen = false; // حالة السايد بار (مفتوح أو مغلق)

// // إضافة حدث للنقر على الأيقونة
// menuIcon.addEventListener('click', function() {
//     if (isSidebarOpen) {
//         sidebar.style.right = '-100%'; // إخفاء الشريط الجانبي
//         isSidebarOpen = false;
//     } else {
//         sidebar.style.right = '0'; // إظهار الشريط الجانبي
//         sidebar.style.transition = 'right 0.4s ease';
//         isSidebarOpen = true;
//     }
// });

// // عندما يبدأ اللمس
// document.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
//     // إذا كان السايدبار مغلقًا، تأكد من أن السحب بدأ من مسافة أقل من 10vw
//     if (!isSidebarOpen && startX >= window.innerWidth - (window.innerWidth * 0.1)) {
//         isDragging = true;
//         currentX = startX; // إعادة ضبط currentX عند بداية اللمس
//     } else if (isSidebarOpen) {
//         // إذا كان السايد بار مفتوحًا، يمكن بدء السحب من أي مكان
//         isDragging = true;
//         currentX = startX;
//     }
// });

// // عندما يتم تحريك اللمس
// document.addEventListener('touchmove', (e) => {
//     if (isDragging) {
//         currentX = e.touches[0].clientX;

//         // حساب الفرق بين الموقع الحالي وموقع البداية
//         const deltaX = startX - currentX; // تعديل لاتجاه السحب (لليمين أو اليسار)

//         if (!isSidebarOpen) {
//             // إذا كان السايد بار مغلقًا وسُحب إلى اليسار لفتحه
//             if (deltaX < 0) {
//                 sidebar.style.right = Math.min(-deltaX, 500) + 'px';
//             }
//         } else {
//             // إذا كان السايد بار مفتوحًا وسُحب إلى اليمين لإغلاقه
//             if (deltaX > 0) {
//                 sidebar.style.right = Math.max(-deltaX, -500) + 'px';
//             }
//         }
//     }
// });

// // عندما ينتهي اللمس
// document.addEventListener('touchend', () => {
//     if (isDragging) {
//         isDragging = false;

//         // إذا كان الفرق كبيرًا كفاية لفتح أو إغلاق السايد بار
//         if (!isSidebarOpen && startX - currentX > 100) {
//             sidebar.style.right = '0'; // فتح السايد بار
//             isSidebarOpen = true;
//         } else if (isSidebarOpen && startX - currentX < -100) {
//             sidebar.style.right = '-100%'; // إخفاء السايد بار
//             isSidebarOpen = false;
//         } else {
//             // إرجاع السايد بار إلى حالته السابقة إذا لم يكن السحب كافيًا
//             sidebar.style.right = isSidebarOpen ? '0' : '-100%';
//         }
//     }
// });














// الحصول على الأيقونة والشريط الجانبي



const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
let startX = 0;
let currentX = 0;
let isDragging = false;
let isSidebarOpen = false; // حالة السايد بار (مفتوح أو مغلق)

// إضافة حدث للنقر على الأيقونة
menuIcon.addEventListener('click', function() {
    if (isSidebarOpen) {
        sidebar.style.right = '-100%'; // إخفاء الشريط الجانبي
        isSidebarOpen = false;
    } else {
        sidebar.style.right = '0'; // إظهار الشريط الجانبي
        sidebar.style.transition = 'right 0.3s ease';
        isSidebarOpen = true;
    }
});

// عندما يبدأ اللمس
document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    // إذا كان السايدبار مغلقًا، تأكد من أن السحب بدأ من مسافة أقل من 10vw
    if (!isSidebarOpen && startX >= window.innerWidth - (window.innerWidth * 0.2)) {
        isDragging = true;
        currentX = startX; // إعادة ضبط currentX عند بداية اللمس
        console.log("sidepar is open")
    }
    else if (isSidebarOpen) {
        // إذا كان السايد بار مفتوحًا، يمكن بدء السحب من أي مكان
        isDragging = true;
        currentX = startX;
        console.log("sidepar is closed")
    }
});

// عندما يتم تحريك اللمس
document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        currentX = e.touches[0].clientX;

        // حساب الفرق بين الموقع الحالي وموقع البداية
        const deltaX = startX - currentX; // تعديل لاتجاه السحب (لليمين أو اليسار)

        if (!isSidebarOpen) {
            // إذا كان السايد بار مغلقًا وسُحب إلى اليسار لفتحه
            if (deltaX < 0) {
                sidebar.style.right = Math.min(-deltaX, 500) + 'px';
            }
        } else {
            // إذا كان السايد بار مفتوحًا وسُحب إلى اليمين لإغلاقه
            if (deltaX > 0) {
                sidebar.style.right = Math.max(-deltaX, -500) + 'px';
            }
        }
    }
});

// عندما ينتهي اللمس
document.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;

        // إذا كان الفرق كبيرًا كفاية لفتح أو إغلاق السايد بار
        if (!isSidebarOpen && startX - currentX > 100) {
            sidebar.style.right = '0'; // فتح السايد بار
            isSidebarOpen = true;
        } else if (isSidebarOpen && startX - currentX < -100) {
            sidebar.style.right = '-100%'; // إخفاء السايد بار
            isSidebarOpen = false;
        } else {
            // إرجاع السايد بار إلى حالته السابقة إذا لم يكن السحب كافيًا
            sidebar.style.right = isSidebarOpen ? '0' : '-100%';
        }
    }
});

