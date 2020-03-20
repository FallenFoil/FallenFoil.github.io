(function($) {
    var	$window = $(window),
    $body = $('body');
    
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });
})(jQuery);

/*
$.get('https://api.github.com/users/FallenFoil/repos', function(data, status){
    var i=0;
    mydata = [{name:"NewF"}, {name:"NoteBook-Reader"}]

    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    rowDiv.setAttribute("style", "display:block");

    for(var repo in mydata){
        console.log(mydata[repo]['name'])
        if(i == 3){
            i=0;
            document.getElementById('projects-div').appendChild(rowDiv);

            rowDiv = document.createElement("div");
            rowDiv.setAttribute("class", "row");
            rowDiv.setAttribute("style", "display:block");
        }

        var colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-sm-6 col-md-4");

        var itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "project-item");

        var hoverDiv = document.createElement("div");
        hoverDiv.setAttribute("class", "hover-bg");

        var anchor = document.createElement("a");
        anchor.setAttribute("href", "");
        anchor.setAttribute("title", mydata[repo]['name']);

        var hoverTextDiv = document.createElement("div");
        hoverTextDiv.setAttribute("class", "hover-text");

        var img = document.createElement("img");
        img.setAttribute("src", "img/NewF.png");
        img.setAttribute("class", "img-responsive");
        img.setAttribute("alt", mydata[repo]['name']);

        var overlayDiv = document.createElement("div");
        overlayDiv.setAttribute("class", "overlay-caption");

        var overlayContentDiv = document.createElement("div");
        overlayContentDiv.setAttribute("class", "overlay-content");

        var h4 = document.createElement("h4");
        img.setAttribute("style", "color: black");
        h4.innerHTML = mydata[repo]['name'];

        
        overlayContentDiv.appendChild(h4);
        overlayDiv.appendChild(overlayContentDiv);
        hoverTextDiv.appendChild(overlayDiv);
        anchor.appendChild(img);
        anchor.appendChild(hoverTextDiv);
        hoverDiv.appendChild(anchor);
        itemDiv.appendChild(hoverDiv);
        colDiv.appendChild(itemDiv);
        rowDiv.appendChild(colDiv);

        i++;
    }

    document.getElementById('projects-div').appendChild(rowDiv);
})*/