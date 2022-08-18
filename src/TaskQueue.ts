export class TaskQueue {
    concurrency: number;
    running: number;
    queue: Array<() => Promise<any>>;

    constructor(concurrency: number) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    runTask(task: () => Promise<any>): Promise<any> {
        return new Promise((resolve, reject) => {
            this.queue.push(() => {
                return task().then(resolve, reject);
            });

            setTimeout(this.next.bind(this), 0);
        });
    }

    next(): void {
        while (this.running < this.concurrency && this.queue.length) {
            const task = this.queue.shift();

            if (!task) {
                continue;
            }

            task().finally(() => {
                this.running--;
                this.next();
            });

            this.running++;
        }
    }
}
