
        (function() {
            // ========== LOADING SCREEN ==========
            const loader = document.getElementById('loader');
            const progressBar = document.getElementById('loader-progress-bar');
            const messageEl = document.getElementById('loader-message');
            const mainContent = document.getElementById('main-content');

            const messages = [
                "Initializing...",
                "Loading Geological Data...",
                "Analyzing Geological Data...",
                "Building Geological Model...",
                "Welcome."
            ];

            let currentIndex = 0;
            let messageTimeout;

            function showMessage(index, callback) {
                if (index >= messages.length) {
                    if (callback) callback();
                    return;
                }
                messageEl.classList.add('hidden');
                setTimeout(() => {
                    messageEl.textContent = messages[index];
                    void messageEl.offsetWidth;
                    messageEl.classList.remove('hidden');
                    messageTimeout = setTimeout(() => {
                        showMessage(index + 1, callback);
                    }, 200);
                }, 100);
            }

            function startLoader() {
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 50);

                showMessage(0, () => {
                    setTimeout(() => {
                        loader.classList.add('fade-out');
                        mainContent.classList.add('visible');
                        loader.addEventListener('transitionend', function handler() {
                            loader.removeEventListener('transitionend', handler);
                            if (loader.parentNode) loader.parentNode.removeChild(loader);
                        });
                    }, 200);
                });
            }

            startLoader();

            // ========== PORTFOLIO DATA & RENDERING ==========
            const ROLES = ["Geological Exploration", "Mine Planning", "GIS Specialist", "Subsurface Interpretation", "Well Log Analysis", "Geological Modeling"];
            const SOFTWARE = [
                { n: "Petrel", u: "Subsurface & well modeling", lvl: 60, cat: "Subsurface", c: "var(--blue)", logo: "" },
                { n: "ArcGIS", u: "Spatial analysis & cartography", lvl: 82, cat: "GIS", c: "var(--blue)", logo: "" },
                { n: "Global Mapper", u: "Terrain & DEM processing", lvl: 78, cat: "GIS", c: "var(--blue)", logo: "" },
                { n: "Minescape", u: "Mine planning & block modeling", lvl: 68, cat: "Mine", c: "var(--gold)", logo: "" },
                { n: "Spry", u: "Mine scheduling", lvl: 75, cat: "Mine", c: "var(--gold)", logo: "" },
                { n: "Microsoft Excel", u: "Data QC & petrophysical", lvl: 88, cat: "Reporting", c: "var(--teal)", logo: "" },
                { n: "CorelDRAW", u: "Vector graphics & posters", lvl: 60, cat: "Design", c: "var(--gold)", logo: "" },
                { n: "Canva", u: "Visual assets & content", lvl: 80, cat: "Design", c: "var(--gold)", logo: "" },
            ];
            const SKILL_CLUSTERS = {
                "Subsurface Geology": ["Geological Exploration & Mapping","Biostratigraphy","Well Log Analysis","Sequence Stratigraphy","Paleogeographic Reconstruction"],
                "Mining": ["Resource Estimation","Mine Scheduling","Block Modeling","Strip Ratio Planning","Coal Seam Modeling"],
                "GIS": ["Lithological Distribution Map","Geomorphological Map","Structural Map","Topographical Map","Morphometric Map"],
                "Geoscience Software": ["ArcGIS","Petrel","Minescape","Spry","Global Mapper"],
                "Field & People": ["Adaptability","Leadership","Detail-oriented","Strong Work Ethic","Teamwork","Eager to Learn"]
            };
            const CERTS = [
                { t: "Coal Mine Planning Training: Minescape & Spry", o: "Initambang.com", y: "Dec 2025", ic: "MSP" },
                { t: "Refreshment Training of Lower Operational Supervisor", o: "CV. Nusa Mineral Investama", y: "Oct 2025", ic: "POP" },
                { t: "Basic Data Science Excel", o: "Jobstreet.com", y: "Nov 2025", ic: "DSX" },
                { t: "TOEFL", o: "Language Center, Institut Teknologi Sumatera", y: "Sept 2024", ic: "TFL" },
                { t: "Geological Laboratory Assistant", o: "Institut Teknologi Sumatera", y: "", ic: "LAB" },
            ];
            const WHY = [
                { t: "Strong Geological Foundation", d: "Core principles applied rigorously." },
                { t: "Industry Experience", d: "Hands-on exposure inside a live exploration division." },
                { t: "GIS Expertise", d: "Turning raw spatial data into decision-ready maps." },
                { t: "Mine Planning", d: "Familiar with the full loop from resource model to schedule." },
                { t: "Adaptability", d: "Moves fluidly between field boots and desk software." },
                { t: "Continuous Learning", d: "Treats every dataset as a chance to sharpen interpretation." },
            ];
            const EDUCATION = [{
                tag: "Education",
                title: "Institut Teknologi Sumatera",
                period: "Aug 2019 â€“ May 2025",
                location: "South Lampung, Indonesia",
                degree: "Bachelor of Geological Engineering | GPA: 3.62 / 4.00",
                thesisLabel: "Title of Thesis",
                thesis: "Analysis of Sequence Stratigraphy and Biostratigraphy Based on Well Log Data Interpretation, \"MN\" Field, Central Sumatra Basin"
            }];
            const TIMELINE = [
                { tag: "Internship", title: "Undergraduate Research Intern", org: "PT Pertamina Hulu Rokan", period: "Feb 2023 â€“ Apr 2023", location: "Central Sumatra Basin, Riau Â· Exploration Division", objective: "Support the exploration team in characterizing reservoir intervals across legacy well data, contributing to sequence-stratigraphic reinterpretation of a mature field.", responsibilities: ["Conducted biostratigraphic analysis using planktonic foraminifera (Blow, 1969) and nannoplankton (Martini, 1971)","Performed well log interpretation, electrofacies analysis, and sequence stratigraphy","Executed stratigraphic correlation and reconstructed paleogeographic evolution","Analyzed reservoir properties including porosity, permeability, and water saturation","Conducted core description, microfossil preparation, and geological interpretation"] },
                { tag: "Internship", title: "Work Practice Intern", org: "PT Pertamina Hulu Rokan", period: "Nov 2022 â€“ Dec 2022", location: "Central Sumatra Basin, Riau Â· Exploration Division", objective: "Support the exploration team in characterizing reservoir intervals.", responsibilities: ["Conducted well log data analysis focusing on porosity, water saturation","Performed core description and section core measurements","Prepared microfossil samples from core data","Executed biostratigraphic analysis","Interpreted sedimentary environments","Contributed to stratigraphic correlation"] },
                { tag: "Academic Fieldwork", title: "Geological Mapping Student ITERA", org: "Geological Engineering, Institut Teknologi Sumatera (ITERA)", period: "July 2022", location: "Krui, West Coast Regency, Lampung", objective: "", responsibilities: ["Produced geological map and structural cross-section of Way Krui.","Conducted field mapping, rock sampling, and structural analysis","Utilized GPS and GIS tools to accurately record field data","Analyzed collected data to interpret geological history","Prepared a comprehensive field report"] }
            ];

            function renderEducation() {
                const container = document.getElementById('edu-card-container');
                if (!container) return;
                container.innerHTML = EDUCATION.map(i => `
                    <div class="tl-item reveal" style="cursor:default;">
                        <div class="tl-dot"></div>
                        <div class="tl-card">
                            <div class="tl-card-top">
                                <div class="tl-card-info">
                                    <span class="tl-tag">${i.tag}</span>
                                    <h3 class="tl-title">${i.title}</h3>
                                    <div class="tl-org">${i.location}</div>
                                </div>
                                <div class="tl-period-badge">${i.period}</div>
                            </div>
                            <p class="tl-desc" style="color:var(--ink-dim); font-size:13.5px; margin-top:6px;">${i.degree}</p>
                            <p class="tl-desc" style="color:var(--ink-mute); font-size:12.5px; margin-top:8px;"><strong style="color:var(--ink-dim);">${i.thesisLabel}:</strong> ${i.thesis}</p>
                        </div>
                    </div>`).join('');
            }

            function renderTimeline() {
                const container = document.getElementById('timeline-container');
                if (!container) return;
                container.innerHTML = TIMELINE.map((i, idx) => `
                    <div class="tl-item reveal" data-idx="${idx}" tabindex="0" role="button" aria-haspopup="dialog">
                        <div class="tl-dot"></div>
                        <div class="tl-card">
                            <div class="tl-card-top">
                                <div class="tl-card-info">
                                    <span class="tl-tag">${i.tag}</span>
                                    <h3 class="tl-title">${i.title}</h3>
                                    <div class="tl-org">${i.org}</div>
                                    <div class="tl-location">${i.location}</div>
                                </div>
                                <div class="tl-period-badge">${i.period}</div>
                            </div>
                            <span class="tl-more">View details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                        </div>
                    </div>
                `).join('');
                container.addEventListener('click', e => {
                    const item = e.target.closest('.tl-item');
                    if (!item) return;
                    openExpModal(Number(item.dataset.idx));
                });
                container.addEventListener('keydown', e => {
                    if (e.key !== 'Enter' && e.key !== ' ') return;
                    const item = e.target.closest('.tl-item');
                    if (!item) return;
                    e.preventDefault();
                    openExpModal(Number(item.dataset.idx));
                });
            }

            function openExpModal(idx) {
                const item = TIMELINE[idx];
                if (!item) return;
                document.getElementById('exp-modal-tag').textContent = item.tag;
                document.getElementById('exp-modal-title').textContent = item.title;
                document.getElementById('exp-modal-org').textContent = item.org;
                document.getElementById('exp-modal-period').textContent = `${item.period} Â· ${item.location}`;
                const objBlock = document.getElementById('exp-modal-objective-block');
                if (item.objective) {
                    objBlock.style.display = '';
                    document.getElementById('exp-modal-objective').textContent = item.objective;
                } else {
                    objBlock.style.display = 'none';
                }
                document.getElementById('exp-modal-list').innerHTML = item.responsibilities.map(r => `<li>${r}</li>`).join('');
                document.getElementById('exp-modal').classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            function closeExpModal() {
                document.getElementById('exp-modal').classList.remove('active');
                document.body.style.overflow = '';
            }

            function renderProjects() {
                const container = document.getElementById('projects-container');
                if (!container) return;
                const accents = ["var(--blue)","var(--teal)","var(--gold)","var(--violet)","var(--rust)"];
                const projects = [
                    { fig:"FIG. 01 â€” CENTRAL SUMATRA BASIN", category:"Sequence Stratigraphy", title:"Central Sumatra Basin | Sequence-Stratigraphic Interpretation", sub:"Reinterpreting depositional sequences across a mature exploration field", objective:"Redefine chronostratigraphic surfaces", software:"Petrel Â· Corel Draw Â· Ms Excel", methodology:"Electrofacies, Biostratigraphy", duration:"14 weeks", desc:"Built a sequence-stratigraphic framework from Three legacy wells, tying log character to depositional systems tracts.", tags:["Well Correlation","Facies Modeling","Chronostratigraphy"], result:"3", resultLabel:"Developed a sequence-stratigraphic correlation framework from three wells" },
                    { fig:"FIG. 02 â€” MULTI-WELL LOG PANEL", category:"Well Log Interpretation", title:"Multi-Well Log Interpretation & Correlation Panel", sub:"Depositional Facies across a three-well transect", objective:"Depositional characterize", software:"Petrel Â· Corel Draw Â· Microsoft Excel", methodology:"Electrofacies", duration:"10 weeks", desc:"Interpreted gamma ray, resistivity, and porosity logs across three wells.", tags:["Electrofacies","Facies Analysis","Depositional Environments"], result:"3", resultLabel:"Wells correlated into a single panel" },
                    { fig:"FIG. 03 â€” BIOSTRATIGRAPHIC ZONATION", category:"Biostratigraphy", title:"Biostratigraphic Zonation & Facies Analysis", sub:"Age zonation from micropaleontological data", objective:"Determine rock age zonation", software:"Microsoft Excel Â· Corel Draw", methodology:"Planktonic & benthonic", duration:"14 weeks", desc:"Conducted rock age zoning using foraminifera (Blow, 1969) and nannoplankton (Martini, 1971).", tags:["Foraminifera","Nannoplankton","Facies"], result:"3", resultLabel:"Independent zonation schemes cross-checked" },
                    { fig:"FIG. 04 â€” COAL SEAM BLOCK MODEL", category:"Mine Planning", title:"Coal Resource Estimation & Mine Scheduling", sub:"Block-model resource classification", objective:"Classify resources", software:"Minescape Â· Spry Â· Microsoft Excel", methodology:"Seam modeling, block estimation", duration:"4 weeks", desc:"Modeled seam geometry from borehole data with JORC-aligned classification.", tags:["Resource Classification","Block Modeling","Pit Sequencing","Mine Scheduling"], result:"1", resultLabel:"Extraction phases sequenced" },
                    { fig:"FIG. 05 â€” TERRAIN & GIS SURFACE", category:"GIS Analysis", title:"Terrain Modeling & Geological Mapping via GIS", sub:"DEM-driven terrain analysis", objective:"Build terrain + geology map", software:"ArcGIS Â· Global Mapper", methodology:"DEM processing, slope/aspect", duration:"4 weeks", desc:"Produced geological maps for field mapping and exploration planning.", tags:["DEM Processing","Spatial Analysis","Cartography"], result:"6", resultLabel:"GIS layers integrated" }
                ];
                container.innerHTML = projects.map((p, idx) => {
                    const accent = accents[idx % accents.length];
                    return `<div class="case reveal" style="--accent:${accent}">
                        <div class="case-visual"><div class="case-fig">${p.fig}</div><div class="case-visual-cat">${p.category}</div><span class="case-visual-tag">${p.category}</span></div>
                        <div class="case-content">
                            <div class="case-index">Project ${String(idx+1).padStart(2,'0')}</div>
                            <h3>${p.title}</h3><div class="case-sub">${p.sub}</div>
                            <div class="case-meta-grid">
                                <div class="case-meta-item"><div class="k">Objective</div><div class="v">${p.objective}</div></div>
                                <div class="case-meta-item"><div class="k">Software</div><div class="v">${p.software}</div></div>
                                <div class="case-meta-item"><div class="k">Methodology</div><div class="v">${p.methodology}</div></div>
                                <div class="case-meta-item"><div class="k">Duration</div><div class="v">${p.duration}</div></div>
                            </div>
                            <p class="case-desc">${p.desc}</p>
                            <div class="case-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
                            <div class="case-result"><span class="num">${p.result}</span><span class="lbl">${p.resultLabel}</span></div>
                        </div>
                    </div>`;
                }).join('');
            }

            function renderSoftware() {
                const container = document.getElementById('soft-futuristic');
                if (!container) return;
                container.innerHTML = SOFTWARE.map(s => `<div class="soft-card-v2 reveal" data-lvl="${s.lvl}" style="--accent:${s.c}; --pct:${s.lvl}">
                    <div class="soft-logo" data-app="${s.n}">${s.logo ? `<img src="${s.logo}" alt="${s.n} logo">` : `<span class="soft-logo-ph">Logo</span>`}</div>
                    <div class="soft-name">${s.n}</div><div class="soft-cat">${s.cat}</div><div class="soft-use">${s.u}</div>
                    <div class="soft-level"><div class="soft-level-track"><div class="soft-level-bar"></div></div><div class="soft-level-label">0%</div></div>
                </div>`).join('');
            }

            function animateProficiency(card) {
                const label = card.querySelector('.soft-level-label'), bar = card.querySelector('.soft-level-bar');
                const target = parseInt(card.dataset.lvl, 10) || 0, duration = 1400, start = performance.now();
                function frame(now) { const t = Math.min((now-start)/duration,1), eased = 1-Math.pow(1-t,3), current = eased*target; if(label) label.textContent = Math.round(current)+'%'; if(bar) bar.style.width = current+'%'; if(t<1) requestAnimationFrame(frame); }
                requestAnimationFrame(frame);
            }

            function renderSkills() {
                const map = document.getElementById('skill-map');
                if (!map) return;
                const accents = ["var(--blue)","var(--gold)","var(--teal)","var(--violet)","var(--rust)"];
                const clusters = Object.entries(SKILL_CLUSTERS);
                map.innerHTML = clusters.map(([name, skills], ci) => {
                    const accent = accents[ci % accents.length];
                    const chips = skills.map((s, si) => `<span class="skill-chip" style="transition-delay:${si*40}ms">${s}</span>`).join('');
                    return `<div class="skill-card" style="--accent:${accent}">
                        <button class="sk-head" aria-expanded="false"><span class="sk-head-left"><span class="sk-dot"></span><h4>${name}</h4></span><span class="sk-head-right"><span class="sk-count">${skills.length}</span><svg class="sk-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></button>
                        <div class="sk-body"><div class="sk-body-inner"><div class="skill-chip-list">${chips}</div></div></div>
                    </div>`;
                }).join('');
                map.addEventListener('click', e => {
                    const head = e.target.closest('.sk-head');
                    if (!head) return;
                    const card = head.closest('.skill-card');
                    const willExpand = !card.classList.contains('expanded');
                    card.classList.toggle('expanded', willExpand);
                    head.setAttribute('aria-expanded', String(willExpand));
                });
            }

            function renderCerts() {
                const container = document.getElementById('cert-masonry');
                if (!container) return;
                const accents = ["var(--blue)","var(--gold)","var(--teal)","var(--violet)","var(--rust)"];
                container.innerHTML = CERTS.map((c,i) => {
                    const accent = accents[i % accents.length];
                    return `<div class="cert-card-v2 reveal" style="--accent:${accent}">
                        <div class="cert-top"><div class="cert-badge">${c.ic}</div>${c.y ? `<div class="cert-year">${c.y}</div>` : ''}</div>
                        <div class="cert-title">${c.t}</div><div class="cert-org">${c.o}</div>
                    </div>`;
                }).join('');
            }

            function renderWhy() {
                const container = document.getElementById('why-compact');
                if (!container) return;
                const accents = ["var(--blue)","var(--teal)","var(--gold)","var(--violet)","var(--rust)"];
                const chip = (w,i) => `<div class="why-card-compact" style="--accent:${accents[i%accents.length]}"><div class="why-head"><span class="why-dot"></span><strong>${w.t}</strong></div><span class="why-desc">${w.d}</span></div>`;
                container.innerHTML = WHY.map(chip).join('') + WHY.map(chip).join('');
            }

            function initWhyMarquee() {
                const track = document.getElementById('why-compact'), wrap = track?.closest('.why-marquee');
                if (!track || !wrap) return;
                let offset = 0, paused = false, lastTs = null, speed = 42;
                wrap.addEventListener('mouseenter', ()=> paused=true);
                wrap.addEventListener('mouseleave', ()=> paused=false);
                wrap.addEventListener('touchstart', ()=> paused=true, {passive:true});
                wrap.addEventListener('touchend', ()=> paused=false);
                function tick(ts) {
                    if (lastTs === null) lastTs = ts;
                    const dt = (ts - lastTs)/1000;
                    lastTs = ts;
                    if (!paused) { offset += speed * dt; const half = track.scrollWidth/2; if (half>0 && offset>=half) offset -= half; track.style.transform = `translateX(${-offset}px)`; }
                    requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
            }

            function renderHeroStats() { const c = document.getElementById('hero-stats-container'); if(c) c.innerHTML = `<div class="stat"><div class="num">4</div><div class="lbl">Field Projects</div></div><div class="stat"><div class="num">8</div><div class="lbl">GIS Tools</div></div>`; }
            function renderHeroLetters() {
                const titleEl = document.getElementById('hero-title');
                if (!titleEl) return;
                titleEl.querySelectorAll('.line').forEach(line => {
                    const word = line.dataset.word || '';
                    line.innerHTML = word.split('').map((ch,i) => `<span class="letter" style="--i:${i}">${ch}</span>`).join('');
                });
                setTimeout(() => titleEl.classList.add('settled'), 1500);
            }

            const typedEl = document.getElementById('typed-role');
            if (typedEl) {
                let ri=0, ci=0, deleting=false;
                function typeLoop() {
                    const word = ROLES[ri];
                    if (!deleting) { ci++; typedEl.textContent = word.slice(0,ci); if (ci===word.length) { deleting=true; setTimeout(typeLoop,1500); return; } }
                    else { ci--; typedEl.textContent = word.slice(0,ci); if (ci===0) { deleting=false; ri=(ri+1)%ROLES.length; } }
                    setTimeout(typeLoop, deleting?30:60);
                }
                setTimeout(typeLoop,1000);
            }

            const io = new IntersectionObserver((entries)=>{
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        if (e.target.classList.contains('soft-card-v2')) animateProficiency(e.target);
                        io.unobserve(e.target);
                    }
                });
            }, {threshold:0.1});

            renderHeroLetters();
            renderEducation();
            renderTimeline();
            renderProjects();
            renderSoftware();
            renderSkills();
            renderCerts();
            renderWhy();
            initWhyMarquee();
            renderHeroStats();

            document.querySelectorAll('.reveal, .reveal-scale, .sec-num, .skill-card').forEach(el => io.observe(el));

            const navEl = document.getElementById('nav');
            window.addEventListener('scroll', ()=> navEl.classList.toggle('scrolled', window.scrollY>50), {passive:true});
            const navToggle = document.getElementById('nav-toggle'), navLinks = document.getElementById('nav-links'), navBackdrop = document.getElementById('nav-backdrop');
            function closeMenu() { navToggle?.classList.remove('open'); navLinks?.classList.remove('open'); navBackdrop?.classList.remove('active'); navToggle?.setAttribute('aria-expanded','false'); }
            function toggleMenu() { const isOpen = navLinks?.classList.toggle('open'); navToggle?.classList.toggle('open', isOpen); navBackdrop?.classList.toggle('active', isOpen); navToggle?.setAttribute('aria-expanded', String(!!isOpen)); }
            navToggle?.addEventListener('click', toggleMenu); navBackdrop?.addEventListener('click', closeMenu);
            navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

            document.getElementById('cv-btn')?.addEventListener('click', e => { e.preventDefault(); alert('Add your CV link here.'); });
            document.getElementById('exp-modal-close')?.addEventListener('click', closeExpModal);
            document.getElementById('exp-modal')?.addEventListener('click', e => { if (e.target.id === 'exp-modal') closeExpModal(); });
            window.addEventListener('keydown', e => { if (e.key === 'Escape') closeExpModal(); });

            const dmOverlay = document.getElementById('desktop-modal');
            if (dmOverlay && window.innerWidth < 860) setTimeout(() => dmOverlay.classList.add('active'), 400);
            document.getElementById('dm-continue')?.addEventListener('click', () => dmOverlay?.classList.remove('active'));
            dmOverlay?.addEventListener('click', e => { if (e.target === dmOverlay) dmOverlay.classList.remove('active'); });

            function initTiltCards() {
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const noHover = window.matchMedia('(hover: none)').matches;
                if (reduceMotion || noHover) return;
                const cards = document.querySelectorAll('.float-card, .pillar, .tl-card, .case, .soft-card-v2, .cert-card-v2, .why-card-compact, .contact-pill');
                const maxTilt = 9;
                const reset = 'transform .6s cubic-bezier(.16,.84,.24,1), box-shadow .6s cubic-bezier(.16,.84,.24,1)';
                cards.forEach(card => {
                    card.style.willChange = 'transform, box-shadow'; let raf = null;
                    function enter() { card.style.transition = 'none'; card.style.zIndex = 4; }
                    function move(e) {
                        const rect = card.getBoundingClientRect();
                        const px = ((e.clientX - rect.left)/rect.width)-0.5, py = ((e.clientY - rect.top)/rect.height)-0.5;
                        const ry = px*maxTilt*2, rx = -py*maxTilt*2;
                        if (raf) cancelAnimationFrame(raf);
                        raf = requestAnimationFrame(() => {
                            card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px) scale(1.02)`;
                            card.style.boxShadow = `${(-px*26).toFixed(1)}px ${(14-py*16).toFixed(1)}px 34px rgba(0,0,0,0.4)`;
                        });
                    }
                    function leave() { if(raf) cancelAnimationFrame(raf); card.style.transition = reset; card.style.transform = ''; card.style.boxShadow = ''; card.style.zIndex = ''; }
                    card.addEventListener('mouseenter', enter); card.addEventListener('mousemove', move); card.addEventListener('mouseleave', leave);
                });
            }
            initTiltCards();

            const contactForm = document.getElementById('contact-form'), formStatus = document.getElementById('form-status'), CONTACT_EMAIL = 'prastyo.arlan@email.com';
            contactForm?.addEventListener('submit', e => {
                e.preventDefault();
                const name = document.getElementById('cf-name').value.trim(), email = document.getElementById('cf-email').value.trim(), subj = document.getElementById('cf-subject').value.trim(), msg = document.getElementById('cf-message').value.trim();
                if (!name || !email || !msg) { formStatus.textContent = 'Please fill in your name, email, and message.'; formStatus.classList.add('error'); return; }
                formStatus.classList.remove('error');
                const subject = subj || `Portfolio inquiry from ${name}`;
                const body = `${msg}\n\nâ€” ${name} (${email})`;
                window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                formStatus.textContent = 'Opening your email appâ€¦';
            });

            const canvas = document.getElementById('hero-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
                window.addEventListener('resize', resize); resize();
                function draw() {
                    if (!ctx) return;
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.strokeStyle = 'rgba(59,130,246,0.08)';
                    for (let i=0;i<4;i++) { ctx.beginPath(); for (let x=0;x<canvas.width;x+=40) ctx.lineTo(x, canvas.height*0.3 + Math.sin(x*0.01+i)*30); ctx.stroke(); }
                    requestAnimationFrame(draw);
                }
                draw();
            }
        })();
    
