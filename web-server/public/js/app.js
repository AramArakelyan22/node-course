console.log('App');


const getWeather = (place) => {
    fetch('http://localhost:8080/weather?address=' + place)
        .then((response) => {
            response.json()
                .then(data => {
                    if (data.err) {
                        document.getElementById('weather').textContent = data.err
                        return
                    }
                    document.getElementById('weather').textContent = data.data
                    document.getElementById('place').textContent = data.address
                })
        });
}

const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('location').value;
    getWeather(val)
    document.getElementById('location').value = ''
})