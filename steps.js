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
                text: "Your Steps for the week"
            },
            axisY:{
                includeZero: true
            },
            data: [{        
                type: "line",       
                dataPoints: [
                    { y: 6434 },
                    { y: 9145 },
                    { y: 7233 }, 
                    { y: 6399 },
                    { y: 6535 },
                    { y: 7983 },
                    { y: 8086 },
                ]
            }]
        });

        chart.render();

    
    }



    show() {
            this.embedded.position(this.x, this.y);
            }
    }
