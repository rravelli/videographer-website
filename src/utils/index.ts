export function embedYoutubeLink(
  link: string,
  options: { autoplay: boolean; controls: boolean; autohide: boolean; mute: boolean; loop: boolean },
) {
  const search = new URL(link).searchParams;
  const id = new URLSearchParams(search).get("v");

  return `https://youtube.com/embed/?playlist=${id}&autoplay=${Number(options.autoplay)}&controls=${Number(
    options.controls,
  )}&showinfo=0&autohide=${Number(options.autohide)}&mute=${Number(options.mute)}&loop=${Number(options.loop)}`;
}
