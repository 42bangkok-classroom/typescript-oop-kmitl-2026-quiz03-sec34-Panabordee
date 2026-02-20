export class Car {

    brand!: string;
    model!: string;

    start(): void {
        console.log('is starting...');
    }

    accelerate(): void {
        console.log('is accelerating...');
    }

    brake(): void {
        console.log('is braking...');
    }

    stop(): void {
        console.log('is stopping...');
    }
}