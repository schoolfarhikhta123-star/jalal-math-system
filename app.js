const grades=[7,8,9,10,11,12];
const gradeNames={7:"صنف هفتم",8:"صنف هشتم",9:"صنف نهم",10:"صنف دهم",11:"صنف یازدهم",12:"صنف دوازدهم"};
const subjects=["حساب","الجبر","هندسه","مثلثات","ریاضیات عالی"];

const arithmeticLessons=[
{id:"g7-integers",title:"اعداد صحیح و عملیات",type:"integer",definition:"اعداد صحیح عبارت‌اند از عددهای مثبت، منفی و صفر.",explanation:"برای جمع عددهای هم‌علامت، قدر مطلق‌ها را جمع و همان علامت را نگه می‌داریم. برای عددهای با علامت متفاوت، تفریق قدر مطلق‌ها را انجام و علامت عدد بزرگ‌تر را می‌گذاریم.",examples:["−۸ + ۳ = −۵","−۶ − (−۹) = ۳","(−۴) × ۷ = −۲۸","(−۴۸) ÷ (−۶) = ۸"]},
{id:"g7-fractions",title:"کسرها و اعداد اعشاری",type:"fraction",definition:"کسر بخشی از یک واحد است و به شکل صورت بر مخرج نوشته می‌شود.",explanation:"برای جمع و تفریق، مخرج مشترک می‌گیریم؛ برای ضرب، صورت‌ها و مخرج‌ها را ضرب می‌کنیم؛ برای تقسیم، کسر دوم را وارونه کرده و ضرب می‌کنیم.",examples:["۱/۴ + ۲/۴ = ۳/۴","۱/۲ + ۱/۳ = ۵/۶","۲/۳ × ۳/۵ = ۲/۵","۳/۴ = ۰٫۷۵"]},
{id:"g7-ratio",title:"نسبت و تناسب",type:"ratio",definition:"نسبت مقایسهٔ دو مقدار است و تناسب برابری دو نسبت است.",explanation:"نسبت‌ها را می‌توان ساده کرد و در تناسب از ضرب متقاطع استفاده می‌کنیم: a/b = c/x، پس ax = bc.",examples:["۶:۹ = ۲:۳","۲ قلم برای ۱۰ افغانی است؛ ۶ قلم ۳۰ افغانی می‌شود","۳/۵ = ۶/x؛ پس x = ۱۰"]},
{id:"g7-percent",title:"درصد و کاربرد آن",type:"percent",definition:"درصد یعنی چند بخش از هر صد بخش و با علامت ٪ نمایش داده می‌شود.",explanation:"برای یافتن درصدی از عدد، عدد را در مقدار درصد ضرب و بر ۱۰۰ تقسیم می‌کنیم.",examples:["۲۰٪ از ۱۵۰ = ۳۰","۱۵ از ۶۰ = ۲۵٪","قیمت ۲۰۰ افغانی با تخفیف ۱۰٪، ۱۸۰ افغانی می‌شود"]}
];

const fa=n=>String(n).replace(/[0-9]/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
const safeRead=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
const profileKey="jalalMathProfile",progressKey="jalalMathProgress";
const state={profile:safeRead(profileKey,null),grade:7,subject:"حساب",quiz:null,timer:null};
function progress(){return safeRead(progressKey,{points:0,completed:[],best:{}})}
function saveProgress(p){localStorage.setItem(progressKey,JSON.stringify(p))}
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){const r=a%b;a=b;b=r}return a||1}

