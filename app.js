/* Group Events: an unofficial WhatsApp feature concept by Nitai Weinberg.
   Not affiliated with WhatsApp or Meta. All names and messages are fictional. */
(() => {
  'use strict';

  /* ---------- Icons (hand-drawn, 24px grid) ---------- */
  const P = {
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    video: '<rect x="2.5" y="6.5" width="13" height="11" rx="2.5"/><path d="M15.5 10.5l6-3.5v10l-6-3.5"/>',
    call: '<path d="M5 3.5h3.5l2 5-2.5 1.6a11.5 11.5 0 0 0 5.9 5.9l1.6-2.5 5 2v3.5a2 2 0 0 1-2 2A17 17 0 0 1 3 5.5a2 2 0 0 1 2-2z"/>',
    more: '<circle cx="12" cy="5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="19" r="1.2" fill="currentColor"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path d="M8.5 14.5l2.3 2.2 4.7-4.4"/>',
    calplain: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14.5s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/>',
    clip: '<path d="M20.5 11.5l-8.3 8.3a5.2 5.2 0 0 1-7.4-7.4l8.6-8.6a3.5 3.5 0 0 1 5 5l-8.6 8.6a1.8 1.8 0 0 1-2.5-2.5l7.9-7.9"/>',
    camera: '<path d="M3.5 8.5h3.3l1.8-2.8h6.8l1.8 2.8h3.3v11h-17z"/><circle cx="12" cy="13.8" r="3.4"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    ticks: '<path d="M2 12.5l4.5 4.5L15.5 8M11 16l1 1 9-9"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.8 1.8H4.2z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
    poll: '<path d="M5 20V11M12 20V4.5M19 20v-6"/>',
    people: '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M15.5 5.3a3.3 3.3 0 0 1 0 6.4M18 14.2a5.6 5.6 0 0 1 3.5 5.8"/>',
    send: '<path d="M4 12l16-8-6 16-2.5-6.5z"/><path d="M11.5 13.5L20 4"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    pin: '<path d="M12 21s-6.5-6-6.5-11.5a6.5 6.5 0 0 1 13 0C18.5 15 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
    chev: '<path d="M9.5 6l6 6-6 6"/>',
    chevdown: '<path d="M6 9.5l6 6 6-6"/>',
    star: '<path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    camplus: '<path d="M3.5 8.5h3.3l1.8-2.8h6.8l1.8 2.8h3.3v11h-17z"/><path d="M12 11v6M9 14h6"/>',
    edit: '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    filter: '<path d="M4 5.5h16l-6 7.5v5.5l-4 2V13z"/>',
    people2: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    flag: '<path d="M5.5 21V4h11.5l-2.2 4 2.2 4H5.5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.6 2.6M15.4 15.4L18 18M6 18l2.6-2.6M15.4 8.6L18 6"/>',
    home: '<path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/>',
    tree: '<path d="M3 20l6-10 3.5 5L15 11l6 9z"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.5 2.6 14.5 0 17M12 3.5c-2.6 2.5-2.6 14.5 0 17"/>',
    repeat: '<path d="M17 3l3 3-3 3"/><path d="M4 11V9.5A3.5 3.5 0 0 1 7.5 6H20M7 21l-3-3 3-3"/><path d="M20 13v1.5a3.5 3.5 0 0 1-3.5 3.5H4"/>',
    wave: '<path d="M2.5 9c2.4-2.2 4.8-2.2 7.2 0s4.8 2.2 7.2 0 3.3-1.6 4.6-.6M2.5 15c2.4-2.2 4.8-2.2 7.2 0s4.8 2.2 7.2 0 3.3-1.6 4.6-.6"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    reply: '<path d="M9.5 6L4 11.5 9.5 17"/><path d="M4 11.5h9.5a6.5 6.5 0 0 1 6.5 6.5"/>',
    chat: '<path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4A8.4 8.4 0 1 1 20.5 11.6z"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
  };
  const ic = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${P[n]}</svg>`;
  const starFill = (on) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true" fill="${on ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">${P.star}</svg>`;

  /* ---------- People ---------- */
  const PEOPLE = {
    Anthony: { c: '#C4730F', bg: '#FCE7C8' },
    Jerome: { c: '#D6385A', bg: '#FBD9E1' },
    Jonathan: { c: '#2F6FD6', bg: '#D7E5FB' },
    Nate: { c: '#8A4FD1', bg: '#E8DCFA' },
    Priya: { c: '#0E8A7A', bg: '#CDEFE9' },
    Mia: { c: '#B5468F', bg: '#F6D7EC' },
    Sam: { c: '#5B7A12', bg: '#E3EFC6' },
    Leo: { c: '#9A5B2E', bg: '#F1DFCF' },
    Ava: { c: '#3D58B8', bg: '#DCE2F8' },
    Kai: { c: '#0F7FA8', bg: '#CDEBF6' },
    Zoe: { c: '#A3402C', bg: '#F6D8D0' },
  };
  const av = (name, size = 28) => {
    const p = PEOPLE[name] || { c: '#54656F', bg: '#E9EDEF' };
    return `<span class="av" style="--s:${size}px;color:${p.c};background:${p.bg}" aria-hidden="true">${name[0]}</span>`;
  };
  const stack = (names, size = 20) => `<span class="stack">${names.map((n) => av(n, size)).join('')}</span>`;

  /* ---------- Event + poll data ---------- */
  const EVENT = {
    title: 'Sustainable Fishing Panel',
    desc: 'A panel with marine scientists, sustainability advocates and student leaders on what we can do to support healthier oceans.',
    dayLong: 'Thursday, 13 April',
    dayShort: 'Thu, 13 Apr',
    time: '12:00 – 2:00 PM',
    place: 'Australian National Maritime Museum',
    area: 'Darling Harbour, Sydney',
    host: 'Ocean Sustainability Club',
  };
  const POLL_COLORS = ['#F15C6D', '#53BDEB', '#F5A524'];
  const basePolls = () => [
    { q: 'Will you need a ride?', opts: [{ t: 'Yes', n: 2, who: ['Jerome', 'Nate'] }, { t: 'No', n: 6, who: ['Priya', 'Mia', 'Sam'] }] },
    { q: 'Any dietary requirements?', opts: [{ t: 'None', n: 5, who: ['Jerome', 'Ava'] }, { t: 'Vegetarian', n: 2, who: ['Mia'] }, { t: 'Vegan', n: 1, who: ['Kai'] }] },
    { q: 'Can you help set up from 10 AM?', opts: [{ t: 'Yes', n: 4, who: ['Nate', 'Leo'] }, { t: 'No', n: 3, who: ['Zoe'] }] },
  ];

  const initialState = () => ({
    screen: 'chat',
    introSeen: false,
    type: 'Event',
    date: 13,
    where: 'In person',
    rem: { dayBefore: true, hourBefore: true, followUp: true, repeat: false },
    access: 'admins',
    accessDraft: 'admins',
    accepted: false,
    polls: basePolls(),
    pollIdx: 0,
    votes: {},
    rating: 0,
    toast: '',
    highlight: true,
  });

  /* ---------- Shared chrome ---------- */
  const statusBar = (dark) => `
    <div class="sb ${dark ? 'sb-dark' : ''}">
      <span>10:33</span>
      <span class="sb-r" aria-hidden="true">
        <svg viewBox="0 0 18 12" width="16" height="11"><path d="M1 11h2V8H1zM5 11h2V6H5zM9 11h2V4H9zM13 11h2V1h-2z" fill="currentColor"/></svg>
        <svg viewBox="0 0 16 12" width="15" height="11"><path d="M8 11.5L.8 4.2a10.2 10.2 0 0 1 14.4 0z" fill="currentColor"/></svg>
        <svg viewBox="0 0 24 12" width="22" height="11"><rect x=".7" y=".7" width="20" height="10.6" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="2.4" y="2.4" width="14" height="7.2" rx="1.4" fill="currentColor"/><rect x="21.8" y="4" width="1.6" height="4" rx=".8" fill="currentColor"/></svg>
      </span>
    </div>`;

  const groupAvatar = (size = 38) =>
    `<span class="gav" style="--s:${size}px" aria-hidden="true">${ic('wave')}</span>`;

  const chatHeader = (s, opts = {}) => `
    <header class="ch">
      <button class="ibtn" data-go="${opts.backTo || 'chat'}" aria-label="Back">${ic('back')}</button>
      ${groupAvatar()}
      <div class="ch-t"><strong>Ocean Sustainability Club</strong><span>Anthony, Jerome, Jonathan, Nate, Priya…</span></div>
      <button class="ibtn ev-btn ${opts.pulse ? 'pulse' : ''}" data-act="openEvents" aria-label="Events">${ic('cal')}<i class="ev-dot"></i></button>
      <button class="ibtn" tabindex="-1" aria-hidden="true">${ic('video')}</button>
      <button class="ibtn" tabindex="-1" aria-hidden="true">${ic('call')}</button>
      <button class="ibtn sm" tabindex="-1" aria-hidden="true">${ic('more')}</button>
    </header>`;

  const composer = () => `
    <div class="cmp">
      <div class="cmp-in">${ic('smile')}<span>Message</span>${ic('clip')}${ic('camera')}</div>
      <span class="cmp-mic">${ic('mic')}</span>
    </div>`;

  const appBar = (title, back, extra = '') => `
    <header class="ab">
      <button class="ibtn" data-go="${back}" aria-label="Back">${ic('back')}</button>
      <strong>${title}</strong>${extra}
    </header>`;

  const fab = (go, icon = 'arrow', label = 'Next', act) =>
    `<button class="fab" ${act ? `data-act="${act}"` : `data-go="${go}"`} aria-label="${label}">${ic(icon)}</button>`;

  /* ---------- Messages ---------- */
  const bubbleIn = (name, text, time, extra = '') => `
    <div class="msg in"><div class="bub">
      <b class="nm" style="color:${PEOPLE[name].c}">${name}</b>${extra}
      <p>${text}<span class="tm">${time}</span></p>
    </div></div>`;
  const bubbleOut = (text, time) => `
    <div class="msg out"><div class="bub"><p>${text}<span class="tm">${time}${ic('ticks', 'tk')}</span></p></div></div>`;
  const quote = (name, text) =>
    `<div class="qt" style="--q:${PEOPLE[name].c}"><b style="color:${PEOPLE[name].c}">${name}</b><span>${text}</span></div>`;
  const pill = (t, cls = '') => `<div class="pill ${cls}">${t}</div>`;

  const hostThread = () => `
    ${pill('Today')}
    ${bubbleOut('Welcome to the Ocean Sustainability Club, everyone 🌊 We need help planning our first event next month!', '8:39 PM')}
    ${bubbleIn('Jerome', 'Yeah good point Anthony! We have a lot of planning to do 😂 Topic, speakers who know ocean science, a venue, food, decorations, and people to help set up', '8:41 PM')}
    ${bubbleIn('Jonathan', 'Yesssirrrr we doooo', '8:44 PM', quote('Anthony', 'We need help planning our first event next month!'))}
    ${bubbleIn('Priya', 'Happy to do decorations ✂️', '8:46 PM')}`;

  const inviteCard = (s, interactive = true) => `
    <div class="msg in"><div class="bub card-bub">
      <b class="nm" style="color:${PEOPLE.Anthony.c}">Anthony</b>
      <div class="evc">
        <div class="evc-cover">${cover()}<span class="evc-tag">${ic('calplain')} Event</span></div>
        <div class="evc-b">
          <strong>${EVENT.title}</strong>
          <span class="evc-row">${ic('calplain')}${EVENT.dayLong}, 12:00 PM</span>
          <span class="evc-row">${ic('pin')}${EVENT.place}</span>
          <span class="evc-row evc-going">${stack(['Anthony', 'Jerome', 'Nate', 'Priya'], 18)}${s.accepted ? 'You and 8 others are going' : '8 going'}</span>
        </div>
        ${s.accepted
          ? `<div class="evc-done">${ic('check')} You're going<button class="lnk" data-go="calendar">Add to calendar</button></div>`
          : `<div class="evc-a"><button class="b-ghost" data-act="decline">Can't go</button><button class="b-fill" data-act="accept">Going</button></div>`}
      </div>
      <p class="card-tm"><span class="tm">9:02 PM</span></p>
    </div></div>`;

  const memberIntro = () => `
    ${pill('Yesterday')}
    ${bubbleIn('Anthony', 'Event page is up! Everything is in one place now, tap the card below 👇', '9:01 PM')}`;

  const reminderThread = () => `
    ${pill('Wednesday')}
    ${bubbleIn('Jerome', 'Anthony did you end up watching the ocean doc?', '8:12 PM')}
    ${bubbleIn('Anthony', 'Fell asleep 20 minutes in 😴', '8:20 PM')}
    ${bubbleIn('Nate', 'Classic. Who wants to grab dinner after the panel tomorrow? There’s a seafood spot near the museum, sustainably caught of course', '8:31 PM')}
    ${bubbleOut('I’m in 🙋‍♂️', '8:33 PM')}
    <div class="rem-card">
      <div class="rem-h">${ic('bell')}<b>Event reminder</b></div>
      <p><b>${EVENT.title}</b> is tomorrow at 12:00 PM, ${EVENT.place}.</p>
      <div class="rem-f"><span>8 going · 2 polls open</span><button class="lnk" data-go="event-page">View event</button></div>
    </div>`;

  const pollCard = (s) => {
    const poll = s.polls[s.pollIdx];
    const voted = s.votes[s.pollIdx];
    const total = poll.opts.reduce((a, o) => a + o.n, 0);
    return `
    <div class="msg in"><div class="bub card-bub">
      <b class="nm" style="color:${PEOPLE.Nate.c}">Nate</b>
      <div class="pc">
        <div class="pc-h"><span>Polls for <em>${EVENT.title}</em></span>
          <span class="pc-dots" role="tablist" aria-label="Poll questions">${s.polls.map((_, i) =>
            `<button class="pdot ${i === s.pollIdx ? 'on' : ''}" style="--c:${POLL_COLORS[i]}" data-act="pollTo" data-i="${i}" aria-label="Question ${i + 1}" aria-selected="${i === s.pollIdx}"></button>`).join('')}</span></div>
        <p class="pc-q"><i style="background:${POLL_COLORS[s.pollIdx]}"></i>${poll.q}</p>
        <span class="pc-sub">Select one · ${s.pollIdx + 1} of ${s.polls.length}</span>
        ${poll.opts.map((o, i) => {
          const n = o.n + (voted === i ? 1 : 0);
          const t = total + (voted !== undefined ? 1 : 0);
          return `<button class="po ${voted === i ? 'sel' : ''}" data-act="vote" data-i="${i}">
            <span class="po-r">${voted === i ? ic('check') : ''}</span>
            <span class="po-m"><span class="po-l"><span>${o.t}</span><span class="po-n">${stack(o.who.slice(0, 2), 16)}${n}</span></span>
            <span class="po-bar"><span style="width:${Math.round((n / t) * 100)}%"></span></span></span>
          </button>`;
        }).join('')}
        <div class="pc-f"><button class="lnk" data-act="pollPrev" ${s.pollIdx === 0 ? 'disabled' : ''}>Previous</button><button class="lnk" data-act="pollNext">${s.pollIdx === s.polls.length - 1 ? 'View all results' : 'Next question'}</button></div>
      </div>
      <p class="card-tm"><span class="tm">4:16 PM</span></p>
    </div></div>`;
  };

  const pollThread = (s) => `
    ${pill('Today')}
    ${bubbleIn('Anthony', 'Guys how’s the event planning goin?', '3:58 PM')}
    ${bubbleIn('Jerome', 'Event page is set up and Nate’s doing the polls. I’ve got a contact at the uni marine lab too', '4:02 PM')}
    ${bubbleIn('Jonathan', 'Going well! Should have a second speaker lined up soon', '4:05 PM', quote('Anthony', 'Guys how’s the event planning goin?'))}
    ${pollCard(s)}
    ${pill('Jerome, Priya and 7 others answered Nate’s polls', 'pill-sys')}`;

  /* ---------- Visual helpers ---------- */
  let cgN = 0;
  const cover = () => { const id = 'cg' + (++cgN); return `
    <svg class="cover" viewBox="0 0 360 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E6E68"/><stop offset="1" stop-color="#0A3F45"/></linearGradient></defs>
      <rect width="360" height="140" fill="url(#${id})"/>
      <g fill="none" stroke="#7FE0C9" stroke-opacity=".35" stroke-width="2">
        <path d="M-10 92c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0"/>
        <path d="M-10 112c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0"/>
        <path d="M-10 132c30-14 60-14 90 0s60 14 90 0 60-14 90 0 60 14 90 0"/>
      </g>
      <g fill="#E7FCE3" fill-opacity=".9" transform="translate(236 46)">
        <path d="M0 26h62l-10 12H8z"/><path d="M26 0v26M26 2l22 22H26" fill-opacity=".75"/>
      </g>
      <g fill="#7FE0C9" fill-opacity=".55"><path d="M70 50c8-6 18-6 24 0-6 6-16 6-24 0zm-6 0l-6-5v10z"/><path d="M120 34c6-4 13-4 18 0-5 4-12 4-18 0zm-5 0l-4-4v8z"/></g>
    </svg>`; };

  const mapSvg = () => `
    <svg class="map" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-label="Map of Darling Harbour with a pin on the museum">
      <rect width="320" height="200" fill="#EEF0EA"/>
      <path d="M150 0h70l-8 40 18 30-10 50 30 80H140l10-60-18-30 20-40z" fill="#AAD7EE"/>
      <g stroke="#FFFFFF" stroke-width="7" fill="none" stroke-linecap="round"><path d="M0 60h150M0 130h130M230 90h90M240 150h80M60 0v200M280 0v200M100 60l30 70"/></g>
      <g stroke="#F6D88A" stroke-width="6" fill="none" stroke-linecap="round"><path d="M0 100h320"/></g>
      <path d="M140 100h90" stroke="#D3DAD5" stroke-width="6"/>
      <g fill="#CFE6CF"><rect x="12" y="140" width="38" height="44" rx="4"/><rect x="245" y="20" width="60" height="50" rx="4"/></g>
      <g transform="translate(118 46)"><path d="M14 40S0 26 0 14a14 14 0 0 1 28 0c0 12-14 26-14 26z" fill="#00A884"/><circle cx="14" cy="14" r="5.5" fill="#fff"/></g>
      <text x="152" y="64" font-size="10" fill="#36515E" font-family="inherit">Maritime Museum</text>
      <text x="168" y="180" font-size="10" fill="#4B8DB0" font-family="inherit" font-style="italic">Darling Harbour</text>
    </svg>`;

  const toggle = (on, key) => `<button class="tg ${on ? 'on' : ''}" role="switch" aria-checked="${on}" data-act="toggle" data-k="${key}"><span></span></button>`;

  const wallpaper = (inner, extraCls = '') => `<div class="wp ${extraCls}">${inner}</div>`;

  /* ---------- Screens ---------- */
  const S = {};

  S.chat = (s) => `
    ${chatHeader(s, { pulse: s.highlight, backTo: 'chats' })}
    ${wallpaper(hostThread())}
    ${composer()}`;

  S.intro = (s) => `
    ${chatHeader(s, { pulse: false, backTo: 'chats' })}
    ${wallpaper(hostThread())}
    ${composer()}
    <div class="scrim"></div>
    <div class="tip" role="dialog" aria-label="New feature">
      <span class="tip-ic">${ic('cal')}</span>
      <strong>New: plan events with your group</strong>
      <p>Create an event, collect RSVPs and run polls without leaving the chat.</p>
      <button class="b-fill wide" data-act="introOk">Got it</button>
    </div>`;

  S['events-empty'] = () => `
    ${appBar('Events', 'chat')}
    <div class="pad center grow">
      <div class="empty-art" aria-hidden="true">
        <div class="ea-cal"><span class="ea-top"></span><b>13</b><span class="ea-m">Apr</span></div>
        <div class="ea-b ea-b1">Going ✓</div><div class="ea-b ea-b2">${stack(['Jerome', 'Nate', 'Priya'], 18)}</div>
      </div>
      <h3>Bring the group together</h3>
      <p class="muted">Plan a meeting, activity or gathering, then invite everyone in Ocean Sustainability Club.</p>
      <button class="b-fill wide" data-go="new-event">${ic('plus')} Create event</button>
    </div>`;

  S['new-event'] = (s) => `
    ${appBar('New event', 'events-empty')}
    <div class="pad form">
      <div class="ne-top">
        <span class="ne-pic">${ic('camplus')}</span>
        <label class="fld grow"><span class="fld-l">Event name</span><span class="fld-v">${EVENT.title}<i class="caret"></i></span></label>
      </div>
      <label class="fld"><span class="fld-l">Description</span><span class="fld-v sm">${EVENT.desc}</span></label>
      <span class="sec-l">Type</span>
      <div class="chips">${[['Meeting', 'people'], ['Activity', 'flag'], ['Event', 'spark']].map(([t, i]) =>
        `<button class="chip ${s.type === t ? 'on' : ''}" data-act="type" data-v="${t}" aria-pressed="${s.type === t}">${ic(i)}${t}</button>`).join('')}</div>
      <p class="hint">Members can filter the group's events by type.</p>
    </div>
    ${fab('date')}`;

  S.date = (s) => {
    const cells = [];
    for (let i = 0; i < 6; i++) cells.push('<span></span>');
    for (let d = 1; d <= 30; d++) cells.push(`<button class="dd ${d === s.date ? 'on' : ''} ${d < 6 ? 'past' : ''}" data-act="date" data-v="${d}">${d}</button>`);
    const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(5 + s.date) % 7];
    return `
    ${appBar('Date and time', 'new-event')}
    <div class="dt-head"><span>Selected</span><strong>${wd}, ${s.date} Apr</strong></div>
    <div class="pad">
      <div class="cal-h"><button class="ibtn sm" tabindex="-1" aria-hidden="true" style="transform:scaleX(-1)">${ic('chev')}</button><b>April</b><button class="ibtn sm" tabindex="-1" aria-hidden="true">${ic('chev')}</button></div>
      <div class="cal">${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => `<span class="cw">${d}</span>`).join('')}${cells.join('')}</div>
      <div class="times">
        <div class="time"><span>Starts</span><b>12:00 PM</b></div>
        <div class="time"><span>Ends</span><b>2:00 PM</b></div>
      </div>
      <div class="row-s">${ic('repeat')}<span>Repeats</span><b>Never</b></div>
    </div>
    ${fab('location')}`;
  };

  S.location = (s) => `
    ${appBar('Location', 'date')}
    <div class="loc-search">${ic('search')}<span>${EVENT.place}</span>${ic('x')}</div>
    ${mapSvg()}
    <div class="loc-res">${ic('pin')}<div><b>${EVENT.place}</b><span>2 Murray St, ${EVENT.area}</span></div></div>
    <div class="pad">
      <span class="sec-l">Where</span>
      <div class="chips">${[['In person', 'home'], ['Outdoors', 'tree'], ['Online', 'globe']].map(([t, i]) =>
        `<button class="chip ${s.where === t ? 'on' : ''}" data-act="where" data-v="${t}" aria-pressed="${s.where === t}">${ic(i)}${t}</button>`).join('')}</div>
    </div>
    ${fab(null, 'check', 'Create event', 'create')}`;

  const settingsRows = (s) => `
    <div class="es-cover">${cover()}<button class="ibtn on-cover" data-go="chat" aria-label="Back">${ic('back')}</button>
      <div class="es-t"><strong>${EVENT.title}</strong><span>Created by Anthony on 13 Mar</span></div></div>
    <div class="es-desc"><span class="sec-l g">Description</span><p>${EVENT.desc}</p></div>
    <div class="list">
      <div class="li">${ic('calplain')}<span>Date</span><em>${EVENT.dayShort}</em></div>
      <div class="li">${ic('clock')}<span>Time</span><em>${EVENT.time}</em></div>
      <div class="li">${ic('pin')}<span>Location</span><em class="trunc">${EVENT.place}</em></div>
    </div>
    <div class="list">
      <button class="li" data-go="reminders">${ic('bell')}<span>Reminders</span><em>${Object.values(s.rem).filter(Boolean).length} on</em>${ic('chev', 'chv')}</button>
      <button class="li" data-go="polls">${ic('poll')}<span>Event polls</span><em>${s.polls.length}</em>${ic('chev', 'chv')}</button>
      <button class="li" data-act="openAccess">${ic('people')}<span>Editing access</span><em>${{ all: 'All members', admins: 'Only admins', me: 'Only me' }[s.access]}</em>${ic('chev', 'chv')}</button>
      <div class="li">${ic('send')}<span>Invitations</span><button class="b-fill sm" data-go="invite">Send invite</button></div>
    </div>
    <div class="list"><div class="li danger">${ic('trash')}<span>Delete event</span></div></div>`;

  S.settings = (s) => `<div class="scroll">${settingsRows(s)}</div>`;

  S.reminders = (s) => `
    ${appBar('Reminders', 'settings')}
    <div class="scroll">
      <div class="lead-ic">${ic('bell')}<p>Reminders post to the group automatically, so nobody has to chase replies.</p></div>
      <span class="sec-l pad-x">Before the event</span>
      <div class="list">
        <div class="li tall"><div class="li-t"><b>Day before</b><span>Wed, 12 Apr at 12:00 PM</span></div>${toggle(s.rem.dayBefore, 'dayBefore')}</div>
        <div class="li tall"><div class="li-t"><b>1 hour before</b><span>Thu, 13 Apr at 11:00 AM</span></div>${toggle(s.rem.hourBefore, 'hourBefore')}</div>
      </div>
      <span class="sec-l pad-x">Follow-ups</span>
      <div class="list">
        <div class="li tall"><div class="li-t"><b>Nudge people who haven't replied</b><span>Every 2 days until 10 Apr, sent privately</span></div>${toggle(s.rem.followUp, 'followUp')}</div>
        <div class="li tall"><div class="li-t"><b>Repeat this event</b><span>Weekly, monthly or custom</span></div>${toggle(s.rem.repeat, 'repeat')}</div>
      </div>
    </div>`;

  S.polls = (s) => `
    ${appBar('Event polls', 'settings')}
    <div class="scroll">
      <div class="list">${s.polls.map((p, i) => `
        <div class="li tall"><i class="pdot-s" style="background:${POLL_COLORS[i % 3]}"></i><div class="li-t"><b>${p.q}</b><span>${p.opts.map((o) => o.t).join(', ')}</span></div></div>`).join('')}</div>
      <span class="sec-l pad-x">New poll</span>
      <div class="pad form">
        <label class="fld"><span class="fld-l">Question</span><span class="fld-v">Bringing a reusable cup?<i class="caret"></i></span></label>
        <div class="opt-f">Yes</div><div class="opt-f">No, I'll borrow one</div><div class="opt-f add">${ic('plus')} Add option</div>
        <div class="row-s">${ic('check')}<span>Allow multiple answers</span>${toggle(false, 'noop')}</div>
        <button class="b-fill wide" data-act="addPoll">Add poll</button>
      </div>
    </div>`;

  S.access = (s) => `
    <div class="scroll" aria-hidden="true">${settingsRows(s)}</div>
    <div class="scrim"></div>
    <div class="dlg" role="dialog" aria-label="Editing access">
      <strong>Who can edit this event?</strong>
      <p class="muted">Editors can change details, reminders and polls.</p>
      ${[['all', 'All members'], ['admins', 'Only admins'], ['me', 'Only me']].map(([k, t]) =>
        `<button class="radio ${s.accessDraft === k ? 'on' : ''}" data-act="accessPick" data-v="${k}" role="radio" aria-checked="${s.accessDraft === k}"><i></i>${t}</button>`).join('')}
      <div class="dlg-a"><button class="lnk" data-go="settings">Cancel</button><button class="lnk" data-act="accessSave">Save</button></div>
    </div>`;

  S.invite = (s) => `
    <div class="scroll" aria-hidden="true">${settingsRows(s)}</div>
    <div class="scrim"></div>
    <div class="sheet" role="dialog" aria-label="Send invite">
      <span class="grab"></span>
      <strong>Send invite to the group</strong>
      <div class="evc mini">
        <div class="evc-cover">${cover()}</div>
        <div class="evc-b"><strong>${EVENT.title}</strong>
          <span class="evc-row">${ic('calplain')}${EVENT.dayLong}, 12:00 PM</span>
          <span class="evc-row">${ic('pin')}${EVENT.place}</span></div>
      </div>
      <div class="to">${groupAvatar(30)}<span>Ocean Sustainability Club<em>17 members</em></span></div>
      <div class="sheet-a"><button class="b-ghost" data-go="settings">Cancel</button><button class="b-fill" data-act="sendInvite">${ic('send')} Send</button></div>
    </div>`;

  S['chat-invite'] = (s) => `
    ${chatHeader(s, { backTo: 'chats' })}
    ${wallpaper(memberIntro() + inviteCard(s) + (s.accepted ? `<button class="pill pill-next" data-go="chat-reminder">Two weeks later ${ic('chev')}</button>` : ''))}
    ${composer()}`;

  S.calendar = (s) => `
    ${chatHeader(s, { backTo: 'chats' })}
    ${wallpaper(memberIntro() + inviteCard({ ...s, accepted: true }))}
    ${composer()}
    <div class="scrim"></div>
    <div class="sheet" role="dialog" aria-label="Add to calendar">
      <span class="grab"></span>
      <div class="ok-badge">${ic('check')}</div>
      <strong class="c">You're going</strong>
      <p class="muted c">Save it to your calendar so it shows up next to everything else.</p>
      <div class="cal-prev"><div class="cp-d"><span>Apr</span><b>13</b></div><div><b>${EVENT.title}</b><span>12:00 – 2:00 PM · ${EVENT.place}</span></div></div>
      <div class="sheet-a"><button class="b-ghost" data-act="calSkip">Not now</button><button class="b-fill" data-act="calAdd">${ic('calplain')} Add to calendar</button></div>
    </div>`;

  S['chat-reminder'] = (s) => `
    ${chatHeader(s, { backTo: 'chats' })}
    ${wallpaper(reminderThread(), 'bottom')}
    ${composer()}`;

  S['chat-poll'] = (s) => `
    ${chatHeader(s, { backTo: 'chats' })}
    ${wallpaper(pollThread(s), 'bottom')}
    ${composer()}`;

  S['event-page'] = (s) => `
    ${appBar('Events', 'chat-reminder', `<span class="ab-r">${ic('filter')}${ic('search')}</span>`)}
    <div class="tabs"><span class="on">Upcoming</span><span>Past</span></div>
    <div class="scroll ep">
      <div class="ep-card">
        <div class="evc-cover tall">${cover()}<div class="es-t"><strong>${EVENT.title}</strong><span>Created by Anthony</span></div></div>
        <div class="ep-b">
          <p>${EVENT.desc}</p>
          <span class="evc-row">${groupAvatar(18)}Hosted by ${EVENT.host}</span>
          <span class="evc-row">${ic('calplain')}${EVENT.dayLong}, ${EVENT.time}</span>
          <span class="evc-row">${ic('pin')}${EVENT.place}</span>
          <div class="resp">
            <div><b>9</b><span>Going</span>${stack(['Anthony', 'Jerome', 'Nate', 'Priya', 'Mia'], 18)}</div>
            <div><b>3</b><span>Can't go</span>${stack(['Sam', 'Leo', 'Zoe'], 18)}</div>
            <div><b>5</b><span>No reply</span>${stack(['Ava', 'Kai'], 18)}</div>
          </div>
          <button class="ep-polls" data-go="chat-poll"><span class="pc-dots">${POLL_COLORS.map((c) => `<i class="pdot on" style="--c:${c}"></i>`).join('')}</span><span>3 polls · results visible to everyone</span>${ic('chev', 'chv')}</button>
          <div class="ep-f"><span class="muted xs">${ic('lock')} Only admins can edit</span><span class="going-b">${ic('check')} Going</span></div>
        </div>
      </div>
    </div>`;

  S.lock = () => `
    <div class="lock">
      <div class="lk-time"><span>Thursday, 6 April</span><b>10:33</b></div>
      <div class="nt">
        <div class="nt-h"><span class="app-dot">${ic('chat')}</span>WhatsApp · Ocean Sustainability Club<em>now</em></div>
        <b>Anthony invited the group to an event</b>
        <div class="nt-ev"><div class="evc-cover">${cover()}</div><div><strong>${EVENT.title}</strong><span>Thu, 13 Apr, 12:00 PM</span><span>${EVENT.place}</span></div></div>
        <div class="nt-a"><button data-act="noop">Can't go</button><button data-act="noop" class="em">Going</button></div>
      </div>
      <div class="nt">
        <div class="nt-h"><span class="app-dot">${ic('chat')}</span>WhatsApp · Ocean Sustainability Club<em>2m</em></div>
        <b>Nate: Will you need a ride?</b>
        <span class="nt-s">Poll for ${EVENT.title} · 1 of 3</span>
        <div class="nt-a"><button data-act="noop">Yes</button><button data-act="noop">No</button><button data-act="noop" class="em">Open poll</button></div>
      </div>
      <div class="lk-f">${ic('lock')}</div>
    </div>`;

  const chatList = () => {
    const rows = [
      ['group', 'Ocean Sustainability Club', 'Event: Sustainable Fishing Panel', '2:14 PM', 0],
      ['Priya', 'Priya', 'That panel was so good 🐟', '1:58 PM', 2],
      ['Sam', 'Sam', 'See you at training', '11:40 AM', 0],
      ['Mia', 'Mia', 'Photo', '10:12 AM', 0],
      ['Kai', 'Kai', 'Haha no way', 'Yesterday', 0],
      ['Zoe', 'Zoe', 'Did you end up watching it?', 'Yesterday', 0],
      ['Leo', 'Leo', 'Thanks man', 'Monday', 0],
    ];
    return `
      <header class="home-h"><strong>Chats</strong><span>${ic('camera')}${ic('more')}</span></header>
      <div class="home-s">${ic('search')}<span>Search</span></div>
      <div class="home-f"><span class="on">All</span><span>Unread</span><span>Groups</span><span>Events</span></div>
      <div class="cl">${rows.map(([a, n, m, t, u]) => `
        <div class="cl-r">${a === 'group' ? groupAvatar(46) : av(a, 46)}<div class="cl-m"><div><b>${n}</b><em class="${u ? 'g' : ''}">${t}</em></div><div><span>${m}</span>${u ? `<i class="badge">${u}</i>` : ''}</div></div></div>`).join('')}
      </div>`;
  };

  S.chats = () => `<div class="home" data-go="chat">${chatList()}</div>`;

  S.rating = (s) => `
    <div class="home" aria-hidden="true">${chatList()}</div>
    <div class="scrim"></div>
    <div class="dlg rate" role="dialog" aria-label="Rate your event">
      <span class="tip-ic">${ic('calplain')}</span>
      <strong>How did ${EVENT.title} go?</strong>
      <p class="muted">Your rating helps improve Events for groups like yours.</p>
      <div class="stars" role="radiogroup" aria-label="Rating">${[1, 2, 3, 4, 5].map((n) =>
        `<button class="st ${n <= s.rating ? 'on' : ''}" data-act="rate" data-v="${n}" role="radio" aria-checked="${n === s.rating}" aria-label="${n} star${n > 1 ? 's' : ''}">${starFill(n <= s.rating)}</button>`).join('')}</div>
      <span class="rate-l">${['Tap to rate', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][s.rating]}</span>
      <div class="dlg-a"><button class="lnk" data-act="rateSkip">Not now</button><button class="lnk" data-act="rateSubmit" ${s.rating ? '' : 'disabled'}>Submit</button></div>
    </div>`;

  const DARK_STATUS = new Set(['settings', 'access', 'invite', 'lock']);

  function renderScreen(s) {
    const body = (S[s.screen] || S.chat)(s);
    return `${statusBar(DARK_STATUS.has(s.screen))}<div class="scr scr-${s.screen}">${body}</div>${s.toast ? `<div class="toast" role="status">${s.toast}</div>` : ''}`;
  }

  /* ---------- Prototype instance ---------- */
  class Proto {
    constructor(root, opts = {}) {
      this.root = root;
      this.s = initialState();
      this.onChange = opts.onChange || (() => {});
      this.root.addEventListener('click', (e) => this.click(e));
      this.render();
    }
    set(patch, silent) {
      Object.assign(this.s, patch);
      this.render();
      if (!silent) this.onChange(this.s.screen);
    }
    go(screen, patch = {}) {
      this.set({ ...patch, screen, toast: patch.toast || '' });
      const sc = this.root.querySelector('.scroll, .wp');
      if (sc) sc.scrollTop = (patch.scrollBottom || sc.classList.contains('bottom')) ? sc.scrollHeight : 0;
    }
    flash(msg) {
      this.s.toast = msg;
      this.render();
      clearTimeout(this.tt);
      this.tt = setTimeout(() => { this.s.toast = ''; this.render(); }, 1800);
    }
    reset() {
      this.s = initialState();
      this.render();
      this.onChange('chat');
    }
    render() {
      const screen = this.root.querySelector('.ph-screen');
      screen.innerHTML = renderScreen(this.s);
      screen.querySelectorAll('.wp.bottom').forEach((w) => { w.scrollTop = w.scrollHeight; });
      this.root.dataset.screen = this.s.screen;
    }
    click(e) {
      const el = e.target.closest('[data-go],[data-act]');
      if (!el || !this.root.contains(el) || el.disabled) return;
      const s = this.s;
      if (el.dataset.go) return this.go(el.dataset.go);
      const v = el.dataset.v;
      switch (el.dataset.act) {
        case 'openEvents': return this.go(s.introSeen ? (s.accepted ? 'event-page' : 'events-empty') : 'intro', { highlight: false });
        case 'introOk': return this.go('events-empty', { introSeen: true });
        case 'type': return this.set({ type: v }, true);
        case 'where': return this.set({ where: v }, true);
        case 'date': return this.set({ date: +v }, true);
        case 'create': this.go('settings'); return this.flash('Event created');
        case 'toggle': {
          const k = el.dataset.k;
          if (k in s.rem) { s.rem[k] = !s.rem[k]; this.render(); }
          return;
        }
        case 'addPoll': this.go('settings'); return this.flash('Poll added to event');
        case 'openAccess': return this.go('access', { accessDraft: s.access });
        case 'accessPick': return this.set({ accessDraft: v }, true);
        case 'accessSave': this.go('settings', { access: s.accessDraft }); return this.flash('Editing access updated');
        case 'sendInvite': this.go('chat-invite', { scrollBottom: true }); return this.flash('Invite sent to the group');
        case 'accept': return this.go('calendar', { accepted: true });
        case 'decline': return this.flash("Anthony will see you can't go");
        case 'calAdd': this.go('chat-invite', { accepted: true }); return this.flash('Added to your calendar');
        case 'calSkip': return this.go('chat-invite', { accepted: true });
        case 'pollTo': return this.set({ pollIdx: +el.dataset.i }, true);
        case 'pollNext':
          if (s.pollIdx < s.polls.length - 1) return this.set({ pollIdx: s.pollIdx + 1 }, true);
          return this.go('event-page');
        case 'pollPrev': return this.set({ pollIdx: Math.max(0, s.pollIdx - 1) }, true);
        case 'vote': {
          const i = +el.dataset.i;
          s.votes[s.pollIdx] = s.votes[s.pollIdx] === i ? undefined : i;
          return this.render();
        }
        case 'rate': return this.set({ rating: +v }, true);
        case 'rateSkip': return this.go('chats');
        case 'rateSubmit': this.go('chats'); return this.flash('Thanks for the feedback');
        default: return this.flash('Just a concept: this button is for show');
      }
    }
  }

  /* Static render for gallery and mobile step thumbnails */
  function staticPhone(screen, patch = {}) {
    const s = { ...initialState(), ...patch, screen, highlight: patch.highlight ?? false };
    return `<div class="ph ph-static" inert><div class="ph-screen">${renderScreen(s)}</div></div>`;
  }

  window.GroupEvents = { Proto, staticPhone };
})();
