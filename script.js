let currentUser = null;
let users = {};
let currentUserData = null;

const courses = [
    {
        id: 1,
        title: "JavaScript с нуля",
        category: "programming",
        image: "https://th.bing.com/th/id/OIP.tTdSgWkK-QgdyxCiLwZemgHaDo?w=349&h=171&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Полный курс по современному JavaScript. От основ до продвинутых тем.",
        duration: "8 недель",
        lessons: [
            { 
                id: 1,
                title: "Введение в JavaScript", 
                videoId: "fHl7UyRjOf0",
                completed: false 
            },
            { 
                id: 2,
                title: "Переменные и типы данных", 
                videoId: "UHqnpHEXtII",
                completed: false 
            },
            { 
                id: 3,
                title: "Функции и области видимости", 
                videoId: "rJK0eMkI3BE", 
                completed: false 
            },
            { 
                id: 4,
                title: "Массивы и циклы", 
                videoId: "_WlC6UxMyNE", 
                completed: false 
            }
        ],
        progress: 0
    },
    {
        id: 2,
        title: "UI/UX Дизайн для начинающих",
        category: "design",
        image: "data:image/webp;base64,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",
        description: "Научись создавать удобные и красивые интерфейсы.",
        duration: "6 недель",
        lessons: [
            { 
                id: 1,
                title: "Основы UI/UX дизайна", 
                videoId: "IpZa4P9I6LU", 
                completed: false 
            },
            { 
                id: 2,
                title: "Работа в Figma с нуля", 
                videoId: "QxstLdREVYY", 
                completed: false 
            },
            { 
                id: 3,
                title: "Принципы хорошего UX", 
                videoId: "x0LyFUlCVnY", 
                completed: false 
            }
        ],
        progress: 0
    },
    {
        id: 3,
        title: "Python для начинающих",
        category: "programming",
        image: "data:image/webp;base64,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",
        description: "Самый популярный язык программирования в 2026 году.",
        duration: "10 недель",
        lessons: [
            { 
                id: 1,
                title: "Введение в Python", 
                videoId: "34Rp6KVGIEM", 
                completed: false 
            },
            { 
                id: 2,
                title: "Переменные и типы данных в Python", 
                videoId: "DZvNZ9l9NT4", 
                completed: false 
            }
        ],
        progress: 0
    }
];

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    
    const pageElement = document.getElementById(page + '-page');
    if (pageElement) {
        pageElement.style.display = 'block';
    }

    if (page === 'catalog') {
        renderAllCourses();
    }
    if (page === 'home') {
        renderPopularCourses();
    }
    if (page === 'profile') {
        renderProfile();
    }
}

function renderPopularCourses() {
    const container = document.getElementById('popular-courses');
    container.innerHTML = '';
    courses.slice(0, 3).forEach(course => {
        container.innerHTML += createCourseCard(course);
    });
}

function createCourseCard(course) {
    const isEnrolled = currentUser && currentUserData && 
                      currentUserData.enrolledCourses.includes(course.id);
    const progress = course.progress || 0;

    return `
        <div class="course-card" onclick="openCourse(${course.id})">
            <img src="${course.image}" alt="${course.title}">
            <div class="info">
                <span class="category">${course.category}</span>
                <h3>${course.title}</h3>
                <p>${course.description.substring(0, 80)}...</p>
                <small>${course.duration}</small>
                ${isEnrolled ? 
                    `<div style="margin-top:8px;">
                        <div style="background:#eee; height:6px; border-radius:10px; overflow:hidden;">
                            <div style="width:${progress}%; height:100%; background:#27ae60;"></div>
                        </div>
                        <small style="color:#27ae60;">Пройдено: ${progress}%</small>
                    </div>` : ''}
            </div>
        </div>
    `;
}

function renderAllCourses() {
    const container = document.getElementById('all-courses');
    container.innerHTML = '';
    courses.forEach(course => {
        container.innerHTML += createCourseCard(course);
    });
}

function filterCourses() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    const filtered = courses.filter(course => 
        course.title.toLowerCase().includes(search) &&
        (!category || course.category === category)
    );
    
    const container = document.getElementById('all-courses');
    container.innerHTML = '';
    filtered.forEach(course => {
        container.innerHTML += createCourseCard(course);
    });
}

