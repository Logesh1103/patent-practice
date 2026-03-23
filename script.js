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
  [1,2,3,4].forEach(i => {
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
      Score for this question: <strong style="color:${score===total?'#34a853':'#ea4335'}">${score}/${total} fields correct</strong>
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
  document.getElementById('sc-pct').textContent = total > 0 ? Math.round(totalCorrect/total*100) + '%' : '—';
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
      Score for this question: <strong style="color:${score===total?'#34a853':'#ea4335'}">${score}/${total} fields correct</strong>
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
// INIT
// ============================================================
renderS1Question();