# Food Junction — Website + Admin Panel

एक हल्की-फुल्की Next.js वेबसाइट, आपके menu card से बनी हुई, जिसमें एक Admin Panel है
जिससे आप बिना कोड छुए मेन्यू, दाम, फोटो और रेस्टोरेंट की जानकारी बदल सकते हैं।

## इसमें क्या है

- **होम पेज** — hero, मेन्यू श्रेणियाँ, आज की थाली
- **/menu** — पूरा मेन्यू (सभी श्रेणियाँ + डिश + दाम)
- **/admin** — लॉगिन (password से सुरक्षित)
- **/admin/dashboard** — रेस्टोरेंट की जानकारी, मेन्यू आइटम, दाम और फोटो (image URL) एडिट करें

## Local चलाना

```bash
npm install
npm run dev
```

फिर http://localhost:3000 खोलें। Admin के लिए http://localhost:3000/admin
(default password: `foodjunction` — नीचे बदलने का तरीका है)

## Vercel पर Deploy करना

1. इस फोल्डर को GitHub पर एक नए repo में push करें।
2. [vercel.com](https://vercel.com) पर जाकर उस repo को Import करें → Deploy पर क्लिक करें
   (Framework अपने आप "Next.js" पहचान लेगा)।
3. Deploy होने के बाद, अपनी वेबसाइट पहले से ही चालू हो जाएगी — मेन्यू default data से दिखेगा।

### Admin Panel को असल में काम करने के लिए 2 आसान स्टेप

Admin panel से किए गए बदलाव **save** होने के लिए एक छोटा सा free storage चाहिए (क्योंकि
Vercel की वेबसाइटें serverless होती हैं और खुद फाइल में लिख कर याद नहीं रख सकतीं)।

**Step 1 — Password सेट करें**
Vercel प्रोजेक्ट → **Settings → Environment Variables** में जाकर जोड़ें:
```
ADMIN_PASSWORD = आपका_खुद_का_पासवर्ड
```

**Step 2 — Storage जोड़ें (मुफ्त)**
Vercel प्रोजेक्ट → **Storage** टैब → **Create Database / Marketplace** में जाकर **Upstash — Redis**
(पहले इसे "Vercel KV" कहा जाता था, अब यही उसकी जगह है) चुनें → अपने प्रोजेक्ट से Connect करें।
यह अपने आप जरूरी environment variables (`KV_REST_API_URL`, `KV_REST_API_TOKEN`) जोड़ देगा — नाम
वही रहते हैं, बस provider बदल गया है, तो कोड में कुछ बदलने की जरूरत नहीं।

इसके बाद प्रोजेक्ट को एक बार फिर **Redeploy** करें (Deployments टैब → ... → Redeploy)।

बस — अब `/admin` पर लॉगिन करके जो भी बदलें, वो live साइट पर तुरंत दिखेगा।

> Storage कनेक्ट करने से पहले भी साइट पूरी तरह काम करेगी और admin panel खुलेगा — बस बदलाव
> "सेव" करने पर तब तक एक चेतावनी दिखेगी जब तक आप KV कनेक्ट न करें।

**Step 3 — फोटो अपलोड के लिए Blob Storage जोड़ें (मुफ्त, वैकल्पिक)**
Admin panel से सीधे अपने कंप्यूटर की फोटो अपलोड करने के लिए (URL paste किए बिना):
Vercel प्रोजेक्ट → **Storage** टैब → **Create Database / Marketplace** → **Blob** चुनें →
अपने प्रोजेक्ट से Connect करें। यह अपने आप `BLOB_READ_WRITE_TOKEN` जोड़ देगा। फिर एक बार
**Redeploy** करें (ऊपर की तरह ही)।

## फोटो कैसे बदलें

Admin dashboard में हर श्रेणी के आगे **"फोटो चुनें"** बटन है — उस पर क्लिक करके सीधे अपने
कंप्यूटर/फोन से फोटो चुनें, वो अपने आप अपलोड होकर लग जाएगी (इसके लिए ऊपर वाला Blob Storage
कनेक्ट होना ज़रूरी है)।

अगर Blob Storage कनेक्ट नहीं करना चाहते, तो उसी बॉक्स के नीचे एक **image URL** फ़ील्ड भी है —
फोटो को कहीं और (जैसे [imgur.com](https://imgur.com)) अपलोड करके उसका लिंक वहाँ paste कर
सकते हैं।

## Password बदलना

`ADMIN_PASSWORD` environment variable बदल कर redeploy करें (ऊपर Step 1 देखें)। Local में
`.env.local` फाइल बनाकर उसमें `ADMIN_PASSWORD=...` लिखें।

## Folder Structure

```
app/
  page.js                 → होम पेज
  menu/page.js             → पूरा मेन्यू पेज
  admin/page.js             → admin लॉगिन
  admin/dashboard/page.js   → admin content editor
  api/content/route.js      → मेन्यू पढ़ने/सेव करने का API
  api/login/route.js        → admin लॉगिन का API
components/                → Header, Footer, MenuSection, CategoryBadge
data/defaultContent.js      → menu card से निकाला गया शुरुआती डेटा (seed)
lib/store.js                 → Vercel KV storage helper
```
