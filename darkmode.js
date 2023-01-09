let links = {
  setColor : function(color) {
  //let alist = document.querySelectorAll('a');
  //  let i = 0;
  //  while(i < alist.length){
  //    alist[i].style.color = color;
  //    i = i + 1 ; 
  //  }
  $('a').css('color', color); // 이 웹페이지의 모든 a태그를 jQuery로 제어한다는 뜻
  }
}
let body = {
  setColor : function(color) {
  //document.querySelector('body').style.color = color;
  $('body').css('color', color);
  },
  setBackgroundColor : function(color) {
  //document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self) {
  const target = document.querySelector('body');
  if (self.value === 'night'){
    body.setBackgroundColor('black')
    body.setColor('white');
    self.value = 'day';
    
    links.setColor('powderblue');
    } else {
      body.setBackgroundColor('white');
      body.setColor('black');
      self.value = 'night';

      links.setColor('black');
    }
}
