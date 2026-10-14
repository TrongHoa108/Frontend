import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  articles,
  center,
  courses,
  faqs,
  getArticle,
  getCourse,
  itCompare,
  methods,
  programOptions,
  steps,
} from "../data";
import { Cta, FaqList } from "../components/Layout";

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | TRUNG TÂM ILIS`;
  }, [title]);
}

function PageHero({ kicker, title, text, crumb }) {
  return (
    <header className="page-hero wrap">
      <p className="crumbs"><Link to="/">Trang chủ</Link> · {crumb || title}</p>
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      {text ? <p>{text}</p> : null}
    </header>
  );
}

function CourseGrid({ items }) {
  if (!items.length) {
    return <p className="empty">Không thấy chương trình khớp từ khóa. Hãy chọn “Tất cả” hoặc thử từ khác.</p>;
  }
  return (
    <div className="bento">
      {items.map((course) => (
        <Link to={`/khoa-hoc/${course.slug}`} className="course-card" key={course.slug}>
          <figure><img src={course.image} alt="" /></figure>
          <div className="course-body">
            <span className="pill">{course.kicker}</span>
            <h3>{course.title}</h3>
            <p>{course.promise}</p>
            <p>{course.summary}</p>
            <span className="more">Xem chương trình →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function AboutPage() {
  useTitle("Giới thiệu trung tâm");
  return (
    <>
      <PageHero
        kicker="Về ILIS"
        title="ILIS — đồng hành trên hành trình học tập."
        text="Một mục tiêu rõ. Một lộ trình vừa sức. Cùng phát triển ngoại ngữ, tin học và tìm hiểu cơ hội học tiếp."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Cùng bạn chọn hướng đi phù hợp.</h2>
            <p className="sub" style={{ marginTop: 14 }}>{center.intro}</p>
            <p className="sub" style={{ marginTop: 12 }}>
              ILIS muốn người học hiểu mình cần gì trước khi chọn nội dung. Mỗi cuộc trao đổi bắt đầu từ mục tiêu và nền tảng hiện tại, rồi mới tới chương trình, lịch và học phí.
            </p>
            <div className="stat-row">
              <div className="stat"><b>15.000+</b><span>người theo dõi</span></div>
              <div className="stat"><b>3 nhóm</b><span>ngoại ngữ, tin học, tuyển sinh</span></div>
              <div className="stat"><b>Cần Thơ</b><span>Nguyễn Văn Cừ nối dài</span></div>
            </div>
          </div>
          <div className="frame">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1400&q=80" alt="Ảnh minh họa người học" />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap method-grid">
          {[
            ["Học tập có định hướng", "Lộ trình ngoại ngữ, tin học và lựa chọn giáo dục bám mục tiêu cá nhân."],
            ["Kỹ năng dùng được", "Ưu tiên bài tập, tình huống giao tiếp và tác vụ ứng dụng."],
            ["Tư vấn có căn cứ", "Thông tin trường, hình thức học và hồ sơ theo thông báo tuyển sinh."],
            ["Cam kết nói rõ điều kiện", "Đầu ra VSTEP chỉ áp dụng theo thỏa thuận của từng khóa."],
          ].map(([title, text]) => (
            <article className="panel" key={title}>
              <h3>{title}</h3>
              <p className="sub" style={{ marginTop: 8 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section band">
        <div className="wrap">
          <div className="section-head"><h2>Ba hướng đi, một sự đồng hành.</h2></div>
          <div className="method-grid">
            {methods.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap bento">
          {courses.filter((item) => ["vstep-b1", "tin-hoc-co-ban"].includes(item.slug)).map((course) => (
            <Link className="course-card" to={`/khoa-hoc/${course.slug}`} key={course.slug}>
              <figure><img src={course.image} alt="" /></figure>
              <div className="course-body">
                <span className="pill">{course.kicker}</span>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
              </div>
            </Link>
          ))}
          <Link className="course-card" to="/tu-van-tuyen-sinh">
            <figure><img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80" alt="" /></figure>
            <div className="course-body">
              <span className="pill">Tuyển sinh</span>
              <h3>Tư vấn chương trình học</h3>
              <p>Đại học, cao đẳng, trung cấp và Văn bằng 2 Ngôn ngữ Anh.</p>
            </div>
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function LanguagePage() {
  useTitle("Khóa học ngoại ngữ");
  const [params, setParams] = useSearchParams();
  const filter = params.get("filter") || "tat-ca";
  const [query, setQuery] = useState("");
  const filters = [
    ["tat-ca", "Tất cả"],
    ["vstep", "VSTEP"],
    ["ielts", "IELTS"],
    ["toeic", "TOEIC"],
    ["giao-tiep", "Giao tiếp"],
    ["thieu-nhi", "Thiếu nhi"],
  ];
  const items = useMemo(() => {
    return courses.filter((course) => {
      if (course.group !== "ngoai-ngu") return false;
      if (filter !== "tat-ca" && course.filter !== filter) return false;
      const blob = `${course.title} ${course.summary}`.toLowerCase();
      return blob.includes(query.trim().toLowerCase());
    });
  }, [filter, query]);

  return (
    <>
      <PageHero
        kicker="Ngoại ngữ"
        title="Học ngoại ngữ theo mục tiêu của bạn."
        text="Từ xây nền đến luyện thi và giao tiếp. ILIS tư vấn chương trình sau khi nắm trình độ và nhu cầu hiện tại."
      />
      <section className="section">
        <div className="wrap">
          <div className="filter-bar">
            {filters.map(([id, label]) => (
              <button key={id} className={filter === id ? "on" : ""} onClick={() => setParams(id === "tat-ca" ? {} : { filter: id })}>
                {label}
              </button>
            ))}
            <input className="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm chương trình" aria-label="Tìm chương trình ngoại ngữ" />
          </div>
          <CourseGrid items={items} />
          <p className="note"><strong>VSTEP — Cam kết đầu ra: </strong>theo thỏa thuận và điều kiện của từng khóa. Liên hệ ILIS để được tư vấn chi tiết.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap step-grid">
          {steps.map((step) => (
            <article className="panel" key={step.n}>
              <span className="tag">Bước {step.n}</span>
              <h3 style={{ marginTop: 8 }}>{step.title}</h3>
              <p className="sub">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap faq-layout">
          <div>
            <h2>Câu hỏi thường gặp</h2>
            <p className="sub">Những điểm hay được hỏi trước khi chọn khóa ngoại ngữ.</p>
          </div>
          <FaqList items={faqs.filter((_, index) => [0, 1, 2, 5].includes(index))} />
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ComputingPage() {
  useTitle("Khóa học tin học");
  const [query, setQuery] = useState("");
  const items = courses.filter((course) => course.group === "tin-hoc" && `${course.title} ${course.summary}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <>
      <PageHero
        kicker="Tin học"
        title="Tin học thiết thực cho học tập và công việc."
        text="Làm quen máy tính, xử lý tài liệu và dữ liệu qua bài thực hành, từ cơ bản đến nâng cao."
      />
      <section className="section">
        <div className="wrap">
          <div className="filter-bar">
            <input className="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm nội dung tin học" aria-label="Tìm khóa tin học" />
          </div>
          <CourseGrid items={items} />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">So sánh nhanh</p>
              <h2>Bạn nên bắt đầu từ đâu?</h2>
            </div>
            <p>Đối chiếu nền tảng hiện tại với việc bạn muốn làm tốt hơn.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Nội dung</th><th>Tin học cơ bản</th><th>Tin học nâng cao</th></tr>
              </thead>
              <tbody>
                {itCompare.map((row) => (
                  <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap faq-layout">
          <h2>Câu hỏi về tin học</h2>
          <FaqList items={faqs.filter((_, index) => [3, 5].includes(index))} />
        </div>
      </section>
      <Cta />
    </>
  );
}

export function AdmissionsPage() {
  useTitle("VB2 & Tư vấn tuyển sinh");
  return (
    <>
      <PageHero
        kicker="Tuyển sinh"
        title="Thêm lựa chọn cho hành trình học tập."
        text="ILIS tư vấn Văn bằng 2 Ngôn ngữ Anh và kết nối thông tin tuyển sinh đại học, cao đẳng, trung cấp trên toàn quốc."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Tìm chương trình phù hợp với bạn.</h2>
            <p className="sub" style={{ marginTop: 12 }}>
              Văn bằng 2 Ngôn ngữ Anh được tư vấn theo hình thức từ xa hoặc chính quy, tùy chương trình của từng trường. Trường, điều kiện dự tuyển, hồ sơ, học phí và thời gian học được trao đổi theo thông báo tuyển sinh.
            </p>
            <ul className="checks">
              <li><i>1</i><span>Làm rõ mục tiêu và nhu cầu học</span></li>
              <li><i>2</i><span>Tìm hiểu hình thức từ xa hoặc chính quy</span></li>
              <li><i>3</i><span>Trao đổi điều kiện đầu vào và thông tin chương trình</span></li>
              <li><i>4</i><span>Hướng dẫn hồ sơ theo thông báo tuyển sinh</span></li>
            </ul>
          </div>
          <div className="frame">
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80" alt="Ảnh minh họa tư vấn tuyển sinh" />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap admissions">
          <div className="admissions-copy">
            <p className="kicker">Đối tác tuyển sinh</p>
            <h2>Kết nối cơ hội học trên toàn quốc.</h2>
            <p className="sub" style={{ marginTop: 12 }}>
              Fanpage ILIS ghi nhận trung tâm là đối tác tuyển sinh cho các trường đại học, cao đẳng, trung cấp. Gần đây, ILIS thông báo lễ khai giảng lớp liên thông ngành Luật, khóa 01 năm 2026.
            </p>
            <div className="chips"><span>Đại học</span><span>Cao đẳng</span><span>Trung cấp</span><span>VB2 từ xa</span><span>VB2 chính quy</span></div>
            <Link className="btn btn-pine" to="/bai-viet/khai-giang-lien-thong-luat-2026">Xem thông báo khai giảng</Link>
          </div>
          <figure>
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" alt="" />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="wrap step-grid">
          {steps.map((step) => (
            <article key={step.n}>
              <span className="tag">Bước {step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap faq-layout">
          <h2>Trước khi đăng ký</h2>
          <FaqList items={faqs.filter((_, index) => [4, 5, 6].includes(index))} />
        </div>
      </section>
      <Cta />
    </>
  );
}

export function NewsPage() {
  useTitle("Tin tức & Góc học tập");
  const [tab, setTab] = useState("Tất cả");
  const tabs = ["Tất cả", "Thông báo fanpage", "Góc học tập"];
  const items = articles.filter((item) => tab === "Tất cả" || item.kind === tab);
  return (
    <>
      <PageHero
        kicker="Tin tức"
        title="Tin tức và góc học tập."
        text="Thông báo từ fanpage ILIS và vài gợi ý để chuẩn bị trước khi chọn lộ trình."
      />
      <section className="section">
        <div className="wrap">
          <div className="filter-bar">
            {tabs.map((item) => (
              <button key={item} className={tab === item ? "on" : ""} onClick={() => setTab(item)}>{item}</button>
            ))}
          </div>
          <div className="news-grid">
            {items.map((article) => (
              <Link to={`/bai-viet/${article.slug}`} className="news-card" key={article.slug}>
                <figure><img src={article.image} alt="" /></figure>
                <span className="tag">{article.category} · {article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="more">Đọc bài viết →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  useTitle(article ? article.title : "Không thấy bài viết");
  if (!article) {
    return (
      <section className="section wrap">
        <h1>Không thấy bài viết.</h1>
        <Link className="btn btn-pine" to="/tin-tuc" style={{ marginTop: 16 }}>Về tin tức</Link>
      </section>
    );
  }
  const more = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  return (
    <article className="section">
      <div className="wrap prose">
        <p className="crumbs"><Link to="/">Trang chủ</Link> · <Link to="/tin-tuc">Tin tức</Link> · {article.category}</p>
        <p className="kicker">{article.kind} · {article.date}</p>
        <h1>{article.title}</h1>
        <p className="sub" style={{ marginTop: 12 }}>{article.excerpt}</p>
        <figure className="hero-article"><img src={article.image} alt="Ảnh minh họa bài viết" /></figure>
        {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="note">Ảnh minh họa. Chi tiết lịch, hồ sơ và học phí được trao đổi trực tiếp qua hotline {center.phoneDisplay}.</p>
      </div>
      <div className="wrap" style={{ marginTop: 36 }}>
        <h2>Bài khác</h2>
        <div className="news-grid" style={{ marginTop: 16 }}>
          {more.map((item) => (
            <Link key={item.slug} to={`/bai-viet/${item.slug}`} className="news-card">
              <figure><img src={item.image} alt="" /></figure>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export function CoursePage() {
  const { slug } = useParams();
  const course = getCourse(slug);
  useTitle(course ? course.title : "Không thấy khóa học");
  if (!course) {
    return (
      <section className="section wrap">
        <h1>Không thấy chương trình này.</h1>
        <Link className="btn btn-pine" to="/khoa-hoc-ngoai-ngu" style={{ marginTop: 16 }}>Xem khóa học</Link>
      </section>
    );
  }
  const related = courses.filter((item) => item.group === course.group && item.slug !== course.slug).slice(0, 3);
  return (
    <>
      <PageHero kicker={course.kicker} title={`${course.title} — ${course.promise}`} text={course.summary} crumb={course.title} />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <figure className="frame"><img src={course.image} alt={`Ảnh minh họa chương trình ${course.title}`} /></figure>
            <h2 style={{ marginTop: 28 }}>Chương trình phù hợp với ai?</h2>
            <p className="sub" style={{ marginTop: 10 }}>{course.audience}</p>
            <h2 style={{ marginTop: 28 }}>Nội dung học tập</h2>
            <ol className="syllabus">
              {course.syllabus.map((item, index) => (
                <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></li>
              ))}
            </ol>
            <h2 style={{ marginTop: 28 }}>Sau khóa, bạn nên làm được</h2>
            <ul className="checks">
              {course.outcomes.map((item) => <li key={item}><i>✓</i><span>{item}</span></li>)}
            </ul>
            {course.note ? <p className="note">{course.note}</p> : null}
          </div>
          <aside className="sticky">
            <div className="panel">
              <p className="kicker">Thông tin lớp</p>
              <div className="kv"><span>Chương trình</span><strong>{course.title}</strong></div>
              <div className="kv"><span>Học phí</span><strong>Liên hệ tư vấn</strong></div>
              <div className="kv"><span>Thời lượng</span><strong>Liên hệ tư vấn</strong></div>
              <div className="kv"><span>Lịch học</span><strong>Liên hệ tư vấn</strong></div>
              <div className="kv"><span>Hình thức</span><strong>Liên hệ tư vấn</strong></div>
              <div className="cluster" style={{ marginTop: 16 }}>
                <Link className="btn btn-gold" to={`/lien-he?chuong-trinh=${encodeURIComponent(course.title)}`}>Đăng ký tư vấn</Link>
                <a className="btn btn-ghost" href={center.phoneHref}>{center.phoneDisplay}</a>
              </div>
            </div>
            <div className="panel">
              <p>Nội dung này giới thiệu định hướng chương trình. Hãy chia sẻ mục tiêu và nền tảng để ILIS tư vấn lớp phù hợp.</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Chương trình liên quan</h2>
          <div className="bento" style={{ marginTop: 16 }}>
            {related.map((item) => (
              <Link className="course-card" to={`/khoa-hoc/${item.slug}`} key={item.slug}>
                <figure><img src={item.image} alt="" /></figure>
                <div className="course-body"><span className="pill">{item.kicker}</span><h3>{item.title}</h3><p>{item.promise}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ContactPage() {
  useTitle("Liên hệ tư vấn");
  const [params] = useSearchParams();
  const preset = params.get("chuong-trinh") || "";
  return <ContactForm key={preset} preset={preset} />;
}

function ContactForm({ preset }) {
  const [form, setForm] = useState({ name: "", phone: "", program: preset, note: "" });
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
    if (!form.program) next.program = "Hãy chọn chương trình bạn quan tâm.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const saved = JSON.parse(localStorage.getItem("ilis-leads") || "[]");
    saved.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("ilis-leads", JSON.stringify(saved));
    setDone(true);
  }

  return (
    <>
      <PageHero
        kicker="Liên hệ"
        title="Chia sẻ mục tiêu. ILIS cùng bạn tìm hướng đi."
        text="Bạn đang tìm khóa ngoại ngữ, tin học hay chương trình học tiếp? Hãy để lại thông tin hoặc gọi trực tiếp."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="panel">
            <p className="kicker">Hotline tư vấn</p>
            <h2 style={{ fontSize: "2.4rem", margin: "8px 0" }}><a href={center.phoneHref}>{center.phoneDisplay}</a></h2>
            <p>{center.name}</p>
            <p>{center.descriptor}</p>
            <p className="sub">{center.tagline}</p>
            <ul className="checks">
              <li><i>✓</i><span>Ngoại ngữ theo mục tiêu học</span></li>
              <li><i>✓</i><span>Tin học cơ bản và nâng cao</span></li>
              <li><i>✓</i><span>VB2 Ngôn ngữ Anh và tư vấn tuyển sinh</span></li>
            </ul>
            <p style={{ marginTop: 16 }}><strong>Địa chỉ:</strong> {center.addressDetail}</p>
            <p><strong>Giờ:</strong> {center.hours}</p>
            <div className="cluster" style={{ marginTop: 16 }}>
              <a className="btn btn-pine" href={center.zalo} target="_blank" rel="noreferrer">Nhắn Zalo</a>
              <a className="btn btn-ghost" href={center.facebook} target="_blank" rel="noreferrer">Fanpage</a>
            </div>
            <iframe
              className="map"
              title="Bản đồ ILIS"
              src="https://maps.google.com/maps?q=130C%20Nguy%E1%BB%85n%20V%C4%83n%20C%E1%BB%AB%20n%E1%BB%91i%20d%C3%A0i%20T%C3%A2n%20An%20C%E1%BA%A7n%20Th%C6%A1&z=16&output=embed"
            />
          </div>
          <form className="panel form" onSubmit={submit} noValidate>
            <h2>Bạn quan tâm chương trình nào?</h2>
            <p className="sub">Các trường có dấu * cần điền đủ. Form lưu trên trình duyệt của bạn và chưa gửi tới máy chủ. Để được phản hồi ngay, hãy gọi hoặc nhắn Zalo.</p>
            {done ? (
              <div className="success" role="status">
                <strong>ILIS đã ghi nhận nội dung trên máy bạn.</strong>
                <p>Gọi {center.phoneDisplay} hoặc nhắn Zalo để được trao đổi ngay trong hôm nay.</p>
              </div>
            ) : null}
            <div className="form-row">
              <label>Họ và tên *
                <input name="name" value={form.name} onChange={update} autoComplete="name" />
                {errors.name ? <span className="err">{errors.name}</span> : null}
              </label>
              <label>Số điện thoại *
                <input name="phone" value={form.phone} onChange={update} inputMode="tel" autoComplete="tel" placeholder="0777 799 675" />
                {errors.phone ? <span className="err">{errors.phone}</span> : null}
              </label>
            </div>
            <label>Chương trình quan tâm *
              <select name="program" value={form.program} onChange={update}>
                <option value="">Chọn chương trình</option>
                {programOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
              {errors.program ? <span className="err">{errors.program}</span> : null}
            </label>
            <label>Mục tiêu và nền tảng hiện tại
              <textarea name="note" value={form.note} onChange={update} placeholder="Ví dụ: muốn ôn VSTEP B1, đang đi làm, học tối được." />
            </label>
            <button className="btn btn-gold" type="submit">Gửi nhu cầu tư vấn</button>
          </form>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap faq-layout">
          <h2>Trước khi gọi</h2>
          <FaqList items={faqs.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  useTitle("Không tìm thấy trang");
  return (
    <section className="section wrap">
      <p className="kicker">404</p>
      <h1>Trang này không có trong ILIS.</h1>
      <p className="sub" style={{ margin: "12px 0 18px" }}>Bạn có thể quay về trang chủ hoặc xem các chương trình đang mở.</p>
      <Link className="btn btn-pine" to="/">Về trang chủ</Link>
    </section>
  );
}
