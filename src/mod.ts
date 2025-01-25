import { type Element, element, renderToString } from "@shun-shobon/littlexml";
import type { main } from "./types.ts";

export class createPodCast {
  #xml: Element = element("rss").attr("version", "2.0").attr("xmlns:itunes","http://www.itunes.com/dtds/podcast-1.0.dtd",).attr("xmlns:content", "http://purl.org/rss/1.0/modules/content/");
  #channel: Element = element("channel");
  #episode: Element[]|undefined
  constructor(m: main) {
    this.#channel.child(element("atom:link").attr("href", m.feedurl)
    .attr("rel", "self")
    .attr("type", "application/rss+xml"))
    this.#channel.child(element("link").text(m.siteurl));
    this.#channel.child(element("title").text(m.title));
    this.#channel.child(element("description").text(m.description));
    this.#channel.child(element("media:keywords").text(m.keywords));
    this.#channel.child(
      element("media:category").attr(
        "scheme",
        "http://www.itunes.com/dtds/podcast-1.0.dtd",
      ).text("Technology"),
    );
    this.#channel.child(element("language").text(m.language));
    this.#channel.child(element("itunes:subtitle").text(m.description));
    this.#channel.child(element("itunes:author").text(m.author));
    this.#channel.child(element("itunes:summary").text(m.description));
    this.#channel.child(element("itunes:keywords").text(m.keywords));
    this.#channel.child(
      element("itunes:owner")
        .child(element("itunes:name").text(m.author))
        .child(element("itunes:email").text(m.email)),
    );
    this.#channel.child(element("itunes:image").attr("href", m.imageurl));
    this.#channel.child(element("itunes:category").attr("text", "Technology"));
    this.#channel.child(element("itunes:explicit").text("no"));
  }
  public renderToString(): string {
    return renderToString(this.#xml.child(this.#channel), { indent: 2 });
  }
  public addEpisode(){}
}
