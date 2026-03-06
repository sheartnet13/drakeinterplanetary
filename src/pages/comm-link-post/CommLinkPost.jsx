/**
 * CommLinkPost Page - Drake Interplanetary
 *
 * Individual post detail page.
 * Loads post data from comm-link-posts.json by numeric ID (URL param).
 * Shows full article content with channel badge, date, and back navigation.
 */

import { useParams, Link } from "wouter";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import postsData from "../../data/comm-link-posts.json";
import "./CommLinkPost.css";

const channelColors = {
  transmission: "#8b3a3a",
  engineering: "#3a6a8b",
  fleetops: "#3a8b4a",
  dispatch: "#8b6a3a",
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}

export default function CommLinkPost() {
  const { t } = useTranslation();
  const { id } = useParams();

  const post = postsData.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="post-page">
        <Header />
        <main className="post-main">
          <div className="post-not-found">
            <p className="post-not-found-code">404</p>
            <p className="post-not-found-msg">{t("commLink.postNotFound")}</p>
            <Link href="/comm-link" className="post-back-link">
              ← {t("commLink.backToFeed")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const channelColor = channelColors[post.channel] || "#8b3a3a";
  const channelLabel = t(`commLink.channels.${post.channel}`);
  const typeLabel = t(`commLink.types.${post.type}`);

  return (
    <div className="post-page">
      <Header />

      <main className="post-main">
        {/* Back link */}
        <nav className="post-breadcrumb">
          <Link href="/comm-link" className="post-back-link">
            ← {t("commLink.backToFeed")}
          </Link>
        </nav>

        <article className="post-article">
          {/* Meta bar */}
          <div className="post-meta">
            <span
              className="post-channel-tag"
              style={{ borderColor: channelColor, color: channelColor }}
            >
              {channelLabel}
            </span>
            <span className="post-type-tag">{typeLabel}</span>
            <time className="post-meta-date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>

          {/* Title */}
          <h1 className="post-heading">{post.title}</h1>

          {/* Divider */}
          <div
            className="post-divider"
            style={{ background: channelColor }}
          />

          {/* Lead paragraph (excerpt) */}
          <p className="post-lead">{post.excerpt}</p>

          {/* Full content */}
          <div className="post-body">
            {Array.isArray(post.content) &&
              post.content.map((paragraph, index) => (
                <p key={index} className="post-paragraph">
                  {paragraph}
                </p>
              ))}
          </div>
        </article>

        {/* Footer nav */}
        <div className="post-footer-nav">
          <Link href="/comm-link" className="post-back-link">
            ← {t("commLink.backToFeed")}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
