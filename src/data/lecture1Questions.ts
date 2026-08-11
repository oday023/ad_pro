import { Question } from '../types';

export const lecture1Questions: Question[] = [
  {
    id: "l1_q1",
    questionText: "ما هو العيب الرئيسي لنمط البنية المعمارية Monolithic مقارنة بالخدمات المصغرة (Microservices)؟",
    options: [
      "يتطلب إدارة اتصالات معقدة بين المكونات الداخلية.",
      "يُعتبر صعب التوسع والصيانة عند كبر حجم التطبيق.",
      "يمتلك نقاط فشل متعددة مما يقلل من موثوقية النظام.",
      "يتطلب فصل العرض عن المعالجة مما يعقد عملية النشر."
    ],
    correctAnswerIndex: 1,
    explanation: "بنية Monolithic تجعل التطبيق كتلة واحدة، مما يصعب توسعته وصيانته مع زيادة حجم المشروع، عكس Microservices التي تسمح بتوسع كل خدمة باستقلالية."
  },
  {
    id: "l1_q2",
    questionText: "في نموذج TCP/IP العملي، أي طبقة تقابل طبقات (الجلسة، العرض، التطبيقات) مجتمعة في نموذج OSI؟",
    options: [
      "طبقة الإنترنت (Internet Layer)",
      "طبقة الوصول للشبكة (Network Access)",
      "طبقة التطبيقات (Application Layer)",
      "طبقة النقل (Transport Layer)"
    ],
    correctAnswerIndex: 2,
    explanation: "في نموذج TCP/IP المكون من 4 طبقات، طبقة التطبيقات (Application Layer) تدمج مهام طبقات الجلسة، العرض، والتطبيقات من نموذج OSI."
  },
  {
    id: "l1_q3",
    questionText: "أي من التحسينات التالية تم تقديمها في بروتوكول HTTP/2 مقارنة بالإصدارات السابقة؟",
    options: [
      "لزيادة السرعة في الشبكات غير المستقرة أصبح البروتوكول مبنياً على UDP.",
      "لتسهيل القراءة البشرية (Text-based) تم تحويله إلى بروتوكول نصي.",
      "كإعداد افتراضي أضاف ميزة الاتصال الدائم (keep-alive).",
      "أصبح ثنائياً (Binary) ودعم تعدد الإرسال (Multiplexing) وضغط الترويسات."
    ],
    correctAnswerIndex: 3,
    explanation: "إصدار HTTP/2 جلب نقلة نوعية بتحوله إلى بروتوكول ثنائي (Binary) ودعمه لتعدد الإرسال (Multiplexing) وضغط الترويسات عبر خوارزمية HPACK."
  },
  {
    id: "l1_q4",
    questionText: "ما هو رمز حالة HTTP الذي يعبر عن \"نجح الطلب ولكن بدون محتوى مرجع\" (No Content)؟",
    options: [
      "200",
      "201",
      "204",
      "301"
    ],
    correctAnswerIndex: 2,
    explanation: "الرمز 204 (No Content) يعني أن الخادم عالج الطلب بنجاح لكنه لا يحتاج لإرجاع أي محتوى في جسم الاستجابة."
  },
  {
    id: "l1_q5",
    questionText: "في عملية حل اسم النطاق (DNS)، إذا لم يجد المتصفح الـ IP في ذاكرته المؤقتة، ما هي الخطوة التالية مباشرة؟",
    options: [
      "استعلام الخادم الجذر (Root DNS Server).",
      "التحقق من ذاكرة نظام التشغيل وملف hosts (OS Cache).",
      "سؤال الخادم المحلي التابع لمزود الخدمة (ISP Resolver).",
      "الاتصال بخادم النطاق عالي المستوى (TLD Server)."
    ],
    correctAnswerIndex: 1,
    explanation: "التسلسل الصحيح لـ DNS هو: ذاكرة المتصفح -> ذاكرة نظام التشغيل (OS Cache / hosts file) -> خادم مزود الخدمة المحلي."
  },
  {
    id: "l1_q6",
    questionText: "من منظور تحليل التعقيد، ما هو تعقيد عملية البحث باستخدام querySelector التي تقوم بمسح خطي (DFS) لشجرة DOM؟",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswerIndex: 2,
    explanation: "طريقة querySelector تقوم ببحث خطي (Linear Scan / DFS) في شجرة DOM، مما يجعل تعقيدها O(n)."
  },
  {
    id: "l1_q7",
    questionText: "أي مرحلة من مراحل محرك العرض (Rendering Engine) تتسم بتكلفة أداء \"عالية\" وتُعنى بحساب الحجم والموقع الدقيق لكل عنصر؟",
    options: [
      "التحليل (Parsing)",
      "الرسم (Paint)",
      "التخطيط (Layout / Reflow)",
      "تجميع الطبقات (Composite)"
    ],
    correctAnswerIndex: 2,
    explanation: "مرحلة Layout (أو Reflow) هي المسؤولية عن حساب الحجم والموقع، وتعتبر عملية ذات تكلفة أداء عالية جداً."
  },
  {
    id: "l1_q8",
    questionText: "ما هو العيب الأساسي لنمط العرض من جهة العميل (CSR) المستخدم في تطبيقات SPA؟",
    options: [
      "يسبب حملاً كبيراً على الخادم مع كل طلب.",
      "تجربة المستخدم والتفاعل بطيئة بعد التحميل.",
      "لا يناسب المحتوى الديناميكي المتغير باستمرار.",
      "ضعيف في تحسين محركات البحث (SEO) والتحميل الأول بطيء."
    ],
    correctAnswerIndex: 3,
    explanation: "العرض من جهة العميل (CSR) يعاني من ضعف في محركات البحث (SEO) لأن المحتوى الأولي يكون فارغاً حتى يتم تنفيذ JavaScript، مما يسبب بطئاً في التحميل الأول."
  },
  {
    id: "l1_q9",
    questionText: "ما هو الافتراض الأول الذي تعتمد عليه خوارزمية Reconciliation في React لتقليل تعقيد مقارنة الأشجار إلى O(n)؟",
    options: [
      "أن المطور سيقوم بتعريف خصائص CSS بشكل مضمن (Inline) لتسريع العرض.",
      "أن العناصر من أنواع مختلفة تُنتج أشجاراً مختلفة تماماً، فيتم استبدالها بالكامل.",
      "أن جميع المكونات مبنية وفق مبدأ المسؤولية الواحدة (SRP).",
      "أن شجرة DOM الحقيقية لا يتم تحديثها إلا عند اكتمال تحميل جميع البيانات."
    ],
    correctAnswerIndex: 1,
    explanation: "خوارزمية React Diffing تفترض أن العناصر ذات الأنواع المختلفة ستُنتج أشجاراً مختلفة فتهدم القديمة، وتستخدم خاصية key لمطابقة العناصر من نفس النوع."
  },
  {
    id: "l1_q10",
    questionText: "كيف تطبق React مبدأ \"الفتح - الإغلاق\" (OCP) المستوحى من هندسة البرمجيات؟",
    options: [
      "من خلال جعل المكون يقتصر على مسؤولية واحدة فقط.",
      "بجعل المكونات مفتوحة للتوسيع عبر الخصائص (Props)، ومغلقة للتعديل الداخلي.",
      "عن طريق استخدام Virtual DOM بدلاً من DOM الحقيقي.",
      "بتجنب استخدام الوراثة واستخدام التركيب (Composition) بدلاً منها."
    ],
    correctAnswerIndex: 1,
    explanation: "مبدأ OCP (Open/Closed Principle) يُطبق في React بجعل المكون مفتوحاً للتوسيع عبر استقبال خصائص جديدة (Props)، ومغلقاً لتعديل كوده الداخلي لكل حالة."
  },
  {
    id: "l1_q11",
    questionText: "ما هي الطريقة الصحيحة لتعريف معامل التحديث الجزئي في بروتوكول HTTP؟",
    options: [
      "POST",
      "PUT",
      "PATCH",
      "UPDATE"
    ],
    correctAnswerIndex: 2,
    explanation: "طريقة PATCH تُستخدم في HTTP لتحديث جزء من المورد (Partial Update)، بينما PUT تُستخدم لاستبدال المورد بالكامل."
  },
  {
    id: "l1_q12",
    questionText: "لماذا يستخدم React النمط التصريحي (Declarative) بدلاً من الأمري (Imperative)؟",
    options: [
      "لأنه يسمح بالتحكم المباشر والسريع في عقد DOM الحقيقية.",
      "لأنه يصف \"كيف\" يتم تحديث الواجهة خطوة بخطوة مما يسهل الاختبار.",
      "لأن React يتكفل بتحديث DOM بكفاءة و يجعل الواجهة قابلة للتنبؤ (الحالة = الواجهة).",
      "لأنه يقلل من حجم ملفات CSS المطلوبة لتنسيق الصفحة."
    ],
    correctAnswerIndex: 2,
    explanation: "البرمجة التصريحية (Declarative) تركز على وصف \"ماذا نريد\" (الحالة)، وتترك لـ React مهمة \"كيف\" يتم تحديث DOM بأعلى كفاءة، مما يقلل الأخطاء."
  },
  {
    id: "l1_q13",
    questionText: "ما هو الخطأ في الكود التالي المكتوب بصيغة JSX؟\n\nconst App = () => {\n  return <div class=\"container\">محتوى</div>\n}",
    options: [
      "الدالة لا تحتوي على تعليمة تصدير export.",
      "يجب استخدام className بدلاً من class لأنها كلمة محجوزة في JS.",
      "النص \"محتوى\" يجب أن يوضع داخل أقواس معقوفة {'محتوى'}.",
      "الكود صحيح تماماً ولا يوجد به أي أخطاء."
    ],
    correctAnswerIndex: 1,
    explanation: "في JSX لا يمكن استخدام class لأنها كلمة محجوزة في لغة JavaScript، ويجب استبدالها بـ className."
  },
  {
    id: "l1_q14",
    questionText: "المكون التالي لا يعمل بشكل صحيح، ما السبب؟\n\nconst UserProfile = (props) => {\n  props.age = props.age + 1;\n  return <p>{props.name} - {props.age}</p>\n}",
    options: [
      "الدالة يجب أن تستخدم تفكيك الكائنات حصراً (Destructuring).",
      "لا يمكن تعديل قيم props لأنها خصائص للقراءة فقط (Read-only) داخل المكون.",
      "عملية الجمع يجب أن توضع داخل أقواس معقوفة ضمن تعليمة return.",
      "لا يجوز تمرير أرقام (age) عبر props، تقبل فقط السلاسل النصية."
    ],
    correctAnswerIndex: 1,
    explanation: "من القواعد الصارمة في React أن الـ Props هي للقراءة فقط (Read-only) ولا يمكن للمكون الابن تعديل قيمها الممررة إليه."
  },
  {
    id: "l1_q15",
    questionText: "عند محاولة تشغيل هذا الكود سيظهر خطأ ترجمة (Compile Error)، ما هو الحل؟\n\nconst App = () => {\n  return (\n    <h1>العنوان</h1>\n    <p>التفاصيل</p>\n  )\n}",
    options: [
      "يجب حذف الأقواس () بعد كلمة return.",
      "يجب وضع كل سطر في تعليمة return منفصلة.",
      "يجب تغليف العنصرين بعنصر جذري واحد، مثل <div/> أو Fragment <></>.",
      "يجب استخدام فواصل (,) بين العناصر داخل الـ return."
    ],
    correctAnswerIndex: 2,
    explanation: "كل مكون React يجب أن يُرجع عنصراً جذرياً واحداً. إذا كان هناك عدة عناصر، يجب تغليفها بعنصر أب مثل div أو Fragment <></>."
  },
  {
    id: "l1_q16",
    questionText: "ما هو الخطأ في طريقة كتابة الحدث (Event) في الكود التالي؟\n\n<button onclick={handleClick}>نقر هنا</button>",
    options: [
      "onClick هكذا: يجب أن يكتب الحدث بطريقة camelCase.",
      "يجب استدعاء الدالة مباشرة هكذا: {handleClick()}.",
      "يجب تمرير الحدث كسلسلة نصية \"handleClick\".",
      "لا يمكن إسناد أحداث للعناصر في JSX، يجب استخدام addEventListener."
    ],
    correctAnswerIndex: 0,
    explanation: "جميع الأحداث في React تُكتب بصيغة camelCase (مثال: onClick, onChange, onSubmit)."
  },
  {
    id: "l1_q17",
    questionText: "لماذا يفشل React في تصيير (Render) هذا المكون؟\n\nconst data = { id: 1, text: \"رسالة\" };\nconst Message = () => <div>{data}</div>;",
    options: [
      "المتغير data معرف خارج نطاق المكون.",
      "يجب استخدام الأقواس () قبل وبعد محتوى الـ div.",
      "الكائنات (Objects) غير صالحة للعرض المباشر كأبناء في React.",
      "لا يوجد خطأ، سيتم عرض [object Object] على الشاشة."
    ],
    correctAnswerIndex: 2,
    explanation: "يعتبر تمرير كائن (Object) مباشر كابن في JSX خطأً، سيقوم React بطرح خطأ صريح (Objects are not valid as a React child)."
  },
  {
    id: "l1_q18",
    questionText: "أي من الأسطر التالية يعتبر طريقة \"خاطئة\" لتطبيق الأنماط المضمنة في JSX؟",
    options: [
      "<div style={{ color: 'red' }}>...</div>",
      "<div style={{ fontSize: '24px' }}>...</div>",
      "<div style=\"background-color: blue;\">...</div>",
      "<div style={{ margin: 10 }}>...</div>"
    ],
    correctAnswerIndex: 2,
    explanation: "الأنماط المضمنة في JSX لا تكتب كسلسلة نصية كما في HTML، بل يجب أن تمرر ككائن JavaScript يحتوي على خصائص camelCase."
  },
  {
    id: "l1_q19",
    questionText: "لإكمال كود عرض قائمة من الملاحظات بشكل سليم دون تحذيرات في سطر الأوامر، ماذا نضع في الفراغ؟\n\nconst list = notes.map(note => \n  <li _______>{note.content}</li>\n)",
    options: [
      "id={note.id}",
      "index={note.id}",
      "key={note.id}",
      "ref={note.id}"
    ],
    correctAnswerIndex: 2,
    explanation: "عند استخدام map لتوليد عناصر مصفوفة، يطلب React وضع خاصية فريدة باسم key على العنصر الجذري المرجع لتتبع التحديثات بكفاءة."
  },
  {
    id: "l1_q20",
    questionText: "استكمل الكود التالي لإنشاء مكون دالي (Functional Component) يستقبل props ويفككها مباشرة:\n\nconst Student = ( _______ ) => {\n  return <p>الطالب: {name}</p>\n}",
    options: [
      "props.name",
      "{ name }",
      "[ name ]",
      "name"
    ],
    correctAnswerIndex: 1,
    explanation: "لتفكيك الـ Props مباشرة في تعريف الدالة، نضع أسماء الخصائص داخل أقواس معقوفة { name }."
  },
  {
    id: "l1_q21",
    questionText: "ما هي الكلمة المحجوزة الناقصة في نهاية الملف لتصدير المكون كافتراضي؟\n\nconst App = () => <div>تطبيق</div>\n_______ default App;",
    options: [
      "import",
      "export",
      "module",
      "return"
    ],
    correctAnswerIndex: 1,
    explanation: "الكلمة الصحيحة لتصدير المكون في ES6 Modules هي export (تحديداً export default)."
  },
  {
    id: "l1_q22",
    questionText: "لإضافة ملف CSS خارجي إلى مكون React داخل مشروع Vite، ما هو السطر الصحيح؟\n\n_______ './App.css';",
    options: [
      "include",
      "require",
      "link",
      "import"
    ],
    correctAnswerIndex: 3,
    explanation: "لإستيراد ملفات CSS في أدوات البناء الحديثة مثل Vite، نستخدم الكلمة import متبوعة بمسار الملف كـ String."
  },
  {
    id: "l1_q23",
    questionText: "للربط الشرطي المنطقي القصير (إذا كان الشرط صحيحاً اعرض العنصر)، ماذا نضع في الفراغ؟\n\n<div>\n  {showMessage _______ <p>هذه رسالة</p>}\n</div>",
    options: [
      "||",
      "&&",
      "??",
      "=="
    ],
    correctAnswerIndex: 1,
    explanation: "العامل المنطقي && يُستخدم في React للعرض الشرطي المباشر دون الحاجة لكتابة else."
  },
  {
    id: "l1_q24",
    questionText: "في ملف index.html في مشروع Vite، ما هي القيمة الصحيحة للنوع (type) في وسم script؟\n\n<script type=\"_______\" src=\"/src/main.jsx\"></script>",
    options: [
      "text/jsx",
      "application/javascript",
      "module",
      "react/babel"
    ],
    correctAnswerIndex: 2,
    explanation: "في المشاريع الحديثة مثل Vite، يتم استيراد ملف الدخول كنظام وحدات ES Modules، لذا يجب تحديد \"type=\"module."
  },
  {
    id: "l1_q25",
    questionText: "ماذا سيظهر على الشاشة عند معالجة المكون التالي؟\n\nconst App = () => {\n  const isReady = false;\n  return <h1>النتيجة: {isReady ? 'مستعد' : 'غير مستعد'}</h1>\n}",
    options: [
      "النتيجة: مستعد",
      "النتيجة: غير مستعد",
      "النتيجة: false",
      "سيظهر خطأ لأن المعامل الثلاثي غير مدعوم في JSX."
    ],
    correctAnswerIndex: 1,
    explanation: "بما أن قيمة isReady هي false، فإن المعامل الثلاثي سينفذ الجزء الثاني بعد النقطتين (غير مستعد)."
  },
  {
    id: "l1_q26",
    questionText: "في حال تنفيذ الكود أدناه، ما هو الخرج النهائي المعروض؟\n\nconst App = () => {\n  const numbers = [1, 2, 3];\n  return <p>الطول: {numbers.length + 2}</p>\n}",
    options: [
      "الطول: 32",
      "الطول: 5",
      "الطول: numbers.length + 2",
      "الطول: NaN"
    ],
    correctAnswerIndex: 1,
    explanation: "عدد عناصر المصفوفة هو 3، سيتم تقييم التعبير 3 + 2 برمجياً ليصبح الناتج 5."
  },
  {
    id: "l1_q27",
    questionText: "ما هو النص الذي سيظهر للمستخدم من هذا المكون؟\n\nconst App = () => {\n  const title = \"react\";\n  return <span>{title.toUpperCase()}</span>\n}",
    options: [
      "{title.toUpperCase()}",
      "react",
      "REACT",
      "خطأ وقت التشغيل."
    ],
    correctAnswerIndex: 2,
    explanation: "استدعاء الدالة toUpperCase() على السلسلة النصية سيحولها إلى أحرف كبيرة REACT."
  },
  {
    id: "l1_q28",
    questionText: "ماذا سيكون خرج هذا المكون بالاعتماد على خصائص Boolean في React؟\n\nconst App = () => {\n  return <div>أ {true} {false} {null} ج</div>\n}",
    options: [
      "أ true false null ج",
      "أ ج",
      "أ true ج",
      "خطأ، لا يمكن تمرير null في React."
    ],
    correctAnswerIndex: 1,
    explanation: "في React، القيم المنطقية (true, false) و (null, undefined) تعتبر أبناء صالحة ولكنها لا تُصيّر أي نص على الشاشة، لذلك سيظهر \"أ ج\" فقط."
  },
  {
    id: "l1_q29",
    questionText: "ما هو الخرج المرئي للمكون الرئيسي App؟\n\nconst Child = ({ text }) => <span>{text}-</span>;\n\nconst App = () => {\n  return (\n    <div>\n      <Child text=\"أول\" />\n      <Child text=\"ثاني\" />\n    </div>\n  )\n}",
    options: [
      "أول-ثاني-",
      "أول- فقط",
      "ثاني- فقط",
      "سيظهر خطأ بسبب تكرار المكون."
    ],
    correctAnswerIndex: 0,
    explanation: "المكون App يستدعي المكون Child مرتين بنصوص مختلفة، وسيطم عرض النتيجتين مجاورتين: أول-ثاني-."
  },
  {
    id: "l1_q30",
    questionText: "ما هو الخرج الصحيح للكود التالي؟\n\nconst App = () => {\n  const user = { name: \"عمر\", points: 10 };\n  return <h3>النقاط: {user.points * 2}</h3>\n}",
    options: [
      "النقاط: 102",
      "النقاط: 20",
      "النقاط: {user.points * 2}",
      "خطأ: لا يمكن الوصول لخصائص الكائن داخل JSX."
    ],
    correctAnswerIndex: 1,
    explanation: "لا يمكن عرض الكائن كاملاً، لكن الوصول لخاصية داخله (user.points) وعمل حساب عليها هو أمر مسموح وصحيح، 10 * 2 = 20."
  }
];
