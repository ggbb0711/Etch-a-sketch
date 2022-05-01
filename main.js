let grids=document.querySelector('.grids'),
    slider=document.querySelector('.slider'),
    input=document.querySelectorAll('.value'),
    Set_button=document.querySelector('.Set_grid'),
    color_picker=document.querySelector('.color_picker'),
    random=document.querySelector('.random'),
    cur_color,
    root=document.documentElement;
input[0].innerHTML=slider.value;
input[1].innerHTML=slider.value;
slider.oninput=function(){
    input[0].innerHTML=this.value;
    input[1].innerHTML=this.value;
}
Set_button.addEventListener('click',function(){
  set_grid(slider.value);
});
function reset_color(grid){
  grid.addEventListener('mouseover',function(){
    if(random.classList.contains('random_playing')){
      color_picker.value="#"+Math.floor(Math.random()*16777215).toString(16);
      grids.style.borderColor=color_picker.value;
      grid.style.backgroundColor=color_picker.value;
    }
    else  {
    grid.style.backgroundColor=color_picker.value;
    }
  });
}
random.addEventListener('click',function(){
  random.classList.toggle('random_playing');
})
color_picker.addEventListener('input',()=>grids.style.borderColor=color_picker.value)
function set_grid(size){
  grids.innerHTML='';
  root.style.setProperty('--grid_size',size);
  for ( i=0;i<(size*size);i++){
    let grid=document.createElement('div');
    reset_color(grid);
    grid.classList.add('grid');
    grids.appendChild(grid);
  }
  console.log('1');
}
set_grid(slider.value);

