document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
    const registerForm = document.getElementById('register-form');
    const quizForm = document.getElementById('quiz-form');
  
    // Sample course data
    const courses = [
      { 
        title: 'HTML for Beginners', 
        description: 'Learn the basics of HTML.', 
        image: 'https://source.unsplash.com/300x200/?html' 
      },
      { 
        title: 'CSS for Beginners', 
        description: 'Learn the basics of CSS.', 
        image: 'https://source.unsplash.com/300x200/?css' 
      },
      { 
        title: 'JavaScript for Beginners', 
        description: 'Learn the basics of JavaScript.', 
        image: 'https://source.unsplash.com/300x200/?javascript' 
      },
    ];
  
    // Display courses
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('col-md-4');
      courseCard.innerHTML = `
        <div class="card">
          <img src="${course.image}" class="card-img-top" alt="${course.title}">
          <div class="card-body">
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text">${course.description}</p>
            <button class="btn btn-primary">Start Course</button>
          </div>
        </div>
      `;
      courseList.appendChild(courseCard);
    });
  
    // Handle user registration
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log(`User registered: ${username}, ${email}`);
      registerForm.reset();
    });
  
    // Handle quiz submission
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const answer = document.querySelector('input[name="question1"]:checked').value;
      if (answer === '4') {
        alert('Correct!');
      } else {
        alert('Incorrect. Try again.');
      }
      quizForm.reset();
    });
  });
  
  
  