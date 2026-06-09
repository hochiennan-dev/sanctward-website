/**
 * Sanctward 官網「聯絡我們」收信端點（Google Apps Script）
 * 用你的 Gmail（sanctward.gary@gmail.com）登入 https://script.google.com 建立，
 * 貼上本檔內容，然後「部署 → 新增部署作業 → 類型：網頁應用程式」：
 *   - 執行身分：我（sanctward.gary@gmail.com）
 *   - 具有存取權的使用者：任何人
 * 部署後複製 /exec 網址，貼到 src/views/Contact.vue 的 CONTACT_ENDPOINT。
 * 不需要 App 密碼、不需要 SMTP。
 */
var TO = 'sanctward.gary@gmail.com';   // 收件信箱（可改成你要收的地方）

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var name    = String(d.name    || '').slice(0, 200);
    var company = String(d.company || '').slice(0, 200);
    var email   = String(d.email   || '').slice(0, 200);
    var msg     = String(d.msg     || '').slice(0, 5000);
    if (!name && !email && !msg) return out({ ok: false, error: 'empty' });

    var subject = '[官網聯絡] ' + (company || name || '需求洽詢');
    var body =
        '姓名：' + name + '\n' +
        '公司／單位：' + company + '\n' +
        'Email：' + email + '\n\n' +
        '需求說明：\n' + msg + '\n\n' +
        '— 來自 sanctward.com 聯絡表單';

    MailApp.sendEmail({
      to: TO,
      subject: subject,
      body: body,
      name: 'Sanctward 官網',
      replyTo: email || TO
    });
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function doGet() {
  return out({ ok: true, msg: 'Sanctward contact endpoint is alive' });
}

function out(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
