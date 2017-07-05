
interface ILine {    
  start: number;
  length: number;
}

class Line implements ILine {

  start: number;
  length: number;

  constructor(line: ILine) {
    this.start = line.start;
    this.length = line.length;
  }

  get end(): number {
    return this.start + this.length;
  }

  isBetween(x: number): boolean {
    return x >= this.start && x <= this.end;
  }

  isOverlapping(line: Line): boolean {
    if (this.end < line.start || this.start > line.end) {
      return false;
    }

    return true;
  }

  getOverlap(line: ILine): number {
    const otherLine = new Line(line);

    if (!this.isOverlapping(otherLine)) {
      return 0;
    }

    return Math.min(this.end, otherLine.end) - Math.max(this.start, otherLine.start);
  }

  getDistanceFromTop(x): number {
    if (!this.isBetween(x)) {
      return Number.MAX_VALUE;
    }

    return x - this.start;
  }
}

export { ILine, Line };
