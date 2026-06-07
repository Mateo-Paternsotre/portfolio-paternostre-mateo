// --- TAB NAVIGATION ---
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
    
    updateNavIndicator(evt.currentTarget);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavIndicator(activeTab) {
    const indicator = document.getElementById('navIndicator');
    if (!indicator || !activeTab) return;
    
    const tabRect = activeTab.getBoundingClientRect();
    const navRect = activeTab.parentElement.getBoundingClientRect();
    
    indicator.style.width = `${tabRect.width}px`;
    indicator.style.left = `${tabRect.left - navRect.left}px`;
}

function updateNavIndicatorOnEvent() {
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) updateNavIndicator(activeTab);
}

window.addEventListener('load', updateNavIndicatorOnEvent);
window.addEventListener('resize', updateNavIndicatorOnEvent);

// --- DONNÉES DES PROJETS ---
const projectsData = {
    'zelda': {
        title: 'Zelda Sheikah Slate',
        description: 'Projet visant à recréer les modules de la tablette Sheika de Zelda Breath of the Wild. Ce projet inclut la reprogrammation des runes, l\'interface utilisateur et les mécaniques de gameplay associées.',
        images: ['images/ZeldaSheikaSlate.png', 'images/PRES/Zelda BOTW - Preview (1).jpg', 'images/PRES/Zelda BOTW - Preview (2).jpg', 'images/PRES/Zelda BOTW - Preview (3).jpg'],
        youtube: 'https://youtu.be/EwNxTo2MaCk',
        github: 'https://github.com/Mateo-Paternsotre/UE5.6_ZeldaBOTW_Mechanics'
    },
    'super-sonic': {
        title: 'Super Sonic',
        description: 'Solo personal project developed on Unreal Engine 5, inspired by the superhero The Flash. The goal was to bring together as many of his iconic abilities as possible into a single prototype : super speed, slow motion, flash time, wall running and a combat system prototype. Each feature was documented as a YouTube tutorial, with a community-focused approach.',
        images: ['images/SuperSonic.png', 'images/PRES/Flash - Preview (1).jpg', 'images/PRES/Flash - Preview (2).jpg', 'images/PRES/Flash - Preview (3).jpg'],
        youtube: 'https://youtu.be/2AChNaf9f1s',
        github: null
    },
    'giant-ability': {
        title: 'Giant Ability Component',
        description: 'Unreal Engine 5 component designed to give any character a giant size. The logic is encapsulated in a Blueprint Component for easy integration. The project includes dynamic growth, physical behavior changes, charged jumps and a ground impact zone. Built to be modular and reusable, this component reflects a gameplay architecture-oriented approach.',
        images: ['images/GrowAbility.png', 'images/PRES/GROW Ability - Preview (1).jpg', 'images/PRES/GROW Ability - Preview (2).jpg', 'images/PRES/GROW Ability - Preview (3).jpg'],
        youtube: 'https://youtu.be/o3aqIcf9lBE',
        github: null
    },
    'sound-debugger': {
        title: 'Sound Debugger, UE5 Plugin',
        description: 'Personal project born from the need to better visualize sound zones directly in the editor, without manual selection, as part of a school exam focused on scene sound design. It displays debug spheres for every sound in the scene, providing better visibility across an entire map. Published on GitHub and continuously improved.',
        images: ['images/SoundDebug.png', 'images/PRES/SoundDebug - Preview (1).jpg', 'images/PRES/SoundDebug - Preview (2).jpg'],
        youtube: 'https://youtu.be/0KJMDK1818o',
        github: 'https://github.com/Mateo-Paternsotre/UE5_Sound_Debugger'
    },
    'space-hell-shooter': {
        title: 'Space Hell Shooter',
        description: 'A school project built entirely in C++ using the SDL library, with no game engine or framework. The goal was to build a functional game from scratch, handling rendering, input, collision and game logic manually. Features a score system, lives, enemy waves, two enemy types and two power-ups',
        images: ['images/SpaceShooter.jpg', 'images/PRES/SpaceShooter - Preview (1).png', 'images/PRES/SpaceShooter - Preview (2).png', 'images/PRES/SpaceShooter - Preview (3).png'],
        youtube: 'https://youtu.be/dFJ9ii2Hce0',
        github: null
    }
};

