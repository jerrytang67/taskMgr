export class _Array<T> extends Array<T> {
    static range(from: number, to: number, step: number): number[] {
        return Array.from(Array(~~((to - from) / step) + 1)).map(
            (v, k) => from + k * step
        );
    }
}