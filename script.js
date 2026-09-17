/* ==========================================================
   SMART PROCUREMENT ASSISTANT — SIH26032 working prototype
   Single file. DB layer isolated -> swap for Supabase later.
   ========================================================== */

/* ---------------- LANGUAGE ---------------- */
const T = {
en:{
 appTitle:"Smart Procurement Assistant", tagline:"Know before you go. Check your crop, compare centres, book a slot, track your payment.",
 contFarmer:"Continue as Farmer", contAdmin:"Continue as Centre Admin", chooseRole:"Who are you?",
 demoLogin:"Demo login — no password needed.", resetData:"Reset demo data", reset:"Reset",
 navHome:"Home", navCentres:"Centres", navQueue:"Queue", navStatus:"Status", navAlerts:"Alerts",
 aDash:"Dashboard", aQueue:"Queue", aFarmers:"Farmers", aCtrl:"Controls", aAnalytics:"Analytics",
 namaste:"Namaste", yourLocation:"Your location", edit:"Edit", myDetails:"My Details",
 name:"Name", mobile:"Mobile number", farmerId:"Farmer ID", location:"Location",
 detect:"Detect", orChoose:"Or choose your district and area", selectDistrict:"Select district",
 selectArea:"Select area", gpsHelp:"If GPS does not work, just pick your district below. Nothing will stop.", save:"Save", saved:"Details saved",
 detecting:"Finding your location…", located:"Location found", gpsDenied:"Location permission not given — please choose your district below.", noGps:"GPS is not available — please choose your district below.",
 myCrop:"My Crop", preCheck:"Crop Pre-Check", nearby:"Nearby Centres", compare:"Compare", bestCentre:"Best Centre",
 bookSlot:"Book a Slot", myProc:"My Procurement", payment:"Payment", notifications:"Notifications",
 sub_crop:"Crop and quantity", sub_pre:"Check before you travel", sub_near:"Rate, queue, capacity",
 sub_cmp:"All centres side by side", sub_best:"See why it is best", sub_book:"Get your token",
 sub_proc:"Track every step", sub_pay:"Track your money",
 whichCrop:"Which crop?", qty:"Quantity (quintal)", optional:"optional", harvestDate:"Harvest date",
 todayBest:"Today's best demo rate", estValue:"Estimated Value", estNote:"Estimated Value only — the final amount is decided after quality check and weighment at the centre.",
 checkMyCrop:"Check My Crop", preHelp:"Answer in simple words. You do NOT need to know moisture percentage.", voiceInput:"Speak crop details", listening:"Listening…", voiceUnsupported:"Voice input is not supported in this browser.", voiceHelp:"Say a crop name and quantity, for example: wheat 50 quintal.",
 cropPhoto:"Crop photo", photoNote:"A photo cannot measure moisture. It only helps the centre staff.",
 qDry:"Is your crop dry?", qClean:"Does your crop look clean?", yes:"Yes", no:"No", dunno:"Don't know",
 autoLoc:"Your location (automatic)", result:"Pre-Check Result", why:"Why?", whatDo:"What should you do?",
 finalNote:"Final acceptance is decided at the procurement centre.",
 finalSub:"This is only an early warning to save you a wasted trip. It is not an official accept or reject.",
 findCentres:"Find Nearby Centres", fixedIt:"I fixed it — check again", seeAnyway:"See centres anyway",
 howDecided:"How was this decided?", engine:"Engine", riskScore:"Risk score", dryAns:"Dry answer", cleanAns:"Clean answer",
 rulesNote:"Rules-based prototype logic. An ML model can replace this later without changing any screen.",
 myDistrict:"My district", allDistricts:"All districts", otherDistrict:"Sell in another district",
 otherNote:"You can also sell in another district. Far centres may pay more, but travel and waiting cost you too — the score already includes this.",
 compareAll:"Compare all", todaysRate:"Today's rate", distance:"Distance", queue:"Queue", capacity:"Capacity",
 estWait:"Estimated waiting", risk:"Acceptance risk", nowServing:"Now serving token", farmersWaiting:"Farmers waiting",
 remainCap:"Remaining capacity today", bookHere:"Book here", whyOrder:"Why this order?",
 demoData:"Demo data — built so a real mandi rate API can be connected later.",
 noCalc:"You do not need to calculate anything. The list is already sorted by overall benefit.",
 seeRec:"See Recommended Centre", recommended:"Recommended", whyCentre:"Why this centre?",
 fullScore:"Show the full score calculation", overall:"Overall score", weight:"weight", transparency:"Recommendation transparency", fairness:"Fair comparison", fairnessNote:"Every centre is scored using the same published factors. No centre can pay to rank higher.", scoreFactor:"Score factor", contribution:"Contribution",
 priceNote:"Highest price alone does not win. A centre with the top rate can still lose on distance, queue or capacity.",
 bookHereBtn:"Book Slot Here", seeAll:"See all centres again", runnerUp:"Next best centres",
 centre:"Centre", today:"Today", tomorrow:"Tomorrow", qtyBring:"Quantity you will bring (quintal)",
 confirmBooking:"Confirm Booking", slotLimit:"Slots are limited by the centre's real remaining capacity.",
 busyTitle:"Centre is currently busy", busySub:"Today's slots are full. Book tomorrow, or choose another centre.",
 tryInstead:"Try this centre instead", noSlotsToday:"No slots left today.",
 bookingConfirmed:"Booking Confirmed", token:"Token number", bookingId:"Booking ID", dateTime:"Date & time",
 viewQueue:"View Live Queue", backHome:"Back to Home", farmer:"Farmer", crop:"Crop",
 liveQueue:"Live Queue", yourToken:"Your token", currentlyServing:"Currently serving", ahead:"Farmers ahead",
 avgTime:"Average time per farmer", queueAuto:"This updates the moment the centre admin moves the queue.",
 refresh:"Refresh", procStatus:"Procurement Status", yourTurn:"Your turn has arrived", goCounter:"Please go to the counter at",
 aheadTxt:"farmers ahead of you", noBooking:"You have no booking yet.", journey:"Journey",
 receipt:"Digital Weighment Receipt", gross:"Gross weight", tare:"Tare weight", net:"Net weight", rate:"Rate", amount:"Amount", downloadReceipt:"Download receipt", receiptDownloaded:"Receipt downloaded",
 payTracker:"Payment Tracker", payCredited:"Amount credited to your bank account", payStatus:"Status", liveSync:"Live sync enabled", analyticsTitle:"Centre analytics", totalBookings:"Total bookings", utilization:"Capacity used", acceptanceRate:"Acceptance rate", avgWait:"Average wait", revenueTracked:"Value tracked",
 paySim:"Payment status is simulated for this prototype. No real government payment system is connected.",
 fromReceipt:"Amount taken from the digital weighment receipt.",
 noNotif:"No notifications yet.", clearAll:"Clear all", cleared:"Notifications cleared",
 nothingTrack:"Nothing to track yet. Book a slot first.",
 preSaid:"Your pre-check said", stillBook:"You can still book, but fix the issue before travelling.",
 // admin
 centreAdmin:"Centre Admin", todayCap:"Today's Capacity", dailyCap:"Daily capacity (quintal)",
 usedCap:"Booked / used", remaining:"Remaining", slotsOpen:"Slots open today", completed:"Completed", waitingN:"Waiting",
 resources:"Resources", staff:"Staff", machines:"Weighing machines", trucks:"Trucks", bags:"Storage bags",
 currentToken:"Current token", procTime:"Est. processing time", manageQueue:"Manage queue",
 procurement:"Procurement", accepted:"Accepted", rejected:"Rejected", pending:"Pending", totalQty:"Total quantity (qtl)",
 queueControl:"Queue Control", callNext:"Call Next Token", prev:"Previous", setToken:"Set current token directly", set:"Set",
 lastToken:"Last issued token", avgMin:"Average time per farmer (minutes)",
 queueNote:"Changing the token instantly updates every farmer's Live Queue and sends a notification.",
 tokensHere:"Tokens booked here", noBookings:"No bookings yet.",
 farmersProc:"Farmers & Procurement", markArrived:"Mark Arrived", qcTitle:"Quality Check (official)",
 failReason:"If failing, choose the reason", pass:"PASS", fail:"FAIL",
 qcNote:"This is the official check. The farmer's pre-check was only an early warning.",
 weighTitle:"Digital Weighment", saveWeigh:"Save Weighment & Generate Receipt",
 markProc:"Mark Procurement Completed", initPay:"Initiate Payment", markCredited:"Mark Payment Credited",
 advPay:"Advance payment step", journeyDone:"Journey complete", noFarmers:"No farmers have booked here yet. Switch to the Farmer app and book a slot.",
 adminCtrl:"Admin Controls", liveNote:"Every change here is instantly visible in the farmer app — this is a live prototype, not a static mockup.",
 shownDist:"Distance shown to farmer (km)", cropRates:"Crop rates (₹ per quintal)", slotAvail:"Slot availability",
 slotRule:"Slots come from remaining capacity: Good → 6 slots, Medium → 3 slots, Low → centre shown as busy.",
 min:"min", hr:"h", km:"km", quintal:"quintal", perQ:"/quintal", low:"Low", medium:"Medium", high:"High", good:"Good",
 checking:"Checking your crop…", checkingSub:"Looking at dryness, cleanliness and harvest time",
 notDone:"Not done", kg:"kg",
 land:"Land (acres)", moisture:"Moisture % (only if you know it)",
 moistureNote:"Not required. Leave it empty if you do not know — the check still works.",
 acceptRisk:"Acceptance risk", acceptChance:"Acceptance chance",
 transport:"Transport cost", netBenefit:"Net benefit",
 netNote:"Net benefit = estimated value − transport cost. The recommendation uses this, not just the rate.",
 otpTitle:"Arrival OTP", otpShow:"Show this OTP at the centre gate", sendOtp:"Send arrival OTP",
 enterOtp:"Enter the farmer's OTP", verifyArr:"Verify & mark arrived", otpWrong:"OTP does not match",
 otpOk:"Identity verified", trace:"Farmer → Slot → Crop → Record",
 measured:"Measured moisture %", permitted:"Permitted limit", qcMeasured:"Measured",
 deduction:"Deduction (kg)", deductNote:"Every deduction is shown openly, never hidden.",
 automation:"Automation", autoLog:"Automation log", noAuto:"No automatic action yet.",
 autoNote:"These rules run by themselves. Nobody presses a button.",
 smsSent:"SMS / app notification sent", clearLog:"Clear log",
 about:"How it works", aboutBtn:"How does this work?", ourFlow:"The complete journey",
 innov:"Our 4 core innovations",
 i1:"Pre-arrival crop acceptance prediction", i1d:"Predict a likely rejection before the farmer travels. Prevents wasted trips.",
 i2:"Smart centre recommendation", i2d:"Price + distance + queue + capacity + acceptance risk combined into one clear answer.",
 i3:"Capacity-aware smart slotting", i3d:"Slots come from the centre's real processing capacity, not an open calendar.",
 i4:"End-to-end transparent tracking", i4d:"Slot → queue → quality → weighment → procurement → lifting → payment, with alerts.",
 pitchQ:"What exactly is this?",
 pitchA:"An intelligent procurement platform that helps a farmer choose the right centre and slot using crop acceptance, price, distance, queue and capacity — and then tracks the whole procurement and payment journey.",
 diffQ:"What is different?",
 diffA:"Other systems manage the queue. This one predicts the problem before the farmer enters the queue."
},
hi:{
 appTitle:"स्मार्ट खरीद सहायक", tagline:"जाने से पहले जानें। फसल जाँचें, केंद्र तुलना करें, स्लॉट बुक करें, भुगतान देखें।",
 contFarmer:"किसान के रूप में आगे बढ़ें", contAdmin:"केंद्र अधिकारी के रूप में आगे बढ़ें", chooseRole:"आप कौन हैं?",
 demoLogin:"डेमो लॉगिन — कोई पासवर्ड नहीं चाहिए।", resetData:"डेमो डेटा रीसेट करें", reset:"रीसेट",
 navHome:"होम", navCentres:"केंद्र", navQueue:"लाइन", navStatus:"स्थिति", navAlerts:"सूचना",
 aDash:"डैशबोर्ड", aQueue:"लाइन", aFarmers:"किसान", aCtrl:"नियंत्रण", aAnalytics:"विश्लेषण",
 namaste:"नमस्ते", yourLocation:"आपका स्थान", edit:"बदलें", myDetails:"मेरी जानकारी",
 name:"नाम", mobile:"मोबाइल नंबर", farmerId:"किसान आईडी", location:"स्थान",
 detect:"पता लगाएँ", orChoose:"या अपना ज़िला और क्षेत्र चुनें", selectDistrict:"ज़िला चुनें",
 selectArea:"क्षेत्र चुनें", gpsHelp:"अगर GPS काम न करे तो नीचे से अपना ज़िला चुन लें। कुछ नहीं रुकेगा।", save:"सहेजें", saved:"जानकारी सहेजी गई",
 detecting:"आपका स्थान खोजा जा रहा है…", located:"स्थान मिल गया", gpsDenied:"लोकेशन की अनुमति नहीं मिली — नीचे से ज़िला चुनें।", noGps:"GPS उपलब्ध नहीं है — नीचे से ज़िला चुनें।",
 myCrop:"मेरी फसल", preCheck:"फसल पूर्व-जाँच", nearby:"पास के केंद्र", compare:"तुलना करें", bestCentre:"सबसे अच्छा केंद्र",
 bookSlot:"स्लॉट बुक करें", myProc:"मेरी खरीद", payment:"भुगतान", notifications:"सूचनाएँ",
 sub_crop:"फसल और मात्रा", sub_pre:"जाने से पहले जाँचें", sub_near:"भाव, लाइन, क्षमता",
 sub_cmp:"सभी केंद्र एक साथ", sub_best:"क्यों सबसे अच्छा, देखें", sub_book:"अपना टोकन लें",
 sub_proc:"हर कदम देखें", sub_pay:"अपना पैसा देखें",
 whichCrop:"कौन सी फसल?", qty:"मात्रा (क्विंटल)", optional:"ज़रूरी नहीं", harvestDate:"कटाई की तारीख",
 todayBest:"आज का सबसे अच्छा डेमो भाव", estValue:"अनुमानित मूल्य", estNote:"यह केवल अनुमान है — अंतिम राशि केंद्र पर गुणवत्ता जाँच और तौल के बाद तय होती है।",
 checkMyCrop:"मेरी फसल जाँचें", preHelp:"आसान शब्दों में जवाब दें। नमी प्रतिशत जानना ज़रूरी नहीं है।", voiceInput:"फसल की जानकारी बोलें", listening:"सुना जा रहा है…", voiceUnsupported:"इस ब्राउज़र में आवाज़ से इनपुट उपलब्ध नहीं है।", voiceHelp:"फसल और मात्रा बोलें, जैसे: गेहूँ 50 क्विंटल।",
 cropPhoto:"फसल की फोटो", photoNote:"फोटो से नमी नहीं मापी जा सकती। यह केवल केंद्र के कर्मचारियों की मदद करती है।",
 qDry:"क्या आपकी फसल सूखी है?", qClean:"क्या आपकी फसल साफ़ दिखती है?", yes:"हाँ", no:"नहीं", dunno:"पता नहीं",
 autoLoc:"आपका स्थान (अपने आप)", result:"जाँच का नतीजा", why:"क्यों?", whatDo:"आपको क्या करना चाहिए?",
 finalNote:"अंतिम स्वीकृति खरीद केंद्र पर ही तय होती है।",
 finalSub:"यह केवल पहले से चेतावनी है ताकि आपका चक्कर बेकार न जाए। यह आधिकारिक स्वीकार या अस्वीकार नहीं है।",
 findCentres:"पास के केंद्र देखें", fixedIt:"मैंने ठीक कर लिया — फिर जाँचें", seeAnyway:"फिर भी केंद्र देखें",
 howDecided:"यह कैसे तय हुआ?", engine:"इंजन", riskScore:"जोखिम स्कोर", dryAns:"सूखा जवाब", cleanAns:"साफ़ जवाब",
 rulesNote:"नियम-आधारित प्रोटोटाइप लॉजिक। बाद में ML मॉडल बिना स्क्रीन बदले जोड़ा जा सकता है।",
 myDistrict:"मेरा ज़िला", allDistricts:"सभी ज़िले", otherDistrict:"दूसरे ज़िले में बेचें",
 otherNote:"आप दूसरे ज़िले में भी बेच सकते हैं। दूर के केंद्र ज़्यादा भाव दे सकते हैं, पर सफ़र और इंतज़ार भी लागत है — स्कोर में यह पहले से जुड़ा है।",
 compareAll:"सब तुलना करें", todaysRate:"आज का भाव", distance:"दूरी", queue:"लाइन", capacity:"क्षमता",
 estWait:"अनुमानित इंतज़ार", risk:"अस्वीकार का जोखिम", nowServing:"अभी चल रहा टोकन", farmersWaiting:"इंतज़ार कर रहे किसान",
 remainCap:"आज बची क्षमता", bookHere:"यहाँ बुक करें", whyOrder:"यह क्रम क्यों?",
 demoData:"डेमो डेटा — असली मंडी भाव API बाद में जोड़ी जा सकती है।",
 noCalc:"आपको कुछ गिनने की ज़रूरत नहीं। सूची पहले से कुल फ़ायदे के हिसाब से लगी है।",
 seeRec:"सुझाया गया केंद्र देखें", recommended:"सुझाया गया", whyCentre:"यह केंद्र क्यों?",
 fullScore:"पूरा स्कोर हिसाब देखें", overall:"कुल स्कोर", weight:"भार", transparency:"सुझाव की पारदर्शिता", fairness:"निष्पक्ष तुलना", fairnessNote:"हर केंद्र को समान प्रकाशित मापदंडों से स्कोर किया जाता है। कोई केंद्र पैसे देकर ऊपर नहीं आ सकता।", scoreFactor:"स्कोर मापदंड", contribution:"योगदान",
 priceNote:"सिर्फ़ सबसे ज़्यादा भाव से नहीं जीतता। ज़्यादा भाव वाला केंद्र दूरी, लाइन या क्षमता में पिछड़ सकता है।",
 bookHereBtn:"यहाँ स्लॉट बुक करें", seeAll:"सभी केंद्र फिर देखें", runnerUp:"अगले अच्छे केंद्र",
 centre:"केंद्र", today:"आज", tomorrow:"कल", qtyBring:"आप कितना लाएँगे (क्विंटल)",
 confirmBooking:"बुकिंग पक्की करें", slotLimit:"स्लॉट केंद्र की असली बची क्षमता से ही मिलते हैं।",
 busyTitle:"केंद्र अभी व्यस्त है", busySub:"आज के स्लॉट भर गए हैं। कल बुक करें या दूसरा केंद्र चुनें।",
 tryInstead:"इसके बदले यह केंद्र देखें", noSlotsToday:"आज कोई स्लॉट नहीं बचा।",
 bookingConfirmed:"बुकिंग पक्की हुई", token:"टोकन नंबर", bookingId:"बुकिंग आईडी", dateTime:"तारीख़ और समय",
 viewQueue:"लाइव लाइन देखें", backHome:"होम पर जाएँ", farmer:"किसान", crop:"फसल",
 liveQueue:"लाइव लाइन", yourToken:"आपका टोकन", currentlyServing:"अभी चल रहा है", ahead:"आपसे आगे किसान",
 avgTime:"प्रति किसान औसत समय", queueAuto:"जैसे ही केंद्र अधिकारी लाइन आगे बढ़ाते हैं, यह अपने आप बदल जाता है।",
 refresh:"फिर से देखें", procStatus:"खरीद स्थिति", yourTurn:"आपकी बारी आ गई", goCounter:"कृपया काउंटर पर जाएँ —",
 aheadTxt:"किसान आपसे आगे हैं", noBooking:"अभी आपकी कोई बुकिंग नहीं है।", journey:"पूरी यात्रा",
 receipt:"डिजिटल तौल रसीद", gross:"कुल वज़न", tare:"खाली वज़न", net:"शुद्ध वज़न", rate:"भाव", amount:"राशि", downloadReceipt:"रसीद डाउनलोड करें", receiptDownloaded:"रसीद डाउनलोड हो गई",
 payTracker:"भुगतान ट्रैकर", payCredited:"राशि आपके बैंक खाते में आ गई", payStatus:"स्थिति", liveSync:"लाइव सिंक चालू", analyticsTitle:"केंद्र विश्लेषण", totalBookings:"कुल बुकिंग", utilization:"उपयोग की गई क्षमता", acceptanceRate:"स्वीकृति दर", avgWait:"औसत इंतज़ार", revenueTracked:"दर्ज राशि",
 paySim:"इस प्रोटोटाइप में भुगतान की स्थिति नकली है। कोई असली सरकारी भुगतान सिस्टम नहीं जुड़ा है।",
 fromReceipt:"राशि डिजिटल तौल रसीद से ली गई है।",
 noNotif:"अभी कोई सूचना नहीं।", clearAll:"सब हटाएँ", cleared:"सूचनाएँ हटा दी गईं",
 nothingTrack:"अभी कुछ ट्रैक करने को नहीं। पहले स्लॉट बुक करें।",
 preSaid:"आपकी पूर्व-जाँच ने कहा", stillBook:"आप फिर भी बुक कर सकते हैं, पर जाने से पहले समस्या ठीक करें।",
 centreAdmin:"केंद्र अधिकारी", todayCap:"आज की क्षमता", dailyCap:"दैनिक क्षमता (क्विंटल)",
 usedCap:"बुक / उपयोग", remaining:"बची", slotsOpen:"आज खुले स्लॉट", completed:"पूरे हुए", waitingN:"इंतज़ार में",
 resources:"संसाधन", staff:"कर्मचारी", machines:"तौल मशीन", trucks:"ट्रक", bags:"बोरी/भंडारण",
 currentToken:"वर्तमान टोकन", procTime:"अनुमानित समय", manageQueue:"लाइन संभालें",
 procurement:"खरीद", accepted:"स्वीकृत", rejected:"अस्वीकृत", pending:"बाकी", totalQty:"कुल मात्रा (क्विं.)",
 queueControl:"लाइन नियंत्रण", callNext:"अगला टोकन बुलाएँ", prev:"पिछला", setToken:"वर्तमान टोकन सीधे सेट करें", set:"सेट",
 lastToken:"आख़िरी जारी टोकन", avgMin:"प्रति किसान औसत समय (मिनट)",
 queueNote:"टोकन बदलते ही हर किसान की लाइव लाइन बदल जाती है और सूचना चली जाती है।",
 tokensHere:"यहाँ बुक टोकन", noBookings:"अभी कोई बुकिंग नहीं।",
 farmersProc:"किसान और खरीद", markArrived:"पहुँचा हुआ दर्ज करें", qcTitle:"गुणवत्ता जाँच (आधिकारिक)",
 failReason:"फेल करने पर कारण चुनें", pass:"पास", fail:"फेल",
 qcNote:"यह आधिकारिक जाँच है। किसान की पूर्व-जाँच सिर्फ़ चेतावनी थी।",
 weighTitle:"डिजिटल तौल", saveWeigh:"तौल सहेजें और रसीद बनाएँ",
 markProc:"खरीद पूरी दर्ज करें", initPay:"भुगतान शुरू करें", markCredited:"भुगतान जमा दर्ज करें",
 advPay:"भुगतान का अगला चरण", journeyDone:"यात्रा पूरी", noFarmers:"यहाँ अभी किसी किसान ने बुक नहीं किया। किसान ऐप में जाकर स्लॉट बुक करें।",
 adminCtrl:"अधिकारी नियंत्रण", liveNote:"यहाँ का हर बदलाव तुरंत किसान ऐप में दिखता है — यह जीवंत प्रोटोटाइप है, मॉकअप नहीं।",
 shownDist:"किसान को दिखने वाली दूरी (किमी)", cropRates:"फसल भाव (₹ प्रति क्विंटल)", slotAvail:"स्लॉट उपलब्धता",
 slotRule:"स्लॉट बची क्षमता से बनते हैं: अच्छी → 6, मध्यम → 3, कम → केंद्र व्यस्त दिखेगा।",
 min:"मिनट", hr:"घं", km:"किमी", quintal:"क्विंटल", perQ:"/क्विंटल", low:"कम", medium:"मध्यम", high:"ज़्यादा", good:"अच्छी",
 checking:"आपकी फसल जाँची जा रही है…", checkingSub:"सूखापन, सफ़ाई और कटाई का समय देखा जा रहा है",
 notDone:"नहीं हुई", kg:"किग्रा",
 land:"ज़मीन (एकड़)", moisture:"नमी % (सिर्फ़ तब जब पता हो)",
 moistureNote:"ज़रूरी नहीं। पता न हो तो खाली छोड़ दें — जाँच फिर भी चलेगी।",
 acceptRisk:"स्वीकृति जोखिम", acceptChance:"स्वीकार होने की संभावना",
 transport:"ढुलाई खर्च", netBenefit:"शुद्ध फ़ायदा",
 netNote:"शुद्ध फ़ायदा = अनुमानित मूल्य − ढुलाई खर्च। सुझाव इसी से बनता है, सिर्फ़ भाव से नहीं।",
 otpTitle:"पहुँच OTP", otpShow:"केंद्र के गेट पर यह OTP दिखाएँ", sendOtp:"पहुँच OTP भेजें",
 enterOtp:"किसान का OTP डालें", verifyArr:"जाँचें और पहुँचा दर्ज करें", otpWrong:"OTP मेल नहीं खाता",
 otpOk:"पहचान जाँच पूरी", trace:"किसान → स्लॉट → फसल → रिकॉर्ड",
 measured:"मापी गई नमी %", permitted:"अनुमत सीमा", qcMeasured:"मापी गई",
 deduction:"कटौती (किग्रा)", deductNote:"हर कटौती खुलकर दिखाई जाती है, छिपाई नहीं जाती।",
 automation:"स्वचालन", autoLog:"स्वचालन लॉग", noAuto:"अभी कोई स्वचालित कार्रवाई नहीं।",
 autoNote:"ये नियम अपने आप चलते हैं। कोई बटन नहीं दबाता।",
 smsSent:"SMS / ऐप सूचना भेजी गई", clearLog:"लॉग हटाएँ",
 about:"यह कैसे काम करता है", aboutBtn:"यह कैसे काम करता है?", ourFlow:"पूरी यात्रा",
 innov:"हमारे 4 मुख्य नवाचार",
 i1:"पहुँचने से पहले स्वीकृति की भविष्यवाणी", i1d:"किसान के जाने से पहले ही संभावित अस्वीकार का पता। बेकार चक्कर रुकते हैं।",
 i2:"स्मार्ट केंद्र सुझाव", i2d:"भाव + दूरी + लाइन + क्षमता + जोखिम — सबको मिलाकर एक साफ़ जवाब।",
 i3:"क्षमता-आधारित स्मार्ट स्लॉट", i3d:"स्लॉट केंद्र की असली क्षमता से बनते हैं, खुले कैलेंडर से नहीं।",
 i4:"शुरू से अंत तक पारदर्शी ट्रैकिंग", i4d:"स्लॉट → लाइन → गुणवत्ता → तौल → खरीद → उठान → भुगतान, सूचनाओं के साथ।",
 pitchQ:"यह असल में क्या है?",
 pitchA:"एक समझदार खरीद मंच जो किसान को फसल की स्वीकृति, भाव, दूरी, लाइन और क्षमता के आधार पर सही केंद्र और समय चुनने में मदद करता है — और फिर पूरी खरीद व भुगतान यात्रा दिखाता है।",
 diffQ:"अलग क्या है?",
 diffA:"बाकी सिस्टम लाइन संभालते हैं। यह सिस्टम किसान के लाइन में लगने से पहले ही समस्या बता देता है।"
}
};
let LANG = 'en';
const t = k => (T[LANG][k] !== undefined ? T[LANG][k] : (T.en[k] || k));
const L = o => (o && typeof o === 'object') ? (o[LANG] || o.en) : o;
function toggleLang(){
  LANG = LANG === 'en' ? 'hi' : 'en';
  document.body.className = LANG;
  try{ localStorage.setItem('spa_lang', LANG); }catch(e){}
  render(); toast(LANG==='hi' ? 'भाषा: हिन्दी' : 'Language: English');
}

