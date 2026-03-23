// ============================================================
// SECTION 1 DATA — 6 Real Patents from your screenshots
// ============================================================
const section1 = [
  {
    qnum: 1,
    website: 'google',
    websiteLabel: 'Google Patents',
    icon: '🔍',
    clues: [
      { icon: '🏢', key: 'Company', val: 'Eidgenoessische Technische Hochschule Zurich ETHZ, Disney Enterprises Inc' },
      { icon: '📅', key: 'Filing Date', val: '2019-09-26' },
      { icon: '📝', key: 'Title Description', val: 'CNN applied to denoising images rendered by MC path tracing' }
    ],
    hint: 'Search: "convolutional neural network denoising" in Google Patents → Filter Assignee: Disney Enterprises → Filing Date: 2019-09-26',
    answers: {
      devicename: 'CONVOLUTIONAL NEURAL NETWORKS',
      title: 'KERNEL-PREDICTING CONVOLUTIONAL NEURAL NETWORKS FOR DENOISING',
      appnumber: 'US16/584,760',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'Kernel-predicting convolutional neural networks for denoising', highlight: false },
      { key: 'Device Name', val: 'CONVOLUTIONAL NEURAL NETWORKS', highlight: true },
      { key: 'Application Number', val: 'US16/584,760', highlight: true },
      { key: 'Publication Number', val: 'US10796414B2', highlight: false },
      { key: 'Filing Date', val: '2019-09-26', highlight: false },
      { key: 'Grant Date', val: '2020-10-06', highlight: false },
      { key: 'Status', val: 'GRANTED (B2 exists)', highlight: true },
      { key: 'Expiration', val: '2037-11-15', highlight: false }
    ]
  },
  {
    qnum: 2,
    website: 'google',
    websiteLabel: 'Google Patents',
    icon: '🔍',
    clues: [
      { icon: '🏢', key: 'Company', val: 'Wispr AI Inc' },
      { icon: '📅', key: 'Filing Date', val: '2023-07-25' },
      { icon: '📝', key: 'Title Description', val: 'Detecting gestures, facial expressions, tone to control speech applications' }
    ],
    hint: 'Search: "gestures expressions speech applications" → Filter Assignee: Wispr AI → Filing Date: 2023-07-25',
    answers: {
      devicename: 'SPEECH APPLICATIONS',
      title: 'SYSTEM AND METHOD FOR USING GESTURES AND EXPRESSIONS FOR CONTROLLING SPEECH APPLICATIONS',
      appnumber: 'US18/358,300',
      status: 'Published'
    },
    reveal: [
      { key: 'Title', val: 'System and method for using gestures and expressions for controlling speech applications', highlight: false },
      { key: 'Device Name', val: 'SPEECH APPLICATIONS', highlight: true },
      { key: 'Application Number', val: 'US18/358,300', highlight: true },
      { key: 'Publication Number', val: 'US20240220811A1', highlight: false },
      { key: 'Filing Date', val: '2023-07-25', highlight: false },
      { key: 'Publication Date', val: '2024-07-04', highlight: false },
      { key: 'Status', val: 'PUBLISHED (A1, Pending)', highlight: true },
      { key: 'Grant Date', val: 'Not granted yet', highlight: false }
    ]
  },
  {
    qnum: 3,
    website: 'espacenet',
    websiteLabel: 'Espacenet',
    icon: '🇪🇺',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'SAMSUNG SDI CO LTD' },
      { icon: '📅', key: 'Publication Date', val: '2021-10-06' },
      { icon: '📝', key: 'Title Description', val: 'Electric vehicle battery system with real time clock for BMS timing' }
    ],
    hint: 'Go to worldwide.espacenet.com → Advanced Search → Title: "electric vehicle battery real time clock" → Applicant: SAMSUNG SDI CO LTD → Publication Date: 20211006:20211006',
    answers: {
      devicename: 'ELECTRIC-VEHICLE BATTERY SYSTEM',
      title: 'AN ELECTRIC-VEHICLE BATTERY SYSTEM COMPRISING A REAL TIME CLOCK',
      appnumber: 'EP20167179A',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'An electric-vehicle battery system comprising a real time clock', highlight: false },
      { key: 'Device Name', val: 'ELECTRIC-VEHICLE BATTERY SYSTEM', highlight: true },
      { key: 'Application Number', val: 'EP20167179A', highlight: true },
      { key: 'Publication Number', val: 'EP3890059A1', highlight: false },
      { key: 'Publication Date', val: '2021-10-06', highlight: false },
      { key: 'Status', val: 'GRANTED (EP3890059B1 in Published as)', highlight: true },
      { key: 'Priority Date', val: '2020-03-31', highlight: false },
      { key: 'Inventors', val: 'Hofer Maximilian, Schmiedhofer Christoph, et al.', highlight: false }
    ]
  },
  {
    qnum: 4,
    website: 'espacenet',
    websiteLabel: 'Espacenet',
    icon: '🇪🇺',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'SESSIONS D.C.' },
      { icon: '📅', key: 'Publication Date', val: '2002-09-26' },
      { icon: '📝', key: 'Title Description', val: 'Method for calibrating data on a parallel bus without interrupting data communication' }
    ],
    hint: 'Go to Espacenet → Advanced Search → All text fields: "channel calibration" → Applicant: SESSIONS D.C. → Publication Date: 20020926:20020926',
    answers: {
      devicename: 'CHANNEL CALIBRATION',
      title: 'REAL-TIME CHANNEL CALIBRATION METHOD AND ARRANGEMENT',
      appnumber: 'US76630801A',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'Real-time channel calibration method and arrangement', highlight: false },
      { key: 'Device Name', val: 'CHANNEL CALIBRATION', highlight: true },
      { key: 'Application Number', val: 'US76630801A', highlight: true },
      { key: 'Publication Number', val: 'US2002138224A1', highlight: false },
      { key: 'Publication Date', val: '2002-09-26', highlight: false },
      { key: 'Status', val: 'GRANTED (US6606576B2 in Published as)', highlight: true },
      { key: 'Priority Date', val: '2001-01-19', highlight: false },
      { key: 'Inventor', val: 'Sessions D C [US]', highlight: false }
    ]
  },
  {
    qnum: 5,
    website: 'wipo',
    websiteLabel: 'WIPO / CN Patent',
    icon: '🌐',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'OPPO Guangdong Mobile Telecommunications Co., Ltd.' },
      { icon: '📅', key: 'Application Date', val: '31.12.2019' },
      { icon: '📝', key: 'Title Description', val: 'Face recognition using sub-pixel interpolation and neural network' }
    ],
    hint: 'Search in WIPO or Espacenet → Applicant: OPPO Guangdong → Title: "face recognition" → Application Date: 31.12.2019 (CN Patent)',
    answers: {
      devicename: 'FACE RECOGNITION DEVICE',
      title: 'FACE RECOGNITION METHOD, FACE RECOGNITION DEVICE AND MOBILE TERMINAL',
      appnumber: '201911421188.7',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'Face recognition method, face recognition device and mobile terminal', highlight: false },
      { key: 'Device Name', val: 'FACE RECOGNITION DEVICE', highlight: true },
      { key: 'Application Number', val: '201911421188.7', highlight: true },
      { key: 'Publication Number', val: '111222446', highlight: false },
      { key: 'Application Date', val: '31.12.2019', highlight: false },
      { key: 'Grant Date', val: '16.05.2023', highlight: false },
      { key: 'Status', val: 'GRANTED (Publication Kind: B)', highlight: true },
      { key: 'Inventor', val: 'Huang Haidong', highlight: false }
    ]
  },
  {
    qnum: 6,
    website: 'cn',
    websiteLabel: 'WIPO / CN Patent',
    icon: '🌐',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'Suzhou Xinweiguan Electronic Technology Co., Ltd.' },
      { icon: '📅', key: 'Application Date', val: '21.09.2020' },
      { icon: '📝', key: 'Title Description', val: 'Wireless charging device for mobile electric vehicles with positioning base station' }
    ],
    hint: 'Search in WIPO/Espacenet → Applicant: Suzhou Xinweiguan → Title: "mobile wireless charging" → Application Date: 21.09.2020 (CN Patent)',
    answers: {
      devicename: 'MOBILE WIRELESS CHARGING DEVICE',
      title: 'MOBILE WIRELESS CHARGING DEVICE',
      appnumber: '202022070492.5',
      status: 'Published'
    },
    reveal: [
      { key: 'Title', val: 'Mobile wireless charging device', highlight: false },
      { key: 'Device Name', val: 'MOBILE WIRELESS CHARGING DEVICE', highlight: true },
      { key: 'Application Number', val: '202022070492.5', highlight: true },
      { key: 'Publication Number', val: '213649358', highlight: false },
      { key: 'Application Date', val: '21.09.2020', highlight: false },
      { key: 'Publication Date', val: '09.07.2021', highlight: false },
      { key: 'Status', val: 'PUBLISHED (Kind Code: U = Utility Model)', highlight: true },
      { key: 'Inventor', val: 'Li Jianxing', highlight: false }
    ]
  }
];

