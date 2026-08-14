import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const organs = [
  {key:"shell",number:"01",name:"Vỏ & bản lề",latin:"Valvae & ligamentum",color:"#d5b999",summary:"Hai mảnh bất đối xứng; mảnh trái/dưới bám cố định vào giá thể.",detail:"Vỏ dưới dày, sâu và định hình theo bề mặt bám. Vỏ trên nhỏ, phẳng và mỏng hơn. Dây chằng đàn hồi mở vỏ khi cơ khép thả lỏng.",func:"Bảo vệ, neo bám và tạo buồng áo."},
  {key:"mantle",number:"02",name:"Màng áo",latin:"Pallium",color:"#f2a7a0",summary:"Hai thùy mô mỏng lót sát mặt trong của vỏ.",detail:"Bờ màng áo cảm nhận kích thích, điều khiển dòng nước và tiết vật liệu tạo vỏ. Khoang giữa hai thùy là khoang áo.",func:"Tạo vỏ, hô hấp phụ và điều phối dòng nước."},
  {key:"gills",number:"03",name:"Mang",latin:"Ctenidia",color:"#8ec5d6",summary:"Bốn phiến mang dạng lá, phủ lông chuyển cực nhỏ.",detail:"Mang vừa trao đổi khí, vừa tạo dòng nước và giữ hạt thức ăn. Chất nhầy và lông chuyển vận chuyển hạt đến xúc biện.",func:"Hô hấp, lọc và vận chuyển thức ăn."},
  {key:"palps",number:"04",name:"Xúc biện môi",latin:"Palpi labiales",color:"#e6c37a",summary:"Các thùy nhỏ bao quanh miệng ở phía trước cơ thể.",detail:"Xúc biện phân loại hạt theo kích thước và chất lượng. Hạt phù hợp đi vào miệng; phần không phù hợp được thải dưới dạng phân giả.",func:"Chọn lọc và chuyển thức ăn vào miệng."},
  {key:"mouth",number:"05",name:"Miệng",latin:"Os",color:"#9b6c64",summary:"Cửa vào hệ tiêu hóa, nằm giữa các xúc biện.",detail:"Hàu không có đầu và không có hàm. Thức ăn đi từ miệng qua thực quản ngắn tới dạ dày.",func:"Tiếp nhận thức ăn đã được chọn."},
  {key:"digestive",number:"06",name:"Khối tạng & tuyến tiêu hóa",latin:"Massa visceralis",color:"#a6a05e",summary:"Khối mô trung tâm chứa dạ dày, tuyến tiêu hóa và ruột cuộn.",detail:"Dạ dày nhận thức ăn; trụ tinh thể hỗ trợ khuấy và giải phóng enzyme. Tuyến tiêu hóa bao quanh dạ dày, hấp thu và dự trữ dinh dưỡng.",func:"Tiêu hóa, hấp thu và dự trữ năng lượng."},
  {key:"gonad",number:"07",name:"Tuyến sinh dục",latin:"Gonad",color:"#f0d99a",summary:"Mô sinh dục lan trong khối tạng, rõ nhất vào mùa thành thục.",detail:"Giao tử được phóng ra nước; thụ tinh ngoài tạo ấu trùng bơi tự do trước khi bám và biến thái thành hàu giống.",func:"Sản xuất trứng hoặc tinh trùng."},
  {key:"adductor",number:"08",name:"Cơ khép vỏ",latin:"Musculus adductor",color:"#c98c7e",summary:"Một cơ lớn dạng thận hoặc trăng khuyết, nằm lệch giữa.",detail:"Phần cơ nhanh đóng vỏ; phần cơ giữ duy trì trạng thái khép với ít năng lượng. Vết bám cơ còn lại rõ trên mặt trong vỏ.",func:"Đóng và giữ hai mảnh vỏ."},
  {key:"heart",number:"09",name:"Tim & màng tim",latin:"Cor & pericardium",color:"#d65858",summary:"Tim nhỏ nằm gần mặt lưng, phía sau cơ khép.",detail:"Hai tâm nhĩ nhận huyết dịch giàu oxy từ mang; tâm thất bơm qua động mạch vào hệ tuần hoàn hở.",func:"Bơm huyết dịch tới các mô."},
  {key:"rectum",number:"10",name:"Ruột thẳng & hậu môn",latin:"Rectum & anus",color:"#765f55",summary:"Đoạn cuối ruột chạy gần cơ khép và mở vào buồng thoát.",detail:"Chất thải tiêu hóa được đưa ra hậu môn, theo dòng nước thoát rời khỏi khoang áo.",func:"Thải sản phẩm tiêu hóa."}
];