function render(){renderTop();renderClasses();renderSubjects();renderLessons()}
function renderTop(){const p=progress();document.getElementById("studentChip").textContent=state.profile?`${state.profile.name} · صنف ${fa(state.profile.grade)}`:"پروفایل شاگرد";document.getElementById("welcomeTitle").textContent=state.profile?`سلام ${state.profile.name}، آمادهٔ یادگیری هستی؟`:"آمادهٔ یادگیری هستی؟";document.getElementById("totalScore").textContent=fa(p.points);document.getElementById("completedCount").textContent=fa(p.completed.length)}
function renderClasses(){const root=document.getElementById("classTabs");root.innerHTML=grades.map(g=>`<button class="class-tab ${g===state.grade?"active":""}" data-grade="${g}">${gradeNames[g]}</button>`).join("");root.querySelectorAll("[data-grade]").forEach(b=>b.onclick=()=>{state.grade=Number(b.dataset.grade);state.subject="حساب";render()})}
function renderSubjects(){const root=document.getElementById("subjectGrid");root.innerHTML=subjects.map(s=>`<button class="subject-btn ${s===state.subject?"active":""}" data-subject="${s}"><span class="title">${s}</span><span class="subtitle">${s==="حساب"&&state.grade===7?"۴ درس کامل":"در مرحلهٔ بعد تکمیل می‌شود"}</span></button>`).join("");root.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>{state.subject=b.dataset.subject;renderSubjects();renderLessons()})}
function findLesson(id){return arithmeticLessons.find(l=>l.id===id)}

function makeQuestion(lesson,i){
if(lesson.type==="integer"){
  const a=(i*7+11)%31-15,b=(i*5+4)%19-9,k=i%5;
  if(k===0)return{text:`${a} + (${b}) = ؟`,answer:String(a+b),explain:`${a} + (${b}) = ${a+b}`};
  if(k===1)return{text:`${a} − (${b}) = ؟`,answer:String(a-b),explain:`${a} − (${b}) = ${a-b}`};
  if(k===2)return{text:`(${a}) × (${b}) = ؟`,answer:String(a*b),explain:`(${a}) × (${b}) = ${a*b}`};
  if(k===3){const d=(i%7)+2,v=(i%9)-4,answer=v;return{text:`${v*d} ÷ ${d} = ؟`,answer:String(answer),explain:`${v*d} ÷ ${d} = ${answer}`}};
  return{text:`قدر مطلق |${a}| چند است؟`,answer:String(Math.abs(a)),explain:`قدر مطلق عدد ${a} برابر ${Math.abs(a)} است`};
}
if(lesson.type==="fraction"){
  const d1=2+i%7,d2=2+(i*3)%7,n1=1+(i*2)%Math.max(1,d1-1),n2=1+(i*3+1)%Math.max(1,d2-1),k=i%5;
  let n,d,text;
  if(k===0){n=n1*d2+n2*d1;d=d1*d2;text=`${n1}/${d1} + ${n2}/${d2} = ؟`}
  else if(k===1){n=n1*d2-n2*d1;d=d1*d2;text=`${n1}/${d1} − ${n2}/${d2} = ؟`}
  else if(k===2){n=n1*n2;d=d1*d2;text=`${n1}/${d1} × ${n2}/${d2} = ؟`}
  else if(k===3){n=n1*d2;d=d1*n2;text=`${n1}/${d1} ÷ ${n2}/${d2} = ؟`}
  else {const dec=Math.round((n1/d1)*100)/100;return{text:`${n1}/${d1} را به اعشار تبدیل کن`,answer:String(dec).replace(".","٫"),explain:`تقسیم صورت بر مخرج برابر تقریباً ${dec} است`}};
  const g=gcd(n,d);n/=g;d/=g;
  return{text,answer:`${n}/${d}`,explain:`پاسخ ساده‌شده: ${n}/${d}`};
}
if(lesson.type==="ratio"){
  const a=2+i%8,b=2+(i*3)%9,m=2+(i%6);
  if(i%3===0){const g=gcd(a*m,b*m);return{text:`نسبت ${a*m}:${b*m} را ساده کن`,answer:`${a/g}:${b/g}`,explain:`هر دو عدد را بر مقسوم‌علیه مشترک تقسیم می‌کنیم: ${a/g}:${b/g}`}}
  if(i%3===1){return{text:`در تناسب ${a}/${b} = ${a*m}/x مقدار x چیست؟`,answer:String(b*m),explain:`ضرب متقاطع: a×x = b×c، پس x = ${b*m}`}};
  return{text:`اگر ${a} کتاب ${b*10} افغانی باشد، ${a*m} کتاب چند افغانی است؟`,answer:String(b*m*10),explain:`قیمت تناسبی است و جواب ${b*m*10} افغانی است`};
}
const p=[10,20,25,50,75][i%5],base=100*(1+(i*3)%9),k=i%3;
if(k===0){const answer=p*base/100;return{text:`${p}٪ از ${base} چند است؟`,answer:String(answer),explain:`${p} × ${base} ÷ ۱۰۰ = ${answer}`}}
if(k===1){const part=p*base/100;return{text:`${part} چند درصدِ ${base} است؟`,answer:`${p}٪`,explain:`${part} ÷ ${base} × ۱۰۰ = ${p}٪`}}
return{text:`قیمت ${base} افغانی با تخفیف ${p}٪ چند می‌شود؟`,answer:String(base-p*base/100),explain:`تخفیف ${p*base/100} افغانی است؛ قیمت نهایی ${base-p*base/100} افغانی می‌شود`};
}
function make30(lesson){return Array.from({length:30},(_,i)=>makeQuestion(lesson,i))}

