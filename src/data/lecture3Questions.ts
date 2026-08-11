import { Question } from '../types';

export const lecture3Questions: Question[] = [
  {
    id: "l3_q1",
    questionText: "ما هو متوسط تعقيد البحث والوصول لعنصر في بنية بيانات \"جدول التجزئة\" (Hash Table) المستخدمة في كائنات JavaScript؟",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    correctAnswerIndex: 2,
    explanation: "في جدول التجزئة (Hash Table)، يتم الوصول إلى العناصر والبحث فيها بتعقيد ثابت (Average Case O(1)) باستخدام دالة تجزئة تحدد موقع العنصر مباشرة."
  },
  {
    id: "l3_q2",
    questionText: "كيف يقوم React بتطبيق نمط المراقب (Observer Pattern) داخلياً؟",
    options: [
      "المكونات (Components) تعمل كـ Subject والحالة (State) تعمل كـ Observer.",
      "الحالة (State) تعمل كـ Subject والمكونات المعتمدة عليها كـ Observers، عند تحديث الـ State يتم إشعار المكونات لتعيد رسم نفسها.",
      "يعتمد على DOM الحقيقي لمراقبة التغيرات وإرسالها للمكونات.",
      "يستخدم دالة map() لمراقبة المصفوفات وتحديثها."
    ],
    correctAnswerIndex: 1,
    explanation: "في نمط المراقب، الموضوع (Subject) هو مصدر البيانات (State)، والمراقبون (Observers) هم المكونات. عند تحديث الـ State تقوم React بإشعار المكونات لتستجيب وتحدث نفسها."
  },
  {
    id: "l3_q3",
    questionText: "ما هو الهدف الأساسي من تمرير خاصية key عند عرض قائمة من العناصر (Array mapping) في React؟",
    options: [
      "لتمرير المعرف (ID) كـ Prop إلى المكون الابن للقراءة منه لاحقاً.",
      "لتمكين React من تطبيق تنسيقات CSS ديناميكية على العناصر.",
      "تقليل التعقيد الزمني لمقارنة الأشجار (Reconciliation) من O(n³) إلى O(n).",
      "لربط عنصر القائمة بقاعدة البيانات بشكل مباشر عبر API."
    ],
    correctAnswerIndex: 2,
    explanation: "الـ key هو الافتراض الثاني في خوارزمية Reconciliation؛ يعتمد عليه React لتحديد العناصر التي بقيت مستقرة، مما يقلل تعقيد مقارنة الشجرتين من O(n³) إلى O(n)."
  },
  {
    id: "l3_q4",
    questionText: "أي مما يلي يصف المكون المتحكم به (Controlled Component) في React بشكل دقيق؟",
    options: [
      "مكون يعتمد على DOM للحفاظ على بيانات حقول الإدخال واسترجاعها عبر Refs.",
      "مكون تكون فيه حالة React State هي مصدر الحقيقة الوحيد (Single Source of Truth) لحقول الإدخال.",
      "مكون يتم التحكم فيه من قبل خادم الواجهة الخلفية عبر WebSockets.",
      "مكون يتم تجميد حالته لمنع المستخدم من التعديل عليها."
    ],
    correctAnswerIndex: 1,
    explanation: "المكون المتحكم به (Controlled Component) يعتمد بالكامل على React State كـ Single Source of Truth لحفظ وإظهار قيم الإدخال عبر value و onChange."
  },
  {
    id: "l3_q5",
    questionText: "ما الفرق الرئيسي بين الاتصال بنموذج WebSocket ونموذج SSE (Server-Sent Events)؟",
    options: [
      "الأول أحادي الاتجاه من الخادم للعميل، بينما الثاني ثنائي الاتجاه.",
      "كلاهما يعملان بثنائي الاتجاه، لكن WebSocket أسرع.",
      "WebSocket ثنائي الاتجاه (عميل-خادم-عميل)، بينما SSE يرسل تحديثات من الخادم للعميل فقط ولا يستقبل منه.",
      "WebSocket يفتح اتصالات دائماً جديد مع كل رسالة، بينما SSE يتطلب اتصال HTTP."
    ],
    correctAnswerIndex: 2,
    explanation: "WebSocket يوفر اتصالات ثنائية الاتجاه بين العميل والخادم، بينما SSE (Server-Sent Events) يقوم بدفع التحديثات في اتجاه واحد من الخادم للعميل فقط."
  },
  {
    id: "l3_q6",
    questionText: "لماذا تعتبر مكتبة Axios مفضلة للعديد من المطورين على الدالة المدمجة fetch()؟",
    options: [
      "لأن Axios مضمنة في المتصفح ولا تحتاج لتثبيت عبر npm.",
      "لأن Axios تحول استجابة الخادم تلقائياً إلى كائن JSON وتدعم اعتراض الطلبات (Interceptors).",
      "لأن fetch() لا تدعم إرسال طلبات POST أو التعامل مع الوعود (Promises).",
      "لأن Axios هي الأداة الوحيدة المتوافقة مع GraphQL."
    ],
    correctAnswerIndex: 1,
    explanation: "يدوياً، كما تدعم (json) .json تحتاج لاستدعاء fetch بخلاف .JSON البيانات القادمة إلى (Parsing) تقوم تلقائياً بتنسيق Axios اعتراض الطلبات وإلغاءها Axios."
  },
  {
    id: "l3_q7",
    questionText: "ما هو الغرض من دالة useEffect في مكونات React؟",
    options: [
      "تحديث واجهة المستخدم فوراً قبل رسم عناصر HTML في المتصفح.",
      "تخزين القيم المعقدة في الذاكرة لتجنب إعادة الحساب (Caching).",
      "تنفيذ التأثيرات الجانبية (Side Effects) مثل جلب البيانات من الخادم أو التواصل مع API أو تعديل الـ DOM بشكل مباشر.",
      "استبدال دالة map() في عرض المصفوفات الضخمة."
    ],
    correctAnswerIndex: 2,
    explanation: "تُستخدم useEffect للتعامل مع العمليات التي تخرج عن النطاق النقي للمكون (Side Effects)، كالتواصل مع API أو تعديل الـ DOM بشكل مباشر."
  },
  {
    id: "l3_q8",
    questionText: "أي من تصديرات (Exports) JavaScript التالية يجبرك على استخدام \"نفس الاسم\" تماماً عند استيراده في ملف آخر؟",
    options: [
      "Default Export",
      "Named Export",
      "Module Export",
      "Arrow Export"
    ],
    correctAnswerIndex: 1,
    explanation: "في الـ Named Export (مثل export const API_URL)، نُجبر المطور على استخدام نفس اسم المتغير ضمن أقواس معقوفة عند الاستيراد `{ API_URL } import`."
  },
  {
    id: "l3_q9",
    questionText: "من الناحية النظرية، ما هي المشكلة التي تنشأ عند استخدام الفهرس (index) كـ key لعناصر مصفوفة في React؟",
    options: [
      "الفهرس ليس نصاً (String) وبالتالي سيرفضه المترجم.",
      "عند حذف أو إعادة ترتيب العناصر، سيعتقد React بناءً على ترتيبها بدلاً من هويتها الحقيقية؛ فإذا حُذف عنصر، ستتبدل فهارس العناصر اللاحقة ويحدث خطأ في عرض التحديثات.",
      "الفهرس يطبع القيم في الواجهة للمستخدم مما يكسر حماية البيانات.",
      "لا توجد أي مشكلة، استخدام index هو الممارسة الأفضل دائماً."
    ],
    correctAnswerIndex: 1,
    explanation: "استخدام الفهرس (index) كـ key يجعل React يطابق العناصر بناءً على ترتيبها بدلاً من هويتها الحقيقية؛ فإذا حُذف عنصر، ستتبدل فهارس العناصر اللاحقة ويحدث خطأ في عرض التحديثات."
  },
  {
    id: "l3_q10",
    questionText: "أي قاعدة من القواعد التالية تعتبر صحيحة بالنسبة لدالة التجزئة (Hash Function) الجيدة؟",
    options: [
      "يجب أن تُعطي فهارس (Indices) مختلفة في كل مرة يتم تشغيل البرنامج لنفس المفتاح.",
      "يجب أن توزع المفاتيح بانتظام على المواقع لتقليل نسبة التصادمات (Collisions).",
      "يجب أن تكون عملية حسابها بطيئة جداً ومكلفة للتعقيد الأمني.",
      "يجب أن تقبل فقط السلاسل النصية (Strings) وترفض الأرقام كمدخلات."
    ],
    correctAnswerIndex: 1,
    explanation: "من خصائص دالة التجزئة الجيدة توزيع المفاتيح بشكل منتظم (Uniform Distribution) لتقليل فرصة التصادم (وضع مفتاحين في نفس الفهرس)."
  },
  {
    id: "l3_q11",
    questionText: "عند حل تصادمات Hash Table بطريقة السلسلة (Chaining)، ماذا يحدث عندما يعطي مفتاحان نفس الفهرس؟",
    options: [
      "يتم حذف العنصر القديم واستبداله بالجديد.",
      "يتم البحث عن أقرب موقع فارغ تالٍ في الجدول لوضع العنصر فيه (Open Addressing).",
      "يُضاف العنصر الجديد إلى قائمة مرتبطة (Linked List) في نفس الفهرس المتصادم، وإذا تصادم مفتاحان يتم إضافتهما معاً لنفس القائمة.",
      "يتم إيقاف تنفيذ البرنامج ورمي خطأ Hash Collision."
    ],
    correctAnswerIndex: 2,
    explanation: "في طريقة السلسلة (Chaining) لحل التصادمات، كل موقع في الجدول يمثل رأس قائمة مرتبطة، وإذا تصادم مفتاحان يتم إضافتهما معاً لنفس القائمة."
  },
  {
    id: "l3_q12",
    questionText: "الـ Promise هو تطبيق لنمط Monad في البرمجة الوظيفية. أي دوال الـ Promise تُمثل عملية الـ Bind (تحويل القيمة داخل السياق)؟",
    options: [
      "Promise.resolve()",
      ".then()",
      ".catch()",
      "Promise.all()"
    ],
    correctAnswerIndex: 1,
    explanation: "في نمط Monad الرياضي، تعتبر دالة `.then()` تطبيقاً لعملية (Bind) التي تقوم بتحويل القيمة داخل السياق المستقبلي للوعود."
  },
  {
    id: "l3_q13",
    questionText: "ما هو الخطأ في هذا الكود الذي يقوم برسم قائمة ملاحظات؟\n\nconst list = notes.map(note => \n  <Note note={note} />\n)",
    options: [
      "الدالة map لا تعمل مع الكائنات، تعمل فقط مع الأرقام.",
      "مكون Note يفتقد لخاصية key الفريدة والمطلوبة عند الرسم من مصفوفة، حيث يجب أن يوضع على العنصر الجذري المُعاد من داخل الـ map.",
      "لا يجوز تمرير كائن (note) بأكمله كـ prop.",
      "الكلمة المحجوزة return ناقصة داخل الدالة السهمية."
    ],
    correctAnswerIndex: 1,
    explanation: "القاعدة تنص على أن الـ key يجب أن يوضع على العقود الجذرية (العنصر الأب المباشر) التي يتم إرجاعها من دالة الـ map، وهنا وسم `<Note>` يفتقد لخاصية `key={note.id}`."
  },
  {
    id: "l3_q14",
    questionText: "المطور يواجه رسالة خطأ (Infinite Loop) تؤدي لانهيار التطبيق، ما السبب؟\n\nuseEffect(() => {\n  axios.get('url').then(res => setNotes(res.data))\n})",
    options: [
      "لم يتم استيراد axios من مكتبة React.",
      "يجب استخدام await مع then.",
      "مما يجعل التأثير يُنفذ بعد كل إعادة رسم تسببها دالة (Dependencies Array) لا توجد مصفوفة تبعات، منتجاً حلقة لانهائية setNotes.",
      "لا يجوز استدعاء setNotes داخل الـ Promise."
    ],
    correctAnswerIndex: 2,
    explanation: "إغفال مصفوفة التبعيات (البارامتر الثاني في useEffect) يؤدي لتنفيذ التأثير مع كل عملية إعادة رسم (Re-render)، واستدعاء setNotes يعيد الرسم، مما يولد حلقة لانهائية."
  },
  {
    id: "l3_q15",
    questionText: "عند الضغط على زر الحفظ، يتم إعادة تحميل الصفحة (Refresh) وتضيع البيانات. ما الحل؟\n\nconst addNote = (event) => {\n  const noteObj = { content: newNote };\n  setNotes(notes.concat(noteObj));\n}",
    options: [
      "يجب وضع الكود داخل دالة useEffect.",
      "يجب تغيير notes.push إلى notes.concat.",
      "يجب استخدام type=\"button\" بدلاً من إرسال النموذج.",
      "في بداية الدالة لمنع سلوك الإرسال الافتراضي (Submit) هو إعادة تحميل الصفحة. يجب استخدام event.preventDefault()."
    ],
    correctAnswerIndex: 3,
    explanation: "في النماذج، السلوك الافتراضي لزر الإرسال (Submit) هو إعادة تحميل الصفحة. يجب استخدام `event.preventDefault()` لمنع ذلك والتحكم بالبيانات محلياً."
  },
  {
    id: "l3_q16",
    questionText: "في المكون المتحكم به (Controlled Component)، حقل الإدخال لا يقبل طباعة أي حرف، ما هو الخطأ؟\n\n<input \n  value={newNote} \n  placeholder=\"أدخل ملاحظة\"\n/>",
    options: [
      "الخاصية defaultValue يجب أن تُستبدل بـ value.",
      "يجب ربط الحقل بمتغير state دون تحديثه.",
      "ربط الخاصة `value` بحالة React دون تزويدها بمعالج `onChange` يُغلق الحقل ويجعله للقراءة فقط (Read-only)، لأن قيمته محكومة بالـ State التي لا تتغير.",
      "الخاصية placeholder تعوق عمل الحقل الديناميكي."
    ],
    correctAnswerIndex: 2,
    explanation: "ربط الخاصة `value` بحالة React دون تزويدها بمعالج `onChange` يُغلق الحقل ويجعله للقراءة فقط (Read-only)، لأن قيمته محكومة بالـ State التي لا تتغير."
  },
  {
    id: "l3_q17",
    questionText: "المطور حاول تصدير واستيراد وحدة (Module) كالتالي، لكنه واجه خطأً. أين يكمن الخطأ؟\n\n// ملف helper.js\nexport const API_URL = 'http://api.com';\n\n// ملف App.js\nimport API_URL from './helper.js';",
    options: [
      "بما أن التصدير تم كـ (export const) أي Named Export، فإن الاستيراد الافتراضي `import API_URL` خطأ، ويجب أن يحاط بأقواس `{ API_URL } import`.",
      "لا يمكن تصدير المتغيرات المعرفة بـ const.",
      "يجب استخدام الكلمة المحجوزة default بعد export.",
      "يجب إزالة امتداد js من مسار الاستيراد."
    ],
    correctAnswerIndex: 0,
    explanation: "بما أن التصدير تم كـ (`export const`) أي Named Export، فإن الاستيراد الافتراضي `import API_URL` خطأ، ويجب أن يحاط بأقواس `{ API_URL } import`."
  },
  {
    id: "l3_q18",
    questionText: "المكون أدناه يضع الـ key في المكان الخاطئ، أين يجب أن يوضع؟\n\nnotes.map(note => \n  <div>\n    <li key={note.id}>{note.content}</li>\n  </div>\n)",
    options: [
      "يجب وضعه على محتوى العنصر {note.content}.",
      "القاعدة تنص على أن الـ key يجب أن يوضع على العقود الجذرية (العنصر الأب المباشر) التي يتم إرجاعها من دالة الـ map، وهي هنا وسم <div key={note.id}>.",
      "يجب استخدام Fragment <> ووضع الـ key عليه.",
      "المكان الحالي صحيح ولا يوجد خطأ."
    ],
    correctAnswerIndex: 1,
    explanation: "القاعدة تنص على أن الـ key يجب أن يوضع على العقود الجذرية (العنصر الأب المباشر) التي يتم إرجاعها من دالة الـ map، وهي هنا وسم `<div>`."
  },
  {
    id: "l3_q19",
    questionText: "لجعل هذا الـ Hook ينفذ الأمر مرة \"واحدة فقط\" عند تحميل المكون لأول مرة، ماذا نضع في الفراغ؟\n\nuseEffect(() => {\n  console.log(\"Component Mounted\");\n}, _______ );",
    options: [
      "[once]",
      "{}",
      "[]",
      "null"
    ],
    correctAnswerIndex: 2,
    explanation: "تمرير مصفوفة تبعات فارغة `[]` كمعامل ثانٍ لدالة `useEffect` يخبر React بتنفيذ الكود مرة واحدة فقط عند التحميل الأول (Mounting)."
  },
  {
    id: "l3_q20",
    questionText: "لإكمال عملية إرسال بيانات (إنشاء ملاحظة جديدة) إلى الخادم باستخدام Axios، أي طريقة يجب أن نستخدم؟\n\naxios._______('http://localhost:3001/notes', newNote)\n  .then(res => console.log(res.data))",
    options: [
      "get",
      "post",
      "put",
      "send"
    ],
    correctAnswerIndex: 1,
    explanation: "لإنشاء أو إرسال بيانات جديدة إلى مسار الخادم (Endpoint)، نستخدم طريقة `axios.post`."
  },
  {
    id: "l3_q21",
    questionText: "للوصول إلى القيمة الحالية المكتوبة داخل حقل الإدخال ضمن دالة الـ Event، ماذا نضع في الفراغ؟\n\nconst handleChange = (event) => {\n  setNewNote(event._______);\n}",
    options: [
      "target.value",
      "current.value",
      "data.text",
      "event.value"
    ],
    correctAnswerIndex: 0,
    explanation: "في معالجات الأحداث الخاصة بـ DOM (مثل onChange)، يمكن الوصول إلى القيمة المدخلة عبر `event.target.value`."
  },
  {
    id: "l3_q22",
    questionText: "ما هي الأداة (Hook) المناسبة لإنشاء حالة (State) لتخزين البيانات الواردة من الخادم؟\n\nconst [data, setData] = _______([]);",
    options: [
      "useData",
      "useEffect",
      "useState",
      "useFetch"
    ],
    correctAnswerIndex: 2,
    explanation: "تُستخدم الخطاف `useState` لإنشاء حالة محلية للمكون. في هذه الحالة نُمرر مصفوفة فارغة `[]` كقيمة ابتدائية."
  },
  {
    id: "l3_q23",
    questionText: "للجميع بتحديث مصفوفة الملاحظات مع إضافة العنصر الجديد مع الحفاظ على مبدأ الـ Immutability، أكمل الكود:\n\nsetNotes(notes._______(newNoteObj));",
    options: [
      "push",
      "add",
      "concat",
      "append"
    ],
    correctAnswerIndex: 2,
    explanation: "يجب الامتناع عن استخدام طرق تغير المصفوفة الأصلية مثل `push` للحفاظ على مبدأ الثبات. الطريقة الصحيحة هي `concat` أو عامل النشر `...` لأنها ترجع مصفوفة جديدة."
  },
  {
    id: "l3_q24",
    questionText: "عند تشغيل خادم تطوير محلي وهمي يحاكي REST API من ملف JSON، ما هي المكتبة المستدمة في سطر الأوامر (حسب المحاضرة)؟\n\nnpm run _______ --port 3001 --watch db.json",
    options: [
      "json-server",
      "node-api",
      "express-json",
      "axios-server"
    ],
    correctAnswerIndex: 0,
    explanation: "مكتبة `json-server` هي أداة شهيرة تُستخدم لتوفير REST API وهمي وسريع لأغراض التطوير بالاعتماد على ملف `db.json`."
  },
  {
    id: "l3_q25",
    questionText: "ماذا سيعرض هذا المكون عند تنفيذه مع مصفوفة فارغة؟\n\nconst History = ({ allClicks }) => {\n  if (allClicks.length === 0) {\n    return <p>فارغ</p>\n  }\n  return <p>{allClicks.join('')}</p>\n}\n// الاستدعاء:\n<History allClicks={[]} />",
    options: [
      "خطأ برمجي.",
      "فارغ",
      "[]",
      "مساحة بيضاء فارغة."
    ],
    correctAnswerIndex: 1,
    explanation: "طول المصفوفة الفارغة هو 0، لذا سيتحقق الشرط الأول وترجع الدالة العنصر `<p>فارغ</p>`."
  },
  {
    id: "l3_q26",
    questionText: "في الكود التالي، متى سيطبع السطر \"تم الجلب\" في وحدة التحكم؟\n\nconst App = () => {\n  const [data, setData] = useState([]);\n  useEffect(() => {\n    console.log(\"تم الجلب\");\n  }, []);\n  return <div>التطبيق</div>\n}",
    options: [
      "مع كل ضغطة للمستخدم على الشاشة.",
      "للمكون (Mounting) مرة واحدة فقط بعد إتمام الرسم الأول.",
      "للمكون Re-render بعد كل عملية.",
      "لن يُطبع أبداً لأن المصفوفة فارغة."
    ],
    correctAnswerIndex: 1,
    explanation: "التأثيرات الجانبية داخل `useEffect` تُنفذ بشكل غير متزامن بعد الانتهاء من عملية الرسم الأولية (Mounting) على الشاشة، وبما أن المصفوفة فارغة `[]` فستنفذ مرة واحدة فقط."
  },
  {
    id: "l3_q27",
    questionText: "ما هو الخرج النهائي للمتغير notesToShow إذا كان showAll = false؟\n\nconst notes = [\n  { id: 1, content: \"A\", important: true },\n  { id: 2, content: \"B\", important: false }\n];\nconst showAll = false;\nconst notesToShow = showAll ? notes : notes.filter(n => n.important);",
    options: [
      "المصفوفة كاملة (عنصران).",
      "فقط B سيطبع مصفوفة تحتوي على العنصر.",
      "فقط A سيطبع مصفوفة تحتوي على العنصر.",
      "false سيطبع القيمة."
    ],
    correctAnswerIndex: 2,
    explanation: "بما أن الشرط `showAll` قيمته `false`، سيقوم المعامل الثلاثي بتنفيذ القسم الثاني (الذي يعقب النقطتين :)، والذي يقوم بتصفية الملاحظات المهمة فقط، لينتج العنصر A."
  },
  {
    id: "l3_q28",
    questionText: "إذا تم تنفيذ هذا الموعود (Promise Chain)، ماذا سيكون الخرج المطبوع؟\n\nPromise.resolve(5)\n  .then(val => val * 2)\n  .then(val => val + 3)\n  .then(res => console.log(res));",
    options: [
      "5",
      "10",
      "13",
      "16"
    ],
    correctAnswerIndex: 2,
    explanation: "الوعود المتسلسلة (Promise Chain) تمرر النتيجة للخطوة التالية. (5 * 2) = 10. ثم تُمرر الـ 10 للخطوة التالية (10 + 3) = 13. وتُطبع في النهاية."
  },
  {
    id: "l3_q29",
    questionText: "في حال جلب بيانات من الخادم باستخدام Axios ضمن useEffect، ماذا سيعرض المكون في اللحظة الأولى للتحميل (قبل وصول رد الخادم)؟\n\nconst App = () => {\n  const [items, setItems] = useState(['جاري التحميل']);\n  useEffect(() => {\n    axios.get('url').then(res => setItems(['تم الجلب']));\n  }, []);\n  return <div>{items[0]}</div>\n}",
    options: [
      "تم",
      "جاري التحميل",
      "خطأ، لا يوجد بيانات.",
      "شاشة بيضاء."
    ],
    correctAnswerIndex: 1,
    explanation: "بما أن جلب البيانات عملية غير متزمنة وتستغرق وقتاً، فإن المكون سيُصيّر لأول مرة بالحالة الابتدائية (Initial State) التي تم تعريفها وهي النص 'جاري التحميل'."
  },
  {
    id: "l3_q30",
    questionText: "ماذا سينتج عن الكود التالي الذي يتعامل مع النماذج؟\n\nconst App = () => {\n  const [val, setVal] = useState('React');\n  const handleChange = (e) => setVal(e.target.value.toUpperCase());\n  return <input value={val} onChange={handleChange} />\n}",
    options: [
      "حقل الإدخال سيمنع المستخدم من الكتابة تماماً.",
      "أي حرف يكتبه المستخدم في الحقل يتحول فوراً إلى حرف كبير (Capital Letter).",
      "وسيتجاهل أي إدخال جديد 'React' سيعرض كلمة.",
      "toUpperCase الكود سيسبب انهياراً بسبب استخدام الدالة."
    ],
    correctAnswerIndex: 1,
    explanation: "هذا مكون متحكم به (Controlled Component). دالة التحديث تأخذ الإدخال وتمرره لدالة التحويل إلى أحرف كبيرة `toUpperCase()`، وبذلك سيُفرض على الحقل عرض الحروف الكبيرة فقط."
  }
];
