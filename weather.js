temperature = null;

class WeatherDraggable extends Draggable {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.content = createDiv('');
        this.content.size(w, h);

        loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Lubbock&APPID=d365b3893e2efbfac1e11e6808b6e5c6&units=imperial\n', this.onJsonReceived);
    }

    onJsonReceived(data) {
        console.log(data);
        temperature = data['main']['temp'];
        
    }

    show() {
        if (temperature != null) {
            // Draw the temperature onto the screen
<<<<<<< HEAD
            this.content.html(`<h1 class="display-3" style="color: white;">Temperature: ${temperature}</h1>`);
=======
            this.content.html(`
                    
                    <h1 class="display-3" style="color: white;"><i class='fas fa-cloud-showers-heavy' style='font-size:48px;color:white'></i>
${temperature}</h1>
            `);
>>>>>>> 2a5d4447a12ade6c5a5caba751a2ee90d98d2ec9
            this.content.position(this.x, this.y);
        }
    }
}