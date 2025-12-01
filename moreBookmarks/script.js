// ~~ More Bookmarks by Pugsby ~~
// Based on bookmarks.js
chrome.bookmarks.getTree().then((allBookmarks) => {
    bookmarks = allBookmarks[0].children[0].children
    const needed = Math.max(8, Math.ceil(bookmarks.length / 8) * 8)
    while (bookmarkBar.children.length < needed) {
        const btn = document.createElement("button")
        btn.className = "bookmark"
        bookmarkBar.appendChild(btn)
    }
    for (let i = 0; i < bookmarks.length; i++) {
        const current = bookmarkBar.children[i]
        current.title = bookmarks[i].title
        current.style.backgroundImage =
            `url("https://www.google.com/s2/favicons?domain=${bookmarks[i].url}&sz=64")`
        current.onclick = () => document.location.href = bookmarks[i].url
    }
    bookmarkBar.style.maxHeight = "226px";
    bookmarkBar.style.overflowY = "auto";
    bookmarkBar.style.height = "fit-content"
    bookmarkBar.style.width = "calc(100% + 28px)"
})
