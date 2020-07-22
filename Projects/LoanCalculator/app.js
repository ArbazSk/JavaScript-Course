// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide the results
    document.getElementById('results').style.display = 'none';

    // show Loading 
    document.getElementById('loading').style.display = 'block';

    setTimeout(calcResult, 1000);
    e.preventDefault();
});

// Calculate Results
function calcResult(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const montlyPayment = document.getElementById('montly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    if(amount.value ==='' || interest.value === '' || years.value === ''){
        showError('Insert all The Value');
    }
    else {
        const principal = parseFloat(amount.value);
        const calculateInterest = parseFloat(interest.value) / 100 / 12;
        const calculatedPayments = parseFloat(years.value) * 12;

        // Compute montly Payment
        const x = Math.pow(1 + calculateInterest, calculatedPayments);
        const monthly = (principal * x * calculateInterest) / (x-1);

        if(isFinite(monthly)){
            document.getElementById('loading').style.display = 'block';
            montlyPayment.value = monthly.toFixed(2);
            totalPayment.value = (monthly * calculatedPayments).toFixed(2);
            totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

            // Show Results
            document.getElementById('results').style.display = 'block';
            // Hide Loading
            document.getElementById('loading').style.display = 'none';
        }else{
            showError('Please Check Numbers.');
        }
    }
}

function showError(error){
    // Hide Results
    document.getElementById('results').style.display = 'none';
    // Hide Loading
    document.getElementById('loading').style.display = 'none';
    
    // create div
    const errordiv = document.createElement('div');

    // Get Element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // add class
    errordiv.className = 'alert alert-danger';
    // create text node
    errordiv.appendChild(document.createTextNode(error));
    // Insert  error above heading
    card.insertBefore(errordiv, heading);

    // Clear erroe after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

}