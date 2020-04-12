let title = {
    material: 'Mettal',
    type: 'out',
    size_x: '11 mm',
    size_y: '4 mm',
    outdoor: true,
    color: 'red',
    cover: 'square',
    images: ['pic1', 'pic2'],
    imperialSize: function () {
       let x = parseInt(this.size_x, 10);
       let y = parseInt(this.size_y, 10);
       x = x / 25.4;
       y = y / 25.4;
       return [x.toFixed(2), y.toFixed(2)]
    },
    isSquare: function () {
        if (this.cover === "square") {
            return true
        } else {
            return false
        }
    },
    __proto__ : goods ,
}
console.log(parseInt(title.size_y, 10))

title.price = 2.5;
// console.log(title.price)