function openCourse(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    const isEnrolled = currentUser && currentUserData && 
                      currentUserData.enrolledCourses.includes(id);

    let buttonHtml = '';
    if (!isEnrolled) {
        buttonHtml = `<button onclick="enrollCourse(${id})" class="btn-primary" style="width:100%; margin-top:20px;">Записаться на курс</button>`;
    } else {
        buttonHtml = `<button onclick="continueCourse(${id})" class="btn-primary" style="width:100%; margin-top:20px;">Продолжить обучение</button>`;
    }

    let html = `
        <button onclick="showPage('catalog')" class="btn-primary" style="margin-bottom:20px;">← Назад к курсам</button>
        <div style="display:flex; gap:40px; flex-wrap:wrap;">
            <div style="flex:1;">
                <img src="${course.image}" style="width:100%; border-radius:12px;">
                <h1>${course.title}</h1>
                <p>${course.description}</p>
                <p><strong>Длительность:</strong> ${course.duration}</p>
            </div>
            <div style="flex:1;">
                <h2>Модули курса</h2>
                <div id="lessons-list"></div>
                ${buttonHtml}
            </div>
        </div>
    `;

    document.getElementById('course-content').innerHTML = html;
    showPage('course');

    // Рендер списка уроков с галочками
    if (course.lessons.length > 0) {
        let lessonsHtml = '';
        course.lessons.forEach((lesson, i) => {
            const isCompleted = lesson.completed || 
                (currentUserData?.progressData[id]?.completedLessons?.includes(lesson.id) || false);

            lessonsHtml += `
                <div style="padding:15px; background:#fff; margin:10px 0; border-radius:8px; cursor:pointer; display:flex; justify-content:space-between; align-items:center;"
                     onclick="startLesson(${id}, ${i})">
                    <strong>${lesson.title}</strong>
                    ${isCompleted ? '<span style="color:#27ae60; font-size:1.3rem;">✓</span>' : ''}
                </div>
            `;
        });
        document.getElementById('lessons-list').innerHTML = lessonsHtml;
    }
}

// Продолжить обучение — переходит к следующему непройденному уроку
function continueCourse(courseId) {
    if (!currentUser || !currentUserData) {
        alert("Сначала войдите в аккаунт!");
        showLoginModal();
        return;
    }

    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    // Загружаем/инициализируем прогресс
    if (!currentUserData.progressData[courseId]) {
        currentUserData.progressData[courseId] = { progress: 0, completedLessons: [] };
    }

    const completed = currentUserData.progressData[courseId].completedLessons || [];

    // Находим индекс первого непройденного урока
    let nextIndex = 0;
    for (let i = 0; i < course.lessons.length; i++) {
        if (!completed.includes(course.lessons[i].id)) {
            nextIndex = i;
            break;
        }
    }

    // Если все уроки пройдены — показываем завершение
    if (nextIndex >= course.lessons.length) {
        showCourseCompletion(course);
    } else {
        startLesson(courseId, nextIndex);
    }
}

function enrollCourse(courseId) {
    if (!currentUser) {
        alert("Сначала войдите или зарегистрируйтесь!");
        showLoginModal();
        return;
    }
    
    if (!currentUserData.enrolledCourses.includes(courseId)) {
        currentUserData.enrolledCourses.push(courseId);
        if (!currentUserData.progressData[courseId]) {
            currentUserData.progressData[courseId] = { progress: 0, completedLessons: [] };
        }
        saveData();
    }
    
    alert("Вы успешно записались на курс!");
    openCourse(courseId);   // сразу открываем курс
}


