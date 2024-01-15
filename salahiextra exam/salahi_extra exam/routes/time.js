var express = require('express');
var router = express.Router();
let timeData = [
    { id: 1, proId: 6, title: 't1', startTime: '02:10', endTime: '11:00', date: "1380/09/09"},
    { id: 2, proId: 13, title: 't2', startTime: '8:55', endTime: '12:20', date: "1399/14/25" },
    { id: 3, proId: 4, title: 't3', startTime: '18:30', endTime: '13:45', date: "1401/04/18" },
    { id: 4, proId: 6, title: 't4', startTime: '12:20', endTime: '14:40', date: "1400/07/01" }
];

router.get('/', (req, res, next) => {
    let requestedProId = req.query.proId;
    let filteredTimeData = [];

    timeData.filter((element) => {
        if (element.proId == requestedProId) {
            filteredTimeData.push(element)
        }
    });

    res.send(filteredTimeData);
});

router.post('/', (req, res, index) => {
    req.body.id = timeData.length + 1;
    timeData.push(req.body);

    res.send(req.body);
});

router.put('/', (req, res, index) => {
    let idToUpdate = req.query.id;

    for (let i = 0; i < timeData.length; i++) {
        const element = timeData[i];

        if (element.id == idToUpdate) {
            timeData[i] = req.body;
            break;
        }
    }

    res.send(req.body);
});

module.exports = router;
