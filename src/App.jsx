import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  AboutPage,
  AdmissionsPage,
  ArticlePage,
  ComputingPage,
  ContactPage,
  CoursePage,
  LanguagePage,
  NewsPage,
  NotFoundPage,
} from "./pages/SitePages";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/khoa-hoc-ngoai-ngu" element={<LanguagePage />} />
          <Route path="/khoa-hoc-tin-hoc" element={<ComputingPage />} />
          <Route path="/tu-van-tuyen-sinh" element={<AdmissionsPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/bai-viet/:slug" element={<ArticlePage />} />
          <Route path="/khoa-hoc/:slug" element={<CoursePage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
