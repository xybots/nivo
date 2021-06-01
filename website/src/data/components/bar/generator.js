import { generateCountriesData } from '@banzaicloud/nivo-generators'

const dishes = [
    'hot dog',
    'burger',
    'sandwich',
    'kebab',
    'fries',
    'donut',
    'junk',
    'sushi',
    'ramen',
    'curry',
    'udon',
    'bagel',
    'yakitori',
    'takoyaki',
    'tacos',
    'miso soup',
    'tortilla',
    'tapas',
    'chipirones',
    'gazpacho',
    'soba',
    'bavette',
    'steak',
    'pizza',
    'spaghetti',
    'ravioli',
    'salad',
    'pad thai',
    'bun',
    'waffle',
    'crepe',
    'churros',
    'paella',
    'empanadas',
    'bruschetta',
    'onion soup',
    'cassoulet',
    'bouillabaisse',
    'unagi',
    'tempura',
    'tonkatsu',
    'shabu-shabu',
    'twinkies',
    'jerky',
    'fajitas',
    'jambalaya',
    'meatloaf',
    `mac n' cheese`,
    'baked beans',
    'popcorn',
    'buffalo wings',
    'BBQ ribs',
    'apple pie',
    'nachos',
    'risotto',
    'tiramisu',
]

export const generateLightDataSet = () => ({
    data: generateCountriesData(dishes.slice(0, 6), { size: 7, max: 200 }),
    keys: dishes.slice(0, 6),
})

export const generateHeavyDataSet = () => ({
    data: generateCountriesData(dishes, { size: 21, max: 200 }),
    keys: dishes,
})
