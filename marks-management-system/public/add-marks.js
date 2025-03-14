document.getElementById('addMarksForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get selected class and exam type
    const studentClass = document.getElementById('class').value;
    const examType = document.getElementById('examType').value;

    // Fetch students for the selected class
    fetch(`/api/students?class=${studentClass}`)
    .then(response => response.json())
    .then(students => {
        const studentsMarksContainer = document.getElementById('studentsMarksContainer');
        studentsMarksContainer.innerHTML = ''; // Clear previous content

        // Generate marks entry fields for each student
        students.forEach(student => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${student.studentName}</h3>
                <label>Sub1:</label>
                <input type="number" id="sub1-${student.admissionNumber}" required>
                <label>Sub2:</label>
                <input type="number" id="sub2-${student.admissionNumber}" required>
                <label>Sub3:</label>
                <input type="number" id="sub3-${student.admissionNumber}" required>
                <label>Sub4:</label>
                <input type="number" id="sub4-${student.admissionNumber}" required>
                <label>Sub5:</label>
                <input type="number" id="sub5-${student.admissionNumber}" required>
                <label>Sub6:</label>
                <input type="number" id="sub6-${student.admissionNumber}" required>
            `;
            studentsMarksContainer.appendChild(div);
        });

        // Add a submit button for saving marks
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Save Marks';
        studentsMarksContainer.appendChild(submitButton);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to fetch students. Please try again.');
    });
});

// Handle marks submission
document.getElementById('addMarksForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const studentClass = document.getElementById('class').value;
    const examType = document.getElementById('examType').value;

    // Fetch students for the selected class
    fetch(`/api/students?class=${studentClass}`)
    .then(response => response.json())
    .then(students => {
        const marksData = students.map(student => {
            return {
                studentId: student.admissionNumber,
                examType,
                sub1: document.getElementById(`sub1-${student.admissionNumber}`).value,
                sub2: document.getElementById(`sub2-${student.admissionNumber}`).value,
                sub3: document.getElementById(`sub3-${student.admissionNumber}`).value,
                sub4: document.getElementById(`sub4-${student.admissionNumber}`).value,
                sub5: document.getElementById(`sub5-${student.admissionNumber}`).value,
                sub6: document.getElementById(`sub6-${student.admissionNumber}`).value
            };
        });

        // Send marks data to the backend
        fetch('/api/marks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(marksData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Marks saved successfully!');
            document.getElementById('addMarksForm').reset(); // Clear the form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to save marks. Please try again.');
        });
    });
});