// ============================================================
// STATE
// ============================================================
let s1Index = 0;
let s1Correct = 0;
let s1Wrong = 0;
let s1Streak = 0;
let s1Checked = false;

let totalCorrect = 0;
let totalWrong = 0;

// ============================================================
// SECTION TAB SWITCHING
// ============================================================
function showSection(n) {
  [1, 2, 3, 4].forEach(i => {
    document.getElementById(`section-${i}`).style.display = i === n ? 'block' : 'none';
  });
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active-tab', parseInt(b.dataset.section) === n);
  });
  if (n === 2 && document.getElementById('s2-question-area').innerHTML === '') {
    renderS2Question();
  }
}

// ============================================================
// RENDER QUESTION
// ============================================================
function renderS1Question() {
  const area = document.getElementById('s1-question-area');
  document.getElementById('s1-result').classList.remove('show');

  if (s1Index >= section1.length) {
    showS1Result();
    return;
  }

  s1Checked = false;
  const q = section1[s1Index];

  // Progress
  document.getElementById('s1-progress').style.width = ((s1Index / section1.length) * 100) + '%';
  document.getElementById('s1-qnum').textContent = `Question ${s1Index + 1} of ${section1.length}`;
  document.getElementById('s1-streak').textContent = `🔥 Streak: ${s1Streak}`;

  const cluesHTML = q.clues.map(c => `
    <div class="clue-item">
      <span class="clue-icon">${c.icon}</span>
      <div class="clue-content">
        <div class="clue-key">${c.key}</div>
        <div class="clue-val">${c.val}</div>
      </div>
    </div>
  `).join('');

  const html = `
    <div class="question-card" id="s1-card">
      <div class="q-header">
        <div class="q-icon ${q.website}">${q.icon}</div>
        <div class="q-meta-info">
          <div class="website-badge badge-${q.website}">${q.websiteLabel}</div>
          <div class="q-num">Question ${q.qnum} / 6 — Find this patent and fill in the details below</div>
        </div>
      </div>

      <div class="clues-section">
        <div class="clues-label">🔎 Search Clues</div>
        <div class="clues-grid">${cluesHTML}</div>
        <div class="hint-box">
          💡 <span><strong>Hint:</strong> ${q.hint}</span>
        </div>
      </div>

      <div class="answer-section">
        <div class="answer-label">✏️ Your Answer</div>
        <div class="answer-grid">
          <div class="answer-field">
            <label>Device Name <span class="req">*</span></label>
            <input type="text" id="f-device" placeholder="e.g. DISPLAY DEVICE" autocomplete="off" />
            <div class="field-feedback" id="fb-device"></div>
          </div>
          <div class="answer-field">
            <label>Title <span class="req">*</span></label>
            <input type="text" id="f-title" placeholder="Full patent title in CAPS" autocomplete="off" />
            <div class="field-feedback" id="fb-title"></div>
          </div>
          <div class="answer-field">
            <label>Application Number <span class="req">*</span></label>
            <input type="text" id="f-appnum" placeholder="e.g. US14/739,097" autocomplete="off" />
            <div class="field-feedback" id="fb-appnum"></div>
          </div>
          <div class="answer-field">
            <label>Application Status <span class="req">*</span></label>
            <select id="f-status">
              <option value="">-- Select Status --</option>
              <option value="Filed">Filed</option>
              <option value="Published">Published</option>
              <option value="Granted">Granted</option>
            </select>
            <div class="field-feedback" id="fb-status"></div>
          </div>
        </div>

        <div class="action-row">
          <button class="btn btn-check" onclick="checkS1Answer()">✅ Check Answer</button>
          <button class="btn btn-next show" id="s1-nextbtn" onclick="nextS1()" style="display:none">Next Question →</button>
          <button class="btn btn-skip" onclick="nextS1()">Skip ⏭</button>
        </div>

        <div class="answer-reveal" id="s1-reveal"></div>
      </div>
    </div>
  `;

  area.innerHTML = html;
}

// ============================================================
// CHECK ANSWER
// ============================================================
function normalize(str) {
  return str.trim().toUpperCase().replace(/\s+/g, ' ');
}