function renderLessons(){
 const root=document.getElementById("lessonPanel"),p=progress();
 if(state.grade!==7||state.subject!=="حساب"){
   root.innerHTML=`<h2>${state.subject} · ${gradeNames[state.grade]}</h2><div class="empty-state"><div><strong>این بخش هنوز در مرحلهٔ بعد تکمیل می‌شود.</strong><br>در مرحلهٔ فعلی، حساب صنف هفتم آماده است.</div></div>`;return;
 }
 root.innerHTML=`<div class="section-heading"><h2>حساب · صنف هفتم</h2><span class="topic-chip">۴ درس کامل</span></div><div class="lesson-list">${arithmeticLessons.map((lesson,i)=>{const done=p.completed.includes(lesson.id);return `<article class="lesson-card"><div class="lesson-header"><div><p class="lesson-tag">درس ${fa(i+1)}</p><h3 class="lesson-title">${lesson.title}</h3></div><span class="done-label">${done?"✓ تکمیل‌شده":"۳۰ سوال"}</span></div><div class="course-spotlight"><div class="concept-box"><h4>تعریف</h4><p>${lesson.definition}</p></div><div class="concept-box"><h4>توضیح</h4><p>${lesson.explanation}</p></div></div><div class="example-box"><h4>مثال‌های حل‌شده</h4><ul class="example-list">${lesson.examples.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="media-actions"><button class="small-btn" data-workbook="${lesson.id}">کاربرگ ۳۰ سؤالی A4</button><button class="small-btn accent" data-games="${lesson.id}">۴ بازی آموزشی</button><button class="small-btn ghost" data-print="${lesson.id}">چاپ رنگی</button><button class="small-btn primary" data-complete="${lesson.id}" ${done?"disabled":""}>${done?"تکمیل شد":"علامت‌گذاری تکمیل"}</button></div></article>`}).join("")}</div>`;
 root.querySelectorAll("[data-workbook]").forEach(b=>b.onclick=()=>openWorkbook(findLesson(b.dataset.workbook),false));
 root.querySelectorAll("[data-print]").forEach(b=>b.onclick=()=>{openWorkbook(findLesson(b.dataset.print),false);setTimeout(()=>window.print(),250)});
 root.querySelectorAll("[data-games]").forEach(b=>b.onclick=()=>showModes(findLesson(b.dataset.games)));
 root.querySelectorAll("[data-complete]").forEach(b=>b.onclick=()=>markComplete(b.dataset.complete));
}
function markComplete(id){const p=progress();if(!p.completed.includes(id))p.completed.push(id);saveProgress(p);render()}

function openWorkbook(lesson,showAnswers){
 const qs=make30(lesson);
 document.getElementById("modalBody").innerHTML=`<h2>کاربرگ امتحانی: ${lesson.title}</h2><div class="media-actions"><button class="small-btn accent" id="answerToggle">${showAnswers?"پنهان کردن پاسخ‌نامه":"نمایش پاسخ‌نامه"}</button><button class="small-btn ghost" onclick="window.print()">چاپ A4 رنگی</button></div><div class="exam-sheet"><div class="exam-head"><h3>سیستم آموزشی ریاضیات جلال</h3><p>امتحان حساب · صنف هفتم</p><p><strong>${lesson.title}</strong> · نمره: ۳۰</p></div><div class="exam-fields"><span>نام: __________________</span><span>تاریخ: __________________</span></div><div class="exam-note">همهٔ پرسش‌ها را با راه‌حل پاسخ دهید. هر پرسش یک نمره دارد.</div>${qs.map((q,i)=>`<div class="exam-question"><strong>${fa(i+1)}.</strong> ${q.text}<div class="answer-line"></div></div>`).join("")}${showAnswers?`<div class="answer-key"><h4>پاسخ‌نامه</h4><ol>${qs.map(q=>`<li>${q.answer} — ${q.explain}</li>`).join("")}</ol></div>`:""}</div>`;
 document.getElementById("answerToggle").onclick=()=>openWorkbook(lesson,!showAnswers);toggleModal(true);
}

const modes=[{id:"practice",title:"بازی تمرینی",desc:"پاسخ و راه‌حل هر پرسش را همان‌جا می‌بینی."},{id:"timed",title:"بازی زمان‌دار",desc:"۳۰ ثانیه فرصت برای هر پرسش."},{id:"streak",title:"زنجیرهٔ پاسخ درست",desc:"پاسخ‌های درست پیاپی امتیاز زنجیره می‌سازند."},{id:"exam",title:"آزمون امتیازی",desc:"۳۰ پرسش؛ راه‌حل‌ها فقط در پایان دیده می‌شوند."}];
function showModes(lesson){document.getElementById("modalBody").innerHTML=`<h2>۴ بازی: ${lesson.title}</h2><p>هر بازی از ۳۰ پرسش همین درس استفاده می‌کند.</p><div class="game-modes">${modes.map(m=>`<button class="mode-btn" data-mode="${m.id}"><strong>${m.title}</strong><span>${m.desc}</span></button>`).join("")}</div>`;document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>startGame(lesson,b.dataset.mode));toggleModal(true)}
function choices(q,i){let nums;if(q.answer.includes("/")){nums=[q.answer,q.answer.replace("/","÷"),"غلط","نامعلوم"]}else if(q.answer.includes("٪")){const n=Number(q.answer.replace("٪",""));nums=[q.answer,`${n+5}٪`,`${Math.max(0,n-5)}٪`,`${n+10}٪`]}else{const n=Number(q.answer);nums=[q.answer,String(n+1),String(n-1),String(n+(i%2?2:3))]}return [...new Set(nums)].sort(()=>Math.random()-.5)}
function startGame(lesson,mode){if(state.timer){clearInterval(state.timer);state.timer=null}state.quiz={lesson,mode,questions:make30(lesson).sort(()=>Math.random()-.5),index:0,score:0,streak:0,best:0,locked:false,seconds:30};showGameQuestion();if(mode==="timed")state.timer=setInterval(()=>{const z=state.quiz;if(!z)return;z.seconds--;const el=document.getElementById("timer");if(el)el.textContent=`مانده: ${fa(z.seconds)} ثانیه`;if(z.seconds<=0){clearInterval(state.timer);state.timer=null;nextQuestion(true)}},1000);toggleModal(true)}
function showGameQuestion(){const z=state.quiz;if(z.index>=30){finishGame();return}z.locked=false;const q=z.questions[z.index];document.getElementById("modalBody").innerHTML=`<h2>${modes.find(m=>m.id===z.mode).title}: ${z.lesson.title}</h2><div class="quiz-top"><span>پرسش ${fa(z.index+1)} از ۳۰ · امتیاز ${fa(z.score)}</span>${z.mode==="timed"?`<span class="timer" id="timer">مانده: ۳۰ ثانیه</span>`:""}</div><div class="quiz-card"><p class="quiz-question">${q.text}</p><div class="choice-list">${choices(q,z.index).map(c=>`<button class="choice-btn" data-choice="${c}">${c}</button>`).join("")}</div><p id="feedback" class="feedback"></p><button class="small-btn primary" id="nextQuestion" disabled>${z.index===29?"دیدن نتیجه":"پرسش بعدی"}</button></div>`;document.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>answerGame(b,q));document.getElementById("nextQuestion").onclick=()=>nextQuestion(false)}
function answerGame(button,q){const z=state.quiz;if(z.locked)return;z.locked=true;const ok=button.dataset.choice===q.answer,f=document.getElementById("feedback");if(ok){z.score++;z.streak++;z.best=Math.max(z.best,z.streak);f.className="feedback correct";f.textContent=z.mode==="exam"?"پاسخ ثبت شد.":`درست است! ${q.explain}`}else{z.streak=0;f.className="feedback wrong";f.textContent=z.mode==="exam"?"پاسخ ثبت شد.":`پاسخ درست ${q.answer} است. ${q.explain}`}document.querySelectorAll("[data-choice]").forEach(b=>b.disabled=true);document.getElementById("nextQuestion").disabled=false}
function nextQuestion(timeout){const z=state.quiz;if(timeout){z.streak=0;const f=document.getElementById("feedback");if(f){f.className="feedback wrong";f.text="وقت تمام شد"}}z.index++;z.seconds=30;showGameQuestion()}
function finishGame(){if(state.timer){clearInterval(state.timer);state.timer=null}const z=state.quiz,p=progress();p.points+=z.score;p.best[z.lesson.id]=Math.max(p.best[z.lesson.id]||0,z.score);if(z.score>=24&&!p.completed.includes(z.lesson.id))p.completed.push(z.lesson.id);saveProgress(p);renderTop();document.getElementById("modalBody").innerHTML=`<h2>بازی تمام شد 🎉</h2><div class="quiz-card"><p>امتیاز: <strong>${fa(z.score)} از ۳۰</strong></p><p>بهترین زنجیرهٔ پاسخ درست: ${fa(z.best)}</p><p>${z.score>=24?"بسیار عالی! درس را خوب آموخته‌ای.":"خوب بود؛ درسنامه را مرور کن و دوباره تمرین کن."}</p><button class="small-btn primary" id="again">انتخاب بازی دوباره</button></div>`;document.getElementById("again").onclick=()=>showModes(z.lesson)}

