import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const organs = [
  {key:"shell",number:"01",name:"Vỏ & bản lề",latin:"Valvae & ligamentum",color:"#9b866d",group:"protection",system:"Hệ nâng đỡ & bảo vệ",location:"Bao ngoài toàn cơ thể",summary:"Hai mảnh vỏ bất đối xứng nối nhau ở vùng bản lề; mảnh trái thường sâu và bám cố định vào giá thể.",detail:"Vỏ gồm lớp hữu cơ ngoài, lớp tinh thể calcium carbonate và lớp xà cừ phía trong. Dây chằng ở bản lề có tính đàn hồi, hỗ trợ mở vỏ khi cơ khép thả lỏng.",func:"Bảo vệ mô mềm, tạo khoang áo và neo cơ thể vào nền bám.",signs:["Gờ tăng trưởng đồng tâm, bề mặt ngoài thô ráp","Mảnh trái/dưới sâu hơn mảnh phải/trên","Vết bám cơ khép rõ ở mặt trong"]},
  {key:"mantle",number:"02",name:"Màng áo",latin:"Pallium",color:"#ee9bb1",group:"protection",system:"Hệ áo & tạo vỏ",location:"Lót sát mặt trong hai mảnh vỏ",summary:"Hai thùy mô mỏng bao quanh khối tạng và giới hạn khoang áo.",detail:"Biểu mô màng áo tiết protein và calcium carbonate để tăng trưởng, sửa chữa vỏ. Bờ áo có cảm giác cơ học–hóa học và tham gia điều phối dòng nước.",func:"Tạo vỏ, che phủ cơ thể, cảm nhận môi trường và hỗ trợ trao đổi khí.",signs:["Mô mỏng, bán trong, ôm theo bờ vỏ","Bờ áo thường sẫm màu hơn phần trung tâm","Liên tục với mô quanh cơ khép"]},
  {key:"gills",number:"03",name:"Mang",latin:"Ctenidia",color:"#54c5e3",group:"feeding",system:"Hô hấp & lọc ăn",location:"Hai bên khối tạng trong khoang áo",summary:"Các phiến mang rộng, xếp nếp, phủ lông chuyển; vừa trao đổi khí vừa giữ hạt thức ăn.",detail:"Lông chuyển tạo dòng nước qua các khe mang. Hạt nhỏ bị giữ trong chất nhầy rồi chuyển dọc rãnh thức ăn tới xúc biện môi; oxy khuếch tán vào huyết dịch.",func:"Bơm nước, hô hấp, giữ và vận chuyển vi tảo cùng vật chất hữu cơ.",signs:["Các lá mang mảnh xếp song song","Màu xám lam hoặc nâu nhạt ở tiêu bản","Chiếm diện tích lớn hai bên khối tạng"]},
  {key:"palps",number:"04",name:"Xúc biện môi",latin:"Palpi labiales",color:"#f2cd72",group:"feeding",system:"Hệ tiêu hóa",location:"Phía trước miệng, gần đầu trước của mang",summary:"Những thùy nhỏ có rãnh, tiếp nhận hạt từ mang và phân loại trước khi đưa vào miệng.",detail:"Xúc biện dựa trên kích thước và tính chất bề mặt của hạt để chọn thức ăn. Hạt không phù hợp được gom thành phân giả và thải khỏi khoang áo.",func:"Chọn lọc, định hướng và chuyển thức ăn từ mang tới miệng.",signs:["Cặp thùy nhỏ dạng lá","Nằm sát điểm kết thúc của rãnh thức ăn","Bao quanh khe miệng ngắn"]},
  {key:"mouth",number:"05",name:"Miệng & thực quản",latin:"Os & oesophagus",color:"#b6797a",group:"feeding",system:"Hệ tiêu hóa",location:"Đầu trước khối tạng",summary:"Miệng là khe nhỏ giữa các xúc biện, nối với thực quản ngắn đi vào dạ dày.",detail:"Hàu không có đầu phát triển, hàm hay radula. Thức ăn được lông chuyển và chất nhầy đưa thụ động qua miệng, thực quản đến dạ dày.",func:"Tiếp nhận thức ăn đã chọn và dẫn vào dạ dày.",signs:["Khe miệng rất nhỏ, không có hàm","Nằm giữa hai cặp xúc biện","Thông với một thực quản ngắn"]},
  {key:"digestive",number:"06",name:"Khối tạng & tuyến tiêu hóa",latin:"Massa visceralis",color:"#aab46f",group:"internal",system:"Hệ tiêu hóa",location:"Trung tâm cơ thể, phía trước cơ khép",summary:"Khối mô trung tâm chứa dạ dày, tuyến tiêu hóa màu sẫm và các quai ruột.",detail:"Dạ dày nhận thức ăn từ thực quản. Trụ tinh thể quay trong túi trụ, hỗ trợ khuấy và giải phóng enzyme. Tuyến tiêu hóa bao quanh dạ dày, đảm nhiệm tiêu hóa nội bào và hấp thu.",func:"Tiêu hóa cơ học–hóa học, hấp thu và dự trữ năng lượng.",signs:["Khối mô lớn màu kem đến nâu lục","Bao quanh bởi mô sinh dục khi thành thục","Các quai ruột đi xuyên qua khối tạng"]},
  {key:"gonad",number:"07",name:"Tuyến sinh dục",latin:"Gonad",color:"#ead17b",group:"internal",system:"Hệ sinh sản",location:"Lan tỏa quanh tuyến tiêu hóa",summary:"Mô sinh dục không thành một cơ quan rời rõ; phát triển lan trong khối tạng theo mùa.",detail:"Khi thành thục, nang sinh dục chứa trứng hoặc tinh trùng chiếm phần lớn không gian quanh tuyến tiêu hóa. Giao tử đi qua ống sinh dục và phóng ra khoang áo để thụ tinh ngoài.",func:"Sản xuất, tích lũy và phóng thích giao tử.",signs:["Màu kem hoặc trắng sữa khi thành thục","Phân bố khuếch tán, không có ranh giới sắc","Thể tích biến đổi mạnh theo mùa sinh sản"]},
  {key:"adductor",number:"08",name:"Cơ khép vỏ",latin:"Musculus adductor",color:"#df8e83",group:"internal",system:"Hệ cơ",location:"Lệch về phía sau, giữa hai mảnh vỏ",summary:"Một cơ lớn duy nhất nối trực tiếp hai mảnh vỏ; cấu trúc nổi bật nhất khi mở hàu.",detail:"Phần cơ nhanh tạo lực đóng vỏ tức thời; phần cơ giữ duy trì trạng thái khép với tiêu hao năng lượng thấp. Sự co cơ thắng lực mở của dây chằng bản lề.",func:"Đóng kín vỏ, giữ nước khi triều rút và bảo vệ trước kích thích.",signs:["Khối tròn/bầu dục săn chắc, màu trắng ngà","Nằm lệch về phía sau khối tạng","Để lại hai vết bám tương ứng ở mặt trong vỏ"]},
  {key:"heart",number:"09",name:"Tim & màng tim",latin:"Cor & pericardium",color:"#e65d6a",group:"internal",system:"Hệ tuần hoàn hở",location:"Mặt lưng, ngay sau cơ khép vỏ",summary:"Tim nhỏ gồm một tâm thất và hai tâm nhĩ, nằm trong xoang màng tim.",detail:"Hai tâm nhĩ nhận huyết dịch đã qua mang; tâm thất bơm huyết dịch vào động mạch rồi các xoang mô. Ruột sau thường đi xuyên hoặc sát tâm thất — đặc điểm điển hình ở hai mảnh vỏ.",func:"Duy trì tuần hoàn huyết dịch, vận chuyển oxy, dinh dưỡng và chất thải.",signs:["Cấu trúc nhỏ nằm ở mặt lưng","Hai tâm nhĩ bao quanh tâm thất","Liên hệ rất gần với đoạn ruột sau"]},
  {key:"rectum",number:"10",name:"Ruột sau & hậu môn",latin:"Rectum & anus",color:"#7f665e",group:"internal",system:"Hệ tiêu hóa",location:"Chạy dọc mặt lưng, mở gần buồng thoát",summary:"Đoạn cuối ruột đi về phía sau và kết thúc ở hậu môn trong vùng dòng nước thoát.",detail:"Phân thật từ hệ tiêu hóa được nén trong ruột sau, đi qua vùng màng tim rồi ra hậu môn. Dòng nước thoát mang chất thải ra ngoài, tách tương đối với dòng nước vào.",func:"Nén, vận chuyển và thải sản phẩm tiêu hóa ra khỏi khoang áo.",signs:["Ống mảnh chạy gần tim và cơ khép","Đầu hậu môn hướng vào vùng nước thoát","Khác với phân giả hình thành trước miệng"]}
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let selected = "gills";
let activeFilter = "all";
const visible = Object.fromEntries(organs.map(organ => [organ.key, true]));
const organList = $("#organ-list");

function eyeSvg() { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>'; }
function renderOrganList() {
  const query = $("#organ-search").value.trim().toLocaleLowerCase("vi");
  const filtered = organs.filter(organ => (activeFilter === "all" || organ.group === activeFilter) && `${organ.name} ${organ.latin} ${organ.system}`.toLocaleLowerCase("vi").includes(query));
  organList.replaceChildren();
  filtered.forEach(organ => {
    const row = document.createElement("button");
    row.type = "button"; row.className = `organ-row${selected === organ.key ? " active" : ""}`; row.dataset.key = organ.key; row.style.setProperty("--organ-color", organ.color); row.setAttribute("role","listitem");
    row.innerHTML = `<span class="organ-icon"><i></i></span><span><b>${organ.number} · ${organ.name}</b><small>${organ.latin}</small></span><span class="organ-eye${visible[organ.key] ? "" : " off"}" role="button" aria-label="${visible[organ.key] ? "Ẩn" : "Hiện"} ${organ.name}" tabindex="0">${eyeSvg()}</span>`;
    row.addEventListener("click", event => { if (!event.target.closest(".organ-eye")) setSelected(organ.key); });
    const eye = row.querySelector(".organ-eye");
    const toggle = event => { event.preventDefault(); event.stopPropagation(); toggleOrgan(organ.key); };
    eye.addEventListener("click", toggle); eye.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") toggle(event); });
    organList.append(row);
  });
  if (!filtered.length) { const empty = document.createElement("p"); empty.className = "organ-empty"; empty.textContent = "Không tìm thấy cấu trúc phù hợp."; organList.append(empty); }
  $("#organ-count").textContent = filtered.length;
}

function setSelected(key, focus = false) {
  selected = key;
  const organ = organs.find(item => item.key === key);
  $("#organ-detail").style.setProperty("--organ-color", organ.color);
  $("#detail-index").textContent = organ.number; $("#detail-name").textContent = organ.name; $("#detail-latin").textContent = organ.latin;
  $("#detail-summary").textContent = organ.summary; $("#detail-system").textContent = organ.system; $("#detail-location").textContent = organ.location;
  $("#detail-text").textContent = organ.detail; $("#detail-function").textContent = organ.func;
  $("#detail-signs").replaceChildren(...organ.signs.map(sign => { const li = document.createElement("li"); li.textContent = sign; return li; }));
  $("#selected-chip-color").style.background = organ.color; $("#selected-chip-name").textContent = organ.name;
  const button = $("#toggle-organ"); button.classList.toggle("off", !visible[key]); button.setAttribute("aria-pressed", String(visible[key]));
  $(".visible-state").innerHTML = `<i></i>${visible[key] ? "Đang hiển thị" : "Đang ẩn"}`;
  renderOrganList();
  if (focus) focusSelected();
}

$("#organ-search").addEventListener("input", renderOrganList);
$$ (".system-filters button").forEach(button => button.addEventListener("click", () => { activeFilter = button.dataset.filter; $$(".system-filters button").forEach(item => item.classList.toggle("active", item === button)); renderOrganList(); }));
renderOrganList();

const mount = $("#scene");
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x041a2a, .032);
const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
const homeCamera = new THREE.Vector3(9.6, 8.4, 13.6);
camera.position.copy(homeCamera);
const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true, powerPreference:"high-performance"});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
mount.prepend(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = .055; controls.minDistance = 7; controls.maxDistance = 25; controls.target.set(0,.45,0); controls.autoRotate = true; controls.autoRotateSpeed = .42;
scene.add(new THREE.HemisphereLight(0xc8f1ff, 0x092034, 2.7));
const keyLight = new THREE.DirectionalLight(0xfff0d6, 5.1); keyLight.position.set(7,11,8); scene.add(keyLight);
const rimLight = new THREE.DirectionalLight(0x37c7ff, 4.2); rimLight.position.set(-9,5,-7); scene.add(rimLight);
const fillLight = new THREE.PointLight(0x9de7ff, 2.5, 30); fillLight.position.set(0,-1,7); scene.add(fillLight);
const root = new THREE.Group(); root.rotation.y = -.18; scene.add(root);

function roughShell(seed) {
  const geometry = new THREE.SphereGeometry(1, 96, 56); const position = geometry.attributes.position; const v = new THREE.Vector3();
  for (let i=0;i<position.count;i++) { v.fromBufferAttribute(position,i); const az = Math.atan2(v.z,v.x); const ridge = .035*Math.sin((1-v.y)*34 + seed) + .032*Math.sin(az*7+seed); const noise = .038*Math.sin(v.x*19+seed)*Math.cos(v.z*14) + .018*Math.sin(v.y*47); v.multiplyScalar(1+ridge+noise); position.setXYZ(i,v.x,v.y,v.z); }
  geometry.computeVertexNormals(); return geometry;
}
const shellMaterial = new THREE.MeshPhysicalMaterial({color:0x665b4d,roughness:.78,metalness:.01,clearcoat:.12,clearcoatRoughness:.76});
const shellTopMaterial = shellMaterial.clone(); shellTopMaterial.color.set(0x514a41);
const nacreMaterial = new THREE.MeshPhysicalMaterial({color:0xf1eee8,roughness:.19,metalness:.02,clearcoat:1,clearcoatRoughness:.12,iridescence:1,iridescenceIOR:1.32,side:THREE.DoubleSide});
const lowerGroup = new THREE.Group(); lowerGroup.position.y = -.48; root.add(lowerGroup);
const lowerShell = new THREE.Mesh(roughShell(1.7),shellMaterial); lowerShell.scale.set(3.78,.76,5.15); lowerShell.userData.organKey="shell"; lowerGroup.add(lowerShell);
const lowerNacre = new THREE.Mesh(new THREE.CircleGeometry(1,128),nacreMaterial); lowerNacre.scale.set(3.38,4.57,1); lowerNacre.rotation.x=-Math.PI/2; lowerNacre.position.set(0,.78,.08); lowerNacre.userData.organKey="shell"; lowerGroup.add(lowerNacre);
const topPivot = new THREE.Group(); topPivot.position.set(0,-.08,-5.08); root.add(topPivot);
const topShell = new THREE.Mesh(roughShell(3.2),shellTopMaterial); topShell.scale.set(3.58,.64,5.03); topShell.position.z=5.08; topShell.userData.organKey="shell"; topPivot.add(topShell);
const topNacre = new THREE.Mesh(new THREE.CircleGeometry(1,128),nacreMaterial.clone()); topNacre.scale.set(3.22,4.5,1); topNacre.rotation.x=-Math.PI/2; topNacre.position.set(0,-.66,5.08); topNacre.userData.organKey="shell"; topPivot.add(topNacre);

const organRoot = new THREE.Group(); organRoot.position.y=.38; root.add(organRoot);
const materials = {}; organs.forEach(organ => materials[organ.key] = new THREE.MeshPhysicalMaterial({color:organ.color,roughness:.52,clearcoat:.18,transparent:["mantle","gills"].includes(organ.key),opacity:organ.key==="mantle"?.68:organ.key==="gills"?.82:1,emissive:0x000000}));
const organObjects = {};
function register(key,object,base) { object.userData.organKey=key; object.userData.base=base.clone(); object.position.copy(base); object.traverse(child => child.userData.organKey=key); organRoot.add(object); organObjects[key]=object; }
const mantle = new THREE.Mesh(new THREE.TorusGeometry(2.73,.25,20,120),materials.mantle); mantle.scale.z=1.55; mantle.rotation.x=Math.PI/2; register("mantle",mantle,new THREE.Vector3(0,.22,.1));
const visceral = new THREE.Mesh(new THREE.SphereGeometry(1,64,38),materials.digestive); visceral.scale.set(1.78,.43,1.98); register("digestive",visceral,new THREE.Vector3(-.15,.43,-.2));
const gonad = new THREE.Mesh(new THREE.SphereGeometry(1,52,30),materials.gonad); gonad.scale.set(1.38,.25,1.48); register("gonad",gonad,new THREE.Vector3(-.22,.86,.06));
const adductor = new THREE.Mesh(new THREE.SphereGeometry(1,48,32),materials.adductor); adductor.scale.set(.9,.43,1.08); register("adductor",adductor,new THREE.Vector3(1.34,.59,1.4));
const heartGroup = new THREE.Group(); const heartA = new THREE.Mesh(new THREE.SphereGeometry(.36,32,20),materials.heart), heartB=heartA.clone(); heartA.position.x=-.2; heartB.position.x=.2; heartGroup.add(heartA,heartB); register("heart",heartGroup,new THREE.Vector3(1.16,1.06,2.52));
const palpGroup = new THREE.Group(); [-1,1].forEach(side=>{const palp=new THREE.Mesh(new THREE.SphereGeometry(1,32,20),materials.palps);palp.scale.set(.46,.12,.96);palp.rotation.y=side*.25;palp.position.x=side*.49;palpGroup.add(palp)}); register("palps",palpGroup,new THREE.Vector3(-.73,.73,-2.2));
const mouth = new THREE.Mesh(new THREE.TorusGeometry(.2,.055,14,32),materials.mouth); mouth.rotation.x=Math.PI/2; register("mouth",mouth,new THREE.Vector3(-.69,.75,-2.85));
function tube(points,radius,material){return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),48,radius,9,false),material)}
const gillGroup = new THREE.Group(); [-1,1].forEach(side=>{for(let i=0;i<20;i++){const x=side*(.73+i*.052),z=(i-10)*.033;gillGroup.add(tube([new THREE.Vector3(x,0,-1.88+z),new THREE.Vector3(x+side*.12,.05,-.42),new THREE.Vector3(x+side*.18,.02,1.12),new THREE.Vector3(x+side*.05,0,2.08)],.024,materials.gills))}}); register("gills",gillGroup,new THREE.Vector3(0,.59,.18));
const rectum=tube([new THREE.Vector3(.35,.86,.5),new THREE.Vector3(.82,1,1.25),new THREE.Vector3(1.13,1.12,2.08),new THREE.Vector3(1.68,1.08,2.72)],.086,materials.rectum); register("rectum",rectum,new THREE.Vector3(0,0,0));
organObjects.shell = new THREE.Group(); organObjects.shell.add(lowerGroup,topPivot); root.add(organObjects.shell);