function checkS1Answer() {
  if (s1Checked) return;
  s1Checked = true;

  const q = section1[s1Index];
  const ans = q.answers;

  const userDevice = document.getElementById('f-device').value;
  const userTitle = document.getElementById('f-title').value;
  const userApp = document.getElementById('f-appnum').value;
  const userStatus = document.getElementById('f-status').value;

  let score = 0;
  let total = 4;

  function checkField(inputId, fbId, userVal, correctVal, isSelect) {
    const el = document.getElementById(inputId);
    const fb = document.getElementById(fbId);
    const correct = normalize(userVal) === normalize(correctVal);
    el.classList.add(correct ? 'is-correct' : 'is-wrong');
    fb.className = `field-feedback show ${correct ? 'correct' : 'wrong'}`;
    fb.innerHTML = correct
      ? `✅ Correct!`
      : `❌ Answer: ${correctVal}`;
    if (correct) score++;
  }

  checkField('f-device', 'fb-device', userDevice, ans.devicename);
  checkField('f-title', 'fb-title', userTitle, ans.title);
  checkField('f-appnum', 'fb-appnum', userApp, ans.appnumber);
  checkField('f-status', 'fb-status', userStatus, ans.status);

  // Overall
  if (score === total) {
    s1Correct++;
    s1Streak++;
    totalCorrect++;
  } else {
    s1Wrong++;
    s1Streak = 0;
    totalWrong++;
  }

  document.getElementById('s1-streak').textContent = `🔥 Streak: ${s1Streak}`;

  // Show reveal
  const revealHTML = `
    <div class="reveal-title">✅ Answer Key</div>
    <div class="reveal-grid">
      ${q.reveal.map(r => `
        <div class="reveal-item ${r.highlight ? 'highlight' : ''}">
          <div class="r-key">${r.key}</div>
          <div class="r-val">${r.val}</div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:10px;font-size:0.82rem;color:var(--muted);">
      Score for this question: <strong style="color:${score === total ? '#34a853' : '#ea4335'}">${score}/${total} fields correct</strong>
    </div>
  `;
  const reveal = document.getElementById('s1-reveal');
  reveal.innerHTML = revealHTML;
  reveal.classList.add('show');

  // Show next button
  document.getElementById('s1-nextbtn').style.display = 'flex';
  updateScoreDisplay();
}

// ============================================================
// NEXT QUESTION
// ============================================================
function nextS1() {
  s1Index++;
  renderS1Question();
}

function restartSection(n) {
  if (n === 1) {
    s1Index = 0;
    s1Correct = 0;
    s1Wrong = 0;
    s1Streak = 0;
    document.getElementById('s1-result').classList.remove('show');
    document.getElementById('s1-question-area').style.display = 'block';
    totalCorrect = 0;
    totalWrong = 0;
    updateScoreDisplay();
    renderS1Question();
  } else if (n === 2) {
    s2Index = 0;
    s2Correct = 0;
    s2Wrong = 0;
    s2Streak = 0;
    document.getElementById('s2-result').classList.remove('show');
    document.getElementById('s2-question-area').style.display = 'block';
    updateScoreDisplay();
    renderS2Question();
  }
}

function showS1Result() {
  document.getElementById('s1-question-area').style.display = 'none';
  const result = document.getElementById('s1-result');
  result.classList.add('show');

  const pct = Math.round((s1Correct / section1.length) * 100);
  document.getElementById('s1-rscore').textContent = `${s1Correct}/${section1.length}`;

  let trophy, title, msg;
  if (pct === 100) { trophy = '🏆'; title = 'Perfect! Section 1 Complete!'; msg = 'Excellent! You found all 6 patents correctly!'; }
  else if (pct >= 80) { trophy = '🎯'; title = 'Great Job!'; msg = 'Almost perfect! Review any missed answers above.'; }
  else if (pct >= 60) { trophy = '💪'; title = 'Good Progress!'; msg = 'Keep practicing! Use the hints to search faster.'; }
  else { trophy = '📚'; title = 'Keep Practicing!'; msg = 'Practice the search techniques and try again!'; }

  document.getElementById('s1-trophy').textContent = trophy;
  document.getElementById('s1-rtitle').textContent = title;
  document.getElementById('s1-rmsg').textContent = msg;

  document.getElementById('s1-progress').style.width = '100%';
  updateScoreDisplay();
}

function updateScoreDisplay() {
  const total = totalCorrect + totalWrong;
  document.getElementById('sc-total').textContent = total;
  document.getElementById('sc-correct').textContent = totalCorrect;
  document.getElementById('sc-wrong').textContent = totalWrong;
  document.getElementById('sc-pct').textContent = total > 0 ? Math.round(totalCorrect / total * 100) + '%' : '—';
}

// ============================================================
// SECTION 2 DATA — 6 Patents (CPC / Country / Date Clues)
// Answers: Title, Application Number, Status
// ============================================================
const section2 = [
  {
    qnum: 1,
    website: 'google',
    websiteLabel: 'Google Patents',
    icon: '🔍',
    clues: [
      { icon: '🏷️', key: 'CPC Code', val: 'G06F21/32' },
      { icon: '🌍', key: 'Country', val: 'United States (US)' },
      { icon: '📅', key: 'Publication Date', val: '2015-03-12' }
    ],
    hint: 'Search Google Patents → CPC: G06F21/32 → Assignee: Samsung Electronics → Filed: 2014-09-09 → Publication: US20150071510A1',
    answers: {
      title: 'APPARATUS AND METHOD FOR RECOGNIZING FINGERPRINT',
      appnumber: 'US14/481,791',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'Apparatus and method for recognizing fingerprint', highlight: false },
      { key: 'Application Number', val: 'US14/481,791', highlight: true },
      { key: 'Publication Number', val: 'US20150071510A1', highlight: false },
      { key: 'CPC Code', val: 'G06F21/32', highlight: false },
      { key: 'Filed Date', val: '2014-09-09', highlight: false },
      { key: 'Grant Date', val: '2016-12-20', highlight: false },
      { key: 'Status', val: 'GRANTED (Expired - Fee Related)', highlight: true },
      { key: 'Assignee', val: 'Samsung Electronics Co Ltd', highlight: false }
    ]
  },
  {
    qnum: 2,
    website: 'google',
    websiteLabel: 'Google Patents',
    icon: '🔍',
    clues: [
      { icon: '🏷️', key: 'CPC Code', val: 'H04B5/0037' },
      { icon: '🌍', key: 'Country', val: 'United States (US)' },
      { icon: '📅', key: 'Filed Date', val: '2019-01-18' }
    ],
    hint: 'Search Google Patents → CPC: H04B5/0037 → Assignee: Apple Inc → Filed: 2019-01-18 → Look for wireless charging with shared inductor',
    answers: {
      title: 'WIRELESSLY CHARGED ELECTRONIC DEVICE WITH SHARED INDUCTOR CIRCUITRY',
      appnumber: 'US16/251,904',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'Wirelessly charged electronic device with shared inductor circuitry', highlight: false },
      { key: 'Application Number', val: 'US16/251,904', highlight: true },
      { key: 'Publication Number', val: 'US20190158149A1', highlight: false },
      { key: 'CPC Code', val: 'H04B5/0037', highlight: false },
      { key: 'Filed Date', val: '2019-01-18', highlight: false },
      { key: 'Grant Date', val: '2021-03-23', highlight: false },
      { key: 'Status', val: 'GRANTED (Active)', highlight: true },
      { key: 'Assignee', val: 'Apple Inc', highlight: false }
    ]
  },
  {
    qnum: 3,
    website: 'espacenet',
    websiteLabel: 'Espacenet',
    icon: '🇪🇺',
    clues: [
      { icon: '🏷️', key: 'CPC Code', val: 'H02J 50/12' },
      { icon: '🌍', key: 'Country', val: 'United States (US)' },
      { icon: '📅', key: 'Application Date', val: '17.09.2018' }
    ],
    hint: 'Go to Espacenet → CPC: H02J 50/12 → Application Date: 20180917 → Title contains "inductive charging" → App Number: 16133195',
    answers: {
      title: 'DETECTION OF COIL COUPLING IN AN INDUCTIVE CHARGING SYSTEM',
      appnumber: '16133195',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'Detection of coil coupling in an inductive charging system', highlight: false },
      { key: 'Application Number', val: '16133195', highlight: true },
      { key: 'Publication Number', val: '20190020213', highlight: false },
      { key: 'CPC Codes', val: 'G01R 31/315 · H02J 7/025 · H02J 50/12', highlight: false },
      { key: 'Application Date', val: '17.09.2018', highlight: false },
      { key: 'Grant Date', val: '29.12.2020', highlight: false },
      { key: 'Status', val: 'GRANTED (Grant Number: 10879721)', highlight: true },
      { key: 'Publication Kind', val: 'B2', highlight: false }
    ]
  },
  {
    qnum: 4,
    website: 'espacenet',
    websiteLabel: 'Espacenet',
    icon: '🇪🇺',
    clues: [
      { icon: '🏷️', key: 'IPC Code', val: 'H04L · H04W' },
      { icon: '🌍', key: 'Country / Office', val: 'India (IN)' },
      { icon: '📅', key: 'Application Date', val: '11.08.2021' }
    ],
    hint: 'Espacenet → Office: India → IPC: H04W → Applicant: APPLE INC → Title: "Voice over Internet Protocol" → App Date: 11.08.2021',
    answers: {
      title: 'VOICE OVER INTERNET PROTOCOL MULTIMEDIA SUBSYSTEM',
      appnumber: '202141036332',
      status: 'Published'
    },
    reveal: [
      { key: 'Title', val: 'Voice over Internet Protocol Multimedia Subsystem', highlight: false },
      { key: 'Application Number', val: '202141036332', highlight: true },
      { key: 'Publication Number', val: '202141036332', highlight: false },
      { key: 'IPC Codes', val: 'H04L · H04W', highlight: false },
      { key: 'Application Date', val: '11.08.2021', highlight: false },
      { key: 'Publication Date', val: '17.02.2023', highlight: false },
      { key: 'Status', val: 'PUBLISHED (Publication Kind: A)', highlight: true },
      { key: 'Applicant', val: 'APPLE INC', highlight: false }
    ]
  },
  {
    qnum: 5,
    website: 'espacenet',
    websiteLabel: 'Espacenet',
    icon: '🇪🇺',
    clues: [
      { icon: '🏷️', key: 'IPC Code', val: 'H04J4/00 · H04L1/00 · H04W74/00' },
      { icon: '🌍', key: 'Country / Office', val: 'United States (US)' },
      { icon: '📅', key: 'Priority Date', val: '1998-06-12' }
    ],
    hint: 'Espacenet → Applicant: CISCO SYSTEMS → IPC: H04W74/00 → Priority Date: 19980612 → Title: "MAC protocol multiple data rates"',
    answers: {
      title: 'MAC PROTOCOL EMPLOYING MULTIPLE DATA RATES',
      appnumber: 'US9730598A',
      status: 'Granted'
    },
    reveal: [
      { key: 'Title', val: 'MAC protocol employing multiple data rates', highlight: false },
      { key: 'Application Number', val: 'US9730598A', highlight: true },
      { key: 'Publication Number', val: 'US6463096B1', highlight: false },
      { key: 'IPC Codes', val: 'H04J4/00 · H04L1/00 · H04W72/04', highlight: false },
      { key: 'Priority Date', val: '1998-06-12', highlight: false },
      { key: 'Publication Date', val: '2002-10-08', highlight: false },
      { key: 'Status', val: 'GRANTED (B1 — first publication as grant)', highlight: true },
      { key: 'Applicant', val: 'CISCO SYSTEMS INC [US]', highlight: false }
    ]
  },
  {
    qnum: 6,
    website: 'espacenet',
    websiteLabel: 'Espacenet',
    icon: '🇪🇺',
    clues: [
      { icon: '🏷️', key: 'CPC Code', val: 'H02S20/23 · H10F19/80 · Y02B10/10' },
      { icon: '🌍', key: 'Country / Office', val: 'Europe (EP)' },
      { icon: '📅', key: 'Priority Date', val: '2006-06-02 (NL1031941A)' }
    ],
    hint: 'Espacenet → Office: EP → CPC: H02S20/23 → Applicant: BRS EXCELL GLASS or MOVARES NEDERLAND → Priority: NL1031941A 2006-06-02',
    answers: {
      title: 'COLD-CURVED SOLAR PANEL',
      appnumber: 'EP07747321A',
      status: 'Published'
    },
    reveal: [
      { key: 'Title', val: 'Cold-curved solar panel', highlight: false },
      { key: 'Application Number', val: 'EP07747321A', highlight: true },
      { key: 'Publication Number', val: 'EP2025007A1', highlight: false },
      { key: 'CPC Codes', val: 'H02S20/23 · H10F19/80 · F24S2080/503', highlight: false },
      { key: 'Priority Date', val: '2006-06-02 (NL1031941A)', highlight: false },
      { key: 'Publication Date', val: '2009-02-18', highlight: false },
      { key: 'Status', val: 'PUBLISHED (A1) — also published as EP2025007B1 (Granted)', highlight: true },
      { key: 'Applicant', val: 'BRS EXCELL GLASS B V [NL]; MOVARES NEDERLAND BV [NL]', highlight: false }
    ]
  }
];

// ============================================================
// SECTION 2 STATE
// ============================================================
let s2Index = 0;
let s2Correct = 0;
let s2Wrong = 0;
let s2Streak = 0;
let s2Checked = false;

// ============================================================
// RENDER SECTION 2 QUESTION
// ============================================================
function renderS2Question() {
  const area = document.getElementById('s2-question-area');
  document.getElementById('s2-result').classList.remove('show');

  if (s2Index >= section2.length) {
    showS2Result();
    return;
  }

  s2Checked = false;
  const q = section2[s2Index];

  document.getElementById('s2-progress').style.width = ((s2Index / section2.length) * 100) + '%';
  document.getElementById('s2-qnum').textContent = `Question ${s2Index + 1} of ${section2.length}`;
  document.getElementById('s2-streak').textContent = `🔥 Streak: ${s2Streak}`;

  const cluesHTML = q.clues.map(c => `
    <div class="clue-item">
      <span class="clue-icon">${c.icon}</span>
      <div class="clue-content">
        <div class="clue-key">${c.key}</div>
        <div class="clue-val">${c.val}</div>
      </div>
    </div>
  `).join('');

  const html = `
    <div class="question-card" id="s2-card">
      <div class="q-header">
        <div class="q-icon ${q.website}">${q.icon}</div>
        <div class="q-meta-info">
          <div class="website-badge badge-${q.website}">${q.websiteLabel}</div>
          <div class="q-num">Question ${q.qnum} / 6 — Use CPC/IPC code + date to find this patent</div>
        </div>
      </div>

      <div class="clues-section">
        <div class="clues-label">🏷️ Search Clues</div>
        <div class="clues-grid">${cluesHTML}</div>
        <div class="hint-box">
          💡 <span><strong>Hint:</strong> ${q.hint}</span>
        </div>
      </div>

      <div class="answer-section">
        <div class="answer-label">✏️ Your Answer</div>
        <div class="answer-grid">
          <div class="answer-field" style="grid-column:1/-1">
            <label>Title <span class="req">*</span></label>
            <input type="text" id="s2-f-title" placeholder="Full patent title in CAPS" autocomplete="off" />
            <div class="field-feedback" id="s2-fb-title"></div>
          </div>
          <div class="answer-field">
            <label>Application Number <span class="req">*</span></label>
            <input type="text" id="s2-f-appnum" placeholder="e.g. US14/481,791" autocomplete="off" />
            <div class="field-feedback" id="s2-fb-appnum"></div>
          </div>
          <div class="answer-field">
            <label>Application Status <span class="req">*</span></label>
            <select id="s2-f-status">
              <option value="">-- Select Status --</option>
              <option value="Filed">Filed</option>
              <option value="Published">Published</option>
              <option value="Granted">Granted</option>
            </select>
            <div class="field-feedback" id="s2-fb-status"></div>
          </div>
        </div>

        <div class="action-row">
          <button class="btn btn-check" onclick="checkS2Answer()">✅ Check Answer</button>
          <button class="btn btn-next show" id="s2-nextbtn" onclick="nextS2()" style="display:none">Next Question →</button>
          <button class="btn btn-skip" onclick="nextS2()">Skip ⏭</button>
        </div>

        <div class="answer-reveal" id="s2-reveal"></div>
      </div>
    </div>
  `;

  area.innerHTML = html;
}

function checkS2Answer() {
  if (s2Checked) return;
  s2Checked = true;

  const q = section2[s2Index];
  const ans = q.answers;

  const userTitle = document.getElementById('s2-f-title').value;
  const userApp = document.getElementById('s2-f-appnum').value;
  const userStatus = document.getElementById('s2-f-status').value;

  let score = 0;
  const total = 3;

  function checkField2(inputId, fbId, userVal, correctVal) {
    const el = document.getElementById(inputId);
    const fb = document.getElementById(fbId);
    const correct = normalize(userVal) === normalize(correctVal);
    el.classList.add(correct ? 'is-correct' : 'is-wrong');
    fb.className = `field-feedback show ${correct ? 'correct' : 'wrong'}`;
    fb.innerHTML = correct ? `✅ Correct!` : `❌ Answer: ${correctVal}`;
    if (correct) score++;
  }

  checkField2('s2-f-title', 's2-fb-title', userTitle, ans.title);
  checkField2('s2-f-appnum', 's2-fb-appnum', userApp, ans.appnumber);
  checkField2('s2-f-status', 's2-fb-status', userStatus, ans.status);

  if (score === total) { s2Correct++; s2Streak++; totalCorrect++; }
  else { s2Wrong++; s2Streak = 0; totalWrong++; }

  document.getElementById('s2-streak').textContent = `🔥 Streak: ${s2Streak}`;

  const revealHTML = `
    <div class="reveal-title">✅ Answer Key</div>
    <div class="reveal-grid">
      ${q.reveal.map(r => `
        <div class="reveal-item ${r.highlight ? 'highlight' : ''}">
          <div class="r-key">${r.key}</div>
          <div class="r-val">${r.val}</div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:10px;font-size:0.82rem;color:var(--muted);">
      Score for this question: <strong style="color:${score === total ? '#34a853' : '#ea4335'}">${score}/${total} fields correct</strong>
    </div>
  `;
  const reveal = document.getElementById('s2-reveal');
  reveal.innerHTML = revealHTML;
  reveal.classList.add('show');
  document.getElementById('s2-nextbtn').style.display = 'flex';
  updateScoreDisplay();
}

function nextS2() { s2Index++; renderS2Question(); }

function showS2Result() {
  document.getElementById('s2-question-area').style.display = 'none';
  const result = document.getElementById('s2-result');
  result.classList.add('show');
  const pct = Math.round((s2Correct / section2.length) * 100);
  document.getElementById('s2-rscore').textContent = `${s2Correct}/${section2.length}`;
  let trophy, title, msg;
  if (pct === 100) { trophy = '🏆'; title = 'Perfect! Section 2 Complete!'; msg = 'Excellent! You nailed all 6 CPC-clue patents!'; }
  else if (pct >= 80) { trophy = '🎯'; title = 'Great Job!'; msg = 'Almost perfect! Review any missed answers above.'; }
  else if (pct >= 60) { trophy = '💪'; title = 'Good Progress!'; msg = 'Keep practicing CPC code lookups!'; }
  else { trophy = '📚'; title = 'Keep Practicing!'; msg = 'Study CPC codes and try searching by classification!'; }
  document.getElementById('s2-trophy').textContent = trophy;
  document.getElementById('s2-rtitle').textContent = title;
  document.getElementById('s2-rmsg').textContent = msg;
  document.getElementById('s2-progress').style.width = '100%';
  updateScoreDisplay();
}

// ============================================================
// SECTION 3 DATA — Company + Date + Description clues
// User enters: Application Number, Title, Status
// ============================================================
const section3 = [
  {
    qnum: 1, website: 'google', websiteLabel: 'Google Patents', icon: '🔍',
    clues: [
      { icon: '🏢', key: 'Company', val: 'Intel Corp' },
      { icon: '📅', key: 'Filing Date', val: '2023-07-25' },
      { icon: '📝', key: 'Title Description', val: 'Graphics processor with processing cluster array for multiple neural networks using streaming multiprocessors' }
    ],
    hint: 'Search: "graphics neural network processor" → Filter Assignee: Intel Corp → Filing Date: 2023-07-25 in Google Patents',
    answers: { appnumber: 'US18/358,067', title: 'GRAPHICS NEURAL NETWORK PROCESSOR, METHOD, AND SYSTEM', status: 'Granted' },
    reveal: [
      { key: 'Title', val: 'Graphics neural network processor, method, and system', highlight: false },
      { key: 'Application Number', val: 'US18/358,067', highlight: true },
      { key: 'Publication Number', val: 'US11900665B2', highlight: false },
      { key: 'Filing Date', val: '2023-07-25', highlight: false },
      { key: 'Grant Date', val: '2024-02-13', highlight: false },
      { key: 'Status', val: 'GRANTED (B2 exists)', highlight: true },
      { key: 'Expiration', val: '2037-04-24', highlight: false }
    ]
  },
  {
    qnum: 2, website: 'google', websiteLabel: 'Google Patents', icon: '🔍',
    clues: [
      { icon: '🏢', key: 'Company', val: 'Cisco Systems Inc' },
      { icon: '📅', key: 'Filing Date', val: '1998-06-12' },
      { icon: '📝', key: 'Title Description', val: 'Combining high and low data rate traffic on common transmission medium using bandwidth reservation scheme' }
    ],
    hint: 'Search: "MAC protocol multiple data rates" → Filter Assignee: Cisco Systems → Filing Date: 1998-06-12 in Google Patents',
    answers: { appnumber: 'US09/097,305', title: 'MAC PROTOCOL EMPLOYING MULTIPLE DATA RATES', status: 'Granted' },
    reveal: [
      { key: 'Title', val: 'MAC protocol employing multiple data rates', highlight: false },
      { key: 'Application Number', val: 'US09/097,305', highlight: true },
      { key: 'Publication Number', val: 'US6463096B1', highlight: false },
      { key: 'Filing Date', val: '1998-06-12', highlight: false },
      { key: 'Grant Date', val: '2002-10-08', highlight: false },
      { key: 'Status', val: 'GRANTED (B1 exists)', highlight: true },
      { key: 'Expiration', val: '2018-06-12 (Expired)', highlight: false }
    ]
  },
  {
    qnum: 3, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'Google Inc.' },
      { icon: '📅', key: 'Application Date', val: '07.02.2013' },
      { icon: '📝', key: 'Title Description', val: 'Wearable device assembly with head retention structure and modular connecting member for head mountable display' }
    ],
    hint: 'Espacenet → Advanced Search → Title: "head mountable display" → Applicant: Google Inc → Publication Date: 20140807:20140808',
    answers: { appnumber: '13762146', title: 'MODULAR FRAME CONSTRUCTION FOR HEAD MOUNTABLE DISPLAY', status: 'Published' },
    reveal: [
      { key: 'Title', val: 'Modular frame construction for head mountable display', highlight: false },
      { key: 'Application Number', val: '13762146', highlight: true },
      { key: 'Publication Number', val: '20140218269', highlight: false },
      { key: 'Application Date', val: '07.02.2013', highlight: false },
      { key: 'Publication Date', val: '07.08.2014', highlight: false },
      { key: 'Status', val: 'PUBLISHED (Kind A1 — No B number)', highlight: true },
      { key: 'Inventor', val: 'Cazalet Peter Michael, Hebenstreit Joseph John', highlight: false }
    ]
  },
  {
    qnum: 4, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'Amazon Technologies, Inc.' },
      { icon: '📅', key: 'Application Date', val: '13.12.2018' },
      { icon: '📝', key: 'Title Description', val: 'Device detects disconnect from network and enters automatic setup mode using trigger conditions' }
    ],
    hint: 'Espacenet → Advanced Search → Title: "automatic setup mode disconnect network" → Applicant: Amazon Technologies → Publication Date: 20200317:20200317',
    answers: { appnumber: '16219743', title: 'AUTOMATIC SETUP MODE AFTER DISCONNECT FROM A NETWORK', status: 'Granted' },
    reveal: [
      { key: 'Title', val: 'Automatic setup mode after disconnect from a network', highlight: false },
      { key: 'Application Number', val: '16219743', highlight: true },
      { key: 'Publication Number', val: '10593174', highlight: false },
      { key: 'Application Date', val: '13.12.2018', highlight: false },
      { key: 'Grant Date', val: '17.03.2020', highlight: false },
      { key: 'Status', val: 'GRANTED (Publication Kind B1)', highlight: true },
      { key: 'Inventor', val: 'Joshua Hongpyo Yoon', highlight: false }
    ]
  },
  {
    qnum: 5, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'ZOHO Corporation Private Ltd [IN]' },
      { icon: '📅', key: 'Application Date', val: '2023-08-08' },
      { icon: '📝', key: 'Title Description', val: 'System automatically creates, maintains, valuates and re-valuates exhibition booth in a venue' }
    ],
    hint: 'Espacenet → Advanced Search → Title: "automated valuation exhibition booth" → Applicant: ZOHO Corporation → Publication Date: 20240215:20240215',
    answers: { appnumber: 'US202318446449A', title: 'AUTOMATED VALUATION OF AN EXHIBITION BOOTH', status: 'Published' },
    reveal: [
      { key: 'Title', val: 'Automated valuation of an exhibition booth', highlight: false },
      { key: 'Application Number', val: 'US202318446449A', highlight: true },
      { key: 'Publication Number', val: 'US2024054514A1', highlight: false },
      { key: 'Application Date', val: '2023-08-08', highlight: false },
      { key: 'Publication Date', val: '2024-02-15', highlight: false },
      { key: 'Status', val: 'PUBLISHED (A1 only, No B number)', highlight: true },
      { key: 'Applicant', val: 'Zoho Corporation Private Ltd [IN]', highlight: false }
    ]
  },
  {
    qnum: 6, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    clues: [
      { icon: '🏢', key: 'Company (Applicant)', val: 'DISNEY ENTPR INC [US]' },
      { icon: '📅', key: 'Application Date', val: '2017-01-10' },
      { icon: '📝', key: 'Title Description', val: 'Simulation adapter attached to real-world physical object communicates characteristics to simulation device' }
    ],
    hint: 'Espacenet → Advanced Search → Title: "simulation experience physical objects" → Applicant: DISNEY ENTPR INC → Publication Date: 20200421:20200421',
    answers: { appnumber: 'US201715403075A', title: 'SIMULATION EXPERIENCE WITH PHYSICAL OBJECTS', status: 'Granted' },
    reveal: [
      { key: 'Title', val: 'Simulation experience with physical objects', highlight: false },
      { key: 'Application Number', val: 'US201715403075A', highlight: true },
      { key: 'Publication Number', val: 'US10627909B2', highlight: false },
      { key: 'Application Date', val: '2017-01-10', highlight: false },
      { key: 'Publication Date', val: '2020-04-21', highlight: false },
      { key: 'Status', val: 'GRANTED (B2 in Published as)', highlight: true },
      { key: 'Inventors', val: 'Arana Mark, Havey Benjamin F, Drake Edward, Chen Alexander C', highlight: false }
    ]
  }
];