function startLesson(courseId, lessonIndex) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    const lesson = course.lessons[lessonIndex];
    if (!lesson) return;

    // Восстанавливаем статус всех уроков
    if (currentUser && currentUserData) {
        if (!currentUserData.progressData[courseId]) {
            currentUserData.progressData[courseId] = { progress: 0, completedLessons: [] };
        }

        const savedCompleted = currentUserData.progressData[courseId].completedLessons || [];
        
        course.lessons.forEach(l => {
            l.completed = savedCompleted.includes(l.id);
        });
    }

    lesson.completed = true;
    updateCourseProgress(courseId);

    // Создаём страницу урока
    let html = `
        <button onclick="openCourse(${courseId})" class="btn-primary" style="margin-bottom:20px;">← Назад к курсу</button>
        
        <h1>${lesson.title}</h1>
        <p style="margin:15px 0; color:#555;">
            Урок ${lessonIndex + 1} из ${course.lessons.length} • ${course.title}
        </p>
        
        <div style="position:relative; padding-top:56.25%; background:#000; border-radius:12px; overflow:hidden; margin:25px 0;">
            <iframe 
                style="position:absolute; top:0; left:0; width:100%; height:100%;"
                src="https://www.youtube.com/embed/${lesson.videoId}" 
                title="${lesson.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>

        <div style="margin-top:30px; text-align:center;">
            <button onclick="finishLesson(${courseId}, ${lessonIndex})" class="btn-primary" style="padding:14px 40px; font-size:1.1rem;">
                ✅ Я посмотрел урок — дальше
            </button>
        </div>
    `;

    document.getElementById('course-content').innerHTML = html;
    showPage('course');
}

function finishLesson(courseId, currentLessonIndex) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    // Отмечаем урок как завершённый
    if (course.lessons[currentLessonIndex]) {
        course.lessons[currentLessonIndex].completed = true;
    }

    // Обновляем прогресс и сохраняем
    updateCourseProgress(courseId);

    const nextLessonIndex = currentLessonIndex + 1;

    // Если есть следующий урок — открываем его автоматически
    if (nextLessonIndex < course.lessons.length) {
        startLesson(courseId, nextLessonIndex);
    } 
    // Если это был последний урок — показываем завершение курса
    else {
        showCourseCompletion(course);
    }
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        currentUser = username;
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline-block';
        closeModal();
        alert(`Добро пожаловать, ${username}!`);
        showPage('home');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('loginBtn').style.display = 'inline-block';
    document.getElementById('logoutBtn').style.display = 'none';
    enrolledCourses = [];
}

function renderMyCourses() {
    const container = document.getElementById('my-courses-grid');
    container.innerHTML = '';

    if (!currentUser || !currentUserData || currentUserData.enrolledCourses.length === 0) {
        container.innerHTML = '<p>У вас пока нет записанных курсов.<br>Перейдите в каталог и запишитесь!</p>';
        return;
    }
    
    currentUserData.enrolledCourses.forEach(id => {
        const course = courses.find(c => c.id === id);
        if (course) {
            // Обновляем прогресс курса перед отображением
            updateCourseProgress(id);
            container.innerHTML += createCourseCard(course);
        }
    });
}

// Загрузка данных из localStorage при запуске
function loadData() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) users = JSON.parse(savedUsers);
    
    const savedCurrent = localStorage.getItem('currentUser');
    if (savedCurrent) {
        currentUser = savedCurrent;
        currentUserData = users[currentUser] || { enrolledCourses: [], progressData: {} };
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline-block';
    }
}

// Сохранение данных
function saveData() {
    localStorage.setItem('users', JSON.stringify(users));
    if (currentUser) localStorage.setItem('currentUser', currentUser);
}

// Регистрация / Вход
let isLoginMode = true;

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('modalTitle').textContent = isLoginMode ? 'Вход в аккаунт' : 'Регистрация';
    document.getElementById('switchText').innerHTML = isLoginMode 
        ? 'Нет аккаунта? <span onclick="toggleAuthMode()" style="color:#3498db; cursor:pointer;">Зарегистрироваться</span>'
        : 'Уже есть аккаунт? <span onclick="toggleAuthMode()" style="color:#3498db; cursor:pointer;">Войти</span>';
}

function handleAuth() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        alert("Введите имя пользователя и пароль!");
        return;
    }
    
    if (isLoginMode) {
        // Вход
        if (users[username] && users[username].password === password) {
            currentUser = username;
            currentUserData = users[username];
            saveData();
            closeModal();
            updateUIAfterLogin();
            showPage('home');
        } else {
            alert("Неверное имя пользователя или пароль!");
        }
    } else {
        // Регистрация
        if (users[username]) {
            alert("Пользователь с таким именем уже существует!");
        } else {
            users[username] = {
                password: password,
                enrolledCourses: [],
                progressData: {}
            };
            currentUser = username;
            currentUserData = users[username];
            saveData();
            closeModal();
            updateUIAfterLogin();
            alert(`Аккаунт ${username} успешно создан!`);
            showPage('home');
        }
    }
}

