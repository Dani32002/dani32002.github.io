const containerSkills = document.getElementById('techContent');
const containerExperience = document.getElementById('educationContainer');
const containerCertifications = document.getElementById('certContainer');


techs = [
    "git", 
    "python", 
    "java", 
    "angular", 
    "SQL", 
    "javascript", 
    "typescript", 
    "linux" , 
    "C", 
    "HTML", 
    "CSS", 
    "IA-32 ASM", 
    "spring", 
    "GCP", 
    "django", 
    "mongoDB", 
    "express", 
    "reactJs", 
    "redux", 
    "nodeJs", 
    "postgreSQL", 
    "nestJs", 
    "scikit", 
    "kotlin", 
    "compose", 
    "android", 
    "flask", 
    "docker", 
    "cisco PT", 
    "K8s", 
    "Helm", 
    "Jenkins", 
    "Ansible", 
    "PromQL", 
    "AZ-900", 
    "Terraform", 
    "Pytorch", 
    "TensorFlow", 
    "LangChain", 
    "LLMs", 
    "Transformer", 
    "Agents"
];

experience = [
    "High School - Fundación Educativa Rochester (Bogota, Colombia) - 2021 - Nominee for International Scholarship",
    "Undergraduate Software and Computer Engineering Program - Universidad de Los Andes (Bogota, Colombia) - 2025 - GPA: 4.87",
    "Teaching Assistant - Course: Fundamentals of Technologic Infrastructure - Universidad de Los Andes (Bogota, Colombia) - 2023",
    "Teaching Assistant - Course: Team Software Development - Universidad de Los Andes (Bogota, Colombia) - 2023",
    "Investigation Assistant - Course: Team Software Development - Universidad de Los Andes (Bogota, Colombia) - 2024",
    "Teaching Assistant - Course: Communications Infrastructure - Universidad de Los Andes (Bogota, Colombia) - 2024/2025",
    "Cloud Engineering Intern - Amadeus IT Group - June 2025 - December 2025"
]

certificates = [
    {
        name: "Efficient Large Language Model (LLM) Customization - NVIDIA - 2025",
        image: "nvidia.jpeg",
    },
    {
        name: "Rapid Application Development with Large Language Models (LLMs) - NVIDIA - 2025",
        image: "nvidia.jpeg",
    },
    {
        name: "Building LLM Applications With Prompt Engineering - NVIDIA - 2025",
        image: "nvidia.jpeg",
    },
    {
        name: "Building Transformer-Based Natural Language Processing Applications - NVIDIA - 2025",
        image: "nvidia.jpeg",
    },
    {
        name: "Fundamentals of Deep Learning - NVIDIA - 2025",
        image: "nvidia.jpeg",
    },
    {
        name: "Desarrollo de apps para Android con Jetpack Compose y Kotlin - Udemy - 2024",
        image: "udemy.jpeg",
    },
];

techs.forEach(tech => {
    containerSkills.innerHTML += `<div class = "col-12 col-sm-4 celda mb-3"><p class = "tech"><img class="logoTech" src="./assets/${tech.toLowerCase()}.png" alt="${tech}"> ${tech}</p></div>`;
});

experience.forEach(exp => {
    containerExperience.innerHTML += `<div class="row listItem"><span>${exp}</span></div>`
});

certificates.forEach(cert => {
    containerCertifications.innerHTML += `<div class="row listItem certRow"><img class="certImage" src="./assets/${cert.image.toLowerCase()}" alt="${cert.name}"><span class="certSpan">${cert.name}</span></div>`
});
