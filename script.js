document.addEventListener('DOMContentLoaded', () => {
    const resetHour = 17; // 5 PM
    const checklists = [
        'checklist1',
        'checklist2',
        'checklist3'
    ];

    function resetChecklists() {
        checklists.forEach(id => {
            const checklist = document.getElementById(id);
            const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => checkbox.checked = false);
        });
    }

    function checkReset() {
        const now = new Date();
        const resetTime = new Date();
        resetTime.setHours(resetHour, 0, 0, 0); 

        if (now > resetTime) {
            resetChecklists();
        }
    }

    // Check on page load
    checkReset();
    
    // Check every minute
    setInterval(checkReset, 60000);
});