const particles=[]; const particleGeometry=new THREE.SphereGeometry(.045,8,8), particleMaterial=new THREE.MeshBasicMaterial({color:0x66dcff});
for(let i=0;i<52;i++){const p=new THREE.Mesh(particleGeometry,particleMaterial);p.userData.t=Math.random();p.userData.lane=(Math.random()-.5)*2;p.visible=false;organRoot.add(p);particles.push(p)}
const anchors={shell:new THREE.Vector3(-3.2,.6,-2.4),mantle:new THREE.Vector3(-2.8,1,.1),gills:new THREE.Vector3(-1.2,1.3,.7),palps:new THREE.Vector3(-.9,1.45,-2.25),mouth:new THREE.Vector3(-.7,1.4,-2.8),digestive:new THREE.Vector3(-.25,1.55,-.25),gonad:new THREE.Vector3(-.15,1.9,.05),adductor:new THREE.Vector3(1.35,1.65,1.4),heart:new THREE.Vector3(1.18,2.05,2.5),rectum:new THREE.Vector3(1.7,1.55,2.7)};
const labelLayer=$("#scene-labels"), labelEls={};
Object.entries(anchors).forEach(([key])=>{const organ=organs.find(item=>item.key===key);const label=document.createElement("button");label.type="button";label.className="scene-label";label.style.setProperty("--label-color",organ.color);label.textContent=`${organ.number} · ${organ.name}`;label.addEventListener("click",()=>setSelected(key));labelLayer.append(label);labelEls[key]=label});

