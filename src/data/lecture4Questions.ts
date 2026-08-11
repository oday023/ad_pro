import { Question } from '../types';

export const lecture4Questions: Question[] = [
  {
    id: "l4_q1",
    questionText: "في الأنماط المعمارية لتطبيقات الويب، أي من الأنماط التالية يعتمد على مبدأ \"الربط ثنائي الاتجاه\" (Two-Way Data Binding) المستخدم في أطر عمل مثل Angular و Vue؟",
    options: [
      "MVC (Model-View-Controller)",
      "MVVM (Model-View-ViewModel)",
      "Unidirectional Architecture",
      "Microservices"
    ],
    correctAnswerIndex: 1,
    explanation: "نمط MVVM (Model-View-ViewModel) يُعرف بوجود وسيط (ViewModel) يقوم بعمل ربط بيانات ثنائي الاتجاه (Two-Way Data Binding) بين الواجهة والبيانات، كما هو الحال في Vue و Angular."
  },
  {
    id: "l4_q2",
    questionText: "وفقاً لمبدأ فصل الاهتمامات (Separation of Concerns)، في أي طبقة يجب أن يتم وضع الكود الخاص بالتحقق من صحة البيانات المعقدة وقواعد العمل (Business Logic)؟",
    options: [
      "طبقة العرض (Presentation - React Components)",
      "طبقة الوصول للبيانات (Data Access - ORM)",
      "طبقة البنية التحتية (Infrastructure - Config)",
      "طبقة الخدمات (Services / Utils)"
    ],
    correctAnswerIndex: 3,
    explanation: "في تطبيقات الويب المهيكلة، يتم عزل منطق الأعمال (Business Logic) وقواعد التحقق في طبقة الخدمات (Services / Utils) لضمان استقلاليتها عن طبقة العرض (React)."
  },
  {
    id: "l4_q3",
    questionText: "حسب مبادئ ومعايير تصميم REST، ما هي الطريقة الصحيحة والمثلى لتسمية مسار يقوم بحذف مستخدم ذو المعرف 5؟ (Endpoint)",
    options: [
      "POST /deleteUser?id=5",
      "DELETE /users/5",
      "DELETE /user/delete/5",
      "GET /users/5/remove"
    ],
    correctAnswerIndex: 1,
    explanation: "في مبادئ REST، تُستخدم الموارد كأسماء في المسار (مثل /users) وتُستخدم أفعال HTTP القياسية (مثل DELETE) للإشارة للعملية، لذا DELETE /users/5 هو الأصح."
  },
  {
    id: "l4_q4",
    questionText: "وفقاً لنموذج نضج ريتشاردسون (Richardson Maturity Model)، ما هو المعيار الذي يُميز \"المستوى 3\" والذي يُعتبر أعلى مستوى لنضج واجهات REST APIs؟",
    options: [
      "استخدام أفعال HTTP الصحيحة مثل POST و GET.",
      "استخدام مسارات (URLs) منفصلة لكل مورد.",
      "إرفاق روابط للعمليات المتاحة الأخرى ضمن الاستجابة (HATEOAS).",
      "تضمين جميع البيانات المطلوبة في نقطة وصول واحدة (Endpoint) عبر POST."
    ],
    correctAnswerIndex: 2,
    explanation: "المستوى 3 (الأعلى) في نموذج نضج ريتشاردسون هو توفير روابط تشعبية (Hypermedia) ضمن الاستجابة لتعريف العميل بالعمليات المتاحة لاحقاً، ويُعرف بـ HATEOAS."
  },
  {
    id: "l4_q5",
    questionText: "ما هي الوظيفة الأساسية لنمط Middleware في إطار عمل Express، وما هو نمط التصميم المستوحى منه؟ (Design Pattern)",
    options: [
      "إدارة قواعد البيانات؛ مستوحى من نمط Factory.",
      "تنفيذ دوال متسلسلة لمعالجة الطلب قبل وصوله للمعالج النهائي؛ مستوحى من سلسلة المسؤولية (Chain of Responsibility).",
      "إرسال إشعارات لحظية للمستخدمين؛ مستوحى من نمط Observer.",
      "تحسين أداء الواجهة الأمامية؛ مستوحى من نمط Decorator."
    ],
    correctAnswerIndex: 1,
    explanation: "الوسائط (Middleware) في Express تنفذ كدوال متسلسلة تمرر الطلب من واحدة للأخرى، وهو تطبيق صريح لنمط \"سلسلة المسؤولية\" (Chain of Responsibility) من أنماط GoF."
  },
  {
    id: "l4_q6",
    questionText: "وفقاً لسياسة نفس الأصل (Same-Origin Policy)، أي من العناوين التالية يُعتبر \"من نفس الأصل\" بالنسبة للعنوان http://example.com:3000 ؟",
    options: [
      "https://example.com:3000 (اختلاف البروتوكول)",
      "http://api.example.com:3000 (نطاق فرعي مختلف)",
      "http://example.com:3001 (منفذ مختلف)",
      "http://example.com:3000/page2 (نفس الأصل بمسار مختلف)"
    ],
    correctAnswerIndex: 3,
    explanation: "سياسة نفس الأصل تشترط تطابق 3 عناصر: (البروتوكول، النطاق، والمنفذ). العنوان في D يمتلك نفس البروتوكول (http) والنطاق (example.com) والمنفذ (3000)، واختلاف المسار الداخلي لا يؤثر."
  },
  {
    id: "l4_q7",
    questionText: "ما هو الفرق الأساسي بين طريقة التوسع الأفقي (Scale Out) والتوسع العمودي (Scale Up) للخوادم؟",
    options: [
      "التوسع العمودي بإضافة خوادم جديدة (RAM/CPU) بينما الأفقي يتم بزيادة قدرات الخادم الواحد.",
      "التوسع العمودي ليس له حد أقصى نظرياً، بينما الأفقي محدود بموارد الجهاز.",
      "التوسع الأفقي (Stateless) يتم بإضافة خوادم جديدة متماثلة وهو الأفضل للتطبيقات الحديثة المستقلة. بينما العمودي يزيد موارد خادم واحد.",
      "التوسع الأفقي يتطلب إيقاف تشغيل النظام تماماً لترقيته (Downtime)."
    ],
    correctAnswerIndex: 2,
    explanation: "التوسع الأفقي (Scale Out) يعني إضافة أجهزة/خوادم جديدة متماثلة تعمل معاً، وهو المفصل حالياً بفضل تقنيات الـ Load Balancer لأنه لا نهائي تقريباً ويوفر توافرية عالية."
  },
  {
    id: "l4_q8",
    questionText: "ما هو الغرض الرئيسي لطلب Preflight (طلب OPTIONS) الذي يُرسله المتصفح في آلية CORS؟",
    options: [
      "جلب البيانات الأولية من الخادم وتخزينها في ذاكرة التخزين المؤقت.",
      "التأكد المسبق من الخادم ما إذا كان يسمح بإجراء الطلب الفعلي ذو الطبيعة غير البسيطة (مثل PUT أو DELETE).",
      "الخاصة بالخادم لتأمين الاتصال SSL/TLS التحقق من صلاحية شهادة.",
      "فحص حالة قاعدة البيانات قبل تنفيذ عمليات الكتابة (Transactions)."
    ],
    correctAnswerIndex: 1,
    explanation: "طلب Preflight (OPTIONS) يُرسل من قبل المتصفح للمتحقق مسبقاً من ترويسات CORS قبل إرسال الطلبات المعقدة التي يمكن أن تغير البيانات (مثل PUT/DELETE) لضمان أمان الخادم."
  },
  {
    id: "l4_q9",
    questionText: "يشتكي مطور الواجهة الخلفية من أن قيمة request.body دائماً undefined عند استقبال طلب Express؟ ما هو السطر البرمجي المفقود في إعدادات POST.",
    options: [
      "app.use(express.urlencoded());",
      "app.use(cors());",
      "app.use(express.json());",
      "app.use(requestLogger);"
    ],
    correctAnswerIndex: 2,
    explanation: "في Express الحديث، يجب استخدام الوسيط `express.json()` صراحة لتحليل جسم الطلب القادم بصيغة JSON وتحويله لكائن يسهل الوصول إليه عبر `req.body`."
  },
  {
    id: "l4_q10",
    questionText: "الكود التالي لإعداد معالج الأخطاء (Error Handler Middleware) لا يعمل. أين تكمن المشكلة؟\n\nconst app = express();\napp.use(errorHandler);\napp.use(express.json());\napp.get('/api/data', (req, res) => res.send('OK'));",
    options: [
      "app.use وليس app.set معالج الأخطاء يجب أن يُستخدم باستخدام.",
      "يجب أن يُوضع في نهاية الكود، بعد تعريف جميع المسارات (Routes) والوسائط الأخرى (Error Handler).",
      "Express غير مدعومة في الإصدارات الحديثة من الدالة errorHandler.",
      "REST غير متوافق مع نمط '/api/data' المسار."
    ],
    correctAnswerIndex: 1,
    explanation: "معالج الأخطاء في Express يتبع نمط التسلسل (Pipeline). لكي نتمكن من التقاط الأخطاء من جميع المسارات السابقة، يجب أن يوضع دائماً في \"نهاية\" الكود."
  },
  {
    id: "l4_q11",
    questionText: "ما هو الخطأ البرمجي في طريقة استخراج المعرف (ID) من مسار الطلب (Route Parameter) في Express؟\n\napp.delete('/api/notes/:id', (request, response) => {\n  const id = request.query.id;\n  notes = notes.filter(n => n.id !== id);\n  response.status(204).end();\n});",
    options: [
      "response لاستخراج البيانات، يجب استخدام request لا يمكن استخدام.",
      "request.query.id وليس request.params.id تُستخرج من id الخاصة بـ.",
      "من التعرف عليه كمتغير Express يمنع id الرمز النقطي (:) قبل.",
      "لا تعمل على المصفوفات إذا كانت محتوياتها نصوصاً تعليمات filter."
    ],
    correctAnswerIndex: 1,
    explanation: "المتغيرات الموجودة ضمن مسار الـ URL (مثل id/:) تُسمى مسارات ديناميكية ويتم استخراجها في Express من الكائن `request.params` (أما query فتستخدم لمتغيرات الاستعلام مثل id=5?)."
  },
  {
    id: "l4_q12",
    questionText: "يحاول المطور تحديث ملاحظة باستخدام Axios، لكن الكود يعطي خطأً في الواجهة الأمامية، أين المشكلة؟\n\nconst updateNote = (id, newObject) => {\n  return axios.put(`http://localhost:3001/notes`, newObject)\n    .then(response => response.data);\n}",
    options: [
      "then. لذلك لا يمكن استخدام (Promises) لا ترجع وعوداً put الدالة.",
      "ليتدكن الخادم من معرفة العنصر المراد تحديثه `/notes/${id}` ليكون URL في نهاية عنوان (id) يجب إضافة رقم المعرف.",
      "حصراً POST لتحديث البيانات، يجب استخدام PUT لا يسمح باستخدام HTTP بروتوكول.",
      "تتطلب تمرير البيانات كمعامل ثالث وليس ثانٍ Axios دالة."
    ],
    correctAnswerIndex: 1,
    explanation: "في مسارات REST القياسية لعمليات PUT، يجب تحديد المورد المستهدف بشكل دقيق في رابط الطلب عبر إلحاق المعرف `http://localhost:3001/notes/${id}` ليكون `notes/id`."
  },
  {
    id: "l4_q13",
    questionText: "ما هو الخطأ في طريقة كتابة الأنماط المضمنة (Inline CSS) في مكون React التالي؟\n\nconst style = {\n  background-color: 'lightgrey',\n  font-size: '20px',\n  padding: 10\n}\nreturn <div style={style}>ملاحظة</div>",
    options: [
      "\"...=style\" أي JSX داخل (String) الأنماط يجب أن تمرر كنص.",
      "backgroundColor مثل camelCase يجب أن تكتب بنمط (Hyphen) الخصائص التي تحتوي على شرطة مثل fontSize.",
      "ولا تقبل الأرقام المجردة 'px' يجب أن تكون حصراً مع وحدة قياس مثل '10' الخاصية padding.",
      "هو كلمة محجوزة ولا يجوز استخدامه كاسم متغير style المتغير."
    ],
    correctAnswerIndex: 1,
    explanation: "في React المكتوب بـ JSX، خصائص التنسيق (CSS Properties) التي تحتوي على شرطة يجب أن تُكتب حصراً بأسلوب camelCase (مثل `backgroundColor` و `fontSize`)."
  },
  {
    id: "l4_q14",
    questionText: "المكون التالي لا يعمل بشكل صحيح ولا يعرض الإشعار للمستخدم. ما هو السبب المتعلق بالحالة؟\n\nlet message = null;\nconst Notification = () => {\n  if (message === null) return null;\n  return <div className=\"error\">{message}</div>;\n}\n// دالة لتغيير الرسالة من مكون آخر\nconst showError = () => { message = \"حدث خطأ\"; }",
    options: [
      "React غير مسموح في مكونات return null استخدام الكلمة المحجوزة.",
      "بإعادة رسم المكون. يجب حفظ هذه القيمة في حالة (Local Variable) هو متغير عادي message لا يراقب المتغيرات المحلية React المكون (State) باستخدام useState.",
      "JSX طويل جداً ويتجاوز الحد المسموح في Notification اسم المكون.",
      "في الجذر الخاص به key المكون لا يمتلك خاصية."
    ],
    correctAnswerIndex: 1,
    explanation: "لتحديث الواجهة بناءً على قيمة متغير، يجب حفظ هذه القيمة في حالة (Local Variable) لا يراقب المتغيرات المحلية React المكون (State) باستخدام `useState`."
  },
  {
    id: "l4_q15",
    questionText: "لإكمال دالة استخراج الملاحظات (Services) وإرجاع البيانات فقط (Data) من استجابة Axios، ماذا نضع في الفراغ؟\n\nimport axios from 'axios';\nconst getAll = () => {\n  return axios.get('/api/notes').then(response => _______);\n}",
    options: [
      "response.json()",
      "response.body",
      "response.data",
      "response.text"
    ],
    correctAnswerIndex: 2,
    explanation: "مكتبة Axios تُخزن حمولة الاستجابة الفعلية القادمة من الخادم (تلقائياً بصيغة JSON المترجمة) داخل خاصية ثابتة تُدعى `data`، لذا نستخدم `response.data`."
  },
  {
    id: "l4_q16",
    questionText: "للتحقق مما إذا كان حقل \"المحتوى\" (content) مفقوداً في جسم الطلب الوارد عبر Express، وإرجاع استجابة بخطأ 400، أكمل الشرط:\n\napp.post('/api/notes', (req, res) => {\n  const body = req.body;\n  if (_______) {\n    return res.status(400).json({ error: 'المحتوى مطلوب' });\n  }\n});",
    options: [
      "body.content == null",
      "!body.content",
      "body.content === undefined",
      "typeof body.content !== 'string'"
    ],
    correctAnswerIndex: 1,
    explanation: "للتأكد السريع من أن خاصية معينة غير موجودة أو فارغة، نُستخدم إشارة النفي `!body.content` ستعطي نتيجة صحيحة إذا كانت القيمة (True) إذا كانت undefined, null, أو نص فارغ."
  },
  {
    id: "l4_q17",
    questionText: "عند تشغيل خادم Node.js باستخدام Express، ما هي الدالة المسؤولة عن جعل الخادم يبدأ بالاستماع للطلبات على منفذ محدد؟\n\nconst PORT = 3001;\napp._______(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});",
    options: [
      "start",
      "listen",
      "run",
      "serve"
    ],
    correctAnswerIndex: 1,
    explanation: "الدالة `app.listen()` هي الدالة القياسية في خوادم Express لربط التطبيق بمنفذ شبكي معين وبدء استقبال الطلبات الواردة."
  },
  {
    id: "l4_q18",
    questionText: "لتمرير الطلب إلى الوسيط (Middleware) التالي في سلسلة Express، يجب استدعاء الدالة الممررة كمعامل ثالث. ما اسمها؟\n\nconst requestLogger = (req, res, _______) => {\n  console.log(req.method, req.path);\n  _______();\n};",
    options: [
      "continue",
      "pass",
      "next",
      "resolve"
    ],
    correctAnswerIndex: 2,
    explanation: "في دوال الوسائط (Middleware) لـ Express، المعامل الثالث دائماً يُسمى عرفياً `next`، ويجب استدعاؤه كدالة `next()` لتمرير التنفيذ للخطوة التالية لتفادي تعليق الطلب."
  },
  {
    id: "l4_q19",
    questionText: "للقيام بعملية تحديث لجزء من بيانات المصفوفة في React (مثل تحديث أهمية ملاحظة معينة) استناداً إلى المعرف id، أي دالة نستخدم لإنشاء المصفوفة الجديدة المحدثة؟\n\nsetNotes(notes._______(n => n.id !== id ? n : returnedNote));",
    options: [
      "filter",
      "reduce",
      "map",
      "forEach"
    ],
    correctAnswerIndex: 2,
    explanation: "دالة `map` مثالية هنا لأنها تقوم بالمرور على المصفوفة وبناء مصفوفة جديدة بنفس الطول. وتقوم باستبدال العنصر المستهدف بالنسبة المحدثة (`returnedNote`) مع إبقاء البقية."
  },
  {
    id: "l4_q20",
    questionText: "لاستخدام متغير بيئة (Environment Variable) محدد باسم MONGODB_URI في تطبيق Node.js، ما هي الصيغة الصحيحة؟\n\nconst url = _______.MONGODB_URI;",
    options: [
      "window.env",
      "process.env",
      "node.env",
      "system.env"
    ],
    correctAnswerIndex: 1,
    explanation: "في بيئة Node.js، الكائن الشامل الذي يتيح الوصول لمتغيرات البيئة هو `process.env`."
  },
  {
    id: "l4_q21",
    questionText: "لإرجاع الملاحظة كاستجابة بصيغة JSON من مسار GET في Express، نستخدم الدالة:\n\napp.get('/api/notes', (req, res) => {\n  res._______(notes);\n});",
    options: [
      "json",
      "sendJSON",
      "end",
      "respond"
    ],
    correctAnswerIndex: 0,
    explanation: "الدالة `res.json()` هي أداة مدمجة في Express تقوم بتحويل كائن أو مصفوفة JavaScript تلقائياً إلى نص JSON وتضبط ترويسة Content-Type بشكل صحيح ثم تُرسل الرد."
  },
  {
    id: "l4_q22",
    questionText: "لإظهار رسالة تأكيد منبثقة للمستخدم في المتصفح قبل تنفيذ عملية الحذف، أي أداة مدمجة نستخدم؟\n\nconst deleteNote = (id) => {\n  if (_______('هل تريد حذف هذه الملاحظة؟')) {\n    // تنفيذ الحذف\n  }\n}",
    options: [
      "window.prompt",
      "window.alert",
      "window.confirm",
      "console.warn"
    ],
    correctAnswerIndex: 2,
    explanation: "الدالة `window.confirm()` تظهر صندوق حوار يحتوي على أزرار (موافق / إلغاء)، وترجع قيمة منطقية (Boolean) تعبر عن خيار المستخدم."
  },
  {
    id: "l4_q23",
    questionText: "إذا قام العميل بإرسال طلب GET إلى المسار /api/notes/9، ولم يكن المعرف 9 موجوداً في مصفوفة الملاحظات ضمن خادم Express، ماذا سيكون سلوك الخادم بناءً على هذا الكود؟\n\napp.get('/api/notes/:id', (req, res) => {\n  const note = notes.find(n => n.id === req.params.id);\n  if (note) {\n    res.json(note);\n  } else {\n    res.status(404).end();\n  }\n});",
    options: [
      "سيرجع استجابة فارغة مع رمز الحالة 200.",
      "(Crash) سيرمي خطأ برمجياً ويغلق الخادم.",
      "(Not Found) مع رمز الحالة 404 (Body) سيرجع استجابة بدون جسم.",
      "سيرجع ملف HTML يعرض صفحة 404 الافتراضية."
    ],
    correctAnswerIndex: 2,
    explanation: "الكود يبحث في المصفوفة، وإذا لم يجد العنصر ستكون النتيجة undefined (وبالتالي الشرط (note)if سيكون خاطئاً)، لينتقل لكتلة else ويرسل الاستجابة '404 Not Found'."
  },
  {
    id: "l4_q24",
    questionText: "بعد تنفيذ هذا الوسيط (Middleware) في Express، ماذا سيظهر في الـ Console لطلب من نوع GET إلى المسار /users؟\n\nconst logger = (req, res, next) => {\n  console.log(`Method: ${req.method} Path: ${req.path}`);\n  next();\n}",
    options: [
      "Method: GET Path: /api/users",
      "Method: GET Path: /users",
      "Method: undefined Path: undefined",
      "سيتم إرجاع النص للمتصفح ولن يظهر في الخادم."
    ],
    correctAnswerIndex: 1,
    explanation: "الوسيط لا يعبأ بنوع الطلب لأنه استخدم `app.use` (إلا إذا خصص له خلاف ذلك)، سيتم طباعة الحقول المعرفة: Method: GET Path: /users."
  },
  {
    id: "l4_q25",
    questionText: "ما هي النتيجة المتوقعة في واجهة React بعد تنفيذ دالة الحذف (deleteNote) بنجاح إذا كانت مصفوفة الملاحظات تحتوي 3 عناصر؟\n\naxios.delete(`/notes/${id}`).then(() => {\n  setNotes(notes.filter(n => n.id !== id));\n})",
    options: [
      "ستبقى المصفوفة بـ 3 عناصر لأن الخادم تم تحديثه ولم يتم تحديث الواجهة.",
      "ستتحدث حالة المكون لتحتوي على عنصرين فقط وسينم إعادة رسم الواجهة بدون العنصر المحذوف.",
      "ستفرغ المصفوفة تماماً كإجراء أمان.",
      "ستضاف الملاحظة مرة أخرى لتأكيد الحذف."
    ],
    correctAnswerIndex: 1,
    explanation: "عند وصول الرد الناجح من الخادم، يتم استدعاء `setNotes` مع مصفوفة مصفاة (`filter`) لا تحتوي المعرف المحذوف، وبما أننا استدعينا الـ Setter، سيعيد React رسم الواجهة بالعنصرين المتبقيين."
  },
  {
    id: "l4_q26",
    questionText: "ماذا سيعرض مكون الإشعارات (Notification) إذا كانت قيمة message تمرر له كـ null؟\n\nconst Notification = ({ message }) => {\n  if (message === null) return null;\n  return <div className=\"error\">{message}</div>;\n}",
    options: [
      "بسبب الصنف (error) سيعرض مربعات أحمر فارغاً.",
      "سيعرض كلمة null كنص.",
      "لن يُضاف أي عنصر لـ DOM الحقيقي ولن يعرض أي شيء.",
      "سيرمي خطأ (TypeError)."
    ],
    correctAnswerIndex: 2,
    explanation: "إذا أرجع مكون React القيمة `null`، فإن React يتجاهل رسمه ولن يُدرج أي عقدة له في شجرة DOM، وهي ممارسة قياسية لإخفاء المكونات."
  },
  {
    id: "l4_q27",
    questionText: "في دالة توليد معرف جديد للملاحظات في خادم Express، إذا كانت مصفوفة notes تحتوي ملاحظتين بمعرفات \"1\" و \"5\"، ما هي قيمة المعرف المولد للملاحظة الجديدة؟\n\nconst newId = String(Math.max(...notes.map(n => Number(n.id))) + 1);",
    options: [
      "\"3\"",
      "\"6\"",
      "\"2\"",
      "\"NaN\""
    ],
    correctAnswerIndex: 1,
    explanation: "الكود يحول المعرفات لأرقام ويأخذ القيمة الأكبر (وهي 5 هنا)، ثم يضيف إليها 1 (لتصبح 6)، ويحولها مرة أخرى إلى نص \"6\"."
  },
  {
    id: "l4_q28",
    questionText: "إذا تم تنفيذ دالة setNotes بطريقة خاطئة هكذا، ما هو الخرج النهائي المتوقع من React؟\n\nconst addNote = () => {\n  notes.push({ id: 4, content: 'مرحبا' });\n  // لم يتم استدعاء setNotes\n}",
    options: [
      "ستظهر الملاحظة فوراً على الشاشة بدون إعادة رسم.",
      "ستضاف الملاحظة للمصفوفة في الذاكرة، ولكن الشاشة (UI) لن تتحدث ولن يظهر العنصر الجديد.",
      "سيقوم React باكتشاف التغيير تلقائياً وتحديث الواجهة.",
      "سيتم مسح جميع الملاحظات من الواجهة."
    ],
    correctAnswerIndex: 1,
    explanation: "استخدام دوال التعديل المباشر كـ `push` يغير الكائن في الذاكرة ولكن لا يخبر React بحدوث التغيير. من دون استخدام (Re-render) لن تحدث إعادة رسم (`setNotes` (setter)."
  },
  {
    id: "l4_q29",
    questionText: "ماذا سيطبع الكود التالي الذي يمثل وسيطاً (Middleware) لتعطيل الوصول إلى واجهة API محدودة؟\n\napp.use('/api/secret', (req, res, next) => {\n  res.status(403).json({ error: \"Access Denied\" });\n});\n// العميل طلب GET /api/secret",
    options: [
      "سيكمل الطلب إلى المعالج التالي بسبب عدم وجود return.",
      "سيتجاهل الوسيط الطلب لأن نوع الطلب (GET) لم يحدد.",
      "سيرجع الخادم استجابة JSON تحتوي رسالة \"Access Denied\" برمز حالة 403.",
      "سيرمي الخادم خطأً لتجاوز حدود الصلاحيات."
    ],
    correctAnswerIndex: 2,
    explanation: "بما أن الدالة انتهت بإرسال استجابة صريحة `res.json`، فإن دورة الطلب تنتهي هنا، وسيستلم العميل رد JSON يتضمن رسالة الخطأ والرمز 403."
  },
  {
    id: "l4_q30",
    questionText: "في حال كتابة التنسيقات المضمنة كالتالي، كيف سيترجم React الخاصة padding: 10؟\n\nconst style = { padding: 10 };\n<div style={style}>Test</div>",
    options: [
      "سيُهملها لأنها بلا وحدة قياس.",
      "سيضيف إليها وحدة بكسل تلقائياً لتصبح '10px'.",
      "سيعتبرها 10% (نسبة مئوية).",
      "سيظهر خطأ تحذيري ويوقف الترجمة."
    ],
    correctAnswerIndex: 1,
    explanation: "إحدى ميزات React الذكية في التعامل مع الأنماط المضمنة هي أنها تضيف وحدة البكسل `px` بشكل تلقائي للخصائص الرقمية التي تتطلب وحدات قياس (مثل العرض والهوامش)."
  }
];
