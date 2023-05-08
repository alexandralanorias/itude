1. Your /host/albums/:id needs to be the parent route of the other
nested routes /host/albums/:id/pricing and /host/albums/:id/photos.
The detailed info view should show up at /host/albums/:id; in other
words, it should be the default view that shows up near the bottom
when someone clicks on a album from /host/albums.

(SCROLL DOWN TO THE NEXT HINT IF NEEDED)

















































2. You'll need to add an Outlet to the HostAlbumDetail.jsx file, since 
that's where the nested views will be displayed. The "Details" view,
which is automatically displayed when the user reaches /host/albums/:id,
will be the `index` route, a child of the /host/albums/:id parent route.