export default function location() {

    const locationSelected = document.getElementById('location')
    locationSelected.classList.add('menu-item-selected') 

    const content = document.getElementById('content')

        const locationContainer = document.createElement('div')
        locationContainer.classList.add('inner-content')

            const h1 = document.createElement('h1')
            h1.textContent = 'Find us on the map!'
            locationContainer.appendChild(h1)

            const map = document.createElement('div')
            map.id = 'map'
            map.innerHTML = '<iframe src="https://www.google.com/maps/place/The+Monal/@30.2132229,71.4723586,15z/data=!4m2!3m1!1s0x0:0x7cecf226ad35b555?sa=X&ved=2ahUKEwi8v-Tapq_qAhWJHxQKHb6GCCcQ_BIwHHoECBMQCA" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
            locationContainer.appendChild(map)

            const h3 = document.createElement('h3')
            h3.textContent = 'Hours'
            locationContainer.appendChild(h3)

            const MTWR = document.createElement('p')
            MTWR.textContent = 'Monday - Thursday: 11:30am - 9pm'
            locationContainer.appendChild(MTWR)

            const FS = document.createElement('p')
            FS.textContent = 'Friday - Saturday: 11:30am - 10pm'
            locationContainer.appendChild(FS)

            const U = document.createElement('p')
            U.textContent = 'Sunday: 12pm - 9pm'
            locationContainer.appendChild(U)
        
        content.appendChild(locationContainer)
}