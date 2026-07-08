// ===== 1 Crore Challenge - Main JavaScript =====

// ===== App State =====
const AppState = {
    // Goal settings
    goalAmount: 1000000,
    deadline: new Date(),
    
    // Income entries
    incomeEntries: [],
    
    // Achievements
    achievements: [
        { id: 'firstSale', name: 'First Sale', description: 'Earn your first rupee', target: 1, unlocked: false, type: 'milestone' },
        { id: 'tenThousand', name: 'NPR 10,000 Earned', description: 'Reach 10,000 rupees', target: 10000, unlocked: false, type: 'milestone' },
        { id: 'fiftyThousand', name: 'NPR 50,000 Earned', description: 'Reach 50,000 rupees', target: 50000, unlocked: false, type: 'milestone' },
        { id: 'oneLakh', name: 'NPR 1 Lakh', description: 'Reach 100,000 rupees', target: 100000, unlocked: false, type: 'milestone' },
        { id: 'fiveLakh', name: 'NPR 5 Lakh', description: 'Reach 500,000 rupees', target: 500000, unlocked: false, type: 'milestone' },
        { id: 'tenLakh', name: 'NPR 10 Lakh', description: 'Reach 1,000,000 rupees', target: 1000000, unlocked: false, type: 'milestone' },
        { id: 'twentyFiveLakh', name: 'NPR 25 Lakh', description: 'Reach 2,500,000 rupees', target: 2500000, unlocked: false, type: 'milestone' },
        { id: 'fiftyLakh', name: 'NPR 50 Lakh', description: 'Reach 5,000,000 rupees', target: 5000000, unlocked: false, type: 'milestone' },
        { id: 'seventyFiveLakh', name: 'NPR 75 Lakh', description: 'Reach 7,500,000 rupees', target: 7500000, unlocked: false, type: 'milestone' },
        { id: 'oneCrore', name: 'NPR 1 Crore', description: 'Reach 10,000,000 rupees', target: 10000000, unlocked: false, type: 'milestone' },
        { id: 'sevenDayStreak', name: '7-Day Streak', description: 'Earn for 7 consecutive days', target: 7, unlocked: false, type: 'streak' },
        { id: 'thirtyDayStreak', name: '30-Day Streak', description: 'Earn for 30 consecutive days', target: 30, unlocked: false, type: 'streak' },
        { id: 'hundredDayStreak', name: '100-Day Streak', description: 'Earn for 100 consecutive days', target: 100, unlocked: false, type: 'streak' }
    ],
    
    // Theme
    theme: 'system',
    
    // Current view
    currentSection: 'dashboard',
    
    // Calendar state
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    
    // Confirmation action
    confirmAction: null,
    confirmData: null
};

// ===== DOM Elements =====
const DOM = {
    // Sidebar
    sidebar: document.querySelector('.sidebar'),
    sidebarToggle: document.querySelector('.sidebar-toggle'),
    menuBtn: document.querySelector('.menu-btn'),
    navItems: document.querySelectorAll('.nav-item'),
    
    // Main content
    mainContent: document.querySelector('.main-content'),
    
    // Sections
    sections: document.querySelectorAll('.section'),
    pageTitle: document.getElementById('pageTitle'),
    
    // Modals
    settingsModal: document.getElementById('settingsModal'),
    addIncomeModal: document.getElementById('addIncomeModal'),
    editIncomeModal: document.getElementById('editIncomeModal'),
    confirmModal: document.getElementById('confirmModal'),
    
    // Toast
    achievementToast: document.getElementById('achievementToast'),
    
    // Settings form
    goalAmountInput: document.getElementById('goalAmount'),
    deadlineInput: document.getElementById('deadline'),
    
    // Add income form
    incomeAmountInput: document.getElementById('incomeAmount'),
    incomeDateInput: document.getElementById('incomeDate'),
    incomeNotesInput: document.getElementById('incomeNotes'),
    
    // Edit income form
    editIncomeIdInput: document.getElementById('editIncomeId'),
    editIncomeAmountInput: document.getElementById('editIncomeAmount'),
    editIncomeDateInput: document.getElementById('editIncomeDate'),
    editIncomeNotesInput: document.getElementById('editIncomeNotes'),
    
    // Confirmation modal
    confirmMessage: document.getElementById('confirmMessage'),
    
    // Dashboard elements
    totalGoal: document.getElementById('totalGoal'),
    totalEarned: document.getElementById('totalEarned'),
    remainingAmount: document.getElementById('remainingAmount'),
    percentageCompleted: document.getElementById('percentageCompleted'),
    daysPassed: document.getElementById('daysPassed'),
    daysRemaining: document.getElementById('daysRemaining'),
    todaysTarget: document.getElementById('todaysTarget'),
    todaysEarnings: document.getElementById('todaysEarnings'),
    avgDailyEarnings: document.getElementById('avgDailyEarnings'),
    requiredDaily: document.getElementById('requiredDaily'),
    circularProgress: document.getElementById('circularProgress'),
    circularProgressValue: document.getElementById('circularProgressValue'),
    motivationQuote: document.getElementById('motivationQuote'),
    motivationMessage: document.getElementById('motivationMessage'),
    sidebarProgress: document.getElementById('sidebarProgress'),
    sidebarProgressBar: document.getElementById('sidebarProgressBar'),
    sidebarEarned: document.getElementById('sidebarEarned'),
    countdown: document.getElementById('countdown'),
    recentEntriesTable: document.getElementById('recentEntriesTable'),
    
    // Tracker elements
    trackerTodaysTotal: document.getElementById('trackerTodaysTotal'),
    trackerThisWeek: document.getElementById('trackerThisWeek'),
    trackerThisMonth: document.getElementById('trackerThisMonth'),
    incomeHistoryBody: document.getElementById('incomeHistoryBody'),
    filterMonth: document.getElementById('filterMonth'),
    searchEntries: document.getElementById('searchEntries'),
    quickAmount: document.getElementById('quickAmount'),
    quickDate: document.getElementById('quickDate'),
    quickNotes: document.getElementById('quickNotes'),
    
    // Analytics elements
    highestDay: document.getElementById('highestDay'),
    lowestDay: document.getElementById('lowestDay'),
    avgEarnings: document.getElementById('avgEarnings'),
    bestMonth: document.getElementById('bestMonth'),
    currentStreak: document.getElementById('currentStreak'),
    longestStreak: document.getElementById('longestStreak'),
    analyticsRemaining: document.getElementById('analyticsRemaining'),
    predictedFinish: document.getElementById('predictedFinish'),
    
    // Calculator elements
    calcDailyTarget: document.getElementById('calcDailyTarget'),
    calcWeeklyTarget: document.getElementById('calcWeeklyTarget'),
    calcMonthlyTarget: document.getElementById('calcMonthlyTarget'),
    calcCatchup: document.getElementById('calcCatchup'),
    calcCompletion: document.getElementById('calcCompletion'),
    calcDaysBehind: document.getElementById('calcDaysBehind'),
    projectionFill: document.getElementById('projectionFill'),
    projectionMarker: document.getElementById('projectionMarker'),
    
    // Achievements elements
    achievementsUnlocked: document.getElementById('achievementsUnlocked'),
    achievementsTotal: document.getElementById('achievementsTotal'),
    achievementsProgress: document.getElementById('achievementsProgress'),
    achievementsGrid: document.getElementById('achievementsGrid'),
    
    // Calendar elements
    calendarMonthYear: document.getElementById('calendarMonthYear'),
    calendarDays: document.getElementById('calendarDays'),
    calendarTotal: document.getElementById('calendarTotal'),
    calendarDaysWithEarnings: document.getElementById('calendarDaysWithEarnings'),
    calendarAvgDaily: document.getElementById('calendarAvgDaily'),
    
    // Current year
    currentYear: document.getElementById('currentYear'),
    
    // Import file
    importFile: document.getElementById('importFile')
};

