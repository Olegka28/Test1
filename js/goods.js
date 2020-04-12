
let goods = {
    'price' : 13.4,
    'title': 'Geron',
    'images': 'images.png',
    'producer': 'Prode=ucer',
    'country': 0,
    'description': 'Плитка какая-то',
    'weight': `20 кг`,
    'height': '12 мм',
    'width': '10 мм',
    'depth': '1 мм',
    'unit': 1,
    'getCost': function () {
        return this.price * 5
    },
}

// console.log(goods);