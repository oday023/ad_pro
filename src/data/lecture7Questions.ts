import { Question } from '../types';

export const lecture7Questions: Question[] = [
  {
    id: "l7_q1",
    questionText: "تصنف لغة الاستعلام GraphQL ضمن أي نموذج من نماذج البيانات التالية؟",
    options: [
      "كالجداول والصفوف (Relational) النموذج العلائقي",
      "XML مثل مستندات (Tree-based) النموذج الشجري",
      "MongoDB كاستعلامات (Document) النموذج المستندي",
      "الذي يعتمد على الأنواع والحقول كعقد وحواف (Graph-based) النموذج الرسومي"
    ],
    correctAnswerIndex: 3,
    explanation: "تصنف GraphQL كلغة استعلام للواجهات المبرمجة وتعتمد على 'النموذج الرسومي' (Graph-based)، حيث تُمثل الأنواع كعقد (Nodes) والخصائص/العلاقات كحواف (Edges)."
  },
  {
    id: "l7_q2",
    questionText: "ما هو الاختلاف الجوهري والأهم بين نمط REST ولغة استعلام GraphQL من ناحية هيكلة الاستجابة (Response)؟",
    options: [
      "يدعم النصوص حصراً GraphQL يدعم استرجاع الصور فقط، بينما REST.",
      "\"العميل\" هو من يحدد بدقة شكل GraphQL الخادم هو من يحدد شكل البيانات المرجعة، بينما في REST. وحجم البيانات التي يريدها.",
      "REST مع كل تحديث للواجهة عكس (v1, v2) تتطلب إصدارات متعددة GraphQL.",
      "تحتاج مساراً لكل جدول GraphQL واحدة لجميع الطلبات، بينما (Endpoint) تستخدم نقطة وصول REST."
    ],
    correctAnswerIndex: 1,
    explanation: "أهم ميزة في GraphQL هي 'تمكين العميل'؛ فالخادم يقدم مخططاً للبيانات المتاحة، والعميل يختار تحديداً الحقول التي يريد إرجاعها ولا يستلم بيانات زائدة أو ناقصة، عكس REST الذي يفرض هيكلاً ثابتاً للاستجابة."
  },
  {
    id: "l7_q3",
    questionText: "ماذا يُقصد بمشكلة \"الجلب المفرط\" (Over-fetching) التي تحدث عادةً في تصميم REST؟",
    options: [
      "منفصلة لجلب بيانات مرتبطة ببعضها HTTP اضطرار العميل لإرسال عدة طلبات.",
      "جلب الخادم لبيانات أكثر بكثير مما تحتاجه واجهة العميل فعلياً واستهلاك النطاق الترددي (Bandwidth) بلا فائدة.",
      "تكرار حفظ نفس البيانات في قاعدة بيانات الواجهة الخلفية.",
      "فشل الخادم بسبب كثرة الطلبات المتزامنة من عميل واحد."
    ],
    correctAnswerIndex: 1,
    explanation: "ظاهرة 'الجلب المفرط' (Over-fetching) تعني أن الواجهة الخلفية تعيد بيانات (حقول متعددة لكائن معين) أكثر بكثير مما تحتاجه الشاشة الحالية في الواجهة الأمامية، مما يُهدر الموارد."
  },
  {
    id: "l7_q4",
    questionText: "وفقاً لنظرية الرسوم البيانية (Graph Theory)، ماذا يُمثل \"DAG (Directed Acyclic Graph)\"؟",
    options: [
      "رسم بياني غير موجه يسمح بالعلاقات الثنائية التبادلية فقط.",
      "واحدة على الأقل (Cycle) رسم بياني هرمي يحتوي على حلقة.",
      "رسم بياني موجه (بأسهم اتجاهية) يخلو تماماً من الدورات/الحلقات، ولا يمكن فيه العودة لنقطة البداية، وهو أساسي لمنع الاعتماد الدائري.",
      "في متصفحات الويب DOM هو مصطلح آخر يطلق على هيكل شجرة."
    ],
    correctAnswerIndex: 2,
    explanation: "الـ DAG هو رسم بياني بأسهم تحدد الاتجاه ولا توجد به أي دورات (مسارات معلقة تعود لبدايتها). يُستخدم لضمان ترتيب التسلسل صحيح (Topological Sort) ومنع الاعتمادات الدائرية القاتلة."
  },
  {
    id: "l7_q5",
    questionText: "في نظام أنواع GraphQL، ماذا تعني إضافة علامة التعجب '!' بعد اسم النوع (مثلاً 'String!')؟",
    options: [
      "أن الحقل مميز ويجب فهرسته في قاعدة البيانات.",
      "مع كائن آخر (Edge) أن الحقل يُشير إلى علاقة.",
      "له 'null' ولا يمكن للخادم أن يُرجع القيمة (Non-Null) أن الحقل إلزامي.",
      "فقط ولا يقرأ Mutation أن الحقل يُستعمل لعمليات الـ."
    ],
    correctAnswerIndex: 2,
    explanation: "إضافة علامة '!' بعد اسم النوع في GraphQL Schema تعني أن هذا الحقل إجباري (Non-Null)، مما يعطي التزاماً أمنياً للعميل بأنه لن يتلقى القيمة (null)."
  },
  {
    id: "l7_q6",
    questionText: "ما هي العمليات الثلاث الأساسية (Root Operations) المتاحة في مواصفات GraphQL؟",
    options: [
      "GET, POST, DELETE",
      "Query, Mutation, Subscription",
      "Fetch, Update, Subscribe",
      "Select, Insert, Listen"
    ],
    correctAnswerIndex: 1,
    explanation: "يُعرّف المخطط الأساسي في GraphQL ثلاث عمليات جذرية: الـ Query (لقراءة وجلب البيانات)، والـ Mutation (لتعديل وكتابة البيانات)، والـ Subscription (للاشتراك في التحديثات الحية)."
  },
  {
    id: "l7_q7",
    questionText: "ما هي وظيفة أداة DataLoader في بيئة خوادم GraphQL؟",
    options: [
      "بشكل تلقائي SQL إلى استعلامات GraphQL تحويل كود.",
      "تحميل البيانات الأولية من العميل إلى قاعدة البيانات دفعة واحدة.",
      "لتقليل (Caching) وتخزينها مؤقتاً (Batching) عن طريق تجميع الاستعلامات المتكررة (N+1) حل مشكلة الحمل على قاعدة البيانات.",
      "JavaScript برمجياً استناداً لملفات (Schema) توليد المخطط."
    ],
    correctAnswerIndex: 2,
    explanation: "أداة DataLoader مصممة خصيصاً لحل مشكلة (N+1 Queries) الشهيرة، حيث تقوم بدمج عدة طلبات متفرقة وجلبها في استعلام قاعدة بيانات واحد (Batching)، وتخزين النتائج المستردة مؤقتاً (Caching)."
  },
  {
    id: "l7_q8",
    questionText: "ما هي الميزة الرئيسية باستخدام التخزين النظير المنسق (Normalized Cache) في Apollo Client مقارنة بتخزين استجابات الاستعلامات كما هي (Document Cache)؟",
    options: [
      "بالخادم لتخفيف العبء Redis يقوم بتخزين البيانات في قاعدة بيانات.",
      "في المتصفح فقط JSON يقوم بتخزين الاستجابات كملفات.",
      "مما يضمن عدم تكرار البيانات وتحديثها فوراً، (ID) مرة واحدة فقط استناداً لمعرفه (Entity) يخزن كل كيان في كل مكونات الواجهة بمجرد تعديلها.",
      "بشكل كامل React في مكونات GraphQL يُلغي الحاجة لكتابة استعلامات."
    ],
    correctAnswerIndex: 2,
    explanation: "التخزين المنسق (Normalized Cache) يقوم بتفكيك الردود وتخزين كل كيان بشكل مستقل برقم تعريفه. هذا يمنع التكرار ويضمن أن تحديث كائن واحد ينعكس تلقائياً على كل أجزاء الواجهة التي تعتمد عليه."
  },
  {
    id: "l7_q9",
    questionText: "من الناحية النظرية ومقارنةً بأفعال HTTP، بماذا تتميز عملية الـ Query في GraphQL؟",
    options: [
      "تُغير من حالة النظام (Side-effects) أنها عملية ذات تأثيرات جانبية.",
      "أنها عملية تُبقي اتصال الخادم مفتوحاً بشكل دائم كالدردشة.",
      "تكرار إرسالها لا يؤدي لتغيير حالة البيانات في الخادم (Idempotent) أنها عملية متساوية القوة.",
      "GraphQL في لغة (File Upload) أنها الطريقة الوحيدة لرفع الملفات."
    ],
    correctAnswerIndex: 2,
    explanation: "الـ Query نظرياً وبحسب المواصفات هي عملية قراءة فقط لا تغير من حالة النظام، وتوصف بأنها 'متساوية القوة' Idempotent كـ HTTP GET."
  },
  {
    id: "l7_q10",
    questionText: "أي من الوظائف التالية تقع ضمن مهام بوابات الواجهة البرمجية (API Gateway) المركبة في بنية الخدمات المصغرة؟",
    options: [
      "على تطبيقات العملاء CSS تحديد وتطبيق أنماط.",
      "لحماية الخدمات (Rate Limiting) توجيه الطلبات، المصادقة المركزية، وتحديد معدل الطلبات.",
      "مباشرة Apollo الخاصة بخادم Resolvers كتابة دوال الـ.",
      "للخدمات MongoDB إنشاء وتصميم قاعدة بيانات."
    ],
    correctAnswerIndex: 1,
    explanation: "في بنية الخدمات المصغرة، تكون الـ API Gateway هي المدخل الرئيسي وتتولى مهام التقاط المشتركة (Cross-cutting Concerns) كالتوجيه للخدمات المختصة، المصادقة المركزية للرموز، وتحديد معدل الاستخدام لمنع الإساءة."
  },
  {
    id: "l7_q11",
    questionText: "في مخطط GraphQL، نوع Enum يستخدم للتعبير عن:",
    options: [
      "مصفوفة لا نهائية من الأرقام الصحيحة.",
      "مجموعة محدودة ومعرفة مسبقاً من القيم الثابتة المسموح بها.",
      "دقيق جداً يُستخدم للعملات (Float) رقم عشري.",
      "كائن مركب يربط بين جداول قواعد البيانات المختلفة."
    ],
    correctAnswerIndex: 1,
    explanation: "النوع Enum (Enumeration) في المخططات يُستخدم لتعريف مجموعة مغلقة وثابتة من القيم الممكنة لحقل معين، ولا يقبل قيم خارج هذه المجموعة."
  },
  {
    id: "l7_q12",
    questionText: "ما هي الآلية أو البروتوكول الذي تعتمد عليه عملية Subscription في GraphQL لإرسال بيانات حية ومستمرة من الخادم إلى العميل؟",
    options: [
      "(Long Polling) متكررة HTTP GET طلبات.",
      "WebSocket اتصال مستمر وثنائي الاتجاه عبر بروتوكول.",
      "FTP بروتوكول نقل الملفات.",
      "UDP عبر بروتوكول RPC طلبات."
    ],
    correctAnswerIndex: 1,
    explanation: "عمليات الـ Subscription تتطلب اتصالاً دائم الحضور لنقل التغييرات فور حدوثها، وهذا يُحقق عادةً باستخدام بروتوكول WebSocket كونه يفتح قناة ثنائية الاتجاه مفتوحة باستمرار."
  },
  {
    id: "l7_q13",
    questionText: "يحاول المطور بناء خادم Apollo بسيط، لكن الخادم لا يتعرف على كيفية جلب البيانات. ما هو القسم البرمجي المفقود في إعداد ApolloServer؟\n\nconst typeDefs = `\n  type Query { hello: String }\n`;\n// السطر المفقود هنا لتحديد كيفية الإجابة على الاستعلام\nconst server = new ApolloServer({ typeDefs, /* ... */ });",
    options: [
      "الذي يتصل بقاعدة البيانات 'models' يجب تمرير كائن.",
      "'مرحبا' => () :hello { :Query } الذي يحتوي الدوال الفعلية التي تعيد البيانات (مثل resolvers يفتقد لكائن }).",
      "حصراً ليعمل الخادم 'mutations' يجب إضافة كائن.",
      "لمعالجة الطلبات 'middlewares' يجب إضافة مصفوفة."
    ],
    correctAnswerIndex: 1,
    explanation: "لتكوين خادم Apollo، لا يكفي تعريف المخطط النصي (typeDefs)، بل يجب توفير كائن resolvers الذي يحتوي المنطق البرمجي (دوال JS) التي تُخبر الخادم 'كيفية' استخراج البيانات لكل حقل."
  },
  {
    id: "l7_q14",
    questionText: "المطور كتب الاستعلام التالي في واجهة React ليتم جلب اسم الشخص ورقم هاتفه، لكن خادم GraphQL رفض الطلب ورمى خطأ Syntax Error، أين المشكلة؟\n\nconst ALL_PERSONS = gql`\n  query {\n    allPersons {\n      name,\n      phone\n    }\n  }\n`;",
    options: [
      "لأنها افتراضية وتسبب تعارضاً query يجب ألا يبدأ الاستعلام بكلمة.",
      "لا توجد أخطاء في الكود، المشكلة من اتصال الشبكة فقط.",
      "لا تستخدم الفواصل (,) للفصل بين الحقول المطلوبة داخل الأقواس المعقوفة GraphQL لغة استعلام الفراغ أو النزول لسطر جديد يكفي.",
      "graphql مفقودة ويجب استبدالها بـ gql الدالة."
    ],
    correctAnswerIndex: 2,
    explanation: "من القواعد الصياغية للغة استعلام GraphQL عدم الحاجة لوضع فواصل (,) بين الحقول المطلوبة. المسافات أو الأسطر الجديدة تعتبر فاصلة كافية، ووضع الفاصلة يعتبر خطأ Syntax."
  },
  {
    id: "l7_q15",
    questionText: "الكود التالي هو إعداد لمخطط بيانات (Schema). المطور يشتكي أن الخادم يسمح للمستخدمين بإضافة \"رقم هاتف\" فارغ (null) رغم أنه يجب أن يكون إجبارياً. ما هو التعديل اللازم على المخطط؟\n\ntype Person {\n  name: String!\n  phone: String\n  address: Address!\n  id: ID!\n}",
    options: [
      "Number إلى String يجب تحويل النوع من.",
      "لجعل الحقل غير قابل للفراغ phone: String! يجب إضافة علامة التعجب لتصبح.",
      "Input ونقله لنوع Person من النوع phone يجب إزالة الحقل.",
      "phone: string يجب تغيير الحرف الأول ليصبح."
    ],
    correctAnswerIndex: 1,
    explanation: "لحماية حقل phone وجعله إجبارياً، يجب تعديل تعريفه في المخطط بإضافة علامة التعجب '!' ليصبح `phone: String!`، فيقوم خادم GraphQL برفض أي مدخل يحمل قيمة فارغة تلقائياً."
  },
  {
    id: "l7_q16",
    questionText: "في دالة Resolver الخاصة بإضافة شخص جديد، الكود المكتوب يفشل في حفظ بيانات الشخص في المصفوفة الأصلية ولا يعيد النتيجة المطلوبة للعميل. أين الخطأ؟\n\nMutation: {\n  addPerson: (root, args) => {\n    const person = { ...args, id: String(Date.now()) };\n    persons.concat(person); // السطر الخاطئ\n    return person;\n  }\n}",
    options: [
      "يجب (Immutable) الأصلية مباشرة persons تُنشئ مصفوفة جديدة ولا تعدل المصفوفة concat الدالة الكتابة persons = persons.concat(person).",
      "GraphQL داخل كائنات ...args لا يمكن استخدام معامل النشر.",
      "يجب أن يتم حذفه من تعريف الدالة root المعامل.",
      "Apollo غير مدعومة في بيئة Date.now() دالة."
    ],
    correctAnswerIndex: 0,
    explanation: "الدالة concat في JavaScript لا تعدل المصفوفة الأصلية بل ترجع مصفوفة جديدة. لكي تُحفظ التغييرات يجب إعادة إسناد النتيجة للمتغير: `persons = persons.concat(...)`."
  },
  {
    id: "l7_q17",
    questionText: "المكون أدناه يحاول استخدام طفرة (Mutation) ممرراً متغيراً لها. لكن الخادم لا يقرأ المتغير أبداً ويعطي خطأ. أين يكمن الخطأ في طريقة استدعاء الدالة؟\n\nconst [addPerson] = useMutation(ADD_PERSON);\nconst handleSubmit = () => {\n  addPerson({ name: 'سالم' }); // استدعاء الدالة\n}",
    options: [
      "await addPerson() يجب استدعاء الدالة كـ.",
      "({ variables: { name: 'سالم' } }) addPerson كالتالي variables يجب وضع المتغيرات ضمن خاصية بشكل صريح، لتمريرها للخادم كمتغيرات مستقلة عن النص variables.",
      "خاطئ [addPerson] ترجع كائناً وليس مصفوفة، لذا التفكيك useMutation الدالة.",
      "JSON String مباشرة، يجب تحويلها لـ Mutation لا يجوز تمرير كائنات للـ."
    ],
    correctAnswerIndex: 1,
    explanation: "عند استدعاء دالة الطفرة، يجب تغليف المتغيرات داخل كائن يمتلك الخاصية variables: `addPerson({ variables: { name: 'سالم' } })`."
  },
  {
    id: "l7_q18",
    questionText: "عند تنفيذ الطفرة (Mutation) بنجاح وإضافة الشخص الجديد لقاعدة البيانات، لا تظهر البيانات الجديدة في القائمة المعروضة أمام المستخدم حتى يقوم بتحديث الصفحة يدويًا. ما الإعداد الناقص؟\n\nconst [addPerson] = useMutation(ADD_PERSON);",
    options: [
      "بعد الإضافة window.location.reload() يجب استخدام دالة.",
      "بإعادة جلب Apollo Client لتوجيه refetchQueries: [{ query: ALL_PERSONS }] يجب إضافة الخيار الاستعلام وتحديث الواجهة.",
      "useEffect يجب وضع الطفرة داخل دالة.",
      "للقدرة على الإضافة والعرض معاً useMutation بـ useQuery يجب استبدال."
    ],
    correctAnswerIndex: 1,
    explanation: "لكي يقوم Apollo Client بتحديث الذاكرة المخبيئة (Cache) وإعادة عرض القوائم بعد طفرة غيرت البيانات، يُنصح باستخدام خاصية refetchQueries لتشغيل استعلام التحديث تلقائياً بعد الإضافة."
  },
  {
    id: "l7_q19",
    questionText: "في لغة GraphQL، لكتابة قطعة (Fragment) يمكن إعادة استخدامها في استعلامات متعددة لتحديد حقول المستخدم، ماذا نضع في الفراغين؟\n\n_______ PersonDetails _______ Person {\n  name\n  phone\n}",
    options: [
      "type / extends",
      "interface / implements",
      "fragment / on",
      "extract / from"
    ],
    correctAnswerIndex: 2,
    explanation: "الكلمة المحجوزة لبدء تعريف قطعة استعلام هي fragment يليها اسم القطعة، ثم تستخدم الكلمة on لتحديد \"النوع\" المستهدف في المخطط الذي تنتمي إليه هذه الحقول (Type)."
  },
  {
    id: "l7_q20",
    questionText: "لتعريف واجهة العملاء (Apollo Client) وربطها بالخادم لتمكين تطبيق React من إرسال الاستعلامات، يجب تمرير مسار الخادم وكائن لـ Cache. أكمل الكود:\n\nconst client = new ApolloClient({\n  _______: 'http://localhost:4000',\n  cache: new InMemoryCache()\n});",
    options: [
      "url",
      "endpoint",
      "uri",
      "serverUrl"
    ],
    correctAnswerIndex: 2,
    explanation: "كائن التهيئة الخاص بـ ApolloClient يطلب إعداد الخاصية uri (Uniform Resource Identifier) لتحديد مسار رابط خادم GraphQL المستهدف."
  },
  {
    id: "l7_q21",
    questionText: "لكي يمتلك التطبيق بأكمله صلاحية الوصول لعميل Apollo، نغلف مكون <App /> بمزود (Provider) خاص من مكتبة @apollo/client. ما هو هذا العنصر؟\n\nreturn (\n  <_______ client={client}>\n    <App />\n  </_______>\n);",
    options: [
      "ApolloContext",
      "GraphQLProvider",
      "ApolloWrapper",
      "ApolloProvider"
    ],
    correctAnswerIndex: 3,
    explanation: "يٌغلف تطبيق React الأساسي بمكون `<ApolloProvider>` المجلوب من مكتبة `@apollo/client`، ويُمرر له كائن العميل client ليصبح الـ Hook متاحاً في جميع المكونات الأبناء."
  },
  {
    id: "l7_q22",
    questionText: "في حال طلب قائمة من الأشخاص باستخدام الـ Hook المسمى useQuery، فإن المكتبة تٌرجع كائناً يحتوي على 3 خصائص هامة للتعامل مع حالة الطلب. أكمل التفكيك التالي:\n\nconst { _______, error, data } = useQuery(ALL_PERSONS);",
    options: [
      "isFetching",
      "loading",
      "pending",
      "wait"
    ],
    correctAnswerIndex: 1,
    explanation: "الخطاف useQuery يرجع كائناً يحتوي حالة الاستعلام. المتغير الأساسي الدال على أن الطلب لا زال في طور التنفيذ ولم ينته هو loading (تكون قيمته true أو false)."
  },
  {
    id: "l7_q23",
    questionText: "في حال كان المخطط (Schema) يحتوي على نوع يُرجع إما كائن Person أو مصفوفة فارغة، فما هي الصياغة الصحيحة للمصفوفة بحيث \"لا تقبل قيم null كعناصر داخلية، لكن المصفوفة بحد ذاتها يمكن أن تكون null\"؟\n\ntype Query {\n  findFriends: _______\n}",
    options: [
      "[Person]!",
      "![Person!]",
      "[Person!]",
      "![Person]!"
    ],
    correctAnswerIndex: 2,
    explanation: "الصياغة `[Person!]` تعني \"مصفوفة يمكن أن تكون null، ولكن إذا وُجدت، يجب ألا يكون أي عنصر بداخلها null\". (علامة ! الداخلية للعناصر، وعدم وجود ! خارجية يجعل المصفوفة نفسها اختيارية)."
  },
  {
    id: "l7_q24",
    questionText: "عند كتابة طفرة (Mutation) تستقبل متغيرات من العميل (Variables)، كيف تُعرّف المتغيرات ضمن سلسلة الـ gql باستخدام إشارة الدولار؟\n\nconst ADD_PERSON = gql`\n  mutation addPerson(_______: String!) {\n    addPerson(name: $name) { id }\n  }\n`;",
    options: [
      "{name}",
      "$name",
      "@name",
      "#name"
    ],
    correctAnswerIndex: 1,
    explanation: "المتغيرات في استعلامات GraphQL تُسبق دائماً بإشارة الدولار `$`. تعريف المتغير يكون مثل `$name: String!` واستخدامه يكون `$name`."
  },
  {
    id: "l7_q25",
    questionText: "تم إرسال الاستعلام التالي إلى خادم GraphQL يعمل كما هو مشروح في المحاضرة. ما هو الخرج الهيكلي للاستجابة المتوقعة (بافتراض نجاح الطلب)؟\n\nquery {\n  personCount\n}",
    options: [
      "رقم يمثل عدد الأشخاص مباشرة، مثلاً 2.",
      "{\"data\": { \"personCount\": 2 }} وقيمتها الرقم، هكذا: data بداخلا خاصية personCount يحتوي خاصية JSON كائن.",
      "مصفوفة تحتوي أرقاماً.",
      "فارغ لعدم وجود حقول فرعية مطلوبة JSON كائن."
    ],
    correctAnswerIndex: 1,
    explanation: "وفقاً لمواصفات GraphQL، الاستجابة السليمة تكون دائماً عبارة عن كائن JSON يحتوي على الحقل الجذر \"data\"، وداخله توضع البيانات المستعلم عنها لتطابق نفس شكل الاستعلام."
  },
  {
    id: "l7_q26",
    questionText: "في مخطط GraphQL المُعرّف كالتالي: allPersons: [Person!]!. ما الذي سيحدث إذا حاولت دالة الـ Resolver المقابلة له إرجاع مصفوفة تحتوي بداخلها قيمة null (مثل [{ name: 'x' }, null])؟",
    options: [
      "سيقوم الخادم بإرسال المصفوفة وتجاهل القيمة الفارغة بصمت.",
      "للمستخدم لأن المخطط ينص على (GraphQL Error) النتيجة برمتها ويُرجع خطأً GraphQL سيرفض خادم أن عناصر المصفوفة غير قابلة لأن تكون [Person!]!.",
      "{} بكائن فارغ سيستبدل القيمة.",
      "الخادم سيرسل البيانات ولكن سيرمي تحذيراً في واجهة المتصفح فقط."
    ],
    correctAnswerIndex: 1,
    explanation: "لأن المخطط يعرّف `[Person!]!`، فهو يتعهد بعدم إرجاع null إطلاقاً كعنصر في المصفوفة. إذا حاول الـ Resolver كسر هذا العقد وممر null، سيرفضه محرك GraphQL ويرمي خطأ استجابة ويمنع إرسال البيانات الفاسدة."
  },
  {
    id: "l7_q27",
    questionText: "استناداً لكود دالة حل الاستعلام findPerson في الخادم، ماذا سيكون الخرج إذا أرسل العميل استعلاماً للبحث عن اسم name: \"عمر\"، وهذا الاسم غير موجود في مصفوفة persons؟\n\nfindPerson: (root, args) => persons.find(p => p.name === args.name)",
    options: [
      "للمتصفح (Not Found) الخادم سيرسل رسالة خطأ 404.",
      "وإعادتها للعميل كاستجابة null يترجمها إلى القيمة GraphQL وسيقوم undefined سترجع find دالة صالحة.",
      "لعدم معالجة الأخطاء (Crash) عن العمل Apollo سيتوقف خادم.",
      "{} سيرجع كائناً فارغاً."
    ],
    correctAnswerIndex: 1,
    explanation: "دالة find في JS تُرجع undefined إذا لم تجد العنصر المطابق. خادم Apollo يترجم قيم undefined تلقائياً إلى null في استجابة GraphQL ولا يعتبرها خطأً أو يوقف التشغيل."
  },
  {
    id: "l7_q28",
    questionText: "إذا استخدمنا الـ Fragment المسمى PersonDetails داخل استعلام لجلب قائمة الأشخاص، فما هي الحقول التي ستعود من الخادم بناءً على هذا الكود؟\n\nfragment PersonDetails on Person { name, phone }\nquery {\n  allPersons {\n    id\n    ...PersonDetails\n  }\n}",
    options: [
      "فقط id الحقل.",
      "فقط phone و name الحقول.",
      "ينشر الحقول المعرفة بداخله (name و phone) داخل الاستعلام الحالي. وبما أن id مطلوب أيضاً بجانبه، فالنتيجة تدمج الثلاث حقول معاً ...PersonDetails استخدام الـ Fragment عبر الرمز.",
      "سيحدث خطأ صياغة لأن الدمج يتطلب كلمة include."
    ],
    correctAnswerIndex: 2,
    explanation: "استخدام الـ Fragment عبر الرمز `...PersonDetails` ينشر الحقول المعرفة بداخله (name و phone) داخل الاستعلام الحالي. وبما أن id مطلوب أيضاً بجانبه، فالنتيجة تدمج الثلاث حقول معاً."
  },
  {
    id: "l7_q29",
    questionText: "في أداة DataLoader، إذا تم تنفيذ الكود التالي، كم عدد الاستعلامات الفعلية (Queries) التي ستُرسل لقاعدة البيانات SQL (بافتراض عدم وجود تخزين مؤقت مسبق)؟\n\ndataLoader.load(1);\ndataLoader.load(2);\ndataLoader.load(3);",
    options: [
      "استعلام لكل) استعلامات منفصلة 3 (ID.",
      "الحالية Event Loop في دورة (Batching) استعلام واحد (1) فقط بفضل تجميع الطلبات.",
      "()commit استعلام، لأنه يجب تنفيذ دالة 0.",
      "N+1 استعلامات بسبب مشكلة 4."
    ],
    correctAnswerIndex: 1,
    explanation: "هذه هي قوة DataLoader؛ فهو لن يرسل الطلب فوراً لكل `.load()`، بل يجمع (Batch) كل الاستدعاءات المنفذة في ذات الـ \"Tick\" ويرسل استعلاماً واحداً كبيراً (مثلاً `WHERE id IN (1,2,3)`)."
  },
  {
    id: "l7_q30",
    questionText: "بناءً على كود مكون React الذي يستخدم useQuery(ALL_PERSONS)، ماذا سيُعرض للمستخدم في اللحظة الأولى من تحميل المكون وقبل استلام أي رد من الخادم؟\n\nconst { loading, error, data } = useQuery(ALL_PERSONS);\nif (loading) return <p>جاري التحميل...</p>;\nif (error) return <p>خطأ!</p>;\nreturn <ul>...</ul>;",
    options: [
      "رسالة \"خطأ!\".",
      "قائمة فارغة.",
      "\"...رسالة \"جاري التحميل.",
      "شاشة بيضاء دون أي مكونات."
    ],
    correctAnswerIndex: 2,
    explanation: "بمجرد استدعاء `useQuery`، تكون حالة `loading` تساوي `true` ريثما تُجلب البيانات من الشبكة. ونتيجة للشرط الأول في الكود (`if (loading)`)، سيُعرض المكون فقرة `<p>جاري التحميل...</p>` للمستخدم كواجهة تحميل."
  }
];
