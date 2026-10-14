export const center = {
  name: "TRUNG TÂM ILIS",
  descriptor: "Tư vấn đầu tư giáo dục",
  short: "ILIS",
  legal: "Công ty TNHH Tư vấn đầu tư giáo dục ILIS",
  tagline: "New path - New life",
  phoneDisplay: "0777 799 675",
  phoneHref: "tel:0777799675",
  zalo: "https://zalo.me/0777799675",
  facebook: "https://www.facebook.com/profile.php?id=61587161676731",
  address: "Nguyễn Văn Cừ nối dài, Phường Tân An, TP. Cần Thơ",
  addressDetail: "130C–130D Nguyễn Văn Cừ (nối dài), Phường Tân An, TP. Cần Thơ",
  hours: "Tiếp nhận tư vấn mọi lúc",
  followers: 15000,
  categories: ["Trường học", "Tư vấn giáo dục", "Trung tâm ngoại ngữ"],
  intro:
    "Ngoại ngữ ILIS chuyên đào tạo VSTEP (A2, B1, B2) cam kết đầu ra, IELTS, TOEIC, Anh văn giao tiếp, tiếng Anh thiếu nhi, tin học cơ bản và nâng cao, Văn bằng 2 Ngôn ngữ Anh từ xa và chính quy. ILIS là đối tác tuyển sinh cho các trường đại học, cao đẳng, trung cấp trên toàn quốc.",
};

