const templates={arrival:'大家好，今天有芭樂，謝謝大家照顧 😊\n\n📅 日期：【月／日】\n🕒 時間：【開始～結束】\n📍 地點：【北屯的實際攤位位置或明顯地標】\n🍐 品項：【今天實際販售的芭樂】\n💰 售價：【金額＋每台斤／每顆／每袋】\n\n有喜歡的口感，來攤上跟我說，我幫你挑。\n照片是今天拍的，數量以現場為準，售完會再通知。\n想吃再來就好！',welcome:'大家好，歡迎來坐 👋\n\n這裡是【攤位名稱】的出攤通知小天地。\n會分享出攤時間、地點和當天的芭樂。\n先試每週兩則通知，有變動才另外補充。\n\n請不要貼無關廣告，也不要公開電話、地址。\n需要預留或詢問，請用【老闆另行提供的聯絡方式】私訊確認；完成確認才算預留成功。\n\n不強迫買、不必幫忙轉傳，想吃時再來找我就好！',soldout:'今天的【品項】已經賣完囉，謝謝大家照顧 🙏\n\n其他品項：【依現場填寫，或寫今日全部售完】\n下次出攤：【確定的日期、時間與地點；未確定就寫另行通知】\n\n已經私下確認預留的客人，請依約定時間取貨。\n謝謝大家，也請別白跑一趟。'};
let selected='arrival';const panel=document.getElementById('template-panel');panel.textContent=templates[selected];const tabs=[...document.querySelectorAll('[data-template]')];function activate(tab){selected=tab.dataset.template;tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1});panel.textContent=templates[selected];panel.setAttribute('aria-labelledby',tab.id);document.getElementById('copy-status').textContent=''}tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();activate(tabs[next]);tabs[next].focus()}})});
document.getElementById('copy-button').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText(templates[selected]);status.textContent='已複製！貼到 LINE 前，記得改好【括號】。'}catch{const range=document.createRange();range.selectNodeContents(panel);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='已選取文字。請長按文字，選「複製」。'}});
const checks=[...document.querySelectorAll('[data-check]')];function progress(){const n=checks.filter(c=>c.checked).length;document.getElementById('progress').textContent=n===4?'四件事都完成了，做得很好！下週再看看客人的回饋。':`本週已完成 ${n}／4 件事，一步一步來。`}checks.forEach(c=>{try{c.checked=localStorage.getItem('guava-check-'+c.dataset.check)==='true'}catch{}c.addEventListener('change',()=>{try{localStorage.setItem('guava-check-'+c.dataset.check,String(c.checked))}catch{}progress()})});progress();

