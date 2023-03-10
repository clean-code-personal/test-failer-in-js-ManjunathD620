function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return 500;
}

function realNetworkIntegration(celcius) {
    // real network communication code goes here
  }


function alertInCelcius(farenheit, alertFunction = networkAlertStub) {
    let alertFailureCount = 0;
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode =  alertFunction (celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 1;
    }
    return alertFailureCount;
}

module.exports = alertInCelcius;