/* ---------------- DATA LAYER (swap for Supabase) ---------------- */
const KEY = 'spa_sih26032_v2';
const DISTRICTS = [
  { id:'jaipur', name:{en:'Jaipur',hi:'जयपुर'}, lat:26.92, lng:75.79,
    areas:[{en:'Chomu',hi:'चौमूँ',lat:27.166,lng:75.723},{en:'Govindgarh',hi:'गोविंदगढ़',lat:27.31,lng:75.66},
           {en:'Renwal',hi:'रेनवाल',lat:26.99,lng:75.42},{en:'Kaladera',hi:'कालाडेरा',lat:27.33,lng:75.72},
           {en:'Amber',hi:'आमेर',lat:26.98,lng:75.85}] },
  { id:'sikar', name:{en:'Sikar',hi:'सीकर'}, lat:27.61, lng:75.14,
    areas:[{en:'Sikar City',hi:'सीकर शहर',lat:27.61,lng:75.14},{en:'Ringas',hi:'रींगस',lat:27.36,lng:75.57}] },
  { id:'dausa', name:{en:'Dausa',hi:'दौसा'}, lat:26.89, lng:76.34,
    areas:[{en:'Dausa City',hi:'दौसा शहर',lat:26.89,lng:76.34},{en:'Bandikui',hi:'बांदीकुई',lat:27.05,lng:76.57}] },
  { id:'ajmer', name:{en:'Ajmer',hi:'अजमेर'}, lat:26.45, lng:74.64,
    areas:[{en:'Kishangarh',hi:'किशनगढ़',lat:26.59,lng:74.86},{en:'Ajmer City',hi:'अजमेर शहर',lat:26.45,lng:74.64}] },
  { id:'tonk', name:{en:'Tonk',hi:'टोंक'}, lat:26.16, lng:75.79,
    areas:[{en:'Tonk City',hi:'टोंक शहर',lat:26.16,lng:75.79},{en:'Malpura',hi:'मालपुरा',lat:26.28,lng:75.37}] }
];

