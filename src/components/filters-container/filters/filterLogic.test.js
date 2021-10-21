import { filterData } from "./filterLogic";

const testData = [
    {
        "id": "76w0hz7015kkr9kjkav",
        "images": [
          "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
        ],
        "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
        "rating": 2.89,
        "price": 15999,
        "category": "laptops",
        "brand": "acer"
      },
      {
        "id": "qeagrlm9lrkr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
          "https://content2.rozetka.com.ua/goods/images/big_tile/178060625.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black",
        "rating": 1.96,
        "price": 21500,
        "category": "laptops",
        "brand": "acer"
      },
      {
        "id": "0y9ksratv6akr9kjkav",
        "images": [
          "https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg",
          "https://content1.rozetka.com.ua/goods/images/big_tile/178060662.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
        "rating": 2.42,
        "price": 22999,
        "category": "laptops",
        "brand": "acer"
      },
      {
        "id": "cvr29caokhhkr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/25101152.jpg",
          "https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg"
        ],
        "title": "Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!",
        "rating": 0.53,
        "price": 28999,
        "category": "laptops",
        "brand": "acer"
      },
      {
        "id": "k9hb29sfeekr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg"
        ],
        "title": "Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black",
        "rating": 3.2,
        "price": 22500,
        "category": "laptops",
        "brand": "acer"
      },
      {
        "id": "4g0lv7ii7ytkr9kjkav",
        "images": [
          "https://content.rozetka.com.ua/goods/images/big_tile/30872664.jpg",
          "https://content1.rozetka.com.ua/goods/images/big_tile/30872671.jpg",
          "https://content1.rozetka.com.ua/goods_tags/images/original/187290948.png"
        ],
        "title": "Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGND3) Gold",
        "rating": 1.57,
        "price": 33999,
        "category": "laptops",
        "brand": "apple"
      },
      {
        "id": "f4zo7g5nb4okr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/119503415.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/119503486.jpg",
          "https://content1.rozetka.com.ua/goods_tags/images/original/187290948.png"
        ],
        "title": "Ноутбук Apple MacBook Pro 16\" 512GB 2019 (MVVL2) Silver",
        "rating": 1.57,
        "price": 81000,
        "category": "laptops",
        "brand": "apple"
      },
      {
        "id": "g9amcjezcmkr9kjkav",
        "images": [
          "https://content.rozetka.com.ua/goods/images/big_tile/24373314.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/24373327.jpg",
          "https://content1.rozetka.com.ua/goods_tags/images/original/187290948.png"
        ],
        "title": "Ноутбук Apple MacBook Pro 13\" A2251 Retina 1TB 2020 (MWP82) Silver",
        "rating": 1.89,
        "price": 70999,
        "category": "laptops",
        "brand": "apple"
      },
      {
        "id": "b6rae36v8vvkr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/169147176.jpg"
        ],
        "title": "Ноутбук Apple MacBook Pro 13\" M1 512GB 2020 (Z11C000Z3) Custom Space Gray",
        "rating": 0.92,
        "price": 51999,
        "category": "laptops",
        "brand": "apple"
      },
      {
        "id": "nyvu7xbonwfkr9kjkav",
        "images": [
          "https://content2.rozetka.com.ua/goods/images/big_tile/175329117.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/175329129.jpg"
        ],
        "title": "Ноутбук Apple MacBook Air 13\" M1 512GB 2020 (Z124001DD) Custom Space Gray",
        "rating": 4.67,
        "price": 48500,
        "category": "laptops",
        "brand": "apple"
      },
      {
        "id": "st0auucse2ikr9kjkav",
        "images": [
          "https://content.rozetka.com.ua/goods/images/big_tile/27122440.jpg"
        ],
        "title": "Ноутбук Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black",
        "rating": 2.2,
        "price": 25500,
        "category": "laptops",
        "brand": "asus"
      },
      {
        "id": "n03aecr0qrokr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/191836868.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/191836880.jpg"
        ],
        "title": "Ноутбук Asus VivoBook 15 X513EA-BQ409 (90NB0SG4-M05090) Black",
        "rating": 3.83,
        "price": 22000,
        "category": "laptops",
        "brand": "asus"
      },
      {
        "id": "ur7ngd675jckr9kjkav",
        "images": [
          "https://content2.rozetka.com.ua/goods/images/big_tile/163134380.jpg",
          "https://content.rozetka.com.ua/goods/images/big_tile/163134233.jpg"
        ],
        "title": "Ноутбук Dell Vostro 14 3400 (N4011VN3400EMEA01_i5XeW) Accent Black",
        "rating": 4.93,
        "price": 25999,
        "category": "laptops",
        "brand": "dell"
      },
      {
        "id": "0p2cm6tmha3kr9kjkav",
        "images": [
          "https://content.rozetka.com.ua/goods/images/big_tile/167648554.jpg",
          "https://content2.rozetka.com.ua/goods/images/big_tile/167648555.jpg"
        ],
        "title": "Ноутбук Dell Vostro 15 3501 (N6503VN3501EMEA01_2105_UBU) Black",
        "rating": 4.79,
        "price": 16500,
        "category": "laptops",
        "brand": "dell"
      },
      {
        "id": "cjcqnurj2tkkr9kjkav",
        "images": [
          "https://content1.rozetka.com.ua/goods/images/big_tile/173835446.jpg"
        ],
        "title": "Ноутбук Dell Latitude 7300 (N034L730013EMEA_U) Black",
        "rating": 4.45,
        "price": 18500,
        "category": "laptops",
        "brand": "dell"
      },
]

test('First element', () => {
    expect((filterData(testData, ['laptops'], ['acer'], testData)[0].title).toLowerCase()).toContain('acer');
});

test('Last element', () => {
    const item = filterData(testData, ['laptops'], [], testData);
    expect(item[6].title.toLowerCase()).toContain('apple');
    expect(item[item.length - 1].title.toLowerCase()).toContain('dell');
});

test('No filters', () => {
    const item = filterData(testData, [], [], testData)
    expect(item[item.length - 1].title.toLowerCase()).toContain('dell');
    expect(item[6].title.toLowerCase()).toContain('apple');
    expect(item.length).toEqual(15);
});

test('No input', () => {
    const item = filterData([], [], [], []);
    expect(item.length).toEqual(0);
    expect(typeof item).toEqual('object');
})