const photo = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const courses = [
  {
    slug: "vstep-a2",
    title: "VSTEP A2",
    kicker: "VSTEP",
    group: "ngoai-ngu",
    filter: "vstep",
    promise: "Củng cố nền tảng theo mục tiêu A2",
    summary:
      "Ôn từ vựng, ngữ pháp và bốn kỹ năng tiếng Anh theo mục tiêu A2. Lộ trình được trao đổi sau khi ILIS nắm trình độ và nhu cầu của bạn.",
    audience: "Người mới bắt đầu hoặc cần hệ thống lại tiếng Anh trước khi lên B1.",
    outcomes: [
      "Củng cố từ vựng và mẫu câu dùng được trong tình huống quen thuộc.",
      "Luyện nghe, nói, đọc, viết theo dạng bài phù hợp mục tiêu A2.",
      "Nhận phản hồi để biết phần cần rèn trước khi chuyển bậc.",
    ],
    syllabus: [
      "Làm quen cấu trúc bài và tiêu chí A2.",
      "Từ vựng, ngữ pháp nền và câu đơn giản, rõ ý.",
      "Nghe hội thoại ngắn, đọc đoạn thông tin thường gặp.",
      "Nói và viết những nội dung gần với đời sống, công việc.",
      "Bài tập tổng hợp và trao đổi hướng ôn tiếp theo.",
    ],
    image: photo("photo-1434030216411-0b793f4b4173"),
    tone: "#1c3d38",
  },
  {
    slug: "vstep-b1",
    title: "VSTEP B1",
    kicker: "VSTEP",
    group: "ngoai-ngu",
    filter: "vstep",
    featured: true,
    promise: "Củng cố bốn kỹ năng",
    summary:
      "Hệ thống kiến thức và rèn nghe, nói, đọc, viết theo mục tiêu B1, với bài tập và thực hành theo dạng bài phù hợp.",
    audience: "Sinh viên và người đi làm cần học, ôn tiếng Anh theo mục tiêu B1.",
    outcomes: [
      "Nắm khung kiến thức và dạng bài cần cho mục tiêu B1.",
      "Luyện từng kỹ năng rồi ghép lại thành bài tổng hợp.",
      "Nhìn ra lỗi lặp lại để chỉnh trước khi thi.",
    ],
    syllabus: [
      "Củng cố nền tảng trước khi vào dạng bài.",
      "Luyện nghe, nói, đọc, viết theo từng kỹ năng.",
      "Phân tích lỗi thường gặp và cách chỉnh.",
      "Thực hành bài tổng hợp theo lộ trình của khóa.",
    ],
    note: "Cam kết đầu ra VSTEP được áp dụng theo thỏa thuận và điều kiện của từng khóa. Hãy hỏi rõ phạm vi trước khi đăng ký.",
    image: photo("photo-1456513080510-7bf3a84b82f8"),
    tone: "#24324a",
  },
  {
    slug: "vstep-b2",
    title: "VSTEP B2",
    kicker: "VSTEP",
    group: "ngoai-ngu",
    filter: "vstep",
    promise: "Diễn đạt rõ và có cấu trúc",
    summary:
      "Nâng khả năng dùng tiếng Anh qua luyện kỹ năng, mở rộng từ vựng và thực hành diễn đạt có cấu trúc theo mục tiêu B2.",
    audience: "Người đã có nền và muốn ôn lên mục tiêu B2.",
    outcomes: [
      "Mở rộng vốn từ và cách triển khai ý dài hơn.",
      "Luyện nói, viết mạch lạc theo yêu cầu của dạng bài.",
      "Rà soát điểm còn hụt trước kỳ thi.",
    ],
    syllabus: [
      "Xác định khoảng cách giữa nền hiện tại và mục tiêu B2.",
      "Đọc, nghe các đoạn dài và ghi ý chính.",
      "Nói và viết có mở, thân, kết.",
      "Luyện đề và chữa bài theo lỗi của từng người.",
    ],
    note: "Cam kết đầu ra VSTEP được áp dụng theo thỏa thuận và điều kiện của từng khóa.",
    image: photo("photo-1481627834876-b7833e8f5570"),
    tone: "#3a2a1c",
  },
  {
    slug: "ielts",
    title: "IELTS",
    kicker: "IELTS",
    group: "ngoai-ngu",
    filter: "ielts",
    featured: true,
    promise: "Từ nền tảng đến mục tiêu",
    summary:
      "Xây và phát triển bốn kỹ năng IELTS, chú trọng cách diễn đạt và thực hành theo nhu cầu của người học.",
    audience:
      "Người có kế hoạch học IELTS cho việc học, công việc hoặc mục tiêu cá nhân.",
    outcomes: [
      "Làm quen tiêu chí Listening, Reading, Speaking, Writing.",
      "Rèn cách triển khai ý thay vì học mẹo rời.",
      "Nhận bài chữa để thấy lỗi cần sửa trước.",
    ],
    syllabus: [
      "Ngôn ngữ nền và thói quen làm bài.",
      "Listening và Reading: dạng câu hỏi, quản lý thời gian.",
      "Speaking: trả lời có ý, có ví dụ, phát âm rõ.",
      "Writing: bố cục đoạn và cách nối ý.",
      "Nhận diện lỗi thường gặp sau mỗi vòng luyện.",
    ],
    image: photo("photo-1523240795612-9a054b0db644"),
    tone: "#1e3348",
  },
  {
    slug: "toeic",
    title: "TOEIC",
    kicker: "TOEIC",
    group: "ngoai-ngu",
    filter: "toeic",
    featured: true,
    promise: "Tiếng Anh cho công việc",
    summary:
      "Củng cố từ vựng và kỹ năng tiếng Anh trong tình huống quen của môi trường làm việc, kết hợp luyện dạng bài theo chương trình.",
    audience: "Sinh viên và người đi làm quan tâm học hoặc luyện thi TOEIC.",
    outcomes: [
      "Quen từ vựng công sở và tình huống giao dịch.",
      "Luyện nghe và đọc hiểu theo dạng bài của chương trình.",
      "Biết phần nào cần ưu tiên theo mục tiêu điểm.",
    ],
    syllabus: [
      "Từ vựng công việc và cụm hay gặp.",
      "Luyện nghe hội thoại, thông báo, trao đổi ngắn.",
      "Đọc hiểu email, thông báo, đoạn mô tả.",
      "Phân tích dạng bài và bài tập tổng hợp.",
    ],
    note: "Phạm vi kỹ năng cụ thể được tư vấn theo từng khóa.",
    image: photo("photo-1521737711867-e3b97375f902"),
    tone: "#243044",
  },
  {
    slug: "giao-tiep",
    title: "Tiếng Anh giao tiếp",
    kicker: "Giao tiếp",
    group: "ngoai-ngu",
    filter: "giao-tiep",
    promise: "Nói được trong tình huống thật",
    summary:
      "Rèn phát âm, nghe phản xạ và cách diễn đạt trong những tình huống gần với cuộc sống và công việc.",
    audience: "Người muốn dùng tiếng Anh để nói chuyện, không chỉ để làm bài thi.",
    outcomes: [
      "Phản xạ với câu hỏi và tình huống quen.",
      "Sửa phát âm những âm dễ gây hiểu nhầm.",
      "Tự tin hơn khi nói câu ngắn, đủ ý.",
    ],
    syllabus: [
      "Làm quen âm và nhịp câu.",
      "Mẫu hội thoại đời sống và công việc.",
      "Nghe rồi nói lại theo ý của mình.",
      "Thực hành theo cặp và chữa câu tại lớp.",
    ],
    image: photo("photo-1522202176988-66273c2fd55f"),
    tone: "#1d3a32",
  },
  {
    slug: "thieu-nhi",
    title: "Tiếng Anh thiếu nhi",
    kicker: "Thiếu nhi",
    group: "ngoai-ngu",
    filter: "thieu-nhi",
    featured: true,
    promise: "Khơi niềm vui học tiếng Anh",
    summary:
      "Cho trẻ tiếp cận tiếng Anh qua hình ảnh, trò chơi ngôn ngữ và hoạt động tương tác, phù hợp độ tuổi và nền tảng.",
    audience:
      "Phụ huynh tìm chương trình cho con. Lớp được tư vấn theo độ tuổi, nền tảng và nhu cầu của trẻ.",
    outcomes: [
      "Làm quen từ vựng theo chủ đề gần gũi.",
      "Nghe và đáp lại bằng câu ngắn, động tác, trò chơi.",
      "Giữ nhịp học vui, đều, không gây áp lực thừa.",
    ],
    syllabus: [
      "Từ vựng theo chủ đề.",
      "Làm quen âm.",
      "Nghe và phản hồi đơn giản.",
      "Hoạt động nhóm.",
      "Thực hành ngôn ngữ qua trò chơi.",
    ],
    image: photo("photo-1503676260728-1c00da094a0b"),
    tone: "#3d3224",
  },
  {
    slug: "tin-hoc-co-ban",
    title: "Tin học cơ bản",
    kicker: "Cơ bản",
    group: "tin-hoc",
    filter: "co-ban",
    featured: true,
    promise: "Bắt đầu từ kỹ năng thiết yếu",
    summary:
      "Làm quen thao tác máy tính và ứng dụng văn phòng để tự tin hơn trong học tập và việc hằng ngày.",
    audience: "Người mới bắt đầu hoặc muốn hệ thống lại kỹ năng máy tính.",
    outcomes: [
      "Tự thực hiện các việc máy tính và văn phòng phổ biến.",
      "Soạn văn bản, bảng tính và bài trình chiếu ở mức cơ bản.",
      "Biết lưu, tìm và gửi tài liệu gọn hơn.",
    ],
    syllabus: [
      "Sử dụng máy tính.",
      "Tổ chức tệp và thư mục.",
      "Soạn thảo, định dạng văn bản trong Word.",
      "Bảng tính Excel cơ bản.",
      "Trình chiếu PowerPoint.",
      "Internet và email.",
      "Thực hành tác vụ văn phòng.",
    ],
    note: "Đây là mô tả định hướng học tập, không phải cam kết cấp chứng chỉ.",
    image: photo("photo-1516321318423-f06f85e504b3"),
    tone: "#1c2c3a",
  },
  {
    slug: "tin-hoc-nang-cao",
    title: "Tin học nâng cao",
    kicker: "Nâng cao",
    group: "tin-hoc",
    filter: "nang-cao",
    promise: "Xử lý việc nhanh và sạch hơn",
    summary:
      "Phát triển kỹ năng xử lý văn bản, bảng tính và cách trình bày thông tin qua bài tập gắn với việc thật.",
    audience: "Người đã có nền và muốn làm việc với tài liệu, dữ liệu hiệu quả hơn.",
    outcomes: [
      "Soạn tài liệu dài có cấu trúc rõ.",
      "Xử lý bảng tính, lọc và tổng hợp dữ liệu thường gặp.",
      "Trình bày thông tin gọn để người khác đọc được ngay.",
    ],
    syllabus: [
      "Văn bản nhiều cấp, mục lục, định dạng thống nhất.",
      "Hàm, lọc, sắp xếp và bảng tổng hợp trong Excel.",
      "Biểu đồ phục vụ báo cáo.",
      "Bài trình chiếu cho một nội dung công việc cụ thể.",
      "Thực hành theo tình huống người học đang gặp.",
    ],
    image: photo("photo-1551288049-bebda4e38f71"),
    tone: "#243028",
  },
];

