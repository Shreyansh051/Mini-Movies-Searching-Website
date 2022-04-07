let movie_arr = JSON.parse(localStorage.getItem("movies"));
    display(movie_arr);

    function display(movie_arr) {
        document.querySelector("#movies").innerHTML = "";
        for (let i = 0; i < movie_arr.length; i++) {
            let div1 = document.createElement("div");
            div1.setAttribute("class", "box");
            let img = document.createElement("img");
            img.setAttribute("class", "image")
            let name = document.createElement("h2");
            let date = document.createElement("p");
            let rating = document.createElement("h4");

            name.innerHTML = movie_arr[i].name;
            date.innerHTML = movie_arr[i].date;
            rating.innerHTML = movie_arr[i].rating
            img.src = movie_arr[i].url;

            div1.append(img, name, date, rating)
            document.querySelector("#movies").append(div1);
        };
    }

    function lowFun() {
        movie_arr.sort(function (a, b) {
            return a.rating - b.rating
        });
        display(movie_arr);
    }

    function highFun() {
        movie_arr.sort(function (a, b) {
            return b.rating - a.rating
        });
        display(movie_arr);
    }








// this is a grid picture part

  //   var obj1=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj2=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj3=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj4=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj5=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj6=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj7=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj8=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
  //   var obj9=new main("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795","shreyansh",2001,8.5);
   


  // function main(image,name,release,rating){
  //   this.image=image;
  //   this.name=name;
  //   this.release=release;
  //   this.rating=rating;
  // }

  





 

//     var moviesobj=[
      
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795",
//         name:"",
//         release:"",
//         rating:"",
//        },
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
//         name:"",
//         release:"",
//         rating:"",},
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
//         name:"",
//         release:"",
//         rating:"",},
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2229/1000152229/1000152229-v",
//         name:"",
//         release:"",
//         rating:"",},
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
//         name:"",
//         release:"",
//         rating:"",},
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8076/1118076-v-b420e03e7c46",
//         name:"",
//         release:"",
//         rating:"",},
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6369/1116369-v-4b55e460910c",
//         name:"",
//         release:"",
//         rating:"",
//       },
//        { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2979/1112979-v-ce5258e97d5f",
//        name:"",
//        release:"",
//        rating:"",},
//         {images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5712/1095712-v-d31d20b06c7c",
//         name:"",
//         release:"",
//         rating:"",},
        
//     ];
  
 
// moviesobj.map(function(elem,index){
    
//         var bigboss=document.
//         createElement('div');
        
//         var div1=document.createElement('img');
//         div1.setAttribute("src",elem.images);
       

//         var div2=document.createElement('h1');
//         div2.innerText=elem.name;
        
//         var div3=document.createElement('h1');
//         div3.innerText=elem.release;
        
//         var div4=document.createElement('h1');
//         div4.innerText=elem.rating;
        
//         bigboss.append(div1,div2,div3,div4);
        
        
//         document.querySelector("#movies").append(bigboss);
        
//         });
  


      // sticky navbar
      window.onscroll = function () { myFunction() };

      var navbar = document.getElementById("container");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
          if (window.pageYOffset >= sticky) {
              navbar.classList.add("sticky")
          } else {
              navbar.classList.remove("sticky");
          }
      }