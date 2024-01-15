var form = document.getElementById("employeeForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get the selected value from the dropdown
  var employee = form.elements["Employees"].value;

  // Log or process the selected value
  console.log("Selected Employee:", employee);
  const ctx = document.getElementById("myChart");
  if (ctx) {
    ctx.remove();
  }

  fetchthings(employee);

  // You can also make an AJAX request here to submit the data
  // to the server without reloading the page
});

function fetchthings(name) {
  var x_date = [];
  var y_hours = [];

  fetch("http://localhost:3000/api/attendance")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        if (row.name === name) {
          x_date.push(row.date);
          y_hours.push(row.working_time);
        }
      });
    });
  console.log(x_date);
  console.log(y_hours);

  var div = document.createElement("canvas");
  div.id = "myChart";
  div.width = 400;
  div.height = 200;
  var ctx = div.getContext("2d");
  console.log(ctx);

  const container = document.querySelector("#container");
  container.appendChild(div);

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: x_date, // Dates
      datasets: [
        {
          label: "Working Hours",
          data: y_hours, // Corresponding working hours
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 8, // Set max value for the y-axis
        },
      },
    },
  });
}
