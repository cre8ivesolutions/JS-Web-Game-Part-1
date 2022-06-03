function background(imageLocation, leftPosition, bottomPosition, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(imageLocation, leftPosition + w*100, bottomPosition+h*100)
        }
    }
}

function newImage(imageLocation, leftPosition, bottomPosition){
    let image = document.createElement('img')
        image.src = imageLocation
        image.style.position = 'fixed'
        image.style.left = leftPosition + 'px'
        image.style.bottom = bottomPosition + 'px'  
        document.body.append(image)
    return image
}

function newItem(imageLocation, leftPosition, bottomPosition ){
    let item = newImage(imageLocation, leftPosition, bottomPosition)
 
    item.addeventlistenter('dblclick', () => {
        item.remove()
    })
}
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

background('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300 )
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)/* I could not get this line and the next line of code to work to show the shield and staff*/
newItem('assets/staff.png', 600, 100)