const SEED = () => ({
  session:{ role:null, farmerId:'F001', centreId:'C2' },
  crops:[
    { id:'wheat',  name:{en:'Wheat',hi:'गेहूँ'},    emoji:'🌾', dryDays:3, moistureLimit:12 },
    { id:'paddy',  name:{en:'Paddy',hi:'धान'},      emoji:'🌾', dryDays:4, moistureLimit:17 },
    { id:'mustard',name:{en:'Mustard',hi:'सरसों'},  emoji:'🌻', dryDays:3, moistureLimit:8 },
    { id:'gram',   name:{en:'Gram',hi:'चना'},       emoji:'🫘', dryDays:3, moistureLimit:12 },
    { id:'bajra',  name:{en:'Bajra',hi:'बाजरा'},    emoji:'🌾', dryDays:3, moistureLimit:12 }
  ],
  farmers:[{ id:'F001', name:'Ramesh Kumar', mobile:'98290 11223', farmerId:'RJ-JPR-4471', land:2.5,
             district:'jaipur', area:'Chomu', lat:27.166, lng:75.723 }],
  centres:[
    { id:'C1', name:{en:'Chomu Mandi (Centre A)',hi:'चौमूँ मंडी (केंद्र A)'}, district:'jaipur',
      area:{en:'Chomu, Jaipur',hi:'चौमूँ, जयपुर'}, lat:27.17, lng:75.73,
      rates:{wheat:2425,paddy:2300,mustard:5650,gram:5440,bajra:2625},
      currentToken:22, lastToken:52, avgMin:7, dailyCapacity:900, used:760,
      resources:{staff:6,machines:2,trucks:3,bags:1200}, acceptanceRisk:'Medium' },
    { id:'C2', name:{en:'Govindgarh Kendra (Centre B)',hi:'गोविंदगढ़ केंद्र (केंद्र B)'}, district:'jaipur',
      area:{en:'Govindgarh, Jaipur',hi:'गोविंदगढ़, जयपुर'}, lat:27.31, lng:75.66,
      rates:{wheat:2390,paddy:2290,mustard:5600,gram:5400,bajra:2600},
      currentToken:32, lastToken:46, avgMin:6, dailyCapacity:1100, used:420,
      resources:{staff:9,machines:3,trucks:4,bags:2100}, acceptanceRisk:'Low' },
    { id:'C3', name:{en:'Renwal Krishi Upaj (Centre C)',hi:'रेनवाल कृषि उपज (केंद्र C)'}, district:'jaipur',
      area:{en:'Renwal, Jaipur',hi:'रेनवाल, जयपुर'}, lat:26.99, lng:75.42,
      rates:{wheat:2470,paddy:2320,mustard:5700,gram:5480,bajra:2660},
      currentToken:17, lastToken:41, avgMin:8, dailyCapacity:800, used:480,
      resources:{staff:5,machines:2,trucks:2,bags:900}, acceptanceRisk:'Medium' },
    { id:'C4', name:{en:'Kaladera Sangrah Kendra (Centre D)',hi:'कालाडेरा संग्रह केंद्र (केंद्र D)'}, district:'jaipur',
      area:{en:'Kaladera, Jaipur',hi:'कालाडेरा, जयपुर'}, lat:27.33, lng:75.72,
      rates:{wheat:2410,paddy:2295,mustard:5620,gram:5420,bajra:2610},
      currentToken:36, lastToken:49, avgMin:5, dailyCapacity:700, used:430,
      resources:{staff:7,machines:2,trucks:3,bags:1500}, acceptanceRisk:'Medium' },
    { id:'C5', name:{en:'Amber Procurement Point (Centre E)',hi:'आमेर खरीद केंद्र (केंद्र E)'}, district:'jaipur',
      area:{en:'Amber, Jaipur',hi:'आमेर, जयपुर'}, lat:26.98, lng:75.85,
      rates:{wheat:2455,paddy:2310,mustard:5680,gram:5460,bajra:2640},
      currentToken:12, lastToken:38, avgMin:9, dailyCapacity:600, used:540,
      resources:{staff:4,machines:1,trucks:1,bags:300}, acceptanceRisk:'High' },
    { id:'C6', name:{en:'Ringas Mandi (Sikar)',hi:'रींगस मंडी (सीकर)'}, district:'sikar',
      area:{en:'Ringas, Sikar',hi:'रींगस, सीकर'}, lat:27.36, lng:75.57,
      rates:{wheat:2495,paddy:2330,mustard:5730,gram:5500,bajra:2680},
      currentToken:30, lastToken:44, avgMin:6, dailyCapacity:950, used:300,
      resources:{staff:8,machines:3,trucks:3,bags:1800}, acceptanceRisk:'Low' },
    { id:'C7', name:{en:'Sikar Krishi Mandi',hi:'सीकर कृषि मंडी'}, district:'sikar',
      area:{en:'Sikar City',hi:'सीकर शहर'}, lat:27.61, lng:75.14,
      rates:{wheat:2510,paddy:2340,mustard:5760,gram:5520,bajra:2700},
      currentToken:15, lastToken:55, avgMin:8, dailyCapacity:1300, used:900,
      resources:{staff:10,machines:4,trucks:5,bags:2500}, acceptanceRisk:'Medium' },
    { id:'C8', name:{en:'Dausa Mandi',hi:'दौसा मंडी'}, district:'dausa',
      area:{en:'Dausa City',hi:'दौसा शहर'}, lat:26.89, lng:76.34,
      rates:{wheat:2460,paddy:2315,mustard:5690,gram:5470,bajra:2650},
      currentToken:20, lastToken:35, avgMin:7, dailyCapacity:800, used:260,
      resources:{staff:6,machines:2,trucks:3,bags:1100}, acceptanceRisk:'Low' },
    { id:'C9', name:{en:'Kishangarh Mandi (Ajmer)',hi:'किशनगढ़ मंडी (अजमेर)'}, district:'ajmer',
      area:{en:'Kishangarh, Ajmer',hi:'किशनगढ़, अजमेर'}, lat:26.59, lng:74.86,
      rates:{wheat:2530,paddy:2350,mustard:5790,gram:5540,bajra:2715},
      currentToken:18, lastToken:60, avgMin:9, dailyCapacity:1000, used:820,
      resources:{staff:7,machines:2,trucks:3,bags:700}, acceptanceRisk:'High' },
    { id:'C10', name:{en:'Tonk Mandi',hi:'टोंक मंडी'}, district:'tonk',
      area:{en:'Tonk City',hi:'टोंक शहर'}, lat:26.16, lng:75.79,
      rates:{wheat:2485,paddy:2325,mustard:5710,gram:5490,bajra:2670},
      currentToken:10, lastToken:28, avgMin:6, dailyCapacity:850, used:240,
      resources:{staff:6,machines:2,trucks:2,bags:1400}, acceptanceRisk:'Low' }
  ],
  myCrop:{ cropId:'wheat', quantity:50, harvestDate:'', photo:null, dry:null, clean:null, moisture:'' },
  precheck:null, bookings:[], notifications:[], autoEvents:[], seq:{ booking:1 },
  filterDistrict:'mine'
});

const DB = {
  state:null,
  load(){ try{ const r = localStorage.getItem(KEY); if(r){ this.state = JSON.parse(r); return; } }catch(e){}
    this.state = SEED(); },
  save(){ try{ localStorage.setItem(KEY, JSON.stringify(this.state)); }catch(e){} },
  reset(){ this.state = SEED(); this.save(); }
};
DB.load();
try{ LANG = localStorage.getItem('spa_lang') || 'en'; }catch(e){}
document.body.className = LANG;
const S = () => DB.state;
try{
  const requestedRole = new URLSearchParams(window.location.search).get('role');
  const pendingRole = localStorage.getItem('spa_pending_role');
  const nextRole = requestedRole === 'farmer' || requestedRole === 'admin' ? requestedRole : pendingRole;
  if(nextRole === 'farmer' || nextRole === 'admin'){
    S().session.role = nextRole;
    localStorage.removeItem('spa_pending_role');
    DB.save();
  }
}catch(e){}
const commit = () => { runAutomation(); DB.save(); render(); };

/* ---------------- HELPERS ---------------- */
const $ = id => document.getElementById(id);
const esc = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rupee = n => '₹' + Number(Math.round(n)).toLocaleString('en-IN');
const crop = id => S().crops.find(c=>c.id===id) || S().crops[0];
const cropName = id => L(crop(id).name);
const centre = id => S().centres.find(c=>c.id===id);
const me = () => S().farmers.find(f=>f.id===S().session.farmerId) || S().farmers[0];
const district = id => DISTRICTS.find(d=>d.id===id) || DISTRICTS[0];

function haversine(a1,o1,a2,o2){
  const R=6371, r=Math.PI/180;
  const dA=(a2-a1)*r, dO=(o2-o1)*r;
  const x=Math.sin(dA/2)**2 + Math.cos(a1*r)*Math.cos(a2*r)*Math.sin(dO/2)**2;
  return 2*R*Math.asin(Math.sqrt(x));
}
function distOf(c){
  const f = me();
  if(c.distanceOverride) return c.distanceOverride;
  return Math.max(1, Math.round(haversine(f.lat,f.lng,c.lat,c.lng)));
}
function nearestArea(lat,lng){
  let best=null, bd=1e9;
  DISTRICTS.forEach(d=>d.areas.forEach(a=>{
    const dd = haversine(lat,lng,a.lat,a.lng);
    if(dd<bd){ bd=dd; best={district:d.id, area:a.en}; }
  }));
  return best;
}
const remaining = c => Math.max(0, c.dailyCapacity - c.used);
const capPct = c => Math.round(remaining(c)/c.dailyCapacity*100);
const capKey = c => capPct(c) >= 45 ? 'good' : capPct(c) >= 18 ? 'medium' : 'low';
const capLabel = c => t(capKey(c));
const waiting = c => Math.max(0, c.lastToken - c.currentToken);
const queueKey = c => waiting(c) <= 15 ? 'low' : waiting(c) <= 25 ? 'medium' : 'high';
const queueLabel = c => t(queueKey(c));
const waitMins = c => waiting(c) * c.avgMin;
const hm = m => m < 60 ? m + ' ' + t('min') : Math.floor(m/60) + t('hr') + ' ' + (m%60 ? (m%60)+' '+t('min') : '');
const tone = k => k==='low'||k==='good' ? 'g' : k==='medium' ? 'a' : 'r';
const riskKey = r => r.toLowerCase();
const riskLabel = r => t(riskKey(r));
const myBooking = () => S().bookings.filter(b=>b.farmerId===S().session.farmerId).slice(-1)[0] || null;

function toast(msg){
  const el = $('toast'); el.innerHTML = '<div class="toast">'+esc(msg)+'</div>';
  clearTimeout(window._tt); window._tt = setTimeout(()=>{ el.innerHTML=''; }, 2800);
}
function notify(en, hi, detailEn, detailHi, emoji){
  S().notifications.unshift({ id:Date.now()+Math.random(), title:{en,hi}, detail:{en:detailEn,hi:detailHi},
    emoji:emoji||'🔔', time:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}), read:false });
  logAuto('📲', 'Status changed → '+en+'. '+T.en.smsSent, 'स्थिति बदली → '+hi+'. '+T.hi.smsSent);
  DB.save();
}
function logAuto(emoji, en, hi){
  if(!S().autoEvents) S().autoEvents = [];
  S().autoEvents.unshift({ emoji, text:{en,hi}, time:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}) });
  S().autoEvents = S().autoEvents.slice(0,40);
}
function runAutomation(){
  S().centres.forEach(c=>{
    c._f = c._f || {};
    const cap = capKey(c), q = queueKey(c);
    if(cap==='low' && !c._f.cap){ c._f.cap = 1;
      logAuto('📦','Capacity low at '+c.name.en+' → today\'s slots closed, new farmers redirected to another centre.',
        c.name.hi+' पर क्षमता कम → आज के स्लॉट बंद, नए किसान दूसरे केंद्र भेजे गए।'); }
    if(cap!=='low') c._f.cap = 0;
    if(q==='high' && !c._f.q){ c._f.q = 1;
      logAuto('👥','Queue high at '+c.name.en+' → waiting time recalculated to '+hmEN(waitMins(c))+' and farmers informed.',
        c.name.hi+' पर लाइन लंबी → इंतज़ार का समय दोबारा गिना गया और किसानों को बताया गया।'); }
    if(q!=='high') c._f.q = 0;
  });
}
const hmEN = m => m<60 ? m+' min' : Math.floor(m/60)+'h '+(m%60?(m%60)+'m':'');

function runPreCheck(input){
  const c = crop(input.cropId);
  let risk = 0.10; const reasons = [], actions = [];
  const push = (arr,en,hi)=>arr.push({en,hi});

  if(input.dry === 'no'){ risk += 0.45;
    push(reasons,'The crop may not be fully dry.','फसल पूरी तरह सूखी नहीं लगती।');
    push(actions,'Dry the crop in the sun for '+c.dryDays+'–'+(c.dryDays+2)+' days, then check again.',
      'फसल को '+c.dryDays+'–'+(c.dryDays+2)+' दिन धूप में सुखाएँ, फिर दोबारा जाँचें।'); }
  else if(input.dry === 'unknown'){ risk += 0.22;
    push(reasons,'You are not sure whether the crop is dry.','आपको पक्का नहीं पता कि फसल सूखी है या नहीं।');
    push(actions,'Press a few grains with your nail — if they dent easily, dry the crop more.',
      'कुछ दाने नाखून से दबाएँ — अगर आसानी से दब जाएँ तो और सुखाएँ।'); }

  if(input.clean === 'no'){ risk += 0.32;
    push(reasons,'The crop may have dust, straw or stones mixed in.','फसल में मिट्टी, भूसा या कंकड़ मिले हो सकते हैं।');
    push(actions,'Clean or winnow the crop before travelling to the centre.','केंद्र जाने से पहले फसल साफ़ करें या ओसाएँ।'); }
  else if(input.clean === 'unknown'){ risk += 0.15;
    push(reasons,'You are not sure how clean the crop is.','आपको पक्का नहीं पता कि फसल कितनी साफ़ है।');
    push(actions,'Look at a handful of grain — remove straw and stones if you see any.','एक मुट्ठी दाना देखें — भूसा और कंकड़ हटा दें।'); }

  if(input.harvestDate){
    const days = Math.floor((Date.now() - new Date(input.harvestDate).getTime())/86400000);
    if(days >= 0 && days < c.dryDays){ risk += 0.18;
      push(reasons,'Harvest was only '+days+' day(s) ago — crops usually need about '+c.dryDays+' days of drying.',
        'कटाई सिर्फ़ '+days+' दिन पहले हुई — आम तौर पर लगभग '+c.dryDays+' दिन सुखाना पड़ता है।');
      push(actions,'Wait a few more days before booking a slot.','स्लॉट बुक करने से पहले कुछ दिन और रुकें।'); }
  }

  const lim = c.moistureLimit;
  if(input.moisture !== '' && input.moisture !== null && input.moisture !== undefined && !isNaN(+input.moisture)){
    const m = +input.moisture;
    if(m > lim + 2){ risk = Math.max(risk, 0.72);
      push(reasons,'Moisture is '+m+'%, above the permitted limit of '+lim+'% for '+c.name.en+'.',
        'नमी '+m+'% है, जो '+c.name.hi+' की अनुमत सीमा '+lim+'% से ज़्यादा है।');
      push(actions,'Dry or recondition the crop and re-check before travelling.','फसल सुखाएँ या ठीक करें और जाने से पहले दोबारा जाँचें।'); }
    else if(m > lim){ risk = Math.max(risk, 0.40);
      push(reasons,'Moisture is '+m+'%, just above the permitted '+lim+'%.','नमी '+m+'% है, अनुमत '+lim+'% से थोड़ी ज़्यादा।');
      push(actions,'A day or two of drying should bring it under the limit.','एक-दो दिन सुखाने से यह सीमा के अंदर आ जाएगी।'); }
    else { risk = Math.max(0.05, risk - 0.25);
      push(reasons,'Moisture is '+m+'%, within the permitted '+lim+'%.','नमी '+m+'% है, अनुमत '+lim+'% के अंदर।'); }
  }
  risk = Math.min(0.95, risk);

  let level, title, message;
  if(risk < 0.22){ level='green'; title={en:'Looks Good',hi:'सब ठीक लगता है'};
    message={en:'Your crop looks suitable based on the information you gave.',hi:'आपकी दी गई जानकारी के अनुसार फसल ठीक लगती है।'}; }
  else if(risk < 0.58){ level='amber'; title={en:'Check Before Going',hi:'जाने से पहले जाँच लें'};
    message={en:'A few things may cause a problem at the centre. Fix them first.',hi:'कुछ बातें केंद्र पर दिक्कत कर सकती हैं। पहले ठीक कर लें।'}; }
  else { level='red'; title={en:'Possible Quality Problem',hi:'गुणवत्ता में समस्या हो सकती है'};
    message={en:'There is a high chance of a quality problem. Please fix it before travelling.',hi:'गुणवत्ता में दिक्कत की ज़्यादा संभावना है। जाने से पहले ठीक करें।'}; }

  if(level==='green' && !reasons.length) push(reasons,'Crop reported dry and clean.','फसल सूखी और साफ़ बताई गई है।');
  if(!actions.length) push(actions,'You can go ahead and find a nearby centre.','आप आगे बढ़कर पास का केंद्र देख सकते हैं।');
  const riskBand = risk < 0.22 ? {en:'Low',hi:'कम'} : risk < 0.58 ? {en:'Medium',hi:'मध्यम'} : {en:'High',hi:'ज़्यादा'};
  return { level, title, message, reasons, actions, riskScore:+risk.toFixed(2),
           riskBand, acceptChance: Math.round((1-risk)*100),
           moistureLimit: c.moistureLimit, moisture: input.moisture,
           engine:{en:'Rules-based demo engine v1',hi:'नियम-आधारित डेमो इंजन v1'} };
}