let opening=78, exploded=false, filtering=false, showLabels=true;
function toggleOrgan(key){visible[key]=!visible[key];if(key==="shell"){lowerGroup.visible=visible[key];topPivot.visible=visible[key]}else if(organObjects[key])organObjects[key].visible=visible[key];setSelected(key)}
$("#toggle-organ").addEventListener("click",()=>toggleOrgan(selected));
$("#opening").addEventListener("input",event=>{opening=+event.target.value;$("#opening-value").textContent=`${opening}%`});
$("#rotate").addEventListener("click",()=>{controls.autoRotate=!controls.autoRotate;$("#rotate").classList.toggle("active",controls.autoRotate)});
$("#explode").addEventListener("click",()=>{exploded=!exploded;$("#explode").classList.toggle("active",exploded)});
$("#labels").addEventListener("click",()=>{showLabels=!showLabels;$("#labels").classList.toggle("active",showLabels)});
$("#filter-flow").addEventListener("click",()=>{filtering=!filtering;$("#filter-flow").classList.toggle("active",filtering)});
function resetCamera(){camera.position.copy(homeCamera);controls.target.set(0,.45,0);controls.update()}
$("#reset-view").addEventListener("click",resetCamera);
function focusSelected(){switchView("model");if(!visible[selected])toggleOrgan(selected);const anchor=anchors[selected]||new THREE.Vector3();const world=anchor.clone();root.localToWorld(world);controls.target.copy(world);camera.position.copy(world.clone().add(new THREE.Vector3(7,6,9)));controls.update();controls.autoRotate=false;$("#rotate").classList.remove("active")}
$("#focus-organ").addEventListener("click",focusSelected);

