import Game from '../model/game.js'


export function addOnce(req, res) {
    Game
        .create(req.body)
        .then(newGame => {
            res.status(200).json(newGame);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function getAll(req, res) {
    Game
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function putAll(req, res) {
    Game.updateMany({}, { "onSale": true })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function patchOnce(req, res) {
    Game.findOneAndUpdate({ "name": req.params.name }, { "onSale": false })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function deleteOnce(req, res) {
    Game.remove({ "onSale": false })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function deleteByName(req, res) {
    Game.findOneAndRemove({ "name": req.params.name })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
      
}

export function getOnce(req, res) {
    res.status(200).json(games.find(val.name === req.params.name));
}
export function putOnce(req, res) {
    res.status(200).json({ message :"update !" ,name : req.params.name});
}