const TRANSPORT_PER_KM = 35;
const transportCost = c => Math.round(distOf(c) * TRANSPORT_PER_KM);
const grossValue = c => (S().myCrop.quantity||0) * c.rates[S().myCrop.cropId];
const netBenefit = c => grossValue(c) - transportCost(c);

const WEIGHTS = { price:0.30, distance:0.25, queue:0.20, capacity:0.15, risk:0.10 };
function visibleCentres(){
  const f = me(), mode = S().filterDistrict;
  if(mode === 'mine') return S().centres.filter(c=>c.district === f.district);
  if(mode === 'all')  return S().centres.slice();
  return S().centres.filter(c=>c.district === mode);
}
function scoreCentres(cropId, farmerRisk, list){
  list = list || visibleCentres();
  if(!list.length) return [];
  const qty = S().myCrop.quantity || 1;
  const netOf = c => c.rates[cropId]*qty - transportCost(c);
  const rates = list.map(c=>netOf(c)), dists = list.map(c=>distOf(c)),
        waits = list.map(c=>waitMins(c)), caps = list.map(c=>capPct(c));
  const nrm = (v,arr,inv)=>{ const mn=Math.min(...arr), mx=Math.max(...arr);
    if(mx===mn) return 1; const x=(v-mn)/(mx-mn); return inv?1-x:x; };
  const riskVal = { Low:1, Medium:0.55, High:0.15 };
  return list.map(c=>{
    const parts = { price:nrm(netOf(c),rates,false), distance:nrm(distOf(c),dists,true),
                    queue:nrm(waitMins(c),waits,true), capacity:nrm(capPct(c),caps,false),
                    risk:riskVal[c.acceptanceRisk] };
    let score = 0; for(const k in WEIGHTS) score += parts[k]*WEIGHTS[k];
    if(capKey(c)==='low') score -= 0.12;
    if(farmerRisk && farmerRisk>0.5 && c.acceptanceRisk==='High') score -= 0.08;
    if(c.district !== me().district) score -= 0.04;
    return { centre:c, parts, score:+Math.max(0,score).toFixed(3) };
  }).sort((a,b)=>b.score-a.score);
}
function whyLines(r){
  const c = r.centre, out = [], cid = S().myCrop.cropId;
  if(r.parts.price   >= .7) out.push(t('netBenefit')+': '+rupee(netBenefit(c))+' ('+t('todaysRate')+' '+rupee(c.rates[cid])+t('perQ')+')');
  if(r.parts.distance>= .6) out.push(t('distance')+': '+distOf(c)+' '+t('km'));
  if(r.parts.queue   >= .6) out.push(t('queue')+': '+queueLabel(c)+' · '+hm(waitMins(c)));
  if(r.parts.capacity>= .6) out.push(t('remainCap')+': '+remaining(c)+' '+t('quintal'));
  if(c.acceptanceRisk==='Low') out.push(t('risk')+': '+t('low'));
  if(!out.length) out.push(LANG==='hi'?'भाव, दूरी, लाइन और क्षमता का सबसे अच्छा संतुलन':'Best overall balance of rate, distance, queue and capacity');
  return out;
}

const SLOT_TIMES = ['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM'];
function slotsFor(c){
  const k = capKey(c);
  const today = k==='low' ? [] : SLOT_TIMES.filter((_,i)=> k==='medium' ? i%2===0 : true);
  return { busy:k==='low', today, tomorrow:SLOT_TIMES };
}

const JOURNEY = [
 {en:'Booking Confirmed',hi:'बुकिंग पक्की'},{en:'Arrived at Centre',hi:'केंद्र पहुँचे'},
 {en:'Quality Check',hi:'गुणवत्ता जाँच'},{en:'Accepted',hi:'स्वीकृत'},{en:'Weighment',hi:'तौल'},
 {en:'Procurement Completed',hi:'खरीद पूरी'},{en:'Payment Initiated',hi:'भुगतान शुरू'},{en:'Payment Credited',hi:'भुगतान जमा'}];
const PAYMENT_STEPS = [
 {en:'Crop Sold',hi:'फसल बिकी'},{en:'Gate Pass Verified',hi:'गेट पास जाँचा'},{en:'Forms Cleared',hi:'फॉर्म पास'},
 {en:'Crop Lifted',hi:'फसल उठाई गई'},{en:'Payment Initiated',hi:'भुगतान शुरू'},{en:'Payment Credited',hi:'भुगतान जमा'}];
const QC_REASONS = [
 {en:'Possible issue: Moisture',hi:'संभावित समस्या: नमी'},
 {en:'Possible issue: Foreign matter / dust',hi:'संभावित समस्या: मिट्टी / कचरा'},
 {en:'Possible issue: Damaged or shrivelled grain',hi:'संभावित समस्या: टूटा या सिकुड़ा दाना'},
 {en:'Possible issue: Mixed variety',hi:'संभावित समस्या: मिली-जुली किस्म'}];

let screen = S().session.role ? (S().session.role==='farmer'?'dash':'adash') : 'role';
let tmp = {};
function go(s){ screen = s; tmp.top = true; render(); }

function render(){
  const r = $('root');
  r.innerHTML = (VIEWS[screen] || VIEWS.role)();
  if(tmp.top){ window.scrollTo({top:0,behavior:'instant'}); tmp.top=false; }
}
const langBtn = () => `<button class="iconbtn langbtn" onclick="toggleLang()">🌐 ${LANG==='en'?'हिन्दी':'English'}</button>`;
const bar = (title, back, right) => `
  <div class="topbar">
    ${back?`<button class="iconbtn" onclick="go('${back}')">←</button>`:''}
    <h1>${esc(title)}</h1>${langBtn()}${right||''}
  </div>`;

function farmerNav(active){
  const items=[['dash','🏠','navHome'],['centres','📍','navCentres'],['queue','🎫','navQueue'],
               ['status','📦','navStatus'],['notif','🔔','navAlerts']];
  const unread = S().notifications.filter(n=>!n.read).length;
  return '<div class="nav">'+items.map(([k,e,l])=>
    `<a class="${active===k?'on':''}" onclick="go('${k}')"><span class="e">${e}</span>${t(l)}${
      k==='notif'&&unread?`<span class="badge">${unread}</span>`:''}</a>`).join('')+'</div>';
}
function adminNav(active){
  const items=[['adash','📊','aDash'],['aqueue','🎫','aQueue'],['abook','👨‍🌾','aFarmers'],['aanalytics','📈','aAnalytics'],['aauto','🤖','automation'],['aset','⚙️','aCtrl']];
  return '<div class="nav">'+items.map(([k,e,l])=>
    `<a class="${active===k?'on':''}" onclick="go('${k}')"><span class="e">${e}</span>${t(l)}</a>`).join('')+'</div>';
}
const VIEWS = {};

VIEWS.role = () => `
<div class="topbar"><h1>🌾 ${esc(t('appTitle'))}</h1>${langBtn()}</div>
<div class="app"><div class="wrap" style="padding-top:26px">
  <div class="hero">
    <div style="font-size:44px">🌾</div>
    <h2 style="font-size:23px;margin-top:6px">${esc(t('appTitle'))}</h2>
    <p class="muted" style="margin:0">${esc(t('tagline'))}</p>
    <div style="margin-top:10px"><span class="pill" style="background:rgba(255,255,255,.18);color:#fff;border:0">SIH26032 · Prototype</span></div>
  </div>
  <div class="card">
    <h3>${esc(t('chooseRole'))}</h3>
    <a class="btn" href="farmer-login.html">👨‍🌾 ${esc(t('contFarmer'))}</a>
    <a class="btn ghost" href="center-login.html">🏢 ${esc(t('contAdmin'))}</a>
    <button class="btn line" onclick="go('about')">💡 ${esc(t('aboutBtn'))}</button>
    <p class="muted" style="margin-top:14px">${esc(t('demoLogin'))} Farmer: Ramesh Kumar (RJ-JPR-4471) · Admin: Govindgarh Kendra.</p>
  </div>
  <div class="card tight">
    <div class="row between"><span class="muted">${esc(t('resetData'))}</span>
      <button class="btn sm ghost" onclick="resetAll()">${esc(t('reset'))}</button></div>
  </div>
</div></div>`;

function resetAll(){ if(confirm(t('resetData')+'?')){ DB.reset(); screen='role'; render(); } }
function setRole(r){
  S().session.role = r;
  if(r==='farmer'){
    if(!S().notifications.length) notify('Welcome to Smart Procurement Assistant','स्मार्ट खरीद सहायक में आपका स्वागत है',
      'Start with a Crop Pre-Check before you travel.','जाने से पहले फसल पूर्व-जाँच करें।','🌾');
    go('dash');
  } else go('adash');
  DB.save();
}
function logout(){ S().session.role=null; DB.save(); go('role'); }

VIEWS.reg = () => {
  const f = me(), d = district(f.district);
  return `
${bar(t('myDetails'),'dash')}
<div class="app"><div class="wrap">
  <div class="card">
    <label style="margin-top:0">${esc(t('name'))}</label><input id="rName" value="${esc(f.name)}">
    <label>${esc(t('mobile'))}</label><input id="rMob" value="${esc(f.mobile)}">
    <label>${esc(t('farmerId'))}</label><input id="rFid" value="${esc(f.farmerId)}">
    <label>${esc(t('land'))}</label><input id="rLand" type="number" step="0.1" value="${f.land||''}">
    <label>📍 ${esc(t('location'))}</label>
    <div class="row">
      <div style="flex:1;min-width:150px;padding:14px;border-radius:13px;background:var(--accentSoft);font-weight:800" id="locBox">
        ${esc(f.area)}, ${esc(L(d.name))}</div>
      <button class="btn sm line" onclick="detectLocation()">📡 ${esc(t('detect'))}</button>
    </div>
    <label>${esc(t('orChoose'))}</label>
    <select id="rDist" onchange="changeDistrict(this.value)">
      ${DISTRICTS.map(x=>`<option value="${x.id}" ${x.id===f.district?'selected':''}>${esc(L(x.name))}</option>`).join('')}
    </select>
    <select id="rArea" style="margin-top:8px" onchange="changeArea(this.value)">
      ${d.areas.map(a=>`<option value="${esc(a.en)}" ${a.en===f.area?'selected':''}>${esc(L(a))}</option>`).join('')}
    </select>
    <p class="muted" style="margin-top:10px">${esc(t('gpsHelp'))}</p>
    <button class="btn" onclick="saveFarmer()">✅ ${esc(t('save'))}</button>
  </div>
</div></div>${farmerNav('')}`;
};
function detectLocation(){
  if(!navigator.geolocation){ toast(t('noGps')); return; }
  toast(t('detecting'));
  navigator.geolocation.getCurrentPosition(p=>{
    const f = me(); f.lat = p.coords.latitude; f.lng = p.coords.longitude;
    const near = nearestArea(f.lat, f.lng);
    f.district = near.district; f.area = near.area;
    DB.save(); render(); toast(t('located')+' · '+near.area);
  }, err=>{
    toast(err.code===1 ? t('gpsDenied') : t('noGps'));
  }, { enableHighAccuracy:true, timeout:9000, maximumAge:60000 });
}
function changeDistrict(id){
  const f = me(), d = district(id);
  f.district = id; f.area = d.areas[0].en; f.lat = d.areas[0].lat; f.lng = d.areas[0].lng;
  if(S().filterDistrict !== 'all') S().filterDistrict = 'mine';
  commit();
}
function changeArea(a){
  const f = me(), d = district(f.district), ar = d.areas.find(x=>x.en===a) || d.areas[0];
  f.area = ar.en; f.lat = ar.lat; f.lng = ar.lng; commit();
}
function saveFarmer(){
  const f = me();
  f.name = $('rName').value.trim() || f.name;
  f.mobile = $('rMob').value.trim(); f.farmerId = $('rFid').value.trim();
  f.land = +$('rLand').value || f.land;
  toast(t('saved')); go('dash');
}

VIEWS.dash = () => {
  const f = me(), mc = S().myCrop, pc = S().precheck, b = myBooking();
  const tn = pc ? (pc.level==='green'?'g':pc.level==='amber'?'a':'r') : '';
  const tile=(s,e,n,sub)=>`<div class="tile" onclick="go('${s}')"><div class="e">${e}</div>
     <div class="n">${esc(t(n))}</div><div class="s">${esc(sub)}</div></div>`;
  return `
${bar(t('namaste')+', '+f.name.split(' ')[0]+' 🙏', null, `<button class="iconbtn" onclick="logout()">⎋</button>`)}
<div class="app"><div class="wrap">
  <div class="card tight">
    <div class="row between">
      <div><div class="muted">📍 ${esc(t('yourLocation'))}</div>
        <b>${esc(f.area)}, ${esc(L(district(f.district).name))}</b></div>
      <button class="btn sm ghost" onclick="go('reg')">${esc(t('edit'))}</button>
    </div>
  </div>
  ${pc?`<div class="card tight" style="border-left:6px solid var(--${pc.level==='green'?'green':pc.level==='amber'?'amber':'red'})">
    <div class="row between"><div><span class="pill ${tn}">${esc(L(pc.title))}</span>
      <div class="muted" style="margin-top:6px">${esc(t('preCheck'))}</div></div>
      <button class="btn sm ghost" onclick="go('result')">${esc(t('edit')==='बदलें'?'देखें':'View')}</button></div></div>`:''}
  ${b?`<div class="card tight">
    <div class="row between"><div><div class="muted">${esc(t('bookingConfirmed'))}</div>
      <b>🎫 #${b.token} · ${esc(L(centre(b.centreId).name))}</b>
      <div class="muted">${esc(t(b.date))} · ${esc(b.time)} · ${esc(L(JOURNEY[b.stage]))}</div></div>
      <button class="btn sm" onclick="go('queue')">${esc(t('navQueue'))}</button></div></div>`:''}
  <div class="tiles">
    ${tile('crop','🌾','myCrop',cropName(mc.cropId)+' · '+mc.quantity+' '+t('quintal'))}
    ${tile('precheck','✅','preCheck',t('sub_pre'))}
    ${tile('centres','📍','nearby',t('sub_near'))}
    ${tile('compare','⚖️','compare',t('sub_cmp'))}
    ${tile('recommend','⭐','bestCentre',t('sub_best'))}
    ${tile('booking','🗓️','bookSlot',t('sub_book'))}
    ${tile('status','📦','myProc',t('sub_proc'))}
    ${tile('payment','💰','payment',t('sub_pay'))}
  </div>
  <p class="muted" style="text-align:center;margin-top:16px"><span class="demo">${esc(t('demoData'))}</span></p>
</div></div>${farmerNav('dash')}`;
};

