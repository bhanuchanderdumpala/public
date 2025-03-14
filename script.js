document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const marksForm = document.getElementById('marksForm');
    const studentList = document.getElementById('studentList');
    const studentIdSelect = document.getElementById('studentId');

    // Fetch and display students
    function fetchStudents() {
        fetch('/api/students')
            .then(response => response.json())
            .then(students => {
                studentList.innerHTML = '';
                studentIdSelect.innerHTML = '';
                students.forEach(student => {
                    const li = document.createElement('li');
                    li.textContent = student.name;
                    studentList.appendChild(li);

                    const option = document.createElement('option');
                    option.value = student.id;
                    option.textContent = student.name;
                    studentIdSelect.appendChild(option);
                });
            });
    }

    // Add a new student
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        }).then(() => {
            studentForm.reset();
            fetchStudents();
        });
    });

    // Add marks for a student
    marksForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('studentId').value;
        const subject = document.getElementById('subject').value;
        const fa1 = document.getElementById('fa1').value;
        const fa2 = document.getElementById('fa2').value;
        const fa3 = document.getElementById('fa3').value;
        const fa4 = document.getElementById('fa4').value;
        const sa1 = document.getElementById('sa1').value;
        const sa2 = document.getElementById('sa2').value;
        const finalExam = document.getElementById('finalExam').value;

        fetch('/api/marks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId, subject, fa1, fa2, fa3, fa4, sa1, sa2, finalExam })
        }).then(() => {
            marksForm.reset();
        });
    });

    // Initial fetch
    fetchStudents();
});