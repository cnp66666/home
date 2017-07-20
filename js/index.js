(function(win,doc){
		win.onresize=function(){
			change();	
		};
		change();
		function change(){
			var oFs=doc.documentElement.clientWidth/(414/20);
			doc.documentElement.style.fontSize=oFs+'px';	
		}	
	})(window,document);
	document.addEventListener('touchstart',function(ev){
			ev.preventDefault();
		},{passive:false})
		
		var index=0;
		
		var sw=screen.width;
		
		var leng=$('.pic li img').length;
		
		
		
		$('.pic').swipeLeft(function(){
			index++;
			if(index>=leng){
				index=0;
			}
			hua(index);
		})
		
		$('.pic').swipeRight(function(){
			index--;
			if(index<=0){
				index=2;
			}
			hua(index)
		})
		function hua(index){
			$('.pic').css('transform','translateX(-'+sw*index+'px)')
			$('ol li').css('backgroundColor','lightgray');
			$('ol li').eq(index).css('backgroundColor','deepskyblue')
		}
		 $.ajax({
		        type: "get",
		        async: true,
		        dataType: "json",
		        url: "data/index.json",
		        success: function (data) {
		        	for(var i=0;i<data.length;i++){
			        	$(".lbul1").append("<li><img src='"+data[i].img+"'/><div class='ul1liright'><p class='ul1li1p'>"+data[i].ul1liright+"</p><span>"+data[i].span1+"</span><p class='ul1li1p2'><span class='ul1li1p2s1'>"+data[i].ul1li1p2s1+"</span><span>"+data[i].ul1li1p2s2+"</span></p></div></li>")
		        		
		        	}
		        }
		})