function showProfile(){const old=state.profile||{name:"",grade:7};document.getElementById("modalBody").innerHTML=`<h2>پروفایل شاگرد</h2><form class="form-grid" id="profileForm"><label>نام شاگرد<input name="name" maxlength="35" required value="${old.name}"></label><label>صنف<select name="grade">${grades.map(g=>`<option value="${g}" ${Number(old.grade)===g?"selected":""}>${gradeNames[g]}</option>`).join("")}</select></label><button class="small-btn primary" type="submit">ذخیره</button></form>`;document.getElementById("profileForm").onsubmit=e=>{e.preventDefault();const fd=new FormData(e.currentTarget);state.profile={name:fd.get("name").trim(),grade:Number(fd.get("grade")};state.grade=state.profile.grade;localStorage.setItem(profileKey,JSON.stringify(state.profile));toggleModal(false);render()};toggleModal(true)}
function toggleModal(open){const m=document.getElementById("modal");m.classList.toggle("hidden",!open);m.setAttribute("aria-hidden",String(!open))}
document.addEventListener("click",e=>{if(e.target.closest("[data-close]")){toggleModal(false);if(state.timer){clearInterval(state.timer);state.timer=null}}});document.getElementById("profileButton").onclick=showProfile;
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
if(!state.profile)showProfile();else{state.grade=state.profile.grade;render()}