// ===== Motivational Quotes =====
const quotes = [
    '"Every rupee counts. Keep going!"',
    '"Success is the sum of small efforts, repeated day in and day out." - Robert Collier',
    '"The secret of getting ahead is getting started." - Mark Twain',
    '"Small daily improvements over time lead to stunning results." - Robin Sharma',
    '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
    '"You are 35% closer to your dream."',
    '"Keep going. Every rupee counts."',
    '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"Your time is limited, don\'t waste it living someone else\'s life." - Steve Jobs',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
    '"Strive not to be a success, but rather to be of value." - Albert Einstein'
];

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Load saved data
    loadData();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize UI
    initializeUI();
    
    // Update all displays
    updateAllDisplays();
    
    // Start countdown timer
    startCountdown();
    
    // Set current year in footer
    DOM.currentYear.textContent = new Date().getFullYear();
    
    // Initialize charts
    initializeCharts();
}

// ===== Data Management =====
function loadData() {
    const savedData = localStorage.getItem('croreChallengeData');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            // Load goal settings
            if (data.goalAmount !== undefined) {
                AppState.goalAmount = data.goalAmount;
            }
            if (data.deadline) {
                AppState.deadline = new Date(data.deadline);
            } else {
                // Set default deadline to 365 days from now
                AppState.deadline = new Date();
                AppState.deadline.setDate(AppState.deadline.getDate() + 365);
            }
            
            // Load income entries
            if (data.incomeEntries) {
                AppState.incomeEntries = data.incomeEntries.map(entry => ({
                    ...entry,
                    date: new Date(entry.date)
                }));
            }
            
            // Load achievements
            if (data.achievements) {
                AppState.achievements = data.achievements;
            }
            
            // Load theme
            if (data.theme) {
                AppState.theme = data.theme;
            }
            
            // Apply theme
            applyTheme();
            
        } catch (error) {
            console.error('Error loading data:', error);
        }
    } else {
        // Set default deadline to 365 days from now
        AppState.deadline = new Date();
        AppState.deadline.setDate(AppState.deadline.getDate() + 365);
    }
    
    // Check achievements
    checkAchievements();
}

function saveData() {
    const data = {
        goalAmount: AppState.goalAmount,
        deadline: AppState.deadline.toISOString(),
        incomeEntries: AppState.incomeEntries.map(entry => ({
            ...entry,
            date: entry.date.toISOString()
        })),
        achievements: AppState.achievements,
        theme: AppState.theme
    };
    
    localStorage.setItem('croreChallengeData', JSON.stringify(data));
}