// ============================================================
// SECTION 4 DATA — Publication number clue only
// User enters: App Number, App Date, Pub Date, Title, Status
// ============================================================
const section4 = [
  {
    qnum: 1, website: 'google', websiteLabel: 'Google Patents', icon: '🔍',
    appNumber: 'US15/763,391',
    hint: 'Enter US15/763,391 in Google Patents search bar → Find the exact patent',
    answers: { appdate: '2016-09-12', pubdate: '2021-02-16', title: 'METHOD FOR OPERATING A STEERING SYSTEM OF A MOTOR VEHICLE', status: 'Granted' },
    reveal: [
      { key: 'Application Number', val: 'US15/763,391', highlight: false },
      { key: 'Application Date', val: '2016-09-12', highlight: true },
      { key: 'Publication Date', val: '2021-02-16', highlight: true },
      { key: 'Title', val: 'Method for operating a steering system of a motor vehicle', highlight: true },
      { key: 'Status', val: 'GRANTED (B2)', highlight: true },
      { key: 'Assignee', val: 'Robert Bosch GmbH, Robert Bosch Automotive Steering GmbH', highlight: false },
      { key: 'Expiration', val: '2037-03-05', highlight: false }
    ]
  },
  {
    qnum: 2, website: 'google', websiteLabel: 'Google Patents', icon: '🔍',
    appNumber: 'US16/057,892',
    hint: 'Enter US16/057,892 in Google Patents search bar → Find the exact patent',
    answers: { appdate: '2018-08-08', pubdate: '2022-11-15', title: 'AIR DELIVERY SYSTEM FOR A GAS TURBINE ENGINE', status: 'Granted' },
    reveal: [
      { key: 'Application Number', val: 'US16/057,892', highlight: false },
      { key: 'Application Date', val: '2018-08-08', highlight: true },
      { key: 'Publication Date', val: '2022-11-15', highlight: true },
      { key: 'Title', val: 'Air delivery system for a gas turbine engine', highlight: true },
      { key: 'Status', val: 'GRANTED (B2)', highlight: true },
      { key: 'Assignee', val: 'General Electric Co Polska Sp zoo, General Electric Co', highlight: false },
      { key: 'Expiration', val: '2039-09-26', highlight: false }
    ]
  },
  {
    qnum: 3, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    appNumber: '14273399',
    hint: 'Go to Espacenet → Advanced Search → Application Number: 14273399 → Open patent',
    answers: { appdate: '08.05.2014', pubdate: '20.11.2014', title: 'PROVIDING VISUAL EFFECTS FOR IMAGES', status: 'Granted' },
    reveal: [
      { key: 'Application Number', val: '14273399', highlight: false },
      { key: 'Application Date', val: '08.05.2014', highlight: true },
      { key: 'Publication Date', val: '20.11.2014', highlight: true },
      { key: 'Title', val: 'Providing visual effects for images', highlight: true },
      { key: 'Grant Date', val: '30.01.2018', highlight: false },
      { key: 'Status', val: 'GRANTED (Publication Kind B2)', highlight: true },
      { key: 'Applicant', val: 'Google Inc., Google LLC', highlight: false }
    ]
  },
  {
    qnum: 4, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    appNumber: '15691238',
    hint: 'Go to Espacenet → Advanced Search → Application Number: 15691238 → Open patent',
    answers: { appdate: '30.08.2017', pubdate: '30.07.2019', title: 'INTELLIGENT ELECTRICAL SYSTEM FOR VEHICLE', status: 'Granted' },
    reveal: [
      { key: 'Application Number', val: '15691238', highlight: false },
      { key: 'Application Date', val: '30.08.2017', highlight: true },
      { key: 'Publication Date', val: '30.07.2019', highlight: true },
      { key: 'Title', val: 'Intelligent electrical system for vehicle', highlight: true },
      { key: 'Grant Date', val: '30.07.2019', highlight: false },
      { key: 'Status', val: 'GRANTED (Publication Kind B1)', highlight: true },
      { key: 'Applicant', val: 'Amazon Technologies, Amazon Technologies Inc.', highlight: false }
    ]
  },
  {
    qnum: 5, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    appNumber: 'US202418406003A',
    hint: 'Go to Espacenet → Advanced Search → Application Number: US202418406003A → Open patent',
    answers: { appdate: '2024-01-05', pubdate: '2024-07-18', title: 'EXTENSIBLE BUILT-IN OBJECT MANAGEMENT', status: 'Published' },
    reveal: [
      { key: 'Application Number', val: 'US202418406003A', highlight: false },
      { key: 'Application Date', val: '2024-01-05', highlight: true },
      { key: 'Publication Date', val: '2024-07-18', highlight: true },
      { key: 'Title', val: 'Extensible built-in object management', highlight: true },
      { key: 'Status', val: 'PUBLISHED (A1 only)', highlight: true },
      { key: 'Applicant', val: 'Zoho Corporation Private Ltd [IN]', highlight: false }
    ]
  },
  {
    qnum: 6, website: 'espacenet', websiteLabel: 'Espacenet', icon: '🇪🇺',
    appNumber: 'US201313848694A',
    hint: 'Go to Espacenet → Advanced Search → Application Number: US201313848694A → Open patent',
    answers: { appdate: '2013-03-21', pubdate: '2020-07-07', title: 'DYNAMIC MODIFICATION OF NAVIGATION MAPS', status: 'Granted' },
    reveal: [
      { key: 'Application Number', val: 'US201313848694A', highlight: false },
      { key: 'Application Date', val: '2013-03-21', highlight: true },
      { key: 'Publication Date', val: '2020-07-07', highlight: true },
      { key: 'Title', val: 'Dynamic modification of navigation maps', highlight: true },
      { key: 'Status', val: 'GRANTED (B2)', highlight: true },
      { key: 'Applicant', val: 'DISNEY ENTPR INC [US]', highlight: false }
    ]
  }
];

