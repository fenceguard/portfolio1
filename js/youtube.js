var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    // height: '390',
    // width: '640',
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
    'onReady': onPlayerReady,
    // 'onStateChange': onPlayerStateChange
    }
});
}

function onPlayerReady(event) {
event.target.playVideo();
event.target.mute();
}

/*
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
}
}*/

function stopVideo() {
player.stopVideo();
}