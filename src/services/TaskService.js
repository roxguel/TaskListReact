const tasks = require(`${__dirname}/../../data/tasks.json`);

export class TaskService {
    all() {
        return Promise.resolve(tasks);
    }
    id(id) {
        return Promise.resolve(tasks.filter(c => c.id === id)[0]);
    }
    create(data) {
        return new Promise((res, rej) => {
            let lastId = 0;
            tasks.map(task => {
                if (task.id > lastId) lastId = task.id;
                return task;
            });
            lastId++;
            tasks.push({id: lastId, ...data});
            res(tasks);
        })
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