VIEWS.crop = () => {
  const mc = S().myCrop, list = visibleCentres();
  const best = Math.max(...list.map(c=>c.rates[mc.cropId]));
  return `
${bar(t('myCrop'),'dash')}
<div class="app"><div class="wrap">
 <div class="card">
  <label style="margin-top:0">${esc(t('whichCrop'))}</label>
  <div class="row">${S().crops.map(c=>`<button class="slot ${mc.cropId===c.id?'on':''}" style="flex:1 1 45%"
     onclick="S().myCrop.cropId='${c.id}';commit()">${c.emoji} ${esc(L(c.name))}</button>`).join('')}</div>
  <label>${esc(t('qty'))} <span class="muted">(${esc(t('optional'))})</span></label>
  <input type="number" min="1" value="${mc.quantity||''}" oninput="S().myCrop.quantity=+this.value||0;DB.save()">
  <label>${esc(t('harvestDate'))} <span class="muted">(${esc(t('optional'))})</span></label>
  <input type="date" value="${esc(mc.harvestDate)}" onchange="S().myCrop.harvestDate=this.value;DB.save()">
  <div class="card tight" style="margin-top:16px;background:var(--surface2);box-shadow:none;animation:none">
    <div class="kv"><span>${esc(t('todayBest'))}</span><b>${rupee(best)}${esc(t('perQ'))}</b></div>
    ${mc.quantity?`<div class="kv"><span>${esc(t('estValue'))}</span><b>${rupee(mc.quantity*best)}</b></div>`:''}
    <p class="muted" style="margin:8px 0 0">${esc(t('estNote'))}</p>
  </div>
  <button class="btn" onclick="go('precheck')">${esc(t('checkMyCrop'))} →</button>
 </div>
</div></div>${farmerNav('')}`;
};

VIEWS.precheck = () => {
  const mc = S().myCrop, f = me();
  const q = (label,key)=>`<label>${esc(label)}</label><div class="choice">
    ${[['yes','yes'],['no','no'],['unknown','dunno']].map(([v,k])=>
      `<button class="${mc[key]===v?'on':''}" onclick="S().myCrop['${key}']='${v}';commit()">${esc(t(k))}</button>`).join('')}</div>`;
  return `
${bar(t('preCheck'),'dash')}
<div class="app"><div class="wrap">
 <div class="card">
  <p class="muted" style="margin-top:0">${esc(t('preHelp'))}</p>
  <button class="btn line voice-btn" type="button" onclick="startVoiceInput()">🎙️ ${esc(t('voiceInput'))}</button>
  <p class="muted voice-help">${esc(t('voiceHelp'))}</p>
  <label>${esc(t('crop'))} <span style="color:var(--red)">*</span></label>
  <select onchange="S().myCrop.cropId=this.value;commit()">
    ${S().crops.map(c=>`<option value="${c.id}" ${mc.cropId===c.id?'selected':''}>${c.emoji} ${esc(L(c.name))}</option>`).join('')}
  </select>
  <label>${esc(t('qty'))} <span class="muted">(${esc(t('optional'))})</span></label>
  <input type="number" value="${mc.quantity||''}" oninput="S().myCrop.quantity=+this.value||0;DB.save()">
  <label>${esc(t('harvestDate'))} <span class="muted">(${esc(t('optional'))})</span></label>
  <input type="date" value="${esc(mc.harvestDate)}" onchange="S().myCrop.harvestDate=this.value;DB.save()">
  <label>💧 ${esc(t('moisture'))} <span class="muted">(${esc(t('optional'))})</span></label>
  <input type="number" step="0.1" placeholder="${esc(t('permitted'))}: ${crop(mc.cropId).moistureLimit}%"
     value="${esc(mc.moisture)}" oninput="S().myCrop.moisture=this.value;DB.save()">
  <p class="muted" style="margin:6px 0 0">${esc(t('moistureNote'))}</p>
  <label>📷 ${esc(t('cropPhoto'))} <span class="muted">(${esc(t('optional'))})</span></label>
  <input type="file" accept="image/*" onchange="uploadPhoto(this)">
  ${mc.photo?`<img class="photo" src="${mc.photo}" alt="crop"><p class="muted">${esc(t('photoNote'))}</p>`:''}
  ${q(t('qDry'),'dry')}
  ${q(t('qClean'),'clean')}
  <div class="card tight" style="background:var(--surface2);margin-top:16px;box-shadow:none;animation:none">
    <div class="kv"><span>📍 ${esc(t('autoLoc'))}</span><b>${esc(f.area)}, ${esc(L(district(f.district).name))}</b></div>
  </div>
  <button class="btn" onclick="doPreCheck()">✅ ${esc(t('checkMyCrop'))}</button>
 </div>
</div></div>${farmerNav('')}`;
};
function startVoiceInput(){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){ toast(t('voiceUnsupported')); return; }
  const recognition = new SpeechRecognition();
  recognition.lang = LANG==='hi' ? 'hi-IN' : 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = ()=>toast(t('listening'));
  recognition.onerror = ()=>toast(t('voiceUnsupported'));
  recognition.onresult = event=>{
    const transcript = event.results[0][0].transcript.toLowerCase();
    const match = S().crops.find(c=>transcript.includes(c.id) || transcript.includes(c.name.en.toLowerCase()) || transcript.includes(c.name.hi));
    const quantity = transcript.match(/\d+(?:\.\d+)?/);
    if(match) S().myCrop.cropId = match.id;
    if(quantity) S().myCrop.quantity = Number(quantity[0]);
    DB.save(); render();
    toast((match ? cropName(match.id) : '') + (quantity ? ' · '+quantity[0]+' '+t('quintal') : ''));
  };
  recognition.start();
}
function uploadPhoto(el){
  const file = el.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = ()=>{ S().myCrop.photo = r.result; commit(); };
  r.readAsDataURL(file);
}
VIEWS.checking = () => `
${bar(t('preCheck'))}
<div class="app"><div class="wrap"><div class="card">
  <div class="loader"><div class="spinner"></div>
    <b>${esc(t('checking'))}</b><span class="muted">${esc(t('checkingSub'))}</span></div>
  <div class="skel" style="width:90%"></div><div class="skel" style="width:70%"></div><div class="skel" style="width:80%"></div>
</div></div></div>`;
function doPreCheck(){
  const mc = S().myCrop;
  screen='checking'; render();
  setTimeout(()=>{
    S().precheck = Object.assign(runPreCheck(mc), { at:new Date().toLocaleString('en-IN'), cropId:mc.cropId });
    const p = S().precheck;
    notify('Crop Pre-Check completed','फसल पूर्व-जाँच पूरी', p.title.en+' — '+p.reasons[0].en, p.title.hi+' — '+p.reasons[0].hi,
      p.level==='green'?'✅':p.level==='amber'?'⚠️':'⛔');
    DB.save(); go('result');
  }, 1100);
}

VIEWS.result = () => {
  const p = S().precheck; if(!p) return VIEWS.precheck();
  const tn = p.level==='green'?'g':p.level==='amber'?'a':'r';
  const em = p.level==='green'?'✅':p.level==='amber'?'⚠️':'⛔';
  return `
${bar(t('result'),'precheck')}
<div class="app"><div class="wrap">
  <div class="banner ${tn}"><div class="em">${em}</div><div class="t">${esc(L(p.title))}</div>
    <div style="font-size:14.5px;margin-top:6px">${esc(L(p.message))}</div></div>
  <div class="card">
    <div class="row" style="margin-bottom:12px">
      <span class="pill ${p.level==='green'?'g':p.level==='amber'?'a':'r'}">⚠️ ${esc(t('acceptRisk'))}: ${esc(L(p.riskBand))}</span>
      <span class="pill b">📈 ${esc(t('acceptChance'))}: ${p.acceptChance}%</span>
      ${p.moisture!==''&&p.moisture!=null?`<span class="pill">💧 ${esc(p.moisture)}% / ${esc(t('permitted'))} ${p.moistureLimit}%</span>`:''}
    </div>
    <h3>❓ ${esc(t('why'))}</h3>
    <ul class="why">${p.reasons.map(r=>`<li>• ${esc(L(r))}</li>`).join('')}</ul>
    <h3 style="margin-top:16px">👉 ${esc(t('whatDo'))}</h3>
    <ul class="why">${p.actions.map(a=>`<li>→ ${esc(L(a))}</li>`).join('')}</ul>
    ${S().myCrop.photo?`<img class="photo" src="${S().myCrop.photo}">`:''}
    <details><summary>${esc(t('howDecided'))}</summary>
      <div class="kv"><span>${esc(t('engine'))}</span><b>${esc(L(p.engine))}</b></div>
      <div class="kv"><span>${esc(t('riskScore'))}</span><b>${p.riskScore} / 1.00</b></div>
      <div class="kv"><span>${esc(t('dryAns'))}</span><b>${esc(t(S().myCrop.dry==='unknown'?'dunno':S().myCrop.dry||'notDone'))}</b></div>
      <div class="kv"><span>${esc(t('cleanAns'))}</span><b>${esc(t(S().myCrop.clean==='unknown'?'dunno':S().myCrop.clean||'notDone'))}</b></div>
      <p class="muted" style="margin-top:8px">${esc(t('rulesNote'))}</p>
    </details>
    <div class="card tight" style="background:var(--blueBg);color:var(--blue);margin-top:14px;box-shadow:none;animation:none">
      <b>ℹ️ ${esc(t('finalNote'))}</b>
      <p style="margin:6px 0 0;font-size:13.5px">${esc(t('finalSub'))}</p>
    </div>
    ${p.level==='green'
      ? `<button class="btn" onclick="go('centres')">📍 ${esc(t('findCentres'))}</button>`
      : `<button class="btn ghost" onclick="go('precheck')">🔁 ${esc(t('fixedIt'))}</button>
         <button class="btn line" onclick="go('centres')">${esc(t('seeAnyway'))}</button>`}
  </div>
</div></div>${farmerNav('')}`;
};

function districtChips(){
  const f = me(), cur = S().filterDistrict;
  const others = DISTRICTS.filter(d=>d.id!==f.district);
  return `<div class="muted" style="margin-bottom:4px">🚚 ${esc(t('otherDistrict'))}</div>
  <div class="chips">
    <button class="chip ${cur==='mine'?'on':''}" onclick="setFilter('mine')">🏠 ${esc(t('myDistrict'))} · ${esc(L(district(f.district).name))}</button>
    <button class="chip ${cur==='all'?'on':''}" onclick="setFilter('all')">🌍 ${esc(t('allDistricts'))}</button>
    ${others.map(d=>`<button class="chip ${cur===d.id?'on':''}" onclick="setFilter('${d.id}')">${esc(L(d.name))}</button>`).join('')}
  </div>`;
}
function setFilter(v){ S().filterDistrict = v; tmp.pick = null; commit(); }

VIEWS.centres = () => {
  const cid = S().myCrop.cropId, qty = S().myCrop.quantity;
  const ranked = scoreCentres(cid, S().precheck?S().precheck.riskScore:0);
  return `
${bar(t('nearby'),'dash')}
<div class="app"><div class="wrap">
  <div class="card tight">
    ${districtChips()}
    <p class="muted" style="margin:6px 0 0">${esc(t('otherNote'))}</p>
  </div>
  <div class="row between" style="margin-bottom:10px">
    <span class="muted">${crop(cid).emoji} ${esc(cropName(cid))} · ${ranked.length} ${esc(t('centre'))}</span>
    <button class="btn sm ghost" onclick="go('compare')">${esc(t('compareAll'))}</button>
  </div>
  ${ranked.map((r,i)=>{ const c=r.centre; return `
  <div class="centrecard ${i===0?'rec':''}">
    <div class="row between"><b>${esc(L(c.name))}</b>${i===0?`<span class="pill g">⭐ ${esc(t('recommended'))}</span>`:''}</div>
    <div class="muted">${esc(L(c.area))} · ${distOf(c)} ${esc(t('km'))}${c.district!==me().district?' · 🚚':''}</div>
    <div class="row" style="margin:10px 0 6px">
      <span class="pill b">💰 ${rupee(c.rates[cid])}</span>
      <span class="pill ${tone(queueKey(c))}">👥 ${esc(queueLabel(c))}</span>
      <span class="pill ${tone(capKey(c))}">📦 ${esc(capLabel(c))}</span>
      <span class="pill ${tone(riskKey(c.acceptanceRisk))}">⚠️ ${esc(riskLabel(c.acceptanceRisk))}</span>
    </div>
    <div class="kv"><span>${esc(t('nowServing'))}</span><b>#${c.currentToken}</b></div>
    <div class="kv"><span>${esc(t('farmersWaiting'))}</span><b>${waiting(c)}</b></div>
    <div class="kv"><span>${esc(t('estWait'))}</span><b>${esc(hm(waitMins(c)))}</b></div>
    <div class="kv"><span>${esc(t('remainCap'))}</span><b>${remaining(c)} / ${c.dailyCapacity}</b></div>
    ${qty?`<div class="kv"><span>${esc(t('estValue'))} (${qty})</span><b>${rupee(qty*c.rates[cid])}</b></div>
      <div class="kv"><span>🚚 ${esc(t('transport'))}</span><b>− ${rupee(transportCost(c))}</b></div>
      <div class="kv"><span>✅ ${esc(t('netBenefit'))}</span><b style="color:var(--accent)">${rupee(netBenefit(c))}</b></div>`:''}
    <div class="bar" style="margin-top:8px"><i style="width:${capPct(c)}%"></i></div>
    <div class="row" style="margin-top:12px">
      <button class="btn sm line" onclick="tmp.pick='${c.id}';go('booking')">${esc(t('bookHere'))}</button>
      <button class="btn sm ghost" onclick="go('recommend')">${esc(t('whyOrder'))}</button>
    </div>
  </div>`;}).join('')}
  <p class="muted"><span class="demo">${esc(t('demoData'))}</span></p>
</div></div>${farmerNav('centres')}`;
};

VIEWS.compare = () => {
  const cid = S().myCrop.cropId, qty = S().myCrop.quantity;
  const ranked = scoreCentres(cid, S().precheck?S().precheck.riskScore:0);
  return `
${bar(t('compare'),'centres')}
<div class="app"><div class="wrap">
 <div class="card tight">${districtChips()}</div>
 <div class="card">
  <h3>${crop(cid).emoji} ${esc(cropName(cid))}</h3>
  <p class="muted">${esc(t('noCalc'))}</p>
  <p class="muted">💡 ${esc(t('netNote'))}</p>
  <div class="scroll"><table>
   <tr><th>${esc(t('centre'))}</th><th>₹${esc(t('perQ'))}</th><th>${esc(t('distance'))}</th><th>${esc(t('queue'))}</th>
       <th>${esc(t('capacity'))}</th><th>${esc(t('estWait'))}</th><th>${esc(t('risk'))}</th>${qty?`<th>${esc(t('estValue'))}</th><th>${esc(t('transport'))}</th><th>${esc(t('netBenefit'))}</th>`:''}<th>${esc(t('overall'))}</th></tr>
   ${ranked.map((r,i)=>{const c=r.centre;return `<tr class="${i===0?'best':''}">
     <td>${i===0?'⭐ ':''}${esc(L(c.name))}</td><td><b>${rupee(c.rates[cid])}</b></td>
     <td>${distOf(c)} ${esc(t('km'))}</td>
     <td><span class="pill ${tone(queueKey(c))}">${esc(queueLabel(c))}</span></td>
     <td><span class="pill ${tone(capKey(c))}">${esc(capLabel(c))}</span></td>
     <td>${esc(hm(waitMins(c)))}</td>
     <td><span class="pill ${tone(riskKey(c.acceptanceRisk))}">${esc(riskLabel(c.acceptanceRisk))}</span></td>
     ${qty?`<td>${rupee(qty*c.rates[cid])}</td><td>− ${rupee(transportCost(c))}</td><td><b style="color:var(--accent)">${rupee(netBenefit(c))}</b></td>`:''}<td><b>${r.score}</b></td></tr>`;}).join('')}
  </table></div>
  <button class="btn" onclick="go('recommend')">⭐ ${esc(t('seeRec'))}</button>
 </div>
</div></div>${farmerNav('centres')}`;
};

