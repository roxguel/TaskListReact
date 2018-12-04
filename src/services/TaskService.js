const tasks = require(`${__dirname}/../../data/tasks.json`);

export class TaskService {
    all() {
        return Promise.resolve(tasks);
    }
    id(id) {
        return Promise.resolve(tasks.filter(c => c.id === id)[0]);
    }
    create(data) {
        tasks.push(data);
    }
    update(id, data) {
        return Promise.resolve(tasks.map(task => {
            if (task.id === id) {
                return data;
            }
            return task;
        }));
    }
    delete(id) {

    }
}