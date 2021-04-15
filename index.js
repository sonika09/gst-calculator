priceEle = document.getElementById("price");
gstEle = document.getElementById("gst");
priceGstEle = document.getElementById("priceGst");
function calculateGst(price, tax) {
return (price * tax/100) + price;
} 




function inpChange() {
if(!isNaN(priceEle.value) && !isNaN(gstEle.value)) {
price = Number(priceEle.value);
gst = Number(gstEle.value);
priceGstEle.value = calculateGst(price, gst).toFixed(3);
}
}

inpChange();

var slider = document.getElementById("price");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


var slider1 = document.getElementById("gst");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}