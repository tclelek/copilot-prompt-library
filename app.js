// VDF Prompt Library Dashboard JavaScript

// Application state
let appState = {
    currentView: 'dashboard', // 'dashboard' or 'phase-detail'
    currentPhase: null,
    searchQuery: '',
    filters: {
        role: '',
        complexity: '',
        sortBy: 'rating'
    },
    prompts: [],
    phases: [],
    favorites: new Set()
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderDashboard();
    setupModeToggle();
});

function initializeApp() {
    appState.phases = promptsData.phases;
    appState.prompts = promptsData.phases.flatMap(phase => 
        phase.prompts.map(prompt => ({ ...prompt, phaseId: phase.id, phaseName: phase.name, phaseColor: phase.color }))
    );
    
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function setupEventListeners() {
    // Global search
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', handleGlobalSearch);
    }

    // Back button
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => showDashboard());
    }

    // Filters
    const roleFilter = document.getElementById('roleFilter');
    const complexityFilter = document.getElementById('complexityFilter');
    const sortBy = document.getElementById('sortBy');
    const clearFilters = document.getElementById('clearFilters');

    if (roleFilter) roleFilter.addEventListener('change', handleFilterChange);
    if (complexityFilter) complexityFilter.addEventListener('change', handleFilterChange);
    if (sortBy) sortBy.addEventListener('change', handleFilterChange);
    if (clearFilters) clearFilters.addEventListener('click', clearAllFilters);

    // Modal close
    const closePlayground = document.getElementById('closePlayground');
    const playgroundModal = document.getElementById('playgroundModal');
    
    if (closePlayground) {
        closePlayground.addEventListener('click', closeModal);
    }
    
    if (playgroundModal) {
        playgroundModal.addEventListener('click', function(e) {
            if (e.target === playgroundModal) {
                closeModal();
            }
        });
    }

    // Export buttons
    const testPrompt = document.getElementById('testPrompt');

    if (testPrompt) testPrompt.addEventListener('click', handleTestPrompt);
}

function renderDashboard() {
    showDashboard();
    renderPhaseGrid();
    populateRoleFilter();
    
    // Initialize Feather icons after rendering dashboard
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function showDashboard() {
    appState.currentView = 'dashboard';
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('phaseDetail').classList.add('hidden');
    document.getElementById('phaseNav').classList.add('hidden');
}

function showPhaseDetail(phaseId) {
    appState.currentView = 'phase-detail';
    appState.currentPhase = phaseId;
    
    const phase = appState.phases.find(p => p.id === phaseId);
    if (!phase) return;

    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('phaseDetail').classList.remove('hidden');
    document.getElementById('phaseNav').classList.remove('hidden');
    
    // Update phase detail header
    document.getElementById('phaseDetailTitle').textContent = phase.name;
    document.getElementById('phaseDetailDescription').textContent = phase.description;
    
    renderPhaseNavigation();
    updatePhaseNavigation();
    renderPrompts();
}

function renderPhaseNavigation() {
    const container = document.getElementById('phaseNavTabs');
    if (!container) return;

    container.innerHTML = '';

    // Phase tabs
    appState.phases.forEach(phase => {
        const tab = createPhaseTab({
            id: phase.id,
            name: phase.name,
            icon: phase.icon,
            count: `${phase.prompts.length} prompts`
        }, phase.id);
        container.appendChild(tab);
    });
    
    // Initialize Feather icons after rendering
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function createPhaseTab(tabData, phaseId) {
    const tab = document.createElement('div');
    tab.className = 'phase-tab';
    tab.setAttribute('data-phase', phaseId);
    
    if (appState.currentView === 'phase-detail' && phaseId === appState.currentPhase) {
        tab.classList.add('active');
    }

    tab.innerHTML = `
        <div class="phase-tab__icon">${tabData.icon}</div>
        <div class="phase-tab__content">
            <div class="phase-tab__name">${tabData.name}</div>
            <div class="phase-tab__count">${tabData.count}</div>
        </div>
    `;

    tab.addEventListener('click', () => {
        showPhaseDetail(phaseId);
    });

    return tab;
}

function updatePhaseNavigation() {
    const tabs = document.querySelectorAll('.phase-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        const phaseId = tab.getAttribute('data-phase');
        
        if (appState.currentView === 'phase-detail' && phaseId === appState.currentPhase) {
            tab.classList.add('active');
        }
    });
}

function renderPhaseGrid() {
    const container = document.getElementById('phaseGrid');
    if (!container) return;

    container.innerHTML = '';

    appState.phases.forEach(phase => {
        const card = createPhaseCard(phase);
        container.appendChild(card);
    });
}

function createPhaseCard(phase) {
    const card = document.createElement('div');
    card.className = 'phase-card';

    card.innerHTML = `
        <div class="phase-card__header">
            <div class="phase-card__icon">${phase.icon}</div>
            <div class="phase-card__title">${phase.name}</div>
        </div>
        <div class="phase-card__description">${phase.description}</div>
        <div class="phase-card__footer">
            <div class="phase-card__count">${phase.prompts.length} prompts available</div>
            <div class="phase-card__arrow">→</div>
        </div>
    `;

    card.addEventListener('click', () => showPhaseDetail(phase.id));

    return card;
}

function populateRoleFilter() {
    const roleFilter = document.getElementById('roleFilter');
    if (!roleFilter) return;

    // Clear existing options except "All Roles"
    roleFilter.innerHTML = '<option value="">All Roles</option>';

    promptsData.roles.forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        roleFilter.appendChild(option);
    });
}