// --- DONNÉES DES JEUX ---
const gamesData = {
    'flash-demo': {
        title: 'Super Sonic',
        developer: 'Mateo Paternostre',
        rating: '4.8',
        description: 'Solo personal project developed on Unreal Engine 5, inspired by the superhero The Flash. The goal was to bring together as many of his iconic abilities as possible into a single prototype : super speed, slow motion, flash time, wall running and a combat system prototype. Each feature was documented as a YouTube tutorial, with a community-focused approach.',
        date: '2025',
        category: 'Technical Demo',
        icon: 'images/FDT_Icon.png',
        screenshots: ['images/SuperSonic.png', 'images/PRES/Flash - Preview (1).jpg', 'images/PRES/Flash - Preview (2).jpg', 'images/PRES/Flash - Preview (3).jpg'],
        link: 'https://youtu.be/2AChNaf9f1s'
    },
    'game-jam-b1': {
        title: 'One Elf Army',
        developer: 'Mateo Paternostre',
        rating: '4.0',
        description: 'First-person game developed in one week as part of a game jam, during my first year of game development. Built in Unreal Engine 5 with a team of 5. The theme was Surprise, the goal : help Santa sort colored gifts into the right tubes before time runs out. I handled all programming and VFX on the project.',
        date: '2025',
        category: 'Game Jam',
        icon: 'images/OEA_Icon.png',
        screenshots: ['images/PRES/OEA - Preview (1).jpg', 'images/PRES/OEA - Preview (2).jpg', 'images/PRES/OEA - Preview (3).jpg'],
        link: 'https://kyioekara.itch.io/one-elf-army'
    },
    'game-jam-b2': {
        title: 'Lil Robs',
        developer: 'Mateo Paternostre',
        rating: '4.2',
        description: 'Top-down game developed in one week as part of a game jam, during my second year of bachelor. Built in Unreal Engine 5 with a team of 7. The theme was Adventure, you play as a small robot learning vocabulary words to interact with its environment. The more it learns, the more it can navigate the world around it. I was the sole programmer, handling dialogue systems, object interactions, player movement and camera management.',
        date: '2026',
        category: 'Game Jam',
        icon: 'images/LR_Icon.png',
        screenshots: ['images/PRES/LilR - Preview (1).jpg', 'images/PRES/LilR - Preview (2).jpg', 'images/PRES/LilR - Preview (3).jpg'],
        link: 'https://kyioekara.itch.io/lilrobs'
    }
};

let currentProject = null;
let currentImageIndex = 0;

// --- HELPER FUNCTIONS ---
function setButtonVisibility(btnId, url) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    
    if (url) {
        btn.href = url;
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
}

function setCarouselButtonsVisibility(selector, images) {
    const btns = document.querySelectorAll(selector);
    const shouldShow = images && images.length > 1;
    btns.forEach(btn => btn.style.display = shouldShow ? 'block' : 'none');
}

function openModalBase(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalBase(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeSlideBase(direction, images, imageElementId) {
    if (!images || images.length <= 1) return;
    
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    else if (currentImageIndex >= images.length) currentImageIndex = 0;
    
    document.getElementById(imageElementId).src = images[currentImageIndex];
}

// --- PROJECT MODAL ---
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    currentProject = project;
    currentImageIndex = 0;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = project.images[0];

    setButtonVisibility('youtubeBtn', project.youtube);
    setButtonVisibility('githubBtn', project.github);
    setCarouselButtonsVisibility('.carousel-btn', project.images);
    
    openModalBase('projectModal');
}

function closeModal() {
    closeModalBase('projectModal');
}

function changeSlide(direction) {
    changeSlideBase(direction, currentProject?.images, 'modalImage');
}

// --- GAME MODAL ---
function openGameModal(gameId) {
    const game = gamesData[gameId];
    if (!game) return;

    currentProject = game;
    currentImageIndex = 0;

    document.getElementById('gameModalTitle').textContent = game.title;
    document.getElementById('gameModalDescription').textContent = game.description;
    document.getElementById('gameModalImage').src = game.icon;

    setButtonVisibility('gameModalPlayBtn', game.link);
    setCarouselButtonsVisibility('#gameModal .carousel-btn', game.screenshots);
    
    openModalBase('gameModal');
}

function closeGameModal() {
    closeModalBase('gameModal');
}

function changeGameSlide(direction) {
    changeSlideBase(direction, currentProject?.screenshots, 'gameModalImage');
}

// --- EVENT LISTENERS ---
window.onclick = function(event) {
    if (event.target.id === 'projectModal') closeModal();
    if (event.target.id === 'gameModal') closeGameModal();
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
        closeGameModal();
    }
});

// Disable right-click
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
