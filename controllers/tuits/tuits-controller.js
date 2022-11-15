import posts from "./tuits.js";
let tuits = posts;


const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.image = "nasa.png";
    newTuit.handle = "@nasa"
    newTuit.time = "2h"
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    const topic = req.query.topic
    if (topic) {
        const tuitsOfTopic = tuits.
            filter(t => t.topic === topic)
        res.json(tuitsOfTopic)
        return
    }
    res.json(tuits)
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