// ============================================================
// SECTION 3 STATE & LOGIC
// ============================================================
let s3Index = 0, s3Correct = 0, s3Wrong = 0, s3Streak = 0, s3Checked = false;

function renderS3Question() {
  document.getElementById('s3-result').classList.remove('show');
  if (s3Index >= section3.length) { showS3Result(); return; }
  s3Checked = false;
  const q = section3[s3Index];
  document.getElementById('s3-progress').style.width = ((s3Index / section3.length) * 100) + '%';
  document.getElementById('s3-qnum').textContent = `Question ${s3Index + 1} of ${section3.length}`;
  document.getElementById('s3-streak').textContent = `🔥 Streak: ${s3Streak}`;

  const cluesHTML = q.clues.map(c => `
    <div class="clue-item">
      <span class="clue-icon">${c.icon}</span>
      <div class="clue-content">
        <div class="clue-key">${c.key}</div>
        <div class="clue-val">${c.val}</div>
      </div>
    </div>`).join('');

  document.getElementById('s3-question-area').innerHTML = `
    <div class="question-card">
      <div class="q-header">
        <div class="q-icon ${q.website}">${q.icon}</div>
        <div class="q-meta-info">
          <div class="website-badge badge-${q.website}">${q.websiteLabel}</div>
          <div class="q-num">Question ${q.qnum} / 6 — Find this patent using the clues below</div>
        </div>
      </div>
      <div class="clues-section">
        <div class="clues-label">🔎 Search Clues</div>
        <div class="clues-grid">${cluesHTML}</div>
        <div class="hint-box">💡 <span><strong>Hint:</strong> ${q.hint}</span></div>
      </div>
      <div class="answer-section">
        <div class="answer-label">✏️ Your Answer — Fill in 3 fields</div>
        <div class="answer-grid">
          <div class="answer-field">
            <label>Application Number <span class="req">*</span></label>
            <input type="text" id="s3-f-appnum" placeholder="e.g. US18/358,067" autocomplete="off" />
            <div class="field-feedback" id="s3-fb-appnum"></div>
          </div>
          <div class="answer-field">
            <label>Title <span class="req">*</span></label>
            <input type="text" id="s3-f-title" placeholder="Full title in CAPS" autocomplete="off" />
            <div class="field-feedback" id="s3-fb-title"></div>
          </div>
          <div class="answer-field">
            <label>Application Status <span class="req">*</span></label>
            <select id="s3-f-status">
              <option value="">-- Select Status --</option>
              <option value="Filed">Filed</option>
              <option value="Published">Published</option>
              <option value="Granted">Granted</option>
            </select>
            <div class="field-feedback" id="s3-fb-status"></div>
          </div>
        </div>
        <div class="action-row">
          <button class="btn btn-check" onclick="checkS3Answer()">✅ Check Answer</button>
          <button class="btn btn-next" id="s3-nextbtn" onclick="nextS3()" style="display:none">Next Question →</button>
          <button class="btn btn-skip" onclick="nextS3()">Skip ⏭</button>
        </div>
        <div class="answer-reveal" id="s3-reveal"></div>
      </div>
    </div>`;
}

