const gm = require('gm');
const { parentPort } = require('worker_threads');
const (workerData, parentPort) = require('worker_threads')

gm(workerData.source)
    .monochrome()
    .write(workerData.destination, (error) => {
        if (error) throw error;

        parentPort.postMessage({monochrome: true})
    });