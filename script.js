document.addEventListener('DOMContentLoaded', () => {
    // Handle dynamic content on notes.html
    const notesPage = document.querySelector('.notes-section');
    if (notesPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const stream = urlParams.get('stream');

        const streamTitle = document.getElementById('stream-title');
        const subjectList = document.getElementById('subject-list');

        let subjects = [];
        let titleText = 'Notes';

        if (stream === 'cse') {
            titleText = 'CSE Notes';
            subjects = [
                { name: 'Physics', link: '#' },
                { name: 'Mathematics', link: '#' },
                { name: 'Basic Electrical', link: '#' }
            ];
        } else if (stream === 'csbs') {
            titleText = 'CSBS Notes';
            subjects = [
                { name: 'Business Management', link: '#' },
                { name: 'Emerging Technologies', link: '#' },
                { name: 'Business Communication', link: '#' }
            ];
        } else if (stream === 'electrical') {
            titleText = 'Electrical Notes';
            subjects = [
                { name: 'Chemistry', link: '#' },
                { name: 'Mathematics', link: '#' },
                { name: 'Basic Electrical', link: '#' }
            ];
        }

        streamTitle.textContent = titleText;

        if (subjects.length > 0) {
            subjects.forEach(subject => {
                const card = document.createElement('a');
                card.href = subject.link;
                card.className = 'card';
                card.innerHTML = `
                    <h3>${subject.name}</h3>
                `;
                subjectList.appendChild(card);
            });
        } else {
            subjectList.innerHTML = '<p>No subjects found for this stream.</p>';
        }
    }

    // Handle form submissions (front-end only)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login form submitted (front-end simulation). No backend logic.');
            // Here you would send data to a backend server
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Register form submitted (front-end simulation). No backend logic.');
            // Here you would send data to a backend server
        });
    }
});