function exportData() {
    const data = {
        goalAmount: AppState.goalAmount,
        deadline: AppState.deadline.toISOString(),
        incomeEntries: AppState.incomeEntries.map(entry => ({
            ...entry,
            date: entry.date.toISOString()
        })),
        achievements: AppState.achievements,
        theme: AppState.theme,
        exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `1-crore-challenge-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    closeSettings();
}

function importData() {
    DOM.importFile.click();
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            // Validate data
            if (!data.goalAmount || !data.deadline || !data.incomeEntries) {
                showToast('Invalid import file', 'Please select a valid export file');
                return;
            }
            
            // Import data
            AppState.goalAmount = data.goalAmount;
            AppState.deadline = new Date(data.deadline);
            AppState.incomeEntries = data.incomeEntries.map(entry => ({
                ...entry,
                date: new Date(entry.date)
            }));
            AppState.achievements = data.achievements || AppState.achievements;
            AppState.theme = data.theme || AppState.theme;
            
            // Save and update
            saveData();
            applyTheme();
            updateAllDisplays();
            checkAchievements();
            
            showToast('Data Imported', 'Your data has been successfully imported');
            closeSettings();
            
        } catch (error) {
            showToast('Import Failed', 'There was an error importing your data');
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

function resetData() {
    // Reset to default state
    AppState.goalAmount = 1000000;
    AppState.deadline = new Date();
    AppState.deadline.setDate(AppState.deadline.getDate() + 365);
    AppState.incomeEntries = [];
    AppState.achievements = AppState.achievements.map(a => ({ ...a, unlocked: false }));
    
    // Save and update
    saveData();
    updateAllDisplays();
    
    closeConfirmModal();
    showToast('Data Reset', 'All data has been reset to default');
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Sidebar toggle
    DOM.sidebarToggle.addEventListener('click', toggleSidebar);
    DOM.menuBtn.addEventListener('click', toggleSidebar);
    
    // Navigation
    DOM.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            switchSection(section);
            toggleSidebar();
        });
    });
    
    // Settings form
    DOM.goalAmountInput.addEventListener('input', (e) => {
        const value = parseInt(e.target.value) || 0;
        if (value > 0) {
            AppState.goalAmount = value;
        }
    });
    
    DOM.deadlineInput.addEventListener('change', (e) => {
        const date = new Date(e.target.value);
        if (!isNaN(date.getTime())) {
            AppState.deadline = date;
        }
    });
    
    // Quick add form
    DOM.quickAmount.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            quickAddIncome();
        }
    });
    
    DOM.quickDate.addEventListener('change', (e) => {
        const date = new Date(e.target.value);
        if (!isNaN(date.getTime())) {
            DOM.quickDate.value = formatDateForInput(date);
        }
    });
    
    // Filter and search
    DOM.filterMonth.addEventListener('change', filterEntries);
    DOM.searchEntries.addEventListener('input', filterEntries);
    
    // Add income form
    DOM.incomeAmountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addIncomeEntry();
        }
    });
    
    // Edit income form
    DOM.editIncomeAmountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            updateIncomeEntry();
        }
    });
    
    // Calendar navigation
    document.querySelectorAll('.calendar-controls button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const action = btn.querySelector('i').classList.contains('fa-chevron-left') ? 'prev' : 'next';
            if (action === 'prev') {
                prevMonth();
            } else {
                nextMonth();
            }
        });
    });
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
        if (e.key === 'a' && e.ctrlKey) {
            e.preventDefault();
            openAddIncome();
        }
    });
    
    // Window resize
    window.addEventListener('resize', handleResize);
}

// ===== UI Functions =====
function initializeUI() {
    // Set default date inputs
    const today = new Date();
    DOM.incomeDateInput.value = formatDateForInput(today);
    DOM.editIncomeDateInput.value = formatDateForInput(today);
    DOM.quickDate.value = formatDateForInput(today);
    DOM.deadlineInput.value = formatDateForInput(AppState.deadline);
    DOM.goalAmountInput.value = AppState.goalAmount;
    
    // Populate filter months
    populateFilterMonths();
    
    // Initialize calendar
    renderCalendar();
    
    // Render achievements
    renderAchievements();
}

function toggleSidebar() {
    DOM.sidebar.classList.toggle('active');
    DOM.mainContent.classList.toggle('sidebar-open');
}

function switchSection(section) {
    AppState.currentSection = section;
    
    // Update active nav item
    DOM.navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === section) {
            item.classList.add('active');
        }
    });
    
    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        tracker: 'Daily Tracker',
        analytics: 'Analytics',
        calculator: 'Goal Calculator',
        achievements: 'Achievements',
        calendar: 'Calendar',
        settings: 'Settings'
    };
    DOM.pageTitle.textContent = titles[section] || 'Dashboard';
    
    // Show section
    DOM.sections.forEach(s => {
        s.classList.remove('active');
        if (s.id === section) {
            s.classList.add('active');
        }
    });
    
    // Update charts if analytics section
    if (section === 'analytics') {
        updateCharts();
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        DOM.sidebar.classList.remove('active');
    }
}

function handleResize() {
    if (window.innerWidth > 1024) {
        DOM.sidebar.classList.remove('active');
    }
}

// ===== Modal Functions =====
function openSettings() {
    DOM.settingsModal.classList.add('active');
    DOM.goalAmountInput.value = AppState.goalAmount;
    DOM.deadlineInput.value = formatDateForInput(AppState.deadline);
    
    // Update theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(`'${AppState.theme}'`)) {
            btn.classList.add('active');
        }
    });
}

function closeSettings() {
    DOM.settingsModal.classList.remove('active');
}

function saveSettings() {
    const goalAmount = parseInt(DOM.goalAmountInput.value) || 1000000;
    const deadline = new Date(DOM.deadlineInput.value);
    
    if (isNaN(deadline.getTime())) {
        showToast('Invalid Date', 'Please enter a valid deadline date');
        return;
    }
    
    AppState.goalAmount = goalAmount;
    AppState.deadline = deadline;
    
    saveData();
    updateAllDisplays();
    closeSettings();
    showToast('Settings Saved', 'Your settings have been updated');
}

function openAddIncome() {
    DOM.addIncomeModal.classList.add('active');
    DOM.incomeAmountInput.value = '';
    DOM.incomeDateInput.value = formatDateForInput(new Date());
    DOM.incomeNotesInput.value = '';
    DOM.incomeAmountInput.focus();
}

function closeAddIncome() {
    DOM.addIncomeModal.classList.remove('active');
}

function openEditIncome(id) {
    const entry = AppState.incomeEntries.find(e => e.id === id);
    if (!entry) return;
    
    DOM.editIncomeModal.classList.add('active');
    DOM.editIncomeIdInput.value = entry.id;
    DOM.editIncomeAmountInput.value = entry.amount;
    DOM.editIncomeDateInput.value = formatDateForInput(entry.date);
    DOM.editIncomeNotesInput.value = entry.notes || '';
    DOM.editIncomeAmountInput.focus();
}

function closeEditIncome() {
    DOM.editIncomeModal.classList.remove('active');
}

function openConfirmModal(message, action, data = null) {
    AppState.confirmAction = action;
    AppState.confirmData = data;
    DOM.confirmMessage.textContent = message;
    DOM.confirmModal.classList.add('active');
}

function closeConfirmModal() {
    AppState.confirmAction = null;
    AppState.confirmData = null;
    DOM.confirmModal.classList.remove('active');
}

function executeConfirmAction() {
    if (AppState.confirmAction) {
        AppState.confirmAction(AppState.confirmData);
    }
    closeConfirmModal();
}

function confirmReset() {
    openConfirmModal(
        'Are you sure you want to reset all data? This action cannot be undone.',
        resetData
    );
}

function confirmDeleteIncome() {
    const id = DOM.editIncomeIdInput.value;
    openConfirmModal(
        'Are you sure you want to delete this income entry?',
        deleteIncomeEntry,
        id
    );
    closeEditIncome();
}

function closeAllModals() {
    closeSettings();
    closeAddIncome();
    closeEditIncome();
    closeConfirmModal();
}

// ===== Toast Functions =====
function showToast(title, message) {
    const toast = DOM.achievementToast;
    document.getElementById('achievementTitle').textContent = title;
    document.getElementById('achievementDesc').textContent = message;
    
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ===== Income Functions =====
function addIncomeEntry() {
    const amount = parseFloat(DOM.incomeAmountInput.value) || 0;
    const date = new Date(DOM.incomeDateInput.value);
    const notes = DOM.incomeNotesInput.value.trim();
    
    if (amount <= 0) {
        showToast('Invalid Amount', 'Please enter a valid amount');
        return;
    }
    
    if (isNaN(date.getTime())) {
        showToast('Invalid Date', 'Please enter a valid date');
        return;
    }
    
    const entry = {
        id: generateId(),
        amount,
        date,
        notes,
        createdAt: new Date()
    };
    
    AppState.incomeEntries.push(entry);
    AppState.incomeEntries.sort((a, b) => b.date - a.date);
    
    saveData();
    updateAllDisplays();
    checkAchievements();
    
    closeAddIncome();
    showToast('Income Added', `NPR ${formatNumber(amount)} added successfully`);
}

function updateIncomeEntry() {
    const id = DOM.editIncomeIdInput.value;
    const amount = parseFloat(DOM.editIncomeAmountInput.value) || 0;
    const date = new Date(DOM.editIncomeDateInput.value);
    const notes = DOM.editIncomeNotesInput.value.trim();
    
    if (amount <= 0) {
        showToast('Invalid Amount', 'Please enter a valid amount');
        return;
    }
    
    if (isNaN(date.getTime())) {
        showToast('Invalid Date', 'Please enter a valid date');
        return;
    }
    
    const index = AppState.incomeEntries.findIndex(e => e.id === id);
    if (index === -1) return;
    
    AppState.incomeEntries[index] = {
        ...AppState.incomeEntries[index],
        amount,
        date,
        notes
    };
    
    AppState.incomeEntries.sort((a, b) => b.date - a.date);
    
    saveData();
    updateAllDisplays();
    checkAchievements();
    
    closeEditIncome();
    showToast('Income Updated', 'Your income entry has been updated');
}

function deleteIncomeEntry(id) {
    AppState.incomeEntries = AppState.incomeEntries.filter(e => e.id !== id);
    
    saveData();
    updateAllDisplays();
    checkAchievements();
    
    showToast('Income Deleted', 'The income entry has been deleted');
}

function quickAddIncome() {
    const amount = parseFloat(DOM.quickAmount.value) || 0;
    const date = new Date(DOM.quickDate.value);
    const notes = DOM.quickNotes.value.trim();
    
    if (amount <= 0) {
        showToast('Invalid Amount', 'Please enter a valid amount');
        return;
    }
    
    if (isNaN(date.getTime())) {
        showToast('Invalid Date', 'Please enter a valid date');
        return;
    }
    
    const entry = {
        id: generateId(),
        amount,
        date,
        notes,
        createdAt: new Date()
    };
    
    AppState.incomeEntries.push(entry);
    AppState.incomeEntries.sort((a, b) => b.date - a.date);
    
    saveData();
    updateAllDisplays();
    checkAchievements();
    
    // Clear form
    DOM.quickAmount.value = '';
    DOM.quickNotes.value = '';
    DOM.quickAmount.focus();
    
    showToast('Income Added', `NPR ${formatNumber(amount)} added successfully`);
}

function showRecentEntries() {
    switchSection('tracker');
}

function showAnalytics() {
    switchSection('analytics');
}

function filterEntries() {
    const month = DOM.filterMonth.value;
    const search = DOM.searchEntries.value.toLowerCase();
    
    const filtered = AppState.incomeEntries.filter(entry => {
        const entryMonth = entry.date.getMonth();
        const entryYear = entry.date.getFullYear();
        const entryDateStr = formatDate(entry.date);
        
        const monthMatch = month === 'all' || 
            (month === 'current' && 
             entryMonth === new Date().getMonth() && 
             entryYear === new Date().getFullYear());
        
        const searchMatch = !search || 
            (entry.notes && entry.notes.toLowerCase().includes(search)) ||
            entryDateStr.includes(search);
        
        return monthMatch && searchMatch;
    });
    
    renderIncomeHistory(filtered);
}

function populateFilterMonths() {
    const months = [];
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    // Add current month
    months.push({ value: 'current', label: 'Current Month' });
    
    // Add all months from entries
    const entryMonths = new Set();
    AppState.incomeEntries.forEach(entry => {
        const monthKey = `${entry.date.getMonth()}-${entry.date.getFullYear()}`;
        if (!entryMonths.has(monthKey)) {
            entryMonths.add(monthKey);
            const monthName = new Date(entry.date).toLocaleString('default', { month: 'long', year: 'numeric' });
            months.push({ value: monthKey, label: monthName });
        }
    });
    
    // Sort months (most recent first)
    months.sort((a, b) => {
        if (a.value === 'current') return -1;
        if (b.value === 'current') return 1;
        return b.value.localeCompare(a.value);
    });
    
    // Add all months option
    months.unshift({ value: 'all', label: 'All Months' });
    
    // Populate select
    DOM.filterMonth.innerHTML = months.map(m => 
        `<option value="${m.value}">${m.label}</option>`
    ).join('');
}

function renderIncomeHistory(entries = AppState.incomeEntries) {
    if (entries.length === 0) {
        DOM.incomeHistoryBody.innerHTML = `
            <tr class="no-data-row">
                <td colspan="4">No income entries found. Add your first entry!</td>
            </tr>
        `;
        return;
    }
    
    DOM.incomeHistoryBody.innerHTML = entries.map(entry => `
        <tr>
            <td>${formatDate(entry.date)}</td>
            <td>NPR ${formatNumber(entry.amount)}</td>
            <td>${entry.notes || '-'}</td>
            <td>
                <button class="action-btn" onclick="openEditIncome('${entry.id}')" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// ===== Dashboard Functions =====
function updateDashboard() {
    const totalEarned = calculateTotalEarned();
    const remaining = AppState.goalAmount - totalEarned;
    const percentage = (totalEarned / AppState.goalAmount) * 100;
    
    const today = new Date();
    const startDate = new Date(localStorage.getItem('croreChallengeStartDate') || AppState.deadline);
    startDate.setDate(startDate.getDate() - 365);
    
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const daysRemaining = Math.floor((AppState.deadline - today) / (1000 * 60 * 60 * 24));
    
    const dailyTarget = AppState.goalAmount / 365;
    const todaysEarnings = calculateTodaysEarnings();
    const avgDaily = totalEarned / Math.max(1, daysPassed);
    const requiredDaily = remaining / Math.max(1, daysRemaining);
    
    // Update dashboard elements
    DOM.totalGoal.textContent = `NPR ${formatNumber(AppState.goalAmount)}`;
    DOM.totalEarned.textContent = `NPR ${formatNumber(totalEarned)}`;
    DOM.remainingAmount.textContent = `NPR ${formatNumber(remaining)}`;
    DOM.percentageCompleted.textContent = `${percentage.toFixed(2)}%`;
    DOM.daysPassed.textContent = daysPassed;
    DOM.daysRemaining.textContent = daysRemaining;
    DOM.todaysTarget.textContent = `NPR ${formatNumber(dailyTarget)}`;
    DOM.todaysEarnings.textContent = `NPR ${formatNumber(todaysEarnings)}`;
    DOM.avgDailyEarnings.textContent = `NPR ${formatNumber(avgDaily)}`;
    DOM.requiredDaily.textContent = `NPR ${formatNumber(requiredDaily)}`;
    
    // Update circular progress
    updateCircularProgress(percentage);
    
    // Update sidebar
    DOM.sidebarProgress.textContent = `${percentage.toFixed(1)}%`;
    DOM.sidebarProgressBar.style.width = `${percentage}%`;
    DOM.sidebarEarned.textContent = `NPR ${formatNumber(totalEarned)}`;
    
    // Update motivation
    updateMotivation(totalEarned, percentage);
    
    // Update recent entries
    updateRecentEntries();
}

function updateCircularProgress(percentage) {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    DOM.circularProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    DOM.circularProgress.style.strokeDashoffset = offset;
    DOM.circularProgressValue.textContent = `${percentage.toFixed(1)}%`;
}

function updateMotivation(totalEarned, percentage) {
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    DOM.motivationQuote.textContent = randomQuote;
    
    // Update motivation message
    if (totalEarned >= AppState.goalAmount) {
        DOM.motivationMessage.textContent = 'Congratulations! You have reached your goal! 🎉';
    } else if (percentage >= 75) {
        DOM.motivationMessage.textContent = 'You are almost there! Keep pushing! 💪';
    } else if (percentage >= 50) {
        DOM.motivationMessage.textContent = `You are ${percentage.toFixed(1)}% closer to your dream. Keep going!`;
    } else if (percentage >= 25) {
        DOM.motivationMessage.textContent = 'Great start! Every rupee counts. 💰';
    } else {
        DOM.motivationMessage.textContent = 'Start earning today! Every journey begins with a single step. 🚀';
    }
}

function updateRecentEntries() {
    const recentEntries = AppState.incomeEntries.slice(0, 5);
    
    if (recentEntries.length === 0) {
        DOM.recentEntriesTable.innerHTML = '<p class="no-data">No income entries yet. Add your first entry!</p>';
        return;
    }
    
    DOM.recentEntriesTable.innerHTML = recentEntries.map(entry => `
        <div class="entry-row">
            <div class="entry-date">${formatDate(entry.date)}</div>
            <div class="entry-amount">NPR ${formatNumber(entry.amount)}</div>
            <div class="entry-notes">${entry.notes || '-'}</div>
        </div>
    `).join('');
}

// ===== Tracker Functions =====
function updateTracker() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    
    const todaysTotal = calculateTodaysEarnings();
    const thisWeek = calculateEarningsInRange(startOfWeek, today);
    const thisMonth = calculateEarningsInRange(startOfMonth, today);
    
    DOM.trackerTodaysTotal.textContent = `NPR ${formatNumber(todaysTotal)}`;
    DOM.trackerThisWeek.textContent = `NPR ${formatNumber(thisWeek)}`;
    DOM.trackerThisMonth.textContent = `NPR ${formatNumber(thisMonth)}`;
    
    // Render full history
    renderIncomeHistory();
}

// ===== Analytics Functions =====
function updateAnalytics() {
    const totalEarned = calculateTotalEarned();
    const entries = AppState.incomeEntries;
    
    if (entries.length === 0) {
        DOM.highestDay.textContent = '-';
        DOM.lowestDay.textContent = '-';
        DOM.avgEarnings.textContent = 'NPR 0';
        DOM.bestMonth.textContent = '-';
        DOM.currentStreak.textContent = '0 days';
        DOM.longestStreak.textContent = '0 days';
        DOM.analyticsRemaining.textContent = `NPR ${formatNumber(AppState.goalAmount)}`;
        DOM.predictedFinish.textContent = '-';
        return;
    }
    
    // Calculate highest and lowest earning days
    const dailyEarnings = {};
    entries.forEach(entry => {
        const dateStr = formatDate(entry.date);
        dailyEarnings[dateStr] = (dailyEarnings[dateStr] || 0) + entry.amount;
    });
    
    const sortedDays = Object.entries(dailyEarnings).sort((a, b) => b[1] - a[1]);
    DOM.highestDay.textContent = `${sortedDays[0][0]}: NPR ${formatNumber(sortedDays[0][1])}`;
    DOM.lowestDay.textContent = `${sortedDays[sortedDays.length - 1][0]}: NPR ${formatNumber(sortedDays[sortedDays.length - 1][1])}`;
    
    // Calculate average earnings
    const avgEarnings = totalEarned / entries.length;
    DOM.avgEarnings.textContent = `NPR ${formatNumber(avgEarnings)}`;
    
    // Calculate best month
    const monthlyEarnings = {};
    entries.forEach(entry => {
        const monthKey = `${entry.date.getMonth()}-${entry.date.getFullYear()}`;
        const monthName = new Date(entry.date).toLocaleString('default', { month: 'long', year: 'numeric' });
        monthlyEarnings[monthKey] = {
            name: monthName,
            amount: (monthlyEarnings[monthKey]?.amount || 0) + entry.amount
        };
    });
    
    const sortedMonths = Object.values(monthlyEarnings).sort((a, b) => b.amount - a.amount);
    DOM.bestMonth.textContent = sortedMonths.length > 0 ? 
        `${sortedMonths[0].name}: NPR ${formatNumber(sortedMonths[0].amount)}` : '-';
    
    // Calculate streaks
    const { currentStreak, longestStreak } = calculateStreaks();
    DOM.currentStreak.textContent = `${currentStreak} day${currentStreak !== 1 ? 's' : ''}`;
    DOM.longestStreak.textContent = `${longestStreak} day${longestStreak !== 1 ? 's' : ''}`;
    
    // Calculate remaining
    DOM.analyticsRemaining.textContent = `NPR ${formatNumber(AppState.goalAmount - totalEarned)}`;
    
    // Calculate predicted finish date
    const predictedFinish = calculatePredictedFinish();
    DOM.predictedFinish.textContent = predictedFinish ? formatDate(predictedFinish) : '-';
    
    // Update charts
    updateCharts();
}

function calculateStreaks() {
    if (AppState.incomeEntries.length === 0) {
        return { currentStreak: 0, longestStreak: 0 };
    }
    
    // Sort entries by date
    const sortedEntries = [...AppState.incomeEntries].sort((a, b) => a.date - b.date);
    
    let currentStreak = 0;
    let longestStreak = 0;
    let previousDate = null;
    
    sortedEntries.forEach(entry => {
        const entryDate = new Date(entry.date);
        entryDate.setHours(0, 0, 0, 0);
        
        if (previousDate) {
            const diff = (entryDate - previousDate) / (1000 * 60 * 60 * 24);
            if (diff === 1) {
                currentStreak++;
            } else if (diff > 1) {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 0;
            }
        } else {
            currentStreak = 1;
        }
        
        previousDate = entryDate;
    });
    
    longestStreak = Math.max(longestStreak, currentStreak);
    
    // Check if streak continues to today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (previousDate && (today - previousDate) / (1000 * 60 * 60 * 24) > 1) {
        currentStreak = 0;
    }
    
    return { currentStreak, longestStreak };
}

