import { Question } from '../types';

export const lecture5Questions: Question[] = [
  {
    id: "l5_q1",
    questionText: "في المصطلح الرسمي للنموذج العلائقي (Relational Model)، ماذا يُطلق على \"العمود\" (Column)؟",
    options: [
      "Tuple",
      "Attribute",
      "Relation",
      "Degree"
    ],
    correctAnswerIndex: 1,
    explanation: "في مصطلحات النموذج العلائقي الرسمي (E.F. Codd)، يُسمى الجدول (Relation)، والصف (Tuple)، أما العمود فيسمى الخاصية (Attribute)."
  },
  {
    id: "l5_q2",
    questionText: "في الجبر العلائقي، ما هي العملية الرياضية التي تقابل استعلام تحديد \"أعمدة محددة\" فقط ويرمز لها بالرمز π (SELECT columns)؟",
    options: [
      "الاختيار (Selection)",
      "الضم (Join)",
      "الإسقاط (Projection)",
      "الضرب الديكارتي (Cartesian Product)"
    ],
    correctAnswerIndex: 2,
    explanation: "في الجبر العلائقي، الإسقاط (Projection) يُرمز له بـ π ويُستخدم لاختيار أعمدة محددة من الجدول (SELECT columns)، بينما الاختيار σ يُستخدم لتصفية الصفوف (WHERE)."
  },
  {
    id: "l5_q3",
    questionText: "وفقاً لعملية التسوية (Normalization)، ما هي المشكلة الأساسية التي تحلها \"الصيغة العادية الأولى\" (1NF)؟",
    options: [
      "تمنع الاعتماد الجزئي على المفتاح المركب.",
      "تمنع الاعتماد الانتقالي أو المتعدي.",
      "تشترط أن تكون قيم الخلايا \"ذرية\" (Atomic)، أي أن الخلية الواحدة لا يجوز أن تحتوي على مصفوفة أو قائمة من القيم.",
      "تضمن أن كل محدد هو مفتاح مرشح."
    ],
    correctAnswerIndex: 2,
    explanation: "الصيغة العادية الأولى (1NF) تشترط أن تكون قيم الخلايا \"ذرية\" (Atomic)، أي أن الخلية الواحدة لا يجوز أن تحتوي على مصفوفة أو قائمة من القيم."
  },
  {
    id: "l5_q4",
    questionText: "من ضمن خصائص ACID في قواعد البيانات، ماذا تعني خاصية \"المتانة / الديمومة\" (Durability)؟",
    options: [
      "المعاملة إما أن تنجح بالكامل أو تفشل بالكامل ولا تتجزأ.",
      "تكون البيانات مضمونة ومحفوظة نهائياً بعد تأكيد المعاملة (COMMIT) حتى في حال انقطاع الكهرباء أو تعطل النظام.",
      "المعاملات المتزامنة لا تتداخل مع بعضها البعض إطلاقاً.",
      "قاعدة البيانات تنتقل من حالة صالحة إلى حالة صالحة أخرى دائماً."
    ],
    correctAnswerIndex: 1,
    explanation: "المتانة أو الديمومة (Durability) تضمن أنه بمجرد الإعلان عن نجاح المعاملة، فإن تغييراتها ستظل محفوظة بشكل دائم في قاعدة البيانات بغض النظر عن انقطاع الطاقة أو تعطل النظام."
  },
  {
    id: "l5_q5",
    questionText: "ما هو نوع قاعدة البيانات NoSQL الذي يُعتبر الأفضل للتطبيقات ذات العلاقات المعقدة جداً مثل الشبكات الاجتماعية وأنظمة التوصية (مثل Neo4j)؟",
    options: [
      "Document-based (مستندات)",
      "Key-Value (مفتاح وقيمة)",
      "Column-Family (أعمدة مجتمعة)",
      "Graph (رسومية)"
    ],
    correctAnswerIndex: 3,
    explanation: "قواعد البيانات الرسومية (Graph) مثل Neo4j مبنية بشكل أساسي لنمذجة \"العلاقات\" بين العقد وحل استعلامات الشبكات المعقدة بكفاءة عالية."
  },
  {
    id: "l5_q6",
    questionText: "وفقاً لنظرية CAP (Brewer's Theorem)، عند حدوث \"تقسيم شبكي\" (Partition - P) وهو أمر حتمي، ما هما الخياران الوحيدان المتاحان أمام النظام الموزع؟",
    options: [
      "إما اختيار الاتساق (C) أو التوافرية (A).",
      "إما التخلي عن السرعة أو التخلي عن التخزين المؤقت.",
      "تحقيق الخصائص الثلاث معاً عبر استخدام قواعد البيانات العلائقية الحديثة.",
      "إما Atomicity أو Durability."
    ],
    correctAnswerIndex: 0,
    explanation: "نظرية CAP تنص على أن النظام الموزع يمكنه تقديم صفتين فقط من ثلاث. وبما أن التقسيم الشبكي (P) أمر واقع لا يمكن تفاديه، فالاختيار ينحصر بين توفير الاتساق (C) أو التوافرية (A)."
  },
  {
    id: "l5_q7",
    questionText: "ما هي مكتبة Mongoose في بيئة Node.js؟",
    options: [
      "قاعدة بيانات علائقية مبنية بالكامل باستخدام JavaScript.",
      "هي أداة ODM لـ Node.js تُسهل التعامل مع قواعد MongoDB بإضافة طبقة لتعريف المخططات (Schemas) والنماذج (Models).",
      "محرك قالب (Template Engine) لتوليد صفحات HTML ديناميكية.",
      "مكتبة تشفير لحماية كلمات المرور قبل تخزينها في قاعدة البيانات."
    ],
    correctAnswerIndex: 1,
    explanation: "مكتبة Mongoose هي أداة ODM لـ Node.js تُسهل التعامل مع قواعد MongoDB بإضافة طبقة لتعريف المخططات (Schemas) والنماذج (Models)."
  },
  {
    id: "l5_q8",
    questionText: "ما هو التعقيد الزمني لعملية \"البحث\" في بنية الفهرس B-Tree، والتي تُعتبر الأكثر استخداماً في قواعد البيانات؟",
    options: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    correctAnswerIndex: 2,
    explanation: "بنية الفهرس B-Tree متوازنة ذاتياً، مما يجعل تعقيد البحث فيها لوغاريتمياً O(log n)، وهو سريع جداً وفعال للبحث النطاقي مقارنة بالمسبح الشامل O(n)."
  },
  {
    id: "l5_q9",
    questionText: "أي من العبارات التالية يمثل عيباً أساسياً (Trade-off) عند الإكثار من استخدام \"الفهارس\" (Indexes) في جداول قاعدة البيانات؟",
    options: [
      "بطيئة جداً (SELECT) تجعل عمليات القراءة.",
      "تبطئ عمليات الكتابة/الإضافة (INSERT, UPDATE, DELETE) وتزيد من استهلاك مساحة التخزين.",
      "بين الجداول المفهرسة JOIN تمنع استخدام عبارات.",
      "تؤدي إلى فقدان بيانات الجداول عند انقطاع التيار الكهربائي."
    ],
    correctAnswerIndex: 1,
    explanation: "الفهارس تسرع عمليات البحث بامتياز، لكنها تتطلب إعادة بناء وتحديث مع كل عملية إدخال أو تعديل أو حذف، مما يسبب بطئاً في عمليات الكتابة واستهلاكاً للقرض (Trade-off)."
  },
  {
    id: "l5_q10",
    questionText: "في مخطط الكيان والعلاقة (ERD)، ما هو نوع العلاقة التي تربط الكيانات عبر \"جدول وسيط\" يجمع بين مفاتيحيهما؟ (Junction Table)",
    options: [
      "One-to-One (1:1)",
      "One-to-Many (1:N)",
      "Many-to-Many (M:N)",
      "Parent-Child"
    ],
    correctAnswerIndex: 2,
    explanation: "العلاقة متعدد لمتعدد (Many-to-Many M:N) لا يمكن تمثيلها مباشرة في الجداول العلائقية، وتحتاج إلى \"جدول وسيط\" يجمع المفاتيح الأجنبية لكلا الجدولين."
  },
  {
    id: "l5_q11",
    questionText: "ضمن مستويات العزل (Isolation Levels) في خصائص ACID، أي مستوى يمنع \"القراءة القذرة\" (Dirty Read) و \"القراءة غير القابلة للتقرار\" (Non-repeatable Read) لكنه يسمح بـ \"القراءة الشبحية\" (Phantom Read)؟",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    correctAnswerIndex: 2,
    explanation: "مستوى العزل Repeatable Read يحمي المعاملة من القراءات القذرة ومن تغير القيم أثناء المعاملة، لكنه لا يمنع القراءة الشبحية (إضافة صفوف جديدة من معاملة أخرى تلبي نفس الشرط)."
  },
  {
    id: "l5_q12",
    questionText: "ما هي الخصائص الرئيسية لأنظمة BASE المرتبطة بقواعد بيانات NoSQL؟",
    options: [
      "توفر أساسي، حالة صلبة وثابتة، واتساق فوري.",
      "التوفر الأساسي (Basically Available)، حالة متغيرة/لينة (Soft state)، والاتساق في النهاية (Eventual consistency).",
      "ذرية فائقة وعزل تام لكل معاملة.",
      "لضمان التكامل (Foreign Keys) الأجنبية SQL الاعتماد الكلي على مفاتيح."
    ],
    correctAnswerIndex: 1,
    explanation: "الأنظمة الموزعة من نوع NoSQL تتبنى خصائص BASE: التوفر الأساسي، حالة متغيرة/لينة، والاتساق في النهاية Eventual Consistency وذلك لضمان سرعة وتوسع النظام بعكس صرامة ACID."
  },
  {
    id: "l5_q13",
    questionText: "الكود التالي مخصص لتزويد تطبيق الواجهة الأمامية المَبني مسبقاً (Production Build) للعميل عبر خادم Express، أين الخطأ؟\n\nconst express = require('express');\nconst app = express();\napp.use(express.static('frontend/public'));\n// ... باقي الكود",
    options: [
      "لا يمكن استضافة ملفات ثابتة في خادم Express.",
      "يجب أن يتم توجيه الملفات الثابتة نحو المجلد الذي يتم توليده عند البناء (عادة يُسمى 'dist' أو 'build') وليس مجلد التطوير العام.",
      "تتطلب تمرير رابط express.static الدالة URL كمعامل أول.",
      "الدالة مدمجة ومكتوبة بشكل صحيح ولا يوجد أي خطأ."
    ],
    correctAnswerIndex: 1,
    explanation: "لتقديم نسخة الإنتاج من تطبيق الواجهة، يجب الإشارة إلى مجلد التوزيع النهائي الذي ينتج عن عملية البناء (عادة يسمى dist أو build) وليس مجلد الشفرة الأصلية."
  },
  {
    id: "l5_q14",
    questionText: "يحاول المطور استدعاء المتغير MONGODB_URI من ملف .env، لكن القيمة دائماً undefined. ما هو الخطأ؟\n\nconst mongoose = require('mongoose');\nconst url = process.env.MONGODB_URI;\nmongoose.connect(url).then(() => console.log(\"Connected\"));",
    options: [
      "يجب استخدام node.env بدلاً من process.env.",
      "يفتقد الكود لاستيراد وتفعيل مكتبة dotenv كالتالي: require('dotenv').config() في بداية الملف.",
      "كسلسلة نصية ثابتة حصراً في URI يجب إرسال Mongoose.",
      "في بيئة التطوير المحلية لا يجوز استخدام process.env."
    ],
    correctAnswerIndex: 1,
    explanation: "بيئة Node.js لا تقوم بتحميل محتويات ملف .env تلقائياً للكائن process.env، يتطلب ذلك استيراد وتكوين مكتبة dotenv كأول خطوة في الملف."
  },
  {
    id: "l5_q15",
    questionText: "الكود المخصص لتعديل كائن JSON المرجع من Mongoose يخفق في تحويل _id إلى نص قراءة. ما هو الخطأ البرمجي هنا؟\n\nnoteSchema.set('toJSON', {\n  transform: (document, returnedObject) => {\n    returnedObject.id = returnedObject._id;\n    delete returnedObject._id;\n    delete returnedObject.__v;\n  }\n});",
    options: [
      "للكائن المرجع (id) لا يمكن إضافة خاصية جديدة.",
      "المتغير _id في MongoDB هو كائن (ObjectId) في MongoDB، يجب تحويله لنص باستخدام ().toString قبل إسناده لـ id.",
      "delete الكلمة المحجوزة transform لا تعمل داخل دوال.",
      "في النهاية return returnedObject يجب إرجاع الكائن باستخدام."
    ],
    correctAnswerIndex: 1,
    explanation: "المعرف _id في MongoDB يكون من النوع المعقد ObjectId، ويجب استدعاء الدالة .toString() لتحويله إلى نص عادي آمن للواجهة الأمامية قبل حذفه."
  },
  {
    id: "l5_q16",
    questionText: "عند محاولة تحديث ملاحظة باستخدام الكود أدناه، يشتكي المطور أن الـ API ترجع دائماً النسخة \"القديمة\" من الملاحظة قبل التعديل، ما هو السبب؟\n\nNote.findByIdAndUpdate(\n  request.params.id, \n  { content, important }\n).then(updatedNote => response.json(updatedNote));",
    options: [
      "لا تُحدث البيانات في قاعدة البيانات أصلاً findByIdAndUpdate دالة.",
      "يجب إضافة الخيار { new: true } كمعامل ثالث للدالة لكي ترجع النسخة المحدثة بدلاً من الأصلية.",
      "وظائفية حصراً callback ويجب استخدام then لا يجوز استخدام.",
      "بدلاً من findByIdAndUpdate يجب استخدام دالة updateOne."
    ],
    correctAnswerIndex: 1,
    explanation: "السلوك الافتراضي لدالة findByIdAndUpdate في Mongoose هو إرجاع المستند بوضعه \"قبل\" التحديث. للحصول على المستند بالبيانات الجديدة، يجب تمرير الخيار `{ new: true }`."
  },
  {
    id: "l5_q17",
    questionText: "المطور وضع معالج الأخطاء المخصص (Error Handler) في المكان الخاطئ مما أدى إلى عدم استدعائه أبداً. أين يجب أن يوضع؟\n\nconst app = express();\napp.use(errorHandler); // تم وضعه هنا\napp.use(express.json());\napp.post('/api/notes', (req, res, next) => { ... });",
    options: [
      "app قبل تعريف المتغير.",
      "في التطبيق ليلتقط جميع الطلبات Middleware يجب أن يوضع كأول.",
      "يجب أن يوضع في النهاية تماماً (بعد تعريف كل مسارات API والوسائط الأخرى).",
      "مباشرة app.post يجب تمريره كمعامل ثاني داخل دالة."
    ],
    correctAnswerIndex: 2,
    explanation: "معالج الأخطاء المركزي (Error Handling Middleware) يجب أن يكون هو آخر وسيط يُعرف في تطبيق Express لكي يتمكن من التقاط الأخطاء المحولة إليه من المسارات السابقة باستخدام `next(error)`."
  },
  {
    id: "l5_q18",
    questionText: "المكون الآتي يواجه مشكلة في معالجة الأخطاء، عندما يحدث خطأ في قاعدة البيانات يعلق الطلب (Timeout) ولا يتم إرسال الاستجابة. لماذا؟\n\napp.post('/api/notes', (request, response) => {\n  const note = new Note({ content: request.body.content });\n  note.save()\n    .then(savedNote => response.status(201).json(savedNote))\n    .catch(error => console.log(error));\n});",
    options: [
      "Promise غير متزامنة ولا ترجع save() دالة.",
      "أو إرسال next(error) تم طباعة الخطأ فقط دون تمريره لمعالج الأخطاء باستخدام catch في قسم استجابة للعميل.",
      "يجب استخدام 200 لا يجوز استخدام response.status(201).",
      "لمنع انهيار الخادم event.preventDefault() لم يتم استدعاء."
    ],
    correctAnswerIndex: 1,
    explanation: "في كتلة catch، تم الاكتفاء بطباعة الخطأ بالكونسول، وهذا لا يغلق الطلب ولا يرسل رد للعميل، مما يجعل الطلب معلقاً (Hanging) في المتصفح. كان يجب استخدام `next(error)`."
  },
  {
    id: "l5_q19",
    questionText: "لإكمال عملية تشغيل خادم الواجهة الأمامية ليتم تقديمه عبر Express كملفات ثابتة، نستخدم الكلمة:\n\napp.use(express._______('dist'));",
    options: [
      "file",
      "send",
      "serve",
      "static"
    ],
    correctAnswerIndex: 3,
    explanation: "الدالة `express.static()` هي الوسيط المدمج في Express المخصص لتقديم الملفات الثابتة (Static Files) مثل الصور وملفات HTML/JS الجاهزة."
  },
  {
    id: "l5_q20",
    questionText: "لتعريف مخطط بيانات (Schema) في Mongoose، ماذا نكتب في الفراغ؟\n\nconst noteSchema = new mongoose._______({\n  content: String,\n  important: Boolean\n});",
    options: [
      "Model",
      "Schema",
      "Table",
      "Document"
    ],
    correctAnswerIndex: 1,
    explanation: "لتريف هيكل وقواعد البيانات لمجموعة في MongoDB نستخدم الباني `mongoose.Schema`."
  },
  {
    id: "l5_q21",
    questionText: "لإضافة قاعدة التحقق (Validation) التي تجبر المستخدم على ألا يقل النص عن 5 أحرف مع وضع رسالة مخصصة للخطأ:\n\ncontent: {\n  type: String,\n  _______: [5, 'المحتوى يجب أن يكون 5 أحرف على الأقل']\n}",
    options: [
      "min",
      "minlength",
      "length",
      "minSize"
    ],
    correctAnswerIndex: 1,
    explanation: "في Mongoose، خيار التحقق من الحد الأدنى لطول السلسلة النصية يسمى `minlength`. (بينما `min` يُستخدم للحد الأدنى للقيم الرقمية)."
  },
  {
    id: "l5_q22",
    questionText: "دالة Middleware المخصصة لمعالجة الأخطاء يجب أن تقبل 4 معاملات برمجية لكي يتعرف عليها Express كمعالج أخطاء. أكمل الناقص:\n\nconst errorHandler = (_______, request, response, next) => {\n  console.error(error.message);\n  next(error);\n}",
    options: [
      "app",
      "error",
      "errCode",
      "payload"
    ],
    correctAnswerIndex: 1,
    explanation: "يتميز الـ Middleware الخاص بمعالجة الأخطاء عن غيره في Express بامتلاكه 4 بارامترات؛ الأول منها هو دائماً كائن الخطأ `error`."
  },
  {
    id: "l5_q23",
    questionText: "للبحث عن ملاحظة واحدة فقط باستخدام المعرف الخاص بها (ID) في Mongoose، نستخدم الدالة:\n\nNote._______(request.params.id)\n  .then(note => { ... })",
    options: [
      "findOneById",
      "findById",
      "getById",
      "queryId"
    ],
    correctAnswerIndex: 1,
    explanation: "دالة `findById` هي طريقة مساعدة يوفرها Mongoose خصيصاً للبحث باستخدام المعرف الرئيسي للمستند `_id` بمرونة."
  },
  {
    id: "l5_q24",
    questionText: "لإضافة قاعدة ESLint في ملف eslint.config.js تُجبر المبرمجين على استخدام التطابق الصارم (===) بدلاً من (==) ونعطيه خطأً، ماذا نكتب في مفتاح القاعدة؟\n\nrules: {\n  '_______': 'error'\n}",
    options: [
      "eqeqeq",
      "strict",
      "no-coercion",
      "eqeqeq"
    ],
    correctAnswerIndex: 0,
    explanation: "اسم القاعدة في ESLint المسؤولة عن منع استخدام (==) وفرض استخدام التكافؤ الصارم (===) تسمى `eqeqeq`."
  },
  {
    id: "l5_q25",
    questionText: "في معالج الأخطاء المركزي (Error Handler Middleware)، ما هو رمز حالة HTTP (Status Code) والخرج الذي سَيُرسل للمستخدم في حال ورود خطأ من نوع 'CastError' (معرف ID بصيغة خاطئة لـ MongoDB) بناءً على هذا الكود؟\n\nif (error.name === 'CastError') {\n  return response.status(400).send({ error: 'معرف غير صالح' });\n}",
    options: [
      "Status: 500, Body: { error: 'معرف غير صالح' }",
      "Status: 404, Body: Not Found",
      "Status: 400, Body: { error: 'معرف غير صالح' }",
      "الكود لن يرسل استجابة وسيمرر الخطأ للدالة next()."
    ],
    correctAnswerIndex: 2,
    explanation: "الكود يقوم بالتحقق من نوع الخطأ CastError، ثم يُرجع استجابة واضحة وصريحة بكود الحالة 400 Bad Request وجسم يحتوي النص \"معرف غير صالح\"."
  },
  {
    id: "l5_q26",
    questionText: "ماذا سيكون خرج عملية الجبر العلائقي σ(age > 20) (Students) المقابلة لجملة SQL؟\n\nSELECT * FROM Students WHERE age > 20;",
    options: [
      "سيُعيد جميع أعمدة الجدول لكن فقط للصفوف التي يملك فيها الطالب عمراً أكبر من 20.",
      "فقط لجميع الطلاب (age) سيُعيد عمود العمر.",
      "سيحذف جميع الطلاب الذين أعمارهم أكبر من 20.",
      "الذين تتجاوز أعمارهم 20 (Count) سيُعيد عدد الطلاب."
    ],
    correctAnswerIndex: 0,
    explanation: "في الجبر العلائقي، العملية سيجما σ تعبر عن \"الاشتراط/الاختيار Selection\"، ووظيفتها هي تصفية الـ Rows/Tuples استناداً إلى شرط، بحيث تُبقي فقط من يحققون هذا الشرط."
  },
  {
    id: "l5_q27",
    questionText: "في حال قمت بطلب مسار موجود في Express ولكن حدث خطأ تحقق من البيانات (ValidationError) ووصلنا لهذا الشرط في Middleware:\n\nif (error.name === 'ValidationError') {\n  return response.status(400).json({ error: error.message });\n}",
    options: [
      "برمجياً Node.js سيتم إعادة تشغيل تطبيق.",
      "سيستلم العميل رد JSON برمز 400 يحتوي رسالة تفصيلية عن سبب فشل التحقق.",
      "سيستلم العميل الرمز 404 بسبب عدم وجود المسار.",
      "بتصحيح البيانات تلقائياً وحفظها بدون أخطاء Mongoose سيقوم."
    ],
    correctAnswerIndex: 1,
    explanation: "هذا هو السلوك النموذجي لمعالج الأخطاء؛ سيمسك خطأ الـ ValidationError الوارد من Mongoose ويحوله لرد سليم يحمل التفاصيل مع الرمز 400 الذي يوضح خطأ في مدخلات العميل."
  },
  {
    id: "l5_q28",
    questionText: "إذا تم تنفيذ أمر البناء الخاص بـ React (npm run build) في بيئة الإنتاج، ماذا سينتج بشكل فعلي في مجلد المشروع؟",
    options: [
      "على المنفذ 5173 سيقوم ببدء خادم التطوير السريع Vite.",
      "جاهزة للاستضافة على خادم خلفي (HTML, CSS, JS) يحتوي على ملفات ثابتة مُحسّنة ('dist' غالباً) سينشئ مجلداً يُدعى.",
      "في السحابة سيقوم بتهيئة وإعداد قاعدة بيانات MongoDB.",
      "تلقائياً Fly.io الخاصة بالنشر على بيئة Docker سيقوم بتوليد ملفات."
    ],
    correctAnswerIndex: 1,
    explanation: "أمر `npm run build` في تطبيقات الواجهة الأمامية مثل React يُجمّع ويضغط كافة أكواد المصدر والأصول وينتج مجلداً مضغوطاً dist جاهزاً لرفعه للخادم الحقيقي كملفات ثابتة."
  },
  {
    id: "l5_q29",
    questionText: "بناءً على نظرية CAP، إذا استخدمت MongoDB في الوضع الصارم (Strict Mode)، فإنك تختار نظام CP (اتساق وتحمل التقسيم). في حال انقطاع الشبكة (P)، كيف سيتصرف الخادم تجاه طلب العميل؟",
    options: [
      "سيجيب الخادم بيانات قديمة من أقرب عقدة (Prioritizing Availability).",
      "الخادم سيرفض الطلبات (أو يغلقها) حتى يعود الاتصال بين العقد لضمان اتساق البيانات المطلق (Prioritizing Consistency).",
      "الخادم سيقوم بدمج البيانات تلقائياً باستخدام خوارزميات الذكاء الاصطناعي.",
      "سيجاهل الخادم حدوث انقطاع الشبكة تماماً."
    ],
    correctAnswerIndex: 1,
    explanation: "نظام CP كما هو الحال في الوضع الصارم لـ MongoDB يعطي الأولوية لـ \"الاتساق/Consistency\" على حساب \"التوافرية/Availability\". عند انقطاع الشبكة، الخادم سيمنع الطلبات ويضحي بالتوفر للحفاظ على دقة وتطابق البيانات."
  },
  {
    id: "l5_q30",
    questionText: "ماذا تفعل الدالة findByIdAndDelete() إذا لم تعثر على مستند (Document) يتطابق مع المعرف المطلوب؟\n\nNote.findByIdAndDelete(request.params.id)\n  .then(result => console.log(result));",
    options: [
      "ترمي خطأ استثناء يوقف عمل البرنامج مباشرة.",
      "ترجع كائناً يحتوي على القيمة null وتُمرر لـ then بصيغة null.",
      "تقوم بإنشاء مستند جديد فارغ وتمريره.",
      "تدخل في حلقة لا نهائية للبحث في قاعدة البيانات."
    ],
    correctAnswerIndex: 1,
    explanation: "الدوال الأساسية في Mongoose مثل `findByIdAndDelete` ترجع `null` في حال لم تجد المستند المطابق للشروط في قاعدة البيانات، ولا تُلقي خطأ استثناء Exception."
  }
];
