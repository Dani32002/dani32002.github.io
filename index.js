let containerSkills = document.getElementById('techContent');
let containerExperience = document.getElementById('educationContainer');

techs = ["git", "python", "java", "angular", "SQL", "javascript", "typescript", "github", "C", "HTML", "CSS", "IA-32 ASM", "spring", "GCP", "django", "mongoDB", "express", "reactJs", "redux", "nodeJs", "postgreSQL", "nestJs", "ML", "scikit", "dataprep", "GAMS"];

experience = [
    "High School - Fundación Educativa Rochester (Bogota, Colombia) - 2021 - Nominee for International Scholarship",
    "Undergraduate Software and Computer Engineering Program - Universidad de Los Andes (Bogota, Colombia) - 2025 - GPA: 4.86",
    "Class Assistant - Course: Fundamentals of Technologic Infrastructure - Universidad de Los Andes (Bogota, Colombia) - 2023",
    "Class Assistant - Course: Team Software Development - Universidad de Los Andes (Bogota, Colombia) - 2023",
    "Investigation Assistant - Course: Team Software Development - Universidad de Los Andes (Bogota, Colombia) - 2024"
]

techs.forEach(tech => {
    containerSkills.innerHTML += `<div class = "col-12 col-sm-4 celda mb-3"><p class = "tech"><img class="logoTech" src="./assets/${tech.toLowerCase()}.png" alt="${tech}"> ${tech}</p></div>`;
});

experience.forEach(exp => {
    containerExperience.innerHTML += `<div class="row exp"><span>${exp}</span></div>`
});