export const pathways = [
  {
    title: "Chinh phục ngoại ngữ",
    text: "VSTEP, IELTS, TOEIC và giao tiếp.",
    to: "/khoa-hoc-ngoai-ngu",
    image: photo("photo-1524178232363-1fb2b075b655", 900),
  },
  {
    title: "Tiếng Anh cho trẻ",
    text: "Khơi niềm vui học qua hình ảnh và trò chơi.",
    to: "/khoa-hoc-ngoai-ngu?filter=thieu-nhi",
    image: photo("photo-1503676260728-1c00da094a0b", 900),
  },
  {
    title: "Thành thạo tin học",
    text: "Kỹ năng ứng dụng cho học tập và công việc.",
    to: "/khoa-hoc-tin-hoc",
    image: photo("photo-1498050108023-c5249f4df085", 900),
  },
  {
    title: "Mở thêm cơ hội học",
    text: "VB2 Ngôn ngữ Anh và tư vấn tuyển sinh.",
    to: "/tu-van-tuyen-sinh",
    image: photo("photo-1523580494863-6f3031224c94", 900),
  },
];

export const methods = [
  {
    title: "Bắt đầu từ nhu cầu",
    text: "Xác định mục tiêu học trước khi chọn chương trình.",
  },
  {
    title: "Lộ trình dễ theo dõi",
    text: "Chia mục tiêu thành nội dung và kỹ năng cần rèn.",
  },
  {
    title: "Ưu tiên thực hành",
    text: "Học qua bài tập, tình huống nói và tác vụ ứng dụng.",
  },
  {
    title: "Tư vấn rõ ràng",
    text: "Trao đổi chương trình, hình thức học và thông tin phù hợp.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Chia sẻ mục tiêu",
    text: "Cho ILIS biết nhu cầu học và nền tảng hiện tại của bạn.",
  },
  {
    n: "02",
    title: "Tư vấn chương trình",
    text: "Trao đổi lộ trình, nội dung và hình thức học phù hợp.",
  },
  {
    n: "03",
    title: "Xác nhận thông tin",
    text: "Tìm hiểu học phí, lịch học và điều kiện của chương trình.",
  },
  {
    n: "04",
    title: "Đăng ký và bắt đầu",
    text: "Hoàn tất thông tin rồi bắt đầu hành trình học.",
  },
];

