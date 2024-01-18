export const youtubeIdGenerator = video_link => {
    let url;
    try {
        url = new URL(video_link);
    } catch {
        return false
    }
    return url.searchParams.get("v");
}
