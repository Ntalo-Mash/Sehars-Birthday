window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('loading-screen').transition
        document.getElementById('greeting').style.display = 'block';
    }, 1000); // Adjust the time (in milliseconds) as needed
};
