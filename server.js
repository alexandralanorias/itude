import { createServer, Model } from "miragejs"


createServer({
    models: {
        albums: Model,
    },

    seeds(server) {
        server.create("album", { id: "1", name: "Bartók: Concerto for Orchestra", price: 9, description: "Karina Canellakis offers the first fruit of her exclusive Pentatone collaboration with a recording of Bartók’s 4 Orchestral Pieces and Concerto for Orchestra, together with the Netherlands Radio Philharmonic Orchestra, of which she is the Chief Conductor. The 4 Orchestral Pieces have a strong affinity with the stage works Duke Bluebeard’s Castle and The Wooden Prince, conceived in the same period. The Concerto for Orchestra is one of Bartók's final works, full of folk tunes, and utterly colourful and virtuosic for all the instruments. As such, it’s an ideal piece to showcase the congeniality between the Netherlands Radio Philharmonic Orchestra and its star Chief Conductor.", imageUrl: "https://alexandralanorias.github.io/images/itude/canellakis-bartok-concerto.jpg", type: "new" })
        server.create("album", { id: "2", name: "Rachmaninov: Piano Concerto No.3 / Tchaikovsky: Piano Concerto No.1", price: 8, description: "This is madness in action. Martha Argerich's Rachmaninoff Third is the fastest and most physically exciting you'll ever hear. She's recorded live, and the balances are a little strange as a result. You can also tell that Riccardo Chailly and his orchestra are having a hell of a time trying to keep up with her, while anticipating what she's about to do next— but so what? This is as close as you can come to an experience of spontaneous combustion, and survive. The Tchaikovsky is, if possible, even wilder, with quite a few missed notes. But with an artist like Argerich, you simply can't judge the performance one note at a time. So go ahead: live dangerously.", imageUrl: "https://alexandralanorias.github.io/images/itude/argerich-rach3-tchaik1", type: "trending" })
        server.create("album", { id: "3", name: "Tchaikovsky: Symphonies Nos.4, 5 & 6 \"Pathétique\"", price: 7, description: "There has never been a more legendary set of Tchaikovsky's last three symphonies than these 1960 interpretations recorded in stereo by Evgeny Mravinsky on tour with the Leningrad Philharmonic Orchestra in London and Vienna.", imageUrl: "https://alexandralanorias.github.io/images/itude/tchaikovsky-symphonies-nos4-5-6-pathetique-0028944742329", type: "classic" })
        server.create("album", { id: "4", name: "The Chopin Project : Complete Chamber Music", price: 8, description: "\"The Chopin Project\" is French-Belgian cellist Camille Thomas' most ambitious project to date, comprising a trio of albums that pay tribute to Chopin's favourite instrument.", imageUrl: "https://alexandralanorias.github.io/images/itude/ia5gzs-thechopinp-preview-m3", type: "new" })
        server.create("album", { id: "5", name: "Mozart: Sinfonia concertante K.364; Concertone K.190", price: 7, description: "The Sinfonia Concertante for Violin, Viola and Orchestra in E♭ major, K. 364 (320d), was written by Wolfgang Amadeus Mozart. At the time of its composition in 1779, Mozart was on a tour of Europe that included Mannheim and Paris. He had been experimenting with the sinfonia concertante genre and this work can be considered his most successful realization in this cross-over genre between symphony and concerto.", imageUrl: "https://alexandralanorias.github.io/images/itude/perlman-mozart-sinfonia-concertante-k364", type: "classic" })
        server.create("album", { id: "6", name: "Jurowski conducts Stravinsky, Vol. 2", price: 9, description: "This recording is the second of a highly-rated three-volume Stravinsky series recorded by the London Philharmonic Orchestra with then Principal Conductor (now Conductor Emeritus) Vladimir Jurowski. This series documents Jurowski's year-long Stravinsky festival with the LPO in 2018, 'Changing Faces'. The festival surveyed Stravinsky's works, programed chronologically alongside his influences and those he influenced. The Fairy's Kiss is a work close to Jurowski's heart. The LPO had performed this work 17 times under his baton by the time of this recording, and the partnership between the conductor and the Orchestra culminates in this performance. It is rare to find a live performance recording of The Sleeping Beauty excerpts. The most recent commercial recording of the Pas de deux was 2012. Stravinsky was in the audience, as an 8-year old, for the premiere performance of Tchaikovsky's The Sleeping Beauty, a performance that was to have a profound effect on him as a composer. Stravinsky's music in the hands of Jurowski delivers live in concert a focus and clarity that is beautifully preserved and realised on these recordings.", imageUrl: "https://alexandralanorias.github.io/images/itude/jurowski-stravinsky-vol2", type: "trending" })
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