import { createServer, Model } from "miragejs"


createServer({
    models: {
        albums: Model,
    },

    seeds(server) {
        server.create("album", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a album designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://alexandralanorias.github.io/images/banner.jpg", type: "simple" })
        server.create("album", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a album inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/adalbumced-react/react-router/beach-bum.png", type: "rugged" })
        server.create("album", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a album that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/adalbumced-react/react-router/reliable-red.png", type: "luxury" })
        server.create("album", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect album to travel in and experience. With a ceiling height of 2.1m, you can stand up in this album and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/adalbumced-react/react-router/dreamfinder.png", type: "simple" })
        server.create("album", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a album for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/adalbumced-react/react-router/the-cruiser.png", type: "luxury" })
        server.create("album", { id: "6", name: "Green Wonder", price: 70, description: "With this album, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/adalbumced-react/react-router/green-wonder.png", type: "rugged" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/albums", (schema, request) => {
            return schema.albums.all()
        })
        
        this.get("/albums/:id", (schema, request) => {
            const id = request.params.id
            return schema.albums.find(id)
        })
    }
})