function checkS3Answer() {
  if (s3Checked) return;
  s3Checked = true;
  const q = section3[s3Index];
  const ans = q.answers;
  let score = 0;
  function cf(iid, fid, uv, cv) {
    const el = document.getElementById(iid), fb = document.getElementById(fid);
    const ok = normalize(uv) === normalize(cv);
    el.classList.add(ok ? 'is-correct' : 'is-wrong');
    fb.className = `field-feedback show ${ok ? 'correct' : 'wrong'}`;
    fb.innerHTML = ok ? `✅ Correct!` : `❌ Answer: ${cv}`;
    if (ok) score++;
  }
  cf('s3-f-appnum', 's3-fb-appnum', document.getElementById('s3-f-appnum').value, ans.appnumber);
  cf('s3-f-title', 's3-fb-title', document.getElementById('s3-f-title').value, ans.title);
  cf('s3-f-status', 's3-fb-status', document.getElementById('s3-f-status').value, ans.status);

  if (score === 3) { s3Correct++; s3Streak++; totalCorrect++; }
  else { s3Wrong++; s3Streak = 0; totalWrong++; }
  document.getElementById('s3-streak').textContent = `🔥 Streak: ${s3Streak}`;

  const reveal = document.getElementById('s3-reveal');
  reveal.innerHTML = `
    <div class="reveal-title">✅ Answer Key</div>
    <div class="reveal-grid">${q.reveal.map(r => `<div class="reveal-item ${r.highlight ? 'highlight' : ''}"><div class="r-key">${r.key}</div><div class="r-val">${r.val}</div></div>`).join('')}</div>
    <div style="margin-top:10px;font-size:0.82rem;color:var(--muted);">Score: <strong style="color:${score === 3 ? '#34a853' : '#ea4335'}">${score}/3 fields correct</strong></div>`;
  reveal.classList.add('show');
  document.getElementById('s3-nextbtn').style.display = 'flex';
  updateScoreDisplay();
}

