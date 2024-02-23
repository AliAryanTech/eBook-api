const axios = require('axios')
const { load } = require('cheerio')

module.exports = class eBookJs {
    /**
     * @type {Headers}
     */

    headers = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Android 13.0.0; Mobile; TECNO CK7n) AppleWebKit/120.0.6099.116 (KHTML, like Gecko) Chrome/120.0.6099.116 Mobile Safari/120.0.6099.116'
        }
    }

    /**
     * @param {string} url
     */

    superFetch = async (url) => load((await axios.get(url, this.headers)).data)

    /**
     * @param {string} url
     * @returns {boolean}
     */
    
    validate = (url) => /^https:\/\/www\.pdfdrive\.com\/[\w-]+\.html$/.test(url)

    /**
     * @param {string} query
     * @param {number} page
     * @returns {Array<{ title: string, image: string, url: string }>}
     */

    search = async (query, page = 1) => {
        try {
            const $ = await this.superFetch(`https://www.pdfdrive.com/search?q=${query}&page=${page}`)
            const books = $('.files-new ul li').map((_, element) => {
                const id = $(element).find('.file-left a').attr('data-id')
                const title = $(element).find('.file-right h2').text().trim()
                const year = $(element).find('.file-right .fi-year').text().trim()
                const size = $(element).find('.file-right .fi-size').text().trim()
                const pages = $(element).find('.file-right .fi-pagecount').text().trim()
                const image = $(element).find('.file-left img').attr('data-original').replace('-s', '')
                const url = `https://www.pdfdrive.com${$(element).find('.file-left a').attr('href')}`
                return { id, title, year, size, pages, image, url }
            }).get()
            return books
        } catch (error) {
            console.log(error.message)
            return []
        }
    }

    /**
     * @param {string} url
     * @returns {string}
     */

    getLink = async (url) => {
        try {
            const $ = await this.superFetch(url)
            const preview = $('.ebook-buttons #previewButtonMain').attr('data-preview')
            const download = preview?.replace(/\/ebook\/preview\?id=(\d+)&session=([a-zA-Z0-9]+)$/, 'https://www.pdfdrive.com/download.pdf?id=$1&h=$2&u=cache&ext=pdf')
            return download
        } catch (error) {
            console.log(error.message)
            return null
        }
    }
}
