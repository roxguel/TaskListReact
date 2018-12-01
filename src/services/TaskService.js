const tasks = require(`${__dirname}/../../data/tasks.json`);

export class TaskService {
    all() {
        return Promise.resolve(tasks);
    }
    id(id) {
        return Promise.resolve(tasks.filter(c => c.id === id)[0]);
    }
    create(data) {

    }
    update(id, data) {

    }
    delete(id) {

    }
}