function nextS3() { s3Index++; renderS3Question(); }

function showS3Result() {
  document.getElementById('s3-question-area').style.display = 'none';
  document.getElementById('s3-result').classList.add('show');
  const pct = Math.round((s3Correct / section3.length) * 100);
  document.getElementById('s3-rscore').textContent = `${s3Correct}/${section3.length}`;
  const t = pct === 100 ? ['🏆', 'Perfect!', 'All 6 description-clue patents found correctly!'] : pct >= 80 ? ['🎯', 'Great Job!', 'Almost perfect!'] : pct >= 60 ? ['💪', 'Good Progress!', 'Keep going!'] : ['📚', 'Keep Practicing!', 'Review the hints and try again!'];
  document.getElementById('s3-trophy').textContent = t[0];
  document.getElementById('s3-rtitle').textContent = t[1];
  document.getElementById('s3-rmsg').textContent = t[2];
  document.getElementById('s3-progress').style.width = '100%';
  updateScoreDisplay();
}

// ============================================================
// SECTION 4 STATE & LOGIC
// ============================================================
let s4Index = 0, s4Correct = 0, s4Wrong = 0, s4Streak = 0, s4Checked = false;

function renderS4Question() {
  document.getElementById('s4-result').classList.remove('show');
  if (s4Index >= section4.length) { showS4Result(); return; }
  s4Checked = false;
  const q = section4[s4Index];
  document.getElementById('s4-progress').style.width = ((s4Index / section4.length) * 100) + '%';
  document.getElementById('s4-qnum').textContent = `Question ${s4Index + 1} of ${section4.length}`;
  document.getElementById('s4-streak').textContent = `🔥 Streak: ${s4Streak}`;

  document.getElementById('s4-question-area').innerHTML = `
    <div class="question-card">
      <div class="q-header">
        <div class="q-icon ${q.website}">${q.icon}</div>
        <div class="q-meta-info">
          <div class="website-badge badge-${q.website}">${q.websiteLabel}</div>
          <div class="q-num">Question ${q.qnum} / 6 — Use the application number to find the patent</div>
        </div>
      </div>
      <div class="clues-section">
        <div class="clues-label">🔎 Application Number (Your Only Clue)</div>
        <div class="clues-grid">
          <div class="clue-item">
            <span class="clue-icon">📋</span>
            <div class="clue-content">
              <div class="clue-key">Application Number</div>
              <div class="clue-val" style="font-size:1.1rem;font-weight:700;color:#f9a825">${q.appNumber}</div>
            </div>
          </div>
        </div>
        <div class="hint-box">💡 <span><strong>Hint:</strong> ${q.hint}</span></div>
      </div>
      <div class="answer-section">
        <div class="answer-label">✏️ Your Answer — Fill in 4 fields</div>
        <div class="answer-grid">
          <div class="answer-field">
            <label>Application Date <span class="req">*</span></label>
            <input type="text" id="s4-f-appdate" placeholder="e.g. 2016-09-12" autocomplete="off" />
            <div class="field-feedback" id="s4-fb-appdate"></div>
          </div>
          <div class="answer-field">
            <label>Publication Date <span class="req">*</span></label>
            <input type="text" id="s4-f-pubdate" placeholder="e.g. 2021-02-16" autocomplete="off" />
            <div class="field-feedback" id="s4-fb-pubdate"></div>
          </div>
          <div class="answer-field">
            <label>Title <span class="req">*</span></label>
            <input type="text" id="s4-f-title" placeholder="Full title in CAPS" autocomplete="off" />
            <div class="field-feedback" id="s4-fb-title"></div>
          </div>
          <div class="answer-field">
            <label>Application Status <span class="req">*</span></label>
            <select id="s4-f-status">
              <option value="">-- Select Status --</option>
              <option value="Filed">Filed</option>
              <option value="Published">Published</option>
              <option value="Granted">Granted</option>
            </select>
            <div class="field-feedback" id="s4-fb-status"></div>
          </div>
        </div>
        <div class="action-row">
          <button class="btn btn-check" onclick="checkS4Answer()">✅ Check Answer</button>
          <button class="btn btn-next" id="s4-nextbtn" onclick="nextS4()" style="display:none">Next Question →</button>
          <button class="btn btn-skip" onclick="nextS4()">Skip ⏭</button>
        </div>
        <div class="answer-reveal" id="s4-reveal"></div>
      </div>
    </div>`;
}

