// Listen for submit
document.getElementById('quote-form').addEventListener('submit', function (e) {
  // hide results
  document.getElementById('results').style.display = 'none';

  // show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// calculate results
function calculateResults() {
  console.log('Calculating...');
  // UI vars
  const vehicleType = document.getElementById('vehicle-type');
  const vehicleQuantity = document.getElementById('vehicle-quantity');
  const pricingMethod = document.getElementById('pricing-method');
  const pricingUnits = document.getElementById('pricing-units');
  const totalPayment = document.getElementById('total-payment');

  const type = vehicleType.value;
  const quantity = parseFloat(vehicleQuantity.value);
  const method = pricingMethod.value;
  const units = parseFloat(pricingUnits.value);
  let coef;

  if (type == 1) {
    if (method == 1) {
      coef == 1000;
    } else if (method == 2) {
      coef == 400;
    } else if (method == 3) {
      coef == 3.5;
    }
  } else if (type == 2) {
    if (method == 1) {
      coef == 925;
    } else if (method == 2) {
      coef == 360;
    } else if (method == 3) {
      coef == 3.23;
    }
  } else if (type == 3) {
    if (method == 1) {
      coef == 850;
    } else if (method == 2) {
      coef == 320;
    } else if (method == 3) {
      coef == 3;
    }
  } else if (type == 4) {
    if (method == 1) {
      coef == 775;
    } else if (method == 2) {
      coef == 280;
    } else if (method == 3) {
      coef == 2.75;
    }
  } else if (type == 5) {
    if (method == 1) {
      coef == 700;
    } else if (method == 2) {
      coef == 240;
    } else if (method == 3) {
      coef == 2.5;
    }
  } else if (type == 6) {
    if (method == 1) {
      coef == 625;
    } else if (method == 2) {
      coef == 200;
    } else if (method == 3) {
      coef == 2.25;
    }
  } else if (type == 7) {
    if (method == 1) {
      coef == 550;
    } else if (method == 2) {
      coef == 160;
    } else if (method == 3) {
      coef == 2.0;
    }
  } else if (type == 8) {
    if (method == 1) {
      coef == 475;
    } else if (method == 2) {
      coef == 120;
    } else if (method == 3) {
      coef == 1.75;
    }
  }

  // compute price
  const price = coef * quantity * units;

  if (isFinite(monthly)) {
    totalPayment.value = price.toFixed(2);

    // show results
    document.getElementById('results').style.display = 'block';
    // hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
}

// show error
function showError(error) {
  // hide results
  document.getElementById('results').style.display = 'none';
  // hide loader
  document.getElementById('loading').style.display = 'none';
  // create div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}