function updateUIAfterLogin() {
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'inline-block';
}

// Выход
function logout() {
    currentUser = null;
    currentUserData = null;
    localStorage.removeItem('currentUser');
    document.getElementById('loginBtn').style.display = 'inline-block';
    document.getElementById('logoutBtn').style.display = 'none';
    showPage('home');
}

function renderProfile() {
    const container = document.getElementById('profile-info');
    
    if (!currentUser || !currentUserData) {
        container.innerHTML = `<p>Войдите в аккаунт, чтобы увидеть профиль.</p>`;
        return;
    }

    let html = `<h3>Привет, ${currentUser}!</h3><h4>Ваш прогресс обучения</h4>`;

    if (currentUserData.enrolledCourses.length === 0) {
        html += `<p>Вы ещё не записались ни на один курс.</p>`;
    } else {
        html += `<div class="courses-grid" style="grid-template-columns:1fr;">`;
        
        currentUserData.enrolledCourses.forEach(id => {
            const course = courses.find(c => c.id === id);
            if (!course) return;
            updateCourseProgress(id); // обновляем перед отображением
            const progress = course.progress || 0;

            html += `
                <div style="background:white; padding:15px; border-radius:12px; margin-bottom:15px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                    <div style="display:flex; justify-content:space-between;">
                        <strong>${course.title}</strong>
                        <span style="color:#27ae60;">${progress}%</span>
                    </div>
                    <div style="background:#eee; height:8px; border-radius:10px; margin:8px 0; overflow:hidden;">
                        <div style="width:${progress}%; height:100%; background:#27ae60;"></div>
                    </div>
                    <small>${course.lessons.filter(l => l.completed).length} из ${course.lessons.length} уроков</small>
                </div>
            `;
        });
        html += `</div>`;
    }

    container.innerHTML = html;
}

// Инициализация
window.onload = () => {
    showPage('home');
    // Демо-данные
    if (!localStorage.getItem('demoInitialized')) {
        enrolledCourses = [1];
        localStorage.setItem('demoInitialized', 'true');
    }
};

// Обновление прогресса курса
function updateCourseProgress(courseId) {
    if (!currentUser || !currentUserData) return;

    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    if (!currentUserData.progressData[courseId]) {
        currentUserData.progressData[courseId] = { progress: 0, completedLessons: [] };
    }

    const progressData = currentUserData.progressData[courseId];

    // Собираем завершённые уроки
    progressData.completedLessons = course.lessons
        .filter(lesson => lesson.completed)
        .map(lesson => lesson.id);

    const total = course.lessons.length;
    const completed = progressData.completedLessons.length;
    progressData.progress = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Копируем прогресс в глобальный курс (чтобы карточки показывали актуальные данные)
    course.progress = progressData.progress;

    saveData();
}

// Показать экран завершения курса
function showCourseCompletion(course) {
    let html = `
        <button onclick="openCourse(${course.id})" class="btn-primary" style="margin-bottom:20px;">← Назад к курсу</button>
        
        <div style="text-align:center; padding:60px 20px; background:white; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
            <h1 style="font-size:3rem; color:#27ae60;">🎉 Поздравляем!</h1>
            <h2>Вы успешно завершили курс</h2>
            <p style="font-size:1.3rem; margin:20px 0;">«${course.title}»</p>
            
            <div style="margin:30px 0;">
                <div style="font-size:4rem;">🏆</div>
                <p style="font-size:1.5rem; color:#27ae60;">Прогресс: ${course.progress}%</p>
            </div>

            <button onclick="openCourse(${course.id})" class="btn-primary" style="padding:15px 40px; font-size:1.2rem;">
                Вернуться к курсу
            </button>
            
            <button onclick="showPage('myCourses')" class="btn-primary" style="margin-left:15px; background:#34495e;">
                Перейти в «Мои курсы»
            </button>
        </div>
    `;

    document.getElementById('course-content').innerHTML = html;
    showPage('course');
}

