document.addEventListener('DOMContentLoaded', () => {
    const classSelect = document.getElementById('class');
    const displayStudentListButton = document.getElementById('displayStudentListButton');
    const addStudentButton = document.getElementById('addStudentButton');
    const studentEntryForm = document.getElementById('studentEntryForm');
    const addStudentForm = document.getElementById('addStudentForm');
    const studentList = document.getElementById('studentList');

    console.log("✅ JavaScript Loaded Successfully!"); // Debugging

    // Ensure elements exist before attaching event listeners
    if (!classSelect || !displayStudentListButton || !addStudentButton || !studentEntryForm || !addStudentForm || !studentList) {
        console.error("❌ Missing essential DOM elements.");
        return;
    }

    // Show "Display Student List" button when a class is selected
    classSelect.addEventListener('change', () => {
        console.log("📌 Class Selected:", classSelect.value);
        displayStudentListButton.style.display = classSelect.value ? 'block' : 'none';
    });

    // Fetch and display student list
    displayStudentListButton.addEventListener('click', () => {
        const selectedClass = classSelect.value;
        if (!selectedClass) {
            alert("⚠️ Please select a class first.");
            return;
        }

        console.log(`📤 Fetching students for class: ${selectedClass}...`);

        fetch(`/api/students?class=${selectedClass}`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch students.');
                return response.json();
            })
            .then(students => {
                studentList.innerHTML = ''; // Clear previous list

                if (!students || students.length === 0) {
                    const li = document.createElement('li');
                    li.textContent = "No students available in this class. Click 'Add Student' to add.";
                    studentList.appendChild(li);
                    return;
                }

                students.forEach(student => {
                    const li = document.createElement('li');
                    li.textContent = `${student.studentName} (Admission: ${student.admissionNumber})`;
                    studentList.appendChild(li);
                });

                console.log("✅ Student list updated.");
            })
            .catch(error => {
                console.error("❌ Error fetching students:", error);
                alert("❌ Failed to fetch student list.");
            });
    });

    // Show/hide student entry form when "Add Student" button is clicked
    addStudentButton.addEventListener('click', () => {
        console.log("➕ Add Student Button Clicked");
        studentEntryForm.style.display = studentEntryForm.style.display === 'block' ? 'none' : 'block';
    });

    // Handle student form submission
    addStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const admissionNumber = document.getElementById('admissionNumber').value.trim();
        const studentName = document.getElementById('studentName').value.trim();
        const fatherName = document.getElementById('fatherName').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const selectedClass = classSelect.value;

        if (!admissionNumber || !studentName || !fatherName || !dob || !selectedClass) {
            alert("⚠️ All fields are required!");
            return;
        }

        // Validate Date of Birth format (DD-MM-YYYY)
        const dobRegex = /^\d{2}-\d{2}-\d{4}$/;
        if (!dobRegex.test(dob)) {
            alert("⚠️ Please enter Date of Birth in DD-MM-YYYY format.");
            return;
        }

        console.log("📤 Adding Student:", { admissionNumber, studentName, fatherName, dob, selectedClass });

        fetch('http://localhost:4000/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ admissionNumber, studentName, class: selectedClass, fatherName, dob })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(`❌ ${data.error}`);
                    return;
                }

                alert(`✅ ${studentName} (Class ${selectedClass}) added successfully!`);
                addStudentForm.reset(); // Clear the form
                studentEntryForm.style.display = 'none'; // Hide the form
                displayStudentListButton.click(); // Refresh student list

                console.log("✅ Student added successfully!");
            })
            .catch(error => {
                console.error("❌ Error adding student:", error);
                alert("❌ Failed to add student.");
            });
    });
});
