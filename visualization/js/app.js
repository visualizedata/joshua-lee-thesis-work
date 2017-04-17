$('.section').click(togglePanel);

function togglePanel(event) {
    if (event.currentTarget.getAttribute("collasped") == 'true') {
        TweenLite.to(event.currentTarget, 0.3, { height: 200, ease: Power4.easeOut, background:'darkgray' });
        event.currentTarget.setAttribute("collasped", false);
    } else {
        TweenLite.to(event.currentTarget, 0.3, { height: 80, ease: Power4.easeOut, background: 'lightgray' });
        event.currentTarget.setAttribute("collasped", true);
    }
}