let selected = "gills";
const detail = document.querySelector("#organ-detail");
const organList = document.querySelector("#organ-list");
const setSelected = key => {
  selected = key;
  const organ = organs.find(o => o.key === key);
  detail.style.setProperty("--organ-color",organ.color);
  document.querySelector("#detail-index").textContent=organ.number;
  document.querySelector("#detail-latin").textContent=organ.latin;
  document.querySelector("#detail-name").textContent=organ.name;
  document.querySelector("#detail-summary").textContent=organ.summary;
  document.querySelector("#detail-text").textContent=organ.detail;
  document.querySelector("#detail-function").textContent=organ.func;
  document.querySelector("#detail-location").textContent=key==="shell"?"Ngoài cùng":key==="heart"?"Mặt lưng, gần cơ khép":"Trong khoang áo";
  document.querySelectorAll(".organ-row").forEach(el=>el.classList.toggle("active",el.dataset.key===key));
};
organs.forEach(organ=>{
  const button=document.createElement("button");
  button.type="button";button.className="organ-row";button.dataset.key=organ.key;
  button.innerHTML='<span class="number">'+organ.number+'</span><i style="background:'+organ.color+'"></i><span><b>'+organ.name+'</b><small>'+organ.latin+'</small></span><em>↗</em>';
  button.addEventListener("click",()=>setSelected(organ.key));organList.append(button);
});
setSelected(selected);
const water=document.querySelector(".flow-water");
for(let i=0;i<24;i++){const p=document.createElement("i");p.style.top=(8+i*3.7)+"%";p.style.setProperty("--duration",(6+i*.08)+"s");p.style.setProperty("--delay",(-i*.32)+"s");water.append(p)}