function switchView(view){
  $$("[data-view-panel]").forEach(panel=>panel.classList.toggle("active",panel.dataset.viewPanel===view));
  $$("[data-view]").forEach(button=>{const active=button.dataset.view===view;button.classList.toggle("active",active);button.setAttribute("aria-selected",String(active))});
  const labels={v2fun:"MÔ HÌNH 3D CHÂN THỰC",model:"MÔ HÌNH GIẢI PHẪU TƯƠNG TÁC",specimen:"TIÊU BẢN GIẢI PHẪU THẬT",wireframe:"LƯỚI HÌNH HỌC 3D"};
  $("#view-label").textContent=labels[view];
  $(".tool-rail").style.display=view==="model"?"block":"none";
  $(".selected-chip").style.display=view==="model"?"flex":"none";
  $(".mouse-help").style.display=view==="model"?"flex":"none";
  const slider=$("#opening");
  slider.disabled=view!=="model";
  $("#control-label").textContent=view==="model"?"Độ mở hai mảnh vỏ":view==="v2fun"?"Tiêu bản 3D nhúng trực tiếp":"Chế độ ảnh tham chiếu";
  $("#opening-value").textContent=view==="model"?`${opening}%`:view==="v2fun"?"V2Fun":"IMAGE";
  $("#engine-label").textContent=view==="model"?"WEBGL":view==="v2fun"?"ONLINE":"REFERENCE";
  if(view==="model")resize();
}
$$("[data-view]").forEach(button=>button.addEventListener("click",()=>switchView(button.dataset.view)));

