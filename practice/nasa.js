function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let rando = getRandomInt(1, 585)

$.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaKey}`).done(function (data) {
    console.log(data.photos[3])

    let roverPic = `<img src=${data.photos[rando].img_src}>`

    console.log(rando)

    $('.rover').append(roverPic);
})