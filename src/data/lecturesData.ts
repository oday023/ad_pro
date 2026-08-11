import { Lecture } from '../types';
import { lecture1Questions } from './lecture1Questions';
import { lecture2Questions } from './lecture2Questions';
import { lecture3Questions } from './lecture3Questions';
import { lecture4Questions } from './lecture4Questions';
import { lecture5Questions } from './lecture5Questions';
import { lecture6Questions } from './lecture6Questions';
import { lecture7Questions } from './lecture7Questions';
import { lecture8Questions } from './lecture8Questions';
import { lecture9Questions } from './lecture9Questions';

export const INITIAL_LECTURES: Lecture[] = [
{
    id: 1,
    title: "المحاضرة الأولى",
    subtitle: "أساسيات الشبكات، بروتوكولات الويب، شجرة DOM، ومقدمة في React",
    summary: "شرح كامل وتحليلي للرحلة من الشبكة ومتصفح الويب (Client-Server, OSI, TCP/IP, HTTP/HTTPS, DNS, DOM, Rendering Engine) وصولاً إلى React و Virtual DOM ومكونات JSX و Props.",
    theoryContent: `
# 📚 المحاضرة الأولى — الملخص الشامل

## 1. Web Architecture — بنية تطبيقات الويب

### Client–Server
- **Client — العميل:** يطلب الخدمة ويعرض النتائج، مثل المتصفح.
- **Server — الخادم:** يستقبل الطلبات ويعالجها، مثل Node.js/Express.

### أهم البنى المعمارية
| البنية | الفكرة |
| :--- | :--- |
| **Monolithic** | التطبيق كله في وحدة واحدة |
| **Client-Server** | فصل العرض عن المعالجة |
| **Three-Tier** | Presentation + Application + Data |
| **Microservices** | خدمات صغيرة مستقلة |
| **Peer-to-Peer** | كل عقدة يمكن أن تكون Client وServer |

### Three-Tier Architecture
\`\`\`text
Presentation ──► Application ──► Data
   React          Node/Express    MongoDB/Postgres
\`\`\`
هذه البنية مهمة جدًا في المحاضرة.

---

## 2. OSI و TCP/IP

### OSI — سبع طبقات
1. **7. Application** (أمثلة: HTTP, HTTPS, DNS, FTP)
2. **6. Presentation**
3. **5. Session**
4. **4. Transport** (أمثلة: TCP, UDP)
5. **3. Network** (أمثلة: IP, ICMP, ARP)
6. **2. Data Link** (أمثلة: Ethernet, Wi-Fi)
7. **1. Physical**

### TCP/IP
- **Application** (مثل: HTTP)
- **Transport** (مثل: TCP)
- **Internet** (مثل: IP)
- **Network Access** (مثل: Ethernet/Wi-Fi)

---

## 3. HTTP

HTTP بروتوكول تواصل المتصفح مع الخادم.

**المسار:**
\`\`\`text
Client ──► Request ──► Server ──► Response ──► Client
\`\`\`

### Methods المهمة
| Method | المعنى |
| :--- | :--- |
| **GET** | جلب البيانات |
| **POST** | إنشاء/إرسال بيانات |
| **PUT** | تحديث كامل |
| **PATCH** | تحديث جزئي |
| **DELETE** | حذف |

### Status Codes
- **200** ➔ OK
- **201** ➔ Created
- **204** ➔ No Content
- **301** ➔ Moved Permanently
- **400** ➔ Bad Request
- **401** ➔ Unauthorized
- **403** ➔ Forbidden
- **404** ➔ Not Found
- **500** ➔ Internal Server Error

---

## 4. HTTPS و TLS

\`HTTPS = HTTP + TLS/SSL\`

TLS يؤمن الاتصال.

**الـ Handshake بصورة مبسطة:**
\`\`\`text
ClientHello
    ↓
ServerHello + Certificate
    ↓
Key Exchange
    ↓
Encrypted Connection
\`\`\`

---

## 5. DNS

DNS = Domain Name System

وظيفته تحويل أسماء النطاقات إلى عناوين IP:
\`\`\`text
www.example.com ──► IP Address
\`\`\`

**التسلسل:**
\`\`\`text
Browser Cache ──► OS/Local ──► DNS Resolver ──► Root ──► TLD ──► Authoritative Server ──► IP
\`\`\`

**السجلات (DNS Records):**
- **A** ➔ IPv4
- **AAAA** ➔ IPv6
- **CNAME** ➔ Alias
- **MX** ➔ Mail Server

---

## 6. DOM

DOM = Document Object Model

هو تمثيل شجري لصفحة HTML يسمح لـ JavaScript بالتعامل مع عناصر الصفحة وتعديلها.

\`\`\`text
document
 └── html
     ├── head
     └── body
         └── div#root
\`\`\`

### أهم التعليمات
- \`document.getElementById('root')\` ➔ الوصول إلى عنصر بواسطة id.
- \`document.querySelectorAll('p')\` ➔ اختيار جميع العناصر المطابقة.
- \`document.createElement('li')\` ➔ إنشاء عنصر.
- \`element.textContent = 'Hello'\` ➔ تغيير النص.
- \`parent.appendChild(element)\` ➔ إضافة عنصر إلى عنصر آخر.
- \`element.style.color = 'blue'\` ➔ تغيير النمط.

---

## 7. Rendering Engine

**المسار المهم:**
\`\`\`text
HTML ➔ DOM  ┐
            ├──► Render Tree ➔ Layout ➔ Paint ➔ Composite ➔ Display
CSS  ➔ CSSOM ┘
\`\`\`

- **Layout/Reflow:** حساب الحجم والموقع.
- **Paint:** رسم البكسلات.
- **Composite:** تجميع الطبقات.

---

## 8. CSS

**طرق إضافة CSS:**
1. Inline
2. Internal
3. External (الأفضل في المحاضرة)

**المحددات:**
- \`p { }\`
- \`.highlight { }\`
- \`#main-title { }\`
- \`div.container p { }\`

---

## 9. Fetch

**الكود الأساسي:**
\`\`\`javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
\`\`\`

**احفظ العلاقة:**
\`\`\`text
fetch ──► then ──► response.json() ──► then(data) ──► catch(error)
\`\`\`
وهذا من أهم الأكواد التي يمكن أن يأتي منها سؤال تكملة أو تصحيح أو خرج.

---

## 10. SPA

SPA = Single Page Application

تحميل صفحة HTML واحدة ثم تحديث محتواها ديناميكيًا دون إعادة تحميل الصفحة بالكامل.

\`\`\`text
HTML مرة واحدة ──► JavaScript ──► Rendering ──► API → JSON ──► تحديث المحتوى
\`\`\`

---

## 11. SSR / CSR / SSG / ISR

| النمط | مكان Rendering |
| :--- | :--- |
| **SSR** | Server |
| **CSR** | Client/Browser |
| **SSG** | Build Time |
| **ISR** | مزيج/تحديث ثابت تدريجي |

**أهم الفروقات:**
- **SSR:** SEO جيد + تحميل أول سريع.
- **CSR:** تفاعل قوي لكن التحميل الأول قد يكون أبطأ.
- **SSG:** سريع جدًا ومناسب للمحتوى الثابت.
- **ISR:** يجمع المرونة والسرعة.

---

## 12. React

React مكتبة JavaScript لبناء واجهات المستخدم باستخدام Components.

**أهم أفكارها:**
- Components
- Virtual DOM
- One-way Data Flow
- JSX
- Props

---

## 13. Virtual DOM و Reconciliation

بدل التعامل المباشر مع DOM الحقيقي، React تستخدم Virtual DOM وتقارن التغييرات ثم تطبق التعديلات اللازمة.

المحاضرة تذكر أن Reconciliation تقلل التعقيد من: **O(n³) ➔ O(n)**

بسبب افتراضات مثل:
1. العناصر من أنواع مختلفة تعامل كشجرة مختلفة.
2. \`key\` تساعد React على معرفة العناصر المستقرة.

---

## 14. Imperative vs Declarative

- **Imperative — أمري:** تقول **كيف** تنفذ العمل خطوة بخطوة. (مثال: jQuery/DOM المباشر)
- **Declarative — تصريحي:** تقول **ماذا** تريد، والإطار يتولى التفاصيل. (مثال: React)

---

## 15. Vite

**إنشاء المشروع:**
\`\`\`bash
npm create vite@latest
cd my-app
npm install
npm run dev
\`\`\`

**هيكل مهم:**
\`\`\`text
src/
 ├── main.jsx
 ├── App.jsx
 ├── App.css
 └── index.css
\`\`\`

---

## 16. main.jsx

**الكود الذي يجب أن تعرفه:**
\`\`\`javascript
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />)
\`\`\`

**احفظ التسلسل:**
\`\`\`text
import ReactDOM ──► import App ──► getElementById('root') ──► createRoot() ──► render(<App />)
\`\`\`

---

## 17. Component

الـ Component هو دالة JavaScript ترجع JSX.

**مثال:**
\`\`\`jsx
const App = () => {
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}
\`\`\`

**قواعد مهمة:**
- الاسم يبدأ بحرف كبير.
- يرجع عنصرًا جذريًا واحدًا.
- يجب تصديره.

---

## 18. JSX

JSX تشبه HTML لكنها ليست HTML حقيقية؛ هي امتداد لـ JavaScript وتتحول إلى JavaScript.

**فروقات مهمة:**
| HTML | JSX |
| :--- | :--- |
| \`class\` | \`className\` |
| \`for\` | \`htmlFor\` |
| \`onclick\` | \`onClick\` |

والـ style: \`style={{ color: 'red' }}\`

**JavaScript داخل JSX:**
\`\`\`jsx
<p>{name}</p>
<p>{age + 1}</p>
<p>{name.toUpperCase()}</p>
\`\`\`
أي شيء داخل \`{}\` يتم تقييمه كـ JavaScript.

**Object:**
لا يجوز: \`<p>{friend}</p>\`
والصحيح: \`<p>{friend.name} - {friend.age}</p>\`

---

## 19. Props

Props هي طريقة تمرير البيانات: \`Parent ──► Child\`

وهي للقراءة فقط (Read-Only).

يمكن أن تكون: String, Number, Object, Array, Function

**مثال التمرير:**
\`\`\`jsx
<Hello name="أحمد" age={25} />
\`\`\`

**استقبالها:**
\`\`\`jsx
const Hello = ({ name, age }) => {
  return <p>مرحبا {name}، عمرك {age}</p>
}
\`\`\`

---

## 20. Fragment

إذا أردت إعادة عدة عناصر دون إضافة \`div\` إلى DOM:
\`\`\`jsx
<>
  <h1>عنوان</h1>
  <p>فقرة</p>
</>
\`\`\`
Fragment يجمع العناصر دون إضافة عقدة DOM إضافية.
`,
    questions: lecture1Questions
  },
{
    id: 2,
    title: "المحاضرة الثانية",
    subtitle: "أنماط البرمجة (Paradigms)، لغة ES6+، البرمجة الوظيفية (FP)، إدارة الحالة Hooks، الـ Event Loop، و FSM",
    summary: "شرح كامل وتحليلي للمحاضرة الثانية: أنماط البرمجة (Imperative/Declarative, FP, Pure Functions, Immutability)، ميزات ES6+ الحديثة، إدارة الحالة و dynamic events في React، مبادئ SOLID، ومفاهيم Event Loop، FSM، Concurrency vs Parallelism، و Structural Sharing.",
    theoryContent: "# 📘 شرح المحاضرة الثانية — البرمجة المتقدمة 2\n\n---\n\n## 1. Arrow Functions — الدوال السهمية\n\nبدل كتابة الدالة بالشكل التقليدي:\n```javascript\nfunction sum(a, b) {\n    return a + b;\n}\n```\n\nيمكن كتابتها باستخدام Arrow Function:\n```javascript\nconst sum = (a, b) => {\n    return a + b;\n};\n```\n\nأو بشكل مختصر (Implicit Return):\n```javascript\nconst sum = (a, b) => a + b;\n```\n\n**شرح المفردات:**\n- `(a, b)` → المعاملات (Parameters)\n- `=>` → السهم (Arrow)\n- `a + b` → القيمة المعادة (Returned Value)\n\nإذا كان لدينا معامل واحد فقط، يمكن حذف الأقواس:\n```javascript\nconst square = x => x * x;\n```\n\nلكن مع أكثر من معامل، نستخدم الأقواس وجوباً:\n```javascript\nconst sum = (a, b) => a + b;\n```\n\n### ⚠️ فخ الامتحان (فرق مهم جداً)\n\n`const f = x => x * 2;`  \nهذه تعيد القيمة مباشرة (Implicit Return).\n\nأما:\n```javascript\nconst f = x => {\n    x * 2;\n};\n```\nفهنا توجد أقواس مجعدة `{}` بدون كلمة `return`، وبالتالي لا تعيد شيئاً (`undefined`).\n\nوالصحيح عند استخدام `{}`:\n```javascript\nconst f = x => {\n    return x * 2;\n};\n```\n\n---\n\n## 2. map() — تحويل عناصر المصفوفة\n\n`map()` تتلخص في: مرّ على كل عنصر، نفّذ عليه عملية تحويل، وأعطني Array جديدة بنفس الطول.\n\n**مثال:**\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\n```\n\n**الناتج:**\n`[2, 4, 6, 8]`\n\n**التحويل:**\n- `1` ──► `2`\n- `2` ──► `4`\n- `3` ──► `6`\n- `4` ──► `8`\n\n> 📌 **نقطة مهمة جداً:** `map()` لا تعدل المصفوفة الأصلية، وإنما تعيد Array جديدة (تحافظ على Immutability).\n\n```javascript\nconst numbers = [1, 2, 3];\nconst result = numbers.map(n => n + 10);\n\n// numbers ──► [1, 2, 3]\n// result  ──► [11, 12, 13]\n```\n\n---\n\n## 3. filter() — التصفية\n\n`filter()` تعني: احتفظ بالعناصر التي تحقق الشرط فقط (ترجع `true`).\n\n**مثال:**\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst even = numbers.filter(n => n % 2 === 0);\n```\n\n**الناتج:** `[2, 4]`\n\n**الفحص:**\n- 1 ❌ (فردي)\n- 2 ✅ (زوجي)\n- 3 ❌ (فردي)\n- 4 ✅ (زوجي)\n- 5 ❌ (فردي)\n\n### الفرق المهم بين map و filter:\n- **map:** تحويل كل العناصر ──► إرجاع مصفوفة جديدة بنفس الطول.\n- **filter:** تصفية اختيارية ──► إرجاع مصفوفة ببعض العناصر (أو فارغة).\n\n---\n\n## 4. reduce() — اختزال المصفوفة\n\n`reduce()` تستخدم عندما تريد تحويل مجموعة عناصر في مصفوفة إلى قيمة واحدة متراكمة (Accumulated Value).\n\n**مثال:**\n```javascript\nconst numbers = [1, 2, 3, 4];\n\nconst total = numbers.reduce(\n    (sum, n) => sum + n,\n    0\n);\n```\n\n**الناتج:** `10`\n\n**شرح المتغيرات:**\n- `sum` → القيمة المتراكمة (Accumulator)\n- `n` → العنصر الحالي (Current Element)\n- `0` → القيمة الابتدائية (Initial Value)\n\n**مراحل التنفيذ:**\n1. `0 + 1 = 1`\n2. `1 + 2 = 3`\n3. `3 + 3 = 6`\n4. `6 + 4 = 10`\n\n---\n\n## 5. find() — إيجاد عنصر\n\n`find()` تبحث عن **أول عنصر** يحقق الشرط وترجعه فوراً.\n\n```javascript\nconst numbers = [1, 4, 7, 10];\nconst result = numbers.find(n => n > 5);\n```\n\n**الناتج:** `7` (لأن 7 هو أول عنصر في المصفوفة أكبر من 5).\n\n### الفرق بين find و filter:\n- **find:** تعيد **عنصراً واحداً فقط** (أو `undefined` إذا لم تجد).\n- **filter:** تعيد **مصفوفة (Array)** من جميع العناصر المطابقة.\n\n---\n\n## 6. forEach() — تنفيذ أمر لكل عنصر\n\nتُستخدم للتكرار على العناصر وتنفيذ دالة معينة (Side Effect) دون إرجاع قيم.\n\n```javascript\nconst numbers = [1, 2, 3];\n\nnumbers.forEach(n => {\n    console.log(n);\n});\n// يطبع: 1, 2, 3\n```\n\n### الفرق بين الدوال:\n- `map` ──► ترجع Array جديدة\n- `filter` ──► ترجع Array جديدة\n- `find` ──► ترجع عنصراً واحداً\n- `forEach` ──► للتنفيذ فقط (لا ترجع شيئاً / `undefined`)\n\n---\n\n## 7. push / pop / shift / unshift\n\nمهمة جداً في الأسئلة وأكواد التكملة:\n\n- **`push()`** ──► إضافة عنصر إلى **النهاية**.\n- **`pop()`** ──► حذف عنصر من **النهاية**.\n- **`unshift()`** ──► إضافة عنصر إلى **البداية**.\n- **`shift()`** ──► حذف عنصر من **البداية**.\n\n**ملخص حفظ سريع:**\n```text\npush    ──► أضف آخر\npop     ──► احذف آخر\n\nunshift ──► أضف أول\nshift   ──► احذف أول\n```\n\n---\n\n## 8. Immutability — عدم تعديل البيانات الأصلية\n\nمن أهم مفاهيم React والبرمجة الوظيفية: **عدم تعديل الـ State أو البيانات الأصلية مباشرة، بل إنشاء نسخة جديدة بأرقام ومرجع جديد.**\n\n❌ **مثال سيئ (تعديل مباشر Mutation):**\n```javascript\nconst user = { name: 'Ahmad', age: 20 };\nuser.age = 21; // ❌ تعديل مباشر\n```\n\n✅ **في React نفضل إنشاء نسخة جديدة:**\n```javascript\nconst updatedUser = { ...user, age: 21 };\n```\n\n---\n\n## 9. const و let\n\n- **`let`:** يمكن إعادة إسناد القيمة للمتغير:\n  ```javascript\n  let age = 20;\n  age = 21; // ✅ صحيح\n  ```\n\n- **`const`:** لا يمكن إعادة إسناد المرجع للمتغير:\n  ```javascript\n  const age = 20;\n  age = 21; // ❌ خطأ (TypeError)\n  ```\n\n### ⚠️ سؤال مهم في الامتحان:\n```javascript\nconst numbers = [1, 2, 3];\nnumbers.push(4); // ✅ مسموح!\n```\n**لماذا؟** لأننا لم نغير مرجع (Reference) الـ Array المسمى `numbers` بنفسه، بل عدلنا محتواه المباشر.\n\n---\n\n## 10. Destructuring — التفكيك (Array Destructuring)\n\nتفكيك المصفوفات واستخراج عناصرها بسهولة:\n\n```javascript\nconst numbers = [10, 20, 30];\n\n// بدل:\n// const first = numbers[0];\n// const second = numbers[1];\n\n// نستخدم:\nconst [first, second] = numbers;\n// first = 10, second = 20\n```\n\n### Rest Operator مع Destructuring:\n```javascript\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\n\n// first  = 1\n// second = 2\n// rest   = [3, 4, 5]\n```\n`...rest` تجمع باقي العناصر في مصفوفة جديدة.\n\n---\n\n## 11. Object Destructuring — تفكيك الكائنات\n\n```javascript\nconst student = {\n    name: 'Ahmad',\n    age: 22\n};\n\n// تفكيك الخاصيات:\nconst { name, age } = student;\n// name = 'Ahmad', age = 22\n```\n\n---\n\n## 12. إعادة تسمية الخاصية أثناء التفكيك (Renaming)\n\nيمكن إعادة تسمية المتغير المستخرج:\n```javascript\nconst { name: studentName } = student;\n\n// اسم الخاصية الأصلية ──► name\n// اسم المتغير الجديد   ──► studentName\n// studentName === 'Ahmad'\n```\n\n---\n\n## 13. Spread Operator — عامل الانتشار (...)\n\nرمز Spread هو `...`\n\n### مع Arrays:\n```javascript\nconst a = [1, 2, 3];\nconst b = [...a, 4, 5];\n// الناتج: [1, 2, 3, 4, 5]\n```\n`...a` تقوم بنسخ ونشر جميع عناصر `a` داخل المصفوفة الجديدة.\n\n---\n\n## 14. Spread مع Objects\n\n```javascript\nconst user = {\n    name: 'Ahmad',\n    age: 20\n};\n\nconst updatedUser = {\n    ...user,\n    age: 21\n};\n```\n**الناتج:** `{ name: 'Ahmad', age: 21 }`\n\n> 💡 **القاعدة:** الخصائص المكتوبة لاحقاً تتغلب وتستبدل الخصائص المنسوخة سابقاً.\n\n---\n\n## 15. Template Literals — القوالب النصية\n\nبدل الدمج التقليدي: `'Hello ' + name`  \nنستخدم Backticks مع `${}`:\n\n```javascript\nconst name = 'Ahmad';\nconst age = 20;\n\nconsole.log(`Hello ${name}, age = ${age}`);\n// يطبع: Hello Ahmad, age = 20\n```\n\n---\n\n## 16. Promise — الوعود في JavaScript\n\nالـ Promise يمثل قيمة ستكون متاحة مستقبلاً (عملية غير متزامنة Asynchronous).\n\n**حالات الـ Promise:**\n1. `Pending` (قيد الانتظار)\n2. `Fulfilled` / `Resolved` (نجاح)\n3. `Rejected` (فشل)\n\n```javascript\nconst promise = new Promise((resolve, reject) => {\n    const success = true;\n    if (success) {\n        resolve('Success!');\n    } else {\n        reject('Error!');\n    }\n});\n```\n- `resolve` ──► استدعاء عند النجاح.\n- `reject`  ──► استدعاء عند الفشل.\n\n---\n\n## 17. then() و catch()\n\n```javascript\npromise\n    .then(result => {\n        console.log(result);\n    })\n    .catch(error => {\n        console.log(error);\n    });\n```\n- **`then()`** ──► التعامل مع النتيجة عند النجاح (`resolve`).\n- **`catch()`** ──► التعامل مع الخطأ عند الفشل (`reject`).\n\n---\n\n## 18. async / await\n\nطريقة حديثة وأكثر قراءة للتعامل مع البرمجة غير المتزامنة بدل سلاسل `.then()`:\n\n```javascript\nasync function fetchData() {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n}\n```\n- **`async`:** تُخبر الكود أن الدالة غير متزامنة وترجع Promise.\n- **`await`:** تُجبر التنفيذ على انتظار إنجاز الـ Promise قبل الانتقال للسطر التالي.\n\n---\n\n## 19. useState — Hook إدارة الحالة في React\n\n```javascript\nconst [count, setCount] = useState(0);\n```\n1. **`count`:** القيمة الحالية للحالة (Current State).\n2. **`setCount`:** الدالة المسؤولة عن تحديث القيمة (Setter Function).\n3. **`0`:** القيمة الابتدائية (Initial Value).\n\n**لزيادة الرقم:**\n```javascript\nsetCount(count + 1);\n```\n❌ **لا نستخدم:** `count++` أو `count = count + 1` مباشرة.\n\n---\n\n## 20. ماذا يحدث عند تغيير State؟\n\nعند استدعاء `setCount(count + 1)`:\n1. تعلن React أن الحالة قد تغيرت.\n2. تقوم React بإعادة رسم المكون (**Re-rendering**).\n3. تظهر الواجهة الجديدة للمستخدم بالمحتوى المحدث.\n\n```text\nsetCount() ──► State Change ──► Re-render ──► Updated UI\n```\n\n---\n\n## 21. Event Handlers — معالجة الأحداث\n\nأشهر الأحداث في React: `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onFocus`, `onBlur`.\n\n```jsx\n<button onClick={() => setCount(count + 1)}>\n    +\n</button>\n```\n\n### ⚠️ أهم فخ في onClick بالامتحان:\n\n❌ **خطأ:**\n```jsx\n<button onClick={setCount(count + 1)}>\n```\n*السبب:* سيتم استدعاء الدالة فوراً أثناء عملية الـ Rendering، مما يسبب دالة لا نهائية (Infinite Loop).\n\n✅ **الصحيح:**\n```jsx\n<button onClick={() => setCount(count + 1)}>\n```\nنمرر Arrow Function مجهولة بحيث لا تُستدعى إلا عند ضغط المستخدم فعلياً.\n\n---\n\n## 22. State على شكل Object\n\n```javascript\nconst [clicks, setClicks] = useState({\n    left: 0,\n    right: 0\n});\n```\n\n**لتحديث `left` مع الحفاظ على `right`:**\n```javascript\nsetClicks({\n    ...clicks,\n    left: clicks.left + 1\n});\n```\n- `...clicks` ──► نسخ الخصائص الحالية.\n- `left: clicks.left + 1` ──► تعديل خاصية `left` فقط.\n\n---\n\n## 23. State على شكل Array\n\n```javascript\nconst [allClicks, setAllClicks] = useState([]);\n```\n\n**لإضافة عنصر جديد دون تعديل المباشر:**\n```javascript\n// استخدام concat:\nsetAllClicks(allClicks.concat('L'));\n\n// أو استخدام Spread:\nsetAllClicks([...allClicks, 'L']);\n```\n\n---\n\n## 24. join() — دمج عناصر المصفوفة إلى نص\n\n```javascript\nconst allClicks = ['L', 'R', 'L'];\n\nallClicks.join(' ');  // ──► \"L R L\"\nallClicks.join('');   // ──► \"LRL\"\n```\n\n---\n\n## 25. Conditional Rendering — العرض الشرطي في React\n\n### 1) Ternary Operator (`? :`)\n```jsx\n{isLoggedIn ? <Dashboard /> : <Login />}\n```\nإذا كان `isLoggedIn` صواباً يُعرض `<Dashboard />` وإلا يُعرض `<Login />`.\n\n### 2) Logical AND (`&&`)\n```jsx\n{isLoggedIn && <Dashboard />}\n```\nإذا كان `isLoggedIn` صواباً يُعرض `<Dashboard />` فقط.\n\n---\n\n## 26. Rules of Hooks — قواعد الـ Hooks الصارمة\n\n1. **تُستدعى الـ Hooks دائماً في أعلى مستوى (Top Level) في الـ Component فقط.**\n2. **يُمنع منعاً باتاً استدعاء Hooks داخل الشروط (`if`), الحلقات (`for/while`), أو الدوال الفرعية (`nested functions`).**\n\n❌ **خطيئة برمجة في React (انتهاك قواعد الـ Hooks):**\n```javascript\nif (condition) {\n    const [count, setCount] = useState(0); // ❌ Rule of Hooks violation\n}\n```\n\n---\n\n## 🧠 الخريطة الذهنية الشاملة للمحاضرة\n\n```text\nES6 & JavaScript الحديثة\n│\n├── Arrow Functions ──────────► (a, b) => a + b | Implicit Return | ⚠️ فخ الاقواس\n├── Array Methods ────────────► map | filter | reduce | find | forEach\n├── Array Mutators ───────────► push / pop (نهاية) | unshift / shift (بداية)\n├── const vs let ─────────────► Immutability & Re-assignment rules\n├── Destructuring ────────────► Array [a, b] | Object {x, y} | Renaming {x: newX}\n├── Spread (...) ─────────────► Array copying [...a] | Object merging {...obj}\n├── Template Literals ────────► `Hello ${name}`\n└── Promises & Async ─────────► resolve/reject | then/catch | async/await\n    │\n    ↓\nReact Core Basics\n│\n├── useState ─────────────────► [state, setter] = useState(initial)\n├── Event Handlers ───────────► onClick={() => fn()} (مرر دالة ولا تستدعها فوراً)\n├── Complex State Updates ────► Object {...clicks, left: +1} | Array [...prev, newItem]\n├── Conditional Rendering ────► Ternary (? :) | Logical AND (&&)\n└── Rules of Hooks ───────────► Top level strictly! لا تضع Hook داخل if أو loop\n```\n",
    questions: lecture2Questions
  },
{
    id: 3,
    title: "المحاضرة الثالثة",
    subtitle: "بُنى البيانات، تعقيد Big-O، وقوائم React والاتصالات (Data Structures, Big-O, React Lists & Networking)",
    summary: "شرح كامل وتحليلي لبُنى البيانات والتعقيد الزمني (Big-O)، وقوائم React والمفاتيح (Keys)، ومكونات Forms والتحكم (Controlled Components)، وأنماط التصميم كـ Observer Pattern وتدفق البيانات أحادي الاتجاه، وتأثير الجانب useEffect ومكتبة Axios وطرق الاتصالات Network Architecture.",
    theoryContent: "# 📘 شرح المحاضرة الثالثة — البرمجة المتقدمة 2\n\n---\n\n## 1. عرض Array داخل React باستخدام map()\n\nلدينا مثلًا:\n```javascript\nconst notes = [\n  { id: 1, content: 'HTML سهل', important: true },\n  { id: 2, content: 'JavaScript', important: false },\n  { id: 3, content: 'HTTP', important: true }\n]\n```\n\nنريد عرضها:\n```jsx\n<ul>\n  {notes.map(note =>\n    <li key={note.id}>\n      {note.content}\n    </li>\n  )}\n</ul>\n```\n\n### ماذا يحدث؟\n`map()` تمر على كل عنصر:\n- `note 1` ──► `<li>HTML سهل</li>`\n- `note 2` ──► `<li>JavaScript</li>`\n- `note 3` ──► `<li>HTTP</li>`\n\n### ماذا تعني key؟\n`key` = معرّف العنصر داخل القائمة. `<li key={note.id}>`\n\nتساعد React على معرفة:\n- أي عنصر تغير؟\n- أي عنصر أضيف؟\n- أي عنصر حذف؟\n\nويجب أن تكون `key` فريدة وثابتة بين العناصر، والأفضل استخدام `id` وليس `index`.\n\n### ⚠️ فخ مهم في الامتحان:\n\n❌ **بدون key:**\n```jsx\n{notes.map(note =>\n  <li>{note.content}</li>\n)}\n```\n\n❌ **استخدام index ليس المفضل:**\n```jsx\n{notes.map((note, index) =>\n  <li key={index}>{note.content}</li>\n)}\n```\nليست الطريقة المفضلة إذا كانت القائمة يمكن أن تتغير أو يعاد ترتيبها.\n\n✅ **الأفضل دائمًا:**\n```jsx\n{notes.map(note =>\n  <li key={note.id}>{note.content}</li>\n)}\n```\n\n---\n\n## 2. عندما نستخدم Component داخل map\n\nيمكن فصل العنصر إلى Component:\n```jsx\nconst Note = ({ note }) => {\n  return (\n    <li>\n      {note.content}\n    </li>\n  )\n}\n```\n\nثم لاستدعائه داخل `map`:\n```jsx\n{notes.map(note =>\n  <Note key={note.id} note={note} />\n)}\n```\n\n### ⚠️ انتبه لمكان key:\n`key` توضع على الـ Component الذي يتم إرجاعه من `map` مباشرة (`<Note key={note.id} note={note} />`) وليس داخل الـ Component نفسه (`<li>...</li>`).\n\n---\n\n## 3. Modules — الوحدات وإعادة التنظيم\n\nبدل وضع جميع الـ Components في ملف واحد، نقسم المشروع بنظافة:\n\n```text\nsrc/\n├── components/\n│   ├── Note.jsx\n│   ├── NoteList.jsx\n│   └── Header.jsx\n├── App.jsx\n└── main.jsx\n```\n\n**الفكرة:** كل Component في ملف مستقل ليسهل تنظيم وإعادة استخدام المشروع.\n\n---\n\n## 4. Export / Import — التصدير والاستيراد\n\n### Default Export — التصدير الافتراضي\nفي `Note.jsx`:\n```javascript\nconst Note = ({ note }) => {\n  return <li>{note.content}</li>\n}\n\nexport default Note\n```\n\nثم نجلبه في ملف آخر:\n```javascript\nimport Note from './components/Note'\n```\n\n📌 **نقطة مهمة:** مع `default export` يمكن تغيير اسم الاستيراد بحرية:\n```javascript\nimport MyNote from './components/Note'\n```\nلأن الاسم ليس مفروضًا بشرط `export default`.\n\n---\n\n## 5. Named Export — التصدير المسمى\n\n```javascript\nexport const helper = () => {\n  // ...\n}\n\nexport const API_URL = 'http://...'\n```\n\nعند الاستيراد:\n```javascript\nimport { helper, API_URL } from './utils'\n```\nهنا **يجب** استخدام الأقواس المجعدة `{}` ونفس الاسم بالضبط.\n\n### 💡 ملخص الفرق المهم للحفظ:\n- **Default Export:** `export default X` ──► `import أي_اسم from ...`\n- **Named Export:** `export const X` ──► `import { X } from ...`\n\n---\n\n## 6. Controlled Component — المكوّن المتحكم به\n\nهذا من أهم أجزاء المحاضرة.\n\nلدينا Input:\n```javascript\nconst [newNote, setNewNote] = useState('')\n```\n\nثم في العرض:\n```jsx\n<input\n  value={newNote}\n  onChange={handleNoteChange}\n/>\n```\n\nهنا React هي التي تتحكم بقيمة الـ Input من خلال State.  \nلذلك يسمى: **Controlled Component = مكوّن متحكم به**.  \nومصدر الحقيقة (Single Source of Truth) هو: **الـ State هي مصدر الحقيقة الوحيد.**\n\n---\n\n## 7. onChange وحدث التغيير\n\n```javascript\nconst handleNoteChange = (event) => {\n  setNewNote(event.target.value)\n}\n```\n\nعند ربطه بالحقل:\n```jsx\n<input\n  value={newNote}\n  onChange={handleNoteChange}\n/>\n```\n\n**التدفق الكامل (Data Flow):**\n```text\nالمستخدم يكتب ──► onChange ──► handleNoteChange ──► event.target.value ──► setNewNote(...) ──► تتغير State ──► Re-render ──► Input يعرض القيمة الجديدة\n```\n\n### معنى event.target.value:\n`event.target.value` تعني: القيمة النصية الحالية الموجودة داخل حقل الإدخال.\n\n---\n\n## 8. Form + onSubmit — التعامل مع النماذج\n\n```jsx\n<form onSubmit={addNote}>\n```\n\nوعند الضغط على Submit أو زر الإرسال، تُستدعى الدالة `addNote` وداخلها:\n```javascript\nevent.preventDefault()\n```\n\n### ماذا تفعل preventDefault()؟\nتمنع السلوك الافتراضي للـ Form، وهو: **إعادة تحميل الصفحة (Page Reload)**.\n\n---\n\n## 9. إضافة عنصر جديد إلى State Array\n\nلدينا:\n```javascript\nconst [notes, setNotes] = useState([])\n```\n\nنريد إضافة `noteObject`.\n\n❌ **لا نستخدم التعديل المباشر:**\n```javascript\nnotes.push(noteObject) // ❌ خطأ\n```\n\n✅ **الأفضل (الحفاظ على Immutability):**\n```javascript\nsetNotes(notes.concat(noteObject))\n// أو:\nsetNotes([...notes, noteObject])\n```\n\n---\n\n## 10. تصفية البيانات بـ filter() والشرط الثلاثي\n\nلدينا:\n```javascript\nconst [showAll, setShowAll] = useState(true)\n```\n\n**الشرط:**\n- إذا `showAll === true` ──► اعرض الكل.\n- إذا `showAll === false` ──► اعرض المهم فقط.\n\n```javascript\nconst notesToShow = showAll\n  ? notes\n  : notes.filter(note => note.important)\n```\n\nتستخدم الشرط الثلاثي `condition ? value1 : value2`.\n\n---\n\n## 11. قلب قيمة Boolean — التبديل (Toggle)\n\n```javascript\nsetShowAll(!showAll)\n```\n\nعلامة `!` تعني **NOT** = عكس القيمة المنطقية (`true` ──► `false` | `false` ──► `true`).\n\n---\n\n## 12. json-server — خادم التطوير البسيط\n\nتستخدم المحاضرة `json-server` كخادم Mock API متكامل.\n\n**التثبيت:**\n```bash\nnpm install json-server --save-dev\n```\n\n**ملف البيانات (db.json):**\n```json\n{\n  \"notes\": [\n    {\n      \"id\": \"1\",\n      \"content\": \"HTML سهل\",\n      \"important\": true\n    }\n  ]\n}\n```\n\n**في package.json:**\n```json\n\"scripts\": {\n  \"server\": \"json-server -p 3001 --watch db.json\"\n}\n```\n\nوتصبح البيانات متاحة عبر: `http://localhost:3001/notes`\n\n---\n\n## 13. Axios — مكتبة جلب البيانات\n\nAxios مكتبة لإرسال طلبات HTTP وجلب البيانات من الخادم.\n\n**التثبيت والاستيراد:**\n```javascript\nimport axios from 'axios'\n```\n\n**طلب GET (جلب البيانات):**\n```javascript\naxios\n  .get('http://localhost:3001/notes')\n  .then(response => {\n    console.log(response.data)\n  })\n```\n\n📌 **انتبه:** البيانات الفعلية المرجعة من السيرفر توجد دائماً داخل `response.data` وليس `response` المباشر.\n\n---\n\n## 14. POST — إرسال بيانات جديدة\n\n```javascript\naxios.post(\n  'http://localhost:3001/notes',\n  newNote\n)\n```\n- **GET:** جلب البيانات\n- **POST:** إرسال/إضافة بيانات جديدة\n\n---\n\n## 15. useEffect — Hook التأثيرات الجانبية\n\n`useEffect` تُستخدم لتنفيذ Side Effects (مثل جلب البيانات من السيرفر، الاشتراك في أحداث، التعامل مع APIs خارجية).\n\n**مثال جلب البيانات عند التحميل:**\n```javascript\nuseEffect(() => {\n  axios\n    .get('http://localhost:3001/notes')\n    .then(response => {\n      setNotes(response.data)\n    })\n}, [])\n```\n\n---\n\n## 16. أهمية مصفوفة الاعتماديات [] في useEffect (فخ الامتحان)\n\n1. **`useEffect(..., [])`** ──► المصفوفة الفارغة تعني: **نفّذ الـ Effect مرة واحدة فقط عند تحميل المكون (Mounting).**\n2. **`useEffect(..., [value])`** ──► تنفذ عند التحميل + كلما تغيرت القيمة `value`.\n3. **`useEffect(...)` بدون مصفوفة:** تنفذ بعد كل Re-render.\n\n### 🚨 أصل فخ الامتحان (حلقة لا نهائية Infinite Loop):\n```javascript\nuseEffect(() => {\n  axios.get('http://localhost:3001/notes')\n    .then(response => {\n      setNotes(response.data) // ❌ يسبب Re-render -> يستدعي useEffect -> يطلب السيرفر -> يغير State -> Re-render إلى ما لا نهاية!\n    })\n})\n```\n**الحل:** وضع المصفوفة الفارغة `[]` كوسيط ثانٍ دائماً لجلب البيانات التمهيدي!\n\n---\n\n## 17. Axios + Promise Chaining\n\n`axios.get()` تعيد `Promise` ولذلك يمكن تسلسل المعالجة:\n\n```javascript\naxios\n  .get('/notes')\n  .then(response => response.data)\n  .then(notes => {\n    console.log(notes)\n  })\n  .catch(error => {\n    console.error(error)\n  })\n```\n\n---\n\n## 🧠 الخريطة الذهنية الشاملة للمحاضرة\n\n```text\nالمحاضرة الثالثة — عرض البيانات والتعامل مع السيرفر\n│\n├── 1. map() و Key ───────────► map لإنشاء العناصر | key معرّف فريد وثابت (الأفضل id)\n├── 2. Components in map ────► key توضع على المكون المرجَع من map مباشرة\n├── 3. Export / Import ──────► Default: export default (اسم حر) | Named: export const (اسم محدد {})\n├── 4. Controlled Components ──► Input مسند لـ State + onChange (State هي مصدر الحقيقة)\n├── 5. Form & Events ─────────► event.preventDefault() لمنع اعادة تحميل الصفحة عند Form submit\n├── 6. Immutability & State ──► استخدام concat أو Spread بدلاً من push للتعديل\n├── 7. json-server & Axios ───► Axios لطلبات HTTP | البيانات بداخل response.data\n└── 8. useEffect ─────────────► جلب البيانات عند Mount | ⚠️ [] تمنع الحلقة اللانهائية (Infinite Loop)\n```\n",
    questions: lecture3Questions
  },
{
    id: 4,
    title: "المحاضرة الرابعة",
    subtitle: "هندسة البرمجيات، نمط MVC/MVVM، CRUD، وExpress JS",
    summary: "دراسة مستويات التصميم المعماري (Architecture, Design, Patterns, Idioms)، أنماط MVC و MVVM والتدفق أحادي الاتجاه، عمليات CRUD مع Axios و Service Layer، مفاهيم REST و Richardson Model، وقيود الشبكة والأمن (SOP, CORS) ودراسة Express JS و Middleware.",
    theoryContent: "# 📘 شرح المحاضرة الرابعة — CRUD + REST + CSS + Middleware + Security + Node.js/Express\n\n---\n\n## 1. مقدمة المحاضرة والتكامل بين الواجهة والخلفية\n\nتسلسل بناء التطبيقات الحديثة:\n```text\nReact Frontend ──► Axios ──► REST API ──► Express / Node.js ──► Data\n```\n\nبالإضافة لمفاهيم الهندسة المعمارية (Software Architecture)، تنسيقات CSS، البرمجيات الوسيطة (Middleware)، الأمن والسلامة (Security)، الأداء والتوسع (Performance & Scalability).\n\n---\n\n## 2. عمليات البيانات الأساسية (CRUD) ومقابلاتها في HTTP\n\n| الحرف | العملية | المعنى | فعل HTTP |\n| :---: | :---: | :---: | :---: |\n| **C** | **Create** | إنشاء بيانات جديدة | `POST` |\n| **R** | **Read** | قراءة / جلب البيانات | `GET` |\n| **U** | **Update** | تحديث البيانات الحالية | `PUT` / `PATCH` |\n| **D** | **Delete** | حذف البيانات | `DELETE` |\n\n**ملخص حفظ سريع:**\n- `POST` ──► أضف\n- `GET` ──► اقرأ\n- `PUT` ──► حدّث\n- `DELETE` ──► احذف\n\n---\n\n## 3. عملية POST — إنشاء بيانات جديدة في Frontend\n\n```javascript\nconst addNote = (event) => {\n  event.preventDefault()\n\n  const noteObject = {\n    content: newNote,\n    important: Math.random() < 0.5\n  }\n\n  axios\n    .post('http://localhost:3001/notes', noteObject)\n    .then(response => {\n      setNotes(notes.concat(response.data))\n      setNewNote('')\n    })\n}\n```\n\n**خطوات العملية:**\n1. المستخدم يكتب في حقل الإدخال وتلتقطه `newNote`.\n2. إنشاء الكائن `noteObject`.\n3. إرسال الكائن للخادم عبر `axios.post()`.\n4. الخادم يقوم بحفظ البيانات وإنشاء `id` فريد تلقائياً.\n5. الخادم يعيد الكائن كاملاً مضافاً إليه `id` داخل `response.data`.\n6. نحدّث الـ State بدمج `response.data` بواسطة `concat()`.\n\n---\n\n## 4. عملية PUT — تحديث البيانات\n\n```javascript\nconst note = notes.find(n => n.id === id)\n\nconst changedNote = {\n  ...note,\n  important: !note.important\n}\n\naxios.put(\n  `http://localhost:3001/notes/${id}`,\n  changedNote\n)\n```\n\n**ملاحظات مهمة:**\n- `...note` تقوم بنسخ جميع خصائص الملاحظة القديمة.\n- `important: !note.important` تبدل الحالة المنطقية.\n- استخدام Template Literal `` `http://localhost:3001/notes/${id}` `` لتحديد المورد بدقة حسب الـ ID.\n\n---\n\n## 5. تحديث الـ State بعد طلب PUT\n\n```javascript\nsetNotes(\n  notes.map(n =>\n    n.id !== id ? n : response.data\n  )\n)\n```\n\n**طريقة العمل:**\n- يمر `map` على جميع العناصر.\n- إذا كان `id` الملاحظة مختلفاً عن `id` المعدل ──► تترك كما هي `n`.\n- إذا كان `id` متطابقاً ──► تُستبدل بالنسخة المرجعة المحدثة من الخادم `response.data`.\n\n---\n\n## 6. عملية DELETE — الحذف\n\n```javascript\naxios.delete(\n  `http://localhost:3001/notes/${id}`\n)\n.then(() => {\n  setNotes(\n    notes.filter(n => n.id !== id)\n  )\n})\n```\n\n**الربط البرمجي المهم:**\n- **PUT (التحديث)** ──► نستخدم معها `map()` لاستبدال العنصر.\n- **DELETE (الحذف)** ──► نستخدم معها `filter()` لاستبعاد العنصر من المصفوفة.\n\n---\n\n## 7. فصل وحدة الخدمات (Service Module)\n\nبدلاً من جعل المكونات تتعامل مع `axios` مباشرة، نفصل جلب البيانات في ملف مستقل (مثل `src/services/notes.js`):\n\n```text\nComponent ──► Service Module ──► Axios ──► Server\n```\n\n```javascript\n// src/services/notes.js\nimport axios from 'axios'\nconst baseUrl = 'http://localhost:3001/notes'\n\nconst getAll = () => {\n  return axios.get(baseUrl).then(response => response.data)\n}\n\nconst create = newObject => {\n  return axios.post(baseUrl, newObject).then(response => response.data)\n}\n\nconst update = (id, newObject) => {\n  return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)\n}\n\nexport default { getAll, create, update }\n```\n\n**الهدف المباشر:** تطبيق مبدأ فصل الاهتمامات (**Separation of Concerns**)، مما يسهل الصيانة والتطوير وإعادة الاستخدام والاختبار.\n\n---\n\n## 8. استخدام Service داخل useEffect\n\n```javascript\nuseEffect(() => {\n  noteService.getAll()\n    .then(initialNotes => {\n      setNotes(initialNotes)\n    })\n}, [])\n```\n\n---\n\n## 9. مكون التنبيهات (Notification Component)\n\n```jsx\nconst Notification = ({ message, type }) => {\n  if (message === null) return null\n\n  const style = {\n    color: type === 'error' ? 'red' : 'green',\n    background: 'lightgrey',\n    padding: '10px',\n    borderRadius: '5px'\n  }\n\n  return (\n    <div style={style}>\n      {message}\n    </div>\n  )\n}\n```\n\n- شرط `if (message === null) return null;` يمنع عرض أي شيء عندما تكون الرسالة فارغة.\n- تغيير لون النص بناءً على نوع الرسالة (`error` ──► أحمر، وغير ذلك ──► أخضر).\n\n---\n\n## 10. مستويات الهندسة المعمارية للبرمجيات (Software Architecture)\n\n- **Architecture:** تصف الصورة الكبيرة وهيكل النظام ككل (مثل: Monolith, Microservices, Serverless).\n- **Design:** تصف كيفية تنظيم المكونات الداخلية وتوزيع المسؤوليات (مثل: MVC, MVVM, Clean Architecture).\n- **Design Patterns:** حلول معمارية مجربة لمشاكل تصميمية متكررة (مثل: Strategy, Factory, Observer, Chain of Responsibility).\n- **Idioms:** أساليب وأنماط كتابة خاصة بلغة برمجة معينة (مثل: Destructuring, Closures في JavaScript).\n\n---\n\n## 11. النمط المعماري MVC\n\nيتكون من ثلاثة أجزاء رئيسية:\n- **Model:** مسؤول عن البيانات وقواعد العمل (Business Logic).\n- **View:** مسؤول عن تقديم وعرض الواجهة للمستخدم (Presentation).\n- **Controller:** يستقبل الأحداث والمدخلات من View وينسق التحديثات بين Model و View.\n\n---\n\n## 12. النمط المعماري MVVM والتدفق الأحادي (Unidirectional)\n\n- **MVVM (Model-View-ViewModel):** يعتمد بشكل أساسي على ربط البيانات الثنائي (**Two-way Data Binding**)، وشائع في أطر عمل مثل Angular و Vue.\n- **Unidirectional Architecture (التدفق أحادي الاتجاه):** متبع في React / Redux حيث تسير البيانات دائماً في اتجاه واحد محدد:\n  ```text\n  Action ──► Store / State ──► View ──► Action\n  ```\n\n---\n\n## 13. مبدأ فصل الاهتمامات (Separation of Concerns)\n\nتقسيم البرنامج إلى أجزاء مستقلة، بحيث يتولى كل جزء مسؤولية واحدة محددة:\n- **Presentation Layer:** مكونات واجهة المستخدم (React Components).\n- **Business Logic Layer:** المعالجات والحسابات (Hooks, Utils).\n- **Data Access Layer:** خدمات جلب البيانات والربط بالخادم (Services, APIs).\n- **Infrastructure Layer:** الإعدادات والبرمجيات الوسيطة (Config, Middleware).\n\n---\n\n## 14. النمط المعماري REST وقيوده الستة\n\n**REST** (Representational State Transfer) هو نمط معماري لتصميم خدمات الويب الـ Web APIs (ليس بروتوكولاً ولا معياراً صلباً بل مجموعة قيود معمارية).\n\n### قيود REST الستة (REST Constraints):\n1. **Client-Server:** فصل واجهة المستخدم عن تخزين البيانات.\n2. **Stateless:** الخادم لا يحفظ أي حالة للعميل بين الطلبات؛ كل طلب يحتوي كافة البيانات اللازمة لمعالجته.\n3. **Cacheable:** إمكانية تحديد القابلية للتخزين المؤقت للاستجابات لرفع الكفاءة.\n4. **Uniform Interface:** واجهة موحدة للتعامل مع كافة الموارد.\n5. **Layered System:** إمكانية وجود طبقات وسيطة (مثل Gateways, Proxies, Load Balancers).\n6. **Code-on-Demand (اختياري):** إمكانية إرسال كود تنفيذي للعميل (مثل JavaScript) لتشغيله.\n\n---\n\n## 15. نموذج نضج ريتشاردسون (Richardson Maturity Model)\n\nيقيم مدى التزام API بمبادئ REST عبر 4 مستويات:\n- **Level 0 (Swamp of POX):** استخدام نقطة وصول واحدة واستخدام POST لكافة العمليات.\n- **Level 1 (Resources):** استخدام مسارات منفصلة ومحددة للموارد (مثل `/notes`, `/users`).\n- **Level 2 (HTTP Verbs):** استخدام الأفعال القياسية الصحيحة لـ HTTP (`GET`, `POST`, `PUT`, `DELETE`).\n- **Level 3 (HATEOAS):** تضمين روابط داخل الاستجابة تدل العميل على العمليات المتاحة التالية (Hypermedia Controls).\n\n---\n\n## 16. قواعد تصميم المسارات (REST URL Design)\n\n- **الأسماء بدلاً من الأفعال:** `/users` بدلاً من `/getUsers`.\n- **استخدام الجمع للمجموعات:** `/users`.\n- **تحديد العنصر بـ ID:** `/users/5` بدلاً من `/users?id=5`.\n- **العلاقات الهرمية:** `/users/5/posts` بدلاً من `/getUserPosts?userId=5`.\n- **استخدام الفعل المناسب في الطلب:** `DELETE /users/5` بدلاً من `POST /deleteUser`.\n\n---\n\n## 17. تنسيق CSS في React\n\n### 1) External CSS (الملفات الخارجية)\nتُكتب الأنماط في ملف `.css` عادي وتُستورد:\n```javascript\nimport './index.css'\n```\n\n### 2) Inline Styles (الأنماط المباشرة)\nتُكتب ككائن JavaScript باستخدام **camelCase** للخصائص:\n```jsx\nconst style = {\n  color: 'grey',\n  fontSize: 14, // تُعامل كـ Pixels تلقائياً (14px)\n  fontStyle: 'italic'\n}\n\n<div style={style}>محتوى</div>\n```\n\n---\n\n## 18. البرمجيات الوسيطة (Middleware) في Express\n\nالبرمجية الوسيطة دالة تمر من خلالها طلبات HTTP قبل وصولها للـ Route Handler النهائي. وتعتمد على نمط **Chain of Responsibility**.\n\n```javascript\nconst requestLogger = (request, response, next) => {\n  console.log('Method:', request.method)\n  console.log('Path:', request.path)\n  console.log('Body:', request.body)\n  next() // نقل التحكم للبرمجية الوسيطة التالية\n}\n\napp.use(requestLogger)\n```\n> ⚠️ **تنبيه:** عدم استدعاء `next()` يؤدي لمعالجة معلقة (Hanging Request) وعدم وصول الطلب لوجهته!\n\n---\n\n## 19. أمن تطبيقات الويب والـ OWASP Top 10\n\nأبرز المخاطر الأمنية حسب OWASP:\n- **Broken Access Control:** خلل في صلاحيات الوصول.\n- **Cryptographic Failures:** ضعف التشفير.\n- **Injection:** ثغرات الحقن (مثل SQL Injection).\n- **Security Misconfiguration:** الإعدادات الأمنية الخاطئة.\n- **SSRF (Server-Side Request Forgery).**\n\n---\n\n## 20. سياسة نفس الأصل (Same-Origin Policy - SOP) و CORS\n\nيتحدد الأصل (**Origin**) بثلاثية: `Protocol + Domain + Port`\n- `http://localhost:3000` و `http://localhost:3001` يعتبران أصلين مختلفين لاختلاف الـ **Port**.\n\n### CORS (Cross-Origin Resource Sharing):\nآلية تسمح للخادم بالسماح للطلبات الآتية من أصول مختلفة عبر رأس `Access-Control-Allow-Origin`.\n- **Preflight Request:** يرسل المتصفح طلب أولي بنوع `OPTIONS` للتحقق من السماح بالعمليات غير البسيطة مثل `PUT` أو `DELETE`.\n\n---\n\n## 21. أداء النظم والتوسع (Performance & Scalability)\n\n### قانون أمضال (Amdahl's Law):\nيحسب الحد الأقصى للتسريع الممكن عند موازاة النظام:\n$\\text{Speedup} = \\frac{1}{S + \\frac{P}{N}}$\nحيث $S$ هو الجزء التسلسلي غير القابل للموازاة، $P$ الجزء القابل للموازاة ($P = 1 - S$)، و $N$ عدد المعالجات.\n\n### التوسع العمودي مقابل الأفقي:\n- **Vertical Scaling (عمودي):** زيادة قدرات الخادم الحالي (RAM / CPU). بسيط ولكنه محدود ومكلف.\n- **Horizontal Scaling (أفقي):** إضافة خوادم جديدة وتوزيع الأحمال عبر Load Balancer. يوفر اعتمادية وتوسعاً عالياً.\n\n---\n\n## 22. Node.js وإطار العمل Express\n\n**Node.js** هو بيئة تشغيل JavaScript خارج المتصفح مبنية على محرك V8.\n\n### إنشاء سيرفر Express أساسي:\n```javascript\nconst express = require('express')\nconst app = express()\n\n// تحليل أجسام الطلبات المكتوبة بـ JSON\napp.use(express.json())\n\n// Route لجلب البيانات\napp.get('/api/notes', (request, response) => {\n  response.json(notes)\n})\n\n// Route لجلب عنصر بـ ID\napp.get('/api/notes/:id', (request, response) => {\n  const id = request.params.id\n  const note = notes.find(n => n.id === id)\n\n  if (note) {\n    response.json(note)\n  } else {\n    response.status(404).end()\n  }\n})\n\n// Route لإضافة عنصر جديد\napp.post('/api/notes', (request, response) => {\n  const body = request.body\n\n  if (!body.content) {\n    return response.status(400).json({ error: 'content is required' })\n  }\n\n  const note = {\n    content: body.content,\n    important: body.important || false,\n    id: generateId()\n  }\n\n  notes = notes.concat(note)\n  response.status(201).json(note)\n})\n\n// معالجة المسارات غير المعروفة (تأتي في النهاية)\nconst unknownEndpoint = (request, response) => {\n  response.status(404).send({ error: 'unknown endpoint' })\n}\napp.use(unknownEndpoint)\n```\n\n---\n\n## 23. أرقام حالات الاستجابة (HTTP Status Codes)\n\n- **200 OK:** نجاح الطلب وإعادة البيانات.\n- **201 Created:** تم إنشاء المورد بنجاح (مستخدمة مع `POST`).\n- **204 No Content:** نجاح الطلب مع عدم وجود محتوى في الاستجابة (مستخدمة مع `DELETE`).\n- **400 Bad Request:** طلب خاطئ من العميل (مثل نقص بيانات إجبارية).\n- **404 Not Found:** المورد المطلوب غير موجود.\n\n---\n\n## 🧠 الخريطة الذهنية الشاملة للمحاضرة\n\n```text\nالمحاضرة الرابعة — CRUD + REST + Architecture + Express\n│\n├── 1. CRUD Operations ──────► POST (201 Created) | GET (200) | PUT (map) | DELETE (filter / 204)\n├── 2. Architecture ──────────► MVC (Model/View/Controller) | MVVM (Data Binding) | Unidirectional (React)\n├── 3. REST APIs ─────────────► 6 Constraints | Richardson Maturity Model (L0-L3) | Resource URIs\n├── 4. Styling & Middleware ──► Inline Styles (camelCase) | Middleware (Chain of Responsibility / next())\n├── 5. Security & SOP ────────► Same-Origin Policy (Protocol+Domain+Port) | CORS | Preflight (OPTIONS)\n├── 6. Performance ───────────► Amdahl's Law | Vertical vs Horizontal Scaling\n└── 7. Node.js & Express ─────► express.json() | Params req.params.id | Status Codes (200, 201, 204, 400, 404)\n```\n",
    questions: lecture4Questions
  },
{
    id: 5,
    title: "المحاضرة الخامسة",
    subtitle: "TypeScript & Native React",
    summary: "شرح شامل وتحليلي لـ TypeScript (Type Theory, Subtyping, Generics, Variance, Structural Typing, Utility Types) و Native React (Mobile Architecture, Bridge vs JSI, Layout, Expo, Components, Navigation).",
    theoryContent: "# 📘 شرح المحاضرة الخامسة — TypeScript & Native React\n\n---\n\n## 1. أهداف المحاضرة والمحورين الرئيسيين\n\nتنقسم المحاضرة إلى محورين كبيرين:\n1. **TypeScript:** نظريات الأنواع (Type Theory)، التفرع (Subtyping)، مبدأ Liskov (LSP)، الأنواع العامة (Generics)، التغاير (Variance)، التحقق البنيوي مقابل الاسمي (Structural vs Nominal Typing)، Utility Types، الواجهات (Interfaces)، واستخدام TypeScript مع Express و React.\n2. **Native React & Mobile Computing:** تطوير تطبيقات الهاتف، المقارنة بين الأنواع (Native / Hybrid / Cross-Platform / PWA)، معمارية الجسر مقابل JSI (Bridge vs JSI)، تخطيط شاشات الهاتف (Mobile Layout & dp vs px)، واجهات برمجة المنصة والأذونات (Platform APIs & Permissions)، إطار Expo، المكونات الأساسية، والتحقل بين الشاشات (Navigation).\n\n---\n\n## 2. ما هي TypeScript؟ ولماذا نستخدمها؟\n\nTypeScript هي لغة تضيف الأنواع الثابتة (**Static Types**) فوق JavaScript.\n- **تنبيه مهم:** TypeScript لا تُنفذ مباشرة في المتصفح، بل يتم ترجمتها (**Transpilation**) إلى JavaScript عادي.\n- **المقارنة مع JavaScript:**\n  - **JavaScript:** أنواع ديناميكية (Dynamic Types)، اكتشاف الأخطاء يحدث وقت التشغيل (Runtime).\n  - **TypeScript:** أنواع ثابتة (Static Types)، تساعد المترجم في كشف أخطاء الأنواع أثناء وقت الترجمة (Compile-time).\n- ⚠️ **فخ امتحاني:** TypeScript لا تضمن كشف *كل* الأخطاء قبل التشغيل، بل توفر حماية قوية واكتشافاً مبكراً لأخطاء الأنواع والبنية أثناء التطوير.\n\n---\n\n## 3. نظرية الأنواع (Type Theory) وهرم الأنواع\n\n**Type Theory** هي فرع من المنطق الرياضي وعلوم الحاسوب تهتم بتصنيف القيم والتعبيرات إلى أنواع لمنع العمليات غير الصحيحة (مثل ضرب نص برقم).\n\n### هرم الأنواع في TypeScript:\n```text\n        any / unknown\n             │\n     ┌───────┼────────┐\n     │       │        │\n Primitives Objects Functions\n     │       │        │\n number    Array     (A) → B\n string    Record\n boolean\n```\nكما تحتوي اللغة على أنواع ختامية خاصة مثل `never` (نوع يمثل القيمة التي لا تحدث أبداً) و `void` (غياب القيمة المرجعة من الدالة).\n\n---\n\n## 4. النوع الفرعي (Subtyping) ومبدأ استبدال ليسكوف (LSP)\n\n- **Subtype (النوع الفرعي):** إذا كانت كل قيمة من $A$ صالحة أيضاً كقيمة من $B$، نقول $A <: B$ ($A$ نوع فرعي من $B$).\n  - مثال: `Student <: Person` (طالب هو نوع أكثر تخصصاً من شخص).\n- **Supertype (النوع الفائق):** العكس $Person :> Student$ ($Person$ أكثر عمومية).\n\n### مبدأ استبدال ليسكوف (Liskov Substitution Principle - LSP):\nإذا كان $S$ نوعاً فرعياً من $T$ ($S <: T$)، فيجب أن نستطيع استخدام كائن من النوع $S$ في أي مكان يتوقع فيه البرنامج النوع $T$ دون أن يتأثر سلوك البرنامج أو ينكسر.\n\n---\n\n## 5. أنواع الاتحاد (Union) والتقاطع (Intersection)\n\n- **Union Type (`|`):** يمثل اتحاد الأنواع (أو).\n  ```typescript\n  type Value = string | number // القيمة إما string أو number\n  ```\n- **Intersection Type (`&`):** يمثل تقاطع الأنواع (و).\n  ```typescript\n  type EmployeePerson = Employee & Person // تجمع خصائص الكائنين معاً\n  ```\n\n---\n\n## 6. الأنواع العامة (Generics) وتقييدها (Generic Constraints)\n\nتسمح **Generics** بكتابة كود يعيد الاستخدام مع أنواع مختلفة مع الحفاظ التام على أمان الأنواع (**Type Safety**).\n\n```typescript\n// T هو Type Parameter (معامل نوع)\nfunction identity<T>(arg: T): T {\n  return arg\n}\n\nidentity<string>(\"مرحباً\")\nidentity<number>(42)\n```\n\n### تقييد الأنواع العامة (Generic Constraints):\nنستخدم الكلمة المفتاحية `extends` لفرض شروط على معامل النوع:\n```typescript\nfunction logLength<T extends { length: number }>(arg: T): void {\n  console.log(arg.length) // مسموح لأن T مضمون امتلاكه لخاصية length\n}\n\nlogLength(\"مرحباً\")     // ✅ صحيح (string تنفذ length)\nlogLength([1, 2, 3])   // ✅ صحيح (Array تتضمن length)\n// logLength(42)       // ❌ خطأ (number لا يمتلك length)\n```\n\n---\n\n## 7. التغاير (Variance: Covariance, Contravariance, Invariance)\n\nيحدد التغاير كيفية تأثر علاقة الأنواع الفرعية عند وضع الأنواع داخل نوع مركب (مثل الدوال أو المصفوات):\n\n1. **Covariance (التغاير المشترك):** يحافظ على نفس اتجاه علاقة الأنواع. يرتبط بالـ **Outputs** (المخرجات والقيم المرجعة من الدوال).\n   - إذا كان `Cat <: Animal` فإن `Producer<Cat> <: Producer<Animal>`.\n2. **Contravariance (التغاير العكسي):** يعكس اتجاه علاقة الأنواع. يرتبط بالـ **Inputs** (مدخلات ومعاملات الدوال).\n   - إذا كان `Cat <: Animal` فإن `Consumer<Animal> <: Consumer<Cat>` (الدالة التي تستقبل `Animal` يمكنها التعامل بأمان مع `Cat`).\n3. **Invariance (الثبات):** لا توجد أي علاقة توافق بين النوعين المركبين بغض النظر عن علاقة أصلهما.\n\n---\n\n## 8. التحقق البنيوي (Structural) مقابل الاسمي (Nominal)\n\n- **Structural Typing (التحقق البنيوي):** المتبع في **TypeScript**. التوافق يعتمد على **شكل الكائن وخصائصه (Shape)** وليس اسمه.\n  ```typescript\n  interface Point { x: number; y: number }\n  interface Coordinate { x: number; y: number }\n  \n  const p: Point = { x: 10, y: 20 }\n  const c: Coordinate = p // ✅ مسموح في TypeScript لأن البنية والشكل متطابقان\n  ```\n- **Nominal Typing (التحقق الاسمي):** المتبع في لغات مثل Java و C# و C++. التوافق يعتمد حصراً على **اسم النوع والعلاقة المعلنة صراحة**.\n\n---\n\n## 9. أنواع الأدوات الجاهزة (Utility Types)\n\nتوفر TypeScript أنواعاً جاهزة للتحويلات الشائعة:\n- **`Partial<T>`:** يجعل كل الخصائص في `T` اختيارية (Optional).\n- **`Required<T>`:** يجعل كل الخصائص إجبارية.\n- **`Readonly<T>`:** يجعل كل الخصائص للقراءة فقط (يمنع التعديل المباشر).\n- **`Pick<T, K>`:** يختار مجموعة محددة من الخصائص `K` من النوع `T`.\n- **`Omit<T, K>`:** يحذف مجموعة خصائص `K` من النوع `T` (مفيد لإزالة الحقول الحساسة مثل كلمة المرور).\n- **`Record<K, V>`:** ينشئ كائناً مفاتيحه من النوع `K` وقيمه من النوع `V`.\n\n---\n\n## 10. الاتحادات المميزة (Discriminated Unions)\n\nطريقة نمذجة ممتازة للحالات بناءً على خاصية تمييز مشتركة (**Discriminant**):\n\n```typescript\ntype State =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; error: string }\n```\nتتيح للمترجم التأكد من معالجة جميع الحالات في `switch` وتفادي وجود حالات غير منطقية (مثل `loading: true` و `error: \"failed\"` بنفس الوقت).\n\n---\n\n## 11. Interfaces و Type Aliases و Express & React integration\n\n- **Interface:** تُستخدم لتعريف بنية وشكل الكائن وتدعم التوريث عبر `extends`.\n- **Optional Property (`?`):** تعني أن الخاصية غير إجبارية (مثل `gpa?: number`).\n- **Express Integration:** نستخدم الأنواع `Request` و `Response` المجلوبة من `express` مع استخدام `as` لعمل **Type Assertion**.\n- **React Components:** نحدد نوع الـ Props بـ Interface (مثل `NoteProps`) مع تحديد أنواع التوابع الممررة `(id: number) => void`.\n\n---\n\n## 12. أساليب تطوير تطبيقات الهاتف المحمول (Mobile Architecture)\n\n| الأسلوب | التقنيات | الأداء | الوصول للميزات | المزايا/العيوب |\n| :--- | :--- | :--- | :--- | :--- |\n| **Native** | Swift (iOS), Kotlin (Android) | الأعلى والأفضل | كامل 100% | كود منفصل وتكلفة أعلى |\n| **Cross-Platform** | React Native, Flutter | ممتاز وقريب من الأصلي | معظم الخصائص | كود مشترك وأداء ممتاز |\n| **Hybrid** | Ionic, Cordova (WebView) | متوسط/أقل | عبر Plugins | كود واحد يعرض داخل WebView |\n| **PWA** | Web Technologies | محدود | محدود | لا يحتاج متجر للتثبيت |\n\n---\n\n## 13. الفرق بين React Web و React Native\n\n| React Web | React Native |\n| :--- | :--- |\n| متصفح الويب (DOM) | شاشة الهاتف (Native Controls) |\n| `<div />` | `<View />` |\n| `<p />`, `<span />` | `<Text />` |\n| CSS عادي / Tailwind | `StyleSheet` كائن JavaScript |\n| React Router | React Navigation |\n\n⚠️ **قاعدة إجبارية:** في React Native، لا يجوز استخدام `div` أو `p` إطلاقاً، وتوضع جميع النصوص حتماً داخل المكون `<Text />`.\n\n---\n\n## 14. بنية الجسر مقابل JSI في React Native (Bridge vs JSI)\n\n- **البنية القديمة (JSON Bridge):**\n  - الاتصال بين JavaScript والـ Native يتم عبر **Bridge** غير متزامن (**Asynchronous**).\n  - يتم تحويل البيانات إلى JSON (**Serialization / Deserialization**)، مما يسبب كلفة إضافية (Overhead) وقد يشكل عنق زجاجة عند تكرار الرسائل.\n- **البنية الجديدة (JSI - JavaScript Interface):**\n  - تتيح للـ JavaScript الاستدعاء المباشر لوظائف الـ Native / C++ دون الحاجة لتحويل البيانات إلى JSON.\n  - تدعم الاستدعاء المتزامن (**Synchronous**) والتشاركي المباشر للذاكرة، مما يوفر أداءً أسرع بكثير.\n\n---\n\n## 15. تخطيط الواجهات و dp vs px\n\n- **px (Pixel):** بكسل شاشة فيزيائي، يختلف حجمه الملموس باختلاف كثافة الشاشة.\n- **dp (Density-independent Pixel):** وحدة قياس مستقلة عن كثافة الشاشة لضمان ظهور العناصر بحجم متناسق بصرية عبر أجهزة الهاتف المختلفة.\n- **العلاقة:** $\\text{px} = \\text{dp} \\times \\text{Density}$\n  - `mdpi` ($\\times 1$), `hdpi` ($\\times 1.5$), `xhdpi` ($\\times 2$), `xxhdpi` ($\\times 3$), `xxxhdpi` ($\\times 4$).\n\n---\n\n## 16. المكونات الأساسية وتصفح الشاشات (Expo, Components & Navigation)\n\n- **Expo:** منصة وأداة تسهل إنشاء وتطوير وتجربة تطبيقات React Native.\n- **المكونات الأساسية:**\n  - `View` (حاوية)، `Text` (عرض نص)، `TextInput` (حقل إدخال)، `Pressable` (عنصر قابل للضغط)، `FlatList` (عرض القوائم بفاعلية)، `StyleSheet` (الأنماط).\n- **`FlatList`:** تتطلب خصائص أساسية: `data` (البيانات)، `keyExtractor` (استخراج المفتاح الفريد لكل عنصر)، و `renderItem` (دالة عرض كل عنصر).\n- **Navigation:** نستخدم مكتبة `@react-navigation/native` مع `NavigationContainer` وموجهات مثل `createBottomTabNavigator` للتنقل بين الشاشات.\n\n---\n\n## 🧠 الخريطة الذهنية الشاملة للمحاضرة\n\n```text\nالمحاضرة الخامسة — TypeScript & Native React\n│\n├── 1. TypeScript Foundations ──► Static Types | Transpilation | Type Theory | Subtyping & LSP\n├── 2. Generics & Variance ──────► Generic <T extends Base> | Covariance (Output) | Contravariance (Input)\n├── 3. Type Checking ───────────► Structural (Shape / TS) vs Nominal (Name / Java)\n├── 4. Utility Types ───────────► Partial | Required | Readonly | Pick | Omit | Record\n├── 5. Express & React TS ──────► Request / Response types | Props Typing | useState<T>()\n├── 6. Mobile Architectures ────► Native | Cross-Platform (RN) | Hybrid (WebView) | PWA\n├── 7. Bridge vs JSI ───────────► Bridge (JSON, Async, Overhead) vs JSI (Direct, Sync/Async, Faster)\n└── 8. React Native Essentials ─► View & Text | dp vs px | FlatList | StyleSheet | React Navigation\n```\n",
    questions: lecture5Questions
  },
{
    id: 6,
    title: "المحاضرة السادسة",
    subtitle: "تنظيم الخلفية واختبارات البرمجيات والتشفير والمصادقة بـ JWT",
    summary: "شرح كامل وتحليلي لهيكلة مشروعات Node.js/Express، واختبارات البرمجيات (TDD, FIRST, Vitest, Supertest)، وتجزئة كلمات المرور بـ bcrypt، والمصادقة باستخدام JWT وحماية المسارات بـ Middleware و Populate.",
    theoryContent: `
# المحاضرة السادسة: بنية الخلفية واختبارات البرمجيات والمصادقة بـ JWT

## 1. أهداف المحاضرة الأساسية
ترتكز المحاضرة السادسة على ثلاثة محاور رئيسية متكاملة:
- **تنظيم بنية تطبيق الخلفية بشكل احترافي:** تقسيم المشروع إلى Controllers, Models, Utils, Tests.
- **كتابة اختبارات الوحدة والتكامل:** استخدام Vitest و Supertest لضمان جودة واستقرار الخادم.
- **إدارة المستخدمين والمصادقة:** تجزئة كلمات المرور بـ bcrypt، والمصادقة عبر JWT، وحماية المسارات المخصصة.

---

## 2. مفاهيم اختبار البرمجيات (Software Testing)
- **التعريف:** تقييم النظام للتحقق من تلبيته للمتطلبات المحددة واكتشاف الفروق بين النتيجة الفعلية والمتوقعة.
- **مثال:** التأكد من أن \`reverse('hello')\` تُرجع \`'olleh'\` بدقة.

---

## 3. هرم الاختبارات (Testing Pyramid)
يقسم هرم الاختبارات الشمولية والتكلفة إلى ثلاثة مستويات:
- **Unit Tests (قاعدة الهرم):** تختبر دالة/وحدة واحدة بشكل منعزل، تكون كثيرة جداً، سريعة، ورخيصة.
- **Integration Tests (وسط الهرم):** تختبر تفاعل وحدتين أو أكثر معاً، سرعتها وتكلفتها متوسطة.
- **E2E Tests (قمة الهرم):** تختبر مسار النظام بالكامل من المنظور النهائي، تكون قليلة، بطيئة، ومكلفة.
- **Acceptance Testing:** يركز على معايير قبول متطلبات العمل التجاري من منظور العميل.

---

## 4. منهجيات الاختبار
- **TDD (Test-Driven Development):** التطوير الموجه بالاختبارات عبر دورة **RED -> GREEN -> REFACTOR**.
  - **RED:** كتابة اختبار يفشل أولاً.
  - **GREEN:** كتابة أقل كود ممكن يجعل الاختبار ينجح.
  - **REFACTOR:** تحسين بنية الكود وتنظيفه مع الحفاظ على نجاح الاختبارات.
- **BDD (Behavior-Driven Development):** صياغة اختبارات السلوك بلغة طبيعية مفهومة لجميع أصحاب المصلحة.
- **ATDD (Acceptance Test-Driven Development):** البدء بتعريف معايير قبول العمل أولاً.

---

## 5. مبادئ الاختبار الجيد (FIRST)
- **Fast:** الاختبارات يجب أن تكون سريعة التنفيذ.
- **Independent:** كل اختبار مستقل ولا يعتمد على ترتيب تنفيذ الاختبارات الأخرى.
- **Repeatable:** يعطي نفس النتيجة عند التكرار في أي بيئة.
- **Self-validating:** النتيجة واضحة بذاتها (Pass / Fail) دون حاجة للتدخل اليدوي.
- **Timely:** يكتب الاختبار مع الكود أو قبله مباشرة.

---

## 6. تغطية الكود (Test Coverage)
- **Statement Coverage:** نسبة الأسطر المنفذة أثناء الاختبار.
- **Branch Coverage:** نسبة الفروع الشرطية (if/else) المخُتبرة.
- **Function / Path Coverage:** نسبة الدوال والمسارات المستدعاة.
- **تنبيه هام:** الوصول إلى 100% Coverage لا يعني بالضرورة أن الكود خالٍ تماماً من الأخطاء والحالات الحدية (Edge Cases).

---

## 7. أساسيات التشفير والدوال أحادية الاتجاه
- **Symmetric Encryption:** مفتاح موحد للتشفير وفك التشفير (مثل AES, DES, ChaCha20).
- **Asymmetric Encryption:** زوج من المفاتيح: مفتاح عام Public ومفتاح خاص Private (مثل RSA, ECC, Ed25519).
- **Hashing (التجزئة):** دالة أحادية الاتجاه (One-way) تحول البيانات لبصمة رقمية ثابتة لا يمكن عكسها لاسترجاع النص الأصلي (مثل SHA-256, bcrypt, Argon2).

---

## 8. خصائص دالة التجزئة Hashing الجيدة
- **Deterministic:** نفس المدخل يعطي نفس المخرج دائماً.
- **Preimage Resistance:** صعوبة حساب المدخل الأصلي انطلاقاً من الـ Hash.
- **Collision Resistance:** صعوبة العثور على مدخلين مختلفين ينتجان نفس الـ Hash.
- **Avalanche Effect:** تغيير بسيط في المدخل يسبب تغييراً جذرياً بالكامل في المخرج.

---

## 9. تجزئة كلمات المرور و Salt و bcrypt
- **لماذا bcrypt بطيئة؟** صُممت لتكون بطيئة عمداً (Intentional Slowness) لرفع تكلفة وقت الهجوم وإحباط هجمات التجريب المكثف (Brute Force).
- **Salt ( الملح ):** قيمة عشوائية فريدة تضاف لكلمة المرور قبل التجزئة لمنع هجمات Rainbow Table وتغيير الـ Hash الناتج حتى لو تكررت كلمة المرور.
- **Cost Factor (saltRounds):** معامل التكلفة يتحكم ببطء التجزئة وتكرار الجولات (القيمة الشائعة 10).
- **Argon2:** خوارزمية حديثة فازت بمسابقة PHC وتوفر أفضل مقاومة لهجمات GPU/ASIC.

---

## 10. بنية مشروع الخلفية الاحترافي
يتكون المشروع المكتمل من:
- **utils/config.js:** جلب متغيرات البيئة ورابط \`TEST_MONGODB_URI\` عند بيئة الاختبار.
- **utils/logger.js:** طباعة الرسائل مع إخفائها أثناء الاختبارات لتقليل الضجيج.
- **controllers/:** مسارات Express والـ Routers (مثل \`notes.js\`, \`users.js\`).
- **models/:** نماذج Mongoose (مثل \`note.js\`, \`user.js\`).
- **tests/:** ملفات الاختبارات (مثل \`note_api.test.js\`).
- **app.js:** تجميع التطبيقات والـ Middlewares دون بدء استماع البورت المباشر.
- **index.js:** تشغيل الخادم والبدء بالاستماع المباشر عبر \`app.listen\`.

---

## 11. الاختبارات بـ Vitest و Supertest
- **Vitest:** أداة اختبار الحديثة والسريعة (\`npm test\` تشغيل مرة واحدة بـ \`vitest run\`، أو \`vitest\` للمراقبة).
- **Supertest:** إجراء طلبات HTTP برمجية واختبار مسارات Express بالكامل (\`supertest(app)\`).
- **beforeEach:** إعادة بناء قاعدة البيانات وتعبئتها ببيانات أولية قبل كل اختبار لضمان الاستقلالية.
- **after:** إغلاق اتصال قاعدة البيانات بأمان بـ \`await mongoose.connection.close()\`.
- **نمط AAA (Arrange - Act - Assert):** إعداد البيئة (Arrange)، تنفيذ الدالة (Act)، والتحقق من النتيجة (Assert).

---

## 12. المصادقة والتفويض والتتبع (AAA in Security)
- **Authentication (المصادقة):** "من أنت؟" (التحقق من الهوية عند تسجيل الدخول).
- **Authorization (التفويض):** "ماذا يسمح لك بفعله؟" (تحديد الصلاحيات للعمليات).
- **Accounting (المحاسبة/التتبع):** "ماذا فعلت؟" (تسجيل سجلات اللوج للنشاطات).

---

## 13. أنماط المصادقة الرئيسية
- **Session-Based:** Stateful، حفظ الجلسة في الخادم ورابطها بـ Cookie للمتصفح.
- **Token-Based JWT:** Stateless، البيانات موثقة بالتوقيع داخل الـ Token، مرنة وممتازة للتوسع.
- **OAuth 2.0:** تفويض طرف ثالث لتسجيل الدخول الاجتماعي.
- **API Keys:** مفاتيح بسيطة للمصادقة بين الخدمات (M2M).

---

## 14. بنية JWT (JSON Web Token)
تتكون من ثلاثة أجزاء تفصل نقطة بينها (**Header.Payload.Signature**):
- **Header:** يحدد نوع الرمز وخوارزمية التوقيع (مثل HS256).
- **Payload:** يحمل البيانات والمطالبات Claims:
  - **Registered Claims:** مثل \`iss\` (المصدر), \`sub\` (الموضوع), \`exp\` (تاريخ الانتهاء), و \`iat\` (تاريخ الإنشاء).
  - **تنبيه أمني:** الـ Payload مرمز بـ Base64Url وليس مشفراً، لذا يُحظر وضع كلمات السر فيه.
- **Signature:** التوقيع الرقمي لمنع التلاعب وتأكيد صحة الـ Token بمفتاح \`process.env.SECRET\`.

---

## 15. الاعتمادية وتوافر النظام (Availability)
- **MTBF (Mean Time Between Failures):** متوسط الوقت بين الأعطال.
- **MTTR (Mean Time To Recovery):** متوسط وقت الاستعادة والتعافي.
- **قانون التوافرية:** \`Availability = MTBF / (MTBF + MTTR)\`.
- **Nines of Availability:**
  - **99%:** توقف مسموح ~ 3.65 أيام في السنة.
  - **99.9% (Three Nines):** توقف مسموح ~ 8.77 ساعات.
  - **99.999% (Five Nines):** توقف مسموح ~ 5.26 دقائق فقط سنوياً.

---

## 16. نموذج المستخدم والتسجيل والدخول (User & Auth Flow)
- **User Schema:** اسم مستخدم فريد ومطلوب، و كلمة مرور مجزأة \`passwordHash\`، ومصفوفة مراجع للملاحظات \`notes\`.
- **toJSON Transform:** تجريد ومسح \`passwordHash\` و \`__v\` واستبدال \`_id\` بـ \`id\` عند إرجاع JSON.
- **Register:** التحقق من كلمة المرور (طول >= 3) وتجزئتها عبر \`bcrypt.hash(password, 10)\`.
- **Login:** جلب المستخدم بـ \`findOne\` ثم الفحص بـ \`bcrypt.compare\` وإنشاء توكن JWT مع \`expiresIn: '1h'\`.

---

## 17. حماية المسارات و Bearer Token و Populate
- **إرسال التوكن:** العميل يرسل التوكن في ترويسة الطلب: \`Authorization: Bearer <TOKEN>\`.
- **استخراج التوكن:** \`request.get('authorization').replace('Bearer ', '')\`.
- **التحقق:** \`jwt.verify(token, process.env.SECRET)\` وتمرير المستخدم المنقّب إلى \`request.user\`.
- **ربط البيانات:** إسناد \`user._id\` للملاحظة وتذييل الملاحظة بمصفوفة \`user.notes\`.
- **.populate('user', { username: 1, name: 1 }):** دالة Mongoose لاستبدال المعرف المرجعي \`ObjectId\` بالبيانات الحقيقية للمستخدم عند الاستعلام.
`,
    questions: lecture6Questions
  },
{
    id: 7,
    title: "المحاضرة السابعة",
    subtitle: "تقنية GraphQL ومعمارية الاستعلامات المتقدمة (GraphQL & Apollo)",
    summary: "دراسة شاملة لتقنية GraphQL، الفروقات الهيكلية مع REST، نظريات الرسوم البيانية DAG، بناء المخططات Schemas و Types، حل مشكلة N+1 بواسطة DataLoader، استراتيجيات Normalized Cache، و معمارية API Gateway و Apollo Federation.",
    theoryContent: `
# المحاضرة السابعة: تقنية GraphQL ومعمارية الاستعلامات (GraphQL & Apollo)

---

## 1. الصورة الكبيرة والأهداف المفتاحية (Objectives & Overview)
تُعد تقنية **GraphQL** تحولاً محورياً في كيفية تصميم واستعلام واجهات برمجة التطبيقات (APIs). بينما كانت معمارية REST تُركز على الموارد والـ Endpoints المحددة من قِبل الخادم، جاءت GraphQL لتمكين العميل من تحديد شكل ومحتوى البيانات المطلوبة بدقة متناهية.

### الأفكار الست الأساسية لمحاضرة GraphQL:
1. **GraphQL Concept:** الفهم الجوهري لـ GraphQL والفرق بينه وبين REST وكيفية تجنب المشاكل التقليدية.
2. **Apollo Server:** كيفية بناء خادم GraphQL، تعريف الـ \`typeDefs\` والـ \`resolvers\`.
3. **Apollo Client:** كيفية ربط تطبيقات React بـ GraphQL وإدارة الحالة والتكشين الذكي.
4. **Subscriptions:** استقبال التحديثات اللحظية المباشرة عبر بروتوكول WebSocket.
5. **Fragments:** إعادة استخدام أجزاء من الحقول والمخططات لمنع تكرار الكود المكتوب.
6. **Theoretical Concepts:** المفاهيم النظرية المتقدمة مثل مشكلة N+1، أداة DataLoader، الذاكرة المؤقتة المنظمة (Normalized Cache)، ونظرية الرسوم البيانية (DAG).

> 💡 **معلومة تاريخية:** طُورت GraphQL بواسطة شركة **Facebook (Meta)** عام 2012 لتلبية متطلبات تطبيق الهواتف المحمولة المعقدة، وأُطلقت كمشروع مفتوح المصدر (Open Source) عام 2015.

---

## 2. المقارنة الجوهرية: GraphQL مقابل REST (GraphQL vs REST)

### مشكلات معمارية REST التقليدية:
- **Over-fetching (جلب بيانات زائدة):** استقبال حقول لا تحتاجه الواجهة الحالية (مثلاً جلب 50 حقل للمستخدم بينما الواجهة تحتاج اسمه وصورته فقط).
- **Under-fetching (جلب بيانات ناقصة):** اضطرار العميل لإرسال طلبات متعددة لعدة نقاط endpoints للحصول على الكائن والبيانات المترابطة معه (مثل طلب \`/users/1\` ثم \`/users/1/posts\` ثم \`/posts/1/comments\`).
- **تعدد الـ Endpoints:** صعوبة تتبع وصيانة عشرات النقاط المحددة في الخادم.
- **إدارات الإصدارات (Versioning):** الحاجة المكررة لإنشاء نقاط جديدة مثل \`/v1/\` و \`/v2/\` عند تعديل هيكل البيانات.

### حلول GraphQL الفعالة:
- **Endpoint موحد:** يُرسل كل شيء إلى نقطة واحدة (غالباً \`/graphql\`) عبر طلب **HTTP POST** يحمل الاستعلام في الـ Body.
- **Client-Driven Queries:** العميل يحدد بدقة متناهية الحقول المطلوب إرجاعها فقط، مما يلغي تماماً Over-fetching و Under-fetching.
- **تحديث المخطط بدون إصدارات (No Versioning):** يمكن إضافة حقول جديدة للسكيما في أي وقت دون كسر العملاء القدامى، وتوجيه الحقول القديمة عبر الوسم \`@deprecated\`.
- **استعلام متداخل واحد (Nested Queries):** جلب المستخدم والمنشورات والتعليقات في طلب شبكي واحد متكامل.

---

## 3. لغات الاستعلام ونظرية الرسوم البيانية (Graph Theory & DAG)

### أنواع لغات الاستعلام ونماذج البيانات:
| نموذج البيانات (Data Model) | لغة الاستعلام (Query Language) | أمثلة وسياق الاستخدام |
| :--- | :--- | :--- |
| **Relational (علائقي)** | **SQL** | PostgreSQL, MySQL, SQLite |
| **Tree / XML (شجري)** | **XQuery / XPath** | ملفات XML والمستندات الهيكلية |
| **Document (مستندي)** | **MQL** | MongoDB, CouchDB |
| **Graph (رسومي)** | **GraphQL / Cypher** | GraphQL Schemas, Neo4j |

### المفهوم الرياضي للرسم البياني (Graph):
يتكون الرسم البياني رياضياً من العقد والحواف:
$$G = (V, E)$$
- **$V$ (Vertices / Nodes):** العقد التي تمثل الكيانات أو العناصر.
- **$E$ (Edges / Links):** الحواف التي تمثل العلاقات والروابط بين العقد.
- **Directed vs Undirected:** الرسم الموجه تكون الحافة فيه باتجاه محدد ($A \rightarrow B$)، أما غير الموجه فتكون العلاقة فيه تبادلية.
- **DAG (Directed Acyclic Graph):** رسم بياني موجه خالي تماماً من الدورات مغلقة المسار (Cycles)، ويُستخدم لتحديد ترتيب الاعتماديات.
- **Degree:** عدد الحواف المتصلة بعقدة معينة.

### تطبيقات نظرية الرسوم في شاشات وتقنيات الويب:
1. **DOM Tree:** عناصر HTML تشكل عقداً، وعلاقات Ab-Child تمثل حوافاً موجهة.
2. **React Component Tree:** المكونات عقداً وعلاقات الاحتواء حوافاً.
3. **Dependency Graph:** أدوات البناء مثل Vite و Webpack تمثل الملفات كعقد وروابط الاستيراد (\`import\`) كحواف.
4. **Social Networks:** المستخدمون عقد وروابط المتابعة والصداقة حواف.

---

## 4. مخطط GraphQL وأنواعه (GraphQL Schema & Types)

في GraphQL، يمثل الـ **Schema** العقد والدليل الرسمي الموثق الملتزم بين العميل والخادم. تمثل الكيانات (Types) العقد، بينما تمثل الحقول (Fields) الحواف التي تشير لـ Types أخرى.

### الأنواع القياسية الخمس المدمجة (Built-in Scalar Types):
1. **Int:** عدد صحيح 32-bit.
2. **Float:** عدد عشري مكسور.
3. **String:** سلسلة نصية UTF-8.
4. **Boolean:** قيمة منطقية (\`true\` / \`false\`).
5. **ID:** معرف فريد يُعامل كنص غالباً لتحديد الكيانات.

### أشكال الأنواع المركبة (Kinds of Types):
- **Object Type:** كائن يتكون من حقول متعددة لكل منها نوعه الخاص.
- **Enum Type:** قائمة مغلقة ومحددة من القيم المسموح بها فقط.
- **List Type:** قائمة من العناصر تُرمز بوضع النوع بين أقواس مربعة \`[Type]\`.
- **Non-Null Modifier (!):** إجبار الحقل على عدم إرجاع \`null\`.

### قيود الـ Nullability في القوائم:
- \`[String]\`: القائمة نفسها قد تكون \`null\` والعناصر داخلها قد تكون \`null\`.
- \`[String!]\`: العناصر داخل القائمة لا يمكن أن تكون \`null\`، لكن القائمة ككل قد تكون \`null\`.
- \`[String!]!\`: القائمة نفسها إجبارية والعناصر داخلها إجبارية وخالية من \`null\`.

### الأنواع المتقدمة:
- **Interface:** عقد يحدد مجموعة حقول ملزمة يجب على أي Object Type يطبقه توفيرها.
- **Union:** نوع يتيح إرجاع واحد من عدة Object Types محددة دون اشتراط وجود حقول مشتركة بينها.
- **Input Type:** بنية بيانات مخصصة للوسائط والمدخلات (Arguments) المرسلة من العميل في Mutations و Queries.

---

## 5. مشكلة N+1 وأداة DataLoader

### كيف تظهر مشكلة N+1؟
تظهر المشكلة عند طلب قائمة من الكائنات (1 Query)، ثم ينفذ الخادم دالة Resolver منفصلة لجلب البيانات المرتبطة بكل عنصر مفرد ($N$ Queries).
> 📌 **مثال:** استعلام جلب 100 كتاب، وكل كتاب يطلب دالة جلب المؤلف منفصلة، سينتج $1 + 100 = 101$ استعلام لقاعدة البيانات!

### الحل باستخدام DataLoader (Facebook):
تعتمد مكتبة **DataLoader** على تقنيتين رئيسيتين:
1. **Batching (التجميع):** تأجيل الطلبات الفردية الخاطفة وجمع كافة المعرفات (IDs) في طلب واحد مجمع لقاعدة البيانات (مثلاً \`WHERE id IN (1, 2, 3, ...)\`).
2. **Caching (التكشين في نطاق الطلب):** الاحتفاظ بالنتائج المطلوبة خلال نفس الـ Request لمنع التكرار (Per-Request Cache).

### متطلبات دالة الـ Batch في DataLoader:
- يجب أن ترجع \`Promise\` يحمل مصفوفة نتائج **تطابق تماماً حجم وترتيب** مصفوفة المفاتيح (\`Keys\`) الممررة.
- استخدام \`.load(key)\` لطلب عنصر مفرد، و \`.loadMany(keys)\` لطلب مجموعة عناصر.
- تنظيف الذاكرة المؤقتة بـ \`.clear(key)\` عند تعديل عنصر أثناء نفس الطلب.

---

## 6. استراتيجيات التكشين و Normalized Cache

### مستويات التكشين الخمسة:
1. **HTTP Cache:** التكشين التقليدي بصفحات ومتصفحات الويب.
2. **Client Cache:** ذاكرة العميل المؤقتة.
3. **Normalized Cache:** التكشين المنظم في Apollo Client.
4. **Response Cache:** حفظ الرد بالكامل على الخادم (باستخدام Redis).
5. **Query Cache:** حفظ خطة تحليل وتنفيذ الاستعلامات على الخادم (Prepared Statements).

### الذاكرة المنظمة Normalized Cache (InMemoryCache):
يقوم **Apollo Client** بتفكيك الاستجابة القادمة وتخزين كل كيان فريد مرة واحدة بمرجعية محددة تشتق افتراضياً من:
$$\text{Key} = \text{\_\_typename} : \text{id}$$

#### فائدة Normalized Cache:
إذا تغير اسم كائن في إحدى الشاشات، يتم تحديث قيمته في مكان واحد بالـ Cache، فتتحدث تلقائياً كافة المكونات المعتمدة عليه عبر الواجهة دون الحاجة لإعادة طلب الشبكة.

### سياسات الجلب (fetchPolicy):
- **cache-first (الافتراضي):** القراءة من الـ Cache أولاً، وإذا وُجدت لا يُرسل طلب شبكة.
- **network-only:** إهمال الـ Cache وإرسال طلب شبكي دائماً لجلب أحدث البيانات.
- **cache-and-network:** إرجاع بيانات الـ Cache فوراً للسرعة مع إرسال طلب شبكي خلف الكواليس لتحديث الـ Cache والواجهة.

> ⚠️ **تنبيه أمني:** يجب تنفيذ \`client.clearStore()\` عند تسجيل خروج المستخدم لمنع تسرب بياناته المخزنة بالـ Cache إلى مستخدم آخر.

---

## 7. معمارية API Gateway و Apollo Federation

### دور API Gateway:
تُشكل نقطة دخول مركزية موحدة تعزل العملاء عن خدمات النظام الخلفية المصغرة (Microservices)، وتتولى مهام:
- **Routing:** توجيه الطلبات للخدمة المناسبة.
- **Authentication & Security:** تطبيق المصادقة وتقليل مساحة الهجوم (Attack Surface).
- **Rate Limiting:** حماية النظام من الإغراق بالطلبات.
- **Protocol Transformation:** تحويل البروتوكولات بين العميل والخدمات الداخلية (مثل GraphQL إلى gRPC).

### GraphQL Federation (Apollo Federation):
تسمح بتقسيم الـ Schema الضخم عبر عدة خدمات مصغرة مستقلة، مع تقديم Schema واحد موحد للعميل النهائي، مما يجمع مزايا Microservices مع مرونة GraphQL.
`,
    questions: lecture7Questions
  },
{
    id: 8,
    title: "المحاضرة الثامنة",
    subtitle: "TypeScript و React Native",
    summary: "شرح كامل وتحليلي لأساسيات ومفاهيم TypeScript المتقدمة (Generics, Structural Typing, Utility Types, Discriminated Unions) ولغة وبنية تطوير تطبيقات الهواتف الذكية بـ React Native (JSI, Fabric, Flexbox, FlatList, Expo).",
    theoryContent: `
# المحاضرة الثامنة — TypeScript و React Native

TypeScript هي لغة مبنية فوق JavaScript وتضيف **Static Typing**، أي إمكانية تحديد أنواع المتغيرات والقيم والـ Parameters والقيم المرجعة للدوال. يتم فحص الأنواع أثناء التطوير أو الترجمة، وفي النهاية يتم تحويل TypeScript إلى JavaScript.

### مثال أساسي:
\`\`\`typescript
let age: number = 20;
let name: string = "Ali";
let active: boolean = true;
\`\`\`
- \`age\` من نوع \`number\`
- \`name\` من نوع \`string\`
- \`active\` من نوع \`boolean\`

إذا كتبنا \`age = "20";\` فهذا خطأ لأن \`age\` معرف كـ \`number\`.

---

## 1. الأنواع الأساسية (Basic Types)

- **String:** \`let name: string = "Ali";\`
- **Number:** \`let age: number = 20;\`
- **Boolean:** \`let active: boolean = true;\`
- **Null:** \`let x: null = null;\`
- **Undefined:** \`let y: undefined = undefined;\`

> **ملاحظة:** \`null\` تعبر عن قيمة فارغة مقصودة، بينما \`undefined\` تعني أن القيمة غير معرّفة.

### المصفوفات (Arrays)
يمكن تعريف مصفوفة من الأرقام بطريقتين متكافأتين:
\`\`\`typescript
let numbers: number[] = [1, 2, 3];
// أو
let numbers: Array<number> = [1, 2, 3];
\`\`\`
والصيغة العامة هي \`Type[]\` أو \`Array<Type>\`.

### أنواع الكائنات (Object Types)
يمكن تحديد شكل الكائن مباشرة:
\`\`\`typescript
let student: {
  name: string;
  age: number;
  gpa: number;
};
\`\`\`

---

## 2. الدوال (Functions) و void و any

### تعريف أنواع الـ Parameters والقيمة المرجعة:
\`\`\`typescript
const add = (a: number, b: number): number => {
  return a + b;
};
\`\`\`
الصيغة العامة:
\`\`\`typescript
(parameter: Type): ReturnType => { ... }
\`\`\`

### استخدام void
إذا كانت الدالة لا تعيد قيمة مفيدة نستخدم \`void\`:
\`\`\`typescript
const logMessage = (message: string): void => {
  console.log(message);
};
\`\`\`

### استخدام any
\`any\` تسمح للقيمة بجميع الأنواع دون القيود المعتادة، لكن الاستخدام المفرط لـ \`any\` يقلل من فائدة TypeScript في اكتشاف أخطاء الأنواع، لذلك لا يُستخدم إلا عند الحاجة القصوى.

---

## 3. Interfaces و Type Aliases و Unions

### Interface
تُستخدم لتعريف شكل الكائن، والعلامة \`?\` تعني أن الخاصية اختيارية:
\`\`\`typescript
interface Student {
  name: string;
  age: number;
  major: string;
  gpa?: number;
}
\`\`\`

### Type Alias & Union Type (|)
الرمز \`|\` يعني OR:
\`\`\`typescript
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
let value: string | number;
\`\`\`

### Intersection Type (&)
الرمز \`&\` يدمج الأنواع معاً:
\`\`\`typescript
type Employee = { name: string; };
type Manager = { department: string; };
type ManagerEmployee = Employee & Manager;
\`\`\`

---

## 4. Subtype و Supertype ومبدأ Liskov Substitution
إذا كان \`Student <: Person\` فإن \`Student\` هو Subtype من \`Person\`.
- **مبدأ Liskov Substitution:** إذا كان B Subtype من A، فيمكن استخدام B في الأماكن التي تتوقع A دون أن يؤدي ذلك إلى كسر السلوك المتوقع.

---

## 5. Generics والقيود (Constraints) و Variance

### Generics
تسمح بكتابة كود عام يعمل مع أنواع مختلفة مع المحافظة على Type Safety:
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

### Generic Constraint (\`extends\`)
يمكن تقييد Generic باستخدام \`extends\`:
\`\`\`typescript
function logLength<T extends { length: number }>(arg: T) {
  console.log(arg.length);
}
\`\`\`

### Variance (التغيرية)
- **Covariance:** علاقة Subtyping تنتقل بنفس الاتجاه (\`Producer<T> = () => T\`).
- **Contravariance:** علاقة Subtyping تكون معكوسة (\`Consumer<T> = (arg: T) => void\`).
- **Invariance:** لا توجد علاقة Subtyping مباشرة بين الأنواع المركبة.

---

## 6. Structural Typing
تعتمد TypeScript على **Structural Typing**؛ أي أن التوافق يعتمد على شكل وبنية النوع (ماذا يحتوي الكائن؟) وليس فقط على اسمه (Nominal Typing).

---

## 7. Utility Types المتقدمة

- **Partial<T>:** يجعل جميع الخصائص اختيارية (\`Optional\`).
- **Required<T>:** يجعل جميع الخصائص مطلوبة.
- **Readonly<T>:** يجعل الخصائص للقراءة فقط.
- **Pick<T, K>:** يختار خصائص محددة \`K\` من \`T\`.
- **Omit<T, K>:** يحذف خصائص محددة \`K\` من \`T\`.
- **Record<K, V>:** ينشئ نوع كائن بمفاتيح \`K\` وقيم \`V\` (Dictionary).

---

## 8. Discriminated Unions و Exhaustive Checking
تمثيل الحالات المختلفة بشكل واضح لمنع الحالات المستحيلة (Impossible States):
\`\`\`typescript
type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; error: string };
\`\`\`
باستخدام \`switch (state.status)\` مع فحص كافة الحالات (Exhaustive Checking).

---

## 9. TypeScript مع Express و React

### مع Express:
- **Type Assertion (\`as\`):** تخبر المترجم بالتعامل مع القيمة كنوع معين دون تحويل فعلي في وقت التشغيل.
- **HTTP Status Codes:** \`400 Bad Request\` و \`201 Created\`.

### مع React:
- تحديد أنواع الـ Props واستخدام \`useState<Note[]>([])\` لربط State بالأنواع.

---

## 10. React Native والتطبيق على الموبايل

### أنماط تطبيقات الهواتف:
1. **Native (Kotlin / Swift):** أداء مرتفع جداً ولكن بتكلفة وتطوير منفصل لكل منصة.
2. **Cross-Platform Native (React Native / Flutter):** كود مشترك ومكونات أصلية وأداء ممتاز.
3. **Hybrid (Ionic / Cordova):** استخدام تقنيات الويب داخل حاوية \`WebView\`.
4. **PWA (Progressive Web App):** تطبيق ويب بتجربة هاتف بدون اعتماد كامل على المتاجر.

### بنية React Native Architecture:
- **Bridge القديم:** يعتمد على \`JSON Bridge\` وتشفير/فك بيانات غير متزامن مما يسبب Bottleneck.
- **JSI (JavaScript Interface) الحديث:** وصول مباشر لكائنات Native وتقليل تكلفة Serialization مع دعم الاتصال المتزامن وغير المتزامن.
- **Fabric:** المعمارية الجديدة للـ UI.
- **TurboModules:** الوصول الحديث للـ Native Modules.

### التخطيط والواجهات (Layout & Components):
- **Flexbox & StyleSheet:** نظام التخطيط الأساسي بـ \`StyleSheet.create\`.
- **المكونات الأساسية:**
  - \`<View>\`: الحاوية الأساسية.
  - \`<Text>\`: لجميع النصوص (يمنع كتابة النص خارج \`<Text>\`).
  - \`<FlatList>\`: القوائم الكبيرة والمرنة (\`data\`, \`renderItem\`, \`keyExtractor\`).
  - \`<ScrollView>\`: للمحتوى القابل للتمرير البسيط.

### الوحدات والكثافة (dp & Density):
- **dp:** وحدة مستقلة عن كثافة الشاشة: \`screen density × dp = px\`.
- **الكثافات:** \`mdpi\` (x1), \`hdpi\` (x1.5), \`xhdpi\` (x2), \`xxhdpi\` (x3), \`xxxhdpi\` (x4).

### Expo & React Navigation:
- **Expo:** أداء وإنشاء مشروعات سريعة عبر \`npx create-expo-app\`.
- **Navigation:** \`<NavigationContainer>\` و \`createBottomTabNavigator()\`.
- **Permissions:** أذونات عادية، وأذونات خطيرة (الكاميرا، جهات الاتصال).

---

## جدول ملخص المفاهيم والأدوات

| المفهوم / الأداة | المعنى والاستخدام |
| :--- | :--- |
| \`\|\` | Union Type (أحد الأنواع) |
| \`&\` | Intersection Type (دمج الأنواع) |
| \`T\` | Type Parameter (النوع التجريدي) |
| \`T extends X\` | Generic Constraint (قيد على النوع) |
| \`Partial<T>\` | جعل كل الخصائص Optional |
| \`Required<T>\` | جعل كل الخصائص Required |
| \`Readonly<T>\` | يجعل الخصائص Read-only |
| \`Pick<T, K>\` | اختيار خصائص محددة من النوع |
| \`Omit<T, K>\` | حذف خصائص محددة من النوع |
| \`Record<K, V>\` | Dictionary بحقول وقيم محددة الأنواع |
| **Structural Typing** | التوافق بناءً على الشكل والبنية |
| **Discriminated Union** | Union تحوي حقل تمييزي موحد (\`status\`) |
| **Bridge** | JSON + Serialization + Async (النموذج القديم) |
| **JSI** | وصول مباشر للأنواع وتقليل Serialization |
| \`<View>\` | حاوية العناصر الأساسية |
| \`<Text>\` | المكون الإجباري لعرض النصوص |
| \`<FlatList>\` | لعرض القوائم الطويلة بأداء عالٍ |
| **dp** | وحدة قياس مستقلة عن كثافة الشاشة |
`,
    questions: lecture8Questions
  },
{
    id: 9,
    title: "المحاضرة التاسعة",
    subtitle: "Unix Shell وGit وSSH",
    summary: "شرح كامل وتحليلي لأوامر واجهة السطر البرمجي (Shell)، المتغيرات البيئية، السكربتات، أداة ضبط النسخ Git والمصادقة المشفرة بـ SSH.",
    theoryContent: "# المحاضرة التاسعة — Unix Shell وGit وSSH\n\n## 1. ما هي Shell؟\nالـ **Shell** هي واجهة نصية تقع بين المستخدم ونواة نظام التشغيل (**Kernel**).\nعندما يكتب المستخدم أمراً في الـ Terminal، تمر العملية بثلاث مراحل:\n1. Shell تقرأ الأمر.\n2. Shell تفسر الأمر.\n3. Shell تنفذ الأمر من خلال نظام التشغيل.\n\n> **ملاحظة مهمة:** Shell ليست هي Kernel وليست هي نظام التشغيل بالكامل، وإنما هي واجهة (Interpreter) تسمح للمستخدم بالتعامل مع النظام.\n\n### أشهر أنواع Shell:\n- **bash:** الأكثر انتشاراً على بيئات Linux.\n- **zsh:** الافتراضي في إصدارات macOS الحديثة.\n- **ksh & fish.**\n\n---\n\n## 2. أنواع جلسات Shell\nتُصنَّف جلسات Shell وفق معيارين مستقلين:\n\n1. **Login مقابل Non-login:**\n   - **Login Shell:** تبدأ عند تسجيل الدخول للنظام (مثل التوصيل عبر TTY أو SSH).\n   - **Non-login Shell:** تبدأ داخل جلسة موجودة مسبقاً (مثل فتح نافذة Terminal جديدة في الواجهة الرسومية).\n\n2. **Interactive مقابل Non-interactive:**\n   - **Interactive Shell:** يتفاعل معها المستخدم مباشرة بأسلوب التنبيه والطلب (Prompt).\n   - **Non-interactive Shell:** تعمل دون تفاعل مباشر (مثل تشغيل Shell Script).\n\n---\n\n## 3. المتغيرات (Variables) والمتغيرات البيئية (Environment Variables)\n\n### إنشاء متغير عادي:\n```bash\nA=1\n```\n> **تنبيه:** يمنع كتابة مسافات حول علامة `=`. فالصيغة `A = 1` خاطئة وتعتبر `A` أمراً.\n\n### إظهار قيمة المتغير:\n```bash\necho ${A}\n# أو\necho $A\n```\n\n### المتغيرات البيئية (Environment Variables):\nتؤثر على البرامج والعمليات التابعة. من أهمها:\n- **HOME:** المسار المنزلي للمستخدم (`echo $HOME`).\n- **PATH:** المسارات التي تبحث فيها Shell عن البرامج التنفيذية.\n- **SHELL:** نوع الـ Shell الحالي.\n- **PS1:** شكل الـ Prompt في الجلسة التفاعلية.\n\n### التصدير باستخدام `export`:\nتحويل المتغير العادي إلى متغير بيئي متاح للعمليات الأبناء (Child Processes):\n```bash\nexport A=1\n```\n\n---\n\n## 4. ملفات التهيئة (Initialization Files)\nتُحمَّل ملفات إعداد مختلفة بناءً على نوع الجلسة:\n- **Bash Login:** `~/.bash_profile`\n- **Bash Non-login Interactive:** `~/.bashrc`\n- **Zsh Login:** `~/.zprofile`\n\nاختبار التفاعلية عبر `PS1`:\n```bash\n[ -z \"$PS1\" ] && return\n```\n(إذا كان `PS1` فارغاً، فهذا يعني أن الجلسة ليست Interactive فيتم إنهاء التحميل).\n\n---\n\n## 5. الأوامر الأساسية في Shell\n\n| الأمر | الوظيفة |\n| :--- | :--- |\n| `pwd` | عرض المسار الحالي (Print Working Directory) |\n| `ls` | عرض محتويات المجلد (`ls -l` للتفاصيل) |\n| `cd` | تغيير المجلد (`cd ..` للأب، `cd ~` للمنزل) |\n| `mkdir` | إنشاء مجلد جديد |\n| `touch` | إنشاء ملف فارغ أو تحديث الطابع الزمني |\n| `cp` | نسخ الملفات والمجلدات |\n| `mv` | نقل الملفات أو إعادة تسميتها |\n| `rm` | حذف الملفات نهائياً (لا ينقل لسلة المحذوفات) |\n| `echo` | طباعة نص أو قيمة متغير |\n| `date` | عرض التاريخ والوقت الحالي |\n| `clear` | تنظيف محتوى الشاشة |\n\n---\n\n## 6. السكربتات (Shell Scripts) والـ Shebang\nالسكربت هو ملف نصي يحتوي أوامر سيناريو متتالية (عادة بانتهاء `.sh`).\n\n### Shebang (`#!/bin/bash`):\nيوضع في أول سطر ليحدد المفسر المسؤول عن تشغيل السكربت.\n\n### الصلاحيات والتنفيذ:\nإضافة صلاحية التنفيذ:\n```bash\nchmod +x script.sh\n```\n\n### طرق التشغيل والفرق بينها:\n1. **`./script.sh`**: يشغل السكربت في عملية منفصلة (Subshell). أي متغيرات تُعدّل داخله لا تؤثر في الجلسة الأصلية.\n2. **`source script.sh`** أو **`. script.sh`**: ينفذ الأوامر داخل الجلسة الحالية نفسها، فتبقى التعديلات في البيئة.\n\n---\n\n## 7. أنواع الأوامر والدوال المعرفة\n\n1. **Built-in:** أمر مدمج داخل الـ Shell نفسها (مثل `cd`).\n2. **Executable:** برنامج تنفيذي مستقيل في النظام (مثل `grep`, `ls`).\n3. **Function:** دالة معرّفة داخل الـ Shell.\n4. **Alias:** اسم مختصر لأمر (مثل `alias ll='ls -l'`).\n\n### أداة `type` مقابل `which`:\n- `type command`: يوضح نوع الأمر (Built-in, Alias, Executable, Function).\n- `which command`: يظهر المسار الفعلي للملف التنفيذي المعتمد في `PATH`.\n\n---\n\n## 8. المعاملات الخاصة (Special Parameters)\n\n- **$0:** اسم السكربت أو السياق الحالي.\n- **$1, $2:** المعامل الأول، الثاني، إلخ.\n- **$#:** عدد المعاملات الممررة.\n- **$@:** جميع المعاملات مفرقة (حافظة على المسافات).\n- **$*:** جميع المعاملات كسلسلة نصية واحدة.\n- **$?:** حالة الخروج (Exit Status) للأمر السابق (`0` تعني النجاح، وغير الصفر يعني خطأ).\n\n---\n\n## 9. التعامل مع النصوص وإعادة التوجيه (Redirection & Pipes)\n\n### أدوات النصوص والملفات:\n- `cat`: عرض ودمج محتوى الملفات.\n- `wc`: حساب الأسطر والكلمات والبايتات.\n- `grep`: البحث عن أنماط نصية (Regex).\n- `head` & `tail`: عرض أسطر البداية أو النهاية.\n- `sed`: محرر تدفق النصوص للاستبدال والتعديل.\n- `find` vs `locate`: `find` يبحث حيّاً في شجرة النظام، بينما `locate` يعتمد على قاعدة بيانات مفهرسة سريعة.\n\n### إعادة التوجيه (Redirection):\n- `>`: كتابة الناتِج وإعادة كتابة الملف (**Overwrite**).\n- `>>`: إضافة الناتِج إلى نهاية الملف (**Append**).\n- `&>`: إعادة توجيه الـ `stdout` والـ `stderr` معا.\n\n### الأنابيب (Pipes `|`):\nتربط مخرج الأمر الأول (`stdout`) بمدخل الأمر الثاني (`stdin`):\n```bash\ncat /etc/passwd | grep root\n```\n\n### المعاملات المنطقية:\n- `cmd1 && cmd2`: ينفذ `cmd2` فقط في حال **نجاح** `cmd1`.\n- `cmd1 || cmd2`: ينفذ `cmd2` فقط في حال **فشل** `cmd1`.\n- `cmd1 ; cmd2`: ينفذ `cmd2` دائماً بالتتابع.\n\n---\n\n## 10. إقتباس النصوص (Quoting) واستبدال الأوامر\n\n- **Double Quotes (`\"`):** تسمح بتوسيع المتغيرات وتفسيرها (`\"$A\"` تُرجع قيمة `A`).\n- **Single Quotes (`'`):** نص حرفي تماماً يمنع توسيع أي متغير (`'$A'` تُرجع النص `$A`).\n- **Command Substitution (`$(command)`):** لتخزين ناتج تنفيذ أمر في متغير:\n```bash\nlist=$(ls -l)\n```\n\n---\n\n## 11. إدارة العمليات (Process Management)\n\n- **`command &`**: تشغيل الأمر في الخلفية (Background).\n- **`Ctrl + Z`**: إيقاف مؤقت للعملية الأمامية (Stopped).\n- **`jobs`**: عرض الوظائف النشطة في الجلسة.\n- **`bg`**: استئناف العملية في الخلفية.\n- **`fg`**: إرجاع العملية للمقدمة.\n- **`Ctrl + C`**: إنهاء وإلغاء العملية الأمامية (Interrupt).\n- **`kill PID`**: إرسال إشارة إنهاء للعملية حسب رقم الـ PID.\n\n---\n\n## 12. نظام Git والمصادقة بـ SSH\n\n**Git** هو نظام إداري موزّع لضبط النسخ (**Distributed Version Control System**).\n\n### أهم أوامر Git:\n- `git init`: تهيئة مستودع جديد.\n- `git clone <url>`: نسخ مستودع موجود.\n- `git status`: عرض حالة الملفات والتغييرات.\n- `git add <file>`: إضافة التغييرات لـ Staging Area.\n- `git commit -m \"msg\"`: تسجيل Snapshot بالتغييرات.\n- `git push origin main`: رفع التغييرات المحلية للمستودع البعيد (Remote).\n- `git pull origin main`: جلب ودمج التغييرات من البعيد إلى المحلي.\n- `git branch` / `git checkout` / `git merge`: إدارة وفروع ودمج الكود.\n\n### المصادقة عبر SSH:\nتسمح بالتوصيل والرفع الآمن بدون إدخال كلمة المرور في كل مرة:\n1. **إنشاء المفاتيح:**\n   ```bash\n   ssh-keygen -t rsa -b 4096 -C \"email@example.com\"\n   ```\n2. **تشغيل الـ Agent وإضافة المفتاح الخاص:**\n   ```bash\n   eval \"$(ssh-agent -s)\"\n   ssh-add ~/.ssh/id_rsa\n   ```\n3. **رفع المفتاح العام (`Public Key`):** يُضاف المفتاح العام `id_rsa.pub` لـ GitHub، بينما يظل المفتاح الخاص `Private Key` سرياً ولا يُشارك أبداً.\n4. **اختبار الاتصال:**\n   ```bash\n   ssh -T git@github.com\n   ```\n",
    questions: lecture9Questions
  }
];
