document.addEventListener('DOMContentLoaded', function() {
    const userDataDiv = document.getElementById("user-data");

    function fetchData() {
        fetch("https://randomuser.me/api/")
            .then(function (response) { return response.json(); })
            .then(function(data){ displayData(data); })
            .catch(function(err){ console.log(err); });
    }

    document.getElementById('btn').addEventListener('click', fetchData);

    function displayData(data) {
        userDataDiv.textContent = "";

        const user = data.results[0];

        // Create and append user image
        const imgDiv = document.createElement('div');
        imgDiv.style.textAlign = 'center';
        const img = document.createElement('img');
        img.src = user.picture.large;
        imgDiv.appendChild(img);
        userDataDiv.appendChild(imgDiv);

        // Create and append user details in separate containers
        const details = [
            {label: 'Name', value: `${user.name.title} ${user.name.first} ${user.name.last}`},
            {label: 'Email', value: `${user.email}`},
            {label: 'Phone', value: `${user.phone}`},
            {label: 'Cell', value: `${user.cell}`},
            {label: 'Location', value: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`},
            {label: 'Date of Birth', value: `${new Date(user.dob.date).toLocaleDateString()} (Age: ${user.dob.age})`},
            {label: 'Nationality', value: `${user.nat}`}
        ];

        details.forEach(detail => {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'field-container';

            const labelPara = document.createElement('span');
            labelPara.textContent = detail.label + ": ";
            labelPara.className = 'label';
            fieldDiv.appendChild(labelPara);

            const valuePara = document.createElement('span');
            valuePara.textContent = detail.value;
            valuePara.className = 'value hidden';
            fieldDiv.appendChild(valuePara);

            userDataDiv.appendChild(fieldDiv);
        });
    }
});