function showProjects() {
    const projectList = document.getElementById('btn1');
    projectList.innerHTML = ``;
    const projects = [
        { name: 'Biogas Energy Harnessing'},
        { name: 'Bookstore database'},
        { name: 'Students record database'}
    ];

    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.name}`;
        projectList.appendChild(li);
    });

    // Hide the project list by clicking the button again
    projectList.addEventListener('click', () => {
        projectList.innerHTML = '';
    });

}

function showAlert() {
    alert("You can reach me on my number; 0743173741 or email me at: owinosospeter60@gmail.com.");
}