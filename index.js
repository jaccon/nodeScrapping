const webScrapping = require('./scrapping.js')

let path = process.argv[2]
let scrapy = new webScrapping(path)
scrapy.start().catch(error => console.error(error))