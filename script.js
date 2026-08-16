console.log("Portfolio Loaded");

const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "AI Enthusiast"
];

let index = 0;
let char = 0;
let current = "";
let isDeleting = false;

function type() {

    current = roles[index];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            current.substring(0, char++);

        if (char > current.length) {

            isDeleting = true;

            setTimeout(type, 1200);

            return;
        }

    } else {

        document.getElementById("typing").textContent =
            current.substring(0, char--);

        if (char < 0) {

            isDeleting = false;

            index++;

            if (index == roles.length)

                index = 0;
        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();



// ================= PROJECT MODAL FUNCTIONALITY =================

const projectsData = {
    'food-delivery': {
        title: 'AI Food Delivery Platform',
        subtitle: 'A recommendation-driven food delivery web app that connects customers with home chefs using AI intelligence.',
        image: 'images/projects/food-delivery.svg',
        scope: 'This project showcases an AI-enabled food delivery platform designed to help users discover nearby home chefs and personalized meal recommendations. The platform includes user profiles, chef listings, intelligent menu suggestions, and an optimized ordering workflow.',
        abstract: 'The AI Food Delivery Platform is a comprehensive web application that leverages artificial intelligence to connect customers with home chefs. The system provides intelligent recommendations for dishes and chefs, maintains detailed chef profiles with cuisine specialties, and manages the complete ordering workflow from discovery to delivery.',
        objectives: [
            'Develop an AI-powered recommendation engine for personalized dish and chef suggestions',
            'Create a responsive front-end with an intuitive ordering flow',
            'Implement chef profile management with cuisine specialization',
            'Build a structured service matching system between customers and home cooks',
            'Optimize the user experience for food discovery and ordering'
        ],
        features: [
            'AI-powered recommendations for dishes and chefs',
            'Responsive front-end with intuitive ordering flow',
            'Chef profiles, cuisines, and delivery scheduling',
            'Structured service matching between customers and home cooks',
            'User authentication and profile management',
            'Real-time order tracking'
        ],
        tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'AI/ML'],
        github: '#',
        live: '#'
    },
    'chatbot': {
        title: 'AI Chatbot',
        subtitle: 'A conversational AI assistant built with OpenAI, LangChain, and Gradio for interactive user experiences.',
        image: 'images/projects/chatbot.svg',
        scope: 'This chatbot project demonstrates a modern AI conversational assistant capable of answering questions, understanding intent, and delivering helpful responses. The system integrates language models with a user-friendly interface for rapid prototyping and testing.',
        abstract: 'The AI Chatbot is an intelligent conversational assistant powered by state-of-the-art language models from OpenAI. It utilizes LangChain for advanced prompt management and context handling, and Gradio provides a quick, user-friendly interface for deployment and testing without requiring deep technical knowledge.',
        objectives: [
            'Build an interactive chatbot powered by advanced language models',
            'Implement context-aware conversation management using LangChain',
            'Create a user-friendly interface using Gradio for quick deployment',
            'Enable support for multi-turn conversations and follow-up replies',
            'Provide an intuitive platform for testing and iterating on prompts'
        ],
        features: [
            'Interactive AI chatbot powered by OpenAI',
            'LangChain integration for advanced prompt management',
            'Gradio interface for quick deployment and testing',
            'Support for conversational context and follow-up replies',
            'Easy-to-use interface requiring minimal technical setup',
            'Real-time response generation'
        ],
        tech: ['Python', 'OpenAI', 'LangChain', 'Gradio', 'NLP'],
        github: '#',
        live: '#'
    },
    'chemistry': {
        title: 'National Chemistry Conference Website',
        subtitle: 'A responsive conference website built with HTML, CSS, and JavaScript to showcase event details and speaker information.',
        image: 'images/projects/chemistry.svg',
        scope: 'This website project features a polished conference layout with event schedules, speaker profiles, and registration details. The design focuses on readability, responsive behaviour, and a clear information hierarchy to provide attendees with all necessary conference information.',
        abstract: 'The National Chemistry Conference Website is a modern, responsive web application designed to showcase conference details, speaker profiles, event agendas, and registration information. Built with HTML, CSS, and JavaScript, the site emphasizes clean design, readability, and seamless user experience across all devices.',
        objectives: [
            'Design and implement a fully responsive layout for all device sizes',
            'Create clear sections for agenda, speakers, and registration',
            'Implement interactive navigation and smooth scrolling',
            'Develop a modern visual presentation with readable typography',
            'Ensure fast loading and optimal performance',
            'Provide easy registration and information access for attendees'
        ],
        features: [
            'Fully responsive layout for desktop and mobile screens',
            'Clear sections for agenda, speakers, and registration',
            'Interactive navigation and smooth scrolling',
            'Modern visual presentation with readable typography',
            'Registration form with validation',
            'Speaker profiles with detailed information',
            'Event schedule and timeline'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
        github: '#',
        live: '#'
    }
};

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (!project) return;
    
    // Populate modal with project data
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalScope').textContent = project.scope;
    document.getElementById('modalAbstract').textContent = project.abstract;
    
    // Populate objectives list
    const objectivesList = document.getElementById('modalObjectives');
    objectivesList.innerHTML = '';
    project.objectives.forEach(objective => {
        const li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
    
    // Populate features list
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Populate tech stack
    const techStack = document.getElementById('modalTechStack');
    techStack.innerHTML = '';
    project.tech.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
    });
    
    // Set button links
    document.getElementById('modalGithub').href = project.github;
    document.getElementById('modalLive').href = project.live;
    
    // Show modal
    document.getElementById('projectModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}