const mount=document.querySelector("#scene");
const scene=new THREE.Scene();
scene.fog=new THREE.FogExp2(0x071b21,.038);
const camera=new THREE.PerspectiveCamera(36,1,.1,100);
camera.position.set(9.2,8.2,12.5);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
mount.prepend(renderer.domElement);
const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;controls.dampingFactor=.055;controls.minDistance=8;controls.maxDistance=24;controls.target.set(0,.2,0);controls.autoRotate=true;controls.autoRotateSpeed=.45;
scene.add(new THREE.HemisphereLight(0xcceff1,0x10232a,2.4));
const keyLight=new THREE.DirectionalLight(0xffe6c8,5);keyLight.position.set(7,10,8);scene.add(keyLight);
const rimLight=new THREE.DirectionalLight(0x52d6d2,3);rimLight.position.set(-8,4,-8);scene.add(rimLight);
const root=new THREE.Group();root.rotation.y=-.18;scene.add(root);
const shellMaterial=new THREE.MeshStandardMaterial({color:0x5d5146,roughness:.84,metalness:.02});
const nacreMaterial=new THREE.MeshPhysicalMaterial({color:0xe8e1d5,roughness:.22,clearcoat:.7,clearcoatRoughness:.18,side:THREE.DoubleSide});
function roughShell(seed){
  const geometry=new THREE.SphereGeometry(1,72,40),position=geometry.attributes.position,v=new THREE.Vector3();
  for(let i=0;i<position.count;i++){v.fromBufferAttribute(position,i);const wave=1+.055*Math.sin(v.x*17+seed)*Math.cos(v.z*13)+.025*Math.sin(v.y*31+seed*2);v.multiplyScalar(wave);position.setXYZ(i,v.x,v.y,v.z)}
  geometry.computeVertexNormals();return geometry;
}
const lowerGroup=new THREE.Group();lowerGroup.position.y=-.45;root.add(lowerGroup);
const lowerShell=new THREE.Mesh(roughShell(1.7),shellMaterial);lowerShell.scale.set(3.75,.7,5.15);lowerShell.userData.organKey="shell";lowerGroup.add(lowerShell);
const lowerNacre=new THREE.Mesh(new THREE.CircleGeometry(1,96),nacreMaterial);lowerNacre.scale.set(3.35,4.55,1);lowerNacre.rotation.x=-Math.PI/2;lowerNacre.position.set(0,.71,.08);lowerNacre.userData.organKey="shell";lowerGroup.add(lowerNacre);
const topPivot=new THREE.Group();topPivot.position.set(0,-.1,-5.05);root.add(topPivot);
const topShell=new THREE.Mesh(roughShell(3.2),shellMaterial.clone());topShell.scale.set(3.55,.6,5);topShell.position.z=5.05;topShell.userData.organKey="shell";topPivot.add(topShell);
const topNacre=new THREE.Mesh(new THREE.CircleGeometry(1,96),nacreMaterial.clone());topNacre.scale.set(3.2,4.45,1);topNacre.rotation.x=-Math.PI/2;topNacre.position.set(0,-.61,5.05);topNacre.userData.organKey="shell";topPivot.add(topNacre);
const organRoot=new THREE.Group();organRoot.position.y=.37;root.add(organRoot);
const materials={};organs.forEach(o=>materials[o.key]=new THREE.MeshStandardMaterial({color:o.color,roughness:.58,transparent:o.key==="mantle"||o.key==="gills",opacity:o.key==="mantle"?.72:o.key==="gills"?.85:1,emissive:0x000000}));
const organObjects={};
function register(key,object,base){object.userData.organKey=key;object.userData.base=base.clone();object.position.copy(base);organRoot.add(object);organObjects[key]=object;object.traverse(child=>child.userData.organKey=key)}
const mantle=new THREE.Mesh(new THREE.TorusGeometry(2.72,.25,18,100),materials.mantle);mantle.scale.z=1.55;mantle.rotation.x=Math.PI/2;register("mantle",mantle,new THREE.Vector3(0,.22,.1));
const visceral=new THREE.Mesh(new THREE.SphereGeometry(1,48,28),materials.digestive);visceral.scale.set(1.75,.42,1.95);register("digestive",visceral,new THREE.Vector3(-.15,.43,-.2));
const gonad=new THREE.Mesh(new THREE.SphereGeometry(1,40,24),materials.gonad);gonad.scale.set(1.35,.25,1.45);register("gonad",gonad,new THREE.Vector3(-.22,.86,.06));
const adductor=new THREE.Mesh(new THREE.SphereGeometry(1,40,24),materials.adductor);adductor.scale.set(.88,.42,1.06);register("adductor",adductor,new THREE.Vector3(1.33,.58,1.38));
const heartGroup=new THREE.Group(),heartA=new THREE.Mesh(new THREE.SphereGeometry(.36,24,16),materials.heart),heartB=heartA.clone();heartA.position.x=-.18;heartB.position.x=.18;heartGroup.add(heartA,heartB);register("heart",heartGroup,new THREE.Vector3(1.15,1.05,2.5));
const palpGroup=new THREE.Group();[-1,1].forEach(side=>{const palp=new THREE.Mesh(new THREE.SphereGeometry(1,28,16),materials.palps);palp.scale.set(.45,.12,.95);palp.rotation.y=side*.25;palp.position.x=side*.48;palpGroup.add(palp)});register("palps",palpGroup,new THREE.Vector3(-.72,.72,-2.18));
const mouth=new THREE.Mesh(new THREE.TorusGeometry(.19,.055,12,28),materials.mouth);mouth.rotation.x=Math.PI/2;register("mouth",mouth,new THREE.Vector3(-.68,.74,-2.84));
function tube(points,radius,material){return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),40,radius,8,false),material)}
const gillGroup=new THREE.Group();[-1,1].forEach(side=>{for(let i=0;i<18;i++){const x=side*(.78+i*.055),z=(i-9)*.035;gillGroup.add(tube([new THREE.Vector3(x,0,-1.85+z),new THREE.Vector3(x+side*.12,.05,-.4),new THREE.Vector3(x+side*.18,.02,1.1),new THREE.Vector3(x+side*.05,0,2.05)],.025,materials.gills))}});register("gills",gillGroup,new THREE.Vector3(0,.58,.18));
const rectum=tube([new THREE.Vector3(.35,.86,.5),new THREE.Vector3(.82,1,1.25),new THREE.Vector3(1.12,1.12,2.05),new THREE.Vector3(1.65,1.08,2.7)],.085,materials.rectum);register("rectum",rectum,new THREE.Vector3(0,0,0));
const particles=[];const pg=new THREE.SphereGeometry(.045,8,8),pm=new THREE.MeshBasicMaterial({color:0x67ded4});for(let i=0;i<46;i++){const p=new THREE.Mesh(pg,pm);p.userData.t=Math.random();p.userData.lane=(Math.random()-.5)*1.8;p.visible=false;organRoot.add(p);particles.push(p)}

