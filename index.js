import axios from 'axios';
import Cheerio from 'cheerio';


// axios = require('axios'); 

axios.get('https://scrapeme.live/shop/')
    .then(({ data }) => {
        const $ = Cheerio.load(data);

        const pokemonNames = $('.woocommerce-loop-product__title')
            .map((_, product) => {
                const $product = $(product);
                return $product.text()
            })
            .toArray();
        console.log(pokemonNames)

        const pokemons = $('li.product')
            .map((_, pokemon) => {
                const $pokemon = $(pokemon);
                const name = $pokemon.find('.woocommerce-loop-product__title').text()
                const price = $pokemon.find('.woocommerce-Price-amount').text()
                return { 'name': name, 'price': price }
            })
            .toArray();
        console.log(pokemons)

    });