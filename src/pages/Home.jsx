import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { articles, center, courses, faqs, methods, pathways, steps } from "../data";
import { Cta, FaqList } from "../components/Layout";

function CountUp({ to }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / 1200);
        setValue(Math.round(to * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      io.disconnect();
    });
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);
  return <b ref={ref}>{value.toLocaleString("vi-VN")}+</b>;
}

const homeCourses = courses.filter((item) => item.featured);

export default function Home() {
  useEffect(() => {
    document.title = `${center.name} | ${center.descriptor}`;
  }, []);

  return (
    <>
      <section className="hero">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> {center.name} · {center.descriptor}</p>
            <h1>
              <span>Vững ngoại ngữ.</span>
              <span>Giỏi tin học.</span>
              <em>Mở lối tương lai.</em>
            </h1>
            <p className="lead">Luyện VSTEP, IELTS, TOEIC, giao tiếp, thiếu nhi, tin học và tư vấn tuyển sinh. Lộ trình rõ, bắt đầu từ mục tiêu của bạn.</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/lien-he">Nhận tư vấn lộ trình</Link>
              <Link className="btn btn-ghost" to="/khoa-hoc-ngoai-ngu">Khám phá khóa học</Link>
            </div>
            <div className="meta-row">
              <a href={center.phoneHref}>Hotline {center.phoneDisplay}</a>
              <span>·</span>
              <span>{center.tagline}</span>
            </div>
          </div>
          <div className="stage">
            <div className="stage-photo">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80" alt="Ảnh minh họa lớp học" />
              <div className="float float-b">
                <strong>15.000+</strong>
                <span>người theo dõi fanpage</span>
              </div>
              <div className="float float-a">
                <strong>VSTEP</strong>
                <span>A2 · B1 · B2, cam kết đầu ra theo khóa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} style={{ display: "flex", gap: 42 }}>
              {["VSTEP A2", "VSTEP B1", "VSTEP B2", "IELTS", "TOEIC", "Giao tiếp", "Thiếu nhi", "Tin học cơ bản", "Tin học nâng cao", "VB2 Ngôn ngữ Anh", "Tuyển sinh toàn quốc"].map((item) => (
                <span key={`${copy}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="kicker">Chọn hướng đi</p>
              <h2>Học cho mục tiêu của bạn.</h2>
            </div>
            <p>Bốn lối vào ILIS đang đào tạo và tư vấn, đúng như phần giới thiệu trên fanpage.</p>
          </div>
          <div className="path-grid">
            {pathways.map((item, index) => (
              <Link className={`path-card ${index ? `d${index + 1}` : ""}`} to={item.to} key={item.title} data-reveal>
                <img src={item.image} alt="" />
                <div className="shade" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="frame" data-reveal>
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80" alt="Ảnh minh họa buổi học" />
          </div>
          <div data-reveal>
            <p className="kicker">Chào mừng bạn đến ILIS</p>
            <h2>Cùng bạn chọn con đường học phù hợp.</h2>
            <p className="sub" style={{ marginTop: 14 }}>
              TRUNG TÂM ILIS — tư vấn đầu tư giáo dục — đồng hành từ mục tiêu thi chứng chỉ, kỹ năng công việc đến định hướng học tiếp. Mỗi cuộc trao đổi bắt đầu bằng nhu cầu của bạn, không bắt đầu bằng một khóa có sẵn.
            </p>
            <ul className="checks">
              <li><i>✓</i><span>Ngoại ngữ từ nền tảng đến mục tiêu luyện thi</span></li>
              <li><i>✓</i><span>Tin học gắn với học tập và công việc</span></li>
              <li><i>✓</i><span>Tư vấn chương trình và định hướng tuyển sinh toàn quốc</span></li>
            </ul>
            <div className="hero-actions">
              <Link className="btn btn-pine" to="/gioi-thieu">Tìm hiểu về ILIS</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }} id="chuong-trinh">
        <div className="wrap">
          <div className="section-head">
            <div data-reveal>
              <p className="kicker">Chọn lộ trình</p>
              <h2>Học hôm nay. Mở thêm cơ hội.</h2>
            </div>
            <Link className="btn btn-ghost" to="/khoa-hoc-ngoai-ngu">Xem khóa ngoại ngữ</Link>
          </div>
          <div className="bento">
            {homeCourses.map((course, index) => (
              <Link to={`/khoa-hoc/${course.slug}`} className={index === 0 ? "course-card wide" : "course-card"} key={course.slug} data-reveal>
                <figure><img src={course.image} alt="" /></figure>
                <div className="course-body">
                  <h3>{course.title}</h3>
                  <p>{course.summary}</p>
                  <span className="more">Xem chương trình →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="note"><strong>VSTEP — Cam kết đầu ra: </strong>theo thỏa thuận và điều kiện của từng khóa. Liên hệ ILIS để được tư vấn rõ trước khi đăng ký.</p>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Cách ILIS đồng hành</p>
              <h2>Từ mục tiêu đến từng bước tiến.</h2>
            </div>
          </div>
          <div className="method-grid">
            {methods.map((item, index) => (
              <article className="method" key={item.title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="stat-row">
            <div className="stat"><CountUp to={center.followers} /><span>người theo dõi fanpage</span></div>
            <div className="stat"><b>A2–B2</b><span>VSTEP cam kết đầu ra theo khóa</span></div>
            <div className="stat"><b>3 bậc</b><span>ĐH · CĐ · TC trên toàn quốc</span></div>
            <div className="stat"><b>24/7</b><span>{center.hours}</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <article className="admissions" data-reveal>
            <div className="admissions-copy">
              <p className="kicker">VB2 & tư vấn tuyển sinh</p>
              <h2>Thêm một lựa chọn cho hành trình học tập.</h2>
              <p className="sub" style={{ marginTop: 12 }}>
                ILIS tư vấn Văn bằng 2 Ngôn ngữ Anh hình thức từ xa và chính quy, đồng thời là đối tác tuyển sinh các chương trình đại học, cao đẳng, trung cấp trên toàn quốc.
              </p>
              <div className="chips">
                <span>Đại học</span><span>Cao đẳng</span><span>Trung cấp</span><span>VB2 Ngôn ngữ Anh</span>
              </div>
              <Link className="btn btn-pine" to="/tu-van-tuyen-sinh">Tìm hiểu tuyển sinh</Link>
            </div>
            <figure>
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80" alt="Ảnh minh họa buổi tư vấn tuyển sinh" />
            </figure>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Bắt đầu cùng ILIS</p>
              <h2>Một hành trình rõ, từng bước.</h2>
            </div>
          </div>
          <div className="step-grid">
            {steps.map((step) => (
              <article className="step" key={step.n} data-reveal>
                <span>Bước {step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Tin tức & góc học tập</p>
              <h2>Thêm kiến thức. Thêm lịch học.</h2>
            </div>
            <Link className="btn btn-ghost" to="/tin-tuc">Xem tất cả bài viết</Link>
          </div>
          <div className="news-grid">
            {articles.slice(0, 3).map((article) => (
              <Link to={`/bai-viet/${article.slug}`} className="news-card" key={article.slug} data-reveal>
                <figure><img src={article.image} alt="" /></figure>
                <span className="tag">{article.category} · {article.kind}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="more">Đọc bài viết →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap faq-layout">
          <div>
            <p className="kicker">Giải đáp cùng ILIS</p>
            <h2>Những điều bạn có thể đang quan tâm.</h2>
            <p className="sub" style={{ margin: "12px 0 18px" }}>Thêm thông tin để tự tin chọn lộ trình. ILIS sẵn sàng trao đổi về nhu cầu của bạn.</p>
            <Link className="btn btn-ghost" to="/lien-he">Liên hệ tư vấn</Link>
          </div>
          <FaqList items={faqs.slice(0, 6)} />
        </div>
      </section>
      <Cta />
    </>
  );
}
