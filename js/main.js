var overlay = document.getElementById('grad-overlay');
var background = document.getElementById('container');
var artwork = document.getElementById('artwork');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var controls = document.getElementById('controls');
var seekbar = document.getElementById('progress-bar');

var lightVibrantColor = 'rgb(215, 43, 105)';
var backgroundImageUrl ='../resources/images/backdrop_5.jpg';
var artworkUrl = '../resources/images/art_5.jpg';
var musicTitle = 'Cruel';
var musicArtist = 'Foxes';

function rgbToAlpha(rgbColor) {
    var rgbaColor;
    rgbaColor = rgbColor.replace(')', ', 0.8)');
    rgbaColor = rgbaColor.replace('rgb', 'rgba');
    return rgbaColor;
}

//changing background artist image
background.style = 'background: url(\' ' + backgroundImageUrl + ' \'); ';

//changing artwork
artwork.src = artworkUrl;

//changing title and artist
title.innerText = musicTitle;
artist.innerText = musicArtist;

//seeking to 
function seek(e) {
    this.seekbar.value = e.offsetX/e.target.clientWidth * 100; 
    // console.log(e);
}


//updating vibrant colors
function updateColors(extractedColors) {
    //copying Vibrant color values array
    var rgbValues = extractedColors.Vibrant;
    //rgb values to usable rgb color string
    var rgbColor = 'rgb(' + rgbValues.rgb[0] + ', ' + rgbValues.rgb[1] + ', ' + rgbValues.rgb[2] + ')'
   
    //changing gradient color
    overlay.style = "background: linear-gradient(rgba(0,0,0,0.5) , rgba(30,30,30,0.66)," + rgbToAlpha(rgbColor) + ")";
    //adding 3d effct/multiple shadows to music controls
    controls.style = 'filter: drop-shadow(1px 1px 0px ' + rgbColor + ') drop-shadow(2px 2px 0px ' + rgbColor + ');' //drop-shadow(3px 3px 0px ' + testing[index].color + ');';
    //changing seebar bg color
    seekbar.style.background = rgbColor;
    //adding displaced colored background to artowkr using box-shadow
    artwork.style = 'box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.16), 14px 14px 0px ' + rgbColor + ';';
}

//extracting vibrant color from image ob load
this.artwork.addEventListener('load', function() {
    var artwork = document.getElementById('artwork');
    var vibrant = new Vibrant(artwork);
    var swatches = vibrant.swatches();
    updateColors(swatches);
    for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
            console.log(swatch, swatches[swatch].getHex())
    // console.log(swatches);        
});

//preview-testing function
var testing = [
    {
        bg: '../resources/images/backdrop_1.jpg',
        art: '../resources/images/art_1.jpg',
        color: 'rgb(203, 40, 131)',
        title: 'Glorious',
        artist: 'Arty'
    },
    {
        bg: '../resources/images/backdrop_4.jpg',
        art: '../resources/images/art_4.jpg',
        color: 'rgb(251, 243, 4)',
        title: 'Rude',
        artist: 'MAGIC!'
    },
    {
        bg: '../resources/images/backdrop_3.jpg',
        art: '../resources/images/art_3.jpg',
        color: 'rgb(13, 177, 225)',
        title: 'Shape of You',
        artist: 'Ed Sheeran'
    },
    {
        bg: '../resources/images/backdrop_5.jpg',
        art: '../resources/images/art_5.jpg',
        color: 'rgb(215, 43, 105)',
        title: 'Cruel',
        artist: 'Foxes'
    },
    {
        bg: '../resources/images/backdrop_7.jpg',
        art: '../resources/images/art_7.jpg',
        color: 'rgb(240, 104, 69)',
        title: 'Honey',
        artist: 'Kehlani'
    }
]
var index = 4;
document.getElementById('testing-btn').addEventListener('click', function() {
    if(index >= 5) {
        index = 0;
    }
    
    //changing background artist image
    background.style = 'background: url(\' ' + testing[index].bg + ' \'); ';

    //changing artwork
    artwork.src = testing[index].art;
    
    //changing title and artist
    title.innerText = testing[index].title;
    artist.innerText = testing[index].artist;
    
    index++;
});