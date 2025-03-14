document.getElementById('analysisForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get selected class and exam type
    const studentClass = document.getElementById('class').value;
    const examType = document.getElementById('examType').value;

    // Fetch analysis data from the backend
    fetch(`/api/analysis?class=${studentClass}&examType=${examType}`)
    .then(response => response.json())
    .then(data => {
        const analysisResult = document.getElementById('analysisResult');
        analysisResult.innerHTML = ''; // Clear previous content

        // Display analysis results
        data.forEach(student => {
            const div = document.createElement('div');
            div.className = 'student-result';
            div.innerHTML = `
                <h3>${student.studentName}</h3>
                <p>Total Marks: ${student.total}</p>
                <p>Average: ${student.average.toFixed(2)}</p>
                <p>Rank: ${student.rank}</p>
            `;
            analysisResult.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to fetch analysis data. Please try again.');
    });
});