function renderPrompts() {
    const container = document.getElementById('promptsGrid');
    if (!container) return;

    let prompts = getFilteredPrompts();
    prompts = sortPrompts(prompts);

    container.innerHTML = '';

    if (prompts.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>No prompts found matching your criteria.</p>
                <button class="btn btn--secondary" onclick="clearAllFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }

    prompts.forEach(prompt => {
        const card = createPromptCard(prompt);
        container.appendChild(card);
    });
}

function getFilteredPrompts() {
    let prompts = appState.currentPhase 
        ? appState.phases.find(p => p.id === appState.currentPhase)?.prompts || []
        : appState.prompts;

    // Apply search filter
    if (appState.searchQuery) {
        const query = appState.searchQuery.toLowerCase();
        prompts = prompts.filter(prompt =>
            prompt.title.toLowerCase().includes(query) ||
            prompt.description.toLowerCase().includes(query) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(query)) ||
            prompt.roles.some(role => role.toLowerCase().includes(query))
        );
    }

    // Apply role filter
    if (appState.filters.role) {
        prompts = prompts.filter(prompt =>
            prompt.roles.includes(appState.filters.role)
        );
    }

    // Apply complexity filter
    if (appState.filters.complexity) {
        prompts = prompts.filter(prompt =>
            prompt.complexity === appState.filters.complexity
        );
    }

    return prompts;
}

function sortPrompts(prompts) {
    const sortBy = appState.filters.sortBy;
    
    return [...prompts].sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'usage':
                return b.usageCount - a.usageCount;
            case 'title':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}

function createPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';

    const starsHtml = '★'.repeat(Math.floor(prompt.rating)) + '☆'.repeat(5 - Math.floor(prompt.rating));
    const isFavorite = appState.favorites.has(prompt.id);
    const heartColor = '#cb2424';
    const heartIcon = isFavorite
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="${heartColor}" stroke="${heartColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:auto;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${heartColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:auto;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

    card.innerHTML = `
        <div class="prompt-card__header">
            <h3 class="prompt-card__title">${prompt.title}</h3>
            <p class="prompt-card__description">${prompt.description}</p>
        </div>
        
        <div class="prompt-card__meta">
            <span class="complexity-badge complexity-badge--${prompt.complexity}">${prompt.complexity}</span>
            <span class="time-estimate">${prompt.timeEstimate}</span>
        </div>
        
        <div class="prompt-card__roles">
            ${prompt.roles.map(role => `<span class="role-badge">${role}</span>`).join('')}
        </div>
        
        <div class="prompt-card__tags">
            ${prompt.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="prompt-card__stats">
            <div class="rating">
                <span class="rating__stars">${starsHtml}</span>
                <span>${prompt.rating}</span>
            </div>
            <div class="usage-count">${prompt.usageCount} uses</div>
        </div>
        
        <div class="prompt-card__actions">
            <button class="btn btn--primary btn--full-width" style="width:calc(100% - 48px);display:inline-block;vertical-align:middle;" onclick="openPlayground('${prompt.id}')">Use Prompt</button>
            <button class="favorite-btn favorite-btn--square" onclick="toggleFavorite('${prompt.id}')" aria-label="Favorite" style="display:inline-block;vertical-align:middle;margin-left:8px;">
                ${heartIcon}
            </button>
        </div>
    `;

    return card;
}

function handleGlobalSearch(event) {
    appState.searchQuery = event.target.value;
    if (appState.currentView === 'phase-detail') {
        renderPrompts();
    }
}

function handleFilterChange() {
    appState.filters.role = document.getElementById('roleFilter').value;
    appState.filters.complexity = document.getElementById('complexityFilter').value;
    appState.filters.sortBy = document.getElementById('sortBy').value;
    
    if (appState.currentView === 'phase-detail') {
        renderPrompts();
    }
}