export const faqs = [
  {
    q: "Tôi chưa biết trình độ tiếng Anh của mình, nên bắt đầu từ đâu?",
    a: "Bạn có thể chia sẻ mục tiêu và nền tảng hiện tại với ILIS để được tư vấn chương trình phù hợp. Cách đánh giá đầu vào được trao đổi theo từng khóa.",
  },
  {
    q: "Cam kết đầu ra VSTEP được áp dụng như thế nào?",
    a: "Cam kết đầu ra áp dụng theo thỏa thuận và điều kiện của từng khóa. Hãy liên hệ ILIS để nắm rõ phạm vi và điều kiện trước khi đăng ký.",
  },
  {
    q: "ILIS có chương trình tiếng Anh cho trẻ không?",
    a: "Có. Lớp tiếng Anh thiếu nhi được tư vấn theo độ tuổi, nền tảng và nhu cầu của trẻ.",
  },
  {
    q: "Tôi nên học tin học cơ bản hay nâng cao?",
    a: "Nếu cần làm quen máy tính và tác vụ văn phòng, hãy tìm hiểu chương trình cơ bản. Nếu đã có nền và muốn xử lý việc tốt hơn, hãy trao đổi về chương trình nâng cao.",
  },
  {
    q: "Chương trình VB2 Ngôn ngữ Anh có những hình thức nào?",
    a: "ILIS tư vấn hình thức từ xa và chính quy tùy chương trình tuyển sinh của từng trường. Điều kiện và thông tin cụ thể theo thông báo tương ứng.",
  },
  {
    q: "Học phí và lịch khai giảng xem ở đâu?",
    a: "Gọi 0777 799 675, nhắn Zalo hoặc điền form tư vấn. ILIS trao đổi học phí, lịch học và điều kiện theo đúng chương trình bạn quan tâm.",
  },
  {
    q: "ILIS ở đâu và làm việc giờ nào?",
    a: "Fanpage ghi nhận địa điểm tại Nguyễn Văn Cừ nối dài, Cần Thơ và tiếp nhận tư vấn mọi lúc. Địa chỉ hoạt động: 130C–130D Nguyễn Văn Cừ (nối dài), Phường Tân An, TP. Cần Thơ.",
  },
];

