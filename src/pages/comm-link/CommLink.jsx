/**
 * Comm-Link Page - Drake Interplanetary
 *
 * Design Philosophy: Industrial Salvage Brutalism
 * - News/communications feed inspired by RSI Comm-Link
 * - Channel and type filters
 * - RSS feed subscription link
 * - Industrial red accent design
 */

import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import postsData from "../../data/comm-link-posts.json";
import "./CommLink.css";

const channelColors = {
  transmission: "#8b3a3a",
  engineering: "#3a6a8b",
  fleetops: "#3a8b4a",
  dispatch: "#8b6a3a",
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).toUpperCase();
}

function PostCard({ post, t }) {
  const channelColor = channelColors[post.channel] || "#8b3a3a";
  const channelLabel = t(`commLink.channels.${post.channel}`);
  const typeLabel = t(`commLink.types.${post.type}`);

  return (
    <article className="post-card">
      <div className="post-card-header">
        <span
          className="post-channel-badge"
          style={{ borderColor: channelColor, color: channelColor }}
        >
          {channelLabel}
        </span>
        <span className="post-type-badge">{typeLabel}</span>
      </div>

      <div className="post-card-thumbnail" style={{ borderColor: channelColor }}>
        <div
          className="post-thumbnail-inner"
          style={{ background: `linear-gradient(135deg, ${channelColor}22 0%, ${channelColor}0a 100%)` }}
        >
          <span className="post-id" style={{ color: channelColor }}>
            #{String(post.id).padStart(4, "0")}
          </span>
        </div>
      </div>

      <div className="post-card-body">
        <h3 className="post-title">{post.title}</h3>
        <time className="post-date" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>

      <div className="post-card-footer">
        <Link
          href={`/comm-link/${post.id}`}
          className="post-read-more"
          style={{ borderColor: channelColor, color: channelColor }}
          aria-label={t("commLink.readMore")}
        >
          {t("commLink.readMore")} ›
        </Link>
      </div>
    </article>
  );
}

export default function CommLink() {
  const { t } = useTranslation();
  const [activeChannel, setActiveChannel] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [sort, setSort] = useState("new");
  const [search, setSearch] = useState("");

  const channels = ["all", "transmission", "engineering", "fleetops", "dispatch"];
  const types = ["all", "post", "video", "announcement"];

  const filteredPosts = useMemo(() => {
    return postsData
      .filter((post) => {
        if (activeChannel !== "all" && post.channel !== activeChannel) return false;
        if (activeType !== "all" && post.type !== activeType) return false;
        if (search.trim()) {
          const q = search.toLowerCase();
          if (
            !post.title.toLowerCase().includes(q) &&
            !post.excerpt.toLowerCase().includes(q)
          )
            return false;
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sort === "new" ? dateB - dateA : dateA - dateB;
      });
  }, [activeChannel, activeType, sort, search]);

  return (
    <div className="commlink-page">
      <Header />

      <main className="commlink-main">
        {/* Page Header */}
        <section className="commlink-header">
          <div className="commlink-header-content">
            <div>
              <h1 className="commlink-title">{t("commLink.title")}</h1>
              <p className="commlink-subtitle">{t("commLink.subtitle")}</p>
            </div>
            <a
              href="/rss.xml"
              className="rss-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to RSS Feed"
            >
              <span className="rss-icon">&#9632;</span>
              {t("commLink.rssSubscribe")}
            </a>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="commlink-filters">
          <div className="filter-group">
            <label className="filter-label">{t("commLink.filterChannel")}</label>
            <div className="filter-buttons">
              {channels.map((ch) => (
                <button
                  key={ch}
                  className={`filter-btn ${activeChannel === ch ? "active" : ""}`}
                  onClick={() => setActiveChannel(ch)}
                >
                  {ch === "all" ? t("commLink.allChannels") : t(`commLink.channels.${ch}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-group filter-group-inline">
              <label className="filter-label">{t("commLink.filterType")}</label>
              <select
                className="filter-select"
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
              >
                <option value="all">{t("commLink.allTypes")}</option>
                {types.slice(1).map((tp) => (
                  <option key={tp} value={tp}>
                    {t(`commLink.types.${tp}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group filter-group-inline">
              <label className="filter-label">{t("commLink.filterSort")}</label>
              <select
                className="filter-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="new">{t("commLink.sortNew")}</option>
                <option value="old">{t("commLink.sortOld")}</option>
              </select>
            </div>

            <div className="filter-group filter-group-inline filter-search-group">
              <input
                type="text"
                className="filter-search"
                placeholder={t("commLink.filterSearch")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="commlink-count">
          <span>
            {t("commLink.showing")} <strong>{filteredPosts.length}</strong>{" "}
            {t("commLink.of")} <strong>{postsData.length}</strong>{" "}
            {t("commLink.transmissions")}
          </span>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="commlink-grid">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} t={t} />
            ))}
          </div>
        ) : (
          <div className="commlink-empty">
            <p className="empty-title">{t("commLink.noResults")}</p>
            <p className="empty-subtitle">{t("commLink.noResultsSubtitle")}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