function clearAllFilters() {
    appState.searchQuery = '';
    appState.filters = { role: '', complexity: '', sortBy: 'rating' };
    
    // Reset form controls
    document.getElementById('globalSearch').value = '';
    document.getElementById('roleFilter').value = '';
    document.getElementById('complexityFilter').value = '';
    document.getElementById('sortBy').value = 'rating';
    
    if (appState.currentView === 'phase-detail') {
        renderPrompts();
    }
}

function openPlayground(promptId) {
    const prompt = appState.prompts.find(p => p.id === promptId);
    if (!prompt) return;

    document.getElementById('playgroundTitle').textContent = prompt.title;
    document.getElementById('playgroundDesc').textContent = prompt.description;
    document.getElementById('promptEditor').value = prompt.prompt;
    document.getElementById('promptEditor').readOnly = true;
    createVariableInputs(prompt.variables || []);
    document.getElementById('playgroundModal').classList.remove('hidden');
    appState.currentPrompt = prompt;

    // Attach copy event listener
    const copyBtn = document.getElementById('copyPromptBtn');
    if (copyBtn) {
        copyBtn.onclick = function() {
            const promptText = document.getElementById('promptEditor').value;
            navigator.clipboard.writeText(promptText).then(() => {
                showToast('Prompt copied to clipboard!', 'success');
            });
        };
    }
}

function createVariableInputs(variables) {
    const container = document.getElementById('variableInputs');
    if (!container) return;

    container.innerHTML = '';

    if (variables.length === 0) {
        container.innerHTML = '<p class="text-secondary">No variables required for this prompt.</p>';
        return;
    }

    variables.forEach(variable => {
        const div = document.createElement('div');
        div.className = 'variable-input';
        const labelText = variable.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        div.innerHTML = `
            <label class="variable-label" for="var-${variable}">${labelText}</label>
            <input 
                type="text" 
                id="var-${variable}" 
                class="form-control" 
                placeholder="Enter ${labelText}"
                data-variable="${variable}"
            >
        `;
        container.appendChild(div);
    });

    // Add live update event listeners
    const variableInputs = container.querySelectorAll('[data-variable]');
    variableInputs.forEach(input => {
        input.addEventListener('input', updatePromptLive);
    });
}

function updatePromptLive() {
    if (!appState.currentPrompt) return;
    let processedPrompt = appState.currentPrompt.prompt;
    const variableInputs = document.querySelectorAll('[data-variable]');
    variableInputs.forEach(input => {
        const variable = input.getAttribute('data-variable');
        const value = input.value || `[${variable}]`;
        processedPrompt = processedPrompt.replace(new RegExp(`{{${variable}}}`, 'g'), value);
    });
    document.getElementById('promptEditor').value = processedPrompt;
}

function closeModal() {
    document.getElementById('playgroundModal').classList.add('hidden');
}

function handleTestPrompt() {
    const promptText = document.getElementById('promptEditor').value;
    const variableInputs = document.querySelectorAll('[data-variable]');
    
    let processedPrompt = promptText;
    
    variableInputs.forEach(input => {
        const variable = input.getAttribute('data-variable');
        const value = input.value || `[${variable}]`;
        processedPrompt = processedPrompt.replace(new RegExp(`{{${variable}}}`, 'g'), value);
    });
    
    // Update the textarea with processed prompt
    document.getElementById('promptEditor').value = processedPrompt;
    
    showToast('Prompt variables have been replaced!', 'success');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    
    toast.innerHTML = `
        <div class="toast__content">
            <span>${type === 'success' ? '✓' : '⚠'}</span>
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}

// Global functions for onclick handlers
window.openPlayground = openPlayground;
window.clearAllFilters = clearAllFilters;

function setupModeToggle() {
    const modeToggle = document.getElementById('modeToggle');
    const modeToggleIcon = document.getElementById('modeToggleIcon');
    const html = document.documentElement;

    // Helper to set mode
    function setMode(mode) {
        html.setAttribute('data-color-scheme', mode);
        if (mode === 'dark') {
            modeToggleIcon.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2"/>
                </svg>
            `;
        } else {
            modeToggleIcon.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        }
    }

    // Load mode from localStorage or system preference
    let mode = localStorage.getItem('color-scheme');
    if (!mode) {
        mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setMode(mode);

    // Toggle on click
    modeToggle.addEventListener('click', function() {
        const current = html.getAttribute('data-color-scheme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setMode(next);
        localStorage.setItem('color-scheme', next);
    });
}

function toggleFavorite(promptId) {
    if (appState.favorites.has(promptId)) {
        appState.favorites.delete(promptId);
    } else {
        appState.favorites.add(promptId);
    }
    renderPrompts();
}

window.toggleFavorite = toggleFavorite;