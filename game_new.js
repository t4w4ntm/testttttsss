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
            // Hide old page completely to improve performance
            currentPage.style.display = 'none';

            // Fade in new page
            const targetPage = document.getElementById(`page-${pageNumber}`);
            if (targetPage) {
                // Show new page
                targetPage.style.display = 'flex';
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

    // Next button on Page 2 - go to Page 3
    const nextBtn2 = document.getElementById('next-btn-2');
    if (nextBtn2) {
        nextBtn2.addEventListener('click', () => {
            goToPage(3);
        });
    }

    // Submit button on Page 3 - save data and go to Page 4
    const submitBtn3 = document.getElementById('submit-btn-3');
    if (submitBtn3) {
        submitBtn3.addEventListener('click', () => {
            // Save user data
            const nameInput = document.getElementById('name-input');
            const ageInput = document.getElementById('age-input');
            const genderInput = document.getElementById('gender-input');

            if (nameInput) gameState.user.name = nameInput.value;
            if (ageInput) gameState.user.age = ageInput.value;
            if (genderInput) gameState.user.gender = genderInput.value;

            goToPage(4);

            // Start story animation after page transition
            setTimeout(() => {
                playStoryAnimation();
            }, 800);
        });
    }

    // Show page 1
    showPage(1);
});

// ====== Page 4 Story Animation ======

function playStoryAnimation() {
    const introText = document.querySelector('.story-intro-text');
    const blackBg = document.querySelector('.story-black-bg');
    const storyBg = document.querySelector('.story-bg');
    const storyFrame = document.querySelector('.story-frame');
    const storyText1 = document.querySelector('.story-text-1');
    const storyText2 = document.querySelector('.story-text-2');
    const storyText3 = document.querySelector('.story-text-3');

    // Step 1: Show intro text for 3 seconds, then fade out
    setTimeout(() => {
        if (introText) introText.classList.add('fade-out');
    }, 3000);

    // Step 2: Hide black background, show station background
    setTimeout(() => {
        if (blackBg) blackBg.style.display = 'none';
        if (storyBg) {
            storyBg.classList.remove('hidden');
            storyBg.classList.add('show');
        }
    }, 4500);

    // Step 3: Show frame
    setTimeout(() => {
        if (storyFrame) {
            storyFrame.classList.remove('hidden');
            storyFrame.classList.add('show');
        }
    }, 5500);

    // Step 4: Show story text 1
    setTimeout(() => {
        if (storyText1) {
            storyText1.classList.remove('hidden');
            storyText1.classList.add('show');
        }
    }, 6500);

    // Step 5: Fade out story text 1
    setTimeout(() => {
        if (storyText1) {
            storyText1.classList.remove('show');
            storyText1.classList.add('fade-out');
        }
    }, 10000);

    // Step 6: Show story text 2
    setTimeout(() => {
        if (storyText2) {
            storyText2.classList.remove('hidden');
            storyText2.classList.add('show');
        }
    }, 11500);

    // Step 7: Fade out story text 2
    setTimeout(() => {
        if (storyText2) {
            storyText2.classList.remove('show');
            storyText2.classList.add('fade-out');
        }
    }, 15000);

    // Step 8: Show story text 3
    setTimeout(() => {
        if (storyText3) {
            storyText3.classList.remove('hidden');
            storyText3.classList.add('show');
        }
    }, 16500);
}
