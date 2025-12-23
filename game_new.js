// ====== Game State ======
const gameState = {
    currentPage: 1,
    user: {
        name: "",
        age: ""
    },
    textAnswers: {},
    path: [],
    pathKeywords: { A: 0, B: 0, C: 0 },
    determinedPath: null
};

// ====== Page Navigation ======

function showPage(pageNumber) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
        gameState.currentPage = pageNumber;
    }
}

function goToPage(pageNumber) {
    const currentPage = document.querySelector('.page.active');

    if (currentPage) {
        // Fade out current page
        currentPage.classList.add('fade-out');
        currentPage.classList.remove('fade-in');

        setTimeout(() => {
            currentPage.classList.remove('active', 'fade-out');

            // Fade in new page
            const targetPage = document.getElementById(`page-${pageNumber}`);
            if (targetPage) {
                targetPage.classList.add('active', 'fade-in');
                gameState.currentPage = pageNumber;

                // Remove fade-in class after animation
                setTimeout(() => {
                    targetPage.classList.remove('fade-in');
                }, 600);
            }
        }, 400);
    } else {
        showPage(pageNumber);
    }
}

// ====== Initialize ======

document.addEventListener('DOMContentLoaded', () => {
    // Start button - Page 1 to Page 2
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            goToPage(2);
        });
    }

    // Next button on Page 2 - will be used for future pages
    const nextBtn2 = document.getElementById('next-btn-2');
    if (nextBtn2) {
        nextBtn2.addEventListener('click', () => {
            // For now, just log - will connect to more pages later
            console.log('Next button clicked on page 2');
            // goToPage(3); // Uncomment when page 3 is ready
        });
    }

    // Show page 1
    showPage(1);
});
