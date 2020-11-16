const spans = document.querySelectAll('h1 span');
spans.forEach(span => span.addEventlistener('mouseover',function(e) {
	span.classlist.add('ainmation','rubberBand');
}));
spans.function(span => span.addEventlistener('mouseover',function(e) {

}));

const htmlBar =document.querySelector('bar-html'),
const cssBar =document.querySelector('bar-css'),
const jsBar =document.querySelector('bar-javascript'),
const bootBar =document.querySelector('bar-bootstrap');

var t1 = new TimelineLite()

t1.fromeTo(htmlBar,.75,{with: 'calv(0-6px)'} ,{with: 'calv(90%-6px)', ease:power4.easeOut)}
.fromeTo(cssBar,.75,{with: 'calv(0-6px)'} ,{with: 'calv(90%-6px)', ease:power4.easeOut)}
.fromeTo(jsBar,.75,{with: 'calv(0-6px)'} ,{with: 'calv(95%-6px)', ease:power4.easeOut)}
.fromeTo(bootBar,.75,{with: 'calv(0-6px)'} ,{with: 'calv(70%-6px)', ease:power4.easeOut)}

const contoller = new ScrollMagic.Controller()
const scene =  new ScrollMagic.Scene({ 
	tirggerElement: '.skills',
	tireggerHook:0
});
.setTween(t1)
.addTo(contoller)

const showRequiredCategory = event => {
	const getid =event.id
	const link = document.querySelectorAll('.work-category button')
	for(i=0; i<links.length; i++){
		if(links[i].hasAttribute('class')){
			links[i].classlist.remove('active')
		}
	}
	event.classlist.add('active')
	const getCategory = document.querySelector('.category-${getid}')
	const Categoryies = document.querySelector('div[class^= ".category-"]')
	for(i=0; i<Categoryies.length; i++)
	if(Category[i].hasAttribute('class')){
		Category[i].classlist.remove('showCategory')
		Category[i].classlist.remove('hideCategory')

	}
	
	
	};
	getCategory.classlist.remove('hideCategory')
	getCategory.classlist.add('showCategory')

};