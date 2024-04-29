// СЛАЙДЕР ПРОДУКТОВ
function sortSliderRun(id){
	var scrollerMiddle = document.getElementById('scroller-middle_' + id);
	var wrapper = document.getElementById('wrapper_' + id);
	scrollerMiddle.addEventListener('mousedown',function(){
		active = "middle";
		scrollerMiddle.classList.add('scrolling');
	});
	document.body.addEventListener('mouseup',function(){
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});
	document.body.addEventListener('mouseleave',function(){
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});		
	document.body.addEventListener('mousemove',function(e){
		if (!active) return;
		var x = e.pageX;
		x -= wrapper.getBoundingClientRect().left;
		scrollIt(x,id);
	});
	active = "middle";
	scrollIt(460,id);
	active = false;
	scrollerMiddle.addEventListener('touchstart',function(){
		active = "middle";
		scrollerMiddle.classList.add('scrolling');
	});
	document.body.addEventListener('touchend',function(){
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});
	document.body.addEventListener('touchcancel',function(){
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});

	wrapper.addEventListener('touchmove',function(e){
		if (!active) return;
		e.preventDefault();
		var x = e.touches[0].pageX;
		x -= wrapper.getBoundingClientRect().left;
		scrollIt(x,id);
	});
}

function scrollIt(x, id){
  var transform = Math.max(0,(Math.min(x,document.getElementById('wrapper_' + id).offsetWidth)));
  var scrollerMiddle = document.getElementById('scroller-middle_' + id);
  if (active==="middle"){
    document.getElementById('middle_' + id).style.width = transform+"px";
    scrollerMiddle.style.left = transform-25+"px";    
  }
}


function changeSliderIMG(sourceImg){
    var type = sourceImg.id.split('_')[0];
    var position = sourceImg.id.split('_')[1];
    var RoP = sourceImg.id.split('_')[3];
    var bottom = wrapper_1.children[0].children[0];
    var middle = document.getElementById('middle_1').children[0];
    if(type == 'Source' && RoP== "P"){
        switch(position){
            case'3':
                bottom.style.backgroundImage = sourceImg.style.backgroundImage;
                break;
            case'2':
                middle.style.backgroundImage = sourceImg.style.backgroundImage;
                break;
        }
    }
    console.log(type,position)
}

function setProtocolIMG(ProtocolPage){
	var bottom = wrapper_1.children[0].children[0];
    var middle = document.getElementById('middle_1').children[0];
	var botIMG = document.getElementById('Source_3_'+ProtocolPage+'_P');
	var midIMG = document.getElementById('Source_2_'+ProtocolPage+'_P');
	bottom.style.backgroundImage = botIMG.style.backgroundImage;
	middle.style.backgroundImage = midIMG.style.backgroundImage;
	
}