export default function about() {

    const aboutSelected = document.getElementById('about')
    aboutSelected.classList.add('menu-item-selected') 

    const content = document.getElementById('content')

        const aboutContainer = document.createElement('div')
        aboutContainer.classList.add('inner-content')

            const h1 = document.createElement('h1')
            h1.textContent = 'About us'
            aboutContainer.appendChild(h1)
            
            const aboutText = document.createElement("p")
            aboutText.textContent = `Sitting on top of the Potohar, nestled against the pristine Margallas, and looking over the plains of Peshawar and Lahore, the brick and mortar of Islamabad may be modern, but its culture and traditions are embedded in the centuries of our history that have unfolded between the ranges of Khyber and Bolan and the valley of Mehran.
            And in many ways, The Monal – named after a pheasant of rare and exquisite beauty dwelling a little further north – epitomes this amalgam of the modern and the ancient. The resort is a touch of modernity set in pastoral idyll. Situated at a height of about 1173 meters above sea level, it is equipped with the latest facilities, but offers an ambience cultivated by heritage.
            At The Monal we take pride in offering an authentic Pakistani cuisine that is as rich and diverse as our legacy. It has been produced by the fusion of indigenous flavors and aromas with culinary bequests from Arabia, Persia and Central Asia, as the many tribes, people and cultures blended over centuries across the valleys and plains of the Indus.
            The road to The Monal undulates along the thick verdure of the Margallas as if etched in emeralds. It opens up both to the local and tourist a panorama of Allah’s glory. The Faisal Mosque and the white rise of the Constitutional Avenue melt away picturesquely into the bucolic horizons of the Punjab and the Frontier.
            Merely driving up to The Monal is an experience that the heart cherishes long after. Whether you choose to begin your journey whilst the sun shines down on the hills, or whether you prefer the romance of a moonlit drive, your experience shall remain unforgettable.
            Sunset at The Monal offers some of nature’s most glorious moments. Crimson skies over the rapid shadows of a hilly dusk; the rustle of leaves in a gentle breeze; soft calls of birds as they climb to roost; and if the day has been warm, an occasional chirpings of crickets. Finally, twilight settles in the valleys against the backdrop of Islamabad’s golden radiance.
            With its “spirals and wood” the architectural splendour of The Monal blends unobtrusively into the natural beauty surrounding it. And yet the building is designed to offer luxurious dining in a sophisticated environment. Awaiting you are four spacious parking lots that can hold up to 250 cars, with reserved parking slots for persons with disability. Once you enter from any of the two entrance, one of which is ramp to facilitate prams and wheelchairs, our executive staff receives, guides and serve you with the courtesy and hospitality that is an-old tradition of the region.
            Our seven terraces – A, B, C, D, E, F, G, I, J – open onto the adjacent valley and its hamlet, providing a spectacular aerial view of Saidpur Village and the expanse Islamabad. The decor of each of these terrace is a unique theme, and together they provide an environment that can cater to every need and mood of a varied clientele. There is a general terrace; terrace for families; and a balcony for those in search of solitude and security. The dining hall has also been specially designed with a complete glass wall to provide a full view of The Monal’s splendid natural setting.
            In addition to its main kitchens, The Monal has five live kitchens. On display here are the culinary skills of our well trained chef’s not to mention our exemplary standard of hygiene. Watching our chefs preparing your meal could be an enticing – and mouth-watering – experience.
            Our state-of-the-art Conference Hall is designed to meet the requirements of all forms of corporate events. The hall is large enough to accommodate more than a hundred people at a time. With individual LCD monitors, microphone, strategic lighting and personalize setting for panel discussions, it is clearly one of its kind in the country.
            In addition to its culinary delights, The Monal offers food for the soul with live music ever evening. Special musical evenings are also arranged on festive occasions. Our “Ghazal Nights” couls be a memorable experience for the initiated.
            At The Monal you will also have an opportunity to shop for souvenirs and traditional jewelry and handicrafts. An array of traditional shopping carts lines the main entrance, offering trinkets and treasure straight out of Ali Baba’s magical cave.`
            aboutText.style.padding = '0 20%'
            aboutContainer.appendChild(aboutText)     
            
            const img = document.createElement('img')
            img.src = 'images/kitchen.jpeg'
            img.classList.add('about-img')
            aboutContainer.appendChild(img)
        
        content.appendChild(aboutContainer)
}