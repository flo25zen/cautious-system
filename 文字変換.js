var dakuon = ['が','ぎ','ぐ','げ','ご','だ','ぢ','づ','で','ど','ざ','じ','ず','ぜ','ぞ','ば','び','ぶ','べ','ぼ','ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ','ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ','ゃ','ゅ','ょ','っ','ぃ','ぅ'];
console.log(dakuon.includes("じ"));
var mark = ['ー','！','？','（','）','・','。','、','　'];
var rinku
var toburi
var kuuhaku
let test

function changestr(){
let aida = document.getElementById('moto').value;
let aftst = '';
str = document.getElementById('befor').value
console.log(str);
let nagasa = str.length;
let nagasa2 = aida.length;
kuuhaku = "";
for(i = 0; i < nagasa2; i++){
  kuuhaku = " " + kuuhaku;
};

for(i = 0; i < nagasa; i++){

if (i === nagasa - 1 && star === "on") {
    aftst = aftst + str.charAt(i) ;
}else{

if(kigou === "on" && daku === "on"){
    aftst = aftst + str.charAt(i) + aida;

}else if (kigou === "on" && daku === "off") {

  if(dakuon.includes(str.charAt(i))) {
            aftst = aftst + str.charAt(i) + kuuhaku;
      }else if (!dakuon.includes(str.charAt(i))) {
        aftst = aftst + str.charAt(i) + aida;
      };
}else if (kigou === "off" && daku === "on") {

    if (mark.includes(str.charAt(i))) {
            aftst = aftst + str.charAt(i) ;
    }else if (!mark.includes(str.charAt(i))) {
      aftst = aftst + str.charAt(i) + aida;
    };
}else if (kigou === "off" && daku === "off") {
  if (mark.includes(str.charAt(i)) || dakuon.includes(str.charAt(i))) {
      aftst = aftst + str.charAt(i) + kuuhaku;
  }else if (!mark.includes(str.charAt(i)) || !dakuon.includes(str.charAt(i))) {
      aftst = aftst + str.charAt(i) + aida;
  };
};
};
};

console.log(aftst);

rinku = encodeURI(aftst);
document.getElementById('after').innerHTML = aftst;
toburi = "https://twitter.com/intent/tweet?text=" + rinku;
test = function(){
  window.open(toburi,"");
}; 
};



function changemode(){
  if (kigou === "on") {
      kigou = "off";
      document.getElementById('on').innerHTML = "オフ";
      document.getElementById('on').id = "off";
      document.getElementById('on2').id = "off2";
  }else if (kigou === "off") {
    kigou = "on";
    document.getElementById('off').innerHTML = "オン";
    document.getElementById('off').id = "on";
    document.getElementById('off2').id = "on2";
  }

};

function changedaku(){
  if (daku === "on") {
      daku = "off";
      document.getElementById('dakuon').innerHTML = "オフ";
      document.getElementById('dakuon').id = "dakuoff";
      document.getElementById('dakuon2').id = "dakuoff2";
  }else if (daku === "off") {
    daku = "on";
    document.getElementById('dakuoff').innerHTML = "オン";
    document.getElementById('dakuoff').id = "dakuon";
    document.getElementById('dakuoff2').id = "dakuon2";
  }

};

function changehosi(){
  if (star === "on") {
      star = "off";
      document.getElementById('hosion').innerHTML = "オフ";
      document.getElementById('hosion').id = "hosioff";
      document.getElementById('hosion2').id = "hosioff2";
  }else if (star === "off") {
    star = "on";
    document.getElementById('hosioff').innerHTML = "オン";
    document.getElementById('hosioff').id = "hosion";
    document.getElementById('hosioff2').id = "hosion2";
  }

};