var searchTerm= $("#video").val();


var Ysearch = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchTerm+"&type=video&key=AIzaSyBvA3LHpYGKGWJqcgPRS3MUW-t56u2djG8";

$.getJSON(Ysearch, function( data ) {
    console.log(data);
   
    $("#search").click(function(){
     var html = "<table border=2 cellspacing=0 cellpadding=5><tr><th>Thumbnail</th><th>Title</th><th>Link</th></tr>";
        
		for(var j=0;j<data.items.length;j++){
			html += "<tr><td><img src='"+data.items[j].snippet.thumbnails.default.url+"'></td><td>"+data.items[j].snippet.title+"</td>";
            html+='<td><div class="col-sm-3 clearfix btn_wrap text-center"><a href="https://www.youtube.com/watch?v='+ data.items[j].id.videoId +'" target=_new class="btn btn-primary">Play</a></div></td>';
			html+="</tr>";
		}
        

		html += "</table>";
		document.getElementById("display").innerHTML = html;
        
});
});