VIEWS.recommend = () => {
  const cid = S().myCrop.cropId, qty = S().myCrop.quantity;
  const ranked = scoreCentres(cid, S().precheck?S().precheck.riskScore:0);
  if(!ranked.length) return VIEWS.centres();
  const top = ranked[0], c = top.centre, pct = v=>Math.round(v*100);
  return `
${bar(t('bestCentre'),'centres')}
<div class="app"><div class="wrap">
  <div class="banner g"><div class="em">⭐</div><div class="t">${esc(L(c.name))}</div>
    <div style="font-size:14.5px">${esc(L(c.area))}</div></div>
  <div class="card">
    <div class="kv"><span>${esc(t('todaysRate'))}</span><b>${rupee(c.rates[cid])}${esc(t('perQ'))}</b></div>
    <div class="kv"><span>${esc(t('distance'))}</span><b>${distOf(c)} ${esc(t('km'))}</b></div>
    <div class="kv"><span>${esc(t('estWait'))}</span><b>${esc(hm(waitMins(c)))}</b></div>
    <div class="kv"><span>${esc(t('remainCap'))}</span><b>${remaining(c)} ${esc(t('quintal'))}</b></div>
    ${qty?`<div class="kv"><span>${esc(t('estValue'))}</span><b>${rupee(qty*c.rates[cid])}</b></div>
      <div class="kv"><span>🚚 ${esc(t('transport'))}</span><b>− ${rupee(transportCost(c))}</b></div>
      <div class="kv"><span>✅ ${esc(t('netBenefit'))}</span><b style="font-size:18px;color:var(--accent)">${rupee(netBenefit(c))}</b></div>`:''}
    <h3 style="margin-top:16px">${esc(t('whyCentre'))}</h3>
    <ul class="why">${whyLines(top).map(w=>`<li>✓ ${esc(w)}</li>`).join('')}</ul>
    <details><summary>${esc(t('fullScore'))}</summary>
      ${Object.keys(WEIGHTS).map(k=>`<div class="kv"><span>${esc(t(k==='price'?'netBenefit':k==='distance'?'distance':k==='queue'?'queue':k==='capacity'?'capacity':'risk'))} (${esc(t('weight'))} ${pct(WEIGHTS[k])}%)</span><b>${pct(top.parts[k])}%</b></div>`).join('')}
      <div class="kv"><span>${esc(t('overall'))}</span><b>${top.score}</b></div>
      <p class="muted" style="margin-top:8px">${esc(t('priceNote'))}</p>
      <p class="muted">${esc(t('netNote'))}</p>
    </details>
    <button class="btn line" onclick="go('transparency')">🔎 ${esc(t('transparency'))}</button>
    <button class="btn" onclick="tmp.pick='${c.id}';go('booking')">🗓️ ${esc(t('bookHereBtn'))}</button>
    <button class="btn ghost" onclick="go('compare')">${esc(t('seeAll'))}</button>
  </div>
  ${ranked.length>1?`<div class="card tight"><h3>${esc(t('runnerUp'))}</h3>
    ${ranked.slice(1,4).map(r=>`<div class="kv"><span>${esc(L(r.centre.name))}</span><b>${r.score}</b></div>`).join('')}</div>`:''}
</div></div>${farmerNav('centres')}`;
};

VIEWS.transparency = () => {
  const cid = S().myCrop.cropId, ranked = scoreCentres(cid, S().precheck?S().precheck.riskScore:0), pct = value=>Math.round(value*100);
  return `${bar(t('transparency'),'recommend')}
<div class="app"><div class="wrap">
 <div class="card"><h3>🔎 ${esc(t('fairness'))}</h3><p class="muted">${esc(t('fairnessNote'))}</p>
  ${ranked.map((r,i)=>`<div class="transparency-row"><div class="row between"><b>${i===0?'⭐ ':''}${esc(L(r.centre.name))}</b><span class="pill ${i===0?'g':''}">${esc(t('overall'))}: ${r.score}</span></div>
    <div class="factor-grid">${Object.keys(WEIGHTS).map(k=>`<div><span>${esc(t(k==='price'?'netBenefit':k))}</span><b>${pct(r.parts[k])}%</b><i><em style="width:${pct(r.parts[k])}%"></em></i></div>`).join('')}</div></div>`).join('')}
 </div><div class="card"><h3>${esc(t('scoreFactor'))}</h3><p class="muted">${esc(t('priceNote'))}</p>${Object.entries(WEIGHTS).map(([k,v])=>`<div class="kv"><span>${esc(t(k==='price'?'netBenefit':k))}</span><b>${pct(v)}% ${esc(t('weight'))}</b></div>`).join('')}</div>
</div></div>${farmerNav('centres')}`;
};

VIEWS.booking = () => {
  const cid = S().myCrop.cropId;
  const ranked = scoreCentres(cid, S().precheck?S().precheck.riskScore:0);
  if(!ranked.length) return VIEWS.centres();
  const cid2 = tmp.pick && centre(tmp.pick) ? tmp.pick : ranked[0].centre.id;
  const c = centre(cid2), sl = slotsFor(c);
  const alt = ranked.find(r=>r.centre.id!==c.id && capKey(r.centre)!=='low');
  return `
${bar(t('bookSlot'),'centres')}
<div class="app"><div class="wrap">
 <div class="card">
  <label style="margin-top:0">${esc(t('centre'))}</label>
  <select onchange="tmp.pick=this.value;render()">
    ${ranked.map(r=>`<option value="${r.centre.id}" ${r.centre.id===cid2?'selected':''}>${esc(L(r.centre.name))} — ${rupee(r.centre.rates[cid])}</option>`).join('')}
  </select>
  <div class="row" style="margin-top:10px">
    <span class="pill ${tone(queueKey(c))}">${esc(t('queue'))} ${esc(queueLabel(c))}</span>
    <span class="pill ${tone(capKey(c))}">${esc(t('capacity'))} ${esc(capLabel(c))}</span>
    <span class="pill b">${remaining(c)} ${esc(t('quintal'))}</span>
  </div>
  ${sl.busy?`<div class="banner a" style="margin-top:14px"><div class="em">⏳</div>
     <div class="t">${esc(t('busyTitle'))}</div><div style="font-size:14px">${esc(t('busySub'))}</div></div>
     ${alt?`<button class="btn line" onclick="tmp.pick='${alt.centre.id}';render()">${esc(t('tryInstead'))}: ${esc(L(alt.centre.name))}</button>`:''}`:''}
  <label>${esc(t('today'))} (${new Date().toLocaleDateString(LANG==='hi'?'hi-IN':'en-IN',{day:'numeric',month:'short'})})</label>
  <div class="row">${ sl.today.length
     ? sl.today.map(x=>`<button class="slot ${tmp.slot===x&&tmp.day==='today'?'on':''}" onclick="tmp.slot='${x}';tmp.day='today';render()">${x}</button>`).join('')
     : `<p class="muted">${esc(t('noSlotsToday'))}</p>` }</div>
  <label>${esc(t('tomorrow'))}</label>
  <div class="row">${ sl.tomorrow.map(x=>`<button class="slot ${tmp.slot===x&&tmp.day==='tomorrow'?'on':''}" onclick="tmp.slot='${x}';tmp.day='tomorrow';render()">${x}</button>`).join('') }</div>
  <label>${esc(t('qtyBring'))}</label>
  <input type="number" value="${S().myCrop.quantity||''}" oninput="S().myCrop.quantity=+this.value||0;DB.save()">
  ${S().precheck && S().precheck.level!=='green'
    ? `<div class="card tight" style="background:var(--amberBg);color:var(--amber);margin-top:14px;box-shadow:none;animation:none">
        ⚠️ ${esc(t('preSaid'))}: "${esc(L(S().precheck.title))}". ${esc(t('stillBook'))}</div>`:''}
  <button class="btn" ${tmp.slot?'':'disabled'} onclick="confirmBooking('${c.id}')">✅ ${esc(t('confirmBooking'))}</button>
  <p class="muted" style="margin-top:8px">${esc(t('slotLimit'))}</p>
 </div>
</div></div>${farmerNav('centres')}`;
};
function confirmBooking(cId){
  const c = centre(cId), mc = S().myCrop, f = me();
  if(!tmp.slot){ return; }
  const qty = mc.quantity || 0;
  if(qty > remaining(c)){ toast(t('busySub')); return; }
  c.lastToken += 1;
  const b = { id:'BK'+String(1000+S().seq.booking++), farmerId:f.id, centreId:c.id, cropId:mc.cropId,
    quantity:qty, date:tmp.day||'today', time:tmp.slot, token:c.lastToken, stage:0, qc:null,
    weighment:null, paymentStep:0, otp:String(Math.floor(100000+Math.random()*900000)), verified:false,
    createdAt:new Date().toLocaleString('en-IN'),
    rate:c.rates[mc.cropId], preCheck:S().precheck?S().precheck.title:{en:'Not done',hi:'नहीं हुई'} };
  S().bookings.push(b);
  c.used = Math.min(c.dailyCapacity, c.used + qty);
  notify('Your slot is confirmed','आपका स्लॉट पक्का हो गया',
    'Token #'+b.token+' at '+c.name.en, 'टोकन #'+b.token+' — '+c.name.hi, '🎫');
  DB.save(); tmp.slot = null; go('confirm');
}

VIEWS.confirm = () => {
  const b = myBooking(); if(!b) return VIEWS.dash();
  const c = centre(b.centreId);
  return `
${bar(t('bookingConfirmed'),'dash')}
<div class="app"><div class="wrap">
  <div class="banner g"><div class="em">🎫</div><div class="t">${esc(t('token'))} #${b.token}</div>
    <div style="font-size:15px">${esc(L(c.name))}<br>${esc(t(b.date))} · ${esc(b.time)}</div></div>
  <div class="card">
    <div class="kv"><span>${esc(t('farmer'))}</span><b>${esc(me().name)}</b></div>
    <div class="kv"><span>${esc(t('farmerId'))}</span><b>${esc(me().farmerId)}</b></div>
    <div class="kv"><span>${esc(t('crop'))}</span><b>${crop(b.cropId).emoji} ${esc(cropName(b.cropId))}</b></div>
    <div class="kv"><span>${esc(t('qty'))}</span><b>${b.quantity} ${esc(t('quintal'))}</b></div>
    <div class="kv"><span>${esc(t('centre'))}</span><b>${esc(L(c.name))}</b></div>
    <div class="kv"><span>${esc(t('dateTime'))}</span><b>${esc(t(b.date))} ${esc(b.time)}</b></div>
    <div class="kv"><span>${esc(t('bookingId'))}</span><b>${esc(b.id)}</b></div>
    <div class="kv"><span>${esc(t('token'))}</span><b>#${b.token}</b></div>
    <div class="kv"><span>${esc(t('todaysRate'))}</span><b>${rupee(b.rate)}${esc(t('perQ'))}</b></div>
    ${b.quantity?`<div class="kv"><span>${esc(t('estValue'))}</span><b>${rupee(b.quantity*b.rate)}</b></div>`:''}
    <div class="card tight" style="background:var(--blueBg);color:var(--blue);margin-top:14px;box-shadow:none;animation:none">
      <div class="muted" style="color:inherit">🔐 ${esc(t('otpTitle'))} — ${esc(t('otpShow'))}</div>
      <div class="big" style="letter-spacing:4px">${esc(b.otp)}</div>
      <div style="font-size:12.5px">${esc(t('trace'))}</div>
    </div>
    <button class="btn" onclick="go('queue')">👥 ${esc(t('viewQueue'))}</button>
    <button class="btn ghost" onclick="go('dash')">${esc(t('backHome'))}</button>
  </div>
</div></div>${farmerNav('')}`;
};

VIEWS.queue = () => {
  const b = myBooking();
  if(!b) return `${bar(t('liveQueue'),'dash')}<div class="app"><div class="wrap"><div class="card">
    <p>${esc(t('noBooking'))}</p><button class="btn" onclick="go('centres')">${esc(t('findCentres'))}</button></div></div></div>${farmerNav('queue')}`;
  const c = centre(b.centreId);
  const ahead = Math.max(0, b.token - c.currentToken);
  const mins = ahead * c.avgMin, served = c.currentToken >= b.token;
  return `${bar(t('liveQueue'),'dash')}
<div class="app"><div class="wrap">
  <div class="banner ${served?'g':ahead<=5?'a':'b'}">
    <div class="em">${served?'✅':'👥'}</div>
    <div class="t">${served ? esc(t('yourTurn')) : ahead+' '+esc(t('aheadTxt'))}</div>
    <div style="font-size:14.5px">${served ? esc(t('goCounter'))+' '+esc(L(c.name)) : esc(t('estWait'))+': '+esc(hm(mins))}</div>
  </div>
  <div class="card">
    <div class="kv"><span>${esc(t('yourToken'))}</span><b style="font-size:21px">#${b.token}</b></div>
    <div class="kv"><span>${esc(t('currentlyServing'))}</span><b style="font-size:21px">#${c.currentToken}</b></div>
    <div class="kv"><span>${esc(t('ahead'))}</span><b>${ahead}</b></div>
    <div class="kv"><span>${esc(t('estWait'))}</span><b>${esc(hm(mins))}</b></div>
    <div class="kv"><span>${esc(t('centre'))}</span><b>${esc(L(c.name))}</b></div>
    <div class="kv"><span>${esc(t('avgTime'))}</span><b>${c.avgMin} ${esc(t('min'))}</b></div>
    <div class="bar" style="margin-top:12px"><i style="width:${Math.min(100,Math.round(c.currentToken/b.token*100))}%"></i></div>
    <p class="muted" style="margin-top:8px">${esc(t('queueAuto'))}</p>
    ${b.verified?`<div class="pill g" style="margin-top:10px">✅ ${esc(t('otpOk'))}</div>`
      :`<div class="card tight" style="background:var(--blueBg);color:var(--blue);margin-top:12px;box-shadow:none;animation:none">
        <div class="muted" style="color:inherit">🔐 ${esc(t('otpShow'))}</div>
        <div class="big" style="letter-spacing:4px">${esc(b.otp)}</div></div>`}
    <button class="btn ghost" onclick="render()">🔄 ${esc(t('refresh'))}</button>
    <button class="btn line" onclick="go('status')">📦 ${esc(t('procStatus'))}</button>
  </div>
</div></div>${farmerNav('queue')}`;
};

