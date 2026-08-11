import { Question } from '../types';

export const lecture6Questions: Question[] = [
  {
    id: "l6_q1",
    questionText: "في هرم الاختبارات (Testing Pyramid)، لماذا يُنصح بأن تكون اختبارات الوحدة (Unit Tests) هي القاعدة الأعرض والأكثر عدداً؟",
    options: [
      "لأنها تختبر النظام بالكامل من منظور المستخدم النهائي مما يضمن الموثوقية التامة.",
      "لأنها بطيئة جداً ومكلفة فمن الأفضل كتابتها مرة واحدة فقط للوحدات الرئيسية.",
      "لأنها سريعة، رخيصة التنفيذ، وتُحدد مكان الخطأ بدقة في دالة أو مكون منزعل.",
      "لأنها تتصل بقاعدة البيانات الحقيقية وتفحص جميع بيانات العملاء."
    ],
    correctAnswerIndex: 2,
    explanation: "في هرم الاختبارات، تشكل Unit Tests القاعدة لأنها سريعة جداً في التنفيذ، منخفضة التكلفة، وتحدد موقع الخلل بدقة داخل دالة أو وحدة معزولة دون الاعتماد على موارد خارجية."
  },
  {
    id: "l6_q2",
    questionText: "في منهجية التطوير الموجه بالاختبار (TDD)، ما هو الترتيب الصحيح لدورة حياة التطوير؟",
    options: [
      "إعادة الهيكلة -> كتابة اختبار يفشل -> كتابة كود ينجح.",
      "كتابة كود ينجح -> كتابة اختبار يفشل -> إعادة الهيكلة.",
      "كتابة اختبار ينجح -> إعادة الهيكلة -> كتابة كود يفشل.",
      "كتابة اختبار يفشل (أحمر) -> كتابة أقل كود ينجح (أخضر) -> إعادة الهيكلة (تحسين)."
    ],
    correctAnswerIndex: 3,
    explanation: "دورة TDD الصارمة (Red-Green-Refactor) تبدأ بكتابة اختبار يفشل (أحمر)، ثم كتابة كود بسيط لتمرير الاختبار (أخضر)، ثم تحسين الكود المكتوب دون كسر الاختبارات (إعادة هيكلة)."
  },
  {
    id: "l6_q3",
    questionText: "ضمن مبادئ FIRST لكتابة اختبارات جيدة، ماذا يعبر الحرف R (Repeatable)؟",
    options: [
      "أن يكون الاختبار قابلاً للنسخ واللصق في ملفات أخرى.",
      "دون الاعتماد على حالة خارجية متغيرة، يجب أن يعطي الاختبار نفس النتيجة دائماً في أي بيئة (تطوير، خادم، أو CI/CD).",
      "أن يُعاد تشغيل الاختبار تلقائياً مرات متعددة لاكتشاف تسريب الذاكرة.",
      "أن يتمكن الاختبار من قراءة قواعد بيانات متعددة."
    ],
    correctAnswerIndex: 1,
    explanation: "حرف R يرمز لـ Repeatable؛ أي يجب أن تنجح الاختبارات سواء شُغلت على حاسوب المطور، أو الخادم، أو CI/CD بنفس النتيجة تماماً وبدون الاعتماد على قواعد بيانات خارجية غير متوقعة."
  },
  {
    id: "l6_q4",
    questionText: "أي من خوارزميات التشفير أو التجزئة التالية يعتبر \"الأسوأ والأضعف\" لتخزين كلمات المرور بسبب سرعتها العالية جداً ووجود تصادمات معروفة له؟",
    options: [
      "bcrypt",
      "MD5",
      "Argon2",
      "RSA"
    ],
    correctAnswerIndex: 1,
    explanation: "خوارزمية MD5 قديمة وسريعة جداً، مما يجعلها عرضة لهجمات القوة الغاشمة. ولها تصادمات معروفة رياضياً، ولا تصلح إطلاقاً لتخزين كلمات المرور المعاصرة."
  },
  {
    id: "l6_q5",
    questionText: "لماذا لا يُنصح باستخدام خوارزمية SHA-256 لتجزئة (Hashing) كلمات المرور رغم أنها آمنة للبيانات الأخرى؟",
    options: [
      "لأنها لا تدعم التشفير باتجاه واحد.",
      "لأنها خوارزمية قديمة جداً ولم تعد مدعومة في مكتبات Node.js.",
      "لأنها مصممة لتكون سريعة جداً، مما يسمح للمهاجمين بتجربة ملايين كلمات المرور في الثانية باستخدام كروت الشاشة والقوة الغاشمة.",
      "لأنها تتطلب إدخال مفتاح سري لا يمكن تخزينه في قاعدة البيانات."
    ],
    correctAnswerIndex: 2,
    explanation: "دوال التجزئة العامة مثل SHA-256 صُممت للسرعة الفائقة لسلامة الملفات، لكن هذه السرعة هي عيب عند حفظ كلمات المرور لأنها تسمح للمخترق باستخدام كروت الشاشة لتخمين ملايين الكلمات. يجب استخدام دوال مبطأة عمداً كـ bcrypt."
  },
  {
    id: "l6_q6",
    questionText: "ما هي التقنية التي تحمي كلمات المرور المجزأة من هجمات \"جداول قوس قزح\" (Rainbow Tables) عن طريق إضافة سلسلة عشوائية لكل كلمة مرور قبل التجزئة؟",
    options: [
      "Cost Factor",
      "JSON Web Token",
      "Rate Limiting",
      "Salt"
    ],
    correctAnswerIndex: 3,
    explanation: "الـ Salt (الملح) هو سلسلة عشوائية فريدة تُدمج مع كل كلمة مرور قبل تجزئتها، مما يجعل جداول الاختراق المحسوبة مسبقاً (Rainbow Tables) عديمة الفائدة."
  },
  {
    id: "l6_q7",
    questionText: "ما هو الفرق الأساسي بين المصادقة (Authentication) والتفويض (Authorization)؟",
    options: [
      "المصادقة تسأل \"ماذا سُمح لك بفعله؟\" والتفويض يسأل \"من أنت؟\".",
      "المصادقة هي عملية التحقق من الهوية \"من أنت؟\"، في حين أن التفويض هو عملية تحديد الصلاحيات والموارد التي يمكن الوصول إليها \"ماذا يحق لك؟\".",
      "المصادقة تتم عبر Sessions بينما التفويض يتم عبر JWT.",
      "لا يوجد فرق، هما مصطلحان يعبران عن نفس التقنية."
    ],
    correctAnswerIndex: 1,
    explanation: "المصادقة (Authentication) هي عملية التحقق من الهوية \"من أنت؟\"، في حين أن التفويض (Authorization) هو عملية تحديد الصلاحيات والموارد التي يمكن الوصول إليها \"ماذا يحق لك؟\"."
  },
  {
    id: "l6_q8",
    questionText: "أي جزء من بنية الرمز (JWT) يستخدمه الخادم لضمان عدم التلاعب بالبيانات (Claims) من قبل المستخدم؟",
    options: [
      "Header",
      "Payload",
      "Signature",
      "Bearer"
    ],
    correctAnswerIndex: 2,
    explanation: "التوقيع (Signature) هو الجزء الثالث في JWT والذي يتم توليده عبر تشفير الـ Header والـ Payload مع مفتاح سري لا يعرفه إلا الخادم. إذا تلاعب المستخدم بالـ Payload، سيفشل التوقيع بالخادم."
  },
  {
    id: "l6_q9",
    questionText: "وفقاً لنظرية الموثوقية (Reliability Theory)، ما هو المقياس الذي يعبر عن \"متوسط الوقت اللازم لإصلاح النظام واستعادته للعمل بعد حدوث عطل\"؟",
    options: [
      "MTBF",
      "MTTR",
      "SLA",
      "Availability"
    ],
    correctAnswerIndex: 1,
    explanation: "مقياس MTTR (Mean Time To Recovery) يعبر عن متوسط الوقت اللازم لإصلاح النظام واستعادته للعمل بعد حدوث عطل."
  },
  {
    id: "l6_q10",
    questionText: "يعتبر نظام المصادقة المبني على الجلسات (Session-Based) حالة (Stateful)، ما هو العيب الأساسي لذلك مقارنة بالرموز (Token-Based)؟",
    options: [
      "لا يمكنه العمل على المتصفحات الحديثة بسبب سياسات CORS.",
      "يسهل اختراقه باستخدام هجمات Brute Force فقط.",
      "لأنه يتطلب من الخادم حفظ حالة الجلسة لكل مستخدم في الذاكرة أو قاعدة البيانات، مما يجعل التوسع (Scaling) عبر عدة خوادم معقداً.",
      "لا يمكن إلغاء صلاحية المستخدم فوراً وتسجيل خروجه في أي وقت."
    ],
    correctAnswerIndex: 2,
    explanation: "لأن نظام الجلسات Stateful، يجب على الخادم تذكر كل جلسة نشطة. عندما ينمو التطبيق لإضافة خوادم أخرى، يصبح مشاركة بيانات الجلسات بين الخوادم معقداً مقارنة بـ Stateless JWT."
  },
  {
    id: "l5_q11_dup",
    questionText: "ما هي الميزة التي تعبر عن مفهوم \"تأثير الانهيار\" (Avalanche Effect) في دوال التجزئة الجيدة؟",
    options: [
      "أن تغيير بت واحد في المدخل يؤدي إلى تغيير المخرج بالكامل تقريباً (تغيير شبه جذري وكامل في التجزئة).",
      "أن الدالة تتوقف عن العمل تماماً إذا استقبلت مدخلاً غير متوقع.",
      "أن الدالة تقسم البيانات إلى أجزاء صغيرة ليتم معالجتها بالتوازي.",
      "أن نفس المدخل يعطي مخرجات مختلفة في كل مرة لزيادة الأمان."
    ],
    correctAnswerIndex: 0,
    explanation: "تأثير الانهيار (Avalanche Effect) في التشفير يعني أن أي تعديل طفيف جداً في المدخل (مثل تغيير حرف واحد) سيؤدي إلى تغيير شبه جذري وكامل في المخرج (التجزئة)."
  },
  {
    id: "l6_q12",
    questionText: "إذا كانت توافرية الخادم (Availability) تُقاس بمستوى \"خمس تسعات\" (99.999%)، فكم يبلغ متوسط وقت التوقف (Downtime) المسموح به في السنة تقريباً؟",
    options: [
      "3.65 أيام",
      "8.77 ساعات",
      "52.6 دقائق",
      "5.26 دقائق"
    ],
    correctAnswerIndex: 3,
    explanation: "مستوى الخمس تسعات (99.999%) يعتبر من أعلى مستويات التوافرية، ويعني أن النظام قد يكون خارج الخدمة لمدة تصل إلى 5.26 دقائق تقريباً فقط على مدار عام كامل."
  },
  {
    id: "l6_q13",
    questionText: "الكود التالي هو إعداد لإرجاع كائن المستخدم من قاعدة بيانات MongoDB. هناك خطأ أمني كارثي، ما هو؟\n\nuserSchema.set('toJSON', {\n  transform: (document, returnedObject) => {\n    returnedObject.id = returnedObject._id.toString();\n    delete returnedObject._id;\n    delete returnedObject.__v;\n  }\n});",
    options: [
      "على المتغير _id لا يجوز استخدام toString().",
      "يجب إرجاع الكائن باستخدام return.",
      "مما سيسرب كلمة المرور المشفرة للعميل delete returnedObject.passwordHash يفتقد الكود لسطر.",
      "الكود صحيح تماماً ولا يشكل أي ثغرة أمنية."
    ],
    correctAnswerIndex: 2,
    explanation: "في تطبيقات الواجهة الخلفية، يجب حذف أي معلومات أمنية حساسه قبل إرسال الكائنات للواجهة عبر الشبكة. عدم حذف `returnedObject.passwordHash` سيجعل التجزئة السرية مرئية للعميل."
  },
  {
    id: "l6_q14",
    questionText: "يحاول المطور حفظ كلمة مرور جديدة باستخدام bcrypt لكن العملية تفشل وترجع خطأً، أين الخطأ البرمجي في استخدام المكتبة؟\n\nusersRouter.post('/', async (req, res) => {\n  const { username, password } = req.body;\n  const passwordHash = bcrypt.hash(password, 10);\n  const user = new User({ username, passwordHash });\n  await user.save();\n});",
    options: [
      "الرقم 10 غير مسموح، يجب استخدام نصوص فقط كعامل تكلفة.",
      "خوارزمية bcrypt صُممت لتكون ثقيلة حسابياً، فإذا استدعيت كدالة متزامنة ستجمد خيط الـ Node.js، لذا يجب استخدامها مع await لكي لا تتوقف الطلبات الأخرى في التطبيق.",
      "لا يجوز استخدام المتغير username لإنشاء الكائن بدون تعريف تفصيلي.",
      "حصراً jwt.hash تم استبدالها ويجب استخدام مكتبة."
    ],
    correctAnswerIndex: 1,
    explanation: "خوارزمية bcrypt صُممت لتكون ثقيلة حسابياً. فإذا استدعيت كدالة متزامنة ستجمد خيط الـ Node.js، لذا يجب استدعاؤها مع `await` لكي لا تتوقف الطلبات الأخرى في التطبيق."
  },
  {
    id: "l6_q15",
    questionText: "يشتكي المطور أن الخادم يعيد خطأ مصادقة دائم (Unauthorized) رغم إرساله الرمز الصحيح في ترويسة الطلب `Authorization`. ما هو الخطأ في خوارزمية فحص الرمز؟\n\nconst authorization = request.get('authorization');\nif (authorization && authorization.startsWith('Bearer')) {\n  const token = authorization;\n  const decodedToken = jwt.verify(token, process.env.SECRET);\n}",
    options: [
      "يجب تحويل المتغير SECRET إلى رقم مع jwt.verify.",
      "المتغير authorization لا يستخرج الترويسة الصحيحة.",
      "يُرسل المتصفح الرمز كالتالي `Bearer eyJ...`. إذا قمنا بتمريره لـ jwt.verify مع كلمة Bearer سيعتبره رمزاً فاسداً، يجب إزالة البادئة قبل تمريره باستخدام replace.",
      "يجب استخدام jwt.decode بدلاً من jwt.verify."
    ],
    correctAnswerIndex: 2,
    explanation: "يُرسل المتصفح الرمز كالتالي `Bearer eyJ...`. إذا قمنا بتمريره لـ jwt.verify مع كلمة Bearer سيعتبره رمزاً فاسداً، يجب إزالة البادئة قبل تمريره باستخدام `replace('Bearer ', '')`."
  },
  {
    id: "l6_q16",
    questionText: "عند تنفيذ اختبار وحدة (Unit Test) باستخدام Vitest، يعطي الاختبار دائماً حالة \"ناجح\" (Pass) حتى لو كانت النتيجة خاطئة. أين الخطأ؟\n\ntest('متوسط مصفوفة فارغة', () => {\n  const result = average([]);\n  result === 0;\n});",
    options: [
      "لكل حالة describe غير صالحة، يجب استخدام test الدالة.",
      "في أطر الاختبار مثل Vitest أو Jest، كتابة تعبير منطقي مثل `result === 0` لا يُخبر محرك الاختبارات بالتحقق من النتيجة. يجب استخدام دوال التوكيد `expect(...).toBe(...)` حصراً لرمي خطأ عند الفشل.",
      "لا يجوز تمرير مصفوفة فارغة كمعامل لاختبارات الوحدة.",
      "في نهاية الاختبار return result ينقص استدعاء."
    ],
    correctAnswerIndex: 1,
    explanation: "في أطر الاختبار مثل Vitest أو Jest، كتابة تعبير منطقي مثل `result === 0` لا يُخبر محرك الاختبارات بالتحقق من النتيجة. يجب استخدام دوال التوكيد `expect(...).toBe(...)` حصراً لرمي خطأ عند الفشل."
  },
  {
    id: "l6_q17",
    questionText: "في كود اختبار التكامل (Integration Test) التالي، يواجه المطور مشكلة أن بيانات قاعدة البيانات تتداخل بين الاختبارات وتفشل. ما هو الحل؟\n\nconst initialNotes = [{ content: 'ملاحظة 1' }, { content: 'ملاحظة 2' }];\nbeforeEach(() => {\n  Note.deleteMany({});\n  initialNotes.forEach(note => new Note(note).save());\n});",
    options: [
      "let وليس const initialNotes ليكون يجب تغيير.",
      "beforeEach بدلاً من afterEach يجب استخدام.",
      "عمليات الحفظ والإضافة لقاعدة بيانات Mongoose تعيد وعوداً (Promises) وتنفذ بشكل غير متزامن. عدم استخدام async/await يؤدي لتنفيذ الاختبارات قبل أن تكتمل عملية تفريغ وإعادة تعبئة قاعدة البيانات، مما يسبب `beforeEach` في خطاف تداخلًا.",
      "لا تعمل في بيئة الاختبارات deleteMany الدالة."
    ],
    correctAnswerIndex: 2,
    explanation: "عمليات الحفظ والإضافة لقاعدة بيانات Mongoose تعيد وعوداً (Promises) وتنفذ بشكل غير متزامن. عدم استخدام `async/await` تؤدي لتنفيذ الاختبارات قبل أن تكتمل عملية تفريغ وإعادة تعبئة قاعدة البيانات، مما يسبب تداخلاً."
  },
  {
    id: "l6_q18",
    questionText: "يحاول المطور استخراج بيانات المستخدم المالك لكل ملاحظة باستخدام الدالة `populate` في Mongoose، لكن الخرج يعطي المعرفات (IDs) فقط دون التفاصيل. ما هو سبب ذلك؟\n\n// ملف models/note.js\nconst noteSchema = new mongoose.Schema({\n  content: String,\n  user: { type: String }\n});\n// الاستعلام\nNote.find({}).populate('user');",
    options: [
      "حصراً exec() تُنفذ بعد populate الدالة.",
      "لكي تعمل دالة `populate` السحرية في Mongoose وتربط البيانات بجلب مستندات مجموعة أخرى، يجب أن يكون نوع الحقل `mongoose.Schema.Types.ObjectId` وأن يشير للموذج المطلوب عبر خاصية `ref`.",
      "فقط findById() بل مع populate لا يجوز استخدام الدالة find({}) مع.",
      "لإزالة التشفير عن البيانات populate يجب تمرير كلمة المرور كمعامل ثاني داخل دالة."
    ],
    correctAnswerIndex: 1,
    explanation: "لكي تعمل دالة `populate` السحرية في Mongoose وتربط البيانات بجلب مستندات مجموعة أخرى، يجب أن يكون نوع الحقل `mongoose.Schema.Types.ObjectId` وأن يشير للموذج المطلوب عبر خاصية `ref`."
  },
  {
    id: "l6_q19",
    questionText: "في ملف `utils/config.js`، يتم استخراج مسار قاعدة البيانات المناسب لبيئة الاختبارات بدلاً من الإنتاج لكي لا نفسد البيانات الحقيقية. أكمل الكود:\n\nconst MONGODB_URI = process.env._______ === 'test'\n  ? process.env.TEST_MONGODB_URI\n  : process.env.MONGODB_URI;",
    options: [
      "SYSTEM_ENV",
      "TEST_MODE",
      "NODE_ENV",
      "APP_STATE"
    ],
    correctAnswerIndex: 2,
    explanation: "بيئة تشغيل Node.js القياسية تقوم بتخزين حالة ونوع البيئة التي يتم التنفيذ عليها (development, production, test) في المتغير العالمي `process.env.NODE_ENV`."
  },
  {
    id: "l6_q20",
    questionText: "لتوليد رمز JWT مشفر يثبت هوية المستخدم، باستخدام الكائن userForToken والمفتاح السري، نستخدم الدالة:\n\nconst token = jwt._______(userForToken, process.env.SECRET, { expiresIn: '1h' });",
    options: [
      "encrypt",
      "verify",
      "sign",
      "hash"
    ],
    correctAnswerIndex: 2,
    explanation: "مكتبة `jsonwebtoken` توفر الدالة `jwt.sign()` لإعادة وإنشاء وتوقيع الرموز (Tokens) التي تحمل خصائص المستخدم وصلاحياته بضمان السكرت (SECRET)."
  },
  {
    id: "l6_q21",
    questionText: "للتحقق من كلمة المرور المدخلة من المستخدم (أثناء تسجيل الدخول) ومطابقتها مع التجزئة المحفوظة في قاعدة البيانات، نستخدم الدالة:\n\nconst passwordCorrect = await bcrypt._______(password, user.passwordHash);",
    options: [
      "match",
      "verify",
      "check",
      "compare"
    ],
    correctAnswerIndex: 3,
    explanation: "لأننا لا نستطيع فك تشفير bcrypt واستخراج الباسورد، نستخدم دالة `bcrypt.compare()` التي تقوم بحساب تجزئة الكلمة المدخلة ومقارنتها بشكل آمن مع التجزئة المحفوظة."
  },
  {
    id: "l6_q22",
    questionText: "لإعداد أداة `supertest` لاختبار الخادم وطلبات HTTP الوهمية (بدون فتح منفذ فعلي)، نمرر تطبيق Express إلى الدالة كالتالي:\n\nconst supertest = require('supertest');\nconst app = require('../app');\nconst api = _______(app);",
    options: [
      "supertest",
      "mount",
      "createServer",
      "init"
    ],
    correctAnswerIndex: 0,
    explanation: "أداة `supertest` توفر طريقة أنيقة لاختبار مسارات Express دون الحاجة لبدء استماع فعلي على منفذ الشبكة، من خلال تغليف كائن الـ app هكذا: `supertest(app)`."
  },
  {
    id: "l6_q23",
    questionText: "للتحقق من أن استجابة خادم الـ API عبر أداة `supertest` تعيد البيانات بصيغة JSON، ماذا نكتب في دالة التوقع expect؟\n\nawait api.get('/api/notes')\n  .expect(200)\n  .expect('_______', /application\\/json/);",
    options: [
      "Content-Encoding",
      "Content-Type",
      "Response-Format",
      "Accept-Type"
    ],
    correctAnswerIndex: 1,
    explanation: "في بروتوكول HTTP، الترويسة المسؤولة عن إعلام العميل بنوع وتنسيق البيانات المرسلة هي `Content-Type`. في حالة واجهات REST، يجب أن تكون `application/json`."
  },
  {
    id: "l6_q24",
    questionText: "لإضافة علاقة عكسية، بحيث يحفظ كائن \"المستخدم\" مصفوفة من الملاحظات المرتبطة به في Mongoose، نُكمل تعريف الـ Schema كالتالي:\n\nnotes: [\n  {\n    type: mongoose.Schema.Types._______,\n    ref: 'Note'\n  }\n]",
    options: [
      "Array",
      "ObjectReference",
      "ObjectId",
      "ForeignId"
    ],
    correctAnswerIndex: 2,
    explanation: "في Mongoose، يشير `mongoose.Schema.Types.ObjectId` إلى معرف المستند الأساسي لكيان آخر، وهو المفتاح لتفعيل العلاقات والتضمين المتقدم (`populate`)."
  },
  {
    id: "l6_q25",
    questionText: "ماذا سيرجع الكود التالي الذي يتعامل مع خوارزمية bcrypt عند تسجيل الدخول بمعلومات خاطئة؟\n\n// المدخل: password = 'wrong_password'\n// محفوظات: user.passwordHash = '$2b$10$...' (الكلمة الصحيحة)\nconst passwordCorrect = await bcrypt.compare(password, user.passwordHash);\nconsole.log(passwordCorrect);",
    options: [
      "Boolean كنوع منطقي false سيطبع القيمة.",
      "Exception سيرمي خطأ استثناء يوقف البرنامج.",
      "null سيطبع القيمة.",
      "undefined سيطبع."
    ],
    correctAnswerIndex: 0,
    explanation: "دالة `bcrypt.compare` تقوم بمهام المقارنة الآمنة بأناقة وتُرجع القيمة المنطقية (Boolean) `false` إذا كانت كلمة المرور غير متطابقة، دون أن تتوقف أو ترمي Exception."
  },
  {
    id: "l6_q26",
    questionText: "في حال حاول مستخدم إنشاء ملاحظة عبر نقطة الوصول (Endpoint) المحمية، ولم يقم بإرسال الرمز (Token) في الترويسة، ما هو رمز الاستجابة الذي ستُعيده الدالة؟\n\nif (!request.user) {\n  return response.status(401).json({ error: 'الرمز مفقود أو غير صالح' });\n}",
    options: [
      "403 Forbidden",
      "400 Bad Request",
      "401 Unauthorized",
      "500 Internal Server Error"
    ],
    correctAnswerIndex: 2,
    explanation: "رمز الحالة 401 (Unauthorized) هو الاستجابة القياسية في REST APIs لمنع وصول المستخدم لمسار محمي بسبب عدم إرفاقه لرمز مصادقة سليم أو انتهاء صلاحيته."
  },
  {
    id: "l6_q27",
    questionText: "ماذا نتوقع أن يكون طول (length) الاستجابة في اختبار التكامل التالي الذي ينفذ عبر supertest؟\n\nconst initialNotes = [{ content: 'ملاحظة 1' }, { content: 'ملاحظة 2' }];\n// (بعد إعادة ضبط قاعدة البيانات وخُزنت بـ 2 ملاحظات ثابتة)\nconst response = await api.get('/api/notes');\nexpect(response.body).toHaveLength(____);",
    options: [
      "0",
      "1",
      "2",
      "undefined"
    ],
    correctAnswerIndex: 2,
    explanation: "في هذا الاختبار، تم إعادة ضبط قاعدة البيانات وخُزنت بـ 2 ملاحظات ثابتة. لذلك، عند طلب مسار GET للملاحظات سيكون الخرج مصفوفة بطول 2."
  },
  {
    id: "l6_q28",
    questionText: "إذا تم تنفيذ طلب الحصول على الملاحظات مع الدالة `populate('user', { username: 1, name: 1 })` داخل كائن الملاحظة المرتجع `user` كيف سيكون شكل حقل `user`؟",
    options: [
      "يحتوي معرف المستخدم فقط، مثل: \"5f8d0a...\" سيكون نصاً.",
      "الدالة `populate('user', { username: 1, name: 1 })` تستبدل المعرف المرجعي بكائن تفصيلي للمستخدم يحتوي فقط على الحقول المحمية في الوسيط الثاني (وهنا هما username و name).",
      "تحتوي أسماء جميع المستخدمين (Array) سيكون مصفوفة.",
      "لحماية بيانات المستخدم undefined سيظهر كـ."
    ],
    correctAnswerIndex: 1,
    explanation: "الدالة `populate('user', { username: 1, name: 1 })` تستبدل المعرف المرجعي بكائن تفصيلي للمستخدم يحتوي فقط على الحقول المحمية في الوسيط الثاني (وهنا هما username و name)."
  },
  {
    id: "l6_q29",
    questionText: "في كود استخراج الرمز (JWT Extraction)، إذا تم تمرير ترويسة `Authorization` كالتالي: \"Bearer eyJhbGci...\" ماذا ستكون قيمة المتغير `token` المحسوبة؟\n\nconst token = authorization.replace('Bearer ', '');",
    options: [
      "\"Bearer eyJhbGci...\"",
      "\"Bearer\"",
      "\"eyJhbGci...\" (الرمز المشفر فقط بدون الكلمة)",
      "غير صالحة للنصوص replace خطأ لأن الدالة."
    ],
    correctAnswerIndex: 2,
    explanation: "الـ JWT القياسي لا يشمل كلمة \"Bearer \". استخدام دالة الـ `replace('Bearer ', '')` ينظف النص المرجوع ليستخرج السلسلة المشفرة الصافية بدءاً من `...eyJ`."
  },
  {
    id: "l6_q30",
    questionText: "ما هو نوع البيانات الذي ترجعه خوارزمية التوقيع في JWT في قسم الـ Signature (الجزء الثالث من الرمز) عند بناء الرمز بالـ Secret؟\n\n// بنية JWT = Header.Payload.Signature",
    options: [
      "يحوي تفاصيل المستخدم JSON كائن.",
      "RSA من نوع (Public Key) مفتاح عام.",
      "توقيع الرمز في JWT ما هو إلا خوارزمية (كـ HMACSHA256) تُنفذ على ترميز الـ Header والـ Payload والمفتاح السري لإنتاج سلسلة نصية مشفرة بـ Base64Url لضمان سلامة المحتوى.",
      "ثنائية الأبعاد (Byte Array) مصفوفة بايتات."
    ],
    correctAnswerIndex: 2,
    explanation: "توقيع الرمز في JWT ما هو إلا خوارزمية (كـ HMACSHA256) تُنفذ على ترميز الـ Header والـ Payload والمفتاح السري لإنتاج سلسلة نصية مشفرة بـ Base64Url لضمان سلامة المحتوى."
  }
];
