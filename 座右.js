var zayu_list1 =["楽","地獄への道","明日は明日","天上天下","情け","親しき仲","笑う門","継続","初心","好奇心","遅れてもやらない","ゴハン","真面目でいる","能ある鷹","花","弘法","七色","星","レンジ"]
var zayu_list2 =["に","は","の"," ","にも","よりは","には","も","で"]
var zayu_list3 =["生きる","善意で舗装されている","風が吹く","唯我独尊","人の為ならず","礼儀あり","福来る","力なり","忘れるべからず","猫をも殺す","マシ","食べてユメをみて","馬鹿でいる","爪隠す","団子","筆の誤り","虹","カービィ","1分"]
var min,max
function setword(){
 document.getElementById("zayu1").innerHTML = zayu_list1[getRandomInt(0,zayu_list1.length)];
 document.getElementById("zayu2").innerHTML = zayu_list2[getRandomInt(0,zayu_list2.length)];
 document.getElementById("zayu3").innerHTML = zayu_list3[getRandomInt(0,zayu_list3.length)];
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)};

var test = function(){
    var rinku = encodeURI((document.getElementById("zayu1").textContent)+( document.getElementById("zayu2").textContent)+( document.getElementById("zayu3").textContent));
     var toburi = "https://twitter.com/intent/tweet?text=" + rinku+"%0A"+encodeURI("https://flo25zen.github.io/dakuten/%E5%BA%A7%E5%8F%B3%E3%81%AE%E9%8A%98%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC.html");

window.open(toburi,"")};