VIEWS.status = () => {
  const b = myBooking();
  if(!b) return `${bar(t('procStatus'),'dash')}<div class="app"><div class="wrap"><div class="card">
    <p>${esc(t('nothingTrack'))}</p><button class="btn" onclick="go('centres')">${esc(t('findCentres'))}</button></div></div></div>${farmerNav('status')}`;
  const c = centre(b.centreId), failed = b.qc && b.qc.result==='FAIL';
  return `
${bar(t('myProc'),'dash')}
<div class="app"><div class="wrap">
  <div class="card tight">
    <div class="kv"><span>${esc(t('bookingId'))}</span><b>${esc(b.id)} · #${b.token}</b></div>
    <div class="kv"><span>${esc(t('centre'))}</span><b>${esc(L(c.name))}</b></div>
    <div class="kv"><span>${esc(t('crop'))}</span><b>${esc(cropName(b.cropId))} · ${b.quantity} ${esc(t('quintal'))}</b></div>
  </div>
  <div class="card">
    <h3>🛤️ ${esc(t('journey'))}</h3>
    <ul class="steps">
      ${JOURNEY.map((s,i)=>{
        const cls = failed && i===2 ? 'fail' : i<b.stage ? 'done' : i===b.stage ? 'now' : '';
        const icon = failed && i===2 ? '✕' : i<b.stage ? '✓' : i===b.stage ? '•' : '';
        let sub='';
        if(i===2 && b.qc) sub = L(b.qc.reason);
        if(i===4 && b.weighment) sub = t('net')+': '+b.weighment.net+' '+t('kg');
        if(i===5 && b.weighment) sub = t('amount')+': '+rupee(b.weighment.amount);
        return `<li class="${cls}"><span class="dot">${icon}</span><div>
          <div class="lbl">${esc(L(s))}</div>${sub?`<div class="sub">${esc(sub)}</div>`:''}</div></li>`;}).join('')}
    </ul>
    ${failed?`<div class="card tight" style="background:var(--redBg);color:var(--red);box-shadow:none;animation:none">
      ⛔ ${esc(L(b.qc.reason))}</div>`:''}
  </div>
  ${b.weighment?`<div class="card">
    <h3>🧾 ${esc(t('receipt'))}</h3>
    <div class="kv"><span>${esc(t('gross'))}</span><b>${b.weighment.gross} ${esc(t('kg'))}</b></div>
    <div class="kv"><span>${esc(t('tare'))}</span><b>${b.weighment.tare} ${esc(t('kg'))}</b></div>
    <div class="kv"><span>${esc(t('deduction'))}</span><b>${b.weighment.deduction||0} ${esc(t('kg'))}</b></div>
    <div class="kv"><span>${esc(t('net'))}</span><b>${b.weighment.net} ${esc(t('kg'))} (${(b.weighment.net/100).toFixed(2)} ${esc(t('quintal'))})</b></div>
    <div class="kv"><span>${esc(t('rate'))}</span><b>${rupee(b.weighment.rate)}${esc(t('perQ'))}</b></div>
    <div class="kv"><span>${esc(t('amount'))}</span><b style="font-size:19px">${rupee(b.weighment.amount)}</b></div>
    <p class="muted">${esc(b.id)} · ${esc(L(c.name))}</p>
    <p class="muted">${esc(t('deductNote'))}</p>
    <button class="btn sm line" onclick="downloadReceipt('${b.id}')">⬇️ ${esc(t('downloadReceipt'))}</button>
  </div>`:''}
  <button class="btn" onclick="go('payment')">💰 ${esc(t('payTracker'))}</button>
</div></div>${farmerNav('status')}`;
};

VIEWS.payment = () => {
  const b = myBooking();
  if(!b) return `${bar(t('payment'),'dash')}<div class="app"><div class="wrap"><div class="card">
    <p>${esc(t('nothingTrack'))}</p></div></div></div>${farmerNav('status')}`;
  const amount = b.weighment ? b.weighment.amount : b.quantity*b.rate;
  return `
${bar(t('payTracker'),'status')}
<div class="app"><div class="wrap">
  <div class="banner ${b.paymentStep>=6?'g':'a'}">
    <div class="em">${b.paymentStep>=6?'✅':'⏳'}</div><div class="t">${rupee(amount)}</div>
    <div style="font-size:14.5px">${b.paymentStep>=6 ? esc(t('payCredited'))
      : esc(t('payStatus'))+': '+esc(b.paymentStep? L(PAYMENT_STEPS[b.paymentStep-1]) : '—')}</div>
  </div>
  <div class="card">
    <ul class="steps">
      ${PAYMENT_STEPS.map((s,i)=>{
        const cls = i<b.paymentStep ? 'done' : i===b.paymentStep ? 'now' : '';
        return `<li class="${cls}"><span class="dot">${i<b.paymentStep?'✓':i===b.paymentStep?'•':''}</span>
          <div><div class="lbl">${esc(L(s))}</div></div></li>`;}).join('')}
    </ul>
    <p class="muted">${b.weighment?esc(t('fromReceipt')):esc(t('estNote'))}</p>
    <p class="muted"><span class="demo">${esc(t('paySim'))}</span></p>
    ${b.weighment?`<button class="btn line" onclick="downloadReceipt('${b.id}')">⬇️ ${esc(t('downloadReceipt'))}</button>`:''}
  </div>
</div></div>${farmerNav('status')}`;
};

VIEWS.notif = () => {
  S().notifications.forEach(n=>n.read=true); DB.save();
  const n = S().notifications;
  return `
${bar(t('notifications'),'dash')}
<div class="app"><div class="wrap"><div class="card">
  <div class="row between" style="margin-bottom:6px">
    <h3 style="margin:0">🔔 ${esc(t('notifications'))} (${n.length})</h3>
    ${n.length?`<button class="btn sm danger" onclick="clearNotifs()">🗑️ ${esc(t('clearAll'))}</button>`:''}
  </div>
  ${n.length ? n.map(x=>`<div class="notif"><div class="e">${x.emoji}</div><div>
      <div class="t">${esc(L(x.title))}</div><div class="d">${esc(L(x.detail))}</div><div class="d">${esc(x.time)}</div>
    </div></div>`).join('') : `<p class="muted">${esc(t('noNotif'))}</p>`}
</div></div></div>${farmerNav('notif')}`;
};
function clearNotifs(){ S().notifications = []; commit(); toast(t('cleared')); }

const adminCentre = () => centre(S().session.centreId);
const centreBookings = () => S().bookings.filter(b=>b.centreId===S().session.centreId);

VIEWS.adash = () => {
  const c = adminCentre(), bs = centreBookings();
  const done = bs.filter(b=>b.stage>=5).length, wait = bs.filter(b=>b.stage<5).length;
  const acc = bs.filter(b=>b.qc&&b.qc.result==='PASS').length, rej = bs.filter(b=>b.qc&&b.qc.result==='FAIL').length;
  const tq = bs.filter(b=>b.weighment).reduce((s,b)=>s+b.weighment.net/100,0);
  const st=(n,l)=>`<div class="stat"><div class="n">${n}</div><div class="l">${esc(l)}</div></div>`;
  return `
${bar(t('centreAdmin'), null, `<button class="iconbtn" onclick="logout()">⎋</button>`)}
<div class="app wide"><div class="wrap">
  <div class="card tight">
    <label style="margin-top:0">${esc(t('centre'))}</label>
    <select onchange="S().session.centreId=this.value;commit()">
      ${S().centres.map(x=>`<option value="${x.id}" ${x.id===c.id?'selected':''}>${esc(L(x.name))}</option>`).join('')}
    </select>
  </div>
  <div class="card"><h3>📦 ${esc(t('todayCap'))}</h3><div class="grid3">
    ${st(c.dailyCapacity,t('dailyCap'))}${st(c.used,t('usedCap'))}${st(remaining(c),t('remaining'))}
    ${st(slotsFor(c).today.length,t('slotsOpen'))}${st(done,t('completed'))}${st(wait,t('waitingN'))}</div>
    <div class="bar" style="margin-top:12px"><i style="width:${capPct(c)}%"></i></div>
    <div class="muted">${capPct(c)}% · <b>${esc(capLabel(c))}</b></div></div>
  <div class="card"><h3>🧰 ${esc(t('resources'))}</h3><div class="grid3">
    ${[['staff','staff','👷'],['machines','machines','⚖️'],['trucks','trucks','🚛'],['bags','bags','🧺']]
      .map(([k,l,e])=>`<div class="stat"><div class="n">${e} ${c.resources[k]}</div><div class="l">${esc(t(l))}</div>
        <input type="number" value="${c.resources[k]}" style="margin-top:6px;padding:8px"
          onchange="adminCentre().resources['${k}']=+this.value;commit()"></div>`).join('')}</div></div>
  <div class="card"><h3>🎫 ${esc(t('aQueue'))}</h3><div class="grid3">
    ${st('#'+c.currentToken,t('currentToken'))}${st(waiting(c),t('farmersWaiting'))}${st(hm(waitMins(c)),t('procTime'))}</div>
    <button class="btn" onclick="go('aqueue')">${esc(t('manageQueue'))} →</button></div>
  <div class="card"><h3>🌾 ${esc(t('procurement'))}</h3><div class="grid3">
    ${st(acc,t('accepted'))}${st(rej,t('rejected'))}${st(bs.length-acc-rej,t('pending'))}${st(tq.toFixed(2),t('totalQty'))}</div></div>
</div></div>${adminNav('adash')}`;
};

VIEWS.aanalytics = () => {
  const c = adminCentre(), bs = centreBookings();
  const accepted = bs.filter(b=>b.qc&&b.qc.result==='PASS').length;
  const tracked = bs.filter(b=>b.weighment).reduce((sum,b)=>sum+b.weighment.amount,0);
  const avgWait = bs.length ? Math.round(bs.reduce((sum,b)=>sum+Math.max(0,b.token-c.currentToken),0)/bs.length*c.avgMin) : waitMins(c);
  const metric = (value,label,percent)=>`<div class="analytics-metric"><div class="row between"><b>${value}</b><span>${esc(label)}</span></div><div class="bar"><i style="width:${Math.min(100,Math.max(0,percent))}%"></i></div></div>`;
  return `${bar(t('analyticsTitle'),'adash')}
<div class="app wide"><div class="wrap">
 <div class="card tight"><div class="row between"><div><span class="eyebrow">${esc(t('aAnalytics'))}</span><h2 style="margin:4px 0 0">${esc(L(c.name))}</h2></div><span class="pill g">● ${esc(t('liveSync'))}</span></div></div>
 <div class="card"><h3>📈 ${esc(t('analyticsTitle'))}</h3><div class="grid3">
  ${metric(bs.length,t('totalBookings'),Math.min(100,bs.length*10))}
  ${metric(capPct(c)+'%',t('utilization'),capPct(c))}
  ${metric(accepted+'/'+(bs.length||0),t('acceptanceRate'),bs.length?accepted/bs.length*100:0)}
  ${metric(hm(avgWait),t('avgWait'),Math.min(100,avgWait/3))}
  ${metric(rupee(tracked),t('revenueTracked'),tracked?100:0)}
 </div></div>
 <div class="card"><h3>🎫 ${esc(t('aQueue'))}</h3><div class="kv"><span>${esc(t('currentToken'))}</span><b>#${c.currentToken}</b></div><div class="kv"><span>${esc(t('farmersWaiting'))}</span><b>${waiting(c)}</b></div><div class="kv"><span>${esc(t('remainCap'))}</span><b>${remaining(c)} ${esc(t('quintal'))}</b></div><p class="muted">${esc(t('liveNote'))}</p></div>
</div></div>${adminNav('aanalytics')}`;
};

VIEWS.aqueue = () => {
  const c = adminCentre(), bs = centreBookings();
  return `
${bar(t('queueControl'),'adash')}
<div class="app wide"><div class="wrap">
 <div class="card">
  <div class="row between"><h3 style="margin:0">${esc(L(c.name))}</h3>
    <span class="pill ${tone(queueKey(c))}">${esc(t('queue'))} ${esc(queueLabel(c))}</span></div>
  <div style="text-align:center;margin:18px 0">
    <div class="muted">${esc(t('currentlyServing'))}</div>
    <div class="big" style="font-size:52px;color:var(--accent)">#${c.currentToken}</div>
  </div>
  <div class="row" style="justify-content:center">
    <button class="btn sm ghost" onclick="moveToken(-1)">← ${esc(t('prev'))}</button>
    <button class="btn sm" onclick="moveToken(1)">${esc(t('callNext'))} →</button>
  </div>
  <label>${esc(t('setToken'))}</label>
  <div class="row"><input id="setTok" type="number" value="${c.currentToken}" style="flex:1">
    <button class="btn sm line" onclick="setTokenVal()">${esc(t('set'))}</button></div>
  <label>${esc(t('lastToken'))}</label>
  <input type="number" value="${c.lastToken}" onchange="adminCentre().lastToken=+this.value;commit()">
  <label>${esc(t('avgMin'))}</label>
  <input type="number" value="${c.avgMin}" onchange="adminCentre().avgMin=+this.value||1;commit()">
  <p class="muted">${esc(t('queueNote'))}</p>
 </div>
 <div class="card"><h3>${esc(t('tokensHere'))}</h3>
  ${bs.length? bs.map(b=>`<div class="kv"><span>#${b.token} · ${esc(S().farmers.find(f=>f.id===b.farmerId).name)} · ${b.quantity}</span>
    <b>${esc(L(JOURNEY[b.stage]))}</b></div>`).join('') : `<p class="muted">${esc(t('noBookings'))}</p>`}</div>
</div></div>${adminNav('aqueue')}`;
};
function moveToken(d){ const c=adminCentre(); c.currentToken=Math.max(0,c.currentToken+d); pingFarmers(c); commit(); toast('#'+c.currentToken); }
function setTokenVal(){ const c=adminCentre(); c.currentToken=Math.max(0,+$('setTok').value||0); pingFarmers(c); commit(); toast('#'+c.currentToken); }
function pingFarmers(c){
  S().bookings.filter(b=>b.centreId===c.id).forEach(b=>{
    const ahead = b.token - c.currentToken;
    if(ahead === 0) notify('Your turn is next','आपकी बारी अगली है','Please move to the counter at '+c.name.en,'कृपया काउंटर पर जाएँ — '+c.name.hi,'🔔');
    else if(ahead>0 && ahead*c.avgMin<=32 && ahead*c.avgMin>24)
      notify('Your turn is expected in about 30 minutes','आपकी बारी लगभग 30 मिनट में आएगी',
        'Token #'+b.token+' at '+c.name.en,'टोकन #'+b.token+' — '+c.name.hi,'⏰');
  });
}