window.onload = () => {
    loadData();
    showPage('home');
};

// Техническая поддержка
function sendSupportMessage(e) {
    e.preventDefault();
    
    const name = document.getElementById('supportName').value;
    const email = document.getElementById('supportEmail').value;
    const subject = document.getElementById('supportSubject').value;
    const message = document.getElementById('supportMessage').value;

    if (!message.trim()) {
        alert("Пожалуйста, напишите сообщение.");
        return;
    }

    // Симуляция отправки
    alert(`✅ Сообщение отправлено!\n\nИмя: ${name}\nТема: ${subject}\n\nСпасибо! Мы свяжемся с вами в ближайшее время.`);

    // Очистка формы
    document.getElementById('supportForm').reset();
    if (currentUser) {
        document.getElementById('supportName').value = currentUser;
    }
}

if (page === 'support') {

}

// Отправка обычного сообщения поддержки
function sendSupportMessage(e) {
    e.preventDefault();
    alert("✅ Ваше сообщение отправлено в службу поддержки!\n\nМы свяжемся с вами в ближайшее время.");
    document.getElementById('supportForm').reset();
}

// Симуляция чата с ботом
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    const chatMessages = document.getElementById('chatMessages');

    // Добавляем сообщение пользователя
    chatMessages.innerHTML += `
        <div style="align-self:flex-end; background:#3498db; color:white; padding:10px 15px; border-radius:18px 18px 4px 18px; max-width:80%;">
            ${message}
        </div>
    `;

    input.value = '';

    // Прокрутка вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Симуляция ответа бота через 800мс
    setTimeout(() => {
        let botReply = "Спасибо за сообщение! Наш специалист скоро свяжется с вами.";

        if (message.toLowerCase().includes("видео") || message.toLowerCase().includes("не играет")) {
            botReply = "Проверьте, пожалуйста, подключение к интернету. Если проблема остаётся — напишите в Telegram @EduPlatformSupport";
        } else if (message.toLowerCase().includes("курс") || message.toLowerCase().includes("не открывается")) {
            botReply = "Попробуйте обновить страницу (Ctrl + F5). Если не поможет — опишите подробнее проблему.";
        }

        chatMessages.innerHTML += `
            <div style="align-self:flex-start; background:#eee; padding:10px 15px; border-radius:18px 18px 18px 4px; max-width:80%;">
                ${botReply}
            </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
}

// Переключение чата
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const toggleBtn = document.getElementById('chatToggleBtn');

    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'block';
        toggleBtn.style.display = 'none';

        // Приветствие при первом открытии
        const messages = document.getElementById('chatMessages');
        if (messages.children.length === 0) {
            messages.innerHTML = `
                <div style="align-self: flex-start; background: #e0e0e0; padding: 12px 16px; border-radius: 18px 18px 18px 4px; max-width: 85%;">
                    Здравствуйте! 👋 Чем я могу вам помочь сегодня?
                </div>
            `;
        }
    } else {
        chatWindow.style.display = 'none';
        toggleBtn.style.display = 'flex';
    }
}

// Отправка сообщения
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    const chatMessages = document.getElementById('chatMessages');

    chatMessages.innerHTML += `
        <div style="align-self: flex-end; background: #3498db; color: white; padding: 12px 16px; border-radius: 18px 18px 4px 18px; max-width: 80%;">
            ${text}
        </div>
    `;

    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Ответ бота
    setTimeout(() => {
        let reply = "Спасибо за сообщение! Наш специалист скоро свяжется с вами.";

        if (text.toLowerCase().includes("видео") || text.toLowerCase().includes("не играет")) {
            reply = "Пожалуйста, проверьте интернет. Если проблема остаётся — напишите в Telegram @Sawokerka";
        } else if (text.toLowerCase().includes("курс")) {
            reply = "Вы можете записаться на курс в разделе «Курсы». Если есть ошибка — опишите её подробнее.";
        }

        chatMessages.innerHTML += `
            <div style="align-self: flex-start; background: #f1f1f1; padding: 12px 16px; border-radius: 18px 18px 18px 4px; max-width: 80%;">
                ${reply}
            </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
}
