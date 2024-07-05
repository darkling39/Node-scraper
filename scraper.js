const express = require('express');
const cheerio = require('cheerio');

const router = express.Router()


async function getData() {
    const url = 'https://rozetka.com.ua/ua/asus-90nr0jf7-m004n0/p418978512/'
    const res = await fetch(url)

    const html = await res.text()
    const $ = cheerio.load(html)

    const title = $('h1').text().toString().slice(0,256)
    const subtitle = $('p.mt-4.ng-star-inserted').text().toString().slice(0,256)
    const description = $('rz-text-content > div > div > div').text().toString().slice(0,2048)
    const price = $('div.product-price__wrap.ng-star-inserted > p.product-price__big.product-price__big-color-red').text().toString()
    let numPrice = Number(price.slice(0, price.length -1).replace(/\s/g, ''))
    const specifications = {
        garantee: $('rz-collapse-text > div > p').text()
    }
    const type = $('ul > li.breadcrumbs__item.breadcrumbs__item--last.ng-star-inserted > a > span').text()
    const image = $('div > rz-gallery-main-content-image > img').toString()
    let imgSrc = image.slice(image.lastIndexOf("src=\"") + 5, image.length).replace("\"", "")
    const source = url.includes("rozetka") ? 'Rozetka' : 'Telemart'
    const productsData = {
        title: title,
        subtitle: subtitle,
        description: description,
        price: numPrice,
        specifications: specifications,
        type: type,
        image: imgSrc,
        source: source
    }
    return productsData
}

router.get('/', (req, res, next) => {
    res.status(200).json()
})

router.post('/', async (req, res, next) => {
    try{
        const prod = await getData()

        res.status(200).json(prod)
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "An error ocured",
            error: error
        })
    }
})
module.exports = router