function calculatePredictedFinish() {
    const totalEarned = calculateTotalEarned();
    const remaining = AppState.goalAmount - totalEarned;
    
    if (remaining <= 0) {
        return new Date();
    }
    
    const entries = AppState.incomeEntries;
    if (entries.length === 0) {
        return null;
    }
    
    // Calculate average daily earnings
    const firstEntryDate = new Date(Math.min(...entries.map(e => e.date.getTime())));
    const daysActive = (new Date() - firstEntryDate) / (1000 * 60 * 60 * 24);
    const avgDaily = totalEarned / daysActive;
    
    if (avgDaily <= 0) {
        return null;
    }
    
    const daysRemaining = remaining / avgDaily;
    const predictedDate = new Date();
    predictedDate.setDate(predictedDate.getDate() + Math.ceil(daysRemaining));
    
    return predictedDate;
}

// ===== Calculator Functions =====
function updateCalculator() {
    const totalEarned = calculateTotalEarned();
    const remaining = AppState.goalAmount - totalEarned;
    
    const today = new Date();
    const startDate = new Date(localStorage.getItem('croreChallengeStartDate') || AppState.deadline);
    startDate.setDate(startDate.getDate() - 365);
    
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const daysRemaining = Math.floor((AppState.deadline - today) / (1000 * 60 * 60 * 24));
    
    const dailyTarget = AppState.goalAmount / 365;
    const weeklyTarget = dailyTarget * 7;
    const monthlyTarget = dailyTarget * 30;
    
    const avgDaily = totalEarned / Math.max(1, daysPassed);
    const requiredDaily = remaining / Math.max(1, daysRemaining);
    const catchupAmount = requiredDaily - avgDaily;
    
    // Calculate expected completion
    let expectedCompletion = new Date(AppState.deadline);
    if (avgDaily > 0) {
        const daysToComplete = remaining / avgDaily;
        expectedCompletion = new Date();
        expectedCompletion.setDate(expectedCompletion.getDate() + Math.ceil(daysToComplete));
    }
    
    // Calculate days behind/ahead
    const targetEarned = dailyTarget * daysPassed;
    const daysBehind = (targetEarned - totalEarned) / dailyTarget;
    
    // Update calculator elements
    DOM.calcDailyTarget.textContent = `NPR ${formatNumber(dailyTarget)}`;
    DOM.calcWeeklyTarget.textContent = `NPR ${formatNumber(weeklyTarget)}`;
    DOM.calcMonthlyTarget.textContent = `NPR ${formatNumber(monthlyTarget)}`;
    DOM.calcCatchup.textContent = `NPR ${formatNumber(catchupAmount > 0 ? catchupAmount : 0)}`;
    DOM.calcCompletion.textContent = formatDate(expectedCompletion);
    DOM.calcDaysBehind.textContent = `${Math.round(daysBehind)} days ${daysBehind > 0 ? 'behind' : 'ahead'}`;
    
    // Update projection
    updateProjection(totalEarned, targetEarned);
}

