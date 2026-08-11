import { Question } from '../types';

export const lecture2Questions: Question[] = [
  {
    id: "l2_q1",
    questionText: "أي من نماذج البرمجة التالية يعتمد على مبدأ وصف \"كيفية أداء العمل\" خطوة بخطوة ويسمح بتغيير الحالة بشكل متكرر؟",
    options: [
      "البرمجة التصريحية (Declarative)",
      "البرمجة الأمرية (Imperative)",
      "البرمجة الوظيفية (Functional)",
      "البرمجة المنطقية (Logic)"
    ],
    correctAnswerIndex: 1,
    explanation: "البرمجة الأمرية (Imperative) هي النموذج الذي نركز فيه على كتابة الخطوات التفصيلية وتغيير الحالة باستمرار (مثل C و Java التقليدية)، بعكس التصريحية التي تركز على الهدف."
  },
  {
    id: "l2_q2",
    questionText: "وفقاً لمبادئ البرمجة الوظيفية، ماذا نعني بـ \"الدالة النقية\" (Pure Function)؟",
    options: [
      "دالة لا تحتوي على أي معاملات (Parameters).",
      "دالة لا تستخدم الذاكرة المؤقتة أبداً وتتعامل مع المتغيرات العامة.",
      "دالة تعطي نفس المخرجات دائماً لنفس المدخلات ولا تسبب تأثيرات جانبية.",
      "دالة تقوم بتحديث عناصر DOM مباشرة لتحسين الأداء."
    ],
    correctAnswerIndex: 2,
    explanation: "الدالة النقية (Pure Function) حتمية (تعطي نفس الناتج دائماً) وخالية من التأثيرات الجانبية، وهو المبدأ الذي تُبنى عليه مكونات React."
  },
  {
    id: "l2_q3",
    questionText: "لماذا يُعتبر مبدأ \"الثبات\" (Immutability) حاسماً لأداء مكتبة React؟",
    options: [
      "لأنه يمنع المتغيرات من الاستهلاك الزائد للذاكرة (Memory Leaks).",
      "لأنه يقلل من حجم ملفات JavaScript المرسلة للمتصفح.",
      "لأنه يقوم بتشفير البيانات الحساسة تلقائياً في الواجهة الأمامية.",
      "لأنه يسمح باكتشاف التغييرات بسرعة فائقة بمجرد مقارنة المراجع (References) بتعقيد O(1) بدلاً من الفحص العميق للكائن."
    ],
    correctAnswerIndex: 3,
    explanation: "مبدأ الثبات (عدم تعديل الأصل بل إنشاء نسخة) يجعل React يكتشف التغيير بسرعة فائقة بمجرد مقارنة مرجع الذاكرة O(1) بدلاً من الفحص العميق للكائن."
  },
  {
    id: "l2_q4",
    questionText: "نعتبر لغة JavaScript ديناميكية وضعيفة الأنواع (Dynamic & Weak)، ماذا يعني كونها \"ضعيفة الأنواع\"؟",
    options: [
      "لا تدعم البرمجة الكائنية (OOP).",
      "تسمح بالتحويل التلقائي والضمني بين الأنواع المختلفة (مثل جمع رقم مع نص).",
      "تكشف أخطاء الأنواع أثناء عملية الترجمة (Compile time) فقط.",
      "لا تسمح بإعادة إسناد المتغيرات بمجرد تعريفها."
    ],
    correctAnswerIndex: 1,
    explanation: "نظام الأنواع الضعيف (Weak typing) يسمح بدمج وتحويل أنواع مختلفة تلقائياً دون إظهار خطأ (مثل دمج نص مع رقم)."
  },
  {
    id: "l2_q5",
    questionText: "وفقاً لحلقة الأحداث (Event Loop)، أين تذهب العمليات غير المتزامنة (مثل setTimeout أو جلب البيانات fetch) للعمل في الخلفية؟",
    options: [
      "Call Stack",
      "Task Queue",
      "Web APIs",
      "Render Tree"
    ],
    correctAnswerIndex: 2,
    explanation: "العمليات غير المتزامنة تُرسل إلى Web APIs للعمل في الخلفية لكي لا توقف الـ Call Stack، وعند انتهائها تُرسل النتيجة إلى Task Queue."
  },
  {
    id: "l2_q6",
    questionText: "ما هي الفائدة الرئيسية لاستخدام آلة الحالة المحدودة (FSM) في تصميم واجهات المستخدم؟",
    options: [
      "تسريع وقت استجابة الخادم.",
      "منع حدوث حالات مستحيلة برمجياً (مثل ظهور حالة \"جاري التحميل\" و \"خطأ\" في نفس اللحظة).",
      "تقليل حجم الكود المكتوب بنسبة تزيد عن 50%.",
      "تدمير المكونات غير المستخدمة تلقائياً لتفريغ الذاكرة."
    ],
    correctAnswerIndex: 1,
    explanation: "آلة الحالة المحدودة (FSM) تنظم الانتقال بين الحالات، مما يمنع رياضياً التواجد في حالات متناقضة برمجياً، ويزيد من استقرار الواجهة."
  },
  {
    id: "l2_q7",
    questionText: "أي من دوال المصفوفات التالية تُعتبر تطبيقاً لمفهوم \"دوال الرتبة العليا\" وتقوم بتقليص المصفوفة إلى قيمة مفردة واحدة؟",
    options: [
      "filter()",
      "map()",
      "forEach()",
      "reduce()"
    ],
    correctAnswerIndex: 3,
    explanation: "دالة reduce() هي دالة رتبة عليا تستخدم لتقليص وتجميع عناصر المصفوفة للوصول إلى قيمة واحدة نهائية (مثل المجموع)."
  },
  {
    id: "l2_q8",
    questionText: "كيف تدير JavaScript التزامن (Concurrency) على الرغم من كونها تعتمد على خيط واحد (Single-threaded)؟",
    options: [
      "عبر استخدام عدة أنوية من المعالج في نفس اللحظة.",
      "من خلال حلقة الأحداث (Event Loop) التي تنقل المهام غير المتزامنة وتدير تدفقها.",
      "عن طريق إيقاف جميع العمليات التفاعلية حتى تكتمل المهمة الحالية.",
      "لا تدعم التزامن بأي شكل من الأشكال."
    ],
    correctAnswerIndex: 1,
    explanation: "عبر حلقة الأحداث (Event Loop)، تتخطى JavaScript طبيعتها وحيدة الخيط بنقل المهام الطويلة لـ Web APIs وتستكمل الكود الرئيسي بسلاسة."
  },
  {
    id: "l2_q9",
    questionText: "يمثل قيام React بإعادة رسم المكونات المعتمدة على الحالة فور تغييرها، تطبيقاً مباشراً لأي نمط من أنماط التصميم (Design Patterns)؟",
    options: [
      "نمط المصنع (Factory)",
      "نمط المراقب (Observer)",
      "نمط الديكور (Decorator)",
      "نمط التركيب (Composite)"
    ],
    correctAnswerIndex: 1,
    explanation: "في نمط المراقب (Observer)، عندما يتغير الموضوع (State/Subject)، يتم إشعار جميع المراقبين (Observers/Components) المعتمدين عليه لتحديث أنفسهم."
  },
  {
    id: "l2_q10",
    questionText: "تطبيقاً لمبدأ \"الفتح والإغلاق\" (OCP) من مبادئ SOLID، كيف نتعامل مع زر يحتاج لأن يظهر بألوان متعددة في React؟",
    options: [
      "نقوم بإنشاء مكون مستقل لكل لون (RedButton, BlueButton).",
      "نعدل الكود الداخلي لمكون الزر في كل مرة نحتاج فيها للون جديد.",
      "لتوسيع سلوك المكون دون تعديل شفرته الأصلية نمرر متغير اللون كـ Prop.",
      "نستخدم المتغيرات العامة (Global variables) لتغيير اللون."
    ],
    correctAnswerIndex: 2,
    explanation: "مبدأ OCP يُطبق بتمرير Props (مثل variant أو color) للمكون، مما يغير سلوكه دون الحاجة لنسخه أو تعديل كوده المصدري."
  },
  {
    id: "l2_q11",
    questionText: "ما هو الفرق الجوهري بين State و Props في مكونات React؟",
    options: [
      "تقبل جميع أنواع البيانات Props مخصصة للنصوص فقط، بينما State.",
      "تأتي من الأب وهي للقراءة فقط State يمكن تعديلها بواسطة المكون نفسه، بينما Props.",
      "بيانات تمرر من المكون الأب وهي للقراءة فقط Props بيانات داخلية متغيرة يمتلكها المكون، بينما State.",
      "لا يوجد فرق، كلاهما يستخدمان لنفس الغرض."
    ],
    correctAnswerIndex: 2,
    explanation: "بيانات تمرر من الأعلى إلى الأسفل وتكون Props هي حالة محلية متغيرة يديرها المكون نفسه لتخزين بيانات متقلبة، بينما State للقراءة فقط."
  },
  {
    id: "l2_q12",
    questionText: "لماذا يُمنع استدعاء Hooks (مثل useState) داخل الشروط (if statements) أو الحلقات (loops)؟",
    options: [
      "لأن ذلك يسبب تسريباً في الذاكرة.",
      "يعتمد على \"ترتيب الاستدعاء\" لربط الحالة الصحيحة في كل عملية إعادة رسم لـ React لأن.",
      "لأن المتصفح سيقوم بحظر السكريبت لأسباب أمنية.",
      "لأن الـ Hooks لا تدعم إلا العمليات غير المتزامنة."
    ],
    correctAnswerIndex: 1,
    explanation: "حسب Rules of Hooks، يتعرف React على الحالة الخاصة بكل Hook بناءً على ترتيب الاستدعاء؛ فإذا وضع Hook داخل شرط، قد يتغير الترتيب وينهار التطبيق."
  },
  {
    id: "l2_q13",
    questionText: "المطور حاول تحديث حالة الكائن لكن الواجهة لم تتحدث. ما هو الخطأ؟\n\nconst [user, setUser] = useState({ name: 'أحمد', age: 25 });\n// داخل دالة الحدث:\nuser.age = 26;\nsetUser(user);",
    options: [
      "يجب استخدام متغيرات منفصلة، useState لا يجوز تخزين كائنات داخل.",
      "يُعتبر أن الكائن لم يتغير ولن يعيد الرسم React برمجياً (Reference)، التعديل المباشر لا يغير المرجع.",
      "لأنها دالة غير متزامنة setUser قبل استدعاء await يجب وضع كلمة.",
      "const وليس let يجب أن يُعرف باستخدام user المتغير."
    ],
    correctAnswerIndex: 1,
    explanation: "في React، التعديل المباشر (Mutation) لخصائص الكائن لا يغير مرجعه في الذاكرة. يجب إنشاء كائن جديد باستخدام spread operator مثل setClicks({...user, age: 26})."
  },
  {
    id: "l2_q14",
    questionText: "ما هو الخطأ القاتل في طريقة ربط معالج الحدث بهذا الزر؟\n\n<button onClick={setCounter(counter + 1)}>زيادة</button>",
    options: [
      "onclick يجب أن تكون مكتوبة بأحرف صغيرة.",
      "استخدام الأقواس () يستدعي الدالة فوراً أثناء الرسم، مما يغير الحالة ويسبب حلقة إعادة رسم لا نهائية.",
      "داخل الأقواس المعقوفة مباشرة (counter + 1) لا يمكن إجراء عملية جمع.",
      "يجب وضع علامات اقتباس حول الدالة الممررة."
    ],
    correctAnswerIndex: 1,
    explanation: "كتابة الأقواس setCounter(...) تعني استدعاء الدالة مباشرة أثناء بناء الواجهة Render، مما يغير الحالة ويستدعي البناء مجدداً في حلقة لا نهائية."
  },
  {
    id: "l2_q15",
    questionText: "الكود التالي سيرمي خطأ (TypeError). لماذا؟\n\nconst numbers = [1, 2, 3];\nnumbers = [4, 5, 6];",
    options: [
      "لا يمكنك تخزين أرقام مختلفة داخل نفس المصفوفة المعرفة.",
      "المصفوفة يجب أن تبدأ دائماً من الرقم صفر.",
      "لا يمكن إعادة إسناد لمرجع (قيمة) جديدة تماماً const المتغير المعرف بـ.",
      "reduce الطريقة الوحيدة لتعديل المصفوفة هي باستخدام دالة."
    ],
    correctAnswerIndex: 2,
    explanation: "المتغير المعرف بكلمة const لا يُسمح بإعادة إسناده (Reassignment) لقيمة أو مصفوفة جديدة بالكامل، رغم إمكانية تعديل محتواه."
  },
  {
    id: "l2_q16",
    questionText: "أي من الدوال التالية تعتبر خطأً عند استخدامها لتحديث حالة مصفوفة في React؟\n\nconst [items, setItems] = useState([1, 2]);\nconst handleAdd = () => {\n  // السطر الخاطئ هنا\n}",
    options: [
      "setItems(items.concat(3))",
      "setItems([...items, 3])",
      "setItems(items.filter(n => n !== 2))",
      "setItems(items.push(3))"
    ],
    correctAnswerIndex: 3,
    explanation: "الدالة push() تقوم بتعديل المصفوفة الأصلية مباشرة (Mutation) وتُرجع طول المصفوفة الجديد كـ \"رقم\"، مما يدمّر حالة المصفوفة في React."
  },
  {
    id: "l2_q17",
    questionText: "المكون التالي لا يقبل الترجمة بسبب خطأ في استخدام الـ Hooks. ما هو؟\n\nconst App = () => {\n  if (true) {\n    const [name, setName] = useState('');\n  }\n  return <div>{name}</div>\n}",
    options: [
      "داخل Hooks كما يمنع وضع return، ولا يمكن الوصول إليه في دالة if تم تعريفه داخل كتلة name المتغير.",
      "حصراً عند التهيئة null يجب أن تستقبل قيمة useState الدالة.",
      "لا يوجد أي خطأ، الكود سيعمل بشكل سليم تماماً.",
      "JavaScript غير مقبولة برمجياً في لغة if(true) جملة."
    ],
    correctAnswerIndex: 0,
    explanation: "لا يمكن استدعاء Hooks داخل الشروط if، إضافة إلى أن المتغير المعرف بـ const داخل كتلة لا يمكن الوصول إليه خارجها (Block Scoped)."
  },
  {
    id: "l2_q18",
    questionText: "يحاول المطور عرض معلومات الطالب لكن تظهر له صفحة فارغة أو خطأ. ما السبب؟\n\nconst student = { name: \"سالم\", grade: \"A\" };\nconst Profile = () => <p>{student}</p>;",
    options: [
      "لعرض خصائص الكائن map يجب استخدام دالة.",
      "JSX ولا يمكن عرضها مباشرة في React الكائنات غير صالحة كأبناء في.",
      "حصراً لكي يظهر في الواجهة let يجب تعريفه باستخدام student المتغير.",
      "ناقصة، إذ لا يصبح الإرجاع الضمني في هذه الحالة return الكلمة."
    ],
    correctAnswerIndex: 1,
    explanation: "لا نستطيع عرض الكائنات ككتلة واحدة في JSX، سيرمي React خطأً صريحاً. يجب تحديد الخاصية المراد عرضها صراحة مثل {student.name}."
  },
  {
    id: "l2_q19",
    questionText: "لإكمال عملية التفكيك (Destructuring) واستخراج الاسم مع إعطاء البريد الإلكتروني قيمة افتراضية في حال عدم توفره:\n\nconst student = { name: \"سارة\", age: 21 };\nconst { name, email = _______ } = student;",
    options: [
      "\"غير متوفر\"",
      ": \"غير متوفر\"",
      "== \"غير متوفر\"",
      "=> \"غير متوفر\""
    ],
    correctAnswerIndex: 0,
    explanation: "عند التفكيك Destructuring يمكن إعطاء قيمة افتراضية باستخدام إشارة المساواة = \"القيمة\"."
  },
  {
    id: "l2_q20",
    questionText: "لدمج محتوى مصفوفتين بطريقة تتوافق مع مبدأ الثبات (Immutability) وإنشاء مصفوفة جديدة، ماذا نضع في الفراغ؟\n\nconst arr1 = [1, 2];\nconst arr2 = [_______arr1, 3, 4];",
    options: [
      "++",
      "concat.",
      "...",
      "spread."
    ],
    correctAnswerIndex: 2,
    explanation: "عامل النشر Spread Operator يُكتب بثلاث نقاط ... وهو يستخدم لنثر عناصر المصفوفة الأولى داخل المصفوفة الجديدة."
  },
  {
    id: "l2_q21",
    questionText: "لتعريف دالة سهمية (Arrow Function) ترجع مربع الرقم مباشرة دون الحاجة لكلمة return:\n\nconst square = x _______ x * x;",
    options: [
      "->",
      "=>",
      "==",
      "="
    ],
    correctAnswerIndex: 1,
    explanation: "الدالة السهمية تكتب هكذا => وفي حال كان التنفيذ تعبيراً واحداً في سطر واحد، يتم إرجاع الناتج برمجياً (Implicit return)."
  },
  {
    id: "l2_q22",
    questionText: "لإكمال القالب النصي (Template Literal) بشكل صحيح وطباعة المتغير:\n\nconst age = 20;\nconst text = `عمرك هو _______ سنة`;",
    options: [
      "{age}",
      "$age",
      "${age}",
      "<age>"
    ],
    correctAnswerIndex: 2,
    explanation: "في القوالب النصية (Backticks)، نستخدم ${age} لحقن وتضمين متغيرات وتعاريف JavaScript داخل السلسلة النصية."
  },
  {
    id: "l2_q23",
    questionText: "لإنتظار حتى اكتمال عملية الجلب (fetch) داخل دالة معرفة كـ async، ماذا نضع في الفراغ؟\n\nconst fetchData = async () => {\n  const response = _______ fetch('https://api.com/data');\n}",
    options: [
      "await",
      "wait",
      "yield",
      "then"
    ],
    correctAnswerIndex: 0,
    explanation: "الكلمة المفتاحية await تُستخدم حصراً داخل الدوال المعرّفة بـ async لإيقاف التنفيذ مؤقتاً حتى يكتمل الوعد Promise."
  },
  {
    id: "l2_q24",
    questionText: "للعرض الشرطي المنطقي، بحيث إذا كان isLoggedIn صحيحاً نعرض المكون، وإلا لا شيء:\n\nreturn <div> { isLoggedIn _______ <Dashboard /> } </div>",
    options: [
      "||",
      "??",
      "&&",
      "=="
    ],
    correctAnswerIndex: 2,
    explanation: "يُستخدم العامل المنطقي && بكثرة في React للعرض الشرطي القصير؛ فإذا كان الشرط الأول صحيحاً يكمل ويرسم المكون."
  },
  {
    id: "l2_q25",
    questionText: "ما هو الترتيب الذي ستطبع به الأرقام في الـ Console وفقاً لمفهوم حلقة الأحداث (Event Loop)؟\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
    options: [
      "2 ثم 1 ثم 3",
      "3 ثم 2 ثم 1",
      "1 ثم 3 ثم 2",
      "1 ثم 2 ثم 3"
    ],
    correctAnswerIndex: 2,
    explanation: "رسالة الـ setTimeout حتى لو كانت 0 ثانية تُرسل للـ Task Queue وتنتظر حتى يفرغ الـ Call Stack، لذا تُطبع 1 ثم 3 ثم أخيراً 2."
  },
  {
    id: "l2_q26",
    questionText: "ماذا ستكون قيمة result النهائية؟\n\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(n => n > 2).map(n => n * 10);",
    options: [
      "[10, 20, 30, 40, 50]",
      "[3, 4, 5]",
      "[30, 40, 50]",
      "[40, 50]"
    ],
    correctAnswerIndex: 2,
    explanation: "أولاً filter تصفي الأرقام الأكبر من 2 لتعطي [3, 4, 5]، ثم map تضرب كل رقم بـ 10 ليكون الناتج [30, 40, 50]."
  },
  {
    id: "l2_q27",
    questionText: "إذا تم النقر على الزر مرة واحدة، ماذا سيتطبع في الـ Console؟\n\nconst [counter, setCounter] = useState(0);\nconst handleClick = () => {\n  setCounter(counter + 1);\n  console.log(counter);\n}",
    options: [
      "1",
      "0",
      "undefined",
      "سيظهر خطأ."
    ],
    correctAnswerIndex: 1,
    explanation: "دالة setState لا تحدث القيمة محلياً فوراً (تكون Async وتتم الجدولة)، لذلك console.log ستطبع القيمة القديمة الموجودة في الـ Closure وهي 0."
  },
  {
    id: "l2_q28",
    questionText: "ما هو ناتج العملية التالية (قيمة total)؟\n\nconst numbers = [1, 2, 3];\nconst total = numbers.reduce((sum, n) => sum + n, 0);",
    options: [
      "[1, 2, 3]",
      "0",
      "6",
      "NaN"
    ],
    correctAnswerIndex: 2,
    explanation: "دالة reduce هنا تجمع الأرقام بدءاً من القيمة 0، 0 + 1 + 2 + 3 = 6."
  },
  {
    id: "l2_q29",
    questionText: "ما هي خصائص الكائن الجديد (newObj) التي ستنتج عن عملية النسخ هذه؟\n\nconst obj = { a: 1, b: 2 };\nconst newObj = { ...obj, b: 5, c: 3 };",
    options: [
      "{ a: 1, b: 2, c: 3 }",
      "{ a: 1, b: 5, c: 3 }",
      "{ b: 5, c: 3 }",
      "سيحدث خطأ بسبب تكرار المفتاح b."
    ],
    correctAnswerIndex: 1,
    explanation: "عامل النشر ينسخ جميع خصائص obj، وإذا تم تمرير نفس المفتاح (b) بعدها، فإنه يقوم بالكتابة فوقه بالقيمة الجديدة 5."
  },
  {
    id: "l2_q30",
    questionText: "ماذا سيعرض هذا المكون على الشاشة؟\n\nconst App = () => {\n  const toggle = true;\n  return <p>{toggle ? 'مفعل' : 'معطل'}</p>\n}",
    options: [
      "true",
      "معطل",
      "مفعل",
      "خطأ وقت التشغيل."
    ],
    correctAnswerIndex: 2,
    explanation: "قيمة toggle هي true، لذا سيقوم المعامل الثلاثي بتقييم وتنفيذ الجزء الأول الذي يقع بعد علامة الاستفهام مباشرة ليعرض \"مفعل\"."
  }
];