const anchors={mantle:new THREE.Vector3(-2.8,1,0),gills:new THREE.Vector3(-1.2,1.3,.7),palps:new THREE.Vector3(-.9,1.45,-2.25),digestive:new THREE.Vector3(-.25,1.55,-.25),gonad:new THREE.Vector3(-.15,1.9,.05),adductor:new THREE.Vector3(1.35,1.65,1.4),heart:new THREE.Vector3(1.18,2.05,2.5),rectum:new THREE.Vector3(1.7,1.55,2.7)};
const labelLayer=document.querySelector("#scene-labels"),labelEls={};
Object.keys(anchors).forEach(key=>{const o=organs.find(x=>x.key===key),el=document.createElement("button");el.className="scene-label";el.innerHTML='<i style="background:'+o.color+'"></i>'+o.number+" · "+o.name;el.onclick=()=>setSelected(key);labelLayer.append(el);labelEls[key]=el});
let opening=78,exploded=false,filtering=false,showLabels=true;
const openingInput=document.querySelector("#opening");openingInput.oninput=e=>{opening=+e.target.value;document.querySelector("#opening-value").textContent=opening+"%"};
function toggle(id,callback){const el=document.querySelector(id);el.onclick=()=>{const active=callback();el.classList.toggle("active",active)}}
toggle("#explode",()=>exploded=!exploded);toggle("#filter",()=>filtering=!filtering);toggle("#labels",()=>showLabels=!showLabels);
const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster();
renderer.domElement.addEventListener("pointerdown",event=>{const rect=renderer.domElement.getBoundingClientRect();pointer.x=(event.clientX-rect.left)/rect.width*2-1;pointer.y=-(event.clientY-rect.top)/rect.height*2+1;raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(root.children,true).find(item=>item.object.userData.organKey);if(hit)setSelected(hit.object.userData.organKey);controls.autoRotate=false});
function resize(){const w=mount.clientWidth,h=mount.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/Math.max(h,1);camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(mount);resize();
function animate(){
  requestAnimationFrame(animate);
  const target=-.18-opening/100*1.03;topPivot.rotation.x+=(target-topPivot.rotation.x)*.055;
  Object.entries(organObjects).forEach(([key,obj])=>{const base=obj.userData.base,index=organs.findIndex(o=>o.key===key),angle=index/organs.length*Math.PI*2,ex=exploded?1:0;obj.position.x+=(base.x+Math.cos(angle)*ex*1.3-obj.position.x)*.065;obj.position.y+=(base.y+ex*(.45+index%3*.26)-obj.position.y)*.065;obj.position.z+=(base.z+Math.sin(angle)*ex*.95-obj.position.z)*.065});
  organs.forEach(o=>{materials[o.key].emissive.set(selected===o.key?o.color:"#000");materials[o.key].emissiveIntensity=selected===o.key?.3:0});
  particles.forEach(p=>{p.visible=filtering;if(!filtering)return;p.userData.t=(p.userData.t+.0045)%1;const t=p.userData.t,l=p.userData.lane;if(t<.66)p.position.set(l*(1-t*.7),1+Math.sin(t*12)*.08,5.2-t*10);else p.position.set(.35+l*.1,1.2,-1.4+(t-.66)*4.2)});
  labelLayer.style.display=showLabels?"block":"none";
  Object.entries(anchors).forEach(([key,point])=>{const p=point.clone();root.localToWorld(p);p.project(camera);const x=(p.x*.5+.5)*mount.clientWidth,y=(-p.y*.5+.5)*mount.clientHeight,el=labelEls[key];el.style.transform="translate(-50%,-50%) translate("+x+"px,"+y+"px)";el.classList.toggle("active",selected===key)});
  controls.update();renderer.render(scene,camera);
}
animate();
