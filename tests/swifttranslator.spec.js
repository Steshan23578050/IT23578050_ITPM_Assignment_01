import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 – Simple present sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedhara innee.');

  await expect(outputBox).toContainText(
    'මම ගෙදර ඉන්නේ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0002 – Convert interrogative greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oyaata kohomadha?');

  await expect(outputBox).toContainText(
    'ඔයාට කොහොමද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0003 – Convert compound sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('api kaeema kanna yanavaa saha passe film ekak balanavaa');

  await expect(outputBox).toContainText(
    'අපි කෑම කන්න යනවා සහ පස්සෙ film එකක් බලනවා',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0004 – Convert negative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama ehema jivitheta oyaata karannee naehae.');

  await expect(outputBox).toContainText(
    'මම එහෙම ජිවිතෙට ඔයාට කරන්නේ නැහැ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0005 – Convert mixed English terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('adha mata office ekea Google meet ekak thiyenavaa.');

  await expect(outputBox).toContainText(
    'අද මට office එකේ Google meet එකක් තියෙනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0006 – Convert slang greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('ela machan! eka supiri');

  await expect(outputBox).toContainText(
    'එල මචන්! එක සුපිරි',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0007 – Convert past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama iiyee gedhara yadhdhi, oyaa hitiyee naehae.');

  await expect(outputBox).toContainText(
    'මම ඊයේ ගෙදර යද්දි, ඔයා හිටියේ නැහැ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0008 – Convert polite inquiry', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oyage gama mokkadha?');

  await expect(outputBox).toContainText(
    'ඔයගෙ ගම මොක්කද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0009 – Convert compound future tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('api kadeta yanavaa saha passe kasunlaa hambenavaa');
  await expect(outputBox).toContainText(
    'අපි කඩට යනවා සහ පස්සෙ කසුන්ලා හම්බෙනවා',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0010 – Convert long past tense story', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama ammaa enna kalin gedhara giyaa, yadhdhi ammaa bath ekak laesthi karalaa passe eka kaalaa sellam karanna giyaa. ');
  await expect(outputBox).toContainText(
    'මම අම්මා එන්න කලින් ගෙදර ගියා, යද්දි අම්මා බත් එකක් ලැස්ති කරලා පස්සෙ එක කාලා සෙල්ලම් කරන්න ගියා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0011 – Convert present tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('apee paeththee innavaa egollo.');
  await expect(outputBox).toContainText(
    'අපේ පැත්තේ ඉන්නවා එ ගොල්ලෝ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0012 – Convert polite suggestion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('oyage kakula balanna');
  await expect(outputBox).toContainText(
    'ඔයගෙ කකුල බලන්න',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0013 – Convert plural sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('api apee gamata yanavaa.');
  await expect(outputBox).toContainText(
    'අපි අපේ ගමට යනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0014 – Convert future sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('adha campus ekata yanavaa mama.');
  await expect(outputBox).toContainText(
    'අද campus එකට යනවා මම.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0015 – Convert request with question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mata idea ekak dhenna puluvandha?');
  await expect(outputBox).toContainText(
    'මට idea එකක් දෙන්න පුලුවන්ද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0016 – Convert sentence with number', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama kello 2 k ekka innavaa.');
  await expect(outputBox).toContainText(
    'මම කෙල්ලො 2 ක් එක්ක ඉන්නවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0017 – Convert sentence with name', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('sakith gedhara gihin poLata yanava.');
  await expect(outputBox).toContainText(
    'සකිත් ගෙදර ගිහින් පොළට යනව.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0018 – Convert slang with Question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('machan uba kohetada yannee?');
  await expect(outputBox).toContainText(
    'මචන් උබ කොහෙටද යන්නේ?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0019 – Convert long paragraph with dialogue', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama kathaa kara kara idhdhi oyaa samaga, oyaa kivvaa lamayek gaena, mama kivva thava dheyak gaena, passe apee ammaa call karama apita mokakda kivve kiyalaa amathaka unaa.');
  await expect(outputBox).toContainText(
    'මම කතා කර කර ඉද්දි ඔයා සමග, ඔයා කිව්වා ලමයෙක් ගැන, මම කිව්ව තව දෙයක් ගැන, පස්සෙ අපේ අම්මා call කරම අපිට මොකක්ඩ කිව්වෙ කියලා අමතක උනා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0020 – Convert welcome message with country name', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('Ayubovan Colombo! api obava sadharayen piliganimu.');
  await expect(outputBox).toContainText(
    'අයුබොවන් Colombo! අපි ඔබව සදරයෙන් පිලිගනිමු. ',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0021 – Convert birthday greeting question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('ohuge Birthday eka adha, oba ohuta suba pathuvaadha?');
  await expect(outputBox).toContainText(
    'ඔහුගෙ Birthday එක අද, ඔබ ඔහුට සුබ පතුවාද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0022 – Convert weather-based activity cancellation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('adha cricket practice naevaeththuvaa, vahina nisaa.');
  await expect(outputBox).toContainText(
    'අද cricket practice නැවැත්තුවා, වහින නිසා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0023 – Convert past tense story with cause and effect', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('iyee havasa magee passen ballek dhuvan aavaa, mama gahak udata naegalaa berune, nikan hari u hapuvanam adha Exam ekath naehae.');
  await expect(outputBox).toContainText(
    'ඉයේ හවස මගේ පස්සෙන් බල්ලෙක් දුවන් ආවා, මම ගහක් උඩට නැගලා බෙරුනෙ, නිකන් හරි උ හපුවනම් අද Exam එකත් නැහැ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0024 – Convert polite morning greeting to teacher', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('suba udhaesanak kasun obata kohomadha?');
  await expect(outputBox).toContainText(
    'සුබ උදැසනක් කසුන් ඔබට කොහොමද?',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0001 – Fail with missing vowels', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mm ht rt ynv');

  await expect(outputBox).toContainText(
    'මම හෙට රට යනවා.',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0002 – Heavy joined sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('ohukadetagiyaa');
  
  await expect(outputBox).toContainText(
    'ඔහු කඩෙට ගියා',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0003 – Fail with random abbreviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('password ekee dunnam');
  
  await expect(outputBox).toContainText(
    'password එක දෙන්නම්',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0004 – Fail with random letters / gibberish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('asdkfjaqwoeir');
  
  await expect(outputBox).toContainText(
    'අස්ඩ්කෆ්ජාක්වොඇයිර්',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0005 – Fail with missing spaces in paragraph', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mamaennakalingedhara,apeeammabathekakhadhaalathibbaa,passemamaekabedhagenakaeva');
  
  await expect(outputBox).toContainText(
    'මම එන්න කලින් ගෙදර, අපේ අම්ම බත් එකක් හදාල තිබ්බා, පස්සෙ මම එක බෙදගෙන කැවා.',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0006 – Fail with random English + Singlish noise', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('gthn mvl dhslk office ekata yanavoo');
  
  await expect(outputBox).toContainText(
    'සතියට දවසක් office එකට යනවා',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0007 – Fail with random English + Singlish noise', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama kade yanavaa oyath enavadha 😊👍');
  
  await expect(outputBox).toContainText(
    'මම කඩේ යනවා ඔයාත් එනවද?',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0008 – Mixed slang + emoji + special characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('ban machan 😂 mokadha venne??? mama yanne 🏃‍♂️ office ekata!!! $$$');
  
  await expect(outputBox).toContainText(
    'බන් මචන්  මොකද වෙන්නෙ? මම යන්නෙ office එකට.',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0009 – Input with special characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('bmama&() @@@oyath ekka #tharahayi####');
  
  await expect(outputBox).toContainText(
    'මම ඔයත් එක්ක තරහයි',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0010 – Fail with heavy slang with abbreviation (TNX)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('ban machan TNX ban mokadha venne oyage plan eka?');
  
  await expect(outputBox).toContainText(
    'බන් මචන් thanks බන් මොකද වෙන්නෙ ඔයගෙ plan එක?',
    { timeout: 15000 }
  );
});

test('Pos_UI_0001 – Real-time conversion (Live typing)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.click();
  await inputBox.type('mama sellam karanna yanavaa', { delay: 120 });
  await expect(outputBox).toContainText(
    'මම සෙල්ලම් කරන්න යනවා',
    { timeout: 15000 }
  );
});