export const itCompare = [
  ["Phù hợp với", "Người mới bắt đầu hoặc cần hệ thống lại kỹ năng máy tính.", "Người đã có nền và muốn nâng hiệu quả làm việc."],
  ["Trọng tâm", "Thao tác máy tính, tệp, Word, Excel và PowerPoint cơ bản.", "Văn bản nâng cao, xử lý dữ liệu, bảng tổng hợp và trình chiếu."],
  ["Thực hành", "Tác vụ học tập và văn phòng phổ biến.", "Bài tập ứng dụng theo tình huống công việc."],
  ["Thông tin lớp", "Liên hệ ILIS để được tư vấn.", "Liên hệ ILIS để được tư vấn."],
];

export const articles = [
  {
    slug: "thi-tin-hoc-25-10",
    category: "Tin học",
    kind: "Thông báo fanpage",
    date: "12.10.2026",
    title: "Thi tin học 25/10 — ILIS chờ bạn",
    excerpt:
      "ILIS thông báo kỳ thi tin học ngày 25/10 trên fanpage. Gọi hotline để biết điều kiện dự thi, hồ sơ và khung giờ.",
    image: photo("photo-1516321318423-f06f85e504b3"),
    body: [
      "Trên fanpage Trung tâm Tư vấn đầu tư giáo dục ILIS, trung tâm đăng thông báo “Thi tin học 25/10 — ILIS chờ bạn”. Đây là mốc để người đang học hoặc có nhu cầu thi tin học chủ động sắp xếp.",
      "Nội dung bài đăng gốc là lời mời tham gia kỳ thi. Phần điều kiện dự thi, giấy tờ cần mang và giờ tập trung không được ghi đủ trong phần mở đầu công khai, nên ILIS tiếp nhận trao đổi trực tiếp.",
      "Nếu bạn đang học tin học cơ bản hoặc nâng cao tại ILIS, hãy gọi 0777 799 675 hoặc nhắn Zalo, nêu họ tên và khóa đang học để được hướng dẫn đúng lịch 25/10.",
      "Người chưa học tại trung tâm vẫn có thể hỏi về chương trình tin học và cách chuẩn bị. ILIS tư vấn theo nền tảng hiện tại, không gộp mọi người vào cùng một lộ trình.",
    ],
  },
  {
    slug: "khai-giang-lien-thong-luat-2026",
    category: "Tuyển sinh",
    kind: "Thông báo fanpage",
    date: "12.10.2026",
    title: "Lễ khai giảng lớp liên thông ngành Luật, khóa 01 năm 2026",
    excerpt:
      "ILIS thông báo lễ khai giảng lớp liên thông Trung cấp, Cao đẳng lên Đại học ngành Luật, khóa 01 năm 2026.",
    image: photo("photo-1523580494863-6f3031224c94"),
    body: [
      "Fanpage ILIS đăng thông báo lễ khai giảng lớp liên thông Trung cấp, Cao đẳng – Đại học ngành Luật, khóa 01 năm 2026. Thông báo nằm trong hoạt động tư vấn tuyển sinh mà trung tâm đang thực hiện với các bậc trung cấp, cao đẳng và đại học.",
      "ILIS là đối tác tuyển sinh cho các trường trên toàn quốc. Thông tin trường, điều kiện đầu vào, hồ sơ, hình thức học và học phí của lớp liên thông được cung cấp theo thông báo của trường tổ chức chương trình.",
      "Nếu bạn quan tâm ngành Luật theo hướng liên thông, hãy chuẩn bị sẵn bậc đang có (trung cấp hoặc cao đẳng), ngành đã học và thời gian có thể theo học. Những thông tin này giúp buổi trao đổi đi đúng việc cần hỏi.",
      "Gọi 0777 799 675 hoặc nhắn fanpage để nhận hướng dẫn hồ sơ của khóa 01/2026. Website không thay cho thông báo tuyển sinh chính thức của trường.",
    ],
  },
  {
    slug: "lo-trinh-hoc-tieng-anh",
    category: "Ngoại ngữ",
    kind: "Góc học tập",
    date: "Góc học tập",
    title: "Bắt đầu ôn tiếng Anh từ mục tiêu của chính bạn",
    excerpt:
      "Một lộ trình dễ theo bắt đầu từ việc biết mình học để làm gì và đang dùng được kỹ năng nào.",
    image: photo("photo-1456513080510-7bf3a84b82f8"),
    body: [
      "Trước khi chọn khóa, hãy ghi lại lý do bạn cần tiếng Anh: việc làm, học tiếp, giao tiếp hay một chứng chỉ cụ thể như VSTEP, IELTS, TOEIC. Mục tiêu càng rõ, phần cần ưu tiên càng dễ thấy.",
      "Sau đó nhìn lại kỹ năng đang dùng được. Có người đọc hiểu nhưng nghe hội thoại thì mất ý. Có người thuộc từ nhưng chưa nói thành câu. Những điểm này giúp buổi tư vấn bớt chung chung.",
      "Chia việc học thành việc nhỏ: nghe và ghi ý, đọc theo chủ đề, nói một phút, viết một đoạn ngắn. Nhịp đều thường bền hơn một lịch quá dày rồi bỏ giữa chừng.",
      "Khi tìm khóa tại ILIS, hãy nói rõ mục tiêu, lịch cá nhân và chương trình đang cân nhắc. Với khóa VSTEP có cam kết đầu ra, cần hiểu điều kiện áp dụng trước khi đăng ký. Hotline 0777 799 675.",
    ],
  },
  {
    slug: "ky-nang-tin-hoc",
    category: "Tin học",
    kind: "Góc học tập",
    date: "Góc học tập",
    title: "Những kỹ năng tin học giúp việc ít bị đứt quãng",
    excerpt:
      "Từ cách đặt tên tệp đến soạn tài liệu và bảng tính, nền vững giúp công việc bớt gián đoạn.",
    image: photo("photo-1498050108023-c5249f4df085"),
    body: [
      "Bắt đầu từ tệp và thư mục. Tên dễ hiểu, đúng chỗ lưu và một bản sao khi tài liệu quan trọng sẽ giúp bạn tìm lại nhanh lúc cần nộp hoặc gửi.",
      "Với văn bản, hãy dùng tiêu đề, đoạn và danh sách thay vì chỉnh từng dòng cho “đẹp mắt”. Tài liệu có cấu trúc dễ đọc hơn tài liệu chỉ canh lề thủ công.",
      "Với bảng tính, hiểu dữ liệu đang đo cái gì trước khi chọn hàm hay vẽ biểu đồ. Nhập liệu thống nhất và kiểm tra lại kết quả giúp giảm lỗi rất thường gặp ở việc văn phòng.",
      "Mỗi trang trình chiếu nên có một ý chính. Thực hành bằng đúng việc bạn đang làm sẽ nhớ lâu hơn bài mẫu xa lạ. ILIS tư vấn tin học cơ bản hoặc nâng cao theo nền của từng người.",
    ],
  },
  {
    slug: "tim-hieu-vb2-ngon-ngu-anh",
    category: "Tuyển sinh",
    kind: "Góc học tập",
    date: "Góc học tập",
    title: "Nên chuẩn bị gì trước khi hỏi về Văn bằng 2 Ngôn ngữ Anh",
    excerpt:
      "Nhu cầu, hình thức học và nền tảng sẵn có giúp buổi tư vấn VB2 đi vào thông tin cần thiết.",
    image: photo("photo-1523580494863-6f3031224c94"),
    body: [
      "Khi tìm hiểu Văn bằng 2 Ngôn ngữ Anh, hãy bắt đầu từ mục tiêu: phục vụ công việc, mở thêm chuyên môn hay học tiếp. Câu hỏi sẽ sát hơn nếu bạn biết mình cần chương trình để làm gì.",
      "Chuẩn bị quá trình học trước đây và quỹ thời gian có thể dành cho việc học. Không phải chương trình từ xa và chính quy nào cũng tổ chức giống nhau. ILIS tư vấn theo thông báo của từng trường.",
      "Những mục nên hỏi: trường tuyển sinh, điều kiện dự tuyển, hồ sơ, hình thức đào tạo, học phí và kế hoạch học. Nội dung cụ thể phải dựa trên thông báo của trường, không dựa trên lời đồn.",
      "ILIS nhận nhu cầu tư vấn VB2 và tuyển sinh đại học, cao đẳng, trung cấp qua hotline 0777 799 675. Khi chưa có thông báo chính thức, website chỉ giới thiệu dịch vụ và mời bạn trao đổi trực tiếp.",
    ],
  },
];

export const programOptions = [
  "VSTEP A2",
  "VSTEP B1",
  "VSTEP B2",
  "IELTS",
  "TOEIC",
  "Tiếng Anh giao tiếp",
  "Tiếng Anh thiếu nhi",
  "Tin học cơ bản",
  "Tin học nâng cao",
  "VB2 Ngôn ngữ Anh",
  "Tuyển sinh đại học / cao đẳng / trung cấp",
  "Chưa rõ, cần tư vấn",
];

export function getCourse(slug) {
  return courses.find((item) => item.slug === slug);
}

export function getArticle(slug) {
  return articles.find((item) => item.slug === slug);
}