function updateProjection(totalEarned, targetEarned) {
    const goal = AppState.goalAmount;
    const percentage = (totalEarned / goal) * 100;
    const targetPercentage = (targetEarned / goal) * 100;
    
    DOM.projectionFill.style.width = `${percentage}%`;
    DOM.projectionMarker.style.left = `${targetPercentage}%`;
}

// ===== Achievements Functions =====
function renderAchievements() {
    DOM.achievementsGrid.innerHTML = AppState.achievements.map(achievement => {
        const isUnlocked = achievement.unlocked;
        const progress = isUnlocked ? 100 : calculateAchievementProgress(achievement);
        
        return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}" 
                 onclick="showAchievementDetails('${achievement.id}')">
                <div class="achievement-icon">
                    <i class="fas fa-${isUnlocked ? 'check-circle' : 'lock'}"></i>
                </div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-progress">
                    ${isUnlocked ? 
                        '<i class="fas fa-trophy"></i> Unlocked!' :
                        `<i class="fas fa-arrow-right"></i> ${Math.round(progress)}%`}
                </div>
            </div>
        `;
    }).join('');
    
    // Update achievement stats
    const unlockedCount = AppState.achievements.filter(a => a.unlocked).length;
    const totalCount = AppState.achievements.length;
    const progress = (unlockedCount / totalCount) * 100;
    
    DOM.achievementsUnlocked.textContent = unlockedCount;
    DOM.achievementsTotal.textContent = totalCount;
    DOM.achievementsProgress.textContent = `${Math.round(progress)}%`;
}

function calculateAchievementProgress(achievement) {
    const totalEarned = calculateTotalEarned();
    
    if (achievement.type === 'milestone') {
        return Math.min(100, (totalEarned / achievement.target) * 100);
    } else if (achievement.type === 'streak') {
        const { currentStreak } = calculateStreaks();
        return Math.min(100, (currentStreak / achievement.target) * 100);
    }
    
    return 0;
}

function checkAchievements() {
    let newAchievements = [];
    
    AppState.achievements.forEach(achievement => {
        if (achievement.unlocked) return;
        
        if (achievement.type === 'milestone') {
            const totalEarned = calculateTotalEarned();
            if (totalEarned >= achievement.target) {
                achievement.unlocked = true;
                newAchievements.push(achievement);
            }
        } else if (achievement.type === 'streak') {
            const { currentStreak, longestStreak } = calculateStreaks();
            if (currentStreak >= achievement.target || longestStreak >= achievement.target) {
                achievement.unlocked = true;
                newAchievements.push(achievement);
            }
        }
    });
    
    // Show toast for new achievements
    newAchievements.forEach(achievement => {
        showToast(achievement.name, achievement.description);
    });
    
    // Save data
    saveData();
    
    // Update UI
    renderAchievements();
}

function showAchievementDetails(id) {
    const achievement = AppState.achievements.find(a => a.id === id);
    if (!achievement) return;
    
    if (!achievement.unlocked) {
        showToast(achievement.name, `Keep going! ${Math.round(calculateAchievementProgress(achievement))}% complete`);
    } else {
        showToast(achievement.name, `Achievement unlocked on ${formatDate(new Date(achievement.unlockedAt || new Date()))}`);
    }
}

// ===== Calendar Functions =====
function renderCalendar() {
    const year = AppState.currentYear;
    const month = AppState.currentMonth;
    
    // Update month/year display
    const monthName = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    DOM.calendarMonthYear.textContent = monthName;
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let html = '';
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const date = new Date(year, month - 1, day);
        html += createCalendarDay(date, true);
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        html += createCalendarDay(date, false);
    }
    
    // Next month days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let day = 1; day <= remainingCells; day++) {
        const date = new Date(year, month + 1, day);
        html += createCalendarDay(date, true);
    }
    
    DOM.calendarDays.innerHTML = html;
    
    // Update calendar summary
    updateCalendarSummary();
}

function createCalendarDay(date, isOtherMonth) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dateStr = formatDate(date);
    const isToday = date.getTime() === today.getTime();
    
    // Calculate earnings for this day
    const dailyEarnings = AppState.incomeEntries
        .filter(e => formatDate(e.date) === dateStr)
        .reduce((sum, e) => sum + e.amount, 0);
    
    const hasIncome = dailyEarnings > 0;
    
    // Determine color class
    let colorClass = '';
    if (hasIncome) {
        if (dailyEarnings > 10000) {
            colorClass = 'high';
        } else if (dailyEarnings > 5000) {
            colorClass = 'medium';
        } else {
            colorClass = 'low';
        }
    }
    
    const otherMonthClass = isOtherMonth ? 'other-month' : '';
    const todayClass = isToday ? 'today' : '';
    const hasIncomeClass = hasIncome ? 'has-income' : '';
    
    return `
        <div class="calendar-day ${otherMonthClass} ${todayClass} ${hasIncomeClass} ${colorClass}"
             onclick="handleCalendarDayClick('${date.toISOString()}')">
            <span class="calendar-day-number">${date.getDate()}</span>
            ${hasIncome ? `<span class="calendar-day-income">NPR ${formatNumber(dailyEarnings)}</span>` : ''}
        </div>
    `;
}

function handleCalendarDayClick(dateStr) {
    const date = new Date(dateStr);
    
    // Check if there are entries for this date
    const entries = AppState.incomeEntries.filter(e => 
        e.date.toDateString() === date.toDateString()
    );
    
    if (entries.length > 0) {
        // Show entries for this date
        showEntriesForDate(date);
    } else {
        // Open add income with this date
        DOM.incomeDateInput.value = formatDateForInput(date);
        openAddIncome();
    }
}

function showEntriesForDate(date) {
    const dateStr = formatDate(date);
    const entries = AppState.incomeEntries.filter(e => formatDate(e.date) === dateStr);
    
    // Create a modal to show entries
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content modal-small">
            <div class="modal-header">
                <h2><i class="fas fa-calendar-day"></i> ${dateStr}</h2>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Total: NPR ${formatNumber(entries.reduce((sum, e) => sum + e.amount, 0))}</h3>
                <div class="entries-list">
                    ${entries.map(entry => `
                        <div class="entry-item">
                            <span class="entry-amount">NPR ${formatNumber(entry.amount)}</span>
                            <span class="entry-notes">${entry.notes || 'No notes'}</span>
                            <button class="btn btn-icon" onclick="openEditIncome('${entry.id}'); this.closest('.modal').remove()">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="openAddIncome(); this.closest('.modal').remove()">
                    <i class="fas fa-plus"></i> Add Entry
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.classList.add('active');
}

function prevMonth() {
    AppState.currentMonth--;
    if (AppState.currentMonth < 0) {
        AppState.currentMonth = 11;
        AppState.currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    AppState.currentMonth++;
    if (AppState.currentMonth > 11) {
        AppState.currentMonth = 0;
        AppState.currentYear++;
    }
    renderCalendar();
}

function updateCalendarSummary() {
    const year = AppState.currentYear;
    const month = AppState.currentMonth;
    
    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);
    
    const entries = AppState.incomeEntries.filter(e => 
        e.date >= startOfMonth && e.date <= endOfMonth
    );
    
    const total = entries.reduce((sum, e) => sum + e.amount, 0);
    const daysWithEarnings = new Set(entries.map(e => e.date.toDateString())).size;
    const avgDaily = entries.length > 0 ? total / entries.length : 0;
    
    DOM.calendarTotal.textContent = `NPR ${formatNumber(total)}`;
    DOM.calendarDaysWithEarnings.textContent = daysWithEarnings;
    DOM.calendarAvgDaily.textContent = `NPR ${formatNumber(avgDaily)}`;
}

// ===== Charts =====
let dailyChart, weeklyChart, monthlyChart;

function initializeCharts() {
    // Create chart containers
    const dailyCtx = document.getElementById('dailyChart');
    const weeklyCtx = document.getElementById('weeklyChart');
    const monthlyCtx = document.getElementById('monthlyChart');
    
    if (!dailyCtx || !weeklyCtx || !monthlyCtx) return;
    
    // Daily chart
    dailyChart = new Chart(dailyCtx, {
        type: 'line',
        data: { labels: [], datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
    
    // Weekly chart
    weeklyChart = new Chart(weeklyCtx, {
        type: 'bar',
        data: { labels: [], datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
    
    // Monthly chart
    monthlyChart = new Chart(monthlyCtx, {
        type: 'bar',
        data: { labels: [], datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function updateCharts() {
    if (!dailyChart || !weeklyChart || !monthlyChart) return;
    
    // Daily chart (last 30 days)
    updateDailyChart();
    
    // Weekly chart
    updateWeeklyChart();
    
    // Monthly chart
    updateMonthlyChart();
}

function updateDailyChart() {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 29);
    
    const labels = [];
    const data = [];
    
    for (let i = 0; i < 30; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dateStr = formatDate(date);
        labels.push(dateStr);
        
        const earnings = AppState.incomeEntries
            .filter(e => formatDate(e.date) === dateStr)
            .reduce((sum, e) => sum + e.amount, 0);
        
        data.push(earnings);
    }
    
    dailyChart.data.labels = labels;
    dailyChart.data.datasets = [{
        label: 'Daily Earnings',
        data: data,
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true
    }];
    dailyChart.update();
}

function updateWeeklyChart() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    
    const weeks = [];
    const currentDate = new Date(startOfYear);
    
    while (currentDate <= today) {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        
        const weekLabel = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;
        
        const earnings = AppState.incomeEntries
            .filter(e => e.date >= startOfWeek && e.date <= endOfWeek)
            .reduce((sum, e) => sum + e.amount, 0);
        
        weeks.push({ label: weekLabel, earnings });
        
        currentDate.setDate(currentDate.getDate() + 7);
    }
    
    // Show last 12 weeks
    const recentWeeks = weeks.slice(-12);
    
    weeklyChart.data.labels = recentWeeks.map(w => w.label);
    weeklyChart.data.datasets = [{
        label: 'Weekly Earnings',
        data: recentWeeks.map(w => w.earnings),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
        borderColor: '#6366f1',
        borderWidth: 1
    }];
    weeklyChart.update();
}

function updateMonthlyChart() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    
    const months = [];
    const currentDate = new Date(startOfYear);
    
    while (currentDate <= today) {
        const monthLabel = currentDate.toLocaleString('default', { month: 'short', year: 'numeric' });
        
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        
        const earnings = AppState.incomeEntries
            .filter(e => e.date >= startOfMonth && e.date <= endOfMonth)
            .reduce((sum, e) => sum + e.amount, 0);
        
        months.push({ label: monthLabel, earnings });
        
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    monthlyChart.data.labels = months.map(m => m.label);
    monthlyChart.data.datasets = [{
        label: 'Monthly Earnings',
        data: months.map(m => m.earnings),
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: '#10b981',
        borderWidth: 1
    }];
    monthlyChart.update();
}

// ===== Theme Functions =====
function setTheme(theme) {
    AppState.theme = theme;
    applyTheme();
    saveData();
}

function applyTheme() {
    const html = document.documentElement;
    
    if (AppState.theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else if (AppState.theme === 'light') {
        html.removeAttribute('data-theme');
    } else {
        // System theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
        }
    }
    
    // Update theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(`'${AppState.theme}'`)) {
            btn.classList.add('active');
        }
    });
}

// ===== Countdown Timer =====
function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const today = new Date();
    const deadline = AppState.deadline;
    
    const diff = deadline - today;
    
    if (diff <= 0) {
        DOM.countdown.textContent = '00:00:00:00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    DOM.countdown.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ===== Utility Functions =====
function generateId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

function formatNumber(num) {
    if (num === 0) return '0';
    return num.toLocaleString('en-IN', { 
        maximumFractionDigits: 0,
        minimumFractionDigits: 0 
    });
}

function formatDate(date) {
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function formatDateForInput(date) {
    return date.toISOString().split('T')[0];
}

function calculateTotalEarned() {
    return AppState.incomeEntries.reduce((sum, entry) => sum + entry.amount, 0);
}

function calculateTodaysEarnings() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return AppState.incomeEntries
        .filter(entry => entry.date.toDateString() === today.toDateString())
        .reduce((sum, entry) => sum + entry.amount, 0);
}

function calculateEarningsInRange(start, end) {
    return AppState.incomeEntries
        .filter(entry => entry.date >= start && entry.date <= end)
        .reduce((sum, entry) => sum + entry.amount, 0);
}

function updateAllDisplays() {
    updateDashboard();
    updateTracker();
    updateAnalytics();
    updateCalculator();
    renderAchievements();
    renderCalendar();
    updateCharts();
}

// ===== Make functions globally available =====
window.toggleSidebar = toggleSidebar;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.saveSettings = saveSettings;
window.exportData = exportData;
window.importData = importData;
window.handleImport = handleImport;
window.confirmReset = confirmReset;
window.openAddIncome = openAddIncome;
window.closeAddIncome = closeAddIncome;
window.addIncomeEntry = addIncomeEntry;
window.openEditIncome = openEditIncome;
window.closeEditIncome = closeEditIncome;
window.updateIncomeEntry = updateIncomeEntry;
window.confirmDeleteIncome = confirmDeleteIncome;
window.closeConfirmModal = closeConfirmModal;
window.executeConfirmAction = executeConfirmAction;
window.quickAddIncome = quickAddIncome;
window.showRecentEntries = showRecentEntries;
window.showAnalytics = showAnalytics;
window.filterEntries = filterEntries;
window.prevMonth = prevMonth;
window.nextMonth = nextMonth;
window.setTheme = setTheme;
window.showAchievementDetails = showAchievementDetails;
