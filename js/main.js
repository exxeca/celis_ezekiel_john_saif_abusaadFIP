const mmtContainer = document.querySelector('.m-m-t');

mmtContainer.addEventListener('mousemove', function(event) {
    const rect = mmtContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    mmtContainer.style.setProperty('--mouse-x', mouseX + 'px');
    mmtContainer.style.setProperty('--mouse-y', mouseY + 'px');
});
