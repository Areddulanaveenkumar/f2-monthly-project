document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the provided URL
    fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
    .then(response => response.json())
    .then(data => {
        // Populate table with student data
        populateTable(data);
    })
    .catch(error => console.error('Error fetching data:', error));

    // Function to populate table with student data
    function populateTable(data) {
        // Get table body element
        const tableBody = document.getElementById('tableBody');
        // Clear existing table data
        tableBody.innerHTML = '';
        // Loop through each student
        data.forEach(student => {
            // Create a new table row
            const row = document.createElement('tr');
            // Add student data to the row
            row.innerHTML = `
                <td><img src="${student.image}" alt="Student Image"></td>
                <td>${student.first_name} ${student.last_name}</td>
                <td>${student.email}</td>
                <td>${student.marks}</td>
                <td>${student.passing ? 'Passing' : 'Failed'}</td>
                <td>${student.class}</td>
                <td>${student.gender}</td>
            `;
            // Append row to table body
            tableBody.appendChild(row);
        });
    }

    // Add event listeners for sorting buttons and search input
    // Implement sorting and search functionality as required
});
