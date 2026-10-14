import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { center } from "../data";

const year = new Date().getFullYear();

const links = [
  ["/", "Trang chủ"],
  ["/gioi-thieu", "Giới thiệu"],
  ["/khoa-hoc-ngoai-ngu", "Ngoại ngữ"],
  ["/khoa-hoc-tin-hoc", "Tin học"],
  ["/tu-van-tuyen-sinh", "Tuyển sinh"],
  ["/tin-tuc", "Tin tức"],
  ["/lien-he", "Liên hệ"],
];

function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${center.name} — ${center.descriptor} — ${center.tagline}`}>
      <img src="/brand-ilis.png" alt={`${center.name}. ${center.descriptor}. ${center.tagline}`} />
    </Link>
  );
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dock, setDock] = useState(false);
  const [chat, setChat] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!chat) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setChat(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chat]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.14 },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setDock(window.scrollY > 420);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip" href="#main">Chuyển đến nội dung</a>
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>{center.name} · {center.descriptor}</span>
          <div className="topbar-links">
            <span className="banner-slogan">{center.tagline}</span>
            <span className="topbar-address">{center.address}</span>
            <a href={center.phoneHref}>Hotline {center.phoneDisplay}</a>
          </div>
        </div>
      </div>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="nav-inner">
          <Logo />
          <nav className="menu" aria-label="Chính">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <Link className="btn btn-ghost" to="/lien-he">Nhận tư vấn</Link>
            <button className="burger" aria-label="Mở menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={open ? "sheet open" : "sheet"} onClick={() => setOpen(false)}>
        <nav onClick={(event) => event.stopPropagation()} aria-label="Menu di động">
          <Logo />
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a href={center.phoneHref}>Gọi {center.phoneDisplay}</a>
          <a href={center.zalo} target="_blank" rel="noreferrer">Nhắn Zalo</a>
        </nav>
      </div>
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 14 }}>{center.name} — {center.descriptor}. Đồng hành cùng bạn trong ngoại ngữ, tin học và lựa chọn chương trình học.</p>
            <p className="banner-slogan" style={{ marginTop: 10 }}>{center.tagline}</p>
          </div>
          <div>
            <h3>Khám phá</h3>
            <div className="foot-links">
              {links.map(([to, label]) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3>Chương trình</h3>
            <div className="foot-links">
              <Link to="/khoa-hoc-ngoai-ngu?filter=vstep">VSTEP A2 · B1 · B2</Link>
              <Link to="/khoa-hoc/ielts">IELTS</Link>
              <Link to="/khoa-hoc/toeic">TOEIC</Link>
              <Link to="/khoa-hoc/giao-tiep">Tiếng Anh giao tiếp</Link>
              <Link to="/khoa-hoc/thieu-nhi">Tiếng Anh thiếu nhi</Link>
              <Link to="/khoa-hoc-tin-hoc">Tin học cơ bản & nâng cao</Link>
              <Link to="/tu-van-tuyen-sinh">VB2 & tuyển sinh</Link>
            </div>
          </div>
          <div>
            <h3>Kết nối</h3>
            <p><a href={center.phoneHref}>{center.phoneDisplay}</a></p>
            <p style={{ margin: "8px 0" }}>{center.addressDetail}</p>
            <p>{center.hours}</p>
            <div className="cluster" style={{ marginTop: 14 }}>
              <a className="btn btn-gold" href={center.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a className="btn btn-line" href={center.zalo} target="_blank" rel="noreferrer">Zalo</a>
            </div>
          </div>
        </div>
        <div className="wrap legal">
          <span>© {year} {center.name} · {center.descriptor}</span>
          <span>Ngoại ngữ · Tin học · Tư vấn tuyển sinh</span>
        </div>
      </footer>
      <div className={dock ? "calldock on" : "calldock"}>
        <a href={center.phoneHref}>Gọi {center.phoneDisplay}</a>
        <a href={center.zalo} target="_blank" rel="noreferrer">Nhắn Zalo</a>
      </div>
      <aside className="float-actions" aria-label="Liên hệ nhanh">
        <a className="fab fab-phone" href={center.phoneHref} data-tip={`Gọi ${center.phoneDisplay}`} aria-label={`Gọi ${center.phoneDisplay}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M6.6 10.8a15.05 15.05 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02L6.6 10.8Z" />
          </svg>
        </a>
        <a className="fab fab-zalo" href={center.zalo} target="_blank" rel="noreferrer" data-tip="Nhắn Zalo" aria-label="Nhắn Zalo">
          <span className="fab-zalo-mark">Zalo</span>
        </a>
        <a className="fab fab-fb" href={center.facebook} target="_blank" rel="noreferrer" data-tip="Facebook" aria-label="Mở Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M14.2 20v-7.1h2.4l.36-2.8h-2.76V8.36c0-.8.22-1.35 1.38-1.35H17V4.52C16.7 4.48 15.8 4.4 14.76 4.4c-2.22 0-3.74 1.36-3.74 3.84v2.06H8.4v2.8h2.62V20h3.18Z" />
          </svg>
        </a>
        <button className={chat ? "fab fab-chat on" : "fab fab-chat"} type="button" data-tip="Nhắn tin" aria-label="Mở hộp thoại nhắn tin" aria-expanded={chat} onClick={() => setChat((value) => !value)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M5 6.2A2.2 2.2 0 0 1 7.2 4h9.6A2.2 2.2 0 0 1 19 6.2v6.6a2.2 2.2 0 0 1-2.2 2.2H12l-3.2 2.5c-.55.43-1.3 0-1.3-.68V15A2.2 2.2 0 0 1 5 12.8V6.2Z" />
          </svg>
        </button>
      </aside>
      {chat ? <QuickChat onClose={() => setChat(false)} /> : null}
    </>
  );
}