function checkS4Answer() {
  if (s4Checked) return;
  s4Checked = true;
  const q = section4[s4Index];
  const ans = q.answers;
  let score = 0;
  function cf(iid, fid, uv, cv) {
    const el = document.getElementById(iid), fb = document.getElementById(fid);
    const ok = normalize(uv) === normalize(cv);
    el.classList.add(ok ? 'is-correct' : 'is-wrong');
    fb.className = `field-feedback show ${ok ? 'correct' : 'wrong'}`;
    fb.innerHTML = ok ? `✅ Correct!` : `❌ Answer: ${cv}`;
    if (ok) score++;
  }
  cf('s4-f-appdate', 's4-fb-appdate', document.getElementById('s4-f-appdate').value, ans.appdate);
  cf('s4-f-pubdate', 's4-fb-pubdate', document.getElementById('s4-f-pubdate').value, ans.pubdate);
  cf('s4-f-title', 's4-fb-title', document.getElementById('s4-f-title').value, ans.title);
  cf('s4-f-status', 's4-fb-status', document.getElementById('s4-f-status').value, ans.status);

  if (score === 4) { s4Correct++; s4Streak++; totalCorrect++; }
  else { s4Wrong++; s4Streak = 0; totalWrong++; }
  document.getElementById('s4-streak').textContent = `🔥 Streak: ${s4Streak}`;

  const reveal = document.getElementById('s4-reveal');
  reveal.innerHTML = `
    <div class="reveal-title">✅ Answer Key</div>
    <div class="reveal-grid">${q.reveal.map(r => `<div class="reveal-item ${r.highlight ? 'highlight' : ''}"><div class="r-key">${r.key}</div><div class="r-val">${r.val}</div></div>`).join('')}</div>
    <div style="margin-top:10px;font-size:0.82rem;color:var(--muted);">Score: <strong style="color:${score === 4 ? '#34a853' : '#ea4335'}">${score}/4 fields correct</strong></div>`;
  reveal.classList.add('show');
  document.getElementById('s4-nextbtn').style.display = 'flex';
  updateScoreDisplay();
}

function nextS4() { s4Index++; renderS4Question(); }

function showS4Result() {
  document.getElementById('s4-question-area').style.display = 'none';
  document.getElementById('s4-result').classList.add('show');
  const pct = Math.round((s4Correct / section4.length) * 100);
  document.getElementById('s4-rscore').textContent = `${s4Correct}/${section4.length}`;
  const t = pct === 100 ? ['🏆', 'Perfect! All 4 Sections Done!', 'You are 100% exam ready!'] : pct >= 80 ? ['🎯', 'Excellent!', 'Almost perfect on the hardest section!'] : pct >= 60 ? ['💪', 'Good Progress!', 'Practice more with publication numbers!'] : ['📚', 'Keep Practicing!', 'Focus on finding dates from publication numbers!'];
  document.getElementById('s4-trophy').textContent = t[0];
  document.getElementById('s4-rtitle').textContent = t[1];
  document.getElementById('s4-rmsg').textContent = t[2];
  document.getElementById('s4-progress').style.width = '100%';
  updateScoreDisplay();
}

// Update restartSection for sections 3 & 4
const origRestart = restartSection;
restartSection = function (n) {
  if (n === 3) {
    s3Index = 0; s3Correct = 0; s3Wrong = 0; s3Streak = 0;
    document.getElementById('s3-result').classList.remove('show');
    document.getElementById('s3-question-area').style.display = 'block';
    renderS3Question();
  } else if (n === 4) {
    s4Index = 0; s4Correct = 0; s4Wrong = 0; s4Streak = 0;
    document.getElementById('s4-result').classList.remove('show');
    document.getElementById('s4-question-area').style.display = 'block';
    renderS4Question();
  } else { origRestart(n); }
};

// Patch showSection to init sections on first view
const origShow = showSection;
showSection = function (n) {
  origShow(n);
  if (n === 3 && s3Index === 0 && !s3Checked) renderS3Question();
  if (n === 4 && s4Index === 0 && !s4Checked) renderS4Question();
};

// ============================================================
// INIT
// ============================================================
renderS1Question();