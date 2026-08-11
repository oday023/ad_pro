import { Question } from '../types';

export const lecture8Questions: Question[] = [
  {
    id: "l8_q1",
    questionText: "ما هي الفائدة الرئيسية التي توفرها لغة TypeScript مقارنة بـ JavaScript العادية؟",
    options: [
      "تحسين سرعة تنفيذ الكود داخل متصفحات الويب بنسبة 50%.",
      "توفير بيئة تشغيل لا مركزية لخدمات الواجهة الخلفية.",
      "توفير إكمال تلقائي ممتاز واكتشاف أخطاء الأنواع في وقت الترجمة (Compile time).",
      "تمكين استعلامات قاعدة البيانات مباشرة من الكود الأمامي بدون خادم."
    ],
    correctAnswerIndex: 2,
    explanation: "TypeScript لا تغير من أداء تشغيل البرنامج في المتصفح، لكنها تضيف ميزة اكتشاف أخطاء الأنواع قبل التشغيل (Compile time) مع توفير إكمال تلقائي ممتاز."
  },
  {
    id: "l8_q2",
    questionText: "في نظام الأنواع الخاص بـ TypeScript، ما هو الفرق بين Structural Typing و Nominal Typing؟",
    options: [
      "Structural يحدد التوافق ببنية الحقول الداخلية، بينما Nominal يحدد التوافق بالاسم المعلن للكائن.",
      "Structural (المستخدم في TS) يقبل توافق كائنين إذا امتلكا نفس البنية (الحقول)، بينما Nominal يشترط تصريحاً صريحاً (مثل extends) بالاسم.",
      "Nominal يُستخدم فقط مع المكونات التفاعلية، بينما Structural مع قواعد البيانات.",
      "لا يوجد فرق، كلاهما مصطلحان يعبران عن الـ Duck Typing."
    ],
    correctAnswerIndex: 1,
    explanation: "في Structural Typing إذا كان الكائنان يمتلكان نفس البنية والخصائص فيعتبران متوافقين، بينما ينص Nominal Typing على وجوب وجود علاقة وراثة أو تسمية صريحة (كما في Java)."
  },
  {
    id: "l8_q3",
    questionText: "ماذا يعني مصطلح \"التغاير العكسي\" (Contravariance) في نظرية الأنواع، وخصوصاً عند التعامل مع معاملات (Parameters) الدوال؟",
    options: [
      "إذا كانت الدالة تقبل نوع Cat فلا يُمكن تمريرها لدالة تتوقع نوع Animal.",
      "لا توجد أي علاقة بين الأنواع في مدخلات الدوال (Invariant).",
      "الدالة التي تتوقع معاملاً من النوع العام Animal يمكن أن تحل بأمان محل دالة تتوقع معاملاً من النوع الفرعي Cat.",
      "إذا كانت الدالة ترجع نوعاً Cat فيمكنها أن تحل محل دالة ترجع Animal."
    ],
    correctAnswerIndex: 2,
    explanation: "في معاملات الدوال ينعكس الاتجاه (Contravariance)؛ فالدالة التي تتعامل مع أي كائن عام (Animal) تستطيع استقبال النوع الخاص (Cat) بأمان."
  },
  {
    id: "l8_q4",
    questionText: "وفقاً لمبدأ استبدال ليسكوف (LSP)، لماذا يُعتبر تصميم كائن المربع (Square) كوريث مستمد من كائن المستطيل (Rectangle) انتهاكاً لهذا المبدأ في البرمجة؟",
    options: [
      "لأن لغة TypeScript لا تدعم الوراثة المتعددة.",
      "لأن تعديل عرض المربع سيؤدي حتماً لتعديل طوله (ليحافظ على شكله)، مما يكسر السلوك المتوقع للمستطيل.",
      "لأن مساحة المربع تُحسب بطريقة رياضية مختلفة تماماً وتتطلب دالة جديدة.",
      "لأنهما يمتلكان Structural Typing مختلف ولا يمكن مطابقتها."
    ],
    correctAnswerIndex: 1,
    explanation: "مبدأ Liskov ينص على أن الابن يجب أن يعمل مكان الأب دون كسر التوقعات. تعديل عرض المستطيل يفترض ألا يغير طوله، بينما في المربع يتغير الطول تلقائياً مما يكسر التوقع."
  },
  {
    id: "l8_q5",
    questionText: "ما هي الفائدة الرئيسية لنمط \"الاتحادات المميزة\" (Discriminated Unions) عند بناء واجهات المستخدم؟",
    options: [
      "توفير إمكانية تصميم الواجهة بطريقة السحب والإسقاط.",
      "تمكين المتصفح من تسريع عملية التشييد والتجاوز (Rendering DOM).",
      "منع الحالات المستحيلة برمجياً (مثل وجود \"خطأ\" و \"قيد التحميل\" في كائن الحالة بنفس اللحظة) وتفعيل فحص الشمولية بالمترجم.",
      "دمج عدة مكتبات CSS في كائن واحد."
    ],
    correctAnswerIndex: 2,
    explanation: "نمط Discriminated Unions يفصل الحالات بناءً على حقل مشترك (مثل status)، مما يمنع تمثيل حالتين متناقضتين في نفس الوقت ويضمن فحص الشمولية."
  },
  {
    id: "l8_q6",
    questionText: "بناءً على أنماط تطوير تطبيقات الهواتف المحمولة، كيف يعمل النمط الهجين (Hybrid) المستخدم في أطر عمل مثل Ionic أو Cordova؟",
    options: [
      "يتم ترجمة كود Swift أو Java بالكامل إلى لغة React.",
      "يشغل تطبيق الهاتف داخل \"حاوية ويب\" WebView باستخدام HTML و CSS و JS، مما يوفر أداءً أقل من الأصلي.",
      "يستخدم مكونات واجهة المستخدم الأصلية للنظام (Native UI Components) للحصول على أفضل أداء.",
      "يتصل مباشرة بنواة نظام الهاتف لمعالجة الرسومات ثلاثية الأبعاد."
    ],
    correctAnswerIndex: 1,
    explanation: "النمط الهجين لا يبني مكونات أصلية، بل يقوم بتغليف تطبيق الويب داخل WebView مخفي في التطبيق، مما يؤدي عادة لتراجع في الأداء مقارنة بالتطبيقات الأصلية."
  },
  {
    id: "l8_q7",
    questionText: "ما هي المشكلة الرئيسية في بنية React Native \"القديمة\" (Bridge) والتي أدت لابتكار بنية جديدة \"JSI\"؟",
    options: [
      "أنها لا تدعم لغة TypeScript إطلاقاً.",
      "الاتصال بين خيط JavaScript وخيط Native كان متزامناً مما يوقف النظام كلياً عن العمل.",
      "التواصل يتم بشكل \"غير متزامن\" عبر تسلسل البيانات لـ JSON، مما يخلق عنق زجاجة ويؤثر على أداء الرسوم المتحركة.",
      "كانت تستهلك بطارية الهاتف بشكل سريع بسبب استخدامها لشبكات 5G."
    ],
    correctAnswerIndex: 2,
    explanation: "البنية القديمة لـ Bridge كانت تتواصل بين طرفي التطبيق بتسلسل البيانات إلى JSON بشكل غير متزامن، مما يسبب تأخيراً (Overhead) وضعفاً في تجاوب الأداء."
  },
  {
    id: "l8_q8",
    questionText: "لماذا تستخدم React Native وحدة القياس \"dp\" (Density-independent pixels) بدلاً من وحدة القياس القياسية في الويب \"px\"؟",
    options: [
      "لأن محركات الهواتف المحمولة لا تستطيع قراءة قيم البكسل العادية.",
      "لضمان ظهور العناصر بحجم \"متسق ومتطابق\" بصرياً على جميع الشاشات بغض النظر عن كثافة البكسلات لكل شاشة.",
      "لتقليل حجم التطبيق النهائي عند نشره في متاجر التطبيقات.",
      "لأن وحدة dp تسمح بتكبير الخطوط تلقائياً لضعاف البصر."
    ],
    correctAnswerIndex: 1,
    explanation: "تُستخدم وحدة dp لحل مشكلة اختلاف كثافة الشاشات؛ فقياس 100dp سيظهر بنفس الحجم الفيزيائي تقريباً على مختلف الأجهزة."
  },
  {
    id: "l8_q9",
    questionText: "أي من عناصر الويب التالية يعتبر المقابل الدقيق والمباشر لعنصر <View> في React Native؟",
    options: [
      "<span>",
      "<p>",
      "<div>",
      "<a>"
    ],
    correctAnswerIndex: 2,
    explanation: "العنصر <View> هو الوحدة الأساسية لبناء الهياكل والحاويات في React Native ويعمل بشكل يطابق تماماً عنصر <div> المستخدم لتقسيم واجهة الويب."
  },
  {
    id: "l8_q10",
    questionText: "في React Native، كيف يتم التعامل مع تمرير المحتوى عند زيادة البيانات عن حجم الشاشة، مقارنة بالويب؟",
    options: [
      "كما في الويب يحدث التمرير تلقائياً بواسطة خاصية overflow: auto.",
      "React Native لا تدعم التمرير العمودي، فقط التمرير الأفقي عبر مكتبات خارجية.",
      "يجب تغليف المحتوى بوضوح ومباشرة داخل مكون خاص مثل <ScrollView> أو <FlatList>.",
      "يتم تغيير حجم الخط تلقائياً ليناسب حجم الشاشة."
    ],
    correctAnswerIndex: 2,
    explanation: "على عكس متصفحات الويب التي تُفعل التمرير تلقائياً للمحتوى الزائد، تتطلب الهواتف تغليف المحتوى برمجياً داخل مكون خاص مثل <ScrollView> للتمرير العادي أو <FlatList> للقوائم الطويلة."
  },
  {
    id: "l8_q11",
    questionText: "عند استخدام أداة (Utility Types) في TypeScript لإنشاء نوع جديد يجعل \"جميع\" حقول النوع الأصلي اختيارية، ماذا نستخدم؟",
    options: [
      "Readonly",
      "Partial",
      "Required",
      "Pick"
    ],
    correctAnswerIndex: 1,
    explanation: "أداة Partial مدمجة في TypeScript ووظيفتها تحويل جميع خصائص الواجهة الأصلية إلى خصائص اختيارية (Optional)."
  },
  {
    id: "l8_q12",
    questionText: "ما هي الأداة أو المكتبة التي توفر بيئة جاهزة وسريعة للبدء بتطوير تطبيقات React Native دون الحاجة لتثبيت Android Studio و Xcode؟",
    options: [
      "Electron",
      "Vite",
      "Expo",
      "Cordova"
    ],
    correctAnswerIndex: 2,
    explanation: "منصة Expo تُعتبر حزمة أدوات وخدمات متكاملة تغلف React Native وتوفر أداء ومحتوى ممتاز مع عدم اشتراط إعداد المترجمات الثقيلة."
  },
  {
    id: "l8_q13",
    questionText: "في كود TypeScript التالي، يعطي المترجم خطأً عند السطر الثاني. ما السبب وما الحل المناسب وفق مبادئ TypeScript؟\n\nlet data: any = \"نص\";\ndata = 42;",
    options: [
      "الخطأ يكمن في إسناد رقم لمتغير معرّف كـ any، والحل تغيير النوع لـ number.",
      "استخدام any يُلغي فحص الأنواع الخاص بالمترجم ويعيد المتغير كأنه في JS عادية، وهو غير حبذ. يُفضل تجنب any واستخدام unknown مع الفحص أو نوع صريح.",
      "لتجنب أخطاء الإسناد يجب أن يُعرف data بـ const.",
      "يجب وضع الرقم بين علامات تنصيص ليكون \"42\"."
    ],
    correctAnswerIndex: 1,
    explanation: "استخدام any يكسر فحص الأنواع الخاص بالمترجم ويعيد المتغير كأنه في JS عادية، وهو أمر غير حبذ في بناء المشاريع الصلبة ويُفضل تجنبه واستخدام unknown مع الفحص اليدوي كخيار آمن."
  },
  {
    id: "l8_q14",
    questionText: "يحاول المطور بناء واجهة بسيطة في React Native تحتوي نصاً وزراً، لكن التطبيق ينهار ويعطي خطأ. أين يكمن الخطأ في الكود؟\n\nreturn (\n  <View>\n    مرحبا بك في التطبيق\n    <Button title=\"انقر هنا\" />\n  </View>\n);",
    options: [
      "يجب أن يستبدل عنصر View بـ div.",
      "المكون Button غير مدعوم في React Native.",
      "في React Native، يمنع وضع نصوص مجردة داخل الحاويات (مثل View)، ويجب دائماً تغليف أي نص داخل المكون المخصص للطباعة <Text>.",
      "النص JS يجب أن يُحاط بأقواس معقوفة كمتغير."
    ],
    correctAnswerIndex: 2,
    explanation: "في React Native، من الممنوع والمستحيل وضع نصوص مجردة (Raw Strings) داخل عناصر الحاويات (مثل View). يجب دائماً تغليف أي نص داخلي باستخدام المكون المخصص للطباعة <Text>."
  },
  {
    id: "l8_q15",
    questionText: "في إطار عمل Express باستخدام TypeScript، يحاول المطور قراءة بيانات الـ Body الواردة كـ JSON، كيف يمكن إصلاح ذلك بشكل آمن ومحترف بدلاً من any؟\n\napp.post('/api/notes', (req: Request, res: Response) => {\n  const { content, important } = req.body; // الخطأ يظهر هنا\n  // ...\n});",
    options: [
      "تكون واجهة Request صريحة، ولتحديد شكل req.body القادم من العميل بدقة، نستخدم أداة التوكيد `as { content: string; important: boolean }`.",
      "يجب تغيير نوع Request ليصبح Request.",
      "Express لا تدعم TypeScript لذلك يجب استخدام مكتبات خارجية.",
      "يجب إرسال البيانات من الواجهة الأمامية كـ FormData وليس JSON."
    ],
    correctAnswerIndex: 0,
    explanation: "تكون واجهة Request في Express عامة، ولتحديد شكل req.body القادم من العميل بشكل دقيق وآمن برمجياً نستخدم أداة التوكيد `as { type definition }` لإجبار المترجم على اعتماد الشكل المطلوب."
  },
  {
    id: "l8_q16",
    questionText: "عند استخدام Generics (الأنواع المعممة) في TypeScript، الكود التالي يُعطي خطأ ترجمة:\nProperty 'length' does not exist on type 'T'.\nما هو الحل الصحيح؟\n\nfunction logLength<T>(arg: T): void {\n  console.log(arg.length);\n}",
    options: [
      "يجب تحويل النوع T لـ any.",
      "النوع المعمم T لا يعرف شيئاً عن الكائن المُمرر. لكي يقبل المترجم استدعاء length، يجب وضع قيد (Constraint) يجبر المبرمج على تمرير كائن يحوي تلك الخاصية باستخدام الكلمة extends.",
      "مع الأنواع المعممة لا يجوز استخدام دوال غير ترجيعية (void).",
      "Generics لا تعمل داخل دوال console.log."
    ],
    correctAnswerIndex: 1,
    explanation: "النوع المعمم T لا يعرف شيئاً عن الكائن المُمرر. لكي يقبل المترجم استدعاء length، يجب وضع قيد (Constraint) يجبر المبرمج على تمرير كائن يحوي تلك الخاصية باستخدام الكلمة extends."
  },
  {
    id: "l8_q17",
    questionText: "المكون أدناه المكتوب لـ React يواجه خطأ ترجمة في الـ Props، ما هو الخطأ وكيف يُصلح؟\n\ninterface Props { title: string }\nconst Header = (title: Props) => {\n  return <h1>{title}</h1>;\n}",
    options: [
      "يجب ألا نستخدم الأنواع الثابتة في مكونات React.",
      "عند تعريف الـ Props للمكون، المعامل الأول الممرر يمثل \"كائن\" الـ Props بأكمله، فإما أن نكتب `{ title }: Props` لتفكيك الكائن، أو نتعامل معه هكذا `props.title`. الإعداد الحالي سيعطي خطأ.",
      "الدالة المكتوبة بهذه الطريقة لا تدعم JSX.",
      "كلمة interface مخصصة فقط للكلاسات ويجب استبدالها بـ type."
    ],
    correctAnswerIndex: 1,
    explanation: "عند تعريف الـ Props للمكون، المعامل الأول الممرر يمثل \"كائن\" الـ Props بأكمله، فإما أن نكتب `{ title }: Props` لتفكيك الكائن، أو نتعامل معه هكذا `props.title`. الإعداد الحالي سيعطي خطأ."
  },
  {
    id: "l8_q18",
    questionText: "يحاول المطور تنسيق نص في React Native باستخدام طريقة الأنماط المضمنة، لكن التطبيق يعطي خطأ ترجمة. ما هو السبب؟\n\nconst App = () => (\n  <Text style={{ font-size: '20px', font-weight: 'bold' }}>مرحبا</Text>\n);",
    options: [
      "المكون Text لا يقبل خاصية style.",
      "الأنماط المضمنة غير مسموحة ويجب استخدام StyleSheet حصراً.",
      "في React Native، الخصائص ذات المقاطع المتعددة يجب أن تُكتب بأسلوب camelCase (مثل fontSize و fontWeight) والأرقام تُمرر كأرقام صحيحة '20' دون الكلمة (dp لأنها تُستخدم) والأبعاد والمقاسات.",
      "النص \"مرحبا\" يجب أن يكون في سطر مستقل."
    ],
    correctAnswerIndex: 2,
    explanation: "في React Native، الخصائص ذات المقاطع المتعددة يجب أن تُكتب بأسلوب camelCase (مثل fontSize و fontWeight) والأرقام تُمرر كأرقام صحيحة '20' دون الكلمة (dp لأنها تُستخدم) والأبعاد والمقاسات."
  },
  {
    id: "l8_q19",
    questionText: "لإكمال تعريف نوع يُسمى Grade يقتصر على قبول قيم نصية محددة فقط (مثل A أو B أو C) كالتالي Type Alias نستخدم أسلوب الـ:\n\ntype Grade = 'A' _______ 'B' _______ 'C';",
    options: [
      "& / &",
      "|| / ||",
      "| / |",
      ", / ,"
    ],
    correctAnswerIndex: 2,
    explanation: "يتم تعريف الـ Type Alias ذو القيم المتعددة (Type Union) باستخدام معامل \"أو\" المنطقي وهو الخط العمودي الفاصل '|'."
  },
  {
    id: "l8_q20",
    questionText: "لتعريف واجهة (Interface) طالب دراسات عليا (GradStudent) ترث وتتضمن كافة خصائص واجهة الطالب العادي (Student) مع إضافة حقول جديدة، ما هي الكلمة المحجوزة المفقودة؟\n\ninterface GradStudent _______ Student {\n  thesis: string;\n}",
    options: [
      "implements",
      "extends",
      "inherits",
      "includes"
    ],
    correctAnswerIndex: 1,
    explanation: "لكي ترث واجهة (Interface) خصائص واجهة أخرى في لغة TypeScript، نستخدم الكلمة المحجوزة extends."
  },
  {
    id: "l8_q21",
    questionText: "في مكونات واجهة React المحمية بـ TypeScript، للقيام بتهيئة Hook الحالة ليكون مصفوفة من كائنات الـ Note بشكل صريح، ماذا نضع بين الأقواس الزاوية؟\n\nconst [notes, setNotes] = useState<_______>([]);",
    options: [
      "Note",
      "Note[]",
      "Array",
      "Object"
    ],
    correctAnswerIndex: 1,
    explanation: "لإعلام TypeScript أن المتغير الذي يخزنه الخطاف useState هو عبارة عن مصفوفة من النوع Note، نقوم بإضافة نوع Generics الصريح `Note[]` قبل تمرير القيمة الابتدائية."
  },
  {
    id: "l8_q22",
    questionText: "في React Native، لتعريف كائن منسق للتنسيقات (Styles) يحاكي أوراق الأنماط ويقدم ميزة الإكمال التلقائي واكتشاف الأخطاء، ما هو الكائن المستخدم؟\n\nconst styles = _______.create({\n  container: { flex: 1, padding: 20 }\n});",
    options: [
      "StyleSheet",
      "CssBuilder",
      "NativeStyles",
      "StyleManager"
    ],
    correctAnswerIndex: 0,
    explanation: "الكائن المرجعي والموصى به دوماً في React Native لتنظيم وهيكلة أنماط المكون هو `StyleSheet` عبر دالته المضمنة `.create()`."
  },
  {
    id: "l8_q23",
    questionText: "للتعامل بفاعلية مع القوائم الضخمة في الهاتف وتقليل استهلاك الذاكرة، نمرر مصفوفة البيانات إلى مكون FlatList عبر الخاصية المطلوبة data، ودالة عرض العنصر الواحد عبر الخاصية المفقودة:\n\n<FlatList\n  data={items}\n  _______={({ item }) => <Text>{item.name}</Text>}\n/>",
    options: [
      "showItem",
      "mapItem",
      "renderItem",
      "display"
    ],
    correctAnswerIndex: 2,
    explanation: "مكون FlatList يطلب خاصيتين أساسيتين للعمل: الخاصية `data` التي تستقبل مصفوفة البيانات، والخاصية المفقودة `renderItem` لكل عنصر ضمن القائمة (JSX) والتي تتوقع دالة ترجع التصميم المرئي."
  },
  {
    id: "l8_q24",
    questionText: "في مكتبة التوجيه لـ React Native (react-navigation)، يتم تغليف جميع متصفحات التبويب بمكون رئيسي للحفاظ على حالة التنقل كاملة. ما هو هذا المكون؟ (Tab.Navigator)\n\n<_______>\n  <Tab.Navigator>\n    <Tab.Screen name=\"Home\" component={HomeScreen} />\n  </Tab.Navigator>\n</_______>",
    options: [
      "RouterProvider",
      "ScreenManager",
      "NavigationContainer",
      "AppNavigator"
    ],
    correctAnswerIndex: 2,
    explanation: "جميع هياكل التنقل (Navigators) من مكتبة React Navigation يجب أن تُوضع في نقطة الجذر للتطبيق مغلفة بمكون الحاوية الأساسي وهو `<NavigationContainer>`."
  },
  {
    id: "l8_q25",
    questionText: "في الكود التالي الذي يعتمد على الأنواع، ماذا سيكون خرج أمر الطباعة في المنصفح إذا تم إعطاء كائن الطالب؟\n\ninterface Student { name: string; gpa?: number; }\nconst s1: Student = { name: \"أحمد\" };\nconsole.log(s1.gpa);",
    options: [
      "سيتم طباعة 0.",
      "سيظهر خطأ ترجمة (Compile Error) لأن gpa لم يتم إسناده.",
      "الخاصية اختيارية (بسبب علامة ?) ولم تحدد لها قيمة وسيتم طباعة undefined.",
      "سيتم طباعة null."
    ],
    correctAnswerIndex: 2,
    explanation: "الخاصية gpaُ عُرفت كاختيارية بوجود المعامل '?' . إذا حاولنا استدعاء خاصية غير معرفة ضمن كائن في JavaScript فلن يرمي المترجم خطأ بل سيرجع قيمتها الافتراضية وهي `undefined`."
  },
  {
    id: "l8_q26",
    questionText: "ماذا نتوقع أن يكون خرج السطر الأخير بناءً على خصائص Nominal و Structural Typing في TypeScript؟\n\ninterface Point { x: number; y: number }\ninterface Vector { x: number; y: number }\nconst p: Point = { x: 10, y: 20 };\nconst v: Vector = p;\nconsole.log(v.x);",
    options: [
      "سيعطي 10 بنجاح لأن TypeScript تعتمد الـ Structural Typing (بنية الحقول المتطابقة تجعلها متوافقة).",
      "سيحدث خطأ ترجمة لأن Vector لا ترث من Point اسماً.",
      "سيطبع undefined لأن الكائنات مختلفة النوع.",
      "البرنامج سيستوقف عن العمل."
    ],
    correctAnswerIndex: 0,
    explanation: "لأن TypeScript يعتمد أسلوب التوافق الهيكلي (Structural Typing)، فإنه يجد أن المتغيرين يمتلكان نفس البنية الداخلية (الحقول x و y)، ولذلك سيعتبرهما متوافقين ولن يرمي أي خطأ، وسيطبع القيمة 10."
  },
  {
    id: "l8_q27",
    questionText: "بالنظر للكود الذي يستخدم \"الاتحاد المميز\" (Discriminated Union) لنمذجة الحالات، ماذا سيُرجع هذا المكون عند تنفيذه مع الكائن الممرر؟\n\ntype State = \n  | { status: 'loading' } \n  | { status: 'success'; data: string };\n\nconst render = (s: State) => {\n  if (s.status === 'success') return s.data;\n  return '...جاري';\n}\n\nconst currentState: State = { status: 'success', data: 'تم بنجاح' };\nrender(currentState); // ماذا سترجع الدالة؟",
    options: [
      "'...جاري'",
      "في الحالة الأولى data خطأ ترجمة لعدم وجود الحقل.",
      "النص 'تم بنجاح'.",
      "الكائن بالكامل { status: 'success', data: 'تم بنجاح' }."
    ],
    correctAnswerIndex: 2,
    explanation: "بمجرد التحقق بعبارة if من حقل 'status' المشترك بين الحالات، سيعلم المترجم تلقائياً بأمان إمكانية قراءة الحقل 'data' المرتبط بتلك الحالة، وسيعيد الدالة النص المضمن داخلها وهو \"تم بنجاح\"."
  },
  {
    id: "l8_q28",
    questionText: "في مكون React Native، تم استدعاء دالة repeat لطباعة النجوم بناءً على تقييم المنتج. ما هو الخرج المرئي للمكون؟\n\nconst item = { rating: 3 };\nreturn <Text>التقييم: {'*'.repeat(item.rating)}</Text>;",
    options: [
      "التقييم: *",
      "التقييم: 3",
      "التقييم: ***",
      "Text الدوال الرياضية بداخل React Native خطأ، لا تدعم."
    ],
    correctAnswerIndex: 2,
    explanation: "دالة `repeat` هي دالة معالجة سلاسل نصية قياسية تقوم بتكرار النص بناءً على الرقم المعطى لها، وبما أن التقييم قيمته 3 فسيطبع المكون ثلاث نجمات *** في سطر واحد."
  },
  {
    id: "l8_q29",
    questionText: "ماذا سيحدث إذا تم تغيير نوع المخرج لدالة مجهولة من void إلى string وتم إرجاع رقم في نفس الوقت كالتالي؟\n\nconst greet = (): string => {\n  return 100;\n};\n",
    options: [
      "سيتم تحويل الرقم تلقائياً لنص \"100\".",
      "سيُعطي المترجم خطأً Type 'number' is not assignable to type 'string'.",
      "ديناميكية JavaScript سيقبل المترجم الكود لأن.",
      "ستُرجع الدالة القيمة undefined."
    ],
    correctAnswerIndex: 1,
    explanation: "قوة TypeScript تكمن هنا؛ إذا تم تحديد صريح لنوع مخرج الدالة بـ `string` وقامت الدالة بـإرجاع قيمة من نوع آخر كالرقم `100`، سيتوقف المترجم ويُعطي خطأً في التطابق لعدم التزامه بالعقد."
  },
  {
    id: "l8_q30",
    questionText: "في شجرة مكونات React Native الآتية التي تستخدم Flexbox للتخطيط، ما هو الاتجاه الداخلي الـ (Text 1 و Text 2) التلقائي والافتراضي الذي ستنصف فيه المكونات الأبناء (Direction) داخل الـ View؟\n\n<View>\n  <Text>1</Text>\n  <Text>2</Text>\n</View>",
    options: [
      "كما هو الافتراضي في الويب (row) سيتم ترتيبهم أفقياً في صف واحد.",
      "هو React Native الافتراضي في FlexDirection لأن column سيتم ترتيبهم عمودياً في عمود واحد.",
      "position سيتداخل النصان مع بعضهما لغياب خاصية.",
      "سيختفي النص لعدم تخصيص ألوان محددة لهما."
    ],
    correctAnswerIndex: 1,
    explanation: "أحد الفروقات البارزة في نظرية التخطيط بين متصفح الويب و React Native، هو أن اتجاه الـ Flexbox التلقائي (الافتراضي) في الهواتف الذكية يكون `column` (عمودي) بينما في الويب يكون `row` (أفقي)."
  }
];
