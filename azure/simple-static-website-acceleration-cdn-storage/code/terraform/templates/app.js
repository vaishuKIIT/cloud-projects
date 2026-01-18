document.addEventListener('DOMContentLoaded', function() {
    console.log('Static website loaded via Azure CDN');
    
    // Add performance timing
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time: ' + loadTime + 'ms');
    });
});
