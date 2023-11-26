document.getElementById('new-req-btn').addEventListener('click', function() {
    document.getElementById('new-req-container').style.visibility = 'visible';
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('new-req-container').style.visibility = 'hidden';
});