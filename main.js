/* Page wiring for the Group Events concept. */
(() => {
  'use strict';
  const { Proto, staticPhone } = window.GroupEvents;

  const STEPS = [
    { ch: 'Create the event' },
    { s: 'chat', t: 'Find it in the chat header', p: 'A calendar icon sits next to video and voice calls in every group. Events stay one tap from the conversation instead of three apps away.', patch: { highlight: true } },
    { s: 'intro', t: 'Explain it once', p: 'The first tap introduces the feature in one line, then gets out of the way.' },
    { s: 'events-empty', t: 'Start the first event', p: 'A group with no events lands on a clear invitation to create one.' },
    { s: 'new-event', t: 'Name it and pick a type', p: 'Name, optional photo, a short description and a type: meeting, activity or event. Types let members filter the group’s events later.' },
    { s: 'date', t: 'Set the date and time', p: 'A familiar picker with start and end times, plus a repeat option for weekly practices and meetings.' },
    { s: 'location', t: 'Choose where', p: 'Search for a place, or mark the event as outdoors or online.' },
    { ch: 'Set it up' },
    { s: 'settings', t: 'One page for the whole event', p: 'Details, reminders, polls, editing access and invitations live together, so nobody hunts through forms, sheets and docs.' },
    { s: 'reminders', t: 'Let reminders do the chasing', p: 'Schedule reminders before the event and automatic, private nudges to people who haven’t replied. The organizer never has to be the group’s nag.' },
    { s: 'polls', t: 'Attach polls to the event', p: 'Rides, dietary needs, set-up help. Each question is tied to this event instead of getting lost in the scroll.' },
    { s: 'access', t: 'Decide who can edit', p: 'Only admins by default, which suits clubs with an exec team. Casual groups can open it up to everyone.' },
    { ch: 'Invite the group' },
    { s: 'invite', t: 'Preview, then send', p: 'The invite posts to the group as a single card with everything people need to decide.' },
    { s: 'chat-invite', t: 'RSVP without leaving the chat', p: 'Now on Jonathan’s phone: the details and who’s going, with one-tap answers right in the thread.' },
    { s: 'calendar', t: 'Save it to the calendar', p: 'Tapping Going offers to save the event to the phone’s calendar.', patch: { accepted: true } },
    { ch: 'Follow through' },
    { s: 'chat-reminder', t: 'The reminder pings the group', p: 'The day before, the event posts its own reminder. No admin had to remember to send it.', patch: { accepted: true } },
    { s: 'chat-poll', t: 'Vote inside the conversation', p: 'Nate’s three polls arrive as one card. Colored dots show which question you’re on, and everyone can see the results.', patch: { accepted: true } },
    { s: 'event-page', t: 'See who’s coming at a glance', p: 'Every member sees responses and poll results. Only admins can edit, unless that’s changed.', patch: { accepted: true } },
    { s: 'lock', t: 'Reach people outside the app', p: 'Invites and polls arrive as notifications people can answer from the lock screen, which is where response rates are won.' },
    { s: 'rating', t: 'Learn from every event', p: 'After a group’s first event, a quick rating feeds the success metrics for the rollout.', patch: { rating: 5 } },
  ];

  /* Hero prototype */
  const heroEl = document.getElementById('hero-phone');
  const hero = new Proto(heroEl);
  document.getElementById('hero-reset').addEventListener('click', () => hero.reset());

  /* Walkthrough */
  const list = document.getElementById('steps');
  const flat = [];
  list.innerHTML = STEPS.map((st) => {
    if (st.ch) return `<li class="chapter" role="presentation">${st.ch}</li>`;
    const i = flat.push(st) - 1;
    return `<li class="step" data-i="${i}" id="step-${st.s}">
      <div class="step-in"><h3><button class="step-btn" type="button" aria-controls="walk-phone">${st.t}</button></h3><p>${st.p}</p></div>
      <div class="mini"><div class="mini-wrap" style="--z:.62">${staticPhone(st.s, st.patch)}</div></div>
    </li>`;
  }).join('');

  const walkEl = document.getElementById('walk-phone');
  const walk = new Proto(walkEl);
  const cap = document.getElementById('walk-cap');
  let current = -1;
  const show = (i) => {
    if (i === current) return;
    current = i;
    const st = flat[i];
    walk.s = { ...walk.s, ...JSON.parse(JSON.stringify(st.patch || {})) };
    if (!st.patch || st.patch.accepted === undefined) walk.s.accepted = i >= flat.findIndex((x) => x.s === 'calendar');
    walk.go(st.s, { introSeen: true, highlight: st.s === 'chat' });
    list.querySelectorAll('.step').forEach((el) => el.classList.toggle('on', +el.dataset.i === i));
    cap.textContent = `Step ${i + 1} of ${flat.length}. Tap around: the phone works.`;
  };

  list.addEventListener('click', (e) => {
    const li = e.target.closest('.step');
    if (li) show(+li.dataset.i);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) show(+en.target.dataset.i); });
  }, { rootMargin: '-45% 0px -45% 0px' });
  list.querySelectorAll('.step').forEach((el) => io.observe(el));
  show(0);

  /* Fit the sticky phone to the viewport height */
  const fit = () => {
    const stage = walkEl.parentElement;
    const k = Math.min(1, (stage.clientHeight - 70) / 782, (stage.clientWidth - 40) / 382);
    walkEl.style.setProperty('--k', Math.max(.55, k).toFixed(3));
  };
  window.addEventListener('resize', fit);
  fit();

  /* Gallery */
  const gal = document.getElementById('gallery');
  gal.innerHTML = flat.map((st, i) => `
    <figure>
      <div class="gal-hit" role="button" tabindex="0" data-i="${i}" aria-label="Show step ${i + 1} in the walkthrough: ${st.t}">
        <div class="mini-wrap" style="--z:.6">${staticPhone(st.s, st.patch)}</div>
      </div>
      <figcaption><b>${String(i + 1).padStart(2, '0')}</b>${st.t}</figcaption>
    </figure>`).join('');
  const galGo = (e) => {
    const b = e.target.closest('.gal-hit');
    if (!b) return;
    const i = +b.dataset.i;
    document.getElementById(`step-${flat[i].s}`).scrollIntoView({ block: 'center' });
    show(i);
  };
  gal.addEventListener('click', galGo);
  gal.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); galGo(e); } });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
