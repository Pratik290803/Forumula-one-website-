// Countdown Timer Script
const countdown = () => {
    const countDate = new Date('July 28, 2024 15:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);

    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
};

$(document).ready(function() {
    $('.video-thumbnail').on('click', function() {
        const videoSrc = $(this).data('video');
        $('#videoPlayer source').attr('src', videoSrc);
        $('#videoPlayer')[0].load();
        $('#videoModal').modal('show');
    });

    $('#videoModal').on('hide.bs.modal', function() {
        $('#videoPlayer')[0].pause();
        $('#videoPlayer source').attr('src', '');
    });
});
