$(document).ready(function() {

  $.getJSON('data.json',function(data){
        console.log(data);
        card="";
        list="";
        for(i in data){

                for (k in data){
                  list+="<li>"+data[i].spec[k]+"</li>"
                }
                card += "<div class='col-lg-3 col-md-4 mb-3 pokemon-column'>"
                          +"<div class='card pokemon-card'>"
                            +"<img class='card-img-top' style='width:96px;height:96px;margin: 0 auto;' src="+data[i].gambar+">"
                            +"<div class='card-body'>"
                              +"<h4 class='card-title text-center text-danger pokemon-name'>"+data[i].nama+"</h4>"
                              +"<p class='card-text text-center'>Some example text some example text</p>"
                              +"<ol>"
                              +list
                              +"</ol>"
                            +"</div>"
                          +"</div>"
                        +"</div>" 
                list="";
            }
            document.getElementById("main-card").innerHTML += card;
            
    });

});
