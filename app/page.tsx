'use client';

import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Compass,
  House,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Sun,
  Moon,
  MoveUpRight,
  Layers3,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  roomData,
  roomItems,
  roomOrder,
  projects,
  featuredProjects,
  type RoomId,
  type WorldItem,
} from '@/lib/portfolio-data';

const World = lazy(() =>
  import('@/components/portfolio-world').then((module) => ({
    default: module.PortfolioWorld,
  })),
);

export default function Home() {
  const journey = useRef(0);
  const [chapter, setChapter] = useState(0),
    [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false),
    [still, setStill] = useState(false);
  const [ready, setReady] = useState(false),
    [fallback, setFallback] = useState(false);
  const [guide, setGuide] = useState(false),
    [stories, setStories] = useState(false);
  const [selected, setSelected] = useState<WorldItem | null>(null);
  const [collection, setCollection] = useState<RoomId | null>(null),
    [resetView, setResetView] = useState(0);
  const [visited, setVisited] = useState<number[]>([]);
  const [night, setNight] = useState(false);
  const [clearView, setClearView] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pendingTravel = useRef<number | null>(null);
  const current = roomOrder[Math.max(0, chapter - 1)],
    data = roomData[current];
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const canvas = document.querySelector<HTMLCanvasElement>(
        '.world-stage canvas',
      );
      if (!canvas || canvas.getBoundingClientRect().width === 0) {
        setFallback(true);
      }
    }, 1800);
    return () => window.clearTimeout(timer);
  }, []);
  const storyRoom = collection ?? current,
    storyData = roomData[storyRoom];
  const intro = chapter === 0,
    quiet = reduced || still;
  const handleReady = useCallback(() => {
    setReady(true);
    setFallback(false);
  }, []);
  const handleFallback = useCallback(() => {
    setFallback(true);
    setReady(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(
      '(max-width: 800px), (max-height: 500px) and (pointer: coarse)',
    );
    const change = () => setMobile(media.matches);
    change();
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    change();
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    let tick = 0;
    const scroll = () => {
      cancelAnimationFrame(tick);
      tick = requestAnimationFrame(() => {
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = Math.max(
          0,
          Math.min(7, (window.scrollY / Math.max(1, total)) * 7),
        );
        journey.current = p;
        setProgress(p);
        const c = Math.min(7, Math.floor(p + 0.156));
        setChapter(c);
        if (c > 0) setVisited((old) => (old.includes(c) ? old : [...old, c]));
      });
    };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    return () => {
      cancelAnimationFrame(tick);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
    };
  }, []);
  const scrollToRoom = useCallback(
    (next: number) => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: (Math.max(0, Math.min(7, next)) / 7) * total,
        behavior: quiet ? 'instant' : 'smooth',
      });
    },
    [quiet],
  );
  const finishModalTravel = useCallback(
    (open: boolean) => {
      if (open || pendingTravel.current === null) return;
      const next = pendingTravel.current;
      pendingTravel.current = null;
      // Let the dialog finish restoring scroll position before starting the tour.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToRoom(next));
      });
    },
    [scrollToRoom],
  );
  const travel = useCallback(
    (next: number) => {
      const modalOpen = guide || stories || Boolean(selected);
      if (modalOpen) pendingTravel.current = next;
      setGuide(false);
      setStories(false);
      setSelected(null);
      setCollection(null);
      setResetView((v) => v + 1);
      if (!modalOpen) scrollToRoom(next);
    },
    [guide, stories, selected, scrollToRoom],
  );
  const inspect = useCallback((item: WorldItem) => {
    setStories(false);
    setSelected(item);
  }, []);
  const inspectInWorld = useCallback(
    (item: WorldItem) => {
      setCollection(null);
      inspect(item);
    },
    [inspect],
  );

  return (
    <main
      className={`home-experience ${intro ? 'at-door' : 'inside-home'} ${quiet ? 'quiet-mode' : ''} ${night ? 'after-hours' : ''} ${clearView && !intro ? 'clear-view' : ''}`}
      style={
        {
          '--accent': data.accent,
          '--room-color': data.color,
          '--progress': `${(progress / 7) * 100}%`,
        } as CSSProperties
      }
    >
      <div className="journey-scroll" aria-hidden="true" />
      <div className="experience-stage">
        <div className="paper-grain" aria-hidden="true" />
        <div className="world-stage">
          {fallback && (
            <output className="world-access-fallback">
              <span>Portfolio sections</span>
              <strong>
                Select Browse sections to view qualifications and work.
              </strong>
              <small>
                The 3D preview is unavailable in this browser. All portfolio
                content is available through the section guide.
              </small>
            </output>
          )}
          <Suspense fallback={null}>
            <World
              resetView={resetView}
              journey={journey}
              chapter={chapter}
              reducedMotion={quiet}
              paused={Boolean(selected) || guide || stories}
              onInspect={inspectInWorld}
              onTravel={travel}
              onReady={handleReady}
              onFallback={handleFallback}
              night={night}
              compact={mobile}
            />
          </Suspense>
        </div>
        <div className="stage-shade" aria-hidden="true" />
        <header className="site-header">
          <button
            type="button"
            className="wordmark"
            onClick={() => travel(0)}
            aria-label="Mahera Tasfee, back to overview"
          >
            <span className="monogram">
              m<span>t</span>
            </span>
            <span>
              MAHERA TASFEE<small>SUPPLY CHAIN &amp; OPERATIONS</small>
            </span>
          </button>
          <nav className="header-nav" aria-label="Portfolio shortcuts">
            <button type="button" onClick={() => travel(1)}>
              Profile
            </button>
            <button type="button" onClick={() => travel(4)}>
              Projects <span>{projects.length}</span>
            </button>
            <button
              type="button"
              onClick={() => setGuide(true)}
              className="guide-button"
            >
              <Compass size={17} /> Browse sections
            </button>
          </nav>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/mahera-tasfee/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={17} />
          </a>
        </header>

        {intro ? (
          <section className="arrival-copy">
            <div className="eyebrow">
              <span className="live-dot" /> EARLY CAREER PORTFOLIO{' '}
              <span className="edition">EXPECTED GRADUATION / FALL 2026</span>
            </div>
            <h1>
              Mahera
              <br />
              <em>
                Tasfee<span className="title-period">.</span>
              </em>
            </h1>
            <h2>
              35+ client projects.
              <br /> 8+ client accounts.
            </h2>
            <p>
              Reduced recurring status-check effort by an estimated 20–25%
              through a Notion workflow. NSU BBA candidate in Supply Chain
              Management and Marketing.
            </p>
            <div className="hero-tags">
              <span>Supply chain</span>
              <i>/</i>
              <span>Operations</span>
              <i>/</i>
              <span>Analytics</span>
            </div>
            <button
              type="button"
              className="primary-button"
              onClick={() => travel(1)}
            >
              <span>View profile</span>
              <span className="button-arrow">
                <ArrowRight size={21} />
              </span>
            </button>
            <button
              type="button"
              className="text-button"
              onClick={() => {
                setCollection('projects');
                setStories(true);
              }}
            >
              View projects <ArrowUpRight size={16} />
            </button>
            <div className="intro-footnote">
              <span>BASED IN DHAKA, BANGLADESH</span>
              <span>
                OPEN TO GRADUATE ROLES <i />
              </span>
            </div>
          </section>
        ) : (
          <section className="chapter-copy" key={current}>
            <p className="eyebrow">
              <span>{String(chapter).padStart(2, '0')} / 07</span>
              <span className="eyebrow-rule" />
              {data.category}
            </p>
            <h1>
              {data.title.split('\n').map((line, i) => (
                <span key={line} className={i ? 'italic-line' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="chapter-description">{data.subtitle}</p>
            <button
              type="button"
              className="primary-button compact"
              onClick={() => {
                setCollection(null);
                setStories(true);
              }}
            >
              <span>
                {current === 'projects'
                  ? `View all ${projects.length} projects`
                  : 'View details'}
              </span>
              <Plus size={19} />
            </button>
            <div className="chapter-location">
              <House size={14} />
              {data.label}
            </div>
          </section>
        )}

        <div className="scene-topline">
          <span>
            <i /> {intro ? 'PORTFOLIO OVERVIEW' : data.label.toUpperCase()}
          </span>
          <button
            type="button"
            onClick={() => setNight(!night)}
            aria-label={night ? 'Switch to daylight' : 'Switch to evening'}
          >
            {night ? <Moon size={14} /> : <Sun size={14} />}
            {night ? 'AFTER HOURS' : 'GOLDEN HOUR'}
          </button>
        </div>
        {intro && (
          <button
            className="explore-seal"
            type="button"
            onClick={() => travel(1)}
            aria-label="View profile"
          >
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path
                  id="seal-path"
                  d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                />
              </defs>
              <text>
                <textPath href="#seal-path">
                  SCROLL TO EXPLORE · QUALIFICATIONS &amp; WORK ·{' '}
                </textPath>
              </text>
            </svg>
            <ArrowDown size={25} />
          </button>
        )}
        {intro && (
          <div className="architecture-caption">
            <span>NSU DEBATE CLUB · LEADERSHIP</span>
            <p>
              BDT 1.4M+ secured.
              <br />
              <em>Sponsorship commitments.</em>
            </p>
            <button
              type="button"
              onClick={() => travel(1)}
              aria-label="View profile"
            >
              <MoveUpRight size={23} />
            </button>
          </div>
        )}
        <div className="scene-coordinate" aria-hidden="true">
          {intro
            ? '23.81° N / 90.41° E'
            : `SECTION ${String(chapter).padStart(2, '0')} / 07`}
          <span>{night ? 'EVENING VIEW' : 'DAYLIGHT VIEW'}</span>
        </div>
        {!intro && (
          <div className="room-sign">
            <span>SECTION DETAILS</span>
            <strong>{data.label}</strong>
            <div>
              <span />
              {current === 'projects'
                ? `${featuredProjects.length} featured · ${projects.length} total`
                : `${roomItems[current].length} items to view`}
            </div>
          </div>
        )}
        <div className="scene-status">
          {!ready
            ? 'Loading the interactive portfolio…'
            : fallback
              ? 'Select Browse sections to view the portfolio.'
              : intro
                ? 'Scroll to view qualifications, experience and projects.'
                : mobile
                  ? 'Swipe sideways to look · swipe up to continue'
                  : 'Drag to look around · scroll to continue · select a card'}
        </div>

        <footer className="journey-footer">
          <div className="scroll-invitation">
            <span className="scroll-icon">
              <ArrowDown size={17} />
            </span>
            <span>
              {intro
                ? 'SCROLL TO VIEW PROFILE'
                : chapter === 7
                  ? 'CONTACT'
                  : 'SCROLL TO CONTINUE'}
              <small>
                {intro
                  ? 'Or select Browse sections'
                  : `${visited.length} of ${roomOrder.length} sections viewed`}
              </small>
            </span>
          </div>
          <nav className="chapter-dots" aria-label="Jump to section">
            {roomOrder.map((id, i) => (
              <button
                type="button"
                key={id}
                className={chapter === i + 1 ? 'active' : ''}
                onClick={() => travel(i + 1)}
                aria-label={`${i + 1}. ${roomData[id].label}`}
                aria-current={chapter === i + 1 ? 'step' : undefined}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                <i>{roomData[id].category}</i>
              </button>
            ))}
          </nav>
          <div className="footer-controls">
            {!intro && (
              <button
                type="button"
                className="step-button mobile-previous"
                onClick={() => travel(chapter - 1)}
                aria-label={
                  chapter === 1 ? 'Back to overview' : 'Go to previous section'
                }
              >
                <ArrowLeft size={20} />
              </button>
            )}
            {!intro && (
              <button
                type="button"
                className="motion-button"
                onClick={() => setClearView(!clearView)}
                aria-pressed={clearView}
                aria-label={
                  clearView
                    ? 'Show portfolio labels'
                    : 'Hide labels for an unobstructed view'
                }
              >
                {clearView ? <Eye size={16} /> : <EyeOff size={16} />}
                <span>{clearView ? 'Show labels' : 'Clear view'}</span>
              </button>
            )}
            {!intro && (
              <button
                type="button"
                className="motion-button reset-view"
                onClick={() => setResetView((v) => v + 1)}
                aria-label="Recenter camera facing forward"
              >
                <RotateCcw size={16} />
                <span>Reset view</span>
              </button>
            )}
            <button
              type="button"
              className="motion-button"
              onClick={() => setStill(!still)}
              disabled={reduced}
              aria-pressed={quiet}
              aria-label={
                reduced
                  ? 'Reduced motion follows your device setting'
                  : quiet
                    ? 'Resume ambient motion'
                    : 'Reduce motion'
              }
            >
              {quiet ? <Play size={16} /> : <Pause size={16} />}
              <span>{quiet ? 'Still' : 'Motion'}</span>
            </button>
            <button
              type="button"
              className="step-button"
              onClick={() => travel(chapter === 7 ? 0 : chapter + 1)}
              aria-label={
                chapter === 7 ? 'Back to overview' : 'Go to next section'
              }
            >
              {chapter === 7 ? <House size={18} /> : <ArrowRight size={20} />}
            </button>
          </div>
          <div className="journey-progress" aria-hidden="true">
            <span />
          </div>
        </footer>
      </div>

      <Dialog
        open={guide}
        onOpenChange={setGuide}
        onOpenChangeComplete={finishModalTravel}
      >
        <DialogContent className="home-guide">
          <div className="eyebrow">PORTFOLIO SECTIONS</div>
          <DialogTitle>
            Qualifications,
            <br />
            <em>experience and projects.</em>
          </DialogTitle>
          <DialogDescription>
            Select a section to view education, work experience, projects or
            contact details.
          </DialogDescription>
          <div className="guide-layout">
            <div className="floorplan">
              <div className="floorplan-north">N ↑</div>
              <svg
                viewBox="0 0 360 510"
                role="img"
                aria-label="Interactive floor plan of seven portfolio sections"
              >
                <path d="M180 475V44" className="plan-path" />
                {roomOrder.map((id, i) => {
                  const x = i % 2 ? 183 : 43;
                  const y = 37 + Math.floor(i / 2) * 111;
                  return (
                    <g
                      key={id}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${roomData[id].label}`}
                      onClick={() => travel(i + 1)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          travel(i + 1);
                        }
                      }}
                      className={chapter === i + 1 ? 'current' : ''}
                    >
                      <rect x={x} y={y} width="131" height="99" rx="2" />
                      <path d={`M${x + 12} ${y + 12}h107v75h-107z`} />
                      <text x={x + 18} y={y + 35} className="plan-number">
                        0{i + 1}
                      </text>
                      <text x={x + 18} y={y + 76}>
                        {roomData[id].category}
                      </text>
                    </g>
                  );
                })}
                <text x="214" y="418" className="plan-entry">
                  OVERVIEW
                </text>
                <path d="M181 487l-6-12h12z" className="plan-arrow" />
              </svg>
              <span>{roomOrder.length} SECTIONS. SELECT ONE TO CONTINUE.</span>
            </div>
            <div className="guide-rooms">
              {roomOrder.map((id, i) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => travel(i + 1)}
                  style={{ '--tile': roomData[id].color } as CSSProperties}
                >
                  <span className="guide-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <strong>{roomData[id].label}</strong>
                    <span>{roomData[id].category}</span>
                  </div>
                  {visited.includes(i + 1) ? (
                    <Check size={19} />
                  ) : (
                    <ArrowUpRight size={19} />
                  )}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="text-button"
            onClick={() => travel(0)}
          >
            <ArrowLeft size={16} /> Back to overview
          </button>
        </DialogContent>
      </Dialog>

      <Sheet
        open={stories}
        onOpenChange={setStories}
        onOpenChangeComplete={(open) => {
          finishModalTravel(open);
          if (open) {
            requestAnimationFrame(() => {
              document.querySelector<HTMLElement>('.story-sheet')?.scrollTo({
                top: 0,
                behavior: 'instant',
              });
            });
          }
        }}
      >
        <SheetContent className="story-sheet">
          <div className="sheet-heading">
            <span className="eyebrow">
              <Layers3 size={15} />
              {String(roomOrder.indexOf(storyRoom) + 1).padStart(2, '0')} ·{' '}
              {storyData.category}
            </span>
            <SheetTitle>{storyData.label}</SheetTitle>
            <SheetDescription>
              {storyRoom === 'projects'
                ? 'AI-assisted prototypes, simulations, and coursework. Select a project for its scope and available source code. Six projects are featured in the room; the complete collection is below.'
                : storyData.subtitle}
            </SheetDescription>
          </div>
          <div
            className={`story-collection ${storyRoom === 'projects' ? 'project-collection' : ''}`}
          >
            {roomItems[storyRoom].map((item, i) => (
              <button
                type="button"
                className={`story-item ${item.image ? 'has-media' : ''}`}
                key={item.title}
                onClick={() => inspect(item)}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} project screenshot`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    unoptimized
                  />
                ) : storyRoom === 'projects' ? (
                  <div className="media-placeholder">
                    <span className="placeholder-index">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <MoveUpRight size={30} />
                    <span>PREVIEW NOT ADDED YET</span>
                  </div>
                ) : null}
                <div className="story-item-copy">
                  <span>
                    {String(i + 1).padStart(2, '0')} /{' '}
                    {item.language ?? item.eyebrow}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <i>
                    View details <ArrowUpRight size={17} />
                  </i>
                </div>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Dialog
        open={Boolean(selected)}
        onOpenChangeComplete={finishModalTravel}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="exhibit-dialog">
          {selected && (
            <>
              {selected.image ? (
                <div className="exhibit-media">
                  <Image
                    src={selected.image}
                    alt={`${selected.title} project screenshot`}
                    width={1600}
                    height={1000}
                    unoptimized
                  />
                </div>
              ) : selected.language ? (
                <div className="exhibit-media empty-preview">
                  <BookOpen size={46} />
                  <span>
                    Screenshots and a screen recording
                    <br />
                    will be added here.
                  </span>
                </div>
              ) : (
                <div className="exhibit-symbol">
                  <BookOpen size={38} strokeWidth={1} />
                </div>
              )}
              <div className="exhibit-copy">
                <p className="eyebrow">{selected.eyebrow}</p>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.body}</DialogDescription>
                {selected.highlights?.length ? (
                  <ul className="exhibit-highlights">
                    {selected.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
                {selected.language && (
                  <div className="project-meta">
                    <span>{selected.language}</span>
                    <span>
                      {selected.image
                        ? 'Project preview'
                        : 'Preview not added yet'}
                    </span>
                  </div>
                )}
                {selected.link && (
                  <a
                    className="primary-button compact"
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selected.linkLabel ?? 'Open link'}
                    <ArrowUpRight size={18} />
                  </a>
                )}
                <button
                  type="button"
                  className="text-button"
                  onClick={() => {
                    setSelected(null);
                    setStories(true);
                  }}
                >
                  View all section details <ChevronRight size={16} />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <noscript>
        <div className="no-script">
          <h1>Mahera Tasfee</h1>
          <p>
            North South University BBA candidate in Supply Chain Management and
            Marketing, expected Fall 2026. Project coordination experience
            across 35+ client projects and self-initiated supply-chain analytics
            prototypes.
          </p>
          <a href="https://github.com/Mah-era">View projects on GitHub</a>
          <a href="https://www.linkedin.com/in/mahera-tasfee/">
            Connect on LinkedIn
          </a>
        </div>
      </noscript>
    </main>
  );
}
