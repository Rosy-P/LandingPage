function toggleVideo(trailerClass) {
    const trailers = document.querySelectorAll('.trailer');
    const video = document.querySelector('.' + trailerClass + ' video');
    const head = document.querySelector('header');
    const contents = document.querySelectorAll('.content');
    
    // Toggle the specific trailer
    const currentTrailer = document.querySelector('.' + trailerClass);
    if (currentTrailer) {
        currentTrailer.classList.toggle('active');
        if (currentTrailer.classList.contains('active')) {
            video.play();
            head.classList.add('active'); // Hide header when trailer is playing
            
        } else{
            head.classList.remove('active');
        }
    }
    
}

function changeBg(bg,title){
    const banner=document.querySelector('.banner');
    const contents=document.querySelectorAll('.content');
    banner.style.background='url("Images/'+ bg +'")';
    banner.style.backgroundSize='cover';
    banner.style.backgroundPosition='center';
    

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active')
        }
    });
}



