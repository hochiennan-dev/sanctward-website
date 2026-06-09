/**
 * Sanctward 官網「聯絡我們」收信端點（Google Apps Script）
 * 功能：寄美化 HTML 通知信 + 寫入 Google 試算表（自動建立）+ 台灣時間 + 來源 IP/國家/網路組織
 *
 * 部署：用 sanctward.gary@gmail.com 登入 https://script.google.com，貼上本檔，
 *   「部署 → 管理部署作業 → 編輯（鉛筆）→ 版本：新版本 → 部署」即可沿用同一個 /exec 網址。
 *   首次會要求重新授權（寄信 + 建立試算表權限），請允許。
 * 部署後可用瀏覽器開 /exec 網址，回應會附上自動建立的試算表連結。
 *
 * 不需要 App 密碼、不需要 SMTP。
 */
var TO = 'sanctward.gary@gmail.com';                 // 收件信箱（可改）
var SHEET_NAME = 'Sanctward 聯絡表單紀錄';
var HEADERS = ['時間(台灣)', '姓名', '公司/單位', 'Email', '需求說明', '國家', '城市', '來源IP', '來源網路組織'];

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var v = {
      name:    clean(d.name, 200),
      company: clean(d.company, 200),
      email:   clean(d.email, 200),
      msg:     clean(d.msg, 5000),
      ip:      clean(d.ip, 60),
      country: clean(d.country, 80),
      city:    clean(d.city, 80),
      org:     clean(d.org, 200)
    };
    if (!v.name && !v.email && !v.msg) return out({ ok: false, error: 'empty' });
    v.ts = Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyy-MM-dd HH:mm:ss');

    // 1) 寫入試算表
    getSheet().appendRow([v.ts, v.name, v.company, v.email, v.msg, v.country, v.city, v.ip, v.org]);

    // 2) 寄出美化 HTML 通知信
    MailApp.sendEmail({
      to: TO,
      subject: '[官網聯絡] ' + (v.company || v.name || '需求洽詢'),
      replyTo: v.email || TO,
      name: 'Sanctward 官網',
      htmlBody: htmlBody(v),
      body: textBody(v)
    });
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function doGet() {
  var id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  return out({ ok: true, sheet: id ? ('https://docs.google.com/spreadsheets/d/' + id) : '(送出第一筆後自動建立)' });
}

function getSheet() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('SHEET_ID');
  var ss = null;
  if (id) { try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; } }
  if (!ss) {
    ss = SpreadsheetApp.create(SHEET_NAME);
    props.setProperty('SHEET_ID', ss.getId());
    var sh = ss.getSheets()[0];
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return ss.getSheets()[0];
}

function htmlBody(v) {
  var row = function (label, val) {
    return '<tr>' +
      '<td style="padding:9px 0;color:#7E8C85;width:104px;vertical-align:top;font-size:13px">' + esc(label) + '</td>' +
      '<td style="padding:9px 0;color:#2b332f;font-weight:600;font-size:14px">' + val + '</td></tr>';
  };
  var emailCell = v.email ? '<a href="mailto:' + esc(v.email) + '" style="color:#1B8F34">' + esc(v.email) + '</a>' : '—';
  var msgCell = '<span style="font-weight:400;white-space:pre-wrap">' + esc(v.msg || '—') + '</span>';
  return '' +
  '<div style="font-family:Arial,\'Noto Sans TC\',sans-serif;background:#f3f7f4;padding:24px">' +
    '<div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #E4EAE6;border-radius:14px;overflow:hidden">' +
      '<div style="background:#2da23f;padding:18px 24px">' +
        '<span style="color:#fff;font-size:16px;font-weight:700;letter-spacing:.3px">Sanctward 官網 · 新聯絡訊息</span>' +
      '</div>' +
      '<div style="padding:22px 24px">' +
        '<table style="width:100%;border-collapse:collapse">' +
          row('姓名', esc(v.name || '—')) +
          row('公司／單位', esc(v.company || '—')) +
          row('Email', emailCell) +
          row('需求說明', msgCell) +
        '</table>' +
        '<div style="margin-top:18px;padding-top:14px;border-top:1px solid #EEF2F0;font-size:12.5px;color:#7E8C85;line-height:1.7">' +
          '<b style="color:#46554E;font-size:12px;letter-spacing:.5px">來源資訊</b><br>' +
          '國家／城市：' + esc((v.country || '未知') + (v.city ? ' · ' + v.city : '')) + '<br>' +
          '來源 IP：' + esc(v.ip || '未取得') + '<br>' +
          '來源網路組織：' + esc(v.org || '未取得') + '<br>' +
          '時間（台灣）：' + esc(v.ts) +
        '</div>' +
      '</div>' +
      '<div style="background:#fafbfa;padding:12px 24px;border-top:1px solid #EEF2F0;font-size:11.5px;color:#9AA9A1">' +
        '— 來自 sanctward.com 聯絡表單，已同步存入 Google 試算表' +
      '</div>' +
    '</div>' +
  '</div>';
}

function textBody(v) {
  return '姓名：' + v.name + '\n公司／單位：' + v.company + '\nEmail：' + v.email +
    '\n\n需求說明：\n' + v.msg +
    '\n\n— 來源資訊 —\n國家／城市：' + v.country + (v.city ? ' · ' + v.city : '') +
    '\n來源IP：' + v.ip + '\n來源網路組織：' + v.org + '\n時間(台灣)：' + v.ts +
    '\n\n— 來自 sanctward.com 聯絡表單';
}

function clean(val, n) { return String(val == null ? '' : val).slice(0, n); }
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