const embed=$("#v2fun-embed"),embedLoader=$("#v2fun-loading");
embed.addEventListener("load",()=>embedLoader.classList.add("loaded"));
$("#use-layer-model").addEventListener("click",()=>switchView("model"));
$("#v2fun-fullscreen").addEventListener("click",async()=>{try{await $("#v2fun-frame").requestFullscreen()}catch{window.open(embed.src,"_blank","noopener,noreferrer")}});

const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster();
renderer.domElement.addEventListener("pointerdown",event=>{const rect=renderer.domElement.getBoundingClientRect();pointer.x=(event.clientX-rect.left)/rect.width*2-1;pointer.y=-(event.clientY-rect.top)/rect.height*2+1;raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(root.children,true).find(item=>item.object.userData.organKey);if(hit)setSelected(hit.object.userData.organKey);controls.autoRotate=false;$("#rotate").classList.remove("active")});
renderer.domElement.addEventListener("dblclick",()=>focusSelected());
function resize(){const width=mount.clientWidth,height=mount.clientHeight;if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix()}
new ResizeObserver(resize).observe(mount); resize();

function animate(){
  requestAnimationFrame(animate);
  topPivot.rotation.x+=(-.18-opening/100*1.03-topPivot.rotation.x)*.055;
  Object.entries(organObjects).forEach(([key,obj])=>{if(key==="shell")return;const base=obj.userData.base,index=organs.findIndex(o=>o.key===key),angle=index/organs.length*Math.PI*2,amount=exploded?1:0;obj.position.x+=(base.x+Math.cos(angle)*amount*1.35-obj.position.x)*.065;obj.position.y+=(base.y+amount*(.48+index%3*.27)-obj.position.y)*.065;obj.position.z+=(base.z+Math.sin(angle)*amount*.98-obj.position.z)*.065});
  organs.forEach(organ=>{const material=materials[organ.key];if(!material)return;material.emissive.set(selected===organ.key?organ.color:"#000000");material.emissiveIntensity=selected===organ.key?.34:0});
  shellMaterial.emissive.set(selected==="shell"?0x382b1f:0);shellMaterial.emissiveIntensity=selected==="shell"?.35:0;shellTopMaterial.emissive.copy(shellMaterial.emissive);shellTopMaterial.emissiveIntensity=shellMaterial.emissiveIntensity;
  particles.forEach(p=>{p.visible=filtering;if(!filtering)return;p.userData.t=(p.userData.t+.0045)%1;const t=p.userData.t,l=p.userData.lane;if(t<.68)p.position.set(l*(1-t*.7),1+Math.sin(t*13)*.08,5.4-t*10.2);else p.position.set(.4+l*.1,1.23,-1.5+(t-.68)*4.6)});
  labelLayer.style.display=showLabels?"block":"none";
  Object.entries(anchors).forEach(([key,point])=>{const projected=point.clone();root.localToWorld(projected);projected.project(camera);const label=labelEls[key];label.style.transform=`translate(-50%,-50%) translate(${(projected.x*.5+.5)*mount.clientWidth}px,${(-projected.y*.5+.5)*mount.clientHeight}px)`;label.classList.toggle("active",selected===key);label.hidden=!visible[key]});
  controls.update();renderer.render(scene,camera);
}
setSelected(selected); switchView("v2fun"); animate();