function QuickChat({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = "Vui lòng nhập họ tên.";
    if (!/^0\d{9}$/.test(form.phone.replace(/\s/g, ""))) next.phone = "Số điện thoại cần 10 số, bắt đầu bằng 0.";
    if (form.note.trim().length < 2) next.note = "Hãy viết nội dung bạn muốn trao đổi.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const saved = JSON.parse(localStorage.getItem("ilis-leads") || "[]");
    saved.push({ ...form, program: "Nhắn tin nhanh", at: new Date().toISOString() });
    localStorage.setItem("ilis-leads", JSON.stringify(saved));
    setDone(true);
  }

  return (
    <section className="chat-panel" role="dialog" aria-label="Hộp thoại nhắn tin">
      <header className="chat-head">
        <div>
          <strong>Nhắn tin cho ILIS</strong>
          <p>Để lại lời nhắn, ILIS sẽ trao đổi qua điện thoại hoặc Zalo.</p>
        </div>
        <button type="button" className="chat-close" onClick={onClose} aria-label="Đóng hộp thoại">×</button>
      </header>
      {done ? (
        <div className="chat-body">
          <div className="success" role="status">
            <strong>Đã ghi nhận lời nhắn trên máy bạn.</strong>
            <p>Gọi {center.phoneDisplay} hoặc nhắn Zalo để được phản hồi ngay.</p>
          </div>
        </div>
      ) : (
        <form className="chat-body" onSubmit={submit} noValidate>
          <label>Họ và tên
            <input name="name" value={form.name} onChange={update} autoComplete="name" autoFocus />
            {errors.name ? <span className="err">{errors.name}</span> : null}
          </label>
          <label>Số điện thoại
            <input name="phone" value={form.phone} onChange={update} inputMode="tel" autoComplete="tel" placeholder="0777 799 675" />
            {errors.phone ? <span className="err">{errors.phone}</span> : null}
          </label>
          <label>Lời nhắn
            <textarea name="note" value={form.note} onChange={update} placeholder="Bạn muốn tìm hiểu chương trình nào?" />
            {errors.note ? <span className="err">{errors.note}</span> : null}
          </label>
          <button className="btn btn-gold" type="submit">Gửi lời nhắn</button>
        </form>
      )}
    </section>
  );
}

export function Cta() {
  return (
    <section className="cta">
      <div>
        <p className="kicker">Bắt đầu cùng ILIS</p>
        <h2>Bạn muốn bắt đầu từ đâu?</h2>
        <p>Chia sẻ mục tiêu để được tư vấn chương trình phù hợp.</p>
      </div>
      <div className="cluster">
        <Link className="btn btn-gold" to="/lien-he">Nhận tư vấn</Link>
        <a className="btn btn-line" href={center.phoneHref}>{center.phoneDisplay}</a>
      </div>
    </section>
  );
}

export function FaqList({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
