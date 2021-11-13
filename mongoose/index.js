const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/B29')
        .then(() => console.log("Load db"))
        .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now()
    },
    price: Number,
    pages: Number,
    ISBN: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

bookSchema.virtual('fullName').get(function(){
                            return `${this.name} - ${this.author}`
                        })
                        .set(function(dataV){
                            const name = dataV.substring(0, dataV.indexOf(' - '));
                            const author = dataV.substring(dataV.indexOf(' - ') + 3);
                            this.set({ name, author })
                        })

const CommentSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    text: String,
    likes: Number
})

const Book = mongoose.model('Book', bookSchema);
const Comment = mongoose.model('Comment', CommentSchema);

const saveBook = async () => {
    const book = new Book({
        tags: ["tag8", "tag12"],
        price: 5000,
        pages: 224,
        ISBN: "ISBN 579-3-16-148410-0"
    })

    book.fullName = "Crimen y castigo - Fiódor Dostoyevski"

    const resBook = await book.save();
    console.log("resBook: ", resBook);
    return resBook;
}

async function saveCommentController(idUrl, text){
    // URI - POST: /api/book/:id/comment
    // controller 
    const book = await Book.findById(idUrl);

    if(!book){
        return new Error ("Book not found");
    }

    const resultComment = new Comment({
        book: idUrl,
        text,
        likes: 200
    });

    const resComment = await resultComment.save();

    book.comments.push(resComment._id);
    await book.save();
    
    console.log("Final controller save comment");
}

const getBootFullName = async () => {
    const book = await Book.findById('6190253340dd62515b8f95bb');

    console.log(book.fullName);
}

// getBootFullName();

// saveBook();
// saveCommentController('6190253340dd62515b8f95bb', "El libro es una maravilla, lo mejor del mundo mundial");

const getBooks = async () =>{
    //eq (equal)
    //ne (no equal)
    //gt (mayor que - greater than)
    //gte (mayor o igual que )
    //lt (menor que - less than)
    //lte (menor o igual que)
    //in (esta en)
    //non (no esta en- not in)
    //or
    //and
    const query = { author: { $in: ['J. R. R. Tolkien', 'Hernan Alvarez'] } , price: { $lt: 100000, $gt: 50000 } }
    
    let querySort = { name: -1 };
    // ENDPOINT: /api/books?sort=-1
    // if(req.query.sort){
    //     querySort.name = req.query.sort
    // }
    
    const books = await Book
                            .find()
                            .or([{author: 'J. R. R. Tolkien'}, {name: "Orgullo y prejuicio"}])
                            .and(query)
                            // .select({ name: 1, author: 1, tags: 1, price: 1})
                            .sort(querySort);
    console.log(books);
}

getBooks();