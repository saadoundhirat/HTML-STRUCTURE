function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("https://www.verywellfit.com/thmb/a4580FjTjbub9q4kI5m9X-Po-p0=/2002x1334/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-5c6a36a346e0fb0001f0e4a3.jpg")) {
        Image_Id.src = "https://californiaavocado.com/wp-content/uploads/2020/07/avocado-fruit-berry.jpg";
    }
    else {
        Image_Id.src = "https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg";
    }
} 