// 每一步只顯示一個動作；保留在本機，切換到 LINE 再回來也能接著練。
const guides={
create:{name:'建立自己的社群',steps:[
['先打開 LINE','在手機桌面找到綠色的 LINE 圖示，點一下。','這一步只要進到 LINE，不用打字，也不用刪掉原本的群組。','看見平常聊天的 LINE 畫面，就完成了。'],
['找到「社群」入口','先點 LINE 底部的「主頁」，找「社群」並點進去。','有些版本要先點「服務」旁的「顯示更多」。也可到「聊天」頁找建立聊天的圖示，看有沒有「社群」選項。','看見社群首頁才繼續；若找不到，先更新 LINE 或看官方說明，不要用一般「建立群組」代替。'],
['找到建立社群的按鈕','在社群首頁找「建立社群」或建立用的「＋」，點一下。','若出現使用條款，請先閱讀；同意才繼續。畫面上的建立按鈕可能因版本不同而改位置。','看見要填社群名稱、說明或照片的畫面，就完成了。'],
['先把社群名字寫好','點「社群名稱」的欄位，輸入一個客人看得懂的名字。','可以用：北屯芭樂｜今日出攤通知。這是名稱建議，不代表地址或營業資訊已確認。','名稱有「北屯」「芭樂」，客人比較容易認得。先不用按最後的建立。'],
['選一張社群封面','點圖片或相機圖示，依畫面選「相簿」或照片，挑一張自己的攤位或芭樂照片。','手機若詢問照片權限，可依需要允許選取的照片。調整圖片範圍，再按畫面上的完成／確認。','照片看得清楚、沒有客人的臉或私人資料，就可以。'],
['把用途寫在介紹裡','點「簡介／說明」欄位，寫清楚這裡是做什麼的。','建議文字：這裡分享北屯芭樂攤的出攤時間、地點與當日品項。不貼無關廣告，不公開電話地址。','其他必填項目依畫面填寫；分類選最符合用途的一項，不確定的選填項目可先不填。'],
['選在社群裡用的名字和照片','依畫面設定社群專用暱稱與頭像，再按建立／完成。','暱稱可寫「芭樂攤老闆」。這是社群裡讓人認得你的名字，與私人 LINE 檔案分開設定。','看見剛建立的社群聊天室，就完成了；實際填寫順序可能依版本不同。'],
['先看看加入方式','在社群聊天室右上角打開選單，找設定中的「加入方式／社群類型」等相關項目。','若要審核加入，選畫面提供的核准方式，問題可寫「你想收到哪裡的出攤消息？」。記得儲存。不要把公開搜尋與加入審核當成同一項設定。','如果選用審核，之後要定期查看加入申請；找不到選項就先看官方說明，不要猜著開關。'],
['先放一則歡迎詞','到本頁下方選「新朋友歡迎詞」，按「複製這段文字」，再回 LINE 的社群。','點文字輸入框 → 長按 → 貼上 → 把【括號】改好 → 檢查 → 按傳送。不要把教學用的【括號】直接傳出去。','先發好一則介紹用途的訊息；下一堂再練習公告與邀請。'],
['先試用，再邀客人','留在自己的社群，檢查名字、照片與歡迎詞是否清楚。','建立完成了！下一堂可選「發第一則圖文」，再練習邀請願意接收通知的客人。','今天先做到這裡也很好。原本的群組可以保留，不用一次搬完。']
]},
post:{name:'發第一則圖文',steps:[
['先拍一張今天的芭樂','用手機相機，拍今天實際要賣的芭樂。','先擦一下鏡頭，在光線明亮的地方拍；一張清楚的照片就好。留意不要拍進客人的臉、車牌或電話。','相簿裡看得到今天的新照片，就完成了。'],
['先把通知文字複製起來','往本頁下方找到「出攤通知」，按「複製這段文字」。','看到「已複製」才切到 LINE。尚未按複製前，不會自動帶入 LINE，也不會自動傳送。','先準備文字；等一下再放照片。'],
['進到正確的聊天室','切到 LINE，在聊天清單點自己的芭樂社群。','進去後先看上方名稱，確認不是私人朋友的對話，也不是其他群組。','上面顯示自己的社群名稱，再繼續。'],
['把文字貼到輸入框','點聊天室最下方的文字輸入框，長按一下，出現選單後按「貼上」。','這時文字還沒傳出去。若沒有出現貼上，回網站再複製一次。','看見整段通知出現在輸入框，先不要按傳送。'],
['把【括號】換成今天的資訊','在輸入框修改日期、營業時間、地點、品項與價格，刪掉所有教學用的【括號】。','價錢記得寫單位，例如「每台斤」「每顆」「每袋」。日期不確定先看手機日曆；不必硬加星期幾。','每個欄位都有真實資訊，並確認取貨方式；不確定的商品描述先不寫。'],
['先傳清楚的文字通知','再讀一次日期、時間、地點與售價，確認後按傳送鍵。','表情符號已經在範本裡，不必另外買貼圖。這一步先把文字傳好。','文字出現在聊天室裡，才表示已經送出。'],
['打開照片選擇畫面','在聊天室輸入框旁找照片／相簿圖示；若沒看到，可點「＋」找照片。','進入相簿後，找到剛剛拍的照片。不同手機的照片圖示與位置可能不同。','看見自己手機裡的照片縮圖，就完成了。'],
['只選今天要傳的那一張','點今天照片的勾選圓圈，確認只選到需要的照片，再按傳送。','這個教學先用「一則文字＋一張照片」。不用先學拼圖、修圖或一次傳很多張。','照片出現在文字通知附近，客人就能對照看。'],
['再看一次客人會看到的內容','看聊天室：文字、照片都清楚嗎？地點和價錢找得到嗎？','若照片不是今天拍的，文字要改成「攤位示意／之前拍攝」，不要寫成今天拍的。','若資訊打錯，補一則「更正：……」，清楚寫出正確內容。重要資訊不要只靠刪掉舊訊息處理。'],
['今天先這樣就夠了','不用再補很多張貼圖，也不用逐一點名要大家回覆。','有客人提問就親切回答；涉及電話、地址或預留確認，改用另外提供的私人聯絡方式。','第一則圖文完成！下次只要更新日期、品項、價錢與照片，不必從頭想。']
]},
manage:{name:'邀客人、顧社群',steps:[
['先問客人願不願意','攤位結帳後，可以問：「要不要收出攤通知？你有需要再加入就好。」','先問再邀，不必拿客人的手機操作，也不要把不相干的客人強行加進來。','客人願意，再進下一步；不想加入也照常招呼。'],
['找到邀請連結或 QR Code','打開自己的社群，點右上角選單，找「邀請／邀請成員」。','依畫面選擇 QR Code 或分享連結。不是自己個人 LINE 的加好友 QR Code。','確認畫面顯示的是這個芭樂社群的名稱。'],
['讓客人自己加入','面對面時，讓客人用 LINE 的掃描功能掃社群 QR Code；遠端則把邀請連結傳給願意的人。','若有設定審核，要回到社群管理選單查看加入申請，確認後才核准。若連結失效，再從社群取得新連結。','加入社群不等於成為私人 LINE 好友，也不等於已經下單。'],
['讓新朋友容易看到規則','在社群找到已發的歡迎詞，長按該訊息，查看是否有「設為公告」的功能。','若版本沒有同樣的選項，可找聊天室選單裡的「記事本」，用「＋／新增」貼上規則並儲存；用你手機實際提供的功能即可。','從公告或記事本打開看看，確定規則真的找得到，不是只有自己知道放在哪。'],
['看訊息、回問題','客人問價錢、口感或出攤地點，先回答那個問題。','可以說：「今天【金額＋單位】，喜歡脆一點或軟一點呢？」依實際商品回答，不用先連傳一串照片。','不確定庫存就說「我先幫你確認」，確認後再回覆。'],
['遇到預留，私下確認','請客人透過你另外提供的私人聯絡方式，確認品項、數量、價格及取貨時間。','可在社群說明如何找到你，或請客人到攤位索取聯絡方式。不要以為點社群暱稱就一定能私訊或加好友。','收到詢問不等於預留成功；雙方確認後再記錄。不要在社群公開客人的電話地址。'],
['收攤前更新售完消息','若當天已售完，到本頁選「售完通知」，複製並改好，再回社群貼上傳送。','若只有某一種賣完，就只寫那一種。補上確定的下次時間，還沒確定就寫「另行通知」。','讓客人不白跑，比繼續催大家來買更貼心。'],
['不用每天都做活動','先試每週兩則完整通知；遇到停攤、改地點或售完，再補必要消息。','這是起步的試法，不是固定規定。若客人希望每天收到，可先問大家偏好，再調整。','觀察是否有人真的參考通知來買，不只看回覆數。'],
['遇到廣告，先依規則處理','先提醒「這裡只分享芭樂與出攤資訊，請勿貼無關廣告」。','再依社群提供的管理功能刪除違規內容或處理成員；必要時使用檢舉。設定名稱依版本而異。','處理內容即可，不公開羞辱、貼出私訊或個人資料。'],
['每週問一次自己：有更方便嗎？','回想這週客人最常問什麼，把答案加進下次通知。','例如大家常問單位，就把「每台斤／每顆」寫明；常找不到攤，就補明顯地標。','經營就是慢慢補齊資訊。你熟悉客人的需要，手機只是幫你把話傳出去。']
]}};
let guideKey='create',guideIndex=0;try{const saved=JSON.parse(localStorage.getItem('guava-guide'));if(saved&&guides[saved.key]&&Number.isInteger(saved.index)&&saved.index>=0&&saved.index<guides[saved.key].steps.length){guideKey=saved.key;guideIndex=saved.index}}catch{}
function renderGuide(focus=false){const guide=guides[guideKey],step=guide.steps[guideIndex];document.getElementById('guide-count').textContent=`第 ${guideIndex+1}／${guide.steps.length} 步`;document.getElementById('guide-topic').textContent=guide.name;document.getElementById('guide-progress').max=guide.steps.length;document.getElementById('guide-progress').value=guideIndex+1;document.getElementById('guide-title').textContent=step[0];document.getElementById('guide-action').textContent=step[1];document.getElementById('guide-example').textContent=step[2];document.getElementById('guide-check').textContent='✓ 做好後確認：'+step[3];document.getElementById('guide-back').disabled=guideIndex===0;document.getElementById('guide-next').textContent=guideIndex===guide.steps.length-1?'這一堂完成了 ✓':'做好了，下一步 →';document.getElementById('guide-next').disabled=guideIndex===guide.steps.length-1;document.getElementById('guide-end').textContent=guideIndex===guide.steps.length-1?'可以休息一下，或從上方選另一堂。想重看就按「上一步」，也可點同一堂從頭練。':'進度只保存在這個瀏覽器；你做完再按，不會自動幫你操作 LINE。';document.querySelectorAll('[data-guide]').forEach(b=>{b.classList.toggle('active',b.dataset.guide===guideKey);b.setAttribute('aria-pressed',String(b.dataset.guide===guideKey))});try{localStorage.setItem('guava-guide',JSON.stringify({key:guideKey,index:guideIndex}))}catch{}if(focus)document.getElementById('guide-title').focus({preventScroll:true})}
document.querySelectorAll('[data-guide]').forEach(b=>b.addEventListener('click',()=>{guideKey=b.dataset.guide;guideIndex=0;renderGuide(true)}));document.getElementById('guide-back').addEventListener('click',()=>{if(guideIndex>0){guideIndex--;renderGuide(true)}});document.getElementById('guide-next').addEventListener('click',()=>{if(guideIndex<guides[guideKey].steps.length-1){guideIndex++;renderGuide(true)}});renderGuide();
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const value=button.dataset.copy,status=document.getElementById('emoji-status'),fallback=document.getElementById('emoji-fallback');try{await navigator.clipboard.writeText(value);fallback.hidden=true;status.textContent=`已複製 ${value}。到 LINE 的文字輸入框長按，選「貼上」。`}catch{fallback.hidden=false;fallback.textContent=value;const range=document.createRange();range.selectNodeContents(fallback);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='請長按下方已選取的符號，再選「複製」。'}}));