VIEWS.abook = () => {
  const bs = centreBookings();
  return `
${bar(t('farmersProc'),'adash')}
<div class="app wide"><div class="wrap">
 ${bs.length? bs.map(b=>{
   const f = S().farmers.find(x=>x.id===b.farmerId), c = centre(b.centreId);
   return `<div class="card">
    <div class="row between">
      <div><b>🎫 #${b.token} · ${esc(f.name)}</b>
        <div class="muted">${esc(b.id)} · ${esc(cropName(b.cropId))} · ${b.quantity} ${esc(t('quintal'))} · ${esc(t(b.date))} ${esc(b.time)}</div>
        <div class="muted">${esc(t('preCheck'))}: ${esc(L(b.preCheck))}</div></div>
      <span class="pill b">${esc(L(JOURNEY[b.stage]))}</span></div>
    ${b.stage===0?`<div class="card tight" style="margin-top:12px;background:var(--surface2);box-shadow:none;animation:none">
      <h3>🔐 ${esc(t('markArrived'))} — ${esc(t('otpTitle'))}</h3>
      <p class="muted" style="margin:0">${esc(t('trace'))}</p>
      <label>${esc(t('enterOtp'))}</label>
      <input id="otp_${b.id}" inputmode="numeric" maxlength="6" placeholder="● ● ● ● ● ●" style="letter-spacing:5px;text-align:center;font-weight:800">
      <button class="btn sm" style="margin-top:12px" onclick="verifyArrival('${b.id}')">✅ ${esc(t('verifyArr'))}</button>
    </div>`:''}
    ${b.stage===1?`<div class="card tight" style="margin-top:12px;background:var(--surface2);box-shadow:none;animation:none">
      <h3>${esc(t('qcTitle'))}</h3>
      <div class="kv"><span>${esc(t('crop'))}</span><b>${esc(cropName(b.cropId))}</b></div>
      <div class="kv"><span>${esc(t('farmer'))}</span><b>${esc(f.name)}</b></div>
      <div class="kv"><span>${esc(t('qty'))}</span><b>${b.quantity}</b></div>
      <div class="kv"><span>${esc(t('permitted'))}</span><b>≤ ${crop(b.cropId).moistureLimit}%</b></div>
      <label>${esc(t('measured'))}</label>
      <input id="qm_${b.id}" type="number" step="0.1" value="${crop(b.cropId).moistureLimit - 1}">
      <label>${esc(t('failReason'))}</label>
      <select id="qr_${b.id}">${QC_REASONS.map((r,i)=>`<option value="${i}">${esc(L(r))}</option>`).join('')}</select>
      <div class="row" style="margin-top:12px">
        <button class="btn sm" onclick="qualityCheck('${b.id}','PASS')">✔ ${esc(t('pass'))}</button>
        <button class="btn sm danger" onclick="qualityCheck('${b.id}','FAIL')">✖ ${esc(t('fail'))}</button></div>
      <p class="muted" style="margin-top:8px">${esc(t('qcNote'))}</p></div>`:''}
    ${b.qc&&b.qc.result==='FAIL'&&b.stage===1?`<div class="card tight" style="background:var(--redBg);color:var(--red);margin-top:8px;box-shadow:none;animation:none">
      ${esc(L(b.qc.reason))}</div>`:''}
    ${b.stage===3?`<div class="card tight" style="margin-top:12px;background:var(--surface2);box-shadow:none;animation:none">
      <h3>${esc(t('weighTitle'))}</h3>
      <label>${esc(t('gross'))} (${esc(t('kg'))})</label><input id="g_${b.id}" type="number" value="${b.quantity*100+120}">
      <label>${esc(t('tare'))} (${esc(t('kg'))})</label><input id="t_${b.id}" type="number" value="120">
      <label>${esc(t('deduction'))}</label><input id="d_${b.id}" type="number" value="0">
      <label>${esc(t('rate'))}</label><input id="r_${b.id}" type="number" value="${c.rates[b.cropId]}">
      <p class="muted" style="margin:8px 0 0">${esc(t('deductNote'))}</p>
      <button class="btn sm" style="margin-top:12px" onclick="doWeighment('${b.id}')">🧾 ${esc(t('saveWeigh'))}</button></div>`:''}
    ${b.weighment?`<div class="card tight" style="margin-top:8px;box-shadow:none;animation:none">
      <div class="kv"><span>${esc(t('net'))}</span><b>${b.weighment.net} ${esc(t('kg'))}</b></div>
      <div class="kv"><span>${esc(t('amount'))}</span><b>${rupee(b.weighment.amount)}</b></div></div>`:''}
    ${b.stage===4?`<button class="btn sm" style="margin-top:12px" onclick="advance('${b.id}')">📦 ${esc(t('markProc'))}</button>`:''}
    ${b.stage>=5&&b.stage<7?`<button class="btn sm" style="margin-top:12px" onclick="advance('${b.id}')">💰 ${esc(b.stage===5?t('initPay'):t('markCredited'))}</button>`:''}
    ${b.stage>=5&&b.paymentStep<6?`<button class="btn sm ghost" style="margin-top:8px" onclick="advancePayment('${b.id}')">➡️ ${esc(t('advPay'))}: ${esc(L(PAYMENT_STEPS[b.paymentStep]))}</button>`:''}
    ${b.stage===7?`<div class="pill g" style="margin-top:12px">✅ ${esc(t('journeyDone'))}</div>`:''}
   </div>`;}).join('') : `<div class="card"><p class="muted">${esc(t('noFarmers'))}</p></div>`}
</div></div>${adminNav('abook')}`;
};
const booking = id => S().bookings.find(b=>b.id===id);
function advance(id){
  const b = booking(id); if(!b || b.stage>=7) return;
  b.stage++; const c = centre(b.centreId);
  const m = {1:['Arrival recorded','पहुँचना दर्ज','You are marked present at '+c.name.en,'आप '+c.name.hi+' पर दर्ज हैं','📍'],
             3:['Quality check completed','गुणवत्ता जाँच पूरी','Your crop was accepted','आपकी फसल स्वीकार हुई','✅'],
             5:['Procurement completed','खरीद पूरी','Your crop has been procured','आपकी फसल खरीद ली गई','📦'],
             6:['Payment initiated','भुगतान शुरू','Payment has been initiated','भुगतान शुरू कर दिया गया','💰'],
             7:['Payment credited','भुगतान जमा','Amount credited to your bank account','राशि आपके बैंक खाते में आ गई','🏦']};
  if(m[b.stage]) notify(...m[b.stage]);
  if(b.stage===5) b.paymentStep = Math.max(b.paymentStep,1);
  if(b.stage===6) b.paymentStep = Math.max(b.paymentStep,5);
  if(b.stage===7) b.paymentStep = 6;
  commit(); toast(L(JOURNEY[b.stage]));
}
function verifyArrival(id){
  const b = booking(id);
  const v = ($('otp_'+id).value||'').trim();
  if(v !== b.otp){ toast(t('otpWrong')); return; }
  b.verified = true;
  logAuto('🔐','Identity verified for token #'+b.token+' — farmer, slot, crop and record are now linked.',
    'टोकन #'+b.token+' की पहचान जाँच पूरी — किसान, स्लॉट, फसल और रिकॉर्ड जुड़ गए।');
  notify('Identity verified','पहचान जाँच पूरी','Your booking is verified at the gate','गेट पर आपकी बुकिंग जाँच ली गई','🔐');
  advance(id);
}
function qualityCheck(id,result){
  const b = booking(id);
  const m = +($('qm_'+id)?$('qm_'+id).value:0) || 0, lim = crop(b.cropId).moistureLimit;
  b.qcMoisture = m;
  if(result==='PASS'){ b.qc={result:'PASS',reason:{en:'Passed · moisture '+m+'% (limit '+lim+'%)',hi:'पास · नमी '+m+'% (सीमा '+lim+'%)'}}; b.stage=3;
    notify('Quality check completed','गुणवत्ता जाँच पूरी','Your crop passed the quality check','आपकी फसल जाँच में पास हुई','✅'); }
  else { const r0 = QC_REASONS[+$('qr_'+id).value];
    const r = { en:r0.en+' · measured '+m+'%, permitted ≤'+lim+'%', hi:r0.hi+' · मापी गई '+m+'%, अनुमत ≤'+lim+'%' };
    b.qc={result:'FAIL',reason:r};
    notify('Quality check found an issue','गुणवत्ता जाँच में समस्या', r.en+' — please talk to centre staff', r.hi+' — कृपया केंद्र कर्मचारी से बात करें','⛔'); }
  commit(); toast(result==='PASS'?t('pass'):t('fail'));
}
function doWeighment(id){
  const b = booking(id);
  const gross=+$('g_'+id).value||0, tare=+$('t_'+id).value||0, rate=+$('r_'+id).value||0,
        deduction=+$('d_'+id).value||0;
  const net = Math.max(0, gross-tare-deduction);
  b.weighment = { gross, tare, deduction, net, rate, amount: Math.round(net/100*rate) };
  b.stage = 4;
  notify('Weighment recorded','तौल दर्ज हुई', 'Net '+net+' kg · '+rupee(b.weighment.amount), 'शुद्ध '+net+' किग्रा · '+rupee(b.weighment.amount),'⚖️');
  commit(); toast(t('receipt'));
}
function downloadReceipt(id){
  const b = S().bookings.find(x=>x.id===id);
  if(!b || !b.weighment) return;
  const f = S().farmers.find(x=>x.id===b.farmerId), c = centre(b.centreId);
  const w = b.weighment;
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${t('receipt')} - ${b.id}</title><style>body{font:16px Arial;max-width:640px;margin:40px auto;color:#16251c}h1{color:#12783f}table{width:100%;border-collapse:collapse}td{padding:10px;border-bottom:1px solid #dce8dc}td:last-child{text-align:right;font-weight:700}.total{font-size:22px}</style></head><body><h1>${t('receipt')}</h1><p>${esc(L(c.name))} · ${esc(b.id)}</p><p>${esc(f.name)} · ${esc(f.farmerId)}</p><table><tr><td>${t('gross')}</td><td>${w.gross} ${t('kg')}</td></tr><tr><td>${t('tare')}</td><td>${w.tare} ${t('kg')}</td></tr><tr><td>${t('deduction')}</td><td>${w.deduction||0} ${t('kg')}</td></tr><tr><td>${t('net')}</td><td>${w.net} ${t('kg')}</td></tr><tr><td>${t('rate')}</td><td>${rupee(w.rate)}${t('perQ')}</td></tr><tr class="total"><td>${t('amount')}</td><td>${rupee(w.amount)}</td></tr></table><p>${new Date().toLocaleString('en-IN')}</p></body></html>`;
  const blob = new Blob([html], {type:'text/html'}), url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = 'receipt-'+b.id+'.html'; link.click(); URL.revokeObjectURL(url); toast(t('receiptDownloaded'));
}
function advancePayment(id){
  const b = booking(id);
  if(b.paymentStep<6){ b.paymentStep++;
    notify('Payment update','भुगतान अपडेट', PAYMENT_STEPS[b.paymentStep-1].en+' — '+b.id, PAYMENT_STEPS[b.paymentStep-1].hi+' — '+b.id,'💰'); }
  if(b.paymentStep>=5 && b.stage<6) b.stage=6;
  if(b.paymentStep===6) b.stage=7;
  commit(); toast(L(PAYMENT_STEPS[b.paymentStep-1]));
}

VIEWS.aauto = () => {
  const ev = S().autoEvents || [];
  const rules = [
    ['📦','Capacity becomes low','क्षमता कम हो जाए','Slots are reduced and new farmers are redirected to another centre.','स्लॉट घटा दिए जाते हैं और नए किसान दूसरे केंद्र भेजे जाते हैं।'],
    ['👥','Queue becomes high','लाइन लंबी हो जाए','Waiting time is recalculated and farmers are informed.','इंतज़ार का समय दोबारा गिना जाता है और किसानों को बताया जाता है।'],
    ['⚠️','Crop risk is high','फसल का जोखिम ज़्यादा हो','The farmer is warned before booking, with the reason and the fix.','बुकिंग से पहले किसान को कारण और उपाय सहित चेतावनी दी जाती है।'],
    ['⭐','Another centre is better','दूसरा केंद्र बेहतर हो','That centre is recommended instead, with the reason shown.','उसी केंद्र का सुझाव दिया जाता है, कारण के साथ।'],
    ['📲','Procurement status changes','खरीद की स्थिति बदले','An SMS / app notification is sent automatically.','SMS / ऐप सूचना अपने आप भेजी जाती है।']
  ];
  return `
${bar(t('automation'),'adash')}
<div class="app wide"><div class="wrap">
 <div class="card">
  <h3>🤖 ${esc(t('automation'))}</h3>
  <p class="muted">${esc(t('autoNote'))}</p>
  ${rules.map(r=>`<div class="notif"><div class="e">${r[0]}</div><div>
    <div class="t">${esc(LANG==='hi'?r[2]:r[1])}</div>
    <div class="d">→ ${esc(LANG==='hi'?r[4]:r[3])}</div></div></div>`).join('')}
 </div>
 <div class="card">
  <div class="row between" style="margin-bottom:6px">
    <h3 style="margin:0">📜 ${esc(t('autoLog'))} (${ev.length})</h3>
    ${ev.length?`<button class="btn sm danger" onclick="S().autoEvents=[];commit()">🗑️ ${esc(t('clearLog'))}</button>`:''}
  </div>
  ${ev.length ? ev.map(e=>`<div class="notif"><div class="e">${e.emoji}</div><div>
      <div class="t">${esc(L(e.text))}</div><div class="d">${esc(e.time)}</div></div></div>`).join('')
    : `<p class="muted">${esc(t('noAuto'))}</p>`}
 </div>
</div></div>${adminNav('aauto')}`;
};

VIEWS.about = () => {
  const steps = ['Registration','Crop Details','Crop Pre-Check','Acceptance Prediction','Price · Distance · Capacity · Queue',
    'Smart Recommendation','Smart Slot','Live Queue','Arrival + OTP','Quality Check','Weighment','Procurement','Payment Tracking','Money Credited'];
  const stepsHi = ['पंजीकरण','फसल विवरण','फसल पूर्व-जाँच','स्वीकृति भविष्यवाणी','भाव · दूरी · क्षमता · लाइन',
    'स्मार्ट सुझाव','स्मार्ट स्लॉट','लाइव लाइन','पहुँच + OTP','गुणवत्ता जाँच','तौल','खरीद','भुगतान ट्रैकिंग','पैसा जमा'];
  const inn = [['1','i1','i1d'],['2','i2','i2d'],['3','i3','i3d'],['4','i4','i4d']];
  return `
${bar(t('about'),'role')}
<div class="app"><div class="wrap">
  <div class="card">
    <h3>❓ ${esc(t('pitchQ'))}</h3>
    <p>${esc(t('pitchA'))}</p>
    <h3 style="margin-top:14px">✨ ${esc(t('diffQ'))}</h3>
    <p style="margin:0">${esc(t('diffA'))}</p>
  </div>
  <div class="card">
    <h3>🛤️ ${esc(t('ourFlow'))}</h3>
    <ul class="steps">${(LANG==='hi'?stepsHi:steps).map((x,i)=>`<li class="${i<5?'done':''}">
      <span class="dot">${i<5?'✓':i+1}</span><div><div class="lbl">${esc(x)}</div></div></li>`).join('')}</ul>
  </div>
  <div class="card">
    <h3>💡 ${esc(t('innov'))}</h3>
    ${inn.map(([n,a,b])=>`<div class="notif"><div class="e">${n}️⃣</div><div>
      <div class="t">${esc(t(a))}</div><div class="d">${esc(t(b))}</div></div></div>`).join('')}
  </div>
</div></div>`;
};

VIEWS.aset = () => {
  const c = adminCentre();
  return `
${bar(t('adminCtrl'),'adash')}
<div class="app wide"><div class="wrap">
 <div class="card">
  <h3>⚙️ ${esc(L(c.name))}</h3>
  <p class="muted">${esc(t('liveNote'))}</p>
  <label>${esc(t('dailyCap'))}</label>
  <input type="number" value="${c.dailyCapacity}" onchange="adminCentre().dailyCapacity=+this.value||1;commit()">
  <label>${esc(t('usedCap'))}</label>
  <input type="number" value="${c.used}" onchange="adminCentre().used=+this.value||0;commit()">
  <label>${esc(t('shownDist'))}</label>
  <input type="number" value="${distOf(c)}" onchange="adminCentre().distanceOverride=+this.value||null;commit()">
  <label>${esc(t('risk'))}</label>
  <select onchange="adminCentre().acceptanceRisk=this.value;commit()">
    ${['Low','Medium','High'].map(r=>`<option value="${r}" ${c.acceptanceRisk===r?'selected':''}>${esc(t(r.toLowerCase()))}</option>`).join('')}
  </select>
  <h3 style="margin-top:20px">💰 ${esc(t('cropRates'))}</h3>
  ${S().crops.map(cr=>`<label>${cr.emoji} ${esc(L(cr.name))}</label>
    <input type="number" value="${c.rates[cr.id]}" onchange="adminCentre().rates['${cr.id}']=+this.value||0;commit()">`).join('')}
  <h3 style="margin-top:20px">🗓️ ${esc(t('slotAvail'))}</h3>
  <p class="muted">${esc(t('slotRule'))}</p>
  <div class="row">${SLOT_TIMES.map(x=>`<span class="pill ${slotsFor(c).today.includes(x)?'g':'r'}">${x}</span>`).join('')}</div>
  <button class="btn ghost" onclick="resetAll()">${esc(t('resetData'))}</button>
 </div>
</div></div>${adminNav('aset')}`;
};

render();
window.addEventListener('storage', event=>{
  if(event.key===KEY){ DB.load(); render(); toast(t('liveSync')); }
});
