//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
   ];
   //// 注意: 以上は編集しないこと!
   
   // 1. h2#ex42 の直後に p 要素を追加
const h2Element = document.querySelector("h2#ex42");
if (h2Element) { // h2Element が存在するかをチェック
  const newPElement = document.createElement("p");
  newPElement.style.textEmphasis = "sesame green";
  newPElement.textContent = "写真表と都市の緯度経度のページです";
  h2Element.after(newPElement);
}

// 2. div#phototable に img 要素を追加
const photoTable = document.querySelector("div#phototable");
const imageFiles = ["taro.png", "jiro.png", "hanako.png"];
if (photoTable) { // photoTable が存在するかをチェック
  imageFiles.forEach(src => {
    const pElement = document.createElement("p");
    const imgElement = document.createElement("img");
    imgElement.src = src;
    pElement.appendChild(imgElement);
    photoTable.appendChild(pElement);
  });
}

// 3. ul#location の li 要素を全て削除
const locationList = document.querySelector("ul#location");
if (locationList) { // locationList が存在するかをチェック
  while (locationList.firstChild) {
    locationList.removeChild(locationList.firstChild);
  }
}

// 4. 配列 data の都市情報を ul#location に追加
const dat= [
  { name: "札幌", lat: 43.06417, lng: 141.34694 },
  { name: "仙台", lat: 38.26889, lng: 140.87194 },
  { name: "新宿", lat: 35.68944, lng: 139.69167 },
  // ここに他の都市を追加
];
if (locationList) { // locationList が存在するかをチェック
  data.forEach(city => {
    const liElement = document.createElement("li");
    liElement.textContent = `${city.name} 緯度: ${city.lat}, 経度: ${city.lng}`;
    locationList.appendChild(liElement);
  });
}
