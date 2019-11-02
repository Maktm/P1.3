class StepsDraggable extends Draggable {
    
    constructor(x, y, w, h) {

        super(x,y,w,h+50);

        this.embedded = createDiv('');
        this.embedded.size(w,h);
        this.embedded.attribute('id', 'chartContainer');

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Your Steps"
            },
            axisY:{
                includeZero: true
            },
            data: [{        
                type: "line",       
                dataPoints: [
                    { y: 3000 },
                    { y: 3150 },
                    { y: 6000 }, 
                    { y: 2000 },
                    { y: 1000 },
                    { y: 4000 },
                    { y: 5150 },
                ]
            }]
        });

        chart.render();

    
    }



    show() {
            this.embedded.position(this.x, this.y);
            }
    }
