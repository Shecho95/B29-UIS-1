Vue.directive('change-style', (el, binding)=>{
    el.style.backgroundColor = binding.value.backgroundColor;
    el.style.color = binding.value.textColor;
});