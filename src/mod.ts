import { type Element, element, renderToString } from "@shun-shobon/littlexml";
import type { episodetype, main } from "./types.ts";

export class createPodCast {
  #xml: Element = element("rss").attr("version", "2.0").attr("xmlns:itunes","http://www.itunes.com/dtds/podcast-1.0.dtd",).attr("xmlns:content", "http://purl.org/rss/1.0/modules/content/");
  #channel: Element = element("channel");
  #episode: Element[]|undefined
  #author?:string
  constructor(m: main) {
    this.#channel.child(element("atom:link").attr("href", m.itunesNewFeedUrl || "")
    .attr("rel", "self")
    .attr("type", "application/rss+xml"));
    this.#channel.child(element("link").text(m.link || ""));
    this.#channel.child(element("title").text(m.title));
    if (m.description.length > 4000) {
      throw new Error("Description exceeds the maximum length of 4000 bytes");
    }
    this.#channel.child(element("description").text(m.description));
    this.#channel.child(element("media:keywords").text(m.keywords));
    this.#channel.child(
      element("media:category").attr(
        "scheme",
        "http://www.itunes.com/dtds/podcast-1.0.dtd",
      ).text(m.category),
    );
    this.#channel.child(element("language").text(m.language));
    this.#channel.child(element("itunes:subtitle").text(m.description));
    this.#channel.child(element("itunes:author").text(m.author || ""));
    this.#author = m.author;
    this.#channel.child(element("itunes:summary").text(m.description));
    this.#channel.child(element("itunes:keywords").text(m.keywords));
    this.#channel.child(
      element("itunes:owner")
        .child(element("itunes:name").text(m.author || ""))
        .child(element("itunes:email").text(m.email)),
    );
    this.#channel.child(element("itunes:image").attr("href", m.imageurl));
    this.#channel.child(element("itunes:category").attr("text", m.category));
    this.#channel.child(element("itunes:explicit").text(m.explicit ? "yes" : "no"));
    if (m.copyright) {
      this.#channel.child(element("copyright").text(m.copyright));
    }
    if (m.itunesTitle) {
      this.#channel.child(element("itunes:title").text(m.itunesTitle));
    }
    if (m.itunesType) {
      this.#channel.child(element("itunes:type").text(m.itunesType));
    }
    if (m.itunesBlock) {
      this.#channel.child(element("itunes:block").text(m.itunesBlock));
    }
    if (m.itunesComplete) {
      this.#channel.child(element("itunes:complete").text(m.itunesComplete));
    }
  }
  public renderToString(): string {
    return renderToString(this.#xml.child(this.#channel), { indent: 2 });
  }
  public addEpisode(e: episodetype) {
    const i = element("item");
    i.child(element("title").text(e.title));
    i.child(element("guid").text(e.guid).attr("isPermaLink", "true"));
    i.child(
      element("enclosure")
        .attr("url", e.fileurl)
        .attr("length", e.filesize.toString())
        .attr("type", e.filetype)
    );
    if (e.siteurl) {
      i.child(element("link").text(e.siteurl));
    }
    if (e.pubdate) {
      i.child(element("pubDate").text(e.pubdate.toUTCString()));
    }
    if (e.description) {
      i.child(element("description").text(e.description));
      i.child(element("itunes:subtitle").text(e.description));
    }
    i.child(element("itunes:author").text(this.#author || e.author || ""));
    if (e.duration) {
      i.child(element("itunes:duration").text(e.duration));
    }
    i.child(element("itunes:explicit").text(e.explicit ? "yes" : "no"));
    if (e.imageurl) {
      i.child(element("media:thumbnail").attr("url", e.imageurl));
    }
    if (!this.#episode) {
      this.#episode = [];
    }
    this